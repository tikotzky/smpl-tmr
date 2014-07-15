import Ember from 'ember';
import minutesToSeconds from '../computed/minutesToSeconds';

export default Ember.Controller.extend({
	queryParams: ['start', 'warn', 'error'],
	isEditing: false,
	
	timerStatus: function(){
		var timer = this.get('timer'),
			countdown = this.get('countdown');
		if (timer) { return 'running'; }
		if (countdown) { return 'paused'; }
		return 'ready';
	}.property('timer', 'countdown'),
	isRunning: Ember.computed.equal('timerStatus', 'running'),
	isPaused: Ember.computed.equal('timerStatus', 'paused'),
	isReady: Ember.computed.equal('timerStatus', 'ready'),

	start: '60',
	startSeconds: minutesToSeconds('start'),
	warn: '5',
	warnSeconds: minutesToSeconds('warn'),
	error: '0',
	errorSeconds: minutesToSeconds('error'),
	
	countdown: null,
	timer: null,

	status: function(){
		var warnSeconds		= this.get('warnSeconds'),
			errorSeconds	= this.get('errorSeconds'),
			countdown		= this.get('countdown');
		if (countdown !== null && errorSeconds >= countdown ) { return 'error'; }
		if (countdown !== null && warnSeconds >= countdown ) { return 'warn'; }
		return 'ok';
	}.property('warnSeconds', 'errorSeconds', 'countdown'),

	displayCountdown: function(){
		var countdown = this.get('countdown'),
			startSeconds = this.get('startSeconds');

		return countdown !== null ? Math.abs(countdown) : startSeconds;
	}.property('countdown','start'),

	startTimer: function(){
		var self = this;
		var timer = setInterval(function(){
			self.decrementProperty('countdown', 1);
		},1000);
		this.set('timer', timer);
	},

	stopTimer: function(){
		var timer = this.get('timer');
		clearTimeout(timer);
		this.set('timer', null);
	},

	actions: {
		toggleEdit: function(){
			this.toggleProperty('isEditing');
		},
		toggleFullscreen : function(){
			if (document.webkitIsFullScreen || document.mozFullScreen) {
				var efs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen;
				console.log('efs',efs);
				efs.call(document);
			} else {
				var el = document.documentElement;
				var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
				console.log('rfs',rfs);
				rfs.call(el);
			}
		},
		start: function(){
			this.set('countdown', this.get('startSeconds'));
			this.startTimer();
		},
		pause: function(){
			this.stopTimer();
		},
		resume: function(){
			this.startTimer();
		},
		reset: function(){
			this.stopTimer();
			this.setProperties({
				timer: null,
				countdown: null
			});
		}
	}
});

import Ember from 'ember';

export default function(path){
	return Ember.computed(path, function(){
		return this.get(path) * 60;
	});
}
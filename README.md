# SmplTmr

SmplTmr is a Simple Timer application.

### Usage 

It starts counting down with a green background. When it reaches the warn time the background turns yellow, and when it reaches the error time the background starts alternating between red/blue.

Click [here](http://www.smpltmr.com/?start=.1&warn=.05) for a demo that counts down for 6 seconds, warns at 3 seconds and errors at 0 seconds.

### What is this for?

It was built for two purposes  

1. Because we needed a full screen timer for a meetup that I run
1. To demo a working ember-cli application

### Learning from this app

This app demonstrates a couple of different parts of building an ember  application

* custom component which is included via an ember-cli addon ([ember-cli-big-text](https://github.com/tikotzky/ember-cli-big-text))
* custom computed property macro (`/app/computed/minutesToSeconds.js`)
* custom handlebars helper (`/app/helpers/format-time.js`)
* query-params (`/app/controllers/index.js`)

## Installation

* `git clone` this repository
* `npm install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://iamstef.net/ember-cli/](http://iamstef.net/ember-cli/).

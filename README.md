### Wrapper for Twitter Text utility

##### "A JavaScript utility that provides text processing routines for Tweets. (...) The library provides autolinking and extraction for URLs, usernames, lists, and hashtags."

Usage [Server]:
````
Meteor.twitterText.autoLink('@juliancwirko #MeteorJS lorem ipsum')
````
Effect:
````
@<a class="tweet-url username" href="https://twitter.com/juliancwirko" data-screen-name="juliancwirko" rel="nofollow">juliancwirko</a> <a href="https://twitter.com/#!/search?q=%23MeteorJS" title="#MeteorJS" class="tweet-url hashtag" rel="nofollow">#MeteorJS</a> lorem ipsum
````

##### Read more:
[twitter-text](https://www.npmjs.com/package/twitter-text)

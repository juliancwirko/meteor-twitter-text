Package.describe({
    summary: 'Twitter text utility for Meteor',
    version: "1.0.0",
    name: 'juliancwirko:twitter-text',
    git: 'https://github.com/juliancwirko/meteor-twitter-text.git'
});

Npm.depends({
    'twitter-text': '1.12.0'
});

Package.onUse(function (api) {
    api.addFiles([
        'twitter-text-init.js',
    ], ['server']);
});
Package.describe({
    summary: 'Twitter text utility for Meteor',
    version: "0.0.1",
    name: 'juliancwirko:twitter-text',
    git: 'https://github.com/juliancwirko/meteor-twitter-text.git'
});

Npm.depends({
    'twitter-text': '1.9.4'
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.2');
    api.addFiles([
        'twitter-text-init.js',
    ], ['server']);
});
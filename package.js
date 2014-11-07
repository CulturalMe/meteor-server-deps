Package.describe({
  name: 'edgee:meteor-server-deps',
  summary: "Enable server-side reactivity",
  version: '0.1.2',
  git: 'https://github.com/CulturalMe/meteor-server-deps'
});

Package.onUse(function(api) {
  api.use('coffeescript', ['server']);
  api.use('tracker', ['server']);
  api.use('underscore', ['server']);

  api.addFiles('lib/server-deps.coffee', ['server']);
  
  api.export('Deps', 'server');
});

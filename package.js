Package.describe({
  name: 'edgee:meteor-server-deps',
  summary: "Enable server-side reactivity",
  version: '0.1.2',
  git: 'https://github.com/CulturalMe/meteor-server-deps'
});

Package.onUse(function(api) {
  api.use('coffeescript@1.0.4', ['server']);
  api.use('tracker@1.0.3', ['server']);
  api.use('underscore@1.0.1', ['server']);

  api.addFiles('lib/server-deps.coffee', ['server']);
  
  api.export('Deps', 'server');
});

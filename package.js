Package.describe({
  summary: "Enable server-side reactivity"
});

Package.onUse(function(api) {
  api.use('coffeescript', ['server']);
  api.use('tracker', ['server']);
  api.use('underscore', ['server']);

  api.addFiles('lib/server-deps.coffee', ['server']);
});

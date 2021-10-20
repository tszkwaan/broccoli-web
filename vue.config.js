module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: (config) => {
    config.resolve.set('symlinks', false);
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },
};

(function() {

  require.config({
    baseUrl: './dist',
    paths: {
      'my_test': '../spec/my_test',
      'mocha': '../spec/mocha/mocha',
      'chai': '../spec/mocha/chai',
    },
    shim: {
      mocha: {
        init: function() {
          this.mocha.setup('bdd');
          return this.mocha;
        },
      }
    },
  });
  define(['mocha'], function(mocha) {
    require(['my_test'], function() {
      var runner = mocha.run();
    });
  });
})();
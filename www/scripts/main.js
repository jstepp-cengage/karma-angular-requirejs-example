require.config({

    // alias libraries paths
    paths: {
        'angular': 'components/angular/angular'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // file that starts the application
    deps: ['./bootstrap']
});

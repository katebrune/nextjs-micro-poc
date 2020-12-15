const {
    withModuleFederation,
    MergeRuntime,
} = require('@module-federation/nextjs-mf')
const path = require('path');
const { config } = require('process');

module.exports = {
    webpack: (config, options) => {
        const {buildId, dev, isServer, defaultLoaders, webpack} = options;
        const mfConf = {
            name: 'app3',
            library: {type: config.output.libraryTarget, name: 'app3'},
            filename: 'static/runtime/remoteEntry.js',
            remotes: {},
            exposes: {
                './page2': './components/page2'
            },
            shared: []
        }

        withModuleFederation(config, options, mfConf)

        config.plugins.push(new MergeRuntime())

        if(!isServer) {
            config.output.publicPath = 'http://localhost:3002/_next/'
        }

        return config
    }
}
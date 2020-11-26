/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    
    // ['@snowpack/plugin-webpack',
    // {
    //   extendConfig: (config) => {
    //     config['entry'] = {
    //       Apps: './_dist_/index.js',
    //       // OCS: './_dist_/pages/Ocs.js',
    //       // Sequencers: './_dist_/pages/Sequencer.js',
    //     }
    //     config['output'] = {
    //       filename: '[name].bundle.js'
    //     }
    //     return config;
    //   },
    // }]
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};

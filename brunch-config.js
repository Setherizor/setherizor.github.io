module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'css/style.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  paths: {
    public: './docs'
  },
  plugins: {
    babel: {
      presets: ['es2015']
    },
    copyfilemon: {
      'css':['./node_modules/vuetify/dist/vuetify.min.css'],
    }
  }
}

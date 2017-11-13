module.exports = {
  overrides: {
    production: {
      optimize: true,
      sourceMaps: false
    }
  },
  paths: {
    public: '../'
  },
  npm: {
    styles: { vuetify: ['dist/vuetify.min.css'] }
  },
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    templates: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: {
        'css/style.css': /\.css$/,
        'css/vendor.css': /^node_modules/,
        'css/resume.css': /\.scss$/
      }
    }
  },
  plugins: {
    sass: {
      sourceMapEmbed: true,
      outFile: 'ss.css'
    },
    uglify: {
      mangle: true,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    },
  }
}

module.exports = {
  paths: {
    public: '../'
  },
  sourceMaps: false,
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
        'css/style.css': [
          /\.css$/,
          /\.styl$/,
        ],
        'css/resume.css': /\.scss$/
      }
    }
  },
  plugins: {
    copyfilemon: {
      'css': ['./node_modules/vuetify/dist/vuetify.min.css']
    },
    stylus: {
      includeCss: true
    },
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

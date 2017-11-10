module.exports = {
  files: {
    javascripts: {
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
  paths: {
    public: '../'
  },
  plugins: {
    babel: {
      presets: ['es2015']
    },
    copyfilemon: {
      'css': ['./node_modules/vuetify/dist/vuetify.min.css']
    },
    stylus: {
      includeCss: true
    },
    sass: {
      sourceMapEmbed: true,
      outFile: 'ss.css'
    }
    // },
    // options: {
    //   includePaths: ['node_modules/foundation/scss']
    // }
  }
}

(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("App.vue", function(exports, require, module) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("fade-enter-active,\n.fade-leave-active {\n  transition-property: opacity;\n  transition-duration: 0.55s;\n}\n.fade-enter-active {\n  transition-delay: 0.55s;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "App"
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('keep-alive',[_c('router-view')],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e015f16", __vue__options__)
  } else {
    hotAPI.reload("data-v-2e015f16", __vue__options__)
  }
})()}
});

;require.register("components/customFooter.vue", function(exports, require, module) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("footer {\r\n  font-family: \"Raleway\";\r\n  letter-spacing: 10px;\r\n  line-height: 2.5em;\r\n  text-align: center;\r\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "CustomFooter",
  data: function data() {
    return {
      text: this.$store.state.author + " - &copy; " + new Date().getFullYear()
    };
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-footer',{attrs:{"app":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"white--text text-xs-center",domProps:{"innerHTML":_vm._s(_vm.text)}})])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f24f058e", __vue__options__)
  } else {
    hotAPI.reload("data-v-f24f058e", __vue__options__)
  }
})()}
});

;require.register("components/funbutton.vue", function(exports, require, module) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".fun-btn {\r\n  /* change bg color to get different hues    */\r\n  background-color: salmon;\r\n  color: white;\r\n  padding: 2em 3em;\r\n  border: none;\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n  border-radius: 5px;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  outline: none;\r\n  -webkit-align-self: center;\r\n  -ms-flex-item-align: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n.fun-btn:hover {\r\n  -webkit-animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;\r\n  animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;\r\n}\r\n.fun-btn1 {\r\n  /* change bg color to get different hues    */\r\n  background-color: salmon;\r\n  color: white;\r\n  padding: 2em 3em;\r\n  border: none;\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n  border-radius: 5px;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  outline: none;\r\n  -webkit-align-self: center;\r\n  -ms-flex-item-align: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n.fun-btn1:hover {\r\n  -webkit-animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;\r\n  animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;\r\n}\r\n.start-fun {\r\n  background-color: #fff !important;\r\n  /* change color of button text when fun is started   */\r\n  color: salmon !important;\r\n}\r\n\r\n/* pulsating effect on button */\r\n@-webkit-keyframes grow {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  14% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n  28% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  42% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n  70% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes grow {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  14% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n  28% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  42% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n  70% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = require("vuex");

exports.default = {
  name: "FunButton",
  computed: (0, _vuex.mapState)(["funColors"])
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"md6":"","sm10":"","xs12":"","offset-md3":"","offset-sm1":"","offset-xs0":""}},[_c('button',{class:{ 'start-fun': _vm.funColors, 'fun-btn': true },on:{"click":function($event){_vm.$store.commit('toggleFun')}}},[_vm._v("Press for Fun!")])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-114cd918", __vue__options__)
  } else {
    hotAPI.reload("data-v-114cd918", __vue__options__)
  }
})()}
});

;require.register("components/hero.vue", function(exports, require, module) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#box {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  justify-content: center;\r\n  width: 80%;\r\n  max-width: 650px;\r\n  height: 120px;\r\n  color: white;\r\n  font-family: \"Raleway\";\r\n  font-size: 2.5rem;\r\n}\r\n.gradient-border {\r\n  --borderWidth: 6px;\r\n  background: #1d1f20;\r\n  position: relative;\r\n  border-radius: var(--borderWidth);\r\n}\r\n.gradient-border:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: calc(-1 * var(--borderWidth));\r\n  left: calc(-1 * var(--borderWidth));\r\n  height: calc(100% + var(--borderWidth) * 2);\r\n  width: calc(100% + var(--borderWidth) * 2);\r\n  background: linear-gradient(\r\n    60deg,\r\n    #f79533,\r\n    #f37055,\r\n    #ef4e7b,\r\n    #a166ab,\r\n    #5073b8,\r\n    #1098ad,\r\n    #07b39b,\r\n    #6fba82\r\n  );\r\n  border-radius: calc(2 * var(--borderWidth));\r\n  z-index: -1;\r\n  animation: animatedgradient 3s ease alternate infinite;\r\n  background-size: 300% 300%;\r\n}\r\n@keyframes animatedgradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = require("vuex");

exports.default = {
  name: "Hero",
  computed: (0, _vuex.mapState)(["funColors", "author"])
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-parallax',{attrs:{"src":"assets/hero.jpeg","height":"300"}},[_c('v-layout',{staticClass:"white--text",attrs:{"column":"","align-center":"","justify-center":""}},[_c('div',{class:{ 'gradient-border': true, 'bg-animate-color': _vm.funColors},attrs:{"id":"box"}},[_vm._v("\n          "+_vm._s(_vm.author)+"\n      ")])])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c94c6c7", __vue__options__)
  } else {
    hotAPI.reload("data-v-0c94c6c7", __vue__options__)
  }
})()}
});

;require.register("components/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.terminal = exports.projectsHolder = exports.projectList = exports.info = exports.hero = exports.funbutton = exports.customFooter = undefined;

var _customFooter = require('./customFooter');

var _customFooter2 = _interopRequireDefault(_customFooter);

var _funbutton = require('./funbutton');

var _funbutton2 = _interopRequireDefault(_funbutton);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _projectList = require('./projectList');

var _projectList2 = _interopRequireDefault(_projectList);

var _projectsHolder = require('./projectsHolder');

var _projectsHolder2 = _interopRequireDefault(_projectsHolder);

var _terminal = require('./terminal');

var _terminal2 = _interopRequireDefault(_terminal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.customFooter = _customFooter2.default;
exports.funbutton = _funbutton2.default;
exports.hero = _hero2.default;
exports.info = _info2.default;
exports.projectList = _projectList2.default;
exports.projectsHolder = _projectsHolder2.default;
exports.terminal = _terminal2.default;

});

require.register("components/info.vue", function(exports, require, module) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("blockquote {\r\n  margin: 10px 0;\r\n  font-size: 2em;\r\n  letter-spacing: 1px;\r\n  text-align: center;\r\n  font-family: \"Raleway\";\r\n  line-height: 1.3;\r\n  font-style: italic;\r\n  background: repeating-linear-gradient(45deg, #ff1c42 0%, #9036ff 100%);\r\n  font-weight: 900;\r\n  border-left: 5px solid var(--secondary);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "PersonalInfo",
  data: function data() {
    return {
      text: {
        favquote: "The Only Day Wasted, Is One In Which You Make Nobody Smile",
        intro: "I’m one of those people that is obsessed with making things better. I see every failure as a chance to learn and grow. When I look outside, I see the world full of opportunities, technology, and beauty! I actively look for problems (but I am not a pessimist), this is because I’m a doer, a maker, and a helper! I was born in Knoxville Tennesee, on a brisk fall day (as my parents recall to me). After that, I was raised in Arkansas and Georgia, and am now loving North Carolina! I spent my youth biking with friends, walking on beaches, and adventuring. From a young age, I have been facinated by computers and their fantastical ability to enable and connect people. I have spent my time since, shooting pictures, designing websites, mocking up interfaces, taking on projects one after another, managing a website for a famiy business, gaming, and further exploring how I can enable and connect people in this amazing world.",
        quote1: "Born in Tennessee, raised in Arkansas and Georgia, and am now loving North Carolina!",
        quote2: "The Internet has given me the keys to the 'whole crazy world'",
        outro: "The Internet has connected me to people who share my passions and understand my missions. It has given me the keys to the whole crazy world and all I have needed is the desire to discover. At the core of everything I’ve done, and continue to do, is communication of all forms, technology, a will to help others, and diligence."
      }
    };
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"md6":"","sm10":"","xs12":"","offset-md3":"","offset-sm1":"","offset-xs0":""}},[_c('v-card',{staticClass:"elevation-0 transparent"},[_c('v-card-text',{staticClass:"subheading"},[_c('blockquote',[_vm._v(_vm._s(_vm.text.favquote))]),_vm._v(" "),_c('div',[_c('p',[_vm._v(_vm._s(_vm.text.intro))])]),_vm._v(" "),_c('blockquote',[_vm._v(_vm._s(_vm.text.quote1))]),_vm._v(" "),_c('v-card-media',{attrs:{"src":"assets/UwharrieClouds.jpg","height":"200px"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('p',[_vm._v(_vm._s(_vm.text.outro))])]),_vm._v(" "),_c('blockquote',[_vm._v(_vm._s(_vm.text.quote2))])],1)],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c13e17b", __vue__options__)
  } else {
    hotAPI.reload("data-v-3c13e17b", __vue__options__)
  }
})()}
});

;require.register("components/projectList.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require("../utils");

exports.default = {
  name: "projectList",
  data: function data() {
    return {
      cards: _utils.bucket
    };
  },

  methods: {
    randColor: function randColor() {
      var colors = ["blue-grey darken-2", "cyan darken-2", "purple", "pink", "red lighten-1", "deep-purple lighten-2", "light-blue lighten-2", "green accent-3", "brown lighten-2"];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},_vm._l((_vm.cards),function(c){return _c('v-flex',{key:c.id,attrs:{"xs12":""}},[_c('v-card',{staticClass:"white--text",attrs:{"color":_vm.randColor()}},[_c('v-card-title',{attrs:{"primary-title":""}},[_c('div',{staticClass:"headline",staticStyle:{"width":"100%"},domProps:{"innerHTML":_vm._s(c.name)}}),_vm._v(" "),_c('span',{domProps:{"innerHTML":_vm._s(c.desc)}})]),_vm._v(" "),_c('v-card-actions',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},_vm._l((c.urls),function(url,index){return _c('v-btn',{key:index,attrs:{"color":"primary","href":url}},[_vm._v("\n                  "+_vm._s(url.substr(url.lastIndexOf("/") + 1) || "Project")+"\n              ")])}))],1)],1)],1)],1)}))}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4259c39a", __vue__options__)
  } else {
    hotAPI.reload("data-v-4259c39a", __vue__options__)
  }
})()}
});

;require.register("components/projectsHolder.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projectList = require("./projectList.vue");

var _projectList2 = _interopRequireDefault(_projectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ProjectsHolder",
  components: { projectList: _projectList2.default }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"md6":"","sm10":"","xs12":"","offset-md3":"","offset-sm1":"","offset-xs0":""}},[_c('v-card',[_c('v-toolbar',[_c('v-toolbar-title',[_vm._v("Projects")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"to":"/","icon":""}},[_c('v-icon',[_vm._v("reply")])],1)],1),_vm._v(" "),_c('v-container',{staticStyle:{"min-height":"0"},attrs:{"fluid":"","grid-list-lg":""}},[_c('projectList')],1)],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0efafd5a", __vue__options__)
  } else {
    hotAPI.reload("data-v-0efafd5a", __vue__options__)
  }
})()}
});

;require.register("components/terminal.vue", function(exports, require, module) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".terminal {\r\n  text-align: left;\r\n  margin: 0 auto;\r\n  box-shadow: 0 0.25rem 0.5rem #12181e;\r\n  border-radius: 12px;\r\n}\r\n.bar {\r\n  background: #191919;\r\n  height: 36px;\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n.btns,\r\n.btns::before,\r\n.btns::after {\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 100%;\r\n  display: block;\r\n}\r\n.btns {\r\n  background: #f6b73e;\r\n  position: relative;\r\n  margin-left: 38px;\r\n  top: 12px;\r\n}\r\n.btns::before,\r\n.btns::after {\r\n  content: \" \";\r\n  position: absolute;\r\n}\r\n.btns::before {\r\n  background: #f55551;\r\n  margin-left: -20px;\r\n}\r\n.btns::after {\r\n  background: #32c146;\r\n  margin-left: 20px;\r\n}\r\n.tbody {\r\n  width: 100%;\r\n  height: 100% !important;\r\n  background: #232323;\r\n  display: inline-block;\r\n  height: 10rem;\r\n  padding: 18px;\r\n  border-radius: 0 0 12px 12px;\r\n}\r\n.tbody .pulse {\r\n  -webkit-animation: pulse 1s ease-in-out infinite;\r\n  -moz-animation: pulse 1s ease-in-out infinite;\r\n  animation: pulse 1s ease-in-out infinite;\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@-moz-keyframes pulse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes pulse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n.command {\r\n  color: #32c146;\r\n}\r\n.comment {\r\n  opacity: 0.7;\r\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "terminal",
  data: function data() {
    return {
      favQuote: '"I have no special talent. I am only passionately curious." - Albert Einstein',
      doDaily: "alias daily= 'sudo me -r * && echo \"You're amazing.\"",
      remember: 'echo "Never Give Up" > consciousness.js'
    };
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"md6":"","sm10":"","xs12":"","offset-md3":"","offset-sm1":"","offset-xs0":""}},[_c('div',{staticClass:"terminal"},[_c('div',{staticClass:"bar"},[_c('div',{staticClass:"btns"})]),_vm._v(" "),_c('div',{staticClass:"tbody"},[_vm._v(" λ "),_c('span',{staticClass:"command"},[_vm._v("echo $FAVQUOTE")]),_vm._v(" "),_c('div',{staticClass:"comment"},[_vm._v(" "+_vm._s(_vm.favQuote)+" ")]),_vm._v(" λ "),_c('span',{staticClass:"command"},[_vm._v(_vm._s(_vm.doDaily))]),_c('br'),_vm._v(" λ "),_c('span',{staticClass:"command"},[_vm._v(_vm._s(_vm.remember))]),_c('br'),_vm._v(" "),_c('div',{staticClass:"comment"},[_vm._v(" File Write Successful ")]),_vm._v(" "),_c('div',{staticClass:"prompt"},[_vm._v("λ "),_c('span',{staticClass:"command"},[_vm._v("What's next...")]),_vm._v(" "),_c('span',{staticClass:"pulse"},[_vm._v("_")])])])])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20e6546e", __vue__options__)
  } else {
    hotAPI.reload("data-v-20e6546e", __vue__options__)
  }
})()}
});

;require.register("main.js", function(exports, require, module) {
'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _utils = require('./utils');

require('vueify/lib/insert-css');

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var _vuetify = require('vuetify');

var _vuetify2 = _interopRequireDefault(_vuetify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// required for .vue file <style> tags
_vue2.default.use(_vuetify2.default, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});

_vue2.default.config.productionTip = true;

var V = new _vue2.default({
  store: _utils.store,
  router: _utils.router,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');

});

require.register("utils/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bucket = exports.store = exports.router = undefined;

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _trello = require('./trello');

var _trello2 = _interopRequireDefault(_trello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.router = _router2.default;
exports.store = _store2.default;
exports.bucket = _trello2.default;

});

require.register("utils/router.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _views = require('../views');

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/', component: _views.homepage,
    children: [{
      path: '',
      name: 'Terminal',
      component: _components.terminal
    }, {
      path: '/p',
      name: 'Projects',
      component: _components.projectsHolder
    }, {
      path: '/fun',
      name: 'FunButton',
      component: _components.funbutton
    }]
  }, {
    path: '/whoami',
    name: 'WhoAmI',
    component: _views.whoami
  }, {
    path: '/resume',
    name: 'Resume',
    component: _views.resume
  }, {
    path: '/hi',
    name: 'Hello',
    component: _components.Hello
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    var noScroll = ['FunButton', 'Projects', 'Terminal'];
    if (noScroll.includes(to.name)) {
      return false;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

});

require.register("utils/store.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  state: {
    dark: true,
    funColors: false,
    author: 'Seth Parrish',
    buttons: [{ name: 'Projects', url: '/#/p' }, { name: 'Who Am I', url: '/#/whoami' }, { name: 'Hire Me', url: 'https://www.fiverr.com/sethparrish' }, { name: 'Resume', url: '/#/resume' }, { name: 'Fun Button', url: '/#/fun' }]
  },
  mutations: {
    toggleFun: function toggleFun(state) {
      return state.funColors = !state.funColors;
    }
  }
});

});

require.register("utils/trello.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bucket = [];
var TRELLO_API = 'cda33ce6abce02250524b0a019e111a7';
var TRELLO_TOKEN = '9030fe39125e16ef5cda171ac179edcc59c768c0b930cf76d369a4ea2797cd77';
var PROJECT_LIST_ID = '59722a00877dfde4b1feaa70';
var BOARD_ID = 'JwRH1hMD';

/**
 * Performs a General HTTP request which calls callback with JSON
 * @param {Function} callback
 * @param {String} url
 */
var generalRequest = function generalRequest(callback, url) {
  fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    return callback(data);
  });
};
/**
 * Makes request to Trello asking for a given card's attachments
 * HAVE NOT TESTES WITH NON URL ATTACHMENTS
 * @param {Card} card
 */
var getAttachments = function getAttachments(card) {
  var url = 'https://api.trello.com/1/cards/' + card.id + '/attachments?&fields=url,&key=' + TRELLO_API + '&token=' + TRELLO_TOKEN;
  var getUrls = function getUrls(x) {
    return x.map(function (attachment) {
      return attachment.url;
    });
  };
  generalRequest(function (response) {
    card.urls = getUrls(response);
    bucket.push(card);
  }, url);
};
/**
 * Gets attachments for each card in cards
 * also end up appending urls to the card object
 * @param {Array} cards
 */
var useThem = function useThem(cards) {
  cards.map(function (card) {
    return getAttachments(card);
  });
};
/**
 * Makes request to TRELLO for all cards,
 * filters out all not in desired list,
 * then calls useThem with said cards
 */
var trelloJSONImport = function trelloJSONImport() {
  var url = 'https://api.trello.com/1/boards/' + BOARD_ID + '/cards?fields=name,url,idList,desc,dateLastActivity,?&key=' + TRELLO_API + '&token=' + TRELLO_TOKEN;
  generalRequest(function (response) {
    var cards = response.filter(function (card) {
      return card.idList === PROJECT_LIST_ID;
    });
    useThem(cards);
  }, url);
};
trelloJSONImport();

exports.default = bucket;

});

require.register("views/homepage.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = require("vuex");

var _components = require("../components");

exports.default = {
  name: "Homepage",
  computed: (0, _vuex.mapState)(["dark", "buttons", "funColors"]),
  components: { hero: _components.hero, info: _components.info, customFooter: _components.customFooter }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":_vm.dark,"light":!_vm.dark}},[_c('hero'),_vm._v(" "),_c('v-content',{class:{ page: _vm.page, 'color-bg-start': _vm.funColors, 'bg-animate-color': _vm.funColors }},[_c('info'),_vm._v(" "),_c('v-container',{staticClass:"text-xs-center",attrs:{"fluid":""}},[_c('transition',{attrs:{"name":"fade"}},[_c('router-view')],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_vm._l((_vm.buttons),function(b){return _c('v-btn',{key:b.index,attrs:{"color":"primary","dark":"","round":"","large":"","href":b.url,"target":"_self","rel":"noopener"}},[_vm._v("\n            "+_vm._s(b.name)+" \n          ")])})],2),_vm._v(" "),_c('customFooter')],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78cb80aa", __vue__options__)
  } else {
    hotAPI.rerender("data-v-78cb80aa", __vue__options__)
  }
})()}
});

;require.register("views/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resume = exports.whoami = exports.homepage = undefined;

var _homepage = require('./homepage');

var _homepage2 = _interopRequireDefault(_homepage);

var _whoami = require('./whoami');

var _whoami2 = _interopRequireDefault(_whoami);

var _resume = require('./resume');

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.homepage = _homepage2.default;
exports.whoami = _whoami2.default;
exports.resume = _resume2.default;

});

require.register("views/resume.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "Resume",
  data: function data() {
    return {
      experience: [{
        name: "Parrish Devs",
        time: "Jan 2016 - Present",
        title: "Freelance Web Designer & Developer",
        desc: "I work as a freelancer for business & personal related projects. I also, group open source contributions under this experience"
      }, {
        name: "The Grand Overland",
        time: "Aug 2014 - Present",
        title: "Technical Director / Tour Guide / Land Manager",
        desc: "<ul><li>Created / Maintained off-highway trails, with the purpose of training civilian and military personnel in the advanced usage of Off-Highway Vehicles.</li><br><li>Personally, developed website and online presence for the needs of the business. </li><br><li>Learned to operate heavy machinery, drive advanced trails, service vehicles, prepare equipment / courses, and organize entertaining, enjoyable, and educational events.</li></ul>"
      }, {
        name: "Student Digital Team",
        time: "Aug 2015 - June 2016",
        title: "Project Manager / Team Member",
        desc: "<ul><li>Worked with a team on a county-wide project to properly represent the ideals and people of Randolph Early College High School to incoming students from the local and surrounding counties.</li><br><li>Was responsible for pitching the project to the school board, and county superintendent, recruiting team members, preparing film sets, ensuring production quality remained high, managing the project’s budget, delegating appropriate tasks, and final publishing.</li><br><li>Learned critical teamwork skills, the production process, the importance of following a very strict schedule, and being able to motivate others to do.</li></ul>"
      }, {
        name: "AIM – Arts In Ministry",
        time: "January 2010 – August 2016",
        title: "Team Supervisor / Member / Teacher",
        desc: "<ul><li>Organized events, and performances for venues from local nursing homes and churches, to the stage at Downtown Disney in Orlando, FL.</li><br><li>Choreographed performances and served as director for the team’s productions.</li><br><li>Learned valuable managerial skills in client relations, interpersonal communication, time management, motivation, scheduling, inspiration, and event planning.</li></ul>"
      }]
    };
  },

  mounted: function mounted() {
    function select(s) {
      return document.querySelector(s);
    }
    function randomBetween(min, max) {
      var number = Math.floor(Math.random() * (max - min + 1) + min);
      return number !== 0 ? number : 0.5;
    }
    var tl = new TimelineMax();
    for (var i = 0; i < 10; i++) {
      var t = TweenMax.to(select(".bubble" + i), randomBetween(1, 1.5), {
        x: randomBetween(12, 15) * randomBetween(-1, 1),
        y: randomBetween(12, 15) * randomBetween(-1, 1),
        repeat: -1,
        repeatDelay: randomBetween(0.2, 0.5),
        yoyo: true,
        ease: Elastic.easeOut.config(1, 0.5)
      });
      tl.add(t, (i + 1) / 0.6);
    }
    tl.seek(50);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume-wrapper"},[_c('link',{attrs:{"rel":"stylesheet","href":"css/reset.min.css"}}),_vm._v(" "),_c('link',{attrs:{"rel":"stylesheet","href":"css/resume.css"}}),_vm._v(" "),_c('section',{staticClass:"profile section-padding"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"picture-resume-wrapper"},[_c('div',{staticClass:"picture-resume"},[_vm._m(0),_vm._v(" "),_c('svg',{attrs:{"version":"1.1","viewBox":"0 0 350 350"}},[_c('defs',[_c('filter',{attrs:{"id":"goo"}},[_c('feGaussianBlur',{attrs:{"in":"SourceGraphic","stdDeviation":"8","result":"blur"}}),_vm._v(" "),_c('feColorMatrix',{attrs:{"in":"blur","mode":"matrix","values":"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9","result":"cm"}})],1)]),_vm._v(" "),_c('g',{attrs:{"filter":"url(#goo)"}},[_c('circle',{staticClass:"st0",attrs:{"id":"main_circle","cx":"171.5","cy":"175.6","r":"130"}}),_vm._v(" "),_c('circle',{staticClass:"bubble0 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble1 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble2 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble3 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble4 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble5 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble6 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble7 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble8 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble9 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}}),_vm._v(" "),_c('circle',{staticClass:"bubble10 st1",attrs:{"id":"circle","cx":"171.5","cy":"175.6","r":"122.7"}})])])]),_vm._v(" "),_c('div',{staticClass:"clearfix"})]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"clearfix"}),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5)])]),_vm._v(" "),_c('section',{staticClass:"experience section-padding"},[_c('div',{staticClass:"container",attrs:{"id":"experience"}},[_c('h3',{staticClass:"experience-title"},[_vm._v("Experience")]),_vm._v(" "),_vm._l((_vm.experience),function(i,index){return _c('div',{key:index,staticClass:"experience-wrapper"},[_c('div',{staticClass:"company-wrapper clearfix"},[_c('div',{staticClass:"experience-title"},[_vm._v(_vm._s(i.name))]),_vm._v(" "),_c('div',{staticClass:"time"},[_vm._v(_vm._s(i.time))])]),_vm._v(" "),_c('div',{staticClass:"job-wrapper clearfix"},[_c('div',{staticClass:"experience-title"},[_vm._v(_vm._s(i.title))]),_vm._v(" "),_c('div',{staticClass:"company-description",attrs:{"html":i.desc}},[_c('p')])])])})],2),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8)])])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('img',{attrs:{"src":"https://preview.ibb.co/jcq15w/DmQmOpt.jpg","alt":"Seth"}})])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"name-wrapper"},[_c('h1',[_vm._v("Seth\n          "),_c('br'),_vm._v("Parrish")])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-info clearfix"},[_c('ul',{staticClass:"list-titles"},[_c('li',[_vm._v("Phone")]),_vm._v(" "),_c('li',[_vm._v("Email")]),_vm._v(" "),_c('li',[_vm._v("Website")]),_vm._v(" "),_c('li',[_vm._v("Location")])]),_vm._v(" "),_c('ul',{staticClass:"list-content "},[_c('li',[_vm._v("+336 302 7922")]),_vm._v(" "),_c('li',[_vm._v("shparri2@ncsu.edu")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/"}},[_vm._v("setherizor.github.io")])]),_vm._v(" "),_c('li',[_vm._v("Raleigh, NC")])])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-presentation"},[_c('h3',{staticClass:"bold"},[_vm._v("Education:")]),_vm._v(" "),_c('div',[_vm._v("\n          Bachelors Of Computer Science & Engineerring from North Carolina State University (Almost)\n        ")])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-presentation"},[_c('p',[_c('span',{staticClass:"bold"},[_vm._v("Me,")]),_vm._v(" a Driven Student, Lifelong Learner, avid Coder, and Overall Tech Literate Guy.")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v(" My objective is to obtain a technology related internship or position to help an organization to advance and succeed,\n          while enhancing my personal knowledge and development as a professional.")])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-social clearfix"},[_c('ul',{staticClass:"list-titles"},[_c('li',[_vm._v("Twitter")]),_vm._v(" "),_c('li',[_vm._v("Codepen")])]),_vm._v(" "),_c('ul',{staticClass:"list-content"},[_c('li',[_c('a',{attrs:{"href":"https://twitter.com/Setherizor"}},[_vm._v("@Setherizor")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://codepen.io/Setherizor"}},[_vm._v("Setherizor")])])])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-wrapper clearfix"},[_c('h3',{staticClass:"section-title"},[_vm._v("Skills")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-percentage"},[_vm._v("HTML / HTML5")]),_vm._v(" "),_c('li',{staticClass:"skill-percentage"},[_vm._v("CSS / CSS3")]),_vm._v(" "),_c('li',{staticClass:"skill-percentage"},[_vm._v("Javascript")]),_vm._v(" "),_c('li',{staticClass:"skill-percentage"},[_vm._v("Node / Express / Socket.io")]),_vm._v(" "),_c('li',{staticClass:"skill-percentage"},[_vm._v("Responsive Design")]),_vm._v(" "),_c('li',{staticClass:"skill-percentage"},[_vm._v("Java")])])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-wrapper clearfix"},[_c('h3',{staticClass:"section-title"},[_vm._v("Hobbies")]),_vm._v(" "),_c('p',[_vm._v("In my spare time, I am coding personal projects, games, libraries, helping friends, spending time with my family,\n        or 4x4 Offroading")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("My passion is knowledge, and my tool is my Determination, my goal is "),_c('a',{attrs:{"href":"http://www.realclearscience.com/blog/2015/05/x_reasons_why_42_may_actually_be_the_answer_to_life_the_universe_and_everything.html","target":"_blank"}},[_vm._v("\"42\"")])])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-wrapper clearfix"},[_c('h3',{staticClass:"section-title"},[_vm._v("Honors")]),_vm._v(" "),_c('p',[_vm._v("NCSU IT Club, NCSU Photography Club, Randolph County Teen Court Attorney, A ’Quaint Place Cabins Web Marketing &\n        Property Manager, Technician at GHS Distributors, Student Leadership Academy at RCC, Phi Theta Kappa Honor Society,\n        various community service activities associated with Clean Sweep, and Habitat for Humanity.")])])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c81274ac", __vue__options__)
  } else {
    hotAPI.reload("data-v-c81274ac", __vue__options__)
  }
})()}
});

;require.register("views/whoami.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var websites = [{
  name: "Facebook",
  url: "facebook.com/TheSethParrish",
  icon: "fa-facebook"
}, {
  name: "Twitter",
  url: "twitter.com/Setherizor",
  icon: "fa-twitter"
}, {
  name: "Medium",
  url: "medium.com/@Setherizor",
  icon: "fa-medium"
}, {
  name: "Snapchat",
  url: "www.snapchat.com/add/Setherizor",
  icon: "fa-snapchat-ghost"
}, {
  name: "Instagram",
  url: "www.instagram.com/Setherizor/",
  icon: "fa-instagram"
}, {
  name: "Linkedin",
  url: "www.linkedin.com/in/thesethparrish/",
  icon: "fa-linkedin"
}, {
  name: "Google Plus",
  url: "plus.google.com/+SethParrishTime",
  icon: "fa-google-plus"
}, {
  name: "Codepen",
  url: "codepen.io/Setherizor",
  icon: "fa-codepen"
}, {
  name: "Github",
  url: "github.com/Setherizor",
  icon: "fa-github"
}, {
  name: "Devrant",
  url: "www.devrant.io/users/Setherizor",
  icon: "fa-code"
}, {
  name: "Personal Site",
  url: "/#/",
  icon: "fa-desktop"
}];

exports.default = {
  name: "WhoAmI",
  data: function data() {
    return {
      sites: websites
    };
  },

  methods: {
    getIcon: function getIcon(idx) {
      return "fa " + this.sites[idx].icon + " fa-3x";
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"parent"}},[_c('link',{attrs:{"rel":"stylesheet","type":"text/css","href":"css/wai.css"}}),_vm._v(" "),_c('link',{attrs:{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),_vm._v(" "),_vm._l((_vm.sites),function(s,index){return _c('a',{key:index,class:_vm.getIcon(index),attrs:{"href":s.url,"rel":"noopener","id":"child"}})})],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cea51bc", __vue__options__)
  } else {
    hotAPI.reload("data-v-5cea51bc", __vue__options__)
  }
})()}
});

;require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


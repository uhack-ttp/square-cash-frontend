require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_https__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_https__);






var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import and Set Nuxt.js options
var config = __webpack_require__(6);
config.dev = !("production" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

var httpServer = __WEBPACK_IMPORTED_MODULE_3_http___default.a.createServer(app);
httpServer.listen({ host: host, port: port });

try {
  var privateKey = __WEBPACK_IMPORTED_MODULE_2_fs___default.a.readFileSync('/shared/cert/nginx-private.key', 'utf8');
  var certificate = __WEBPACK_IMPORTED_MODULE_2_fs___default.a.readFileSync('/shared/cert/nginx-certificate.crt', 'utf8');

  var credentials = {
    key: privateKey,
    cert: certificate,
    requestCert: false,
    rejectUnauthorized: false
  };
  var httpsServer = __WEBPACK_IMPORTED_MODULE_4_https___default.a.createServer(credentials, app);

  httpsServer.listen({ host: host, port: 443 });
} catch (e) {}

console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff9c40' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#ff9c40'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa', '@nuxtjs/font-awesome', '@nuxtjs/axios', '@nuxtjs/proxy'],

  css: ['~assets/sass/app.scss', 'tachyons/css/tachyons.min.css'],

  plugins: ['@/plugins/vue-qriously.js', '@/plugins/vue-qrcode-reader.js'],

  proxy: [['/api', { target: 'http://172.20.10.4:3000', pathRewrite: { '^/api': '/api/v1' } }]],

  axios: {
    baseURL: '/api',
    credentials: false,
    requestInterceptor: function requestInterceptor(config) {
      config.headers.common['Authorization'] = 'Token 2ceeb09f87f545569895c51f31e99b4c';

      return config;
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map
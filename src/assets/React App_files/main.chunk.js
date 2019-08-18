(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss':
      /*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/App.scss ***!
  \************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Module
        exports.push([
          module.i,
          "* {\n  font-family: 'Times New Roman', 'Open Sans', Verdana, sans-serif;\n  margin: 0;\n  padding: 0; }\n\n.main-page {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 150px);\n  background-color: #f6c3ff; }\n  .main-page .task {\n    height: 150px;\n    color: black;\n    width: 100%;\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    justify-content: center; }\n    .main-page .task-title {\n      font-size: 3rem; }\n    .main-page .task-description {\n      font-size: 2rem; }\n  .main-page__gif {\n    width: 100%;\n    height: 100%; }\n  .main-page__scroll-hint {\n    width: 150px;\n    position: absolute;\n    top: 95%;\n    left: 50%;\n    margin-left: -75px;\n    animation: moveDown infinite linear 1.5s; }\n\n.description-page {\n  padding: 10% 10% 1% 10%;\n  position: relative; }\n  .description-page .full-width {\n    width: 100%;\n    height: auto;\n    margin-bottom: 15px; }\n  .description-page .auto-width {\n    max-width: 100%;\n    margin-bottom: 15px; }\n  .description-page .block {\n    margin: 10% auto;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .description-page .block .threeToRow {\n      height: auto;\n      width: 33%; }\n    .description-page .block .oneToRow {\n      height: auto;\n      width: 50%; }\n    .description-page .block__img {\n      max-width: 50%;\n      height: auto; }\n\n.footer {\n  text-align: center;\n  margin-bottom: 3%; }\n\n.pink {\n  background-color: #f6c3ff; }\n\n._flex-row-reverse {\n  flex-direction: row-reverse; }\n\n@keyframes moveDown {\n  0% {\n    transform: translateY(0); }\n  50% {\n    transform: translateY(35px); }\n  100% {\n    transform: translateY(0); } }\n",
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css':
      /*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Module
        exports.push([
          module.i,
          'body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './src/App.js':
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _assets_main2_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./assets/main2.gif */ './src/assets/main2.gif'
        );
        /* harmony import */ var _assets_main2_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_main2_gif__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _assets_video_MP4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./assets/video.MP4 */ './src/assets/video.MP4'
        );
        /* harmony import */ var _assets_video_MP4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_video_MP4__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _assets_mouse_hint_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./assets/mouse-hint.png */ './src/assets/mouse-hint.png'
        );
        /* harmony import */ var _assets_mouse_hint_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_mouse_hint_png__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _assets_shakalBorder_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./assets/shakalBorder.jpg */ './src/assets/shakalBorder.jpg'
        );
        /* harmony import */ var _assets_shakalBorder_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_shakalBorder_jpg__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _assets_vitalyaBorder_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./assets/vitalyaBorder.jpg */ './src/assets/vitalyaBorder.jpg'
        );
        /* harmony import */ var _assets_vitalyaBorder_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_vitalyaBorder_jpg__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _assets_maskHead_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./assets/maskHead.jpg */ './src/assets/maskHead.jpg'
        );
        /* harmony import */ var _assets_maskHead_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_maskHead_jpg__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _assets_google1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./assets/google1.jpg */ './src/assets/google1.jpg'
        );
        /* harmony import */ var _assets_google1_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_google1_jpg__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _assets_google2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./assets/google2.jpg */ './src/assets/google2.jpg'
        );
        /* harmony import */ var _assets_google2_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_google2_jpg__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _assets_ctrlc_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./assets/ctrlc.jpg */ './src/assets/ctrlc.jpg'
        );
        /* harmony import */ var _assets_ctrlc_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_ctrlc_jpg__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _assets_head_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./assets/head.gif */ './src/assets/head.gif'
        );
        /* harmony import */ var _assets_head_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_head_gif__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var _assets_head1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./assets/head1.png */ './src/assets/head1.png'
        );
        /* harmony import */ var _assets_head1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_head1_png__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var _assets_head2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./assets/head2.png */ './src/assets/head2.png'
        );
        /* harmony import */ var _assets_head2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_head2_png__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var _assets_head3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./assets/head3.png */ './src/assets/head3.png'
        );
        /* harmony import */ var _assets_head3_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_head3_png__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var _assets_rogalik_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./assets/rogalik.png */ './src/assets/rogalik.png'
        );
        /* harmony import */ var _assets_rogalik_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_rogalik_png__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var _assets_rogalicName_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./assets/rogalicName.png */ './src/assets/rogalicName.png'
        );
        /* harmony import */ var _assets_rogalicName_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_rogalicName_png__WEBPACK_IMPORTED_MODULE_15__
        );
        /* harmony import */ var _assets_rogalikHead_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./assets/rogalikHead.png */ './src/assets/rogalikHead.png'
        );
        /* harmony import */ var _assets_rogalikHead_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_rogalikHead_png__WEBPACK_IMPORTED_MODULE_16__
        );
        /* harmony import */ var _assets_logoFinal_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./assets/logoFinal.png */ './src/assets/logoFinal.png'
        );
        /* harmony import */ var _assets_logoFinal_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_logoFinal_png__WEBPACK_IMPORTED_MODULE_17__
        );
        /* harmony import */ var _assets_hui_gif__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./assets/hui.gif */ './src/assets/hui.gif'
        );
        /* harmony import */ var _assets_hui_gif__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_hui_gif__WEBPACK_IMPORTED_MODULE_18__
        );
        /* harmony import */ var _assets_vert1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./assets/vert1.png */ './src/assets/vert1.png'
        );
        /* harmony import */ var _assets_vert1_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_vert1_png__WEBPACK_IMPORTED_MODULE_19__
        );
        /* harmony import */ var _assets_vert2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./assets/vert2.png */ './src/assets/vert2.png'
        );
        /* harmony import */ var _assets_vert2_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_vert2_png__WEBPACK_IMPORTED_MODULE_20__
        );
        /* harmony import */ var _assets_vert3_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./assets/vert3.png */ './src/assets/vert3.png'
        );
        /* harmony import */ var _assets_vert3_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_vert3_png__WEBPACK_IMPORTED_MODULE_21__
        );
        /* harmony import */ var _assets_tshirt_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./assets/tshirt.jpg */ './src/assets/tshirt.jpg'
        );
        /* harmony import */ var _assets_tshirt_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_tshirt_jpg__WEBPACK_IMPORTED_MODULE_22__
        );
        /* harmony import */ var _assets_cup_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./assets/cup.jpg */ './src/assets/cup.jpg'
        );
        /* harmony import */ var _assets_cup_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_cup_jpg__WEBPACK_IMPORTED_MODULE_23__
        );
        /* harmony import */ var _assets_trusi_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./assets/trusi.jpg */ './src/assets/trusi.jpg'
        );
        /* harmony import */ var _assets_trusi_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_trusi_jpg__WEBPACK_IMPORTED_MODULE_24__
        );
        /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./App.scss */ './src/App.scss'
        );
        /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(
          _App_scss__WEBPACK_IMPORTED_MODULE_25__
        );
        var _jsxFileName = '/home/misha/Documents/vit-birthday/src/App.js';

        function App() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'App',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'main-page',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'task',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'task-title',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  '\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0412\u0438\u0442\u0430\u043B\u0438\u043A\u0443 \u0420\u043E\u0433\u0430\u043B\u0438\u043A\u0443'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'task-description',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: this
                  },
                  '\u0417\u0430\u0434\u0430\u0447\u0430. \u0417\u0430\u0448\u0430\u043A\u0430\u043B\u0438\u0442\u044C \u043B\u043E\u0433\u043E\u0442\u0438\u043F.'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'video',
                {
                  controls: true,
                  autoPlay: true,
                  className: 'main-page__gif',
                  alt: 'video',
                  width: '320',
                  height: '240',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'source',
                  {
                    src:
                      _assets_video_MP4__WEBPACK_IMPORTED_MODULE_2___default.a,
                    type: 'video/mp4',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src:
                    _assets_mouse_hint_png__WEBPACK_IMPORTED_MODULE_3___default.a,
                  className: 'main-page__scroll-hint',
                  alt: 'logo',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'description-page',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src:
                    _assets_google1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
                  className: 'full-width',
                  alt: 'logo',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_head_gif__WEBPACK_IMPORTED_MODULE_10___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_shakalBorder_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_vitalyaBorder_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_maskHead_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_vert1_png__WEBPACK_IMPORTED_MODULE_19___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_vert2_png__WEBPACK_IMPORTED_MODULE_20___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_vert3_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src:
                    _assets_google2_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
                  className: 'full-width',
                  alt: 'logo',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_ctrlc_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_head1_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_head2_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_head3_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_hui_gif__WEBPACK_IMPORTED_MODULE_18___default.a,
                    className: 'auto-width',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_rogalik_png__WEBPACK_IMPORTED_MODULE_14___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_rogalicName_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_rogalikHead_png__WEBPACK_IMPORTED_MODULE_16___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_tshirt_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_trusi_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    },
                    __self: this
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_cup_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
                    className: 'threeToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    },
                    __self: this
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'block',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_logoFinal_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                    className: 'oneToRow',
                    alt: 'logo',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    },
                    __self: this
                  }
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'footer',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                  },
                  __self: this
                },
                '\xA9 2018\u20132019 \u0421\u0442\u0443\u0434\u0438\u044F \u0422\u0438\u043C\u044B \u0425\u0430\u0431\u0438\u0431\u0443\u043B\u0438\u043D\u0430'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                  },
                  __self: this
                },
                'mailbox@timaXabib.ru'
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__['default'] = App;

        /***/
      },

    /***/ './src/App.scss':
      /*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss',
            function() {
              var newContent = __webpack_require__(
                /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss'
              );

              if (typeof newContent === 'string')
                newContent = [[module.i, newContent, '']];

              var locals = (function(a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  'Aborting CSS HMR due to changed css-modules locals.'
                );

              update(newContent);
            }
          );

          module.hot.dispose(function() {
            update();
          });
        }

        /***/
      },

    /***/ './src/assets/ctrlc.jpg':
      /*!******************************!*\
  !*** ./src/assets/ctrlc.jpg ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/ctrlc.261816ea.jpg';

        /***/
      },

    /***/ './src/assets/cup.jpg':
      /*!****************************!*\
  !*** ./src/assets/cup.jpg ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/cup.74a96889.jpg';

        /***/
      },

    /***/ './src/assets/google1.jpg':
      /*!********************************!*\
  !*** ./src/assets/google1.jpg ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/google1.1d0c1279.jpg';

        /***/
      },

    /***/ './src/assets/google2.jpg':
      /*!********************************!*\
  !*** ./src/assets/google2.jpg ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/google2.1bb65e82.jpg';

        /***/
      },

    /***/ './src/assets/head.gif':
      /*!*****************************!*\
  !*** ./src/assets/head.gif ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/head.bba162b2.gif';

        /***/
      },

    /***/ './src/assets/head1.png':
      /*!******************************!*\
  !*** ./src/assets/head1.png ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/head1.edebc900.png';

        /***/
      },

    /***/ './src/assets/head2.png':
      /*!******************************!*\
  !*** ./src/assets/head2.png ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/head2.6b2daa82.png';

        /***/
      },

    /***/ './src/assets/head3.png':
      /*!******************************!*\
  !*** ./src/assets/head3.png ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/head3.45a3b5a8.png';

        /***/
      },

    /***/ './src/assets/hui.gif':
      /*!****************************!*\
  !*** ./src/assets/hui.gif ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/hui.295db4d0.gif';

        /***/
      },

    /***/ './src/assets/logoFinal.png':
      /*!**********************************!*\
  !*** ./src/assets/logoFinal.png ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/logoFinal.a7f01b21.png';

        /***/
      },

    /***/ './src/assets/main2.gif':
      /*!******************************!*\
  !*** ./src/assets/main2.gif ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/main2.be40dd73.gif';

        /***/
      },

    /***/ './src/assets/maskHead.jpg':
      /*!*********************************!*\
  !*** ./src/assets/maskHead.jpg ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/maskHead.00be8f56.jpg';

        /***/
      },

    /***/ './src/assets/mouse-hint.png':
      /*!***********************************!*\
  !*** ./src/assets/mouse-hint.png ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/mouse-hint.0d12bd4e.png';

        /***/
      },

    /***/ './src/assets/rogalicName.png':
      /*!************************************!*\
  !*** ./src/assets/rogalicName.png ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/rogalicName.e899fee0.png';

        /***/
      },

    /***/ './src/assets/rogalik.png':
      /*!********************************!*\
  !*** ./src/assets/rogalik.png ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/rogalik.f2ff49ca.png';

        /***/
      },

    /***/ './src/assets/rogalikHead.png':
      /*!************************************!*\
  !*** ./src/assets/rogalikHead.png ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/rogalikHead.77270c09.png';

        /***/
      },

    /***/ './src/assets/shakalBorder.jpg':
      /*!*************************************!*\
  !*** ./src/assets/shakalBorder.jpg ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/shakalBorder.38d7267a.jpg';

        /***/
      },

    /***/ './src/assets/trusi.jpg':
      /*!******************************!*\
  !*** ./src/assets/trusi.jpg ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/trusi.46247b94.jpg';

        /***/
      },

    /***/ './src/assets/tshirt.jpg':
      /*!*******************************!*\
  !*** ./src/assets/tshirt.jpg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/tshirt.93945471.jpg';

        /***/
      },

    /***/ './src/assets/vert1.png':
      /*!******************************!*\
  !*** ./src/assets/vert1.png ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/vert1.7091c506.png';

        /***/
      },

    /***/ './src/assets/vert2.png':
      /*!******************************!*\
  !*** ./src/assets/vert2.png ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/vert2.8657a89a.png';

        /***/
      },

    /***/ './src/assets/vert3.png':
      /*!******************************!*\
  !*** ./src/assets/vert3.png ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/vert3.f5e6aea8.png';

        /***/
      },

    /***/ './src/assets/video.MP4':
      /*!******************************!*\
  !*** ./src/assets/video.MP4 ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/video.f6d8353e.MP4';

        /***/
      },

    /***/ './src/assets/vitalyaBorder.jpg':
      /*!**************************************!*\
  !*** ./src/assets/vitalyaBorder.jpg ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/vitalyaBorder.5e967624.jpg';

        /***/
      },

    /***/ './src/index.css':
      /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css',
            function() {
              var newContent = __webpack_require__(
                /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css'
              );

              if (typeof newContent === 'string')
                newContent = [[module.i, newContent, '']];

              var locals = (function(a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  'Aborting CSS HMR due to changed css-modules locals.'
                );

              update(newContent);
            }
          );

          module.hot.dispose(function() {
            update();
          });
        }

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-dom */ './node_modules/react-dom/index.js'
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./index.css */ './src/index.css'
        );
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _index_css__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./App */ './src/App.js'
        );
        /* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./serviceWorker */ './src/serviceWorker.js'
        );
        var _jsxFileName = '/home/misha/Documents/vit-birthday/src/index.js';

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _App__WEBPACK_IMPORTED_MODULE_3__['default'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              },
              __self: undefined
            }
          ),
          document.getElementById('root')
        ); // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA

        _serviceWorker__WEBPACK_IMPORTED_MODULE_4__['unregister']();

        /***/
      },

    /***/ './src/serviceWorker.js':
      /*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
      /*! exports provided: register, unregister */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'register',
          function() {
            return register;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'unregister',
          function() {
            return unregister;
          }
        );
        // This optional code is used to register a service worker.
        // register() is not called by default.
        // This lets the app load faster on subsequent visits in production, and gives
        // it offline capabilities. However, it also means that developers (and users)
        // will only see deployed updates on subsequent visits to a page, after all the
        // existing tabs open on the page have been closed, since previously cached
        // resources are updated in the background.
        // To learn more about the benefits of this model and instructions on how to
        // opt-in, read https://bit.ly/CRA-PWA
        const isLocalhost = Boolean(
          window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
          window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
        function register(config) {
          if (false) {
          }
        }

        function registerValidSW(swUrl, config) {
          navigator.serviceWorker
            .register(swUrl)
            .then(registration => {
              registration.onupdatefound = () => {
                const installingWorker = registration.installing;

                if (installingWorker == null) {
                  return;
                }

                installingWorker.onstatechange = () => {
                  if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                      // At this point, the updated precached content has been fetched,
                      // but the previous service worker will still serve the older
                      // content until all client tabs are closed.
                      console.log(
                        'New content is available and will be used when all ' +
                          'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                      ); // Execute callback

                      if (config && config.onUpdate) {
                        config.onUpdate(registration);
                      }
                    } else {
                      // At this point, everything has been precached.
                      // It's the perfect time to display a
                      // "Content is cached for offline use." message.
                      console.log('Content is cached for offline use.'); // Execute callback

                      if (config && config.onSuccess) {
                        config.onSuccess(registration);
                      }
                    }
                  }
                };
              };
            })
            .catch(error => {
              console.error('Error during service worker registration:', error);
            });
        }

        function checkValidServiceWorker(swUrl, config) {
          // Check if the service worker can be found. If it can't reload the page.
          fetch(swUrl)
            .then(response => {
              // Ensure service worker exists, and that we really are getting a JS file.
              const contentType = response.headers.get('content-type');

              if (
                response.status === 404 ||
                (contentType != null &&
                  contentType.indexOf('javascript') === -1)
              ) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then(registration => {
                  registration.unregister().then(() => {
                    window.location.reload();
                  });
                });
              } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
              }
            })
            .catch(() => {
              console.log(
                'No internet connection found. App is running in offline mode.'
              );
            });
        }

        function unregister() {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister();
            });
          }
        }

        /***/
      },

    /***/ 0:
      /*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /home/misha/Documents/vit-birthday/node_modules/react-dev-utils/webpackHotDevClient.js */ './node_modules/react-dev-utils/webpackHotDevClient.js'
        );
        module.exports = __webpack_require__(
          /*! /home/misha/Documents/vit-birthday/src/index.js */ './src/index.js'
        );

        /***/
      }
  },
  [[0, 'runtime~main', 1]]
]);
//# sourceMappingURL=main.chunk.js.map

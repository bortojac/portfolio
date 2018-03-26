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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__ = __webpack_require__("@fortawesome/react-fontawesome");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_brands__ = __webpack_require__("@fortawesome/fontawesome-free-brands");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_brands___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_brands__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular__ = __webpack_require__("@fortawesome/fontawesome-free-regular");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular__);
var _jsxFileName = '/Users/bortojac/Documents/Repository/portfolio/components/Footer/Footer.js';






var Footer = function Footer() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'footer',
        { id: 'socialFooter', className: 'jsx-1370915658' + ' ' + 'socialLinks',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/jack-borto-b2686199', target: '_blank', className: 'jsx-1370915658',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default.a, { icon: __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_brands__["faLinkedin"], size: '3x', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://github.com/bortojac', target: '_blank', className: 'jsx-1370915658',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default.a, { icon: __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_brands__["faGithub"], size: '3x', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: '', className: 'jsx-1370915658',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default.a, { icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular__["faEnvelope"], size: '3x', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1370915658',
            css: '.socialLinks.jsx-1370915658{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:none;-ms-flex:none;flex:none;height:6rem;background-color:rgba(1,1,40,0);-webkit-transition:background-color 1s;transition:background-color 1s;}.socialLinks.jsx-1370915658>a.jsx-1370915658{color:#fff;margin:1rem;-webkit-transition:opacity .5s;transition:opacity .5s;}@media screen and (min-width:900px){.socialLinks.jsx-1370915658:hover{background-color:rgba(255,255,255,1);}.socialLinks.jsx-1370915658:hover>a.jsx-1370915658{opacity:.3;color:rgba(1,1,40,1);}.socialLinks.jsx-1370915658>a.jsx-1370915658:hover{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkssQUFFOEIsQUFXRixBQVE2QixBQUkxQixBQUtELFVBQ2QsQ0FqQmEsQUFZZSxZQVhKLFNBWXhCLEtBTEEscUNBbkJtQixHQWF0QixlQVoyQixtR0FDSiw2RkFDVCwwQ0FDRSxZQUN1QixnQ0FDSixzRUFDbkMiLCJmaWxlIjoiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9udEF3ZXNvbWVJY29uIGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUxpbmtlZGluLCBmYUdpdGh1YiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLWJyYW5kcyc7XG5pbXBvcnQgeyBmYUVudmVsb3BlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtcmVndWxhcic7XG5cblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxmb290ZXIgaWQ9XCJzb2NpYWxGb290ZXJcIiBjbGFzc05hbWU9XCJzb2NpYWxMaW5rc1wiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFjay1ib3J0by1iMjY4NjE5OVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IHNpemU9XCIzeFwiIC8+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYm9ydG9qYWNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cIjN4XCIgLz5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRW52ZWxvcGV9IHNpemU9XCIzeFwiIC8+XG4gICAgPC9hPlxuICAgIDxzdHlsZSBqc3g+IFxuICAgIHtgIC5zb2NpYWxMaW5rcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDQwLCAwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc29jaWFsTGlua3MgPiBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMHB4KSB7XG5cbiAgICAgICAgICAgICAgIC8qIGZvb3RlciAqL1xuICAgICAgICAgICAgICAgLnNvY2lhbExpbmtzOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgIC5zb2NpYWxMaW5rczpob3ZlciA+IGEge1xuICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xuICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEsIDEsIDQwLCAxKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAuc29jaWFsTGlua3MgPiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=components/Footer/Footer.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = '/Users/bortojac/Documents/Repository/portfolio/components/Header/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3062878968' + ' ' + 'header',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'nav',
          {
            className: 'jsx-3062878968',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-3062878968',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              'Home'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: 'projects', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-3062878968',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              'Projects'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: '/about', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-3062878968',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              'About'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3062878968',
          css: '.header.jsx-3062878968{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:6rem;background-color:#fff;}nav.jsx-3062878968{margin-right:auto;margin-left:2rem;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-size:2.0rem;}nav.jsx-3062878968>a.jsx-3062878968{margin:1rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlMsQUFHd0IsQUFLSyxBQU1OLFlBQ1EsTUFOSCxpQkFDRyx1Q0FOUixVQVlkLEVBWHdCLHNCQUN4Qiw2QkFLbUIsaUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYm9ydG9qYWMvRG9jdW1lbnRzL1JlcG9zaXRvcnkvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJwcm9qZWN0c1wiPlxuICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgICAgICB9XG4gICAgICAgIG5hdiA+IGEge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=components/Header/Header.js */'
        })
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_Header__ = __webpack_require__("./components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_Footer__ = __webpack_require__("./components/Footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = '/Users/bortojac/Documents/Repository/portfolio/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Layout = function (_React$PureComponent) {
    _inherits(Layout, _React$PureComponent);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { id: 'container', className: 'jsx-3861332010' + ' ' + 'container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-3861332010',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            className: 'jsx-3861332010',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        'Portfolio'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'description', name: 'Jack Borto Portfolio Site', className: 'jsx-3861332010',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-3861332010',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato|Slabo+27px', rel: 'stylesheet', className: 'jsx-3861332010',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_Header__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'main',
                    {
                        className: 'jsx-3861332010' + ' ' + 'content',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    this.props.children
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer_Footer__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3861332010',
                    css: 'html{height:100%;font-size:60%;}body{height:100%;width:100%;font-size:1.4em;background:#fff;margin:0;}#__next{height:100%;}.container{min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;background-color:rgba(1,1,40,.7);background-size:cover;background-blend-mode:darken;background-image:url("../static/manhattan.jpg");}.content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCcUIsQUFHMkIsQUFJQSxBQU9FLEFBR0ksQUFTSCxZQXRCRCxBQUlILEFBT2IsSUFHaUIsT0FUQyxHQUpsQixhQUtrQixnQkFDUCxTQUNYLFVBZXFCLGdCQVJBLCtDQVNWLGdCQVI2QixpQkFTeEMsZ0JBUjBCLHNCQUNPLDZCQUNtQixnREFDcEQiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JvcnRvamFjL0RvY3VtZW50cy9SZXBvc2l0b3J5L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+UG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cIkphY2sgQm9ydG8gUG9ydGZvbGlvIFNpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b3xTbGFibysyN3B4XCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDQwLCAuNyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zdGF0aWMvbWFuaGF0dGFuLmpwZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMYXlvdXQpOyJdfQ== */\n/*@ sourceURL=components/Layout.js */'
                })
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(Layout));

/***/ }),

/***/ "./components/Project/Project.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProjectModal_ProjectModal__ = __webpack_require__("./components/Project/ProjectModal/ProjectModal.js");
var _jsxFileName = '/Users/bortojac/Documents/Repository/portfolio/components/Project/Project.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleOpenModal = _this.handleOpenModal.bind(_this);
        _this.handleCloseModal = _this.handleCloseModal.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }

    // handling escape close


    _createClass(Project, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
            if (!this.props.router.query.projectId) return;
            if (e.keyCode === 27) {
                this.props.router.push('/projects');
            }
        }
    }, {
        key: 'handleCloseModal',
        value: function handleCloseModal() {
            this.props.router.push('/projects');
        }
    }, {
        key: 'handleOpenModal',
        value: function handleOpenModal(e, id) {
            e.preventDefault();
            console.log(e);
            this.props.router.push({ pathname: '/projects', query: { projectId: id } });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                router = _props.router,
                projectTitle = _props.projectTitle;

            var formattedProjectTitle = this.props.projectTitle.toLowerCase().replace(/ +/g, "");
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-2966165712' + ' ' + 'projectContainer',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                },
                router.query.projectId == formattedProjectTitle && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ProjectModal_ProjectModal__["a" /* default */], {
                    id: formattedProjectTitle,
                    openModal: this.handleOpenModal,
                    closeModal: this.handleCloseModal,
                    headerContent: projectTitle,
                    mainContent: this.props.modalMainContent,
                    librariesUsed: this.props.librariesUsed,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-2966165712' + ' ' + 'screenshotContainer',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'figure',
                        {
                            className: 'jsx-2966165712',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.imgSrc, alt: this.props.imgAlt, className: 'jsx-2966165712',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-2966165712' + ' ' + 'projectFooter',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-2966165712',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        projectTitle
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-2966165712',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        this.props.projectDesc
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2966165712' + ' ' + 'buttonContainer',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            {
                                id: formattedProjectTitle,
                                onClick: function onClick(event, id) {
                                    return _this2.handleOpenModal(event, formattedProjectTitle);
                                },
                                onKeyDown: this.handleKeyDown,
                                className: 'jsx-2966165712' + ' ' + 'projectButton',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            },
                            'About'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            {
                                className: 'jsx-2966165712' + ' ' + 'projectButton',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 68
                                }
                            },
                            'Launch'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2966165712',
                    css: '.projectContainer.jsx-2966165712{width:35rem;margin:1rem;height:50rem;background-color:#fff;border-radius:.5rem;}.screenshotContainer.jsx-2966165712{height:35rem;width:100%;}figure.jsx-2966165712{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:.5rem;}img.jsx-2966165712{width:100%;height:auto;max-height:35rem;}.projectFooter.jsx-2966165712{height:15rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.projectFooter.jsx-2966165712>h2.jsx-2966165712{margin:.1rem;text-align:center;}.projectFooter.jsx-2966165712>p.jsx-2966165712{height:6rem;padding-right:.5rem;padding-left:.5rem;}.buttonContainer.jsx-2966165712{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.projectButton.jsx-2966165712:last-child{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:inline;margin-left:auto;margin-right:1rem;margin-bottom:.5rem;}.projectButton.jsx-2966165712:first-child{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:inline;margin-left:1rem;margin-bottom:.5rem;}.projectButton.jsx-2966165712{width:7rem;height:2.5rem;border-radius:1rem;color:#fff;background-color:rgb(1,1,40);opacity:1;-webkit-transition:opacity;transition:opacity;}@media screen and (min-width.jsx-2966165712:900px) .projectButton.jsx-2966165712:hover{opacity:.7;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFcUIsQUFHc0MsQUFPQSxBQUlELEFBUUQsQUFNRSxBQU1BLEFBS0QsQUFNQyxBQUlPLEFBUUEsQUFPVCxBQVlJLFdBckRILEFBMENFLEFBWUssQ0F6RU4sQUFXQSxBQXlCTyxDQTdCVCxBQWtCRSxBQU1LLFVBWEQsQ0FuQkgsQUFPbEIsQ0FzRHVCLENBWW5CLEtBMUNKLENBS3VCLEtBbkNJLEdBbUIzQixJQTBDZSxPQXpCZixJQTBCbUMsSUE3RFYsYUEyQ04sQUFRQSxFQVpuQixLQXRDQSxLQTZEYyxFQXJEUyxDQWNGLEFBcUJBLEFBUUEsT0FXRSxVQWxCRCxBQVFFLGtCQVBBLEVBUXhCLGdCQVVBLEVBakJBLFFBdkJBLDZCQWQyQixtR0FDVixhQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1Byb2plY3QvUHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYm9ydG9qYWMvRG9jdW1lbnRzL1JlcG9zaXRvcnkvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJvamVjdE1vZGFsIGZyb20gJy4vUHJvamVjdE1vZGFsL1Byb2plY3RNb2RhbCc7XG5cbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3Blbk1vZGFsID0gdGhpcy5oYW5kbGVPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU1vZGFsID0gdGhpcy5oYW5kbGVDbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gaGFuZGxpbmcgZXNjYXBlIGNsb3NlXG4gICAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gICAgICB9XG4gICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gICAgICB9XG4gICAgXG4gICAgICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5wcm9qZWN0SWQpIHJldHVyblxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9wcm9qZWN0cycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICBoYW5kbGVDbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvcHJvamVjdHMnKVxuICAgICAgfVxuICAgIFxuICAgICAgaGFuZGxlT3Blbk1vZGFsIChlLCBpZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKHtwYXRobmFtZTonL3Byb2plY3RzJywgcXVlcnk6IHtwcm9qZWN0SWQ6IGlkfX0pO1xuICAgICAgfVxuICAgICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHJvdXRlciwgcHJvamVjdFRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9qZWN0VGl0bGUgPSB0aGlzLnByb3BzLnByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyArL2csIFwiXCIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICB7cm91dGVyLnF1ZXJ5LnByb2plY3RJZCA9PSBmb3JtYXR0ZWRQcm9qZWN0VGl0bGUgJiZcbiAgICAgICAgICAgICA8UHJvamVjdE1vZGFsXG4gICAgICAgICAgICBpZD17Zm9ybWF0dGVkUHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgIG9wZW5Nb2RhbD17dGhpcy5oYW5kbGVPcGVuTW9kYWx9XG4gICAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuaGFuZGxlQ2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgIGhlYWRlckNvbnRlbnQ9e3Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgIG1haW5Db250ZW50PXt0aGlzLnByb3BzLm1vZGFsTWFpbkNvbnRlbnR9XG4gICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXt0aGlzLnByb3BzLmxpYnJhcmllc1VzZWR9XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbnNob3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltZ1NyY30gYWx0PXt0aGlzLnByb3BzLmltZ0FsdH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2plY3RUaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wcm9qZWN0RGVzY308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtmb3JtYXR0ZWRQcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50LCBpZCkgPT4gdGhpcy5oYW5kbGVPcGVuTW9kYWwoZXZlbnQsIGZvcm1hdHRlZFByb2plY3RUaXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdEJ1dHRvblwiPkFib3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByb2plY3RCdXR0b25cIj5MYXVuY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2NyZWVuc2hvdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RGb290ZXIgPiBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC4xcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RGb290ZXIgPiBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0QnV0dG9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RCdXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RCdXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxLCA0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0QnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvamVjdCk7Il19 */\n/*@ sourceURL=components/Project/Project.js */'
                })
            );
        }
    }]);

    return Project;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Project));

/***/ }),

/***/ "./components/Project/ProjectModal/ProjectModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/bortojac/Documents/Repository/portfolio/components/Project/ProjectModal/ProjectModal.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ProjectModal = function (_React$PureComponent) {
    _inherits(ProjectModal, _React$PureComponent);

    function ProjectModal(props) {
        _classCallCheck(this, ProjectModal);

        return _possibleConstructorReturn(this, (ProjectModal.__proto__ || Object.getPrototypeOf(ProjectModal)).call(this, props));
    }

    _createClass(ProjectModal, [{
        key: 'closeModal',
        value: function closeModal(e) {
            if (this._shim === e.target || this._project === e.target) {
                if (this.props.closeModal) {
                    this.props.closeModal();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.props);
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { onClick: function onClick(e) {
                        return _this2.props.closeModal(e);
                    }, className: 'jsx-4198647012' + ' ' + 'modalOverlay',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-4198647012' + ' ' + 'modalDialog',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-4198647012' + ' ' + 'infoModalContainer',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'h1',
                            {
                                className: 'jsx-4198647012' + ' ' + 'infoModalHeader',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            this.props.headerContent
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            {
                                className: 'jsx-4198647012' + ' ' + 'infoModalContent',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            this.props.mainContent,
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'ul',
                                {
                                    className: 'jsx-4198647012',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 29
                                    }
                                },
                                this.props.librariesUsed.map(function (library, index) {
                                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'li',
                                        { key: library + index, className: 'jsx-4198647012',
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 30
                                            }
                                        },
                                        library
                                    );
                                })
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '4198647012',
                    css: '.modalOverlay.jsx-4198647012{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:rgba(1,1,40,.2);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;left:0;right:0;top:0;bottom:0;margin:auto;}.modalDialog.jsx-4198647012{background-color:rgba(1,1,40);border:.1rem solid rgb(204,204,204);border-radius:4px;outline:none;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:75%;z-index:10;overflow:hidden;}.infoModalContainer.jsx-4198647012{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;width:100%;height:45rem;overflow-y:scroll;overflow-x:hidden;-webkit-flex:auto;-ms-flex:auto;flex:auto;}.infoModalHeader.jsx-4198647012{color:#000;width:75%;border-bottom:.2rem solid rgb(204,204,204);background-color:#fff;border-bottom:2px solid rgb(1,1,40);padding-top:1rem;font-size:3rem;padding-bottom:1rem;margin:0 auto;}.infoModalContent.jsx-4198647012{overflow-y:scroll;overflow-x:hidden;width:75%;margin:0 auto;-webkit-flex:1;-ms-flex:1;flex:1;padding-top:1rem;padding-bottom:1rem;background-color:#fff;-webkit-overflow-scrolling:touch;border-radius:4px;font-size:2rem;}@media screen and (min-width.jsx-4198647012:900px) .infoModalHeader{font-size:1.5rem;}@media screen and (min-width.jsx-4198647012:900px) .infoModalContent.jsx-4198647012{font-size:1.1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0TW9kYWwvUHJvamVjdE1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNEIsQUFHNEIsQUFZZSxBQWVqQixBQVVGLEFBV1MsQUFlRCxBQUlFLFdBN0JYLElBckNHLEVBK0RiLEFBSUEsQ0FuQm9CLEdBVnlCLFNBMUJQLE1BcUMxQixVQUNJLGNBQ1AsSUFaYSxFQTFCSixRQWNELFVBYkosRUEwQnVCLEdBdkNULElBbURSLElBckNULFVBQ0csR0FxQ1MsTUFuREMsTUF1Q04sUUFhTyxPQTFCYixFQWNJLFNBYkYsSUEwQnNCLEVBWmYsT0FiRixhQWNKLEtBYkksRUFkSSxJQXVDRixHQVh0QixTQWJZLE1BeUJPLFlBdERFLEdBdURyQixxQkF6QkEsb0JBZnlCLGlEQWRoQixPQUNDLFFBQ0YsTUFDRyxTQUNHLFlBQ2QsUUFVb0Isa0JBQ1IsVUFDQyxXQUNLLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL1Byb2plY3QvUHJvamVjdE1vZGFsL1Byb2plY3RNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYm9ydG9qYWMvRG9jdW1lbnRzL1JlcG9zaXRvcnkvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUHJvamVjdE1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoZSkge1xuICAgICAgICBpZiAodGhpcy5fc2hpbSA9PT0gZS50YXJnZXQgfHxcbiAgICAgICAgICAgIHRoaXMuX3Byb2plY3QgPT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbE92ZXJsYXknIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmNsb3NlTW9kYWwoZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbERpYWxvZyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb01vZGFsQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW5mb01vZGFsSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9Nb2RhbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tYWluQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGlicmFyaWVzVXNlZC5tYXAoKGxpYnJhcnksIGluZGV4KSA9PiA8bGkga2V5PXtsaWJyYXJ5ICsgaW5kZXh9PntsaWJyYXJ5fTwvbGk+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb2RhbE92ZXJsYXkge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMSwxLDQwLC4yKTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vZGFsRGlhbG9nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwxLDQwKTtcbiAgICAgICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5mb01vZGFsQ29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXJlbTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5pbmZvTW9kYWxIZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjJyZW0gc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMSwxLDQwKTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQge1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAuaW5mb01vZGFsSGVhZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNb2RhbDtcblxuIl19 */\n/*@ sourceURL=components/Project/ProjectModal/ProjectModal.js */'
                })
            );
        }
    }]);

    return ProjectModal;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (ProjectModal);

/***/ }),

/***/ "./pages/projects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Project_Project__ = __webpack_require__("./components/Project/Project.js");
var _jsxFileName = '/Users/bortojac/Documents/Repository/portfolio/pages/projects.js';





/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'section',
            {
                className: 'jsx-1843130720' + ' ' + 'projectsWrapper',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/costManagerDashScreenshot.png',
                imgAlt: 'costManager Dashboard Picture',
                projectTitle: 'Cost Manager',
                projectDesc: 'Cost Manager is built using the MERN stack and allows users to track their monthly expenses. Users can choose when their monthly budget period begins, as well as customize their spending categories.',
                modalMainContent: 'Cost Manager was born when I wanted with the ability to set a budget period in Intuit\'s Mint App. I knew I wanted to make something that involved data and allowing the user to enter their own monthly budget start date proved to be an interesting challenge. This app allows the user to create spending categories, log new expenses, edit spending categories, choose their month start date, and delete entries and categories. The most complicated part of this build was creating the logic behind the month start date, which was accomplished via the aggregate pipeline operators in MongoDB and a custom interval based on the user\'s month start date.',
                librariesUsed: ['React', 'Redux', 'Reselect', 'Mongoose', 'Express', 'Webpack', 'Lodash', 'ReCharts', 'React-Modal', 'React-Table', 'Moment', 'FontAwesome', 'React-Spinners'],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/jammmingBackgroundPhoto.jpg',
                imgAlt: 'Jammming Picture',
                projectTitle: 'Jammming',
                projectDesc: 'Jammming is built with ReactJS and allows users create and edit playlists from their Spotify Account. Please click the launch button below to log in with your spotify account and begin.',
                modalMainContent: 'I first built Jammming with an online course on codecademy.com, but the project essentially only required making an API call and displaying them. In order to make the application more usable, I implemented the ability to load and edit playlists, as well as added some overall styling. Furthermore, I rebuilt the entire app to use Redux, Reselect, and Webpack, in order to make the code more readable and scalable. One improvement I would like to add would be sound recognition technology (perhaps using Gracenote GNSDK).',
                librariesUsed: ['React', 'Redux', 'Reselect', 'Express', 'Webpack', 'Lodash', 'React-Modal', 'React-Spinners'],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/ravenousBackgroundMobile.jpg',
                imgAlt: 'Ravenous Picture',
                projectTitle: 'Ravenous',
                projectDesc: 'Ravenous is built with ReactJS and calls the Yelp.com business API to allow users to search for local businesses by ranking, reviews, and relevance.',
                modalMainContent: 'This was my first React App, and it was initially built as a project for an online course on codecademy.com. Beyond the project requirements, I added a loading spinner and then added search functionality on keydown, and researched when the sort input is changed. Future improvements ideas include the FourSquare API to provide more information on a selected business, Uber ride requests using Uber\'s Button API, and other travel information from any free API.',
                librariesUsed: ['React', 'React-Spinners'],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/portfolioScreenshot.png',
                imgAlt: 'Portfolio Site Picture',
                projectTitle: 'This Portfolio Website',
                projectDesc: 'This Portfolio site is a server-side rendered web app built using Next.js, and it shows my current portfolio of projects.',
                modalMainContent: 'Originally, my portfolio site was built with jQuery before I had learned React. After building Cost Manager, I wanted to learn about server-side rendering since they provide better SEO and performance. As a future improvement, I would like to add a custom server and integrate each one of my side projects.',
                librariesUsed: ['React', 'Next', 'Fontawesome'],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                styleId: '1843130720',
                css: '.projectsWrapper.jsx-1843130720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDaUIsQUFHa0MsMEVBQ04saUNBQ08sc0RBQ0MseURBQ2MsMkhBQ2hDIiwiZmlsZSI6InBhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3RzV3JhcHBlclwiPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvY29zdE1hbmFnZXJEYXNoU2NyZWVuc2hvdC5wbmdcIlxuICAgICAgICAgICAgICAgIGltZ0FsdD1cImNvc3RNYW5hZ2VyIERhc2hib2FyZCBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9XCJDb3N0IE1hbmFnZXJcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiQ29zdCBNYW5hZ2VyIGlzIGJ1aWx0IHVzaW5nIHRoZSBNRVJOIHN0YWNrIGFuZCBhbGxvd3MgdXNlcnMgdG8gdHJhY2sgdGhlaXIgbW9udGhseSBleHBlbnNlcy4gVXNlcnMgY2FuIGNob29zZSB3aGVuIHRoZWlyIG1vbnRobHkgYnVkZ2V0IHBlcmlvZCBiZWdpbnMsIGFzIHdlbGwgYXMgY3VzdG9taXplIHRoZWlyIHNwZW5kaW5nIGNhdGVnb3JpZXMuXCJcbiAgICAgICAgICAgICAgICBtb2RhbE1haW5Db250ZW50PVwiQ29zdCBNYW5hZ2VyIHdhcyBib3JuIHdoZW4gSSB3YW50ZWQgd2l0aCB0aGUgYWJpbGl0eSB0byBzZXQgYSBidWRnZXQgcGVyaW9kIGluIEludHVpdCdzIE1pbnQgQXBwLiBJIGtuZXcgSSB3YW50ZWQgdG8gbWFrZSBzb21ldGhpbmcgdGhhdCBpbnZvbHZlZCBkYXRhIGFuZCBhbGxvd2luZyB0aGUgdXNlciB0byBlbnRlciB0aGVpciBvd24gbW9udGhseSBidWRnZXQgc3RhcnQgZGF0ZSBwcm92ZWQgdG8gYmUgYW4gaW50ZXJlc3RpbmcgY2hhbGxlbmdlLiBUaGlzIGFwcCBhbGxvd3MgdGhlIHVzZXIgdG8gY3JlYXRlIHNwZW5kaW5nIGNhdGVnb3JpZXMsIGxvZyBuZXcgZXhwZW5zZXMsIGVkaXQgc3BlbmRpbmcgY2F0ZWdvcmllcywgY2hvb3NlIHRoZWlyIG1vbnRoIHN0YXJ0IGRhdGUsIGFuZCBkZWxldGUgZW50cmllcyBhbmQgY2F0ZWdvcmllcy4gVGhlIG1vc3QgY29tcGxpY2F0ZWQgcGFydCBvZiB0aGlzIGJ1aWxkIHdhcyBjcmVhdGluZyB0aGUgbG9naWMgYmVoaW5kIHRoZSBtb250aCBzdGFydCBkYXRlLCB3aGljaCB3YXMgYWNjb21wbGlzaGVkIHZpYSB0aGUgYWdncmVnYXRlIHBpcGVsaW5lIG9wZXJhdG9ycyBpbiBNb25nb0RCIGFuZCBhIGN1c3RvbSBpbnRlcnZhbCBiYXNlZCBvbiB0aGUgdXNlcidzIG1vbnRoIHN0YXJ0IGRhdGUuXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ1JlZHV4JywgJ1Jlc2VsZWN0JywgJ01vbmdvb3NlJywgJ0V4cHJlc3MnLCAnV2VicGFjaycsICdMb2Rhc2gnLCAnUmVDaGFydHMnLCAnUmVhY3QtTW9kYWwnLCdSZWFjdC1UYWJsZScsJ01vbWVudCcsICdGb250QXdlc29tZScsICdSZWFjdC1TcGlubmVycyddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgICAgaW1nU3JjPVwiLi4vc3RhdGljL2phbW1taW5nQmFja2dyb3VuZFBob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgaW1nQWx0PVwiSmFtbW1pbmcgUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPVwiSmFtbW1pbmdcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiSmFtbW1pbmcgaXMgYnVpbHQgd2l0aCBSZWFjdEpTIGFuZCBhbGxvd3MgdXNlcnMgY3JlYXRlIGFuZCBlZGl0IHBsYXlsaXN0cyBmcm9tIHRoZWlyIFNwb3RpZnkgQWNjb3VudC4gUGxlYXNlIGNsaWNrIHRoZSBsYXVuY2ggYnV0dG9uIGJlbG93IHRvIGxvZyBpbiB3aXRoIHlvdXIgc3BvdGlmeSBhY2NvdW50IGFuZCBiZWdpbi5cIlxuICAgICAgICAgICAgICAgIG1vZGFsTWFpbkNvbnRlbnQ9XCJJIGZpcnN0IGJ1aWx0IEphbW1taW5nIHdpdGggYW4gb25saW5lIGNvdXJzZSBvbiBjb2RlY2FkZW15LmNvbSwgYnV0IHRoZSBwcm9qZWN0IGVzc2VudGlhbGx5IG9ubHkgcmVxdWlyZWQgbWFraW5nIGFuIEFQSSBjYWxsIGFuZCBkaXNwbGF5aW5nIHRoZW0uIEluIG9yZGVyIHRvIG1ha2UgdGhlIGFwcGxpY2F0aW9uIG1vcmUgdXNhYmxlLCBJIGltcGxlbWVudGVkIHRoZSBhYmlsaXR5IHRvIGxvYWQgYW5kIGVkaXQgcGxheWxpc3RzLCBhcyB3ZWxsIGFzIGFkZGVkIHNvbWUgb3ZlcmFsbCBzdHlsaW5nLiBGdXJ0aGVybW9yZSwgSSByZWJ1aWx0IHRoZSBlbnRpcmUgYXBwIHRvIHVzZSBSZWR1eCwgUmVzZWxlY3QsIGFuZCBXZWJwYWNrLCBpbiBvcmRlciB0byBtYWtlIHRoZSBjb2RlIG1vcmUgcmVhZGFibGUgYW5kIHNjYWxhYmxlLiBPbmUgaW1wcm92ZW1lbnQgSSB3b3VsZCBsaWtlIHRvIGFkZCB3b3VsZCBiZSBzb3VuZCByZWNvZ25pdGlvbiB0ZWNobm9sb2d5IChwZXJoYXBzIHVzaW5nIEdyYWNlbm90ZSBHTlNESykuXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ1JlZHV4JywgJ1Jlc2VsZWN0JywgJ0V4cHJlc3MnLCAnV2VicGFjaycsICdMb2Rhc2gnLCAnUmVhY3QtTW9kYWwnLCAnUmVhY3QtU3Bpbm5lcnMnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAgICAgIGltZ1NyYz1cIi4uL3N0YXRpYy9yYXZlbm91c0JhY2tncm91bmRNb2JpbGUuanBnXCJcbiAgICAgICAgICAgICAgICBpbWdBbHQ9XCJSYXZlbm91cyBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9XCJSYXZlbm91c1wiXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2M9XCJSYXZlbm91cyBpcyBidWlsdCB3aXRoIFJlYWN0SlMgYW5kIGNhbGxzIHRoZSBZZWxwLmNvbSBidXNpbmVzcyBBUEkgdG8gYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBsb2NhbCBidXNpbmVzc2VzIGJ5IHJhbmtpbmcsIHJldmlld3MsIGFuZCByZWxldmFuY2UuXCJcbiAgICAgICAgICAgICAgICBtb2RhbE1haW5Db250ZW50PVwiVGhpcyB3YXMgbXkgZmlyc3QgUmVhY3QgQXBwLCBhbmQgaXQgd2FzIGluaXRpYWxseSBidWlsdCBhcyBhIHByb2plY3QgZm9yIGFuIG9ubGluZSBjb3Vyc2Ugb24gY29kZWNhZGVteS5jb20uIEJleW9uZCB0aGUgcHJvamVjdCByZXF1aXJlbWVudHMsIEkgYWRkZWQgYSBsb2FkaW5nIHNwaW5uZXIgYW5kIHRoZW4gYWRkZWQgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgb24ga2V5ZG93biwgYW5kIHJlc2VhcmNoZWQgd2hlbiB0aGUgc29ydCBpbnB1dCBpcyBjaGFuZ2VkLiBGdXR1cmUgaW1wcm92ZW1lbnRzIGlkZWFzIGluY2x1ZGUgdGhlIEZvdXJTcXVhcmUgQVBJIHRvIHByb3ZpZGUgbW9yZSBpbmZvcm1hdGlvbiBvbiBhIHNlbGVjdGVkIGJ1c2luZXNzLCBVYmVyIHJpZGUgcmVxdWVzdHMgdXNpbmcgVWJlcidzIEJ1dHRvbiBBUEksIGFuZCBvdGhlciB0cmF2ZWwgaW5mb3JtYXRpb24gZnJvbSBhbnkgZnJlZSBBUEkuXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ1JlYWN0LVNwaW5uZXJzJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvcG9ydGZvbGlvU2NyZWVuc2hvdC5wbmdcIlxuICAgICAgICAgICAgICAgIGltZ0FsdD1cIlBvcnRmb2xpbyBTaXRlIFBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZT1cIlRoaXMgUG9ydGZvbGlvIFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiVGhpcyBQb3J0Zm9saW8gc2l0ZSBpcyBhIHNlcnZlci1zaWRlIHJlbmRlcmVkIHdlYiBhcHAgYnVpbHQgdXNpbmcgTmV4dC5qcywgYW5kIGl0IHNob3dzIG15IGN1cnJlbnQgcG9ydGZvbGlvIG9mIHByb2plY3RzLlwiXG4gICAgICAgICAgICAgICAgbW9kYWxNYWluQ29udGVudD1cIk9yaWdpbmFsbHksIG15IHBvcnRmb2xpbyBzaXRlIHdhcyBidWlsdCB3aXRoIGpRdWVyeSBiZWZvcmUgSSBoYWQgbGVhcm5lZCBSZWFjdC4gQWZ0ZXIgYnVpbGRpbmcgQ29zdCBNYW5hZ2VyLCBJIHdhbnRlZCB0byBsZWFybiBhYm91dCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgc2luY2UgdGhleSBwcm92aWRlIGJldHRlciBTRU8gYW5kIHBlcmZvcm1hbmNlLiBBcyBhIGZ1dHVyZSBpbXByb3ZlbWVudCwgSSB3b3VsZCBsaWtlIHRvIGFkZCBhIGN1c3RvbSBzZXJ2ZXIgYW5kIGludGVncmF0ZSBlYWNoIG9uZSBvZiBteSBzaWRlIHByb2plY3RzLlwiXG4gICAgICAgICAgICAgICAgbGlicmFyaWVzVXNlZD17WydSZWFjdCcsICdOZXh0JywgJ0ZvbnRhd2Vzb21lJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0c1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbilcbiJdfQ== */\n/*@ sourceURL=pages/projects.js */'
            })
        )
    );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/projects.js");


/***/ }),

/***/ "@fortawesome/fontawesome-free-brands":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),

/***/ "@fortawesome/fontawesome-free-regular":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-regular");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map
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
        { id: 'socialFooter', className: 'jsx-2387951374' + ' ' + 'socialLinks',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/jack-borto-b2686199', target: '_blank', className: 'jsx-2387951374',
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
            { href: 'https://github.com/bortojac', target: '_blank', className: 'jsx-2387951374',
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
            { href: '', onClick: function onClick() {
                    return window.open('mailto:jack.w.borto@gmail.com');
                }, className: 'jsx-2387951374',
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
            styleId: '2387951374',
            css: '.socialLinks.jsx-2387951374{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:none;-ms-flex:none;flex:none;height:6rem;background-color:rgba(1,1,40,0);-webkit-transition:background-color 1s;transition:background-color 1s;}.socialLinks.jsx-2387951374>a.jsx-2387951374{color:#fff;margin:1rem;-webkit-transition:opacity .5s;transition:opacity .5s;}@media screen and (min-width:900px){.socialLinks.jsx-2387951374:hover>a.jsx-2387951374{opacity:.3;color:rgb(1,1,40);}.socialLinks.jsx-2387951374:hover{background-color:rgba(255,255,255,1);}.socialLinks.jsx-2387951374>a.jsx-2387951374:hover{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmEsQUFHOEIsQUFVRixBQU1HLEFBSXVCLEFBR3hCLFVBQ2QsQ0FiYSxBQU1TLFlBTEUsTUFNM0IsUUFHQSxxQ0FwQnNCLEdBWXRCLGVBWDJCLG1HQUNKLDZGQUNULDBDQUNFLFlBQ3VCLGdDQUNKLHNFQUNuQyIsImZpbGUiOiJjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JvcnRvamFjL0RvY3VtZW50cy9SZXBvc2l0b3J5L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb250QXdlc29tZUljb24gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTGlua2VkaW4sIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtYnJhbmRzJztcbmltcG9ydCB7IGZhRW52ZWxvcGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1yZWd1bGFyJztcblxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPGZvb3RlciBpZD1cInNvY2lhbEZvb3RlclwiIGNsYXNzTmFtZT1cInNvY2lhbExpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFjay1ib3J0by1iMjY4NjE5OVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmtlZGlufSBzaXplPVwiM3hcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYm9ydG9qYWNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IHNpemU9XCIzeFwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdtYWlsdG86amFjay53LmJvcnRvQGdtYWlsLmNvbScpfT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFbnZlbG9wZX0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2AgXG4gICAgICAgICAgICAuc29jaWFsTGlua3Mge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCA0MCwgMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zb2NpYWxMaW5rcyA+IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAwcHgpIHtcbiAgICAgICAgICAgICAgIC5zb2NpYWxMaW5rczpob3ZlciA+IGEge1xuICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xuICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMSwxLDQwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5zb2NpYWxMaW5rczpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNvY2lhbExpbmtzID4gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=components/Footer/Footer.js */'
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
          className: 'jsx-2348823644' + ' ' + 'header',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'nav',
          {
            className: 'jsx-2348823644',
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
                className: 'jsx-2348823644',
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
                className: 'jsx-2348823644',
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
                className: 'jsx-2348823644',
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
          styleId: '2348823644',
          css: '.header.jsx-2348823644{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:6rem;background-color:#fff;}nav.jsx-2348823644{margin-left:2rem;margin-top:auto;margin-bottom:auto;font-size:2.0rem;}nav.jsx-2348823644>a.jsx-2348823644{margin:1rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;text-decoration:none;color:rgba(1,1,40,1);opacity:1;-webkit-transition:opacity .4s;transition:opacity .4s;}@media screen and (min-width:900px){nav.jsx-2348823644:hover>a.jsx-2348823644{opacity:.4;color:rgba(1,1,40,1);}nav.jsx-2348823644>a.jsx-2348823644:hover{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlcsQUFHd0IsQUFLSSxBQU1MLEFBVUMsQUFJRCxVQUNGLENBSmEsQ0FWSCxLQU5KLGVBaUJoQixDQWhCbUIsbUJBQ0YsaUJBQ25CLEtBUmMsVUFZUyxFQVhDLG1CQVlELEdBWHZCLGtCQVlZLFVBQ2Esc0RBQ3pCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYm9ydG9qYWMvRG9jdW1lbnRzL1JlcG9zaXRvcnkvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAyLjByZW07XG4gICAgICAgIH1cbiAgICAgICAgbmF2ID4gYSB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgxLDEsNDAsMSk7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgbmF2OmhvdmVyID4gYSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEsMSw0MCwxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2ID4gYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=components/Header/Header.js */'
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
                { id: 'container', className: 'jsx-496493053' + ' ' + 'container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-496493053',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            className: 'jsx-496493053',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        'Jack Borto'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'description', name: 'Jack Borto Portfolio Site', className: 'jsx-496493053',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-496493053',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', className: 'jsx-496493053',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: '../static/favicon.ico', rel: 'shortcut icon', className: 'jsx-496493053',
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
                        className: 'jsx-496493053' + ' ' + 'content',
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
                    styleId: '496493053',
                    css: 'html{height:100%;font-size:60%;font-family:\'Roboto\',sans-serif;}body{height:100%;width:100%;font-size:1.4em;background:#fff;margin:0;}body.modalOpen{overflow:hidden;}#__next{height:100%;}.container{min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;background-color:rgba(1,1,40,.7);background-size:cover;background-blend-mode:darken;background-image:url("../static/manhattan.jpg");}.content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCcUIsQUFHcUMsQUFLQSxBQU9JLEFBR0osQUFHSSxBQVNILFlBMUJDLEFBS0gsQUFVZixJQUhBLEFBTWlCLE9BWkcsR0FMaUIsYUFNakIsZ0JBQ1AsR0FOYixNQU9BLFVBa0JxQixnQkFSQSwrQ0FTVixnQkFSNkIsaUJBU3hDLGdCQVIwQixzQkFDTyw2QkFDbUIsZ0RBQ3BEIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SmFjayBCb3J0bzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJKYWNrIEJvcnRvIFBvcnRmb2xpbyBTaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24uaWNvXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJvZHkubW9kYWxPcGVuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCA0MCwgLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3RhdGljL21hbmhhdHRhbi5qcGdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components/Layout.js */'
                })
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = "/Users/bortojac/Documents/Repository/portfolio/pages/index.js";




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
            "section",
            {
                className: "jsx-1365335343" + " " + "mainHeading",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "h1",
                {
                    className: "jsx-1365335343",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                "Jack Borto"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "h2",
                {
                    className: "jsx-1365335343",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                "New York, NY"
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "1365335343",
            css: ".mainHeading.jsx-1365335343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-flex:1;-ms-flex:1;flex:1;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.mainHeading.jsx-1365335343>h1.jsx-1365335343{font-size:4rem;margin:1rem;}.mainHeading.jsx-1365335343>h2.jsx-1365335343{font-size:1.5rem;font-weight:bold;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVhLEFBRzhCLEFBUUUsQUFLQyxlQUpELEVBS0MsVUFKbEIsT0FLc0IscUJBQ3RCLG1CQWZtQiwrREFDVixpQ0FDSSxXQUNZLG1HQUNKLDZGQUN2QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYm9ydG9qYWMvRG9jdW1lbnRzL1JlcG9zaXRvcnkvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5IZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDE+SmFjayBCb3J0bzwvaDE+XG4gICAgICAgICAgICA8aDI+TmV3IFlvcmssIE5ZPC9oMj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5tYWluSGVhZGluZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFpbkhlYWRpbmcgPiBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgLm1haW5IZWFkaW5nID4gaDIge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js */"
        })
    );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

            //remove the modal open class from the body. we will use this class to lock scroll of body when the modal is open
            document.body.classList.remove('modalOpen');
            //document.getElementById('__next').classList.remove('modal-open');
            //document.getElementsByClassName('.container').classList.remove('modal-open');
            //document.getElementsByName('main').classList.remove('modal-open');
        }
    }, {
        key: 'handleOpenModal',
        value: function handleOpenModal(e, id) {
            e.preventDefault();
            //console.log(e);
            this.props.router.push({ pathname: '/projects', query: { projectId: id } });

            //remove the modal open class from the body. we will use this class to lock scroll of body when the modal is open
            document.body.classList.add('modalOpen');
            // document.getElementById('__next').classList.add('modal-open');
            // document.getElementsByClassName('.container').classList.add('modal-open');
            // document.getElementsByName('main').classList.add('modal-open');
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
                    className: 'jsx-1087235193' + ' ' + 'projectContainer',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                },
                router.query.projectId == formattedProjectTitle && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ProjectModal_ProjectModal__["a" /* default */], {
                    id: formattedProjectTitle,
                    openModal: this.handleOpenModal,
                    closeModal: this.handleCloseModal,
                    headerContent: projectTitle,
                    mainContent: this.props.modalMainContent,
                    librariesUsed: this.props.librariesUsed,
                    gitHubLink: this.props.gitHubLink,
                    projectURL: this.props.projectURL,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-1087235193' + ' ' + 'screenshotContainer',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'figure',
                        {
                            className: 'jsx-1087235193',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.imgSrc, alt: this.props.imgAlt, className: 'jsx-1087235193',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-1087235193' + ' ' + 'projectFooter',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-1087235193',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        projectTitle
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-1087235193',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        },
                        this.props.projectDesc
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-1087235193' + ' ' + 'buttonContainer',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'a',
                            {
                                id: formattedProjectTitle,
                                onClick: function onClick(event, id) {
                                    return _this2.handleOpenModal(event, formattedProjectTitle);
                                },
                                onKeyDown: this.handleKeyDown,
                                className: 'jsx-1087235193' + ' ' + 'projectButton',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 77
                                }
                            },
                            'About'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'a',
                            {
                                href: this.props.projectURL,
                                target: '_blank',
                                className: 'jsx-1087235193' + ' ' + 'projectButton',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 82
                                }
                            },
                            'Launch'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '1087235193',
                    css: '.projectContainer.jsx-1087235193{width:35rem;margin:1rem;height:53rem;background-color:#fff;color:rgb(1,1,40);border-radius:.5rem;}.screenshotContainer.jsx-1087235193{height:35rem;width:100%;}figure.jsx-1087235193{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:.5rem;}img.jsx-1087235193{width:100%;height:auto;max-height:35rem;}.projectFooter.jsx-1087235193{height:18rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.projectFooter.jsx-1087235193>h2.jsx-1087235193{margin-top:1rem;margin-bottom:.1rem;text-align:center;}.projectFooter.jsx-1087235193>p.jsx-1087235193{height:9rem;padding-right:.5rem;margin-top:.9rem;margin-bottom:.9rem;padding-left:.5rem;}.buttonContainer.jsx-1087235193{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.projectButton.jsx-1087235193:last-child{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:inline;margin-left:auto;margin-right:1rem;margin-bottom:.5rem;text-decoration:none;}.projectButton.jsx-1087235193:first-child{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:inline;margin-left:1rem;margin-bottom:.5rem;}.projectButton.jsx-1087235193{width:7rem;line-height:2.5rem;border-radius:1rem;color:#fff;text-align:center;background-color:rgb(1,1,40);opacity:1;-webkit-transition:opacity;transition:opacity;}.projectButton.jsx-1087235193:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGcUIsQUFHc0MsQUFRQSxBQUlELEFBUUQsQUFNRSxBQU1HLEFBTUosQUFRQyxBQUlPLEFBU0EsQUFPVCxBQVdJLFdBeERILEFBOENPLENBbEVOLEFBWUEsQUEwQk8sQ0E5QlQsQUFrQkUsRUFtRGpCLENBN0N3QixPQVhILENBcEJILEFBUWxCLE1BMER1QixFQTVCRixJQU5DLENBL0JLLEdBb0IzQixTQWtCd0IsQUE0QlQsS0FsQ2YsS0EvQnVCLENBa0VELFNBNUJDLEdBU0osQUFTQSxFQWJuQixHQTFDeUIsQ0FrRVUsUUF6RFosQ0FjRixBQXdCQSxBQVNBLENBbEJyQixTQXJDQSxPQStDc0IsQUFTRSxHQVVWLFVBQ1MsS0FuQkMsRUFTeEIsa0JBUnlCLFFBMUJ6QixhQTJCQSxBQWtCQSxnQkEzRDJCLG1HQUNWLGFBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQcm9qZWN0TW9kYWwgZnJvbSAnLi9Qcm9qZWN0TW9kYWwvUHJvamVjdE1vZGFsJztcblxuY2xhc3MgUHJvamVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU9wZW5Nb2RhbCA9IHRoaXMuaGFuZGxlT3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VNb2RhbCA9IHRoaXMuaGFuZGxlQ2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGluZyBlc2NhcGUgY2xvc2VcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZSkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LnByb2plY3RJZCkgcmV0dXJuXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvcHJvamVjdHMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9wcm9qZWN0cycpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHRoZSBtb2RhbCBvcGVuIGNsYXNzIGZyb20gdGhlIGJvZHkuIHdlIHdpbGwgdXNlIHRoaXMgY2xhc3MgdG8gbG9jayBzY3JvbGwgb2YgYm9keSB3aGVuIHRoZSBtb2RhbCBpcyBvcGVuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxPcGVuJyk7XG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcuY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtYWluJykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgIH1cblxuICAgIGhhbmRsZU9wZW5Nb2RhbChlLCBpZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goeyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IHByb2plY3RJZDogaWQgfSB9KTtcblxuICAgICAgICAvL3JlbW92ZSB0aGUgbW9kYWwgb3BlbiBjbGFzcyBmcm9tIHRoZSBib2R5LiB3ZSB3aWxsIHVzZSB0aGlzIGNsYXNzIHRvIGxvY2sgc2Nyb2xsIG9mIGJvZHkgd2hlbiB0aGUgbW9kYWwgaXMgb3BlblxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsT3BlbicpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19uZXh0JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcuY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbWFpbicpLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcm91dGVyLCBwcm9qZWN0VGl0bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFByb2plY3RUaXRsZSA9IHRoaXMucHJvcHMucHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvICsvZywgXCJcIik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7cm91dGVyLnF1ZXJ5LnByb2plY3RJZCA9PSBmb3JtYXR0ZWRQcm9qZWN0VGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Zvcm1hdHRlZFByb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbD17dGhpcy5oYW5kbGVPcGVuTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmhhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDb250ZW50PXtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29udGVudD17dGhpcy5wcm9wcy5tb2RhbE1haW5Db250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyaWVzVXNlZD17dGhpcy5wcm9wcy5saWJyYXJpZXNVc2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2l0SHViTGluaz17dGhpcy5wcm9wcy5naXRIdWJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFVSTD17dGhpcy5wcm9wcy5wcm9qZWN0VVJMfVxuICAgICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbnNob3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltZ1NyY30gYWx0PXt0aGlzLnByb3BzLmltZ0FsdH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2plY3RUaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wcm9qZWN0RGVzY308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtmb3JtYXR0ZWRQcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50LCBpZCkgPT4gdGhpcy5oYW5kbGVPcGVuTW9kYWwoZXZlbnQsIGZvcm1hdHRlZFByb2plY3RUaXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdEJ1dHRvblwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0aGlzLnByb3BzLnByb2plY3RVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0QnV0dG9uXCI+TGF1bmNoPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgLnByb2plY3RDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1M3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMSwxLDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2NyZWVuc2hvdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RGb290ZXIgPiBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEZvb3RlciA+IHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC45cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0QnV0dG9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RCdXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RCdXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEsIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2plY3QpOyJdfQ== */\n/*@ sourceURL=components/Project/Project.js */'
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



var ProjectModal = function (_React$Component) {
    _inherits(ProjectModal, _React$Component);

    function ProjectModal(props) {
        _classCallCheck(this, ProjectModal);

        return _possibleConstructorReturn(this, (ProjectModal.__proto__ || Object.getPrototypeOf(ProjectModal)).call(this, props));
    }

    _createClass(ProjectModal, [{
        key: 'closeModal',
        value: function closeModal(e) {
            if (this._project === e.target) {
                if (this.props.closeModal) {
                    this.props.closeModal();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (
                // storing a reference to the projectModal's Overlay. We use this in closeModal method to 
                // ensure that only a click outside of the dialog will exit the modal.
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { ref: function ref(el) {
                            return _this2._project = el;
                        }, onClick: function onClick(e) {
                            return _this2.closeModal(e);
                        }, className: 'jsx-815369486' + ' ' + 'modalOverlay',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-815369486' + ' ' + 'modalDialog',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            {
                                className: 'jsx-815369486' + ' ' + 'infoModalContainer',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'h1',
                                {
                                    className: 'jsx-815369486' + ' ' + 'infoModalHeader',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    }
                                },
                                this.props.headerContent
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                {
                                    className: 'jsx-815369486' + ' ' + 'infoModalContent',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 26
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'h2',
                                    {
                                        className: 'jsx-815369486',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 27
                                        }
                                    },
                                    'Description:'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'p',
                                    {
                                        className: 'jsx-815369486',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28
                                        }
                                    },
                                    this.props.mainContent
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'h2',
                                    {
                                        className: 'jsx-815369486',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    },
                                    'Libraries Used:'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'ul',
                                    {
                                        className: 'jsx-815369486' + ' ' + 'librariesList',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 30
                                        }
                                    },
                                    this.props.librariesUsed.map(function (library, index) {
                                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            'li',
                                            { key: library + index, className: 'jsx-815369486',
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 31
                                                }
                                            },
                                            library
                                        );
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                {
                                    className: 'jsx-815369486' + ' ' + 'linkContainer',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 34
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'a',
                                    {
                                        href: this.props.gitHubLink,
                                        target: '_blank',
                                        className: 'jsx-815369486' + ' ' + 'modalProjectButton',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    },
                                    'Github Repo'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'a',
                                    {
                                        href: this.props.projectURL,

                                        target: '_blank',
                                        className: 'jsx-815369486' + ' ' + 'modalProjectButton',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 42
                                        }
                                    },
                                    'Launch'
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                        styleId: '815369486',
                        css: '.modalOverlay.jsx-815369486{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:rgba(1,1,40,.2);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;left:0;right:0;top:0;bottom:0;margin:auto;}.modalDialog.jsx-815369486{background-color:rgba(1,1,40,.9);border:.1rem solid rgb(204,204,204);border-radius:4px;outline:none;color:rgb(1,1,40);padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:100%;max-height:75%;z-index:20;overflow:hidden;}.infoModalContainer.jsx-815369486{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;width:100%;overflow-y:scroll;overflow-x:hidden;-webkit-flex:1;-ms-flex:1;flex:1;}.infoModalHeader.jsx-815369486{color:#000;width:75%;border-bottom:.2rem solid rgb(204,204,204);background-color:#fff;border-bottom:2px solid rgb(1,1,40);padding:1rem 1rem;border-radius:4px;font-size:2.5rem;margin:0 auto;}.infoModalContent.jsx-815369486{overflow-y:scroll;overflow-x:hidden;width:75%;margin:0 auto;-webkit-flex:1;-ms-flex:1;flex:1;padding:1rem 1rem;background-color:#fff;-webkit-overflow-scrolling:touch;border-radius:4px;font-size:1.5rem;}.infoModalContent.jsx-815369486>h2.jsx-815369486{text-align:left;margin:1rem;font-size:1.5rem;}.librariesList.jsx-815369486{text-align:left;}.linkContainer.jsx-815369486{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:none;-ms-flex:none;flex:none;height:5rem;width:75%;margin:0 auto;padding:0 1rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;border-top:2px solid rgb(1,1,40);border-radius:4px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.linkContainer.jsx-815369486>a.jsx-815369486{width:9rem;border-radius:1rem;margin:1rem;text-align:center;line-height:2.5rem;color:#fff;background-color:rgb(1,1,40);text-decoration:none;}@media screen and (max-height:700px) and (orientation:landscape){.modalDialog.jsx-815369486{width:75%;max-height:80%;}}@media screen and (min-width:900px){.modalDialog.jsx-815369486{max-height:85%;width:75%;}.infoModalHeader.jsx-815369486{font-size:3rem;}.infoModalContent.jsx-815369486{font-size:2rem;}.infoModalContent.jsx-815369486>h2.jsx-815369486{font-size:2rem;}.linkContainer.jsx-815369486>a.jsx-815369486:hover{cursor:pointer;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0TW9kYWwvUHJvamVjdE1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EaUIsQUFHd0MsQUFZa0IsQUFpQnBCLEFBU0YsQUFXTyxBQWFGLEFBTUEsQUFJSCxBQWNGLEFBWUcsQUFRSyxBQUtBLEFBSUEsQUFJQSxBQUlBLFVBeEJBLENBNURULEFBZ0RTLElBdEZOLEFBMEdDLEFBS2QsQUFJQSxBQUlBLEFBSUEsQ0E3RFksQUFNaEIsRUFuQnNCLEdBVjJCLElBNEQ3QyxBQVFBLEdBNUNpQixFQXdCTCxHQTNFMEIsR0FzQzVCLE1Bc0NRLEdBeEJ0QixDQWJrQixjQUNQLEFBcUNZLElBakRHLEtBM0JKLEtBZ0JELEFBMkNQLEtBa0JDLE9BakR5QixDQTNCdkIsRUFiYyxDQTBGSSxHQXRDYixPQXRDQSxXQXVDSSxLQXBEQyxBQXVFWCxFQXpERixDQTRFVyxHQWxESCxNQXpCTCxBQXlESCxLQW5CdUIsSUF6QnRCLENBNkNHLEVBaENJLEFBa0R0QixRQTlEc0IsSUE2Q0gsTUFoQ0UsUUFaQyxBQXdCQSxDQXFCWSxRQWhDaEIsU0FaUCxBQXdCVSxLQVhyQixZQVlBLENBeEMwQixhQWZILEVBK0J2QiwrREFmMkIsRUEyREQsc0JBQ1csSUEzRTFCLE9BQ0MsUUFDRixNQUNHLFFBeUVTLENBeEVOLFlBQ2hCLEtBd0V1Qix3QkE3REQsa0JBQ1AsV0FDSSxlQUNKLFdBQ0ssY0EwRHBCLEVBekRBIiwiZmlsZSI6ImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0TW9kYWwvUHJvamVjdE1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQcm9qZWN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Byb2plY3QgPT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyBzdG9yaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9qZWN0TW9kYWwncyBPdmVybGF5LiBXZSB1c2UgdGhpcyBpbiBjbG9zZU1vZGFsIG1ldGhvZCB0byBcbiAgICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IG9ubHkgYSBjbGljayBvdXRzaWRlIG9mIHRoZSBkaWFsb2cgd2lsbCBleGl0IHRoZSBtb2RhbC5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtlbCA9PiB0aGlzLl9wcm9qZWN0ID0gZWx9IGNsYXNzTmFtZT0nbW9kYWxPdmVybGF5JyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbG9zZU1vZGFsKGUpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxEaWFsb2cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9Nb2RhbENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImluZm9Nb2RhbEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvTW9kYWxDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRlc2NyaXB0aW9uOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMubWFpbkNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MaWJyYXJpZXMgVXNlZDo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaWJyYXJpZXNMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpYnJhcmllc1VzZWQubWFwKChsaWJyYXJ5LCBpbmRleCkgPT4gPGxpIGtleT17bGlicmFyeSArIGluZGV4fT57bGlicmFyeX08L2xpPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGhpcy5wcm9wcy5naXRIdWJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbFByb2plY3RCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViIFJlcG9cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGhpcy5wcm9wcy5wcm9qZWN0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbFByb2plY3RCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF1bmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsT3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxLDEsNDAsLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbERpYWxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsMSw0MCwuOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDEsMSw0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvTW9kYWxIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjJyZW0gc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMSwxLDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvTW9kYWxDb250ZW50ID4gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGlicmFyaWVzTGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigxLDEsNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rQ29udGFpbmVyID4gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMSwgNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbERpYWxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAubW9kYWxEaWFsb2cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDg1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5mb01vZGFsSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQgPiBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlua0NvbnRhaW5lciA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNb2RhbDtcblxuIl19 */\n/*@ sourceURL=components/Project/ProjectModal/ProjectModal.js */'
                    })
                )
            );
        }
    }]);

    return ProjectModal;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

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
                imgSrc: '../static/naHands.gif',
                imgAlt: 'North American Dactylonomy Gif',
                projectTitle: 'Dactylonomy',
                projectDesc: 'Dactylonomy describes the way that one uses their fingers to express numbers. This project is an interesting look at how this is different among people from different countries and cultures around the world.',
                modalMainContent: 'Dactylonomy is a server-side rendered website that allows users to gain a visual understanding of Dactlynomony using gifs and animation. It also allows the user to select their own Dactylonomy, or describe one entirely unique to them. I am currently a contributor to this repository alongside another developer and a designer. Although this project is still under development, feel free to check out the repository by clicking one of the links below.',
                librariesUsed: ['React', 'Next', 'PostCSS', 'Firebase'],
                gitHubLink: 'https://github.com/hessnd/dactylonomy',
                projectURL: 'https://github.com/hessnd/dactylonomy',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/costManager.png',
                imgAlt: 'costManager Dashboard Picture',
                projectTitle: 'Cost Manager',
                projectDesc: 'Cost Manager is built using the MERN stack and allows users to track their monthly expenses. Users can choose when their monthly budget period begins, as well as customize their spending categories.',
                modalMainContent: 'Cost Manager was born when I wanted with the ability to set a budget period in Intuit\'s Mint App. I knew I wanted to make something that involved data, and allowing the user to enter their own monthly budget period proved to be an interesting challenge. This app allows the user to create spending categories, log new expenses, edit spending categories, choose their Month Start Date, and delete entries and categories. The most complicated part of this build was creating the logic behind the Month Start Date, which was accomplished via the Aggregate Pipeline Operators in MongoDB and a custom interval based on the user\'s Month Start Date. One future improvement would be to rebuild the back-end with Firebase and integrate User Authentication.',
                librariesUsed: ['React', 'Redux', 'Reselect', 'Mongoose', 'Express', 'Webpack', 'Lodash', 'ReCharts', 'React-Modal', 'React-Table', 'Moment', 'FontAwesome', 'React-Spinners'],
                gitHubLink: 'https://github.com/bortojac/costManager',
                projectURL: 'https://cost-manager.now.sh',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/jammmingBackgroundPhoto.jpg',
                imgAlt: 'Jammming Picture',
                projectTitle: 'Jammming',
                projectDesc: 'Jammming is built with ReactJS and allows users create and edit playlists from their Spotify Account. Please click the launch button below to log in with your spotify account and begin.',
                modalMainContent: 'I first built Jammming with an online course on codecademy.com, but the project essentially only required making an API call and displaying them. In order to make the application more usable, I implemented the ability to load and edit playlists, as well as added some overall styling. Furthermore, I rebuilt the entire app to use Redux, Reselect, and Webpack in order to make the code more readable and scalable. One improvement I would like to add would be sound recognition technology (perhaps using Gracenote GNSDK).',
                librariesUsed: ['React', 'Redux', 'Reselect', 'Express', 'Webpack', 'Lodash', 'React-Modal', 'React-Spinners'],
                gitHubLink: 'https://github.com/bortojac/jammming',
                projectURL: 'https://jammming.now.sh',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/ravenousBackgroundMobile.jpg',
                imgAlt: 'Ravenous Picture',
                projectTitle: 'Ravenous',
                projectDesc: 'Ravenous is built with ReactJS and calls the Yelp.com business API to allow users to search for local businesses by ranking, reviews, and relevance.',
                modalMainContent: 'This was my first React App, and it was initially built as a project for an online course on codecademy.com. Beyond the project requirements, I added a loading spinner, search functionality on keydown, and re-search when the sort input is changed. Future improvement ideas include the FourSquare API to provide more information on a selected business, Uber ride requests using Uber\'s Button API, or other travel information from a free API.',
                librariesUsed: ['React', 'React-Spinners'],
                gitHubLink: 'https://github.com/bortojac/ravenous',
                projectURL: 'https://ravenous.now.sh',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Project_Project__["a" /* default */], {
                imgSrc: '../static/portfolioScreenshot.png',
                imgAlt: 'Portfolio Site Picture',
                projectTitle: 'This Portfolio Website',
                projectDesc: 'This Portfolio site is a server-side rendered web app built using Next.js, and it shows my current portfolio of projects.',
                modalMainContent: 'Originally, my portfolio site was built with jQuery before I had learned React. After building Cost Manager, I wanted to learn about server-side rendering because it provides better SEO and performance. As a future improvement, I would like to add a custom server and integrate each one of my side projects.',
                librariesUsed: ['React', 'Next', 'Fontawesome'],
                gitHubLink: 'https://github.com/bortojac/portfolio',
                projectURL: 'https://www.jackborto.com',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                styleId: '1843130720',
                css: '.projectsWrapper.jsx-1843130720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEaUIsQUFHa0MsMEVBQ04saUNBQ08sc0RBQ0MseURBQ2MsMkhBQ2hDIiwiZmlsZSI6InBhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3RzV3JhcHBlclwiPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvbmFIYW5kcy5naWZcIlxuICAgICAgICAgICAgICAgIGltZ0FsdD1cIk5vcnRoIEFtZXJpY2FuIERhY3R5bG9ub215IEdpZlwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPVwiRGFjdHlsb25vbXlcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiRGFjdHlsb25vbXkgZGVzY3JpYmVzIHRoZSB3YXkgdGhhdCBvbmUgdXNlcyB0aGVpciBmaW5nZXJzIHRvIGV4cHJlc3MgbnVtYmVycy4gVGhpcyBwcm9qZWN0IGlzIGFuIGludGVyZXN0aW5nIGxvb2sgYXQgaG93IHRoaXMgaXMgZGlmZmVyZW50IGFtb25nIHBlb3BsZSBmcm9tIGRpZmZlcmVudCBjb3VudHJpZXMgYW5kIGN1bHR1cmVzIGFyb3VuZCB0aGUgd29ybGQuXCJcbiAgICAgICAgICAgICAgICBtb2RhbE1haW5Db250ZW50PVwiRGFjdHlsb25vbXkgaXMgYSBzZXJ2ZXItc2lkZSByZW5kZXJlZCB3ZWJzaXRlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGdhaW4gYSB2aXN1YWwgdW5kZXJzdGFuZGluZyBvZiBEYWN0bHlub21vbnkgdXNpbmcgZ2lmcyBhbmQgYW5pbWF0aW9uLiBJdCBhbHNvIGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3QgdGhlaXIgb3duIERhY3R5bG9ub215LCBvciBkZXNjcmliZSBvbmUgZW50aXJlbHkgdW5pcXVlIHRvIHRoZW0uIEkgYW0gY3VycmVudGx5IGEgY29udHJpYnV0b3IgdG8gdGhpcyByZXBvc2l0b3J5IGFsb25nc2lkZSBhbm90aGVyIGRldmVsb3BlciBhbmQgYSBkZXNpZ25lci4gQWx0aG91Z2ggdGhpcyBwcm9qZWN0IGlzIHN0aWxsIHVuZGVyIGRldmVsb3BtZW50LCBmZWVsIGZyZWUgdG8gY2hlY2sgb3V0IHRoZSByZXBvc2l0b3J5IGJ5IGNsaWNraW5nIG9uZSBvZiB0aGUgbGlua3MgYmVsb3cuXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ05leHQnLCAnUG9zdENTUycsICdGaXJlYmFzZSddfVxuICAgICAgICAgICAgICAgIGdpdEh1Ykxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vaGVzc25kL2RhY3R5bG9ub215XCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VVJMPVwiaHR0cHM6Ly9naXRodWIuY29tL2hlc3NuZC9kYWN0eWxvbm9teVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvY29zdE1hbmFnZXIucG5nXCJcbiAgICAgICAgICAgICAgICBpbWdBbHQ9XCJjb3N0TWFuYWdlciBEYXNoYm9hcmQgUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPVwiQ29zdCBNYW5hZ2VyXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzYz1cIkNvc3QgTWFuYWdlciBpcyBidWlsdCB1c2luZyB0aGUgTUVSTiBzdGFjayBhbmQgYWxsb3dzIHVzZXJzIHRvIHRyYWNrIHRoZWlyIG1vbnRobHkgZXhwZW5zZXMuIFVzZXJzIGNhbiBjaG9vc2Ugd2hlbiB0aGVpciBtb250aGx5IGJ1ZGdldCBwZXJpb2QgYmVnaW5zLCBhcyB3ZWxsIGFzIGN1c3RvbWl6ZSB0aGVpciBzcGVuZGluZyBjYXRlZ29yaWVzLlwiXG4gICAgICAgICAgICAgICAgbW9kYWxNYWluQ29udGVudD1cIkNvc3QgTWFuYWdlciB3YXMgYm9ybiB3aGVuIEkgd2FudGVkIHdpdGggdGhlIGFiaWxpdHkgdG8gc2V0IGEgYnVkZ2V0IHBlcmlvZCBpbiBJbnR1aXQncyBNaW50IEFwcC4gSSBrbmV3IEkgd2FudGVkIHRvIG1ha2Ugc29tZXRoaW5nIHRoYXQgaW52b2x2ZWQgZGF0YSwgYW5kIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVudGVyIHRoZWlyIG93biBtb250aGx5IGJ1ZGdldCBwZXJpb2QgcHJvdmVkIHRvIGJlIGFuIGludGVyZXN0aW5nIGNoYWxsZW5nZS4gVGhpcyBhcHAgYWxsb3dzIHRoZSB1c2VyIHRvIGNyZWF0ZSBzcGVuZGluZyBjYXRlZ29yaWVzLCBsb2cgbmV3IGV4cGVuc2VzLCBlZGl0IHNwZW5kaW5nIGNhdGVnb3JpZXMsIGNob29zZSB0aGVpciBNb250aCBTdGFydCBEYXRlLCBhbmQgZGVsZXRlIGVudHJpZXMgYW5kIGNhdGVnb3JpZXMuIFRoZSBtb3N0IGNvbXBsaWNhdGVkIHBhcnQgb2YgdGhpcyBidWlsZCB3YXMgY3JlYXRpbmcgdGhlIGxvZ2ljIGJlaGluZCB0aGUgTW9udGggU3RhcnQgRGF0ZSwgd2hpY2ggd2FzIGFjY29tcGxpc2hlZCB2aWEgdGhlIEFnZ3JlZ2F0ZSBQaXBlbGluZSBPcGVyYXRvcnMgaW4gTW9uZ29EQiBhbmQgYSBjdXN0b20gaW50ZXJ2YWwgYmFzZWQgb24gdGhlIHVzZXIncyBNb250aCBTdGFydCBEYXRlLiBPbmUgZnV0dXJlIGltcHJvdmVtZW50IHdvdWxkIGJlIHRvIHJlYnVpbGQgdGhlIGJhY2stZW5kIHdpdGggRmlyZWJhc2UgYW5kIGludGVncmF0ZSBVc2VyIEF1dGhlbnRpY2F0aW9uLlwiXG4gICAgICAgICAgICAgICAgbGlicmFyaWVzVXNlZD17WydSZWFjdCcsICdSZWR1eCcsICdSZXNlbGVjdCcsICdNb25nb29zZScsICdFeHByZXNzJywgJ1dlYnBhY2snLCAnTG9kYXNoJywgJ1JlQ2hhcnRzJywgJ1JlYWN0LU1vZGFsJywgJ1JlYWN0LVRhYmxlJywgJ01vbWVudCcsICdGb250QXdlc29tZScsICdSZWFjdC1TcGlubmVycyddfVxuICAgICAgICAgICAgICAgIGdpdEh1Ykxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vYm9ydG9qYWMvY29zdE1hbmFnZXJcIlxuICAgICAgICAgICAgICAgIHByb2plY3RVUkw9XCJodHRwczovL2Nvc3QtbWFuYWdlci5ub3cuc2hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgICAgaW1nU3JjPVwiLi4vc3RhdGljL2phbW1taW5nQmFja2dyb3VuZFBob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgaW1nQWx0PVwiSmFtbW1pbmcgUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPVwiSmFtbW1pbmdcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiSmFtbW1pbmcgaXMgYnVpbHQgd2l0aCBSZWFjdEpTIGFuZCBhbGxvd3MgdXNlcnMgY3JlYXRlIGFuZCBlZGl0IHBsYXlsaXN0cyBmcm9tIHRoZWlyIFNwb3RpZnkgQWNjb3VudC4gUGxlYXNlIGNsaWNrIHRoZSBsYXVuY2ggYnV0dG9uIGJlbG93IHRvIGxvZyBpbiB3aXRoIHlvdXIgc3BvdGlmeSBhY2NvdW50IGFuZCBiZWdpbi5cIlxuICAgICAgICAgICAgICAgIG1vZGFsTWFpbkNvbnRlbnQ9XCJJIGZpcnN0IGJ1aWx0IEphbW1taW5nIHdpdGggYW4gb25saW5lIGNvdXJzZSBvbiBjb2RlY2FkZW15LmNvbSwgYnV0IHRoZSBwcm9qZWN0IGVzc2VudGlhbGx5IG9ubHkgcmVxdWlyZWQgbWFraW5nIGFuIEFQSSBjYWxsIGFuZCBkaXNwbGF5aW5nIHRoZW0uIEluIG9yZGVyIHRvIG1ha2UgdGhlIGFwcGxpY2F0aW9uIG1vcmUgdXNhYmxlLCBJIGltcGxlbWVudGVkIHRoZSBhYmlsaXR5IHRvIGxvYWQgYW5kIGVkaXQgcGxheWxpc3RzLCBhcyB3ZWxsIGFzIGFkZGVkIHNvbWUgb3ZlcmFsbCBzdHlsaW5nLiBGdXJ0aGVybW9yZSwgSSByZWJ1aWx0IHRoZSBlbnRpcmUgYXBwIHRvIHVzZSBSZWR1eCwgUmVzZWxlY3QsIGFuZCBXZWJwYWNrIGluIG9yZGVyIHRvIG1ha2UgdGhlIGNvZGUgbW9yZSByZWFkYWJsZSBhbmQgc2NhbGFibGUuIE9uZSBpbXByb3ZlbWVudCBJIHdvdWxkIGxpa2UgdG8gYWRkIHdvdWxkIGJlIHNvdW5kIHJlY29nbml0aW9uIHRlY2hub2xvZ3kgKHBlcmhhcHMgdXNpbmcgR3JhY2Vub3RlIEdOU0RLKS5cIlxuICAgICAgICAgICAgICAgIGxpYnJhcmllc1VzZWQ9e1snUmVhY3QnLCAnUmVkdXgnLCAnUmVzZWxlY3QnLCAnRXhwcmVzcycsICdXZWJwYWNrJywgJ0xvZGFzaCcsICdSZWFjdC1Nb2RhbCcsICdSZWFjdC1TcGlubmVycyddfVxuICAgICAgICAgICAgICAgIGdpdEh1Ykxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vYm9ydG9qYWMvamFtbW1pbmdcIlxuICAgICAgICAgICAgICAgIHByb2plY3RVUkw9XCJodHRwczovL2phbW1taW5nLm5vdy5zaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvcmF2ZW5vdXNCYWNrZ3JvdW5kTW9iaWxlLmpwZ1wiXG4gICAgICAgICAgICAgICAgaW1nQWx0PVwiUmF2ZW5vdXMgUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPVwiUmF2ZW5vdXNcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiUmF2ZW5vdXMgaXMgYnVpbHQgd2l0aCBSZWFjdEpTIGFuZCBjYWxscyB0aGUgWWVscC5jb20gYnVzaW5lc3MgQVBJIHRvIGFsbG93IHVzZXJzIHRvIHNlYXJjaCBmb3IgbG9jYWwgYnVzaW5lc3NlcyBieSByYW5raW5nLCByZXZpZXdzLCBhbmQgcmVsZXZhbmNlLlwiXG4gICAgICAgICAgICAgICAgbW9kYWxNYWluQ29udGVudD1cIlRoaXMgd2FzIG15IGZpcnN0IFJlYWN0IEFwcCwgYW5kIGl0IHdhcyBpbml0aWFsbHkgYnVpbHQgYXMgYSBwcm9qZWN0IGZvciBhbiBvbmxpbmUgY291cnNlIG9uIGNvZGVjYWRlbXkuY29tLiBCZXlvbmQgdGhlIHByb2plY3QgcmVxdWlyZW1lbnRzLCBJIGFkZGVkIGEgbG9hZGluZyBzcGlubmVyLCBzZWFyY2ggZnVuY3Rpb25hbGl0eSBvbiBrZXlkb3duLCBhbmQgcmUtc2VhcmNoIHdoZW4gdGhlIHNvcnQgaW5wdXQgaXMgY2hhbmdlZC4gRnV0dXJlIGltcHJvdmVtZW50IGlkZWFzIGluY2x1ZGUgdGhlIEZvdXJTcXVhcmUgQVBJIHRvIHByb3ZpZGUgbW9yZSBpbmZvcm1hdGlvbiBvbiBhIHNlbGVjdGVkIGJ1c2luZXNzLCBVYmVyIHJpZGUgcmVxdWVzdHMgdXNpbmcgVWJlcidzIEJ1dHRvbiBBUEksIG9yIG90aGVyIHRyYXZlbCBpbmZvcm1hdGlvbiBmcm9tIGEgZnJlZSBBUEkuXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ1JlYWN0LVNwaW5uZXJzJ119XG4gICAgICAgICAgICAgICAgZ2l0SHViTGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9ib3J0b2phYy9yYXZlbm91c1wiXG4gICAgICAgICAgICAgICAgcHJvamVjdFVSTD1cImh0dHBzOi8vcmF2ZW5vdXMubm93LnNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAgICAgIGltZ1NyYz1cIi4uL3N0YXRpYy9wb3J0Zm9saW9TY3JlZW5zaG90LnBuZ1wiXG4gICAgICAgICAgICAgICAgaW1nQWx0PVwiUG9ydGZvbGlvIFNpdGUgUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPVwiVGhpcyBQb3J0Zm9saW8gV2Vic2l0ZVwiXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2M9XCJUaGlzIFBvcnRmb2xpbyBzaXRlIGlzIGEgc2VydmVyLXNpZGUgcmVuZGVyZWQgd2ViIGFwcCBidWlsdCB1c2luZyBOZXh0LmpzLCBhbmQgaXQgc2hvd3MgbXkgY3VycmVudCBwb3J0Zm9saW8gb2YgcHJvamVjdHMuXCJcbiAgICAgICAgICAgICAgICBtb2RhbE1haW5Db250ZW50PVwiT3JpZ2luYWxseSwgbXkgcG9ydGZvbGlvIHNpdGUgd2FzIGJ1aWx0IHdpdGggalF1ZXJ5IGJlZm9yZSBJIGhhZCBsZWFybmVkIFJlYWN0LiBBZnRlciBidWlsZGluZyBDb3N0IE1hbmFnZXIsIEkgd2FudGVkIHRvIGxlYXJuIGFib3V0IHNlcnZlci1zaWRlIHJlbmRlcmluZyBiZWNhdXNlIGl0IHByb3ZpZGVzIGJldHRlciBTRU8gYW5kIHBlcmZvcm1hbmNlLiBBcyBhIGZ1dHVyZSBpbXByb3ZlbWVudCwgSSB3b3VsZCBsaWtlIHRvIGFkZCBhIGN1c3RvbSBzZXJ2ZXIgYW5kIGludGVncmF0ZSBlYWNoIG9uZSBvZiBteSBzaWRlIHByb2plY3RzLlwiXG4gICAgICAgICAgICAgICAgbGlicmFyaWVzVXNlZD17WydSZWFjdCcsICdOZXh0JywgJ0ZvbnRhd2Vzb21lJ119XG4gICAgICAgICAgICAgICAgZ2l0SHViTGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9ib3J0b2phYy9wb3J0Zm9saW9cIlxuICAgICAgICAgICAgICAgIHByb2plY3RVUkw9XCJodHRwczovL3d3dy5qYWNrYm9ydG8uY29tXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLnByb2plY3RzV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuKVxuIl19 */\n/*@ sourceURL=pages/projects.js */'
            })
        )
    );
});

/***/ }),

/***/ 3:
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
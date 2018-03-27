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
                { id: 'container', className: 'jsx-2856226063' + ' ' + 'container',
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
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-2856226063',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            className: 'jsx-2856226063',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        'Jack Borto'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'description', name: 'Jack Borto Portfolio Site', className: 'jsx-2856226063',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2856226063',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato|Slabo+27px', rel: 'stylesheet', className: 'jsx-2856226063',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_Header__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'main',
                    {
                        className: 'jsx-2856226063' + ' ' + 'content',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    this.props.children
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer_Footer__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2856226063',
                    css: 'html{height:100%;font-size:60%;}body{height:100%;width:100%;font-size:1.4em;background:#fff;margin:0;}body.modalOpen{overflow:hidden;}#__next{height:100%;}.container{min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;background-color:rgba(1,1,40,.7);background-size:cover;background-blend-mode:darken;background-image:url("../static/manhattan.jpg");}.content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCcUIsQUFHcUMsQUFJQSxBQU9JLEFBR0osQUFHSSxBQVNILFlBekJDLEFBSUgsQUFVZixJQUhBLEFBTWlCLE9BWkcsR0FKcEIsYUFLb0IsZ0JBQ1AsU0FDYixVQWtCcUIsZ0JBUkEsK0NBU1YsZ0JBUjZCLGlCQVN4QyxnQkFSMEIsc0JBQ08sNkJBQ21CLGdEQUNwRCIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYm9ydG9qYWMvRG9jdW1lbnRzL1JlcG9zaXRvcnkvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkphY2sgQm9ydG88L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiSmFjayBCb3J0byBQb3J0Zm9saW8gU2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvfFNsYWJvKzI3cHhcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYm9keS5tb2RhbE9wZW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDQwLCAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zdGF0aWMvbWFuaGF0dGFuLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=components/Layout.js */'
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
                    className: 'jsx-1432721839' + ' ' + 'projectContainer',
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
                        className: 'jsx-1432721839' + ' ' + 'screenshotContainer',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'figure',
                        {
                            className: 'jsx-1432721839',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.imgSrc, alt: this.props.imgAlt, className: 'jsx-1432721839',
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
                        className: 'jsx-1432721839' + ' ' + 'projectFooter',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-1432721839',
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
                            className: 'jsx-1432721839',
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
                            className: 'jsx-1432721839' + ' ' + 'buttonContainer',
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
                                className: 'jsx-1432721839' + ' ' + 'projectButton',
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
                                className: 'jsx-1432721839' + ' ' + 'projectButton',
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
                    styleId: '1432721839',
                    css: '.projectContainer.jsx-1432721839{width:35rem;margin:1rem;height:50rem;background-color:#fff;color:rgb(1,1,40);border-radius:.5rem;}.screenshotContainer.jsx-1432721839{height:35rem;width:100%;}figure.jsx-1432721839{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:.5rem;}img.jsx-1432721839{width:100%;height:auto;max-height:35rem;}.projectFooter.jsx-1432721839{height:15rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.projectFooter.jsx-1432721839>h2.jsx-1432721839{margin:.1rem;text-align:center;}.projectFooter.jsx-1432721839>p.jsx-1432721839{height:6rem;padding-right:.5rem;padding-left:.5rem;}.buttonContainer.jsx-1432721839{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.projectButton.jsx-1432721839:last-child{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:inline;margin-left:auto;margin-right:1rem;margin-bottom:.5rem;text-decoration:none;}.projectButton.jsx-1432721839:first-child{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:inline;margin-left:1rem;margin-bottom:.5rem;}.projectButton.jsx-1432721839{width:7rem;line-height:2.5rem;border-radius:1rem;color:#fff;text-align:center;background-color:rgb(1,1,40);opacity:1;-webkit-transition:opacity;transition:opacity;}.projectButton.jsx-1432721839:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGcUIsQUFHc0MsQUFRQSxBQUlELEFBUUQsQUFNRSxBQU1BLEFBS0QsQUFNQyxBQUlPLEFBU0EsQUFPVCxBQVdJLFdBckRILEFBMkNPLENBL0ROLEFBWUEsQUF5Qk8sQ0E3QlQsQUFrQkUsQUFNSyxFQTBDdEIsUUFyRHFCLENBcEJILEFBUWxCLE1BdUR1QixDQS9CdkIsQ0FLdUIsS0FwQ0ksR0FvQjNCLFNBMkNlLEVBMUJmLFFBcEN1QixDQStERCxZQW5CSCxBQVNBLEVBYm5CLEdBdkN5QixDQStEVSxRQXREWixDQWNGLEFBcUJBLEFBU0EsVUFwRHJCLE9BNENzQixBQVNFLEdBVVYsVUFDUyxLQW5CQyxFQVN4QixrQkFSeUIsUUF2QnpCLGFBd0JBLEFBa0JBLGdCQXhEMkIsbUdBQ1YsYUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9qZWN0L1Byb2plY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JvcnRvamFjL0RvY3VtZW50cy9SZXBvc2l0b3J5L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByb2plY3RNb2RhbCBmcm9tICcuL1Byb2plY3RNb2RhbC9Qcm9qZWN0TW9kYWwnO1xuXG5jbGFzcyBQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3Blbk1vZGFsID0gdGhpcy5oYW5kbGVPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU1vZGFsID0gdGhpcy5oYW5kbGVDbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGhhbmRsaW5nIGVzY2FwZSBjbG9zZVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihlKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkucHJvamVjdElkKSByZXR1cm5cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9wcm9qZWN0cycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL3Byb2plY3RzJyk7XG5cbiAgICAgICAgLy9yZW1vdmUgdGhlIG1vZGFsIG9wZW4gY2xhc3MgZnJvbSB0aGUgYm9keS4gd2Ugd2lsbCB1c2UgdGhpcyBjbGFzcyB0byBsb2NrIHNjcm9sbCBvZiBib2R5IHdoZW4gdGhlIG1vZGFsIGlzIG9wZW5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbE9wZW4nKTtcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19uZXh0JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ21haW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3Blbk1vZGFsKGUsIGlkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgcHJvamVjdElkOiBpZCB9IH0pO1xuXG4gICAgICAgIC8vcmVtb3ZlIHRoZSBtb2RhbCBvcGVuIGNsYXNzIGZyb20gdGhlIGJvZHkuIHdlIHdpbGwgdXNlIHRoaXMgY2xhc3MgdG8gbG9jayBzY3JvbGwgb2YgYm9keSB3aGVuIHRoZSBtb2RhbCBpcyBvcGVuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxPcGVuJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtYWluJykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyByb3V0ZXIsIHByb2plY3RUaXRsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJvamVjdFRpdGxlID0gdGhpcy5wcm9wcy5wcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gKy9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtyb3V0ZXIucXVlcnkucHJvamVjdElkID09IGZvcm1hdHRlZFByb2plY3RUaXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17Zm9ybWF0dGVkUHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsPXt0aGlzLmhhbmRsZU9wZW5Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuaGFuZGxlQ2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNvbnRlbnQ9e3Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db250ZW50PXt0aGlzLnByb3BzLm1vZGFsTWFpbkNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXt0aGlzLnByb3BzLmxpYnJhcmllc1VzZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBnaXRIdWJMaW5rPXt0aGlzLnByb3BzLmdpdEh1Ykxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VVJMPXt0aGlzLnByb3BzLnByb2plY3RVUkx9XG4gICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuc2hvdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1nU3JjfSBhbHQ9e3RoaXMucHJvcHMuaW1nQWx0fT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0Rm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvamVjdFRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnByb2plY3REZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Zvcm1hdHRlZFByb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGlkKSA9PiB0aGlzLmhhbmRsZU9wZW5Nb2RhbChldmVudCwgZm9ybWF0dGVkUHJvamVjdFRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0QnV0dG9uXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMucHJvcHMucHJvamVjdFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RCdXR0b25cIj5MYXVuY2g8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAucHJvamVjdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigxLDEsNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zY3JlZW5zaG90Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0Rm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEZvb3RlciA+IGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEZvb3RlciA+IHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RCdXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMSwgNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0QnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvamVjdCk7Il19 */\n/*@ sourceURL=components/Project/Project.js */'
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
                        }, className: 'jsx-471973991' + ' ' + 'modalOverlay',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-471973991' + ' ' + 'modalDialog',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            {
                                className: 'jsx-471973991' + ' ' + 'infoModalContainer',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'h1',
                                {
                                    className: 'jsx-471973991' + ' ' + 'infoModalHeader',
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
                                    className: 'jsx-471973991' + ' ' + 'infoModalContent',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 26
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'h2',
                                    {
                                        className: 'jsx-471973991',
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
                                        className: 'jsx-471973991',
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
                                        className: 'jsx-471973991',
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
                                        className: 'jsx-471973991' + ' ' + 'librariesList',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 30
                                        }
                                    },
                                    this.props.librariesUsed.map(function (library, index) {
                                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            'li',
                                            { key: library + index, className: 'jsx-471973991',
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
                                    className: 'jsx-471973991' + ' ' + 'linkContainer',
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
                                        className: 'jsx-471973991' + ' ' + 'modalProjectButton',
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
                                        className: 'jsx-471973991' + ' ' + 'modalProjectButton',
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
                        styleId: '471973991',
                        css: '.modalOverlay.jsx-471973991{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:rgba(1,1,40,.2);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;left:0;right:0;top:0;bottom:0;margin:auto;}.modalDialog.jsx-471973991{background-color:rgba(1,1,40,.9);border:.1rem solid rgb(204,204,204);border-radius:4px;outline:none;color:rgb(1,1,40);padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:100%;z-index:20;overflow:hidden;}.infoModalContainer.jsx-471973991{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;width:100%;height:45rem;overflow-y:scroll;overflow-x:hidden;-webkit-flex:1;-ms-flex:1;flex:1;}.infoModalHeader.jsx-471973991{color:#000;width:75%;border-bottom:.2rem solid rgb(204,204,204);background-color:#fff;border-bottom:2px solid rgb(1,1,40);padding:1rem 1rem;border-radius:4px;font-size:2.5rem;margin:0 auto;}.infoModalContent.jsx-471973991{overflow-y:scroll;overflow-x:hidden;width:75%;margin:0 auto;-webkit-flex:1;-ms-flex:1;flex:1;padding:1rem 1rem;background-color:#fff;-webkit-overflow-scrolling:touch;border-radius:4px;font-size:1.5rem;}.infoModalContent.jsx-471973991>h2.jsx-471973991{text-align:left;margin:1rem;font-size:1.5rem;}.librariesList.jsx-471973991{text-align:left;}.linkContainer.jsx-471973991{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:none;-ms-flex:none;flex:none;height:5rem;width:75%;margin:0 auto;padding:0 1rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;border-top:2px solid rgb(1,1,40);border-radius:4px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.linkContainer.jsx-471973991>a.jsx-471973991{width:9rem;border-radius:1rem;margin:1rem;text-align:center;line-height:2.5rem;color:#fff;background-color:rgb(1,1,40);text-decoration:none;}@media screen and (max-height:600px) and (orientation:landscape){.modalDialog.jsx-471973991{width:75%;}.infoModalContainer.jsx-471973991{height:30rem;}}@media screen and (min-width:900px){.infoModalContainer.jsx-471973991{height:55rem;}.infoModalHeader.jsx-471973991{font-size:3rem;}.infoModalContent.jsx-471973991{font-size:2rem;}.infoModalContent.jsx-471973991>h2.jsx-471973991{font-size:2rem;}.linkContainer.jsx-471973991>a.jsx-471973991:hover{cursor:pointer;}.modalDialog.jsx-471973991{width:75%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0TW9kYWwvUHJvamVjdE1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EaUIsQUFHd0MsQUFZa0IsQUFnQnBCLEFBVUYsQUFXTyxBQWFGLEFBTUEsQUFJSCxBQWNGLEFBWUcsQUFJRyxBQVFBLEFBSUYsQUFJSSxBQUlBLEFBSUEsQUFHTCxVQTlCZCxBQStCQSxDQTNGVSxBQWdEUyxFQWdCbkIsQUFRQSxFQTlHYSxBQWtIYixBQUlBLEFBSUEsQUFJQSxDQWhFWSxBQU1oQixFQW5Cc0IsR0FWMkIsT0F3QjVCLEVBd0JMLEdBM0UwQixHQXNDNUIsTUFzQ1EsR0F4QnRCLENBYmtCLGNBQ1AsQUFxQ1ksSUFqREcsS0EzQkosS0FlRCxBQTRDUCxLQWtCQyxPQWpEeUIsQ0EzQnZCLEVBYmMsQ0EwRkksR0F0Q2IsT0F0Q0EsV0F1Q0ksS0FwREMsQUF1RVgsRUF6REYsQ0E0RVcsR0FsREgsTUF6QkwsQUF5REgsS0FuQnVCLElBMUJ0QixDQThDRyxFQWhDSSxBQWtEdEIsUUEvRGlCLElBOENFLE1BaENFLEdBYkMsS0F5QkEsQ0FxQlksUUFoQ2hCLElBYkksS0F5QkQsS0FYckIsUUFiVyxJQXlCWCxDQXhDMEIsYUFmSCxlQStCdkIsa0RBZjJCLEVBMkRELHNCQUNXLElBM0UxQixPQUNDLFFBQ0YsTUFDRyxRQXlFUyxDQXhFTixZQUNoQixLQXdFdUIsd0JBN0RELGtCQUNQLFdBQ0EsV0FDSyxnQkFDcEIsYUEwREEiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9qZWN0L1Byb2plY3RNb2RhbC9Qcm9qZWN0TW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JvcnRvamFjL0RvY3VtZW50cy9SZXBvc2l0b3J5L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFByb2plY3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoZSkge1xuICAgICAgICBpZiAodGhpcy5fcHJvamVjdCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIHN0b3JpbmcgYSByZWZlcmVuY2UgdG8gdGhlIHByb2plY3RNb2RhbCdzIE92ZXJsYXkuIFdlIHVzZSB0aGlzIGluIGNsb3NlTW9kYWwgbWV0aG9kIHRvIFxuICAgICAgICAgICAgLy8gZW5zdXJlIHRoYXQgb25seSBhIGNsaWNrIG91dHNpZGUgb2YgdGhlIGRpYWxvZyB3aWxsIGV4aXQgdGhlIG1vZGFsLlxuICAgICAgICAgICAgPGRpdiByZWY9e2VsID0+IHRoaXMuX3Byb2plY3QgPSBlbH0gY2xhc3NOYW1lPSdtb2RhbE92ZXJsYXknIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsb3NlTW9kYWwoZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbERpYWxvZyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb01vZGFsQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW5mb01vZGFsSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9Nb2RhbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5tYWluQ29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxpYnJhcmllcyBVc2VkOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpYnJhcmllc0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGlicmFyaWVzVXNlZC5tYXAoKGxpYnJhcnksIGluZGV4KSA9PiA8bGkga2V5PXtsaWJyYXJ5ICsgaW5kZXh9PntsaWJyYXJ5fTwvbGk+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0aGlzLnByb3BzLmdpdEh1Ykxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsUHJvamVjdEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXRodWIgUmVwb1xuICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0aGlzLnByb3BzLnByb2plY3RVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsUHJvamVjdEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXVuY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAubW9kYWxPdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsMSw0MCwuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsRGlhbG9nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwxLDQwLC45KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMSwxLDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5mb01vZGFsQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvTW9kYWxIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjJyZW0gc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMSwxLDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvTW9kYWxDb250ZW50ID4gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGlicmFyaWVzTGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigxLDEsNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rQ29udGFpbmVyID4gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMSwgNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbERpYWxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbEhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9Nb2RhbENvbnRlbnQgPiBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlua0NvbnRhaW5lciA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbERpYWxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNb2RhbDtcblxuIl19 */\n/*@ sourceURL=components/Project/ProjectModal/ProjectModal.js */'
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
                imgSrc: '../static/costManagerDashScreenshot.png',
                imgAlt: 'costManager Dashboard Picture',
                projectTitle: 'Cost Manager',
                projectDesc: 'Cost Manager is built using the MERN stack and allows users to track their monthly expenses. Users can choose when their monthly budget period begins, as well as customize their spending categories.',
                modalMainContent: 'Cost Manager was born when I wanted with the ability to set a budget period in Intuit\'s Mint App. I knew I wanted to make something that involved data, and allowing the user to enter their own monthly budget period proved to be an interesting challenge. This app allows the user to create spending categories, log new expenses, edit spending categories, choose their Month Start Date, and delete entries and categories. The most complicated part of this build was creating the logic behind the Month Start Date, which was accomplished via the Aggregate Pipeline Operators in MongoDB and a custom interval based on the user\'s Month Start Date. One future improvement would be to rebuild the back-end with Firebase and integrate User Authentication.',
                librariesUsed: ['React', 'Redux', 'Reselect', 'Mongoose', 'Express', 'Webpack', 'Lodash', 'ReCharts', 'React-Modal', 'React-Table', 'Moment', 'FontAwesome', 'React-Spinners'],
                gitHubLink: 'https://github.com/bortojac/costManager',
                projectURL: 'https://cost-manager.now.sh',
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
                modalMainContent: 'I first built Jammming with an online course on codecademy.com, but the project essentially only required making an API call and displaying them. In order to make the application more usable, I implemented the ability to load and edit playlists, as well as added some overall styling. Furthermore, I rebuilt the entire app to use Redux, Reselect, and Webpack in order to make the code more readable and scalable. One improvement I would like to add would be sound recognition technology (perhaps using Gracenote GNSDK).',
                librariesUsed: ['React', 'Redux', 'Reselect', 'Express', 'Webpack', 'Lodash', 'React-Modal', 'React-Spinners'],
                gitHubLink: 'https://github.com/bortojac/jammming',
                projectURL: 'https://jammming.now.sh',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
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
                    lineNumber: 27
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
                    lineNumber: 37
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                styleId: '1843130720',
                css: '.projectsWrapper.jsx-1843130720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDaUIsQUFHa0MsMEVBQ04saUNBQ08sc0RBQ0MseURBQ2MsMkhBQ2hDIiwiZmlsZSI6InBhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ib3J0b2phYy9Eb2N1bWVudHMvUmVwb3NpdG9yeS9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdC9Qcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3RzV3JhcHBlclwiPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvY29zdE1hbmFnZXJEYXNoU2NyZWVuc2hvdC5wbmdcIlxuICAgICAgICAgICAgICAgIGltZ0FsdD1cImNvc3RNYW5hZ2VyIERhc2hib2FyZCBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9XCJDb3N0IE1hbmFnZXJcIlxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjPVwiQ29zdCBNYW5hZ2VyIGlzIGJ1aWx0IHVzaW5nIHRoZSBNRVJOIHN0YWNrIGFuZCBhbGxvd3MgdXNlcnMgdG8gdHJhY2sgdGhlaXIgbW9udGhseSBleHBlbnNlcy4gVXNlcnMgY2FuIGNob29zZSB3aGVuIHRoZWlyIG1vbnRobHkgYnVkZ2V0IHBlcmlvZCBiZWdpbnMsIGFzIHdlbGwgYXMgY3VzdG9taXplIHRoZWlyIHNwZW5kaW5nIGNhdGVnb3JpZXMuXCJcbiAgICAgICAgICAgICAgICBtb2RhbE1haW5Db250ZW50PVwiQ29zdCBNYW5hZ2VyIHdhcyBib3JuIHdoZW4gSSB3YW50ZWQgd2l0aCB0aGUgYWJpbGl0eSB0byBzZXQgYSBidWRnZXQgcGVyaW9kIGluIEludHVpdCdzIE1pbnQgQXBwLiBJIGtuZXcgSSB3YW50ZWQgdG8gbWFrZSBzb21ldGhpbmcgdGhhdCBpbnZvbHZlZCBkYXRhLCBhbmQgYWxsb3dpbmcgdGhlIHVzZXIgdG8gZW50ZXIgdGhlaXIgb3duIG1vbnRobHkgYnVkZ2V0IHBlcmlvZCBwcm92ZWQgdG8gYmUgYW4gaW50ZXJlc3RpbmcgY2hhbGxlbmdlLiBUaGlzIGFwcCBhbGxvd3MgdGhlIHVzZXIgdG8gY3JlYXRlIHNwZW5kaW5nIGNhdGVnb3JpZXMsIGxvZyBuZXcgZXhwZW5zZXMsIGVkaXQgc3BlbmRpbmcgY2F0ZWdvcmllcywgY2hvb3NlIHRoZWlyIE1vbnRoIFN0YXJ0IERhdGUsIGFuZCBkZWxldGUgZW50cmllcyBhbmQgY2F0ZWdvcmllcy4gVGhlIG1vc3QgY29tcGxpY2F0ZWQgcGFydCBvZiB0aGlzIGJ1aWxkIHdhcyBjcmVhdGluZyB0aGUgbG9naWMgYmVoaW5kIHRoZSBNb250aCBTdGFydCBEYXRlLCB3aGljaCB3YXMgYWNjb21wbGlzaGVkIHZpYSB0aGUgQWdncmVnYXRlIFBpcGVsaW5lIE9wZXJhdG9ycyBpbiBNb25nb0RCIGFuZCBhIGN1c3RvbSBpbnRlcnZhbCBiYXNlZCBvbiB0aGUgdXNlcidzIE1vbnRoIFN0YXJ0IERhdGUuIE9uZSBmdXR1cmUgaW1wcm92ZW1lbnQgd291bGQgYmUgdG8gcmVidWlsZCB0aGUgYmFjay1lbmQgd2l0aCBGaXJlYmFzZSBhbmQgaW50ZWdyYXRlIFVzZXIgQXV0aGVudGljYXRpb24uXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ1JlZHV4JywgJ1Jlc2VsZWN0JywgJ01vbmdvb3NlJywgJ0V4cHJlc3MnLCAnV2VicGFjaycsICdMb2Rhc2gnLCAnUmVDaGFydHMnLCAnUmVhY3QtTW9kYWwnLCAnUmVhY3QtVGFibGUnLCAnTW9tZW50JywgJ0ZvbnRBd2Vzb21lJywgJ1JlYWN0LVNwaW5uZXJzJ119XG4gICAgICAgICAgICAgICAgZ2l0SHViTGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9ib3J0b2phYy9jb3N0TWFuYWdlclwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFVSTD1cImh0dHBzOi8vY29zdC1tYW5hZ2VyLm5vdy5zaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWdTcmM9XCIuLi9zdGF0aWMvamFtbW1pbmdCYWNrZ3JvdW5kUGhvdG8uanBnXCJcbiAgICAgICAgICAgICAgICBpbWdBbHQ9XCJKYW1tbWluZyBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9XCJKYW1tbWluZ1wiXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2M9XCJKYW1tbWluZyBpcyBidWlsdCB3aXRoIFJlYWN0SlMgYW5kIGFsbG93cyB1c2VycyBjcmVhdGUgYW5kIGVkaXQgcGxheWxpc3RzIGZyb20gdGhlaXIgU3BvdGlmeSBBY2NvdW50LiBQbGVhc2UgY2xpY2sgdGhlIGxhdW5jaCBidXR0b24gYmVsb3cgdG8gbG9nIGluIHdpdGggeW91ciBzcG90aWZ5IGFjY291bnQgYW5kIGJlZ2luLlwiXG4gICAgICAgICAgICAgICAgbW9kYWxNYWluQ29udGVudD1cIkkgZmlyc3QgYnVpbHQgSmFtbW1pbmcgd2l0aCBhbiBvbmxpbmUgY291cnNlIG9uIGNvZGVjYWRlbXkuY29tLCBidXQgdGhlIHByb2plY3QgZXNzZW50aWFsbHkgb25seSByZXF1aXJlZCBtYWtpbmcgYW4gQVBJIGNhbGwgYW5kIGRpc3BsYXlpbmcgdGhlbS4gSW4gb3JkZXIgdG8gbWFrZSB0aGUgYXBwbGljYXRpb24gbW9yZSB1c2FibGUsIEkgaW1wbGVtZW50ZWQgdGhlIGFiaWxpdHkgdG8gbG9hZCBhbmQgZWRpdCBwbGF5bGlzdHMsIGFzIHdlbGwgYXMgYWRkZWQgc29tZSBvdmVyYWxsIHN0eWxpbmcuIEZ1cnRoZXJtb3JlLCBJIHJlYnVpbHQgdGhlIGVudGlyZSBhcHAgdG8gdXNlIFJlZHV4LCBSZXNlbGVjdCwgYW5kIFdlYnBhY2sgaW4gb3JkZXIgdG8gbWFrZSB0aGUgY29kZSBtb3JlIHJlYWRhYmxlIGFuZCBzY2FsYWJsZS4gT25lIGltcHJvdmVtZW50IEkgd291bGQgbGlrZSB0byBhZGQgd291bGQgYmUgc291bmQgcmVjb2duaXRpb24gdGVjaG5vbG9neSAocGVyaGFwcyB1c2luZyBHcmFjZW5vdGUgR05TREspLlwiXG4gICAgICAgICAgICAgICAgbGlicmFyaWVzVXNlZD17WydSZWFjdCcsICdSZWR1eCcsICdSZXNlbGVjdCcsICdFeHByZXNzJywgJ1dlYnBhY2snLCAnTG9kYXNoJywgJ1JlYWN0LU1vZGFsJywgJ1JlYWN0LVNwaW5uZXJzJ119XG4gICAgICAgICAgICAgICAgZ2l0SHViTGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9ib3J0b2phYy9qYW1tbWluZ1wiXG4gICAgICAgICAgICAgICAgcHJvamVjdFVSTD1cImh0dHBzOi8vamFtbW1pbmcubm93LnNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAgICAgIGltZ1NyYz1cIi4uL3N0YXRpYy9yYXZlbm91c0JhY2tncm91bmRNb2JpbGUuanBnXCJcbiAgICAgICAgICAgICAgICBpbWdBbHQ9XCJSYXZlbm91cyBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9XCJSYXZlbm91c1wiXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2M9XCJSYXZlbm91cyBpcyBidWlsdCB3aXRoIFJlYWN0SlMgYW5kIGNhbGxzIHRoZSBZZWxwLmNvbSBidXNpbmVzcyBBUEkgdG8gYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBsb2NhbCBidXNpbmVzc2VzIGJ5IHJhbmtpbmcsIHJldmlld3MsIGFuZCByZWxldmFuY2UuXCJcbiAgICAgICAgICAgICAgICBtb2RhbE1haW5Db250ZW50PVwiVGhpcyB3YXMgbXkgZmlyc3QgUmVhY3QgQXBwLCBhbmQgaXQgd2FzIGluaXRpYWxseSBidWlsdCBhcyBhIHByb2plY3QgZm9yIGFuIG9ubGluZSBjb3Vyc2Ugb24gY29kZWNhZGVteS5jb20uIEJleW9uZCB0aGUgcHJvamVjdCByZXF1aXJlbWVudHMsIEkgYWRkZWQgYSBsb2FkaW5nIHNwaW5uZXIsIHNlYXJjaCBmdW5jdGlvbmFsaXR5IG9uIGtleWRvd24sIGFuZCByZS1zZWFyY2ggd2hlbiB0aGUgc29ydCBpbnB1dCBpcyBjaGFuZ2VkLiBGdXR1cmUgaW1wcm92ZW1lbnQgaWRlYXMgaW5jbHVkZSB0aGUgRm91clNxdWFyZSBBUEkgdG8gcHJvdmlkZSBtb3JlIGluZm9ybWF0aW9uIG9uIGEgc2VsZWN0ZWQgYnVzaW5lc3MsIFViZXIgcmlkZSByZXF1ZXN0cyB1c2luZyBVYmVyJ3MgQnV0dG9uIEFQSSwgb3Igb3RoZXIgdHJhdmVsIGluZm9ybWF0aW9uIGZyb20gYSBmcmVlIEFQSS5cIlxuICAgICAgICAgICAgICAgIGxpYnJhcmllc1VzZWQ9e1snUmVhY3QnLCAnUmVhY3QtU3Bpbm5lcnMnXX1cbiAgICAgICAgICAgICAgICBnaXRIdWJMaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL2JvcnRvamFjL3JhdmVub3VzXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VVJMPVwiaHR0cHM6Ly9yYXZlbm91cy5ub3cuc2hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgICAgaW1nU3JjPVwiLi4vc3RhdGljL3BvcnRmb2xpb1NjcmVlbnNob3QucG5nXCJcbiAgICAgICAgICAgICAgICBpbWdBbHQ9XCJQb3J0Zm9saW8gU2l0ZSBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9XCJUaGlzIFBvcnRmb2xpbyBXZWJzaXRlXCJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzYz1cIlRoaXMgUG9ydGZvbGlvIHNpdGUgaXMgYSBzZXJ2ZXItc2lkZSByZW5kZXJlZCB3ZWIgYXBwIGJ1aWx0IHVzaW5nIE5leHQuanMsIGFuZCBpdCBzaG93cyBteSBjdXJyZW50IHBvcnRmb2xpbyBvZiBwcm9qZWN0cy5cIlxuICAgICAgICAgICAgICAgIG1vZGFsTWFpbkNvbnRlbnQ9XCJPcmlnaW5hbGx5LCBteSBwb3J0Zm9saW8gc2l0ZSB3YXMgYnVpbHQgd2l0aCBqUXVlcnkgYmVmb3JlIEkgaGFkIGxlYXJuZWQgUmVhY3QuIEFmdGVyIGJ1aWxkaW5nIENvc3QgTWFuYWdlciwgSSB3YW50ZWQgdG8gbGVhcm4gYWJvdXQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGJlY2F1c2UgaXQgcHJvdmlkZXMgYmV0dGVyIFNFTyBhbmQgcGVyZm9ybWFuY2UuIEFzIGEgZnV0dXJlIGltcHJvdmVtZW50LCBJIHdvdWxkIGxpa2UgdG8gYWRkIGEgY3VzdG9tIHNlcnZlciBhbmQgaW50ZWdyYXRlIGVhY2ggb25lIG9mIG15IHNpZGUgcHJvamVjdHMuXCJcbiAgICAgICAgICAgICAgICBsaWJyYXJpZXNVc2VkPXtbJ1JlYWN0JywgJ05leHQnLCAnRm9udGF3ZXNvbWUnXX1cbiAgICAgICAgICAgICAgICBnaXRIdWJMaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL2JvcnRvamFjL3BvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgcHJvamVjdFVSTD1cImh0dHBzOi8vd3d3LmphY2tib3J0by5jb21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAucHJvamVjdHNXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4pXG4iXX0= */\n/*@ sourceURL=pages/projects.js */'
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
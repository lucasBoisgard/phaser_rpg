webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lucasboisgard_Lab_ionisx_ORION_home_new_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reset_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reset.scss */ "./src/Reset.scss");
/* harmony import */ var _Reset_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Reset_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Global.scss */ "./src/Global.scss");
/* harmony import */ var _Global_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Global_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_Home_Home_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home/Home.jsx */ "./src/pages/Home/Home.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_GraduateFormation_GraduateFormation_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/GraduateFormation/GraduateFormation.jsx */ "./src/pages/GraduateFormation/GraduateFormation.jsx");
/* harmony import */ var _components_Navigation_HomeNav_HomeNavigation_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Navigation/HomeNav/HomeNavigation.jsx */ "./src/components/Navigation/HomeNav/HomeNavigation.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _pages_FreeFormation_FreeFormation_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/FreeFormation/FreeFormation.jsx */ "./src/pages/FreeFormation/FreeFormation.jsx");
/* harmony import */ var _pages_Business_Business_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Business/Business.jsx */ "./src/pages/Business/Business.jsx");
/* harmony import */ var _components_Button_Buttons_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Button/Buttons.scss */ "./src/components/Button/Buttons.scss");
/* harmony import */ var _components_Button_Buttons_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Button_Buttons_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Navigation_BusinessNav_BusinessNav_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Navigation/BusinessNav/BusinessNav.jsx */ "./src/components/Navigation/BusinessNav/BusinessNav.jsx");
/* harmony import */ var _pages_SignUp_SignUp_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/SignUp/SignUp.jsx */ "./src/pages/SignUp/SignUp.jsx");
/* harmony import */ var _pages_Login_Login_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Login/Login.jsx */ "./src/pages/Login/Login.jsx");
/* harmony import */ var _components_Search_Search_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Search/Search.jsx */ "./src/components/Search/Search.jsx");

var _jsxFileName = "/Users/lucasboisgard/Lab/ionisx/ORION_home_new/src/App.js";

/* eslint-disable react-hooks/exhaustive-deps */

















const App = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_lucasboisgard_Lab_ionisx_ORION_home_new_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        showingComponent = _useState2[0],
        setShowingComponent = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_lucasboisgard_Lab_ionisx_ORION_home_new_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        showNav = _useState4[0],
        setShowNav = _useState4[1];

  const setComponent = () => {
    setShowingComponent(true);
  };

  const removeComponent = () => {
    setShowingComponent(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (window.location.pathname === '/business') {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [window.location.pathname]);

  const currentNav = () => {
    if (showNav) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_BusinessNav_BusinessNav_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_HomeNav_HomeNavigation_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        triggerParent: setComponent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      });
    }
  };

  const conditionalComponent = () => {
    if (showingComponent === false) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_Home_Home_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: undefined
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "searchDd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btnSearchBack",
        onClick: removeComponent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }, "chevron_left"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }, "Retour"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search_Search_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: undefined
      }));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, currentNav(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    exact: true,
    path: "/",
    component: conditionalComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/formationDiplomante",
    component: _pages_GraduateFormation_GraduateFormation_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/formationLibre",
    component: _pages_FreeFormation_FreeFormation_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/business",
    component: _pages_Business_Business_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/signUp",
    component: _pages_SignUp_SignUp_jsx__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/login",
    component: _pages_Login_Login_jsx__WEBPACK_IMPORTED_MODULE_15__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.1c49db96a814e79c1340.hot-update.js.map
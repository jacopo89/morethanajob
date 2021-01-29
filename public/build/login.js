(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./assets/js/Layout/LoginLayout.js":
/*!*****************************************!*\
  !*** ./assets/js/Layout/LoginLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginLayout; });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./assets/js/Layout/Footer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./assets/js/routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Redux/actions */ "./assets/js/Redux/actions.js");







function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["position: absolute;  width: 100%; min-height:100%;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











function LoginLayout(_ref) {
  var page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DesktopDiv, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      backgroundColor: "white",
      minHeight: "100vh"
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      width: "100%",
      paddingTop: 53
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      paddingTop: 81,
      paddingLeft: 40,
      paddingRight: 40,
      margin: "0 auto",
      width: "100%",
      background: "linear-gradient(".concat(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["bordeaux"], " 50%,50%, whitesmoke 50%)"),
      flexGrow: 1
    }
  }, page), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
}
var DesktopDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());

var Header = function Header() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state;
  }),
      user = _useSelector.user;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state;
  }),
      authenticated = _useSelector2.authenticated;

  var changeLanguage = function changeLanguage(code) {
    i18n.changeLanguage(code);
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_15__["switchLanguage"](code));
  };

  var signOut = function signOut() {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_15__["logOut"]());
    window.location.href = "/login";
  };

  var LanguageDropdown = function LanguageDropdown(_ref2) {
    var props = Object.assign({}, _ref2);
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], props, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('it');
      }
    }, " Italiano"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('en');
      }
    }, " English"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('ar');
      }
    }, " \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('gr');
      }
    }, " \u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"));
  };

  var CustomDropdown = function CustomDropdown(_ref3) {
    var props = Object.assign({}, _ref3);
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], _extends({
      placement: "leftStart"
    }, props), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["dashboardPage"],
      eventKey: "1",
      icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        icon: "home"
      })
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["serviceSearchPage"],
      eventKey: "3"
    }, t('Search projects')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["searchUserPage"],
      eventKey: "4"
    }, t('Search organisations')), user && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["profile"](user.profileName)
    }, t('Profile')), user && user.roles.includes("ROLE_ADMIN") && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Menu, {
      pullLeft: true,
      title: t('Administration')
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["administrationProjects"],
      eventKey: "e-2"
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["administrationCollaborations"],
      eventKey: "e-3"
    }, "Services and collaborations"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["administrationUsers"],
      eventKey: "e-4"
    }, "Users"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["administrationCategories"],
      eventKey: "e-5"
    }, "Categories"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["administrationExpertise"],
      eventKey: "e-6"
    }, "Expertise"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: _routes__WEBPACK_IMPORTED_MODULE_13__["administrationNews"],
      eventKey: "e-7"
    }, "News")), authenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: "/backend/logout"
    }, t('Logout')), !authenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
      href: "/login"
    }, t('Login')));
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Navbar"], {
    appearance: "subtle",
    style: {
      position: "fixed",
      zIndex: 100,
      width: "100%",
      height: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["headerHeight"],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Navbar"].Header, {
    style: {
      height: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["headerHeight"],
      flexGrow: 1
    },
    href: _routes__WEBPACK_IMPORTED_MODULE_13__["dashboardPage"]
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    style: {
      cursor: "pointer"
    },
    height: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["headerHeight"],
    src: "/defaults/en_morethanajob.png",
    className: "navbar-brand logo"
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Navbar"].Body, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LanguageDropdown, {
    title: t('Language')
  }),  false && false, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CustomDropdown, {
    icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      icon: "bars"
    }),
    placement: "bottomEnd"
  }))));
};

/***/ }),

/***/ "./assets/js/login.js":
/*!****************************!*\
  !*** ./assets/js/login.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login_Pages_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login/Pages/Login */ "./assets/js/Login/Pages/Login.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Redux_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Redux/reducer */ "./assets/js/Redux/reducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _Layout_LoginLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Layout/LoginLayout */ "./assets/js/Layout/LoginLayout.js");









var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_5__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_Redux_reducer__WEBPACK_IMPORTED_MODULE_6__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_0__["render"](react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_LoginLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
  page: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Login_Pages_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}), ";")), document.getElementById('login-form'));

/***/ }),

/***/ 8:
/*!*********************************************************!*\
  !*** multi ./assets/js/login.js ./assets/less/app.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/login.js */"./assets/js/login.js");
module.exports = __webpack_require__(/*! ./assets/less/app.less */"./assets/less/app.less");


/***/ })

},[[8,"runtime","vendors~app~login","app~login"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTGF5b3V0L0xvZ2luTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbkxheW91dCIsInBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVhdXgiLCJmbGV4R3JvdyIsIkRlc2t0b3BEaXYiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhdXRoZW50aWNhdGVkIiwiY2hhbmdlTGFuZ3VhZ2UiLCJjb2RlIiwiQWN0aW9uVHlwZXMiLCJzaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiTGFuZ3VhZ2VEcm9wZG93biIsInByb3BzIiwiQ3VzdG9tRHJvcGRvd24iLCJSb3V0ZXMiLCJwcm9maWxlTmFtZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJ6SW5kZXgiLCJoZWFkZXJIZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkYXNoYm9hcmRQYWdlIiwiY3Vyc29yIiwiY29tcG9zZUVuaGFuY2VycyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUE2QjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUd4QyxTQUNJLDJEQUFDLFVBQUQsUUFDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFFLE9BQWxCO0FBQTJCQyxlQUFTLEVBQUM7QUFBckM7QUFBWixLQUNJLDJEQUFDLE1BQUQsT0FESixFQUVJO0FBQUssU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQyxNQUFUO0FBQWlCQyxZQUFNLEVBQUUsT0FBekI7QUFBa0NDLG1CQUFhLEVBQUUsUUFBakQ7QUFBMkRDLGNBQVEsRUFBRSxVQUFyRTtBQUFpRkMsU0FBRyxFQUFDLENBQXJGO0FBQXdGQyxXQUFLLEVBQUMsTUFBOUY7QUFBc0dDLGdCQUFVLEVBQUM7QUFBakg7QUFBWixLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNBLGdCQUFVLEVBQUMsRUFBWjtBQUFnQkMsaUJBQVcsRUFBQyxFQUE1QjtBQUFnQ0Msa0JBQVksRUFBQyxFQUE3QztBQUFpREMsWUFBTSxFQUFDLFFBQXhEO0FBQWtFSixXQUFLLEVBQUUsTUFBekU7QUFBaUZLLGdCQUFVLDRCQUFvQkMsMkVBQXBCLDhCQUEzRjtBQUFvSkMsY0FBUSxFQUFDO0FBQTdKO0FBQVosS0FDS2YsSUFETCxDQURKLEVBSUksMkRBQUMsK0NBQUQsT0FKSixDQUZKLENBREosQ0FESjtBQVlIO0FBRUQsSUFBTWdCLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBLHdCQUVPQyxxRUFBYyxFQUZyQjtBQUFBLE1BRUxDLENBRkssbUJBRUxBLENBRks7QUFBQSxNQUVGQyxJQUZFLG1CQUVGQSxJQUZFOztBQUdiLE1BQU1DLE9BQU8sR0FBR0Msb0VBQVUsRUFBMUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCOztBQUphLHFCQUtFQyxnRUFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFGO0FBQUEsR0FBTixDQUxiO0FBQUEsTUFLTkMsSUFMTSxnQkFLTkEsSUFMTTs7QUFBQSxzQkFNV0YsZ0VBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBRjtBQUFBLEdBQU4sQ0FOdEI7QUFBQSxNQU1ORSxhQU5NLGlCQU1OQSxhQU5NOztBQU9iLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsSUFBSSxFQUFJO0FBQzNCVixRQUFJLENBQUNTLGNBQUwsQ0FBb0JDLElBQXBCO0FBQ0FQLFlBQVEsQ0FBQ1EsOERBQUEsQ0FBMkJELElBQTNCLENBQUQsQ0FBUjtBQUVILEdBSkQ7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQlQsWUFBUSxDQUFDUSxzREFBQSxFQUFELENBQVI7QUFDQUUsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUFxQixRQUFyQjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQU1DLEtBQU47QUFBQSxXQUNyQiwyREFBQyxnREFBRCxFQUFjQSxLQUFkLEVBQ0ksMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsYUFBTyxFQUFFO0FBQUEsZUFBTVIsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQTtBQUF4QixtQkFESixFQUVJLDJEQUFDLGdEQUFELENBQVUsSUFBVjtBQUFlLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUE7QUFBeEIsa0JBRkosRUFHSSwyREFBQyxnREFBRCxDQUFVLElBQVY7QUFBZSxhQUFPLEVBQUU7QUFBQSxlQUFNQSxjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBO0FBQXhCLG9GQUhKLEVBSUksMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsYUFBTyxFQUFFO0FBQUEsZUFBTUEsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQTtBQUF4QiwyREFKSixDQURxQjtBQUFBLEdBQXpCOztBQVNBLE1BQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxRQUFNRCxLQUFOO0FBQUEsV0FDbkIsMkRBQUMsZ0RBQUQ7QUFBVSxlQUFTLEVBQUM7QUFBcEIsT0FBb0NBLEtBQXBDLEdBQ0ksMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFFRSxzREFBckI7QUFBMkMsY0FBUSxFQUFDLEdBQXBEO0FBQXdELFVBQUksRUFBRSwyREFBQyw0Q0FBRDtBQUFNLFlBQUksRUFBQztBQUFYO0FBQTlELGNBREosRUFJSSwyREFBQyxnREFBRCxDQUFVLElBQVY7QUFBZSxVQUFJLEVBQUVBLDBEQUFyQjtBQUErQyxjQUFRLEVBQUM7QUFBeEQsT0FBNkRwQixDQUFDLENBQUMsaUJBQUQsQ0FBOUQsQ0FKSixFQUtJLDJEQUFDLGdEQUFELENBQVUsSUFBVjtBQUFlLFVBQUksRUFBRW9CLHVEQUFyQjtBQUE0QyxjQUFRLEVBQUM7QUFBckQsT0FBMERwQixDQUFDLENBQUMsc0JBQUQsQ0FBM0QsQ0FMSixFQU1LUSxJQUFJLElBQUksMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFFWSxnREFBQSxDQUFlWixJQUFJLENBQUNhLFdBQXBCO0FBQXJCLE9BQXlEckIsQ0FBQyxDQUFDLFNBQUQsQ0FBMUQsQ0FOYixFQU9LUSxJQUFJLElBQUlBLElBQUksQ0FBQ2MsS0FBTCxDQUFXQyxRQUFYLENBQW9CLFlBQXBCLENBQVIsSUFBNkMsMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsY0FBUSxNQUF2QjtBQUF3QixXQUFLLEVBQUV2QixDQUFDLENBQUMsZ0JBQUQ7QUFBaEMsT0FDMUMsMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFFb0IsK0RBQXJCO0FBQW9ELGNBQVEsRUFBQztBQUE3RCxrQkFEMEMsRUFFMUMsMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFFQSxxRUFBckI7QUFBMEQsY0FBUSxFQUFDO0FBQW5FLHFDQUYwQyxFQUcxQywyREFBQyxnREFBRCxDQUFVLElBQVY7QUFBZSxVQUFJLEVBQUVBLDREQUFyQjtBQUFpRCxjQUFRLEVBQUM7QUFBMUQsZUFIMEMsRUFJMUMsMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFFQSxpRUFBckI7QUFBc0QsY0FBUSxFQUFDO0FBQS9ELG9CQUowQyxFQUsxQywyREFBQyxnREFBRCxDQUFVLElBQVY7QUFBZSxVQUFJLEVBQUVBLGdFQUFyQjtBQUFxRCxjQUFRLEVBQUM7QUFBOUQsbUJBTDBDLEVBTTFDLDJEQUFDLGdEQUFELENBQVUsSUFBVjtBQUFlLFVBQUksRUFBRUEsMkRBQXJCO0FBQWdELGNBQVEsRUFBQztBQUF6RCxjQU4wQyxDQVBsRCxFQWVLWCxhQUFhLElBQUksMkRBQUMsZ0RBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFDO0FBQXBCLE9BQXdDVCxDQUFDLENBQUMsUUFBRCxDQUF6QyxDQWZ0QixFQWdCSyxDQUFDUyxhQUFELElBQWtCLDJEQUFDLGdEQUFELENBQVUsSUFBVjtBQUFlLFVBQUksRUFBQztBQUFwQixPQUErQlQsQ0FBQyxDQUFDLE9BQUQsQ0FBaEMsQ0FoQnZCLENBRG1CO0FBQUEsR0FBdkI7O0FBdUJBLFNBQU8sMkRBQUMsOENBQUQ7QUFBUSxjQUFVLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQUNmLGNBQVEsRUFBQyxPQUFWO0FBQW1CdUMsWUFBTSxFQUFDLEdBQTFCO0FBQStCckMsV0FBSyxFQUFDLE1BQXJDO0FBQTZDSixZQUFNLEVBQUMwQywrRUFBcEQ7QUFBa0UzQyxhQUFPLEVBQUMsTUFBMUU7QUFBa0Y0QyxnQkFBVSxFQUFDLFFBQTdGO0FBQXVHQyxvQkFBYyxFQUFDO0FBQXRIO0FBQW5DLEtBQ0gsMkRBQUMsOENBQUQsQ0FBUSxNQUFSO0FBQWUsU0FBSyxFQUFFO0FBQUM1QyxZQUFNLEVBQUMwQywrRUFBUjtBQUFzQi9CLGNBQVEsRUFBQztBQUEvQixLQUF0QjtBQUF5RCxRQUFJLEVBQUUwQixzREFBb0JRO0FBQW5GLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFDO0FBQVIsS0FBWjtBQUFnQyxVQUFNLEVBQUVKLCtFQUF4QztBQUFzRCxPQUFHLEVBQUMsK0JBQTFEO0FBQTBGLGFBQVMsRUFBQztBQUFwRyxJQURKLENBREcsRUFLSCwyREFBQyw4Q0FBRCxDQUFRLElBQVIsUUFDSSwyREFBQywyQ0FBRCxRQUNJLDJEQUFDLGdCQUFEO0FBQWtCLFNBQUssRUFBRXpCLENBQUMsQ0FBQyxVQUFEO0FBQTFCLElBREosRUFFSyxNQUFLLElBQUksS0FGZCxFQUdJLDJEQUFDLGNBQUQ7QUFBZ0IsUUFBSSxFQUFFLDJEQUFDLDRDQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsTUFBdEI7QUFBNEMsYUFBUyxFQUFDO0FBQXRELElBSEosQ0FESixDQUxHLENBQVA7QUFlUCxDQWhFRCxDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTThCLGdCQUFnQixHQUFHaEIsTUFBTSxDQUFDaUIsb0NBQVAsSUFBK0NDLDZDQUF4RTtBQUVBLElBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0Msc0RBQUQsRUFBU0wsZ0JBQWdCLENBQzlDTSw2REFBZSxDQUFDQyxtREFBRCxDQUQrQixDQUF6QixDQUF6QjtBQUtBQyxnREFBQSxDQUNJLDJEQUFDLG9EQUFEO0FBQVUsT0FBSyxFQUFFTDtBQUFqQixHQUNJLDJEQUFDLDhEQUFELFFBQ0ksMkRBQUMsMkRBQUQ7QUFBYSxNQUFJLEVBQUUsMkRBQUMsMERBQUQ7QUFBbkIsRUFESixNQURKLENBREosRUFNTU0sUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBTk4sRSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9yZGVhdXgsIGhlYWRlckhlaWdodH0gZnJvbSBcIi4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHtEcm9wZG93biwgTmF2YmFyLCBOYXYsIEljb259IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCAqIGFzIFJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQge3VzZUhpc3Rvcnl9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tIFwiLi4vUmVkdXgvYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkxheW91dCh7cGFnZX0pIHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERlc2t0b3BEaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsIG1pbkhlaWdodDpcIjEwMHZoXCJ9fT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDpcIjEwMCVcIiwgcGFkZGluZ1RvcDo1MyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6ODEsIHBhZGRpbmdMZWZ0OjQwLCBwYWRkaW5nUmlnaHQ6NDAsIG1hcmdpbjpcIjAgYXV0b1wiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmQ6YGxpbmVhci1ncmFkaWVudCgke2JvcmRlYXV4fSA1MCUsNTAlLCB3aGl0ZXNtb2tlIDUwJSlgLCBmbGV4R3JvdzoxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EZXNrdG9wRGl2Pilcbn1cblxuY29uc3QgRGVza3RvcERpdiA9IHN0eWxlZC5kaXZgcG9zaXRpb246IGFic29sdXRlOyAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6MTAwJTtgO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgICAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgICAgIGNvbnN0IHthdXRoZW50aWNhdGVkfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gY29kZSA9PiB7XG4gICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGNvZGUpO1xuICAgICAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMuc3dpdGNoTGFuZ3VhZ2UoY29kZSkpXG5cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLmxvZ091dCgpKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2xvZ2luXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBMYW5ndWFnZURyb3Bkb3duID0gKHsgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoJ2l0Jyl9ID4gSXRhbGlhbm88L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoJ2VuJyl9ID4gRW5nbGlzaDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZSgnYXInKX0gPiDYp9mE2YTYutipINin2YTYudix2KjZitipPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKCdncicpfSA+IM6VzrvOu863zr3Ouc66zqw8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IEN1c3RvbURyb3Bkb3duID0gKHsgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlbWVudD1cImxlZnRTdGFydFwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj17Um91dGVzLmRhc2hib2FyZFBhZ2V9IGV2ZW50S2V5PVwiMVwiIGljb249ezxJY29uIGljb249XCJob21lXCIgLz59PlxuICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9e1JvdXRlcy5zZXJ2aWNlU2VhcmNoUGFnZX0gZXZlbnRLZXk9XCIzXCI+e3QoJ1NlYXJjaCBwcm9qZWN0cycpfTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPXtSb3V0ZXMuc2VhcmNoVXNlclBhZ2V9IGV2ZW50S2V5PVwiNFwiPnt0KCdTZWFyY2ggb3JnYW5pc2F0aW9ucycpfTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiA8RHJvcGRvd24uSXRlbSBocmVmPXtSb3V0ZXMucHJvZmlsZSh1c2VyLnByb2ZpbGVOYW1lKX0gPnt0KCdQcm9maWxlJyl9PC9Ecm9wZG93bi5JdGVtPn1cbiAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSAmJiA8RHJvcGRvd24uTWVudSBwdWxsTGVmdCB0aXRsZT17dCgnQWRtaW5pc3RyYXRpb24nKX0gPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPXtSb3V0ZXMuYWRtaW5pc3RyYXRpb25Qcm9qZWN0c30gZXZlbnRLZXk9XCJlLTJcIj5Qcm9qZWN0czwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj17Um91dGVzLmFkbWluaXN0cmF0aW9uQ29sbGFib3JhdGlvbnN9IGV2ZW50S2V5PVwiZS0zXCI+U2VydmljZXMgYW5kIGNvbGxhYm9yYXRpb25zPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPXtSb3V0ZXMuYWRtaW5pc3RyYXRpb25Vc2Vyc30gZXZlbnRLZXk9XCJlLTRcIj5Vc2VyczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj17Um91dGVzLmFkbWluaXN0cmF0aW9uQ2F0ZWdvcmllc30gZXZlbnRLZXk9XCJlLTVcIj5DYXRlZ29yaWVzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPXtSb3V0ZXMuYWRtaW5pc3RyYXRpb25FeHBlcnRpc2V9IGV2ZW50S2V5PVwiZS02XCI+RXhwZXJ0aXNlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPXtSb3V0ZXMuYWRtaW5pc3RyYXRpb25OZXdzfSBldmVudEtleT1cImUtN1wiPk5ld3M8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51Pn1cbiAgICAgICAgICAgICAgICB7YXV0aGVudGljYXRlZCAmJiA8RHJvcGRvd24uSXRlbSBocmVmPVwiL2JhY2tlbmQvbG9nb3V0XCIgPnt0KCdMb2dvdXQnKX08L0Ryb3Bkb3duLkl0ZW0+fVxuICAgICAgICAgICAgICAgIHshYXV0aGVudGljYXRlZCAmJiA8RHJvcGRvd24uSXRlbSBocmVmPVwiL2xvZ2luXCIgPnt0KCdMb2dpbicpfTwvRHJvcGRvd24uSXRlbT59XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICApO1xuXG5cblxuICAgICAgICByZXR1cm4gPE5hdmJhciBhcHBlYXJhbmNlPVwic3VidGxlXCIgc3R5bGU9e3twb3NpdGlvbjpcImZpeGVkXCIsIHpJbmRleDoxMDAsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6aGVhZGVySGVpZ2h0LCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XG4gICAgICAgICAgICA8TmF2YmFyLkhlYWRlciBzdHlsZT17e2hlaWdodDpoZWFkZXJIZWlnaHQsIGZsZXhHcm93OjF9fSBocmVmPXtSb3V0ZXMuZGFzaGJvYXJkUGFnZX0+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IGhlaWdodD17aGVhZGVySGVpZ2h0fSBzcmM9XCIvZGVmYXVsdHMvZW5fbW9yZXRoYW5ham9iLnBuZ1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBsb2dvXCI+XG4gICAgICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkJvZHk+XG4gICAgICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExhbmd1YWdlRHJvcGRvd24gdGl0bGU9e3QoJ0xhbmd1YWdlJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtmYWxzZSAmJiA8TmF2Lkl0ZW0gaHJlZj17Um91dGVzLnJlZ2lzdHJhdGlvbn0gaWNvbj17PEljb24gaWNvbj1cImNvZ1wiIC8+fT5SZWdpc3RlcjwvTmF2Lkl0ZW0+fVxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tRHJvcGRvd24gaWNvbj17PEljb24gaWNvbj1cImJhcnNcIiAvPn0gcGxhY2VtZW50PVwiYm90dG9tRW5kXCIgLz5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJvZHk+XG4gICAgICAgIDwvTmF2YmFyPlxuXG5cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi9QYWdlcy9Mb2dpblwiO1xuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL1JlZHV4L3JlZHVjZXJcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBMb2dpbkxheW91dCBmcm9tIFwiLi9MYXlvdXQvTG9naW5MYXlvdXRcIjtcblxuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsY29tcG9zZUVuaGFuY2VycyhcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXG4pKTtcblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPExvZ2luTGF5b3V0IHBhZ2U9ezxMb2dpbi8+fS8+O1xuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJykpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9
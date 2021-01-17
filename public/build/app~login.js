(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~login"],{

/***/ "./assets/js/Backend/axios-client.js":
/*!*******************************************!*\
  !*** ./assets/js/Backend/axios-client.js ***!
  \*******************************************/
/*! exports provided: default, BackendClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendClient", function() { return BackendClient; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "./node_modules/axios/index.js");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://',
  headers: {
    'Content-Type': 'application/json'
  }
});

var BackendClient = function BackendClient() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: Object({"NODE_ENV":"development","ENDPOINT":"https://joinmorethanajob.org/api"}).REACT_APP_BACKEND_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authentication': 'Bearer ' + token
    },
    responseType: responseType
  });
};

/* harmony default export */ __webpack_exports__["default"] = (instance);


/***/ }),

/***/ "./assets/js/Backend/hooks/UserInfo.js":
/*!*********************************************!*\
  !*** ./assets/js/Backend/hooks/UserInfo.js ***!
  \*********************************************/
/*! exports provided: useGetUserInfo, useGetUserInfoByEmail, useGetRandomProfiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserInfo", function() { return useGetUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserInfoByEmail", function() { return useGetUserInfoByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetRandomProfiles", function() { return useGetRandomProfiles; });
/* harmony import */ var _axios_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios-client */ "./assets/js/Backend/axios-client.js");
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useHook */ "./assets/js/Backend/useHook.js");
/* harmony import */ var _useCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useCookies */ "./assets/js/Backend/useCookies.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




function useGetUserInfo() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state;
  }),
      accessToken = _useSelector.accessToken;

  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])(accessToken);
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/users/get', 'get', null);
}
function useGetUserInfoByEmail() {
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state;
  }),
      accessToken = _useSelector2.accessToken;

  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])(accessToken);
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/users/getByMail', 'get', null);
}
function useGetRandomProfiles() {
  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state;
  }),
      accessToken = _useSelector3.accessToken;

  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])(accessToken);
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/users/getrandom', 'get', []);
}

/***/ }),

/***/ "./assets/js/Backend/useBackend.js":
/*!*****************************************!*\
  !*** ./assets/js/Backend/useBackend.js ***!
  \*****************************************/
/*! exports provided: useLogin, useRegister, usePasswordRecovery, useChangePassword, useCheckUserMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegister", function() { return useRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePasswordRecovery", function() { return usePasswordRecovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangePassword", function() { return useChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckUserMail", function() { return useCheckUserMail; });
/* harmony import */ var _axios_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios-client */ "./assets/js/Backend/axios-client.js");
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useHook */ "./assets/js/Backend/useHook.js");


function useLogin() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/login', 'post', null);
}
function useRegister() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/register', 'post', null);
}
function usePasswordRecovery() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/recovery', 'post', false);
}
function useChangePassword() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/passwordchange', 'post', false);
}
function useCheckUserMail() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/backend/checkuser', 'post', false);
}

/***/ }),

/***/ "./assets/js/Backend/useCookies.js":
/*!*****************************************!*\
  !*** ./assets/js/Backend/useCookies.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCookies; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");

function useCookies() {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var accessToken = cookies.get('accessToken') ? cookies.get('accessToken') : null;
  var authenticated = cookies.get('authenticated');
  var user = cookies.get('user');
  var language = cookies.get('language');
  return {
    accessToken: accessToken,
    authenticated: authenticated,
    user: user,
    language: language
  };
}

/***/ }),

/***/ "./assets/js/Backend/useHook.js":
/*!**************************************!*\
  !*** ./assets/js/Backend/useHook.js ***!
  \**************************************/
/*! exports provided: useCreateHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateHook", function() { return useCreateHook; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../Redux/actions */ "./assets/js/Redux/actions.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function useCreateHook(Client, url, method, defaultDataValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(defaultDataValue),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var successMessage = url + " SUCCESS";
  var errorMessage = url + " ERROR";

  var defaultSuccessCallback = function defaultSuccessCallback() {
    /*console.log(successMessage);*/
  };

  var defaultErrorCallback = function defaultErrorCallback(e) {
    /*console.error(errorMessage, e);*/
  };

  var requestHandler;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useDispatch"])();
  var defaultCallbacks = {
    successCallback: defaultSuccessCallback,
    errorCallback: defaultErrorCallback,
    dataManipulationFunction: null
  };
  var statusResponse = null;

  if (status !== null) {
    statusResponse = status === 200;
  }

  switch (method) {
    case "get":
      {
        var startUrl = url;

        requestHandler = function requestHandler(getParameters) {
          var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCallbacks;

          //console.log("Get Parameters", getParameters);
          if (Array.isArray(getParameters)) {
            getParameters.forEach(function (parameter) {
              url += "/" + parameter;
            });
          } else {
            if (getParameters !== undefined && getParameters !== null) {
              url += "/" + getParameters;
            } else if (getParameters === null) {}
          } //console.log("Get Url", url);


          Client.get(url).then(function (response) {
            //Data Manipulation
            if (callbacks.dataManipulationFunction) {
              var manipulatedData = callbacks.dataManipulationFunction(response.data);
              setData(manipulatedData);
            } else {
              setData(response.data);
            } //Success Callback


            if (callbacks.successCallback !== undefined) {
              callbacks.successCallback(response.data);
            } else {
              defaultCallbacks.successCallback();
            }

            setLoaded(true);
            setStatus(response.status);
          })["catch"](function (e) {
            //ErrorCallback
            // console.log("Is callback undefined", callbacks.errorCallback===undefined);
            if (callbacks.errorCallback !== undefined) {
              callbacks.errorCallback();
            } else {
              defaultCallbacks.errorCallback();
            }

            setStatus(e.response.status);
          }); //Clearing the url so the url can be used afterwards

          url = startUrl;
        };

        return [data, requestHandler, loaded, statusResponse];
      }

    case "post":
      {
        requestHandler = function requestHandler(formData) {
          var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCallbacks;
          dispatch({
            type: _Redux_actions__WEBPACK_IMPORTED_MODULE_16__["SWITCH_LOADING_STATUS"],
            isLoading: true
          });
          Client.post(url, formData).then(function (response) {
            //Data Manipulation
            //console.log(callbacks);
            if (callbacks.dataManipulationFunction) {
              var manipulatedData = callbacks.dataManipulationFunction(response.data); //console.log("Manipulating data");

              setData(manipulatedData);
            } else {
              //console.log("Setting data", response.data);
              setData(response.data);
            } //Success Callback


            if (callbacks.successCallback !== undefined) {
              //  console.log("Success callback");
              callbacks.successCallback(response.data);
            } else {
              //console.log("Default success callback");
              defaultCallbacks.successCallback();
            }

            setLoaded(true);
            setStatus(response.status);
          })["catch"](function (e) {
            //ErrorCallback
            if (callbacks.errorCallback !== undefined) {
              callbacks.errorCallback();
            } else {
              defaultCallbacks.errorCallback(e);
            }

            setStatus(e.response.status);
          })["finally"](function () {
            dispatch({
              type: _Redux_actions__WEBPACK_IMPORTED_MODULE_16__["SWITCH_LOADING_STATUS"],
              isLoading: false
            });
          });
        };

        return [data, requestHandler, loaded, statusResponse];
      }

    case "delete":
      {
        var _startUrl = url;

        requestHandler = function requestHandler(getParameters) {
          var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCallbacks;

          //console.log("Get Parameters", getParameters);
          if (Array.isArray(getParameters)) {
            getParameters.forEach(function (parameter) {
              url += "/" + parameter;
            });
          } else {
            if (getParameters !== undefined) {
              url += "/" + getParameters;
            }
          } //console.log("Get Url", url);


          Client["delete"](url).then(function (response) {
            //Data Manipulation
            if (callbacks.dataManipulationFunction) {
              var manipulatedData = callbacks.dataManipulationFunction(response.data);
              setData(manipulatedData);
            } else {
              setData(response.data);
            } //Success Callback


            if (callbacks.successCallback !== undefined) {
              callbacks.successCallback(response.data);
            } else {
              defaultCallbacks.successCallback();
            }

            setLoaded(true);
            setStatus(response.status);
          })["catch"](function (e) {
            console.log("Evento catch delete", e);
            setStatus(e.response.status); //ErrorCallback
            // console.log("Is callback undefined", callbacks.errorCallback===undefined);

            if (callbacks.errorCallback !== undefined) {
              callbacks.errorCallback();
            } else {
              defaultCallbacks.errorCallback();
            }
          }); //Clearing the url so the url can be used afterwards

          url = _startUrl;
        };

        return [data, requestHandler, loaded, statusResponse];
      }
  }
}

/***/ }),

/***/ "./assets/js/Layout/DashboardLayout.js":
/*!*********************************************!*\
  !*** ./assets/js/Layout/DashboardLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardLayout; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./assets/js/routes.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FinalHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FinalHeader */ "./assets/js/Layout/FinalHeader.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./assets/js/Layout/Footer.js");




function _templateObject() {
  var data = _taggedTemplateLiteral(["position: absolute;  width: 100%; min-height:100%;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function DashboardLayout(_ref) {
  var page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DesktopDiv, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      backgroundColor: "white",
      minHeight: "100vh"
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FinalHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      width: "100%",
      paddingTop: 53
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      paddingTop: 81,
      paddingLeft: 40,
      paddingRight: 40,
      margin: "0 auto",
      width: "100%",
      background: "linear-gradient(".concat(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_5__["bordeaux"], " 50%,50%, whitesmoke 50%)"),
      flexGrow: 1
    }
  }, page), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
}
var DesktopDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());

/***/ }),

/***/ "./assets/js/Layout/FinalHeader.js":
/*!*****************************************!*\
  !*** ./assets/js/Layout/FinalHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FinalHeader; });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./assets/js/routes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Redux/actions */ "./assets/js/Redux/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









function FinalHeader() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state;
  }),
      user = _useSelector.user;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state;
  }),
      authenticated = _useSelector2.authenticated;

  var changeLanguage = function changeLanguage(code) {
    i18n.changeLanguage(code);
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_8__["switchLanguage"](code));
  };

  var signOut = function signOut() {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_8__["logOut"]());
    window.location.href = "/login";
  };

  var LanguageDropdown = function LanguageDropdown(_ref) {
    var props = Object.assign({}, _ref);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], props, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('it');
      }
    }, " Italiano"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('en');
      }
    }, " English"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('ar');
      }
    }, " \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('gr');
      }
    }, " \u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"));
  };

  var CustomDropdown = function CustomDropdown(_ref2) {
    var props = Object.assign({}, _ref2);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _extends({
      placement: "leftStart"
    }, props), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["dashboardPage"]);
      },
      eventKey: "1",
      icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        icon: "home"
      })
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["serviceSearchPage"]);
      },
      eventKey: "3"
    }, t('Search projects')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["searchUserPage"]);
      },
      eventKey: "4"
    }, t('Search organisations')), user && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["profile"](user.profileName));
      }
    }, t('Profile')), user && user.roles.includes("ROLE_ADMIN") && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
      pullLeft: true,
      title: t('Administration')
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["administrationProjects"]);
      },
      eventKey: "e-2"
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["administrationCollaborations"]);
      },
      eventKey: "e-3"
    }, "Services and collaborations"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["administrationUsers"]);
      },
      eventKey: "e-4"
    }, "Users"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["administrationCategories"]);
      },
      eventKey: "e-5"
    }, "Categories"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["administrationExpertise"]);
      },
      eventKey: "e-6"
    }, "Expertise"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      onClick: function onClick() {
        return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["administrationNews"]);
      },
      eventKey: "e-7"
    }, "News")), authenticated && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      href: "/backend/logout"
    }, t('Logout')), !authenticated && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      href: "/login"
    }, t('Login')));
  };

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    appearance: "subtle",
    style: {
      position: "fixed",
      zIndex: 100,
      width: "100%",
      height: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_10__["headerHeight"],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Header, {
    style: {
      height: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_10__["headerHeight"],
      flexGrow: 1
    },
    onClick: function onClick() {
      return history.push(_routes__WEBPACK_IMPORTED_MODULE_4__["dashboardPage"]);
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
    style: {
      cursor: "pointer"
    },
    height: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_10__["headerHeight"],
    src: "/defaults/en_morethanajob.png",
    className: "navbar-brand logo"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Body, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LanguageDropdown, {
    title: t('Menu language')
  }),  false && false, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CustomDropdown, {
    icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      icon: "bars"
    }),
    placement: "bottomEnd"
  }))));
}

/***/ }),

/***/ "./assets/js/Layout/Footer.js":
/*!************************************!*\
  !*** ./assets/js/Layout/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: "100%",
      backgroundColor: _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_0__["bordeaux"],
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      padding: 50
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 250,
      justifyContent: "space-around"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    href: "http://facebook.com/morethanajob"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    style: {
      color: "white"
    },
    icon: "facebook-square",
    size: "3x"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.linkedin.com/company/morethanajobeni/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    style: {
      color: "white"
    },
    icon: "linkedin-square",
    size: "3x"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    href: "http://twitter.com/than_job"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    style: {
      color: "white"
    },
    icon: "twitter-square",
    size: "3x"
  })), " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: {
      color: "white"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    style: {
      color: "whitesmoke"
    },
    href: "http://www.enicbcmed.eu/projects/morethanajob"
  }, "http://www.enicbcmed.eu/projects/morethanajob")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginTop: 40
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      color: "white",
      fontSize: 9
    }
  }, "\u201CThis website has been produced with the financial assistance of the European Union under the ENI CBC Mediterranean Sea Basin Programme. The contents of this document are the sole responsibility of CESIE and can under no circumstances be regarded as reflecting the position of the European Union or the Programme management structures. The 2014 2020 ENI CBC Mediterranean Sea Basin Programme is a multilateral Cross Border Cooperation ( initiative funded by the European Neighbourhood Instrument - ENI). The Programme objective is to foster fair, equitable and sustainable economic, social and territorial development, which may advance cross b order integration and valorise participating countries\u2019 territories and values. The following 13 countries participate in the Programme: Cyprus, Egypt, France, Greece, Israel, Italy, Jordan, Lebanon, Malta, Palestine, Portugal, Spain, Tunisia. The Managing Authority (MA) is the Autonomous Region of Sardinia (Italy). Official Programme languages are Arabic, English and French. For more information, please visit:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    style: {
      fontSize: 9,
      color: "whitesmoke",
      display: "inline-block"
    },
    target: "_blank",
    href: "https://www.enicbcmed.eu"
  }, " www.enicbcmed.eu"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      color: "white",
      fontSize: 9
    }
  }, ". The European Union is made up of 27 Member States who have decided to gradually link together their know how, resources and destinies. Together, during a period of enlargement of 50 years, they have built a zone of stability, democracy and sustainable development whilst maintaining cultural diversity, tolerance and individual freedoms. The European Union is committed to sharing its achievements and its values with countries and peoples beyond its borders.\u201D")));
}

/***/ }),

/***/ "./assets/js/Login/Components/LoginForm.js":
/*!*************************************************!*\
  !*** ./assets/js/Login/Components/LoginForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextField */ "./assets/js/Login/Components/TextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function LoginForm(_ref) {
  var loginProps = _ref.loginProps;
  var StringType = rsuite__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.StringType;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var model = rsuite__WEBPACK_IMPORTED_MODULE_0__["Schema"].Model({
    email: StringType() // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
    .isRequired('This field is required'),
    password: StringType().isRequired('This field is required.')
  });
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var registrationButton = loginProps.registration ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_3__["SecondaryButton"], {
    href: loginProps.registrationNavigation,
    appearance: "default"
  }, t('Register')) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_3__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_0__["ControlLabel"], null, t('Email')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    name: "email",
    type: "email"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_0__["ControlLabel"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t('Password')), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/recover"
  }, "Forgot password?"), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    name: "password",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_0__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_3__["MainButton"], {
    appearance: "primary",
    type: "submit"
  }, t('Login')), registrationButton));
}
/*
const altro = <Form
    autoComplete="off"
    model={model}
    formValue={formValue}
    onChange={setFormValue}
    //onSubmit={()=>loginProps.loginHandler(formValue)}
>
    <FormGroup>
        <ControlLabel>{t('Email')}</ControlLabel>
        <FormControl name="email" type="email" checkAsync />
    </FormGroup>
    <FormGroup>
        <ControlLabel><div style={{display:"flex", justifyContent:"space-between"}}><span>{t('Password')}</span> <Link to={Routes.passwordRecovery}>Forgot password?</Link> </div></ControlLabel>
        <FormControl name="password" type="password" />
    </FormGroup>
    <FormGroup>
        <ButtonToolbar>
            <MainButton appearance="primary" type="submit">{t('Login')}</MainButton>
            {registrationButton}
        </ButtonToolbar>
    </FormGroup>
</Form>*/

/***/ }),

/***/ "./assets/js/Login/Components/TextField.js":
/*!*************************************************!*\
  !*** ./assets/js/Login/Components/TextField.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextField; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);













function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function TextField(_ref) {
  var name = _ref.name,
      label = _ref.label,
      accepter = _ref.accepter,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["name", "label", "accepter", "style"]);

  var finalStyle = _objectSpread({}, style);

  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
    style: finalStyle
  }, label && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["ControlLabel"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", null, label), " "), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_12__["FormControl"], _extends({
    name: name,
    accepter: accepter,
    style: style
  }, rest)));
}

/***/ }),

/***/ "./assets/js/Login/Pages/Login.js":
/*!****************************************!*\
  !*** ./assets/js/Login/Pages/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Redux/actions */ "./assets/js/Redux/actions.js");
/* harmony import */ var _Components_LoginForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/LoginForm */ "./assets/js/Login/Components/LoginForm.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");
/* harmony import */ var _Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Backend/hooks/UserInfo */ "./assets/js/Backend/hooks/UserInfo.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Login() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useHistory"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_22__["useTranslation"])(),
      t = _useTranslation.t;

  var _useLogin = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_15__["useLogin"])(),
      _useLogin2 = _slicedToArray(_useLogin, 2),
      loginResponse = _useLogin2[0],
      postLoginHandler = _useLogin2[1];

  var _useGetUserInfoByEmai = Object(_Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_21__["useGetUserInfoByEmail"])(),
      _useGetUserInfoByEmai2 = _slicedToArray(_useGetUserInfoByEmai, 2),
      userInfo = _useGetUserInfoByEmai2[0],
      userInfoHandler = _useGetUserInfoByEmai2[1]; //const { t, i18n } = useTranslation();


  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_19__["default"]();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(function (state) {
    return state;
  }),
      authenticated = _useSelector.authenticated,
      user = _useSelector.user;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])();

  var successCallback = function successCallback(accessToken) {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_17__["login"](accessToken));
  };

  var userInfoSuccessCallback = function userInfoSuccessCallback(data) {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_17__["updateUserInfo"](data));
    history.push(_routes__WEBPACK_IMPORTED_MODULE_20__["profile"](data.profileName));
  };

  var login = function login(formData) {
    var finalFormData = new FormData();
    Object.keys(formData).forEach(function (key) {
      return finalFormData.append(key, formData[key]);
    });
    postLoginHandler(finalFormData, {
      successCallback: successCallback
    });
    userInfoHandler(formData.email, {
      successCallback: userInfoSuccessCallback
    });
  };

  var loginProps = {
    registration: true,
    registrationNavigation: "/registration",
    loginHandler: login
  };
  return authenticated ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(AlreadyLoggedIn, null) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Components_LoginForm__WEBPACK_IMPORTED_MODULE_18__["default"], {
    loginProps: loginProps
  });
}

function AlreadyLoggedIn() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])();

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_22__["useTranslation"])(),
      t = _useTranslation2.t;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useHistory"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(function (state) {
    return state;
  }),
      user = _useSelector2.user;

  var signOut = function signOut() {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_17__["logOut"]());
  };

  return user ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_23__["Button"], {
    onClick: history.push(_routes__WEBPACK_IMPORTED_MODULE_20__["profile"](user.profileName))
  }) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_24__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, "Sign in")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, t('already_logged_message')), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_23__["Button"], {
    onClick: function onClick() {
      return signOut();
    }
  }, t('sign_out'))));
}

/***/ }),

/***/ "./assets/js/Redux/actions.js":
/*!************************************!*\
  !*** ./assets/js/Redux/actions.js ***!
  \************************************/
/*! exports provided: SWITCH_AUTHENTICATION_STATUS, SWITCH_LOADING_STATUS, UPDATE_USER_INFO, SWITCH_LANGUAGE, LOGOUT, LOGIN, UPDATE_SERVICES, UPDATE_CATEGORIES, cookiesOptions, switchAuthenticatedStatus, updateUserInfo, switchLanguage, login, logOut, updateCategories, updateServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_AUTHENTICATION_STATUS", function() { return SWITCH_AUTHENTICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LOADING_STATUS", function() { return SWITCH_LOADING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO", function() { return UPDATE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LANGUAGE", function() { return SWITCH_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SERVICES", function() { return UPDATE_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CATEGORIES", function() { return UPDATE_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookiesOptions", function() { return cookiesOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchAuthenticatedStatus", function() { return switchAuthenticatedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return updateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return switchLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategories", function() { return updateCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServices", function() { return updateServices; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backend/hooks/UserInfo */ "./assets/js/Backend/hooks/UserInfo.js");



var SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
var SWITCH_LOADING_STATUS = "SWITCH_LOADING_STATUS";
var UPDATE_USER_INFO = "UPDATE_USER_INFO";
var SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
var LOGOUT = "LOGOUT";
var LOGIN = "LOGIN";
var UPDATE_SERVICES = "UPDATE_SERVICES";
var UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
var cookiesOptions = {
  path: "/"
};
var switchAuthenticatedStatus = function switchAuthenticatedStatus() {
  return {
    type: SWITCH_AUTHENTICATION_STATUS
  };
};
var updateUserInfo = function updateUserInfo(data) {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var userCookie = {
    email: data.email,
    roles: data.roles,
    profileName: data.profileName,
    language: data.language
  };
  cookies.set('user', JSON.stringify(userCookie), cookiesOptions);
  var userCookies = cookies.get('user');
  return {
    type: UPDATE_USER_INFO,
    user: data
  };
};
var switchLanguage = function switchLanguage(language) {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
  cookies.set('language', language, cookiesOptions);
  console.log("Switch language to", language);
  return {
    type: SWITCH_LANGUAGE,
    language: language
  };
};
var login = function login(accessToken) {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
  cookies.set('accessToken', accessToken, cookiesOptions);
  cookies.set('authenticated', true, cookiesOptions);
  return {
    type: LOGIN,
    authenticated: true,
    accessToken: accessToken
  };
};
var logOut = function logOut() {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
  cookies.remove('authenticated', cookiesOptions);
  cookies.remove('accessToken', cookiesOptions);
  cookies.remove('user', cookiesOptions);
  return {
    type: LOGOUT,
    authenticated: false,
    user: null,
    accessToken: null
  };
};
var updateCategories = function updateCategories(categories) {
  return {
    type: UPDATE_CATEGORIES,
    categories: categories
  };
};
var updateServices = function updateServices(services) {
  return {
    type: UPDATE_SERVICES,
    services: services
  };
};

/***/ }),

/***/ "./assets/js/Redux/reducer.js":
/*!************************************!*\
  !*** ./assets/js/Redux/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Backend_useCookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Backend/useCookies */ "./assets/js/Backend/useCookies.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./assets/js/Redux/actions.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _useCookies = Object(_Backend_useCookies__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    accessToken = _useCookies.accessToken,
    authenticated = _useCookies.authenticated,
    user = _useCookies.user,
    language = _useCookies.language;

console.log("UnEscaped user", unescape(user));
var defaultLanguage = language !== undefined ? language : "en";
var initialState = {
  authenticated: authenticated,
  accessToken: accessToken,
  user: user,
  isLoading: false,
  language: defaultLanguage,
  services: [],
  categories: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_10__["SWITCH_AUTHENTICATION_STATUS"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            authenticated: !state.authenticated
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["SWITCH_LOADING_STATUS"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            isLoading: action.isLoading
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["UPDATE_USER_INFO"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            user: action.user,
            language: action.user.language
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["SWITCH_LANGUAGE"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            language: action.language
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["LOGOUT"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            authenticated: action.authenticated,
            user: action.user
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["LOGIN"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            authenticated: action.authenticated,
            accessToken: action.accessToken
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["UPDATE_SERVICES"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            services: action.services
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_10__["UPDATE_CATEGORIES"]:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            categories: action.categories
          });
        }

      default:
        return state;
    }
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./assets/js/routes.js":
/*!*****************************!*\
  !*** ./assets/js/routes.js ***!
  \*****************************/
/*! exports provided: main, registration, login, passwordRecovery, changePassword, administrationCategories, administrationExpertise, administrationProjects, administrationCollaborations, administrationStatistics, administrationUsers, administrationNews, serviceSearchPage, searchUserPage, dashboardPage, newProjectPage, newPortfolioPage, newCollaborationPage, newServicePage, newFurniturePage, collaborationDetailPage, routeProfile, routeProfileEdit, routeProject, routeEditProject, routeEditCollaboration, routeEditService, immediateLogout, newsPage, profile, editProfile, project, editProject, collaboration, editCollaboration, editService, editFurniture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordRecovery", function() { return passwordRecovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationCategories", function() { return administrationCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationExpertise", function() { return administrationExpertise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationProjects", function() { return administrationProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationCollaborations", function() { return administrationCollaborations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationStatistics", function() { return administrationStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationUsers", function() { return administrationUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationNews", function() { return administrationNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceSearchPage", function() { return serviceSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUserPage", function() { return searchUserPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardPage", function() { return dashboardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProjectPage", function() { return newProjectPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPortfolioPage", function() { return newPortfolioPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCollaborationPage", function() { return newCollaborationPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newServicePage", function() { return newServicePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFurniturePage", function() { return newFurniturePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collaborationDetailPage", function() { return collaborationDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeProfile", function() { return routeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeProfileEdit", function() { return routeProfileEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeProject", function() { return routeProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeEditProject", function() { return routeEditProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeEditCollaboration", function() { return routeEditCollaboration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeEditService", function() { return routeEditService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immediateLogout", function() { return immediateLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsPage", function() { return newsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfile", function() { return editProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return editProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collaboration", function() { return collaboration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCollaboration", function() { return editCollaboration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editService", function() { return editService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editFurniture", function() { return editFurniture; });
var main = "/";
var registration = "/registration";
var login = "/login";
var passwordRecovery = "/recover";
var changePassword = "/password-change";
var administrationCategories = "/administration-categories";
var administrationExpertise = "/administration-expertise";
var administrationProjects = "/administration-projects";
var administrationCollaborations = "/administration-collaborations";
var administrationStatistics = "/administration-statistics";
var administrationUsers = "/administration-users";
var administrationNews = "/administration-news";
var serviceSearchPage = "/services";
var searchUserPage = "/organisations";
var dashboardPage = "/dashboard";
var newProjectPage = "/new-project";
var newPortfolioPage = "/new-portfolio";
var newCollaborationPage = "/new-collaboration";
var newServicePage = "/new-service";
var newFurniturePage = "/new-furniture";
var collaborationDetailPage = "/collaboration/:id";
var routeProfile = "/profile/:profilename";
var routeProfileEdit = "/edit-profile/:profilename";
var routeProject = "/project/:id";
var routeEditProject = "/edit-project/:id";
var routeEditCollaboration = "/edit-collaboration/:id";
var routeEditService = "/edit-service/:id";
var immediateLogout = "/immediatelogout";
var newsPage = "/news";
function profile(name) {
  return "/profile/" + name;
}
function editProfile(name) {
  return "/edit-profile/" + name;
}
function project(id) {
  return "/project/" + id;
}
function editProject(id) {
  return "/edit-project/" + id;
}
function collaboration(id) {
  return "/collaboration/" + id;
}
function editCollaboration(id) {
  return "/edit-collaboration/" + id;
}
function editService(id) {
  return "/edit-service/" + id;
}
function editFurniture(id) {
  return "/edit-furniture/" + id;
}

/***/ }),

/***/ "./assets/js/styledComponents/CustomComponents.js":
/*!********************************************************!*\
  !*** ./assets/js/styledComponents/CustomComponents.js ***!
  \********************************************************/
/*! exports provided: gray, bordeaux, headerHeight, uploaderCoverConfig, RegistrationBox, Body, FullBody, MainButton, SecondaryButton, InverseButton, SaveButton, IconButtonTransparent, profilePicture, projectPicture, coverPicture, noProfilePicture, noProjectPicture, FormBox, CollaborationBox, IconSpan, IconSpanProject, LinearGradient, coverStyle, FlexAroundDiv, FlexBetweenDiv, FlexCenterDiv, FormButtonGroup, FormRow, Title, PaginationBox, InfoBox, BackTitle, FrontTitle, ProfileImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bordeaux", function() { return bordeaux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerHeight", function() { return headerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploaderCoverConfig", function() { return uploaderCoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationBox", function() { return RegistrationBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullBody", function() { return FullBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainButton", function() { return MainButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return SecondaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InverseButton", function() { return InverseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveButton", function() { return SaveButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonTransparent", function() { return IconButtonTransparent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilePicture", function() { return profilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPicture", function() { return projectPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coverPicture", function() { return coverPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noProfilePicture", function() { return noProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noProjectPicture", function() { return noProjectPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBox", function() { return FormBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationBox", function() { return CollaborationBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpan", function() { return IconSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpanProject", function() { return IconSpanProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGradient", function() { return LinearGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coverStyle", function() { return coverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAroundDiv", function() { return FlexAroundDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexBetweenDiv", function() { return FlexBetweenDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexCenterDiv", function() { return FlexCenterDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormButtonGroup", function() { return FormButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRow", function() { return FormRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationBox", function() { return PaginationBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTitle", function() { return BackTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontTitle", function() { return FrontTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return ProfileImage; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");




function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size:contain;\n    "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    text-align:center;\n    margin:10px;\n    color:whitesmoke;\n    font-weight:bolder;\n    font-size:4rem;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    margin:0px 20px;\n    background-color:whitesmoke;\n    font-weight:bold;\n    padding:10px;\n    \n    \n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    margin:0px 20px;\n    background-color:whitesmoke;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["color:", "; text-align:center; margin:10px;"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom:30px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    float: right;\n    margin-top:10px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content:space-around;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 100%;\n    height: 0;\n    padding-top: 27.83964365256125%;\n    top: 0;\n    background-image: linear-gradient(to top, black, white);\n    opacity:33%;\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: space-between;"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    width: 35%;\n    justify-content: space-evenly;"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nmin-height: 150px;\nbackground-color: ", ";\ncolor: white;\nfont-size: 40px;\nfont-weight: bolder;\ndisplay: flex;\nalign-items: center;    \njustify-content: flex-start;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\npadding: 10px;\nmin-height:100vh"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    background-color:white;\n    color:", ";\n    &:hover {\n        background-color:", ";\n        color:white;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", "!important;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent!important;\n    color:", "!important;\n    border: 1px solid ", "!important;\n    &:hover {\n        background-color: white!important;\n    }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    color: ", ";\n    border: 1px solid ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: white;\n    border-radius:999px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    margin-bottom:20;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    max-width: 1081px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom:20;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    padding: 25px;\n    border-color: ", ";\n    border-width: 1px;\n    border-radius: 8px;\n    border-style: solid;\n    display: flex;\n    width: 350px;\n    flex-direction: column;\n    margin:0 auto;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gray = "#f7f8f9";
var bordeaux = "#b45860";
var headerHeight = 125;
var uploaderCoverConfig = {
  unit: 'px',
  x: 0,
  y: 0,
  aspect: 3.592
};
var RegistrationBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), gray);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var FullBody = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var MainButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject4(), bordeaux);
var SecondaryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject5(), bordeaux, bordeaux);
var InverseButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject6(), bordeaux, bordeaux);
var SaveButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(MainButton)(_templateObject7(), bordeaux);
var IconButtonTransparent = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["IconButton"])(_templateObject8(), bordeaux, bordeaux);
var profilePicture = "/defaults/profile_thumbnail.png";
var projectPicture = "/defaults/project_thumbnail.png";
var coverPicture = "/defaults/cover_thumbnail.png";
var noProfilePicture = "/defaults/no-image.png";
var noProjectPicture = "/defaults/no-image.png";
var FormBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject9());
var CollaborationBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject10(), bordeaux);
var IconSpan = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span(_templateObject11());
var IconSpanProject = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span(_templateObject12());
var LinearGradient = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject13());
var coverStyle = {
  height: 0,
  paddingTop: "27.83964365256125%",
  width: "100%",
  marginBottom: 10,
  backgroundColor: "black",
  position: "relative",
  backgroundSize: "cover"
};
var FlexAroundDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject14());
var FlexBetweenDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject15());
var FlexCenterDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject16());
var FormButtonGroup = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"])(_templateObject17());
var FormRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Row"])(_templateObject18());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h5(_templateObject19(), bordeaux);
var PaginationBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(FlexBetweenDiv)(_templateObject20());
var InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject21());
var BackTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject22());
var FrontTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Title)(_templateObject23());
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject24());

/***/ }),

/***/ "./assets/less/app.less":
/*!******************************!*\
  !*** ./assets/less/app.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC9heGlvcy1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvaG9va3MvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvdXNlQmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC91c2VDb29raWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL3VzZUhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9EYXNoYm9hcmRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9GaW5hbEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTG9naW4vQ29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvVGV4dEZpZWxkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9QYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xlc3MvYXBwLmxlc3MiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQmFja2VuZENsaWVudCIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwicHJvY2VzcyIsIlJFQUNUX0FQUF9CQUNLRU5EX1VSTCIsInVzZUdldFVzZXJJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFjY2Vzc1Rva2VuIiwiYmFja2VuZENsaWVudCIsInVzZUNyZWF0ZUhvb2siLCJ1c2VHZXRVc2VySW5mb0J5RW1haWwiLCJ1c2VHZXRSYW5kb21Qcm9maWxlcyIsInVzZUxvZ2luIiwidXNlUmVnaXN0ZXIiLCJ1c2VQYXNzd29yZFJlY292ZXJ5IiwidXNlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDaGVja1VzZXJNYWlsIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiZ2V0IiwiYXV0aGVudGljYXRlZCIsInVzZXIiLCJsYW5ndWFnZSIsIkNsaWVudCIsInVybCIsIm1ldGhvZCIsImRlZmF1bHREYXRhVmFsdWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrIiwiZGVmYXVsdEVycm9yQ2FsbGJhY2siLCJlIiwicmVxdWVzdEhhbmRsZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGVmYXVsdENhbGxiYWNrcyIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJkYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24iLCJzdGF0dXNSZXNwb25zZSIsInN0YXJ0VXJsIiwiZ2V0UGFyYW1ldGVycyIsImNhbGxiYWNrcyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwYXJhbWV0ZXIiLCJ1bmRlZmluZWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJtYW5pcHVsYXRlZERhdGEiLCJmb3JtRGF0YSIsInR5cGUiLCJTV0lUQ0hfTE9BRElOR19TVEFUVVMiLCJpc0xvYWRpbmciLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkRhc2hib2FyZExheW91dCIsInBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVhdXgiLCJmbGV4R3JvdyIsIkRlc2t0b3BEaXYiLCJzdHlsZWQiLCJkaXYiLCJGaW5hbEhlYWRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNoYW5nZUxhbmd1YWdlIiwiY29kZSIsIkFjdGlvblR5cGVzIiwic2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkxhbmd1YWdlRHJvcGRvd24iLCJwcm9wcyIsIkN1c3RvbURyb3Bkb3duIiwicHVzaCIsIlJvdXRlcyIsInByb2ZpbGVOYW1lIiwicm9sZXMiLCJpbmNsdWRlcyIsInpJbmRleCIsImhlYWRlckhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIkZvb3RlciIsInBhZGRpbmciLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiTG9naW5Gb3JtIiwibG9naW5Qcm9wcyIsIlN0cmluZ1R5cGUiLCJTY2hlbWEiLCJUeXBlcyIsIm1vZGVsIiwiTW9kZWwiLCJlbWFpbCIsImlzUmVxdWlyZWQiLCJwYXNzd29yZCIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsInJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbk5hdmlnYXRpb24iLCJUZXh0RmllbGQiLCJuYW1lIiwibGFiZWwiLCJhY2NlcHRlciIsInN0eWxlIiwicmVzdCIsImZpbmFsU3R5bGUiLCJMb2dpbiIsImxvZ2luUmVzcG9uc2UiLCJwb3N0TG9naW5IYW5kbGVyIiwidXNlckluZm8iLCJ1c2VySW5mb0hhbmRsZXIiLCJ1c2VySW5mb1N1Y2Nlc3NDYWxsYmFjayIsImxvZ2luIiwiZmluYWxGb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFwcGVuZCIsImxvZ2luSGFuZGxlciIsIkFscmVhZHlMb2dnZWRJbiIsIlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVMiLCJVUERBVEVfVVNFUl9JTkZPIiwiU1dJVENIX0xBTkdVQUdFIiwiTE9HT1VUIiwiTE9HSU4iLCJVUERBVEVfU0VSVklDRVMiLCJVUERBVEVfQ0FURUdPUklFUyIsImNvb2tpZXNPcHRpb25zIiwicGF0aCIsInN3aXRjaEF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJDb29raWUiLCJzZXQiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckNvb2tpZXMiLCJzd2l0Y2hMYW5ndWFnZSIsImxvZ091dCIsInJlbW92ZSIsInVwZGF0ZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidXBkYXRlU2VydmljZXMiLCJzZXJ2aWNlcyIsInVuZXNjYXBlIiwiZGVmYXVsdExhbmd1YWdlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsIm1haW4iLCJwYXNzd29yZFJlY292ZXJ5IiwiY2hhbmdlUGFzc3dvcmQiLCJhZG1pbmlzdHJhdGlvbkNhdGVnb3JpZXMiLCJhZG1pbmlzdHJhdGlvbkV4cGVydGlzZSIsImFkbWluaXN0cmF0aW9uUHJvamVjdHMiLCJhZG1pbmlzdHJhdGlvbkNvbGxhYm9yYXRpb25zIiwiYWRtaW5pc3RyYXRpb25TdGF0aXN0aWNzIiwiYWRtaW5pc3RyYXRpb25Vc2VycyIsImFkbWluaXN0cmF0aW9uTmV3cyIsInNlcnZpY2VTZWFyY2hQYWdlIiwic2VhcmNoVXNlclBhZ2UiLCJkYXNoYm9hcmRQYWdlIiwibmV3UHJvamVjdFBhZ2UiLCJuZXdQb3J0Zm9saW9QYWdlIiwibmV3Q29sbGFib3JhdGlvblBhZ2UiLCJuZXdTZXJ2aWNlUGFnZSIsIm5ld0Z1cm5pdHVyZVBhZ2UiLCJjb2xsYWJvcmF0aW9uRGV0YWlsUGFnZSIsInJvdXRlUHJvZmlsZSIsInJvdXRlUHJvZmlsZUVkaXQiLCJyb3V0ZVByb2plY3QiLCJyb3V0ZUVkaXRQcm9qZWN0Iiwicm91dGVFZGl0Q29sbGFib3JhdGlvbiIsInJvdXRlRWRpdFNlcnZpY2UiLCJpbW1lZGlhdGVMb2dvdXQiLCJuZXdzUGFnZSIsInByb2ZpbGUiLCJlZGl0UHJvZmlsZSIsInByb2plY3QiLCJpZCIsImVkaXRQcm9qZWN0IiwiY29sbGFib3JhdGlvbiIsImVkaXRDb2xsYWJvcmF0aW9uIiwiZWRpdFNlcnZpY2UiLCJlZGl0RnVybml0dXJlIiwiZ3JheSIsInVwbG9hZGVyQ292ZXJDb25maWciLCJ1bml0IiwieCIsInkiLCJhc3BlY3QiLCJSZWdpc3RyYXRpb25Cb3giLCJCb2R5IiwiRnVsbEJvZHkiLCJNYWluQnV0dG9uIiwiQnV0dG9uIiwiU2Vjb25kYXJ5QnV0dG9uIiwiSW52ZXJzZUJ1dHRvbiIsIlNhdmVCdXR0b24iLCJJY29uQnV0dG9uVHJhbnNwYXJlbnQiLCJJY29uQnV0dG9uIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9qZWN0UGljdHVyZSIsImNvdmVyUGljdHVyZSIsIm5vUHJvZmlsZVBpY3R1cmUiLCJub1Byb2plY3RQaWN0dXJlIiwiRm9ybUJveCIsIkNvbGxhYm9yYXRpb25Cb3giLCJJY29uU3BhbiIsInNwYW4iLCJJY29uU3BhblByb2plY3QiLCJMaW5lYXJHcmFkaWVudCIsImNvdmVyU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIkZsZXhBcm91bmREaXYiLCJGbGV4QmV0d2VlbkRpdiIsIkZsZXhDZW50ZXJEaXYiLCJGb3JtQnV0dG9uR3JvdXAiLCJCdXR0b25Hcm91cCIsIkZvcm1Sb3ciLCJSb3ciLCJUaXRsZSIsImg1IiwiUGFnaW5hdGlvbkJveCIsIkluZm9Cb3giLCJwIiwiQmFja1RpdGxlIiwiRnJvbnRUaXRsZSIsIlByb2ZpbGVJbWFnZSIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGtEQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMxQkMsU0FBTyxFQUFF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QkFBZSxFQUFDLE9BQTNGO0FBQW1HSyxVQUFRLEVBQUMsVUFBNUc7QUFBd0g0SyxnQkFBYyxFQUFDO0FBQXZJLENBQW5CO0FBR0EsSUFBTUMsYUFBYSxHQUFHbEsseURBQU0sQ0FBQ0MsR0FBVixxQkFBbkI7QUFLQSxJQUFNa0ssY0FBYyxHQUFHbksseURBQU0sQ0FBQ0MsR0FBVixxQkFBcEI7QUFNQSxJQUFNbUssYUFBYSxHQUFHcEsseURBQU0sQ0FBQ0MsR0FBVixxQkFBbkI7QUFNQSxJQUFNb0ssZUFBZSxHQUFHckssaUVBQU0sQ0FBQ3NLLGtEQUFELENBQVQscUJBQXJCO0FBS0EsSUFBTUMsT0FBTyxHQUFHdkssaUVBQU0sQ0FBQ3dLLDBDQUFELENBQVQscUJBQWI7QUFJQSxJQUFNQyxLQUFLLEdBQUd6Syx5REFBTSxDQUFDMEssRUFBVixzQkFBcUI3SyxRQUFyQixDQUFYO0FBRUEsSUFBTThLLGFBQWEsR0FBRzNLLGlFQUFNLENBQUNtSyxjQUFELENBQVQscUJBQW5CO0FBS0EsSUFBTVMsT0FBTyxHQUFHNUsseURBQU0sQ0FBQzZLLENBQVYscUJBQWI7QUFTQSxJQUFNQyxTQUFTLEdBQUc5Syx5REFBTSxDQUFDQyxHQUFWLHFCQUFmO0FBU0EsSUFBTThLLFVBQVUsR0FBRy9LLGlFQUFNLENBQUN5SyxLQUFELENBQVQscUJBQWhCO0FBT0EsSUFBTU8sWUFBWSxHQUFHaEwseURBQU0sQ0FBQ2lMLEdBQVYscUJBQWxCLEM7Ozs7Ozs7Ozs7O0FDckxQLHVDIiwiZmlsZSI6ImFwcH5sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcy9pbmRleCc7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnaHR0cDovLycsXG4gICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxufSk7XG5cblxuY29uc3QgQmFja2VuZENsaWVudCA9ICh0b2tlbiA9IG51bGwsIHJlc3BvbnNlVHlwZT1udWxsKT0+XG4gICAge1xuICAgICAgICByZXR1cm4gKGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICdBdXRoZW50aWNhdGlvbic6ICdCZWFyZXIgJyArdG9rZW5cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5leHBvcnQge0JhY2tlbmRDbGllbnR9O1xuIiwiaW1wb3J0IHtCYWNrZW5kQ2xpZW50fSBmcm9tIFwiLi4vYXhpb3MtY2xpZW50XCI7XG5pbXBvcnQge3VzZUNyZWF0ZUhvb2t9IGZyb20gXCIuLi91c2VIb29rXCI7XG5pbXBvcnQgdXNlQ29va2llcyBmcm9tIFwiLi4vdXNlQ29va2llc1wiO1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlR2V0VXNlckluZm8oKSB7XG5cbiAgICBjb25zdCB7YWNjZXNzVG9rZW59ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudChhY2Nlc3NUb2tlbik7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvdXNlcnMvZ2V0JywnZ2V0JyxudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldFVzZXJJbmZvQnlFbWFpbCgpe1xuICAgIGNvbnN0IHthY2Nlc3NUb2tlbn0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KGFjY2Vzc1Rva2VuKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC91c2Vycy9nZXRCeU1haWwnLCdnZXQnLG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0UmFuZG9tUHJvZmlsZXMoKXtcbiAgICBjb25zdCB7YWNjZXNzVG9rZW59ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudChhY2Nlc3NUb2tlbik7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvdXNlcnMvZ2V0cmFuZG9tJywnZ2V0JyxbXSk7XG59XG4iLCJpbXBvcnQge0JhY2tlbmRDbGllbnR9IGZyb20gXCIuL2F4aW9zLWNsaWVudFwiO1xuaW1wb3J0IHt1c2VDcmVhdGVIb29rfSBmcm9tIFwiLi91c2VIb29rXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlTG9naW4oKSB7XG5cbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9sb2dpbicsJ3Bvc3QnLG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gIHVzZVJlZ2lzdGVyKCkge1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvcmVnaXN0ZXInLCdwb3N0JyxudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VQYXNzd29yZFJlY292ZXJ5KCkge1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvcmVjb3ZlcnknLCdwb3N0JyxmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlQ2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC9wYXNzd29yZGNoYW5nZScsJ3Bvc3QnLGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VDaGVja1VzZXJNYWlsKCkge1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvY2hlY2t1c2VyJywncG9zdCcsZmFsc2UpO1xufVxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ29va2llcygpe1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG4gICAgbGV0IGFjY2Vzc1Rva2VuID0gKGNvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpKT8gY29va2llcy5nZXQoJ2FjY2Vzc1Rva2VuJykgOiBudWxsO1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSBjb29raWVzLmdldCgnYXV0aGVudGljYXRlZCcpO1xuICAgIGNvbnN0IHVzZXIgPSBjb29raWVzLmdldCgndXNlcicpO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gY29va2llcy5nZXQoJ2xhbmd1YWdlJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGF1dGhlbnRpY2F0ZWQsXG4gICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tIFwiLi8uLi9SZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge1NXSVRDSF9MT0FESU5HX1NUQVRVU30gZnJvbSBcIi4uL1JlZHV4L2FjdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUhvb2soQ2xpZW50LCB1cmwsIG1ldGhvZCwgZGVmYXVsdERhdGFWYWx1ZSl7XG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShkZWZhdWx0RGF0YVZhbHVlKTtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IHVybCArIFwiIFNVQ0NFU1NcIjtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB1cmwgKyBcIiBFUlJPUlwiO1xuICAgIGNvbnN0IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2sgPSAoKSA9PiB7Lypjb25zb2xlLmxvZyhzdWNjZXNzTWVzc2FnZSk7Ki99O1xuICAgIGNvbnN0IGRlZmF1bHRFcnJvckNhbGxiYWNrID0gKGUpID0+IHsvKmNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlLCBlKTsqL307XG4gICAgbGV0IHJlcXVlc3RIYW5kbGVyO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGRlZmF1bHRDYWxsYmFja3MgPSB7XG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjazogZGVmYXVsdFN1Y2Nlc3NDYWxsYmFjayxcbiAgICAgICAgZXJyb3JDYWxsYmFjazogZGVmYXVsdEVycm9yQ2FsbGJhY2ssXG4gICAgICAgIGRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbjogbnVsbFxuICAgIH07XG5cbiAgICBsZXQgc3RhdHVzUmVzcG9uc2UgPSBudWxsO1xuICAgIGlmKHN0YXR1cyE9PW51bGwpe1xuICAgICAgICBzdGF0dXNSZXNwb25zZSA9IChzdGF0dXM9PT0yMDApO1xuICAgIH1cblxuICAgIHN3aXRjaChtZXRob2Qpe1xuICAgICAgICBjYXNlIFwiZ2V0XCI6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdGFydFVybCA9IHVybDtcbiAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyID0gKGdldFBhcmFtZXRlcnMsIGNhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3MgKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2V0IFBhcmFtZXRlcnNcIiwgZ2V0UGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShnZXRQYXJhbWV0ZXJzKSl7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcmFtZXRlcnMuZm9yRWFjaCgocGFyYW1ldGVyKT0+e3VybCArPSBcIi9cIiArIHBhcmFtZXRlciB9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2V0UGFyYW1ldGVycyE9PXVuZGVmaW5lZCAmJiBnZXRQYXJhbWV0ZXJzIT09bnVsbCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCs9XCIvXCIrZ2V0UGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoZ2V0UGFyYW1ldGVycz09PW51bGwpe1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBVcmxcIiwgdXJsKTtcblxuICAgICAgICAgICAgICAgIENsaWVudC5nZXQodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0YSBNYW5pcHVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYW5pcHVsYXRlZERhdGEgPSBjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEobWFuaXB1bGF0ZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9FcnJvckNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklzIGNhbGxiYWNrIHVuZGVmaW5lZFwiLCBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaz09PXVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZXJyb3JDYWxsYmFjayE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoZS5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9DbGVhcmluZyB0aGUgdXJsIHNvIHRoZSB1cmwgY2FuIGJlIHVzZWQgYWZ0ZXJ3YXJkc1xuICAgICAgICAgICAgICAgIHVybCA9IHN0YXJ0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkYXRhLCByZXF1ZXN0SGFuZGxlciwgbG9hZGVkLCBzdGF0dXNSZXNwb25zZV07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInBvc3RcIjpcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXIgPSAoZm9ybURhdGEsIGNhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3MpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpTV0lUQ0hfTE9BRElOR19TVEFUVVMsIGlzTG9hZGluZzp0cnVlfSk7XG4gICAgICAgICAgICAgICAgQ2xpZW50LnBvc3QodXJsLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9EYXRhIE1hbmlwdWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hbmlwdWxhdGVkRGF0YSA9IGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1hbmlwdWxhdGluZyBkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEobWFuaXB1bGF0ZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTZXR0aW5nIGRhdGFcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU3VjY2VzcyBDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiU3VjY2VzcyBjYWxsYmFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRlZmF1bHQgc3VjY2VzcyBjYWxsYmFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKT0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRXJyb3JDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoZS5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlNXSVRDSF9MT0FESU5HX1NUQVRVUywgaXNMb2FkaW5nOmZhbHNlfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gW2RhdGEscmVxdWVzdEhhbmRsZXIsIGxvYWRlZCwgc3RhdHVzUmVzcG9uc2VdO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0YXJ0VXJsID0gdXJsO1xuICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXIgPSAoZ2V0UGFyYW1ldGVycywgY2FsbGJhY2tzID0gZGVmYXVsdENhbGxiYWNrcyApID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2V0IFBhcmFtZXRlcnNcIiwgZ2V0UGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShnZXRQYXJhbWV0ZXJzKSl7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcmFtZXRlcnMuZm9yRWFjaCgocGFyYW1ldGVyKT0+e3VybCArPSBcIi9cIiArIHBhcmFtZXRlciB9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2V0UGFyYW1ldGVycyE9PXVuZGVmaW5lZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCs9XCIvXCIrZ2V0UGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2V0IFVybFwiLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgQ2xpZW50LmRlbGV0ZSh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EYXRhIE1hbmlwdWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hbmlwdWxhdGVkRGF0YSA9IGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShtYW5pcHVsYXRlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU3VjY2VzcyBDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudG8gY2F0Y2ggZGVsZXRlXCIsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoZS5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9FcnJvckNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklzIGNhbGxiYWNrIHVuZGVmaW5lZFwiLCBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaz09PXVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZXJyb3JDYWxsYmFjayE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvL0NsZWFyaW5nIHRoZSB1cmwgc28gdGhlIHVybCBjYW4gYmUgdXNlZCBhZnRlcndhcmRzXG4gICAgICAgICAgICAgICAgdXJsID0gc3RhcnRVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RhdGEsIHJlcXVlc3RIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c1Jlc3BvbnNlXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge0ljb24sIE5hdiwgTmF2YmFyfSBmcm9tIFwicnN1aXRlXCI7XG5pbXBvcnQgKiBhcyBSb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHtib3JkZWF1eH0gZnJvbSBcIi4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGaW5hbEhlYWRlciBmcm9tIFwiLi9GaW5hbEhlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkTGF5b3V0KHtwYWdlfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERlc2t0b3BEaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgbWluSGVpZ2h0OlwiMTAwdmhcIn19PlxuICAgICAgICAgICAgPEZpbmFsSGVhZGVyIC8+XG5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGhlaWdodDogXCIxMDB2aFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6XCIxMDAlXCIsIHBhZGRpbmdUb3A6NTMgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6ODEsIHBhZGRpbmdMZWZ0OjQwLCBwYWRkaW5nUmlnaHQ6NDAsIG1hcmdpbjpcIjAgYXV0b1wiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmQ6YGxpbmVhci1ncmFkaWVudCgke2JvcmRlYXV4fSA1MCUsNTAlLCB3aGl0ZXNtb2tlIDUwJSlgLCBmbGV4R3JvdzoxIH19PlxuICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGVza3RvcERpdj4pXG59XG5cbmNvbnN0IERlc2t0b3BEaXYgPSBzdHlsZWQuZGl2YHBvc2l0aW9uOiBhYnNvbHV0ZTsgIHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OjEwMCU7YDtcbiIsImltcG9ydCB7RHJvcGRvd24sIEljb24sIE5hdiwgTmF2YmFyfSBmcm9tIFwicnN1aXRlXCI7XG5pbXBvcnQgKiBhcyBSb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VUcmFuc2xhdGlvbn0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gXCIuLi9SZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge3VzZUhpc3Rvcnl9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2hlYWRlckhlaWdodH0gZnJvbSBcIi4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaW5hbEhlYWRlcigpe1xuXG4gICAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgY29uc3Qge2F1dGhlbnRpY2F0ZWR9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IGNvZGUgPT4ge1xuICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGNvZGUpO1xuICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy5zd2l0Y2hMYW5ndWFnZShjb2RlKSlcblxuICAgIH07XG4gICAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMubG9nT3V0KCkpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9sb2dpblwiO1xuICAgIH1cblxuICAgIGNvbnN0IExhbmd1YWdlRHJvcGRvd24gPSAoeyAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgIDxEcm9wZG93biB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoJ2l0Jyl9ID4gSXRhbGlhbm88L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZSgnZW4nKX0gPiBFbmdsaXNoPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoJ2FyJyl9ID4g2KfZhNmE2LrYqSDYp9mE2LnYsdio2YrYqTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKCdncicpfSA+IM6VzrvOu863zr3Ouc66zqw8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgIDwvRHJvcGRvd24+XG4gICAgKTtcblxuICAgIGNvbnN0IEN1c3RvbURyb3Bkb3duID0gKHsgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICA8RHJvcGRvd24gcGxhY2VtZW50PVwibGVmdFN0YXJ0XCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpPT4gaGlzdG9yeS5wdXNoKFJvdXRlcy5kYXNoYm9hcmRQYWdlKX0gZXZlbnRLZXk9XCIxXCIgaWNvbj17PEljb24gaWNvbj1cImhvbWVcIiAvPn0+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLnNlcnZpY2VTZWFyY2hQYWdlKX0gZXZlbnRLZXk9XCIzXCI+e3QoJ1NlYXJjaCBwcm9qZWN0cycpfTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpPT4gaGlzdG9yeS5wdXNoKFJvdXRlcy5zZWFyY2hVc2VyUGFnZSl9IGV2ZW50S2V5PVwiNFwiPnt0KCdTZWFyY2ggb3JnYW5pc2F0aW9ucycpfTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIHt1c2VyICYmIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpPT4gaGlzdG9yeS5wdXNoKFJvdXRlcy5wcm9maWxlKHVzZXIucHJvZmlsZU5hbWUpKX0gPnt0KCdQcm9maWxlJyl9PC9Ecm9wZG93bi5JdGVtPn1cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpICYmIDxEcm9wZG93bi5NZW51IHB1bGxMZWZ0IHRpdGxlPXt0KCdBZG1pbmlzdHJhdGlvbicpfSA+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmFkbWluaXN0cmF0aW9uUHJvamVjdHMpfSBldmVudEtleT1cImUtMlwiPlByb2plY3RzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpPT4gaGlzdG9yeS5wdXNoKFJvdXRlcy5hZG1pbmlzdHJhdGlvbkNvbGxhYm9yYXRpb25zKX0gZXZlbnRLZXk9XCJlLTNcIj5TZXJ2aWNlcyBhbmQgY29sbGFib3JhdGlvbnM8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmFkbWluaXN0cmF0aW9uVXNlcnMpfSBldmVudEtleT1cImUtNFwiPlVzZXJzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpPT4gaGlzdG9yeS5wdXNoKFJvdXRlcy5hZG1pbmlzdHJhdGlvbkNhdGVnb3JpZXMpfSBldmVudEtleT1cImUtNVwiPkNhdGVnb3JpZXM8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmFkbWluaXN0cmF0aW9uRXhwZXJ0aXNlKX0gZXZlbnRLZXk9XCJlLTZcIj5FeHBlcnRpc2U8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmFkbWluaXN0cmF0aW9uTmV3cyl9IGV2ZW50S2V5PVwiZS03XCI+TmV3czwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT59XG4gICAgICAgICAgICB7YXV0aGVudGljYXRlZCAmJiA8RHJvcGRvd24uSXRlbSBocmVmPVwiL2JhY2tlbmQvbG9nb3V0XCIgPnt0KCdMb2dvdXQnKX08L0Ryb3Bkb3duLkl0ZW0+fVxuICAgICAgICAgICAgeyFhdXRoZW50aWNhdGVkICYmIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIvbG9naW5cIiA+e3QoJ0xvZ2luJyl9PC9Ecm9wZG93bi5JdGVtPn1cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICApO1xuXG5cblxuICAgIHJldHVybiA8TmF2YmFyIGFwcGVhcmFuY2U9XCJzdWJ0bGVcIiBzdHlsZT17e3Bvc2l0aW9uOlwiZml4ZWRcIiwgekluZGV4OjEwMCwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpoZWFkZXJIZWlnaHQsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT5cbiAgICAgICAgPE5hdmJhci5IZWFkZXIgc3R5bGU9e3toZWlnaHQ6aGVhZGVySGVpZ2h0LCBmbGV4R3JvdzoxfX0gb25DbGljaz17KCk9Pmhpc3RvcnkucHVzaChSb3V0ZXMuZGFzaGJvYXJkUGFnZSl9PlxuICAgICAgICAgICAgPGltZyBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IGhlaWdodD17aGVhZGVySGVpZ2h0fSBzcmM9XCIvZGVmYXVsdHMvZW5fbW9yZXRoYW5ham9iLnBuZ1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBsb2dvXCI+XG4gICAgICAgICAgICA8L2ltZz5cbiAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICA8TmF2YmFyLkJvZHk+XG4gICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIDxMYW5ndWFnZURyb3Bkb3duIHRpdGxlPXt0KCdNZW51IGxhbmd1YWdlJyl9IC8+XG4gICAgICAgICAgICAgICAge2ZhbHNlICYmIDxOYXYuSXRlbSBvbkNsaWNrPXsoKT0+aGlzdG9yeS5wdXNoKFJvdXRlcy5yZWdpc3RyYXRpb24pfSBpY29uPXs8SWNvbiBpY29uPVwiY29nXCIgLz59PlJlZ2lzdGVyPC9OYXYuSXRlbT59XG4gICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wZG93biBpY29uPXs8SWNvbiBpY29uPVwiYmFyc1wiIC8+fSBwbGFjZW1lbnQ9XCJib3R0b21FbmRcIiAvPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkJvZHk+XG4gICAgPC9OYXZiYXI+XG59XG4iLCJpbXBvcnQge2JvcmRlYXV4fSBmcm9tIFwiLi4vc3R5bGVkQ29tcG9uZW50cy9DdXN0b21Db21wb25lbnRzXCI7XG5pbXBvcnQge0ljb259IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICAgIHJldHVybiAoPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6Ym9yZGVhdXgsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBwYWRkaW5nOjUwfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgd2lkdGg6MjUwLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIn19PlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5jb20vbW9yZXRoYW5ham9iXCI+PEljb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fSBpY29uPVwiZmFjZWJvb2stc3F1YXJlXCIgc2l6ZT1cIjN4XCIvPjwvYT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L21vcmV0aGFuYWpvYmVuaS9cIj48SWNvbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGljb249XCJsaW5rZWRpbi1zcXVhcmVcIiBzaXplPVwiM3hcIi8+PC9hPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly90d2l0dGVyLmNvbS90aGFuX2pvYlwiPjxJY29uIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gaWNvbj1cInR3aXR0ZXItc3F1YXJlXCIgc2l6ZT1cIjN4XCIgLz48L2E+IDwvZGl2PlxuICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjxhIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZXNtb2tlXCJ9fSBocmVmPVwiaHR0cDovL3d3dy5lbmljYmNtZWQuZXUvcHJvamVjdHMvbW9yZXRoYW5ham9iXCI+aHR0cDovL3d3dy5lbmljYmNtZWQuZXUvcHJvamVjdHMvbW9yZXRoYW5ham9iPC9hPjwvcD5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDo0MH19PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjl9fT7igJxUaGlzIHdlYnNpdGUgaGFzIGJlZW4gcHJvZHVjZWQgd2l0aCB0aGUgZmluYW5jaWFsIGFzc2lzdGFuY2Ugb2YgdGhlIEV1cm9wZWFuIFVuaW9uIHVuZGVyIHRoZSBFTkkgQ0JDIE1lZGl0ZXJyYW5lYW4gU2VhIEJhc2luIFByb2dyYW1tZS4gVGhlIGNvbnRlbnRzIG9mIHRoaXMgZG9jdW1lbnQgYXJlIHRoZSBzb2xlIHJlc3BvbnNpYmlsaXR5IG9mIENFU0lFIGFuZCBjYW4gdW5kZXIgbm8gY2lyY3Vtc3RhbmNlcyBiZSByZWdhcmRlZCBhcyByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgRXVyb3BlYW4gVW5pb24gb3IgdGhlIFByb2dyYW1tZSBtYW5hZ2VtZW50IHN0cnVjdHVyZXMuXG5cbiAgICAgICAgICAgIFRoZSAyMDE0IDIwMjAgRU5JIENCQyBNZWRpdGVycmFuZWFuIFNlYSBCYXNpbiBQcm9ncmFtbWUgaXMgYSBtdWx0aWxhdGVyYWwgQ3Jvc3MgQm9yZGVyIENvb3BlcmF0aW9uICggaW5pdGlhdGl2ZSBmdW5kZWQgYnkgdGhlIEV1cm9wZWFuIE5laWdoYm91cmhvb2QgSW5zdHJ1bWVudCAtIEVOSSkuIFRoZSBQcm9ncmFtbWUgb2JqZWN0aXZlIGlzIHRvIGZvc3RlciBmYWlyLCBlcXVpdGFibGUgYW5kIHN1c3RhaW5hYmxlIGVjb25vbWljLCBzb2NpYWwgYW5kIHRlcnJpdG9yaWFsIGRldmVsb3BtZW50LCB3aGljaCBtYXkgYWR2YW5jZSBjcm9zcyBiIG9yZGVyIGludGVncmF0aW9uIGFuZCB2YWxvcmlzZSBwYXJ0aWNpcGF0aW5nIGNvdW50cmllc+KAmSB0ZXJyaXRvcmllcyBhbmQgdmFsdWVzLiBUaGUgZm9sbG93aW5nIDEzIGNvdW50cmllcyBwYXJ0aWNpcGF0ZSBpbiB0aGUgUHJvZ3JhbW1lOiBDeXBydXMsIEVneXB0LCBGcmFuY2UsIEdyZWVjZSwgSXNyYWVsLCBJdGFseSwgSm9yZGFuLCBMZWJhbm9uLCBNYWx0YSwgUGFsZXN0aW5lLCBQb3J0dWdhbCwgU3BhaW4sIFR1bmlzaWEuIFRoZSBNYW5hZ2luZyBBdXRob3JpdHkgKE1BKSBpcyB0aGUgQXV0b25vbW91cyBSZWdpb24gb2YgU2FyZGluaWEgKEl0YWx5KS4gT2ZmaWNpYWwgUHJvZ3JhbW1lIGxhbmd1YWdlcyBhcmUgQXJhYmljLCBFbmdsaXNoIGFuZCBGcmVuY2guIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlzaXQ6PC9zcGFuPlxuICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250U2l6ZTo5LCBjb2xvcjpcIndoaXRlc21va2VcIiwgZGlzcGxheTpcImlubGluZS1ibG9ja1wifX0gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmVuaWNiY21lZC5ldVwiPiB3d3cuZW5pY2JjbWVkLmV1PC9hPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjl9fT4uIFRoZSBFdXJvcGVhbiBVbmlvbiBpcyBtYWRlIHVwIG9mIDI3IE1lbWJlciBTdGF0ZXMgd2hvIGhhdmUgZGVjaWRlZCB0byBncmFkdWFsbHkgbGluayB0b2dldGhlciB0aGVpciBrbm93IGhvdywgcmVzb3VyY2VzIGFuZCBkZXN0aW5pZXMuIFRvZ2V0aGVyLCBkdXJpbmcgYSBwZXJpb2Qgb2YgZW5sYXJnZW1lbnQgb2YgNTAgeWVhcnMsIHRoZXkgaGF2ZSBidWlsdCBhIHpvbmUgb2Ygc3RhYmlsaXR5LCBkZW1vY3JhY3kgYW5kIHN1c3RhaW5hYmxlIGRldmVsb3BtZW50IHdoaWxzdCBtYWludGFpbmluZyBjdWx0dXJhbCBkaXZlcnNpdHksIHRvbGVyYW5jZSBhbmQgaW5kaXZpZHVhbCBmcmVlZG9tcy4gVGhlIEV1cm9wZWFuIFVuaW9uIGlzIGNvbW1pdHRlZCB0byBzaGFyaW5nIGl0cyBhY2hpZXZlbWVudHMgYW5kIGl0cyB2YWx1ZXMgd2l0aCBjb3VudHJpZXMgYW5kIHBlb3BsZXMgYmV5b25kIGl0cyBib3JkZXJzLuKAnTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj4pXG5cbn1cbiIsImltcG9ydCB7SW5wdXQsQnV0dG9uLCBCdXR0b25Ub29sYmFyLCBDb250cm9sTGFiZWwsIEZvcm0sIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEhlbHBCbG9jaywgU2NoZW1hfSBmcm9tIFwicnN1aXRlXCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGluaywgdXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7TWFpbkJ1dHRvbiwgUmVnaXN0cmF0aW9uQm94LCBTZWNvbmRhcnlCdXR0b259IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIFJvdXRlcyBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHt1c2VDaGFuZ2VQYXNzd29yZCwgdXNlQ2hlY2tVc2VyTWFpbCwgdXNlTG9naW59IGZyb20gXCIuLi8uLi9CYWNrZW5kL3VzZUJhY2tlbmRcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIi4vVGV4dEZpZWxkXCI7XG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oe2xvZ2luUHJvcHN9KXtcblxuICAgIGNvbnN0IHsgU3RyaW5nVHlwZSB9ID0gU2NoZW1hLlR5cGVzO1xuICAgIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXG4gICAgY29uc3QgbW9kZWwgPSBTY2hlbWEuTW9kZWwoe1xuICAgICAgICBlbWFpbDogU3RyaW5nVHlwZSgpXG4gICAgICAgICAgICAvLyAuYWRkUnVsZSgodmFsdWUsIGRhdGEpID0+IHtyZXR1cm4gYXN5bmNDaGVja1VzZXJuYW1lKHZhbHVlKTt9LCAnRHVwbGljYXRlIHVzZXJuYW1lJylcbiAgICAgICAgICAgIC5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmdUeXBlKCkuaXNSZXF1aXJlZCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gKGxvZ2luUHJvcHMucmVnaXN0cmF0aW9uKSA/IDxTZWNvbmRhcnlCdXR0b24gaHJlZj17bG9naW5Qcm9wcy5yZWdpc3RyYXRpb25OYXZpZ2F0aW9ufSBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiICA+e3QoJ1JlZ2lzdGVyJyl9PC9TZWNvbmRhcnlCdXR0b24+IDogPD48Lz47XG5cblxuICAgIHJldHVybiAoPFJlZ2lzdHJhdGlvbkJveD5cbiAgICAgICAgPENvbnRyb2xMYWJlbD57dCgnRW1haWwnKX08L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgPElucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiLz5cbiAgICAgICAgPENvbnRyb2xMYWJlbD48ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT48c3Bhbj57dCgnUGFzc3dvcmQnKX08L3NwYW4+IDxhIGhyZWY9XCIvcmVjb3ZlclwiPkZvcmdvdCBwYXNzd29yZD88L2E+IDwvZGl2PjwvQ29udHJvbExhYmVsPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIvPlxuICAgICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgICAgIDxNYWluQnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPnt0KCdMb2dpbicpfTwvTWFpbkJ1dHRvbj5cbiAgICAgICAgICAgIHtyZWdpc3RyYXRpb25CdXR0b259XG4gICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cbiAgICAgICAgPC9SZWdpc3RyYXRpb25Cb3g+KVxufVxuXG5cbi8qXG5jb25zdCBhbHRybyA9IDxGb3JtXG4gICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICBtb2RlbD17bW9kZWx9XG4gICAgZm9ybVZhbHVlPXtmb3JtVmFsdWV9XG4gICAgb25DaGFuZ2U9e3NldEZvcm1WYWx1ZX1cbiAgICAvL29uU3VibWl0PXsoKT0+bG9naW5Qcm9wcy5sb2dpbkhhbmRsZXIoZm9ybVZhbHVlKX1cbj5cbiAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8Q29udHJvbExhYmVsPnt0KCdFbWFpbCcpfTwvQ29udHJvbExhYmVsPlxuICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgY2hlY2tBc3luYyAvPlxuICAgIDwvRm9ybUdyb3VwPlxuICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxDb250cm9sTGFiZWw+PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+PHNwYW4+e3QoJ1Bhc3N3b3JkJyl9PC9zcGFuPiA8TGluayB0bz17Um91dGVzLnBhc3N3b3JkUmVjb3Zlcnl9PkZvcmdvdCBwYXNzd29yZD88L0xpbms+IDwvZGl2PjwvQ29udHJvbExhYmVsPlxuICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgICAgIDxNYWluQnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPnt0KCdMb2dpbicpfTwvTWFpbkJ1dHRvbj5cbiAgICAgICAgICAgIHtyZWdpc3RyYXRpb25CdXR0b259XG4gICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cbiAgICA8L0Zvcm1Hcm91cD5cbjwvRm9ybT4qL1xuIiwiaW1wb3J0IHtDb250cm9sTGFiZWwsIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEZpZWxkKHsgbmFtZSwgbGFiZWwsIGFjY2VwdGVyLCBzdHlsZSwgLi4ucmVzdCB9KSB7XG5cbiAgICBsZXQgZmluYWxTdHlsZSAgPSB7Li4uc3R5bGV9O1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17ZmluYWxTdHlsZX0+XG4gICAgICAgICAgICB7bGFiZWwgJiYgPENvbnRyb2xMYWJlbD48Yj57bGFiZWx9PC9iPiA8L0NvbnRyb2xMYWJlbD59XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT17bmFtZX0gYWNjZXB0ZXI9e2FjY2VwdGVyfSBzdHlsZT17c3R5bGV9IHsuLi5yZXN0fSAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rLCB1c2VIaXN0b3J5fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHt1c2VMb2dpbn0gZnJvbSBcIi4uLy4uL0JhY2tlbmQvdXNlQmFja2VuZFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSBcIi4uLy4uL1JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL0NvbXBvbmVudHMvTG9naW5Gb3JtXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQge3VzZUdldFVzZXJJbmZvLCB1c2VHZXRVc2VySW5mb0J5RW1haWx9IGZyb20gXCIuLi8uLi9CYWNrZW5kL2hvb2tzL1VzZXJJbmZvXCI7XG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvblRvb2xiYXIsIENvbnRyb2xMYWJlbCwgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSBcInJzdWl0ZVwiO1xuaW1wb3J0IHtNYWluQnV0dG9uLCBSZWdpc3RyYXRpb25Cb3gsIFNlY29uZGFyeUJ1dHRvbn0gZnJvbSBcIi4uLy4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpe1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICAgIGNvbnN0IFtsb2dpblJlc3BvbnNlLCBwb3N0TG9naW5IYW5kbGVyXSA9IHVzZUxvZ2luKCk7XG4gICAgY29uc3QgW3VzZXJJbmZvLCB1c2VySW5mb0hhbmRsZXJdID0gdXNlR2V0VXNlckluZm9CeUVtYWlsKCk7XG4gICAgLy9jb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbiAgICBjb25zdCB7YXV0aGVudGljYXRlZCwgdXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IChhY2Nlc3NUb2tlbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy5sb2dpbihhY2Nlc3NUb2tlbikpO1xuXG4gICAgfTtcbiAgICBjb25zdCB1c2VySW5mb1N1Y2Nlc3NDYWxsYmFjayA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLnVwZGF0ZVVzZXJJbmZvKGRhdGEpKTtcbiAgICAgICAgaGlzdG9yeS5wdXNoKFJvdXRlcy5wcm9maWxlKGRhdGEucHJvZmlsZU5hbWUpKTtcbiAgICB9O1xuXG5cblxuICAgIGNvbnN0IGxvZ2luID0gKGZvcm1EYXRhKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgZmluYWxGb3JtRGF0YSA9ICBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSk9PiBmaW5hbEZvcm1EYXRhLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0gKSk7XG4gICAgICAgIHBvc3RMb2dpbkhhbmRsZXIoZmluYWxGb3JtRGF0YSwge3N1Y2Nlc3NDYWxsYmFjazogc3VjY2Vzc0NhbGxiYWNrfSk7XG4gICAgICAgIHVzZXJJbmZvSGFuZGxlcihmb3JtRGF0YS5lbWFpbCx7c3VjY2Vzc0NhbGxiYWNrOiB1c2VySW5mb1N1Y2Nlc3NDYWxsYmFja30pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGxvZ2luUHJvcHMgPSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbjogdHJ1ZSxcbiAgICAgICAgcmVnaXN0cmF0aW9uTmF2aWdhdGlvbiA6IFwiL3JlZ2lzdHJhdGlvblwiLFxuICAgICAgICBsb2dpbkhhbmRsZXI6IGxvZ2luXG5cbiAgICB9XG5cbiAgcmV0dXJuIChhdXRoZW50aWNhdGVkKSA/IDxBbHJlYWR5TG9nZ2VkSW4vPiA6IDxMb2dpbkZvcm0gbG9naW5Qcm9wcz17bG9naW5Qcm9wc30vPjtcbn1cblxuZnVuY3Rpb24gQWxyZWFkeUxvZ2dlZEluKCl7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG5cbiAgICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy5sb2dPdXQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh1c2VyKSA/IDxCdXR0b24gb25DbGljaz17aGlzdG9yeS5wdXNoKFJvdXRlcy5wcm9maWxlKHVzZXIucHJvZmlsZU5hbWUpKX0vPiA6IDxSZWdpc3RyYXRpb25Cb3g+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+U2lnbiBpbjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8ZGl2Pnt0KCdhbHJlYWR5X2xvZ2dlZF9tZXNzYWdlJyl9PC9kaXY+XG4gICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnNpZ25PdXQoKX0+e3QoJ3NpZ25fb3V0Jyl9PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9SZWdpc3RyYXRpb25Cb3g+XG59XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUdldFVzZXJJbmZvfSBmcm9tIFwiLi4vQmFja2VuZC9ob29rcy9Vc2VySW5mb1wiO1xuXG5leHBvcnQgY29uc3QgU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUyA9IFwiU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVU1wiO1xuZXhwb3J0IGNvbnN0IFNXSVRDSF9MT0FESU5HX1NUQVRVUyA9IFwiU1dJVENIX0xPQURJTkdfU1RBVFVTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfSU5GTyA9IFwiVVBEQVRFX1VTRVJfSU5GT1wiO1xuZXhwb3J0IGNvbnN0IFNXSVRDSF9MQU5HVUFHRSA9IFwiU1dJVENIX0xBTkdVQUdFXCI7XG5leHBvcnQgY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIjtcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VSVklDRVMgPSBcIlVQREFURV9TRVJWSUNFU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9DQVRFR09SSUVTID0gXCJVUERBVEVfQ0FURUdPUklFU1wiO1xuXG5leHBvcnQgY29uc3QgY29va2llc09wdGlvbnMgPSB7cGF0aDogXCIvXCJ9O1xuXG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hBdXRoZW50aWNhdGVkU3RhdHVzID0gKCkgPT57XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTLFxuICAgIH1cbn07XG5cblxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckluZm8gPSAoZGF0YSkgPT57XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbiAgICBjb25zdCB1c2VyQ29va2llID0ge1xuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcm9sZXM6IGRhdGEucm9sZXMsXG4gICAgICAgIHByb2ZpbGVOYW1lOiBkYXRhLnByb2ZpbGVOYW1lLFxuICAgICAgICBsYW5ndWFnZTogZGF0YS5sYW5ndWFnZVxuICAgIH1cbiAgICBjb29raWVzLnNldCgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJDb29raWUpLCBjb29raWVzT3B0aW9ucyk7XG5cbiAgICBsZXQgdXNlckNvb2tpZXMgPSBjb29raWVzLmdldCgndXNlcicpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVVBEQVRFX1VTRVJfSU5GTyxcbiAgICAgICAgdXNlcjogZGF0YVxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+e1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGNvb2tpZXMuc2V0KCdsYW5ndWFnZScsIGxhbmd1YWdlLCBjb29raWVzT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coXCJTd2l0Y2ggbGFuZ3VhZ2UgdG9cIiwgbGFuZ3VhZ2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU1dJVENIX0xBTkdVQUdFLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGFjY2Vzc1Rva2VuKSA9PntcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICBjb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBhY2Nlc3NUb2tlbiwgY29va2llc09wdGlvbnMpO1xuICAgIGNvb2tpZXMuc2V0KCdhdXRoZW50aWNhdGVkJywgdHJ1ZSwgY29va2llc09wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPR0lOLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5cbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT57XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgY29va2llcy5yZW1vdmUoJ2F1dGhlbnRpY2F0ZWQnLGNvb2tpZXNPcHRpb25zKTtcbiAgICBjb29raWVzLnJlbW92ZSgnYWNjZXNzVG9rZW4nLCBjb29raWVzT3B0aW9ucyk7XG4gICAgY29va2llcy5yZW1vdmUoJ3VzZXInLCBjb29raWVzT3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTE9HT1VULFxuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgYWNjZXNzVG9rZW46IG51bGxcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhdGVnb3JpZXMgPSAoY2F0ZWdvcmllcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6VVBEQVRFX0NBVEVHT1JJRVMsXG4gICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlcnZpY2VzID0gKHNlcnZpY2VzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpVUERBVEVfU0VSVklDRVMsXG4gICAgICAgIHNlcnZpY2VzOiBzZXJ2aWNlc1xuICAgIH1cbn1cbiIsImltcG9ydCB1c2VDb29raWVzIGZyb20gXCIuLi9CYWNrZW5kL3VzZUNvb2tpZXNcIjtcblxuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuY29uc3Qge2FjY2Vzc1Rva2VuLCBhdXRoZW50aWNhdGVkLCB1c2VyLCBsYW5ndWFnZX0gPSB1c2VDb29raWVzKCk7XG5cbmNvbnNvbGUubG9nKFwiVW5Fc2NhcGVkIHVzZXJcIiwgdW5lc2NhcGUodXNlcikpO1xuY29uc3QgZGVmYXVsdExhbmd1YWdlID0gKGxhbmd1YWdlIT09dW5kZWZpbmVkKSA/IGxhbmd1YWdlIDogXCJlblwiO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge2F1dGhlbnRpY2F0ZWQ6YXV0aGVudGljYXRlZCwgYWNjZXNzVG9rZW46YWNjZXNzVG9rZW4sIHVzZXI6KHVzZXIpLCBpc0xvYWRpbmc6ZmFsc2UsIGxhbmd1YWdlOmRlZmF1bHRMYW5ndWFnZSwgc2VydmljZXM6W10sIGNhdGVnb3JpZXM6W119O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblxuICAgIGlmKGFjdGlvbil7XG5cbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICFzdGF0ZS5hdXRoZW50aWNhdGVkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU1dJVENIX0xPQURJTkdfU1RBVFVTOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgaXNMb2FkaW5nOiBhY3Rpb24uaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9JTkZPOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnVzZXIsIGxhbmd1YWdlOiBhY3Rpb24udXNlci5sYW5ndWFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU1dJVENIX0xBTkdVQUdFOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgbGFuZ3VhZ2U6IGFjdGlvbi5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxPR09VVDp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGF1dGhlbnRpY2F0ZWQ6IGFjdGlvbi5hdXRoZW50aWNhdGVkLCB1c2VyOiBhY3Rpb24udXNlcixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxPR0lOOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgYXV0aGVudGljYXRlZDogYWN0aW9uLmF1dGhlbnRpY2F0ZWQsIGFjY2Vzc1Rva2VuOiBhY3Rpb24uYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5VUERBVEVfU0VSVklDRVM6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBzZXJ2aWNlczphY3Rpb24uc2VydmljZXMsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5VUERBVEVfQ0FURUdPUklFUzp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGNhdGVnb3JpZXM6YWN0aW9uLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJcbmV4cG9ydCBjb25zdCBtYWluID0gXCIvXCI7XG5leHBvcnQgY29uc3QgcmVnaXN0cmF0aW9uID0gXCIvcmVnaXN0cmF0aW9uXCI7XG5leHBvcnQgY29uc3QgbG9naW4gPSBcIi9sb2dpblwiO1xuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVjb3ZlcnkgPSBcIi9yZWNvdmVyXCI7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBcIi9wYXNzd29yZC1jaGFuZ2VcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvbkNhdGVnb3JpZXMgPSBcIi9hZG1pbmlzdHJhdGlvbi1jYXRlZ29yaWVzXCI7XG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25FeHBlcnRpc2UgPSBcIi9hZG1pbmlzdHJhdGlvbi1leHBlcnRpc2VcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvblByb2plY3RzID0gXCIvYWRtaW5pc3RyYXRpb24tcHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvbkNvbGxhYm9yYXRpb25zID0gXCIvYWRtaW5pc3RyYXRpb24tY29sbGFib3JhdGlvbnNcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvblN0YXRpc3RpY3MgPSBcIi9hZG1pbmlzdHJhdGlvbi1zdGF0aXN0aWNzXCI7XG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25Vc2VycyA9IFwiL2FkbWluaXN0cmF0aW9uLXVzZXJzXCI7XG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25OZXdzID0gXCIvYWRtaW5pc3RyYXRpb24tbmV3c1wiO1xuZXhwb3J0IGNvbnN0IHNlcnZpY2VTZWFyY2hQYWdlID0gXCIvc2VydmljZXNcIjtcbmV4cG9ydCBjb25zdCBzZWFyY2hVc2VyUGFnZSA9IFwiL29yZ2FuaXNhdGlvbnNcIjtcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRQYWdlID0gXCIvZGFzaGJvYXJkXCI7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdFBhZ2UgPSBcIi9uZXctcHJvamVjdFwiO1xuZXhwb3J0IGNvbnN0IG5ld1BvcnRmb2xpb1BhZ2UgPSBcIi9uZXctcG9ydGZvbGlvXCI7XG5leHBvcnQgY29uc3QgbmV3Q29sbGFib3JhdGlvblBhZ2UgPSBcIi9uZXctY29sbGFib3JhdGlvblwiO1xuZXhwb3J0IGNvbnN0IG5ld1NlcnZpY2VQYWdlID0gXCIvbmV3LXNlcnZpY2VcIjtcbmV4cG9ydCBjb25zdCBuZXdGdXJuaXR1cmVQYWdlID0gXCIvbmV3LWZ1cm5pdHVyZVwiO1xuZXhwb3J0IGNvbnN0IGNvbGxhYm9yYXRpb25EZXRhaWxQYWdlID0gXCIvY29sbGFib3JhdGlvbi86aWRcIjtcbmV4cG9ydCBjb25zdCByb3V0ZVByb2ZpbGUgPSBcIi9wcm9maWxlLzpwcm9maWxlbmFtZVwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlUHJvZmlsZUVkaXQgPSBcIi9lZGl0LXByb2ZpbGUvOnByb2ZpbGVuYW1lXCI7XG5leHBvcnQgY29uc3Qgcm91dGVQcm9qZWN0ID0gXCIvcHJvamVjdC86aWRcIjtcbmV4cG9ydCBjb25zdCByb3V0ZUVkaXRQcm9qZWN0ID0gXCIvZWRpdC1wcm9qZWN0LzppZFwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlRWRpdENvbGxhYm9yYXRpb24gPSBcIi9lZGl0LWNvbGxhYm9yYXRpb24vOmlkXCI7XG5leHBvcnQgY29uc3Qgcm91dGVFZGl0U2VydmljZSA9IFwiL2VkaXQtc2VydmljZS86aWRcIjtcbmV4cG9ydCBjb25zdCBpbW1lZGlhdGVMb2dvdXQgPSBcIi9pbW1lZGlhdGVsb2dvdXRcIjtcblxuZXhwb3J0IHZhciBuZXdzUGFnZSA9IFwiL25ld3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGUobmFtZSl7XG4gICAgcmV0dXJuIFwiL3Byb2ZpbGUvXCIrbmFtZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2ZpbGUobmFtZSl7XG4gICAgcmV0dXJuIFwiL2VkaXQtcHJvZmlsZS9cIituYW1lO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KGlkKXtcbiAgICByZXR1cm4gXCIvcHJvamVjdC9cIitpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGlkKXtcbiAgICByZXR1cm4gXCIvZWRpdC1wcm9qZWN0L1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFib3JhdGlvbihpZCl7XG4gICAgcmV0dXJuIFwiL2NvbGxhYm9yYXRpb24vXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0Q29sbGFib3JhdGlvbihpZCl7XG4gICAgcmV0dXJuIFwiL2VkaXQtY29sbGFib3JhdGlvbi9cIitpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRTZXJ2aWNlKGlkKXtcbiAgICByZXR1cm4gXCIvZWRpdC1zZXJ2aWNlL1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZ1cm5pdHVyZShpZCl7XG4gICAgcmV0dXJuIFwiL2VkaXQtZnVybml0dXJlL1wiK2lkO1xufVxuXG5cblxuXG5cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge0J1dHRvbiwgQnV0dG9uR3JvdXAsIEljb25CdXR0b24sIFJvd30gZnJvbSAncnN1aXRlJztcblxuZXhwb3J0IGNvbnN0IGdyYXkgPSBcIiNmN2Y4ZjlcIjtcbmV4cG9ydCBjb25zdCBib3JkZWF1eCA9IFwiI2I0NTg2MFwiO1xuXG5leHBvcnQgY29uc3QgaGVhZGVySGVpZ2h0ID0gMTI1O1xuZXhwb3J0IGNvbnN0IHVwbG9hZGVyQ292ZXJDb25maWcgPSB7IHVuaXQ6ICdweCcsIHg6IDAsIHk6IDAsIGFzcGVjdDogMy41OTJ9XG5cblxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJhdGlvbkJveCA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItY29sb3I6ICR7Z3JheX07XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGA7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDEwODFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbToyMDtcbiAgICBgO1xuXG5cblxuZXhwb3J0IGNvbnN0IEZ1bGxCb2R5ID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbToyMDtcbiAgICBgO1xuZXhwb3J0IGNvbnN0IE1haW5CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JvcmRlYXV4fTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czo5OTlweDtcbiAgICBgO1xuXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICR7Ym9yZGVhdXh9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVhdXh9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgIGNvbG9yOiR7Ym9yZGVhdXh9IWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlYXV4fSFpbXBvcnRhbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICB9XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IFNhdmVCdXR0b24gPSBzdHlsZWQoTWFpbkJ1dHRvbilgXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZWF1eH0haW1wb3J0YW50O1xuYFxuXG5leHBvcnQgY29uc3QgSWNvbkJ1dHRvblRyYW5zcGFyZW50ID0gc3R5bGVkKEljb25CdXR0b24pYFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgY29sb3I6JHtib3JkZWF1eH07XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JHtib3JkZWF1eH07XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlUGljdHVyZSA9IFwiL2RlZmF1bHRzL3Byb2ZpbGVfdGh1bWJuYWlsLnBuZ1wiO1xuZXhwb3J0IGNvbnN0IHByb2plY3RQaWN0dXJlID0gXCIvZGVmYXVsdHMvcHJvamVjdF90aHVtYm5haWwucG5nXCI7XG5leHBvcnQgY29uc3QgY292ZXJQaWN0dXJlID0gXCIvZGVmYXVsdHMvY292ZXJfdGh1bWJuYWlsLnBuZ1wiO1xuZXhwb3J0IGNvbnN0IG5vUHJvZmlsZVBpY3R1cmUgPSBcIi9kZWZhdWx0cy9uby1pbWFnZS5wbmdcIjtcbmV4cG9ydCBjb25zdCBub1Byb2plY3RQaWN0dXJlID0gXCIvZGVmYXVsdHMvbm8taW1hZ2UucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBGb3JtQm94ID0gc3R5bGVkLmRpdmBcbnBhZGRpbmc6IDEwcHg7XG5taW4taGVpZ2h0OjEwMHZoYFxuO1xuXG5leHBvcnQgY29uc3QgQ29sbGFib3JhdGlvbkJveCA9ICBzdHlsZWQuZGl2YFxud2lkdGg6IDEwMCU7XG5taW4taGVpZ2h0OiAxNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICR7Ym9yZGVhdXh9O1xuY29sb3I6IHdoaXRlO1xuZm9udC1zaXplOiA0MHB4O1xuZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyOyAgICBcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmBcbjtcblxuZXhwb3J0IGNvbnN0IEljb25TcGFuID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7YDtcblxuZXhwb3J0IGNvbnN0IEljb25TcGFuUHJvamVjdCA9IHN0eWxlZC5zcGFuYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YDtcblxuZXhwb3J0IGNvbnN0IExpbmVhckdyYWRpZW50ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyNy44Mzk2NDM2NTI1NjEyNSU7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCB3aGl0ZSk7XG4gICAgb3BhY2l0eTozMyU7XG4gICAgYFxuXG5leHBvcnQgY29uc3QgY292ZXJTdHlsZSA9IHtoZWlnaHQ6MCwgcGFkZGluZ1RvcDpcIjI3LjgzOTY0MzY1MjU2MTI1JVwiLCB3aWR0aDpcIjEwMCVcIiwgbWFyZ2luQm90dG9tOjEwLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgYmFja2dyb3VuZFNpemU6XCJjb3ZlclwifVxuXG5cbmV4cG9ydCBjb25zdCBGbGV4QXJvdW5kRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbmBcblxuZXhwb3J0IGNvbnN0IEZsZXhCZXR3ZWVuRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRmxleENlbnRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUJ1dHRvbkdyb3VwID0gc3R5bGVkKEJ1dHRvbkdyb3VwKWBcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybVJvdyA9IHN0eWxlZChSb3cpYFxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmg1YGNvbG9yOiR7Ym9yZGVhdXh9OyB0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luOjEwcHg7YDtcblxuZXhwb3J0IGNvbnN0IFBhZ2luYXRpb25Cb3ggPSBzdHlsZWQoRmxleEJldHdlZW5EaXYpYFxuICAgIG1hcmdpbjowcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvQm94ID0gc3R5bGVkLnBgXG4gICAgbWFyZ2luOjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBcbiAgICBcbmBcblxuZXhwb3J0IGNvbnN0IEJhY2tUaXRsZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgY29sb3I6d2hpdGVzbW9rZTtcbiAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgZm9udC1zaXplOjRyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgRnJvbnRUaXRsZSA9IHN0eWxlZChUaXRsZSlgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICBgO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
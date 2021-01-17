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
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Redux/actions */ "./assets/js/Redux/actions.js");
/* harmony import */ var _Components_LoginForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Components/LoginForm */ "./assets/js/Login/Components/LoginForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");
/* harmony import */ var _Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../Backend/hooks/UserInfo */ "./assets/js/Backend/hooks/UserInfo.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Login() {
  var authenticationData = document.getElementById('js-user-rating');
  var userData = document.getElementById('js-user-profile');
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useSelector"])(function (state) {
    return state;
  }),
      authenticated = _useSelector.authenticated;

  Object(react__WEBPACK_IMPORTED_MODULE_15__["useEffect"])(function () {
    var userProfile = userData.dataset.userProfile;

    if (userProfile) {
      dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_19__["updateUserInfo"](JSON.parse(userProfile)));
    }

    if (authenticated.toString() !== authenticationData.dataset.isAuthenticated) {
      dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_19__["switchAuthenticatedStatus"]());
    }
  }, []);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["useHistory"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_23__["useTranslation"])(),
      t = _useTranslation.t;

  var _useLogin = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_17__["useLogin"])(),
      _useLogin2 = _slicedToArray(_useLogin, 2),
      loginResponse = _useLogin2[0],
      postLoginHandler = _useLogin2[1];

  var _useGetUserInfoByEmai = Object(_Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_22__["useGetUserInfoByEmail"])(),
      _useGetUserInfoByEmai2 = _slicedToArray(_useGetUserInfoByEmai, 2),
      userInfo = _useGetUserInfoByEmai2[0],
      userInfoHandler = _useGetUserInfoByEmai2[1];

  var successCallback = function successCallback(accessToken) {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_19__["login"](accessToken));
  };

  var userInfoSuccessCallback = function userInfoSuccessCallback(data) {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_19__["updateUserInfo"](data));
    history.push(_routes__WEBPACK_IMPORTED_MODULE_21__["profile"](data.profileName));
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
  return authenticated ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(AlreadyLoggedIn, null) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Components_LoginForm__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loginProps: loginProps
  });
}

function AlreadyLoggedIn() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useDispatch"])();

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_23__["useTranslation"])(),
      t = _useTranslation2.t;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["useHistory"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useSelector"])(function (state) {
    return state;
  }),
      user = _useSelector2.user;

  var signOut = function signOut() {
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_19__["logOut"]());
  }; //<Button onClick={history.push(Routes.profile(user.profileName))}/>


  return user ? window.location.replace(_routes__WEBPACK_IMPORTED_MODULE_21__["profile"](user.profileName)) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_25__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("h3", null, "Sign in")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, t('already_logged_message')), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_24__["Button"], {
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
var authenticatedStatus = authenticated !== undefined ? authenticated : false;
var initialState = {
  authenticated: authenticatedStatus,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC9heGlvcy1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvaG9va3MvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvdXNlQmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC91c2VDb29raWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL3VzZUhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9EYXNoYm9hcmRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9GaW5hbEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTG9naW4vQ29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvVGV4dEZpZWxkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9QYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xlc3MvYXBwLmxlc3MiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQmFja2VuZENsaWVudCIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwicHJvY2VzcyIsIlJFQUNUX0FQUF9CQUNLRU5EX1VSTCIsInVzZUdldFVzZXJJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFjY2Vzc1Rva2VuIiwiYmFja2VuZENsaWVudCIsInVzZUNyZWF0ZUhvb2siLCJ1c2VHZXRVc2VySW5mb0J5RW1haWwiLCJ1c2VHZXRSYW5kb21Qcm9maWxlcyIsInVzZUxvZ2luIiwidXNlUmVnaXN0ZXIiLCJ1c2VQYXNzd29yZFJlY292ZXJ5IiwidXNlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDaGVja1VzZXJNYWlsIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiZ2V0IiwiYXV0aGVudGljYXRlZCIsInVzZXIiLCJsYW5ndWFnZSIsIkNsaWVudCIsInVybCIsIm1ldGhvZCIsImRlZmF1bHREYXRhVmFsdWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrIiwiZGVmYXVsdEVycm9yQ2FsbGJhY2siLCJlIiwicmVxdWVzdEhhbmRsZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGVmYXVsdENhbGxiYWNrcyIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJkYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24iLCJzdGF0dXNSZXNwb25zZSIsInN0YXJ0VXJsIiwiZ2V0UGFyYW1ldGVycyIsImNhbGxiYWNrcyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwYXJhbWV0ZXIiLCJ1bmRlZmluZWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJtYW5pcHVsYXRlZERhdGEiLCJmb3JtRGF0YSIsInR5cGUiLCJTV0lUQ0hfTE9BRElOR19TVEFUVVMiLCJpc0xvYWRpbmciLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkRhc2hib2FyZExheW91dCIsInBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVhdXgiLCJmbGV4R3JvdyIsIkRlc2t0b3BEaXYiLCJzdHlsZWQiLCJkaXYiLCJGaW5hbEhlYWRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNoYW5nZUxhbmd1YWdlIiwiY29kZSIsIkFjdGlvblR5cGVzIiwic2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkxhbmd1YWdlRHJvcGRvd24iLCJwcm9wcyIsIkN1c3RvbURyb3Bkb3duIiwicHVzaCIsIlJvdXRlcyIsInByb2ZpbGVOYW1lIiwicm9sZXMiLCJpbmNsdWRlcyIsInpJbmRleCIsImhlYWRlckhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIkZvb3RlciIsInBhZGRpbmciLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiTG9naW5Gb3JtIiwibG9naW5Qcm9wcyIsIlN0cmluZ1R5cGUiLCJTY2hlbWEiLCJUeXBlcyIsIm1vZGVsIiwiTW9kZWwiLCJlbWFpbCIsImlzUmVxdWlyZWQiLCJwYXNzd29yZCIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsInJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbk5hdmlnYXRpb24iLCJUZXh0RmllbGQiLCJuYW1lIiwibGFiZWwiLCJhY2NlcHRlciIsInN0eWxlIiwicmVzdCIsImZpbmFsU3R5bGUiLCJMb2dpbiIsImF1dGhlbnRpY2F0aW9uRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyRGF0YSIsInVzZUVmZmVjdCIsInVzZXJQcm9maWxlIiwiZGF0YXNldCIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwiaXNBdXRoZW50aWNhdGVkIiwibG9naW5SZXNwb25zZSIsInBvc3RMb2dpbkhhbmRsZXIiLCJ1c2VySW5mbyIsInVzZXJJbmZvSGFuZGxlciIsInVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrIiwibG9naW4iLCJmaW5hbEZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXBwZW5kIiwibG9naW5IYW5kbGVyIiwiQWxyZWFkeUxvZ2dlZEluIiwicmVwbGFjZSIsIlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVMiLCJVUERBVEVfVVNFUl9JTkZPIiwiU1dJVENIX0xBTkdVQUdFIiwiTE9HT1VUIiwiTE9HSU4iLCJVUERBVEVfU0VSVklDRVMiLCJVUERBVEVfQ0FURUdPUklFUyIsImNvb2tpZXNPcHRpb25zIiwicGF0aCIsInN3aXRjaEF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJDb29raWUiLCJzZXQiLCJzdHJpbmdpZnkiLCJ1c2VyQ29va2llcyIsInN3aXRjaExhbmd1YWdlIiwibG9nT3V0IiwicmVtb3ZlIiwidXBkYXRlQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ1cGRhdGVTZXJ2aWNlcyIsInNlcnZpY2VzIiwidW5lc2NhcGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJhdXRoZW50aWNhdGVkU3RhdHVzIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsIm1haW4iLCJwYXNzd29yZFJlY292ZXJ5IiwiY2hhbmdlUGFzc3dvcmQiLCJhZG1pbmlzdHJhdGlvbkNhdGVnb3JpZXMiLCJhZG1pbmlzdHJhdGlvbkV4cGVydGlzZSIsImFkbWluaXN0cmF0aW9uUHJvamVjdHMiLCJhZG1pbmlzdHJhdGlvbkNvbGxhYm9yYXRpb25zIiwiYWRtaW5pc3RyYXRpb25TdGF0aXN0aWNzIiwiYWRtaW5pc3RyYXRpb25Vc2VycyIsImFkbWluaXN0cmF0aW9uTmV3cyIsInNlcnZpY2VTZWFyY2hQYWdlIiwic2VhcmNoVXNlclBhZ2UiLCJkYXNoYm9hcmRQYWdlIiwibmV3UHJvamVjdFBhZ2UiLCJuZXdQb3J0Zm9saW9QYWdlIiwibmV3Q29sbGFib3JhdGlvblBhZ2UiLCJuZXdTZXJ2aWNlUGFnZSIsIm5ld0Z1cm5pdHVyZVBhZ2UiLCJjb2xsYWJvcmF0aW9uRGV0YWlsUGFnZSIsInJvdXRlUHJvZmlsZSIsInJvdXRlUHJvZmlsZUVkaXQiLCJyb3V0ZVByb2plY3QiLCJyb3V0ZUVkaXRQcm9qZWN0Iiwicm91dGVFZGl0Q29sbGFib3JhdGlvbiIsInJvdXRlRWRpdFNlcnZpY2UiLCJpbW1lZGlhdGVMb2dvdXQiLCJuZXdzUGFnZSIsInByb2ZpbGUiLCJlZGl0UHJvZmlsZSIsInByb2plY3QiLCJpZCIsImVkaXRQcm9qZWN0IiwiY29sbGFib3JhdGlvbiIsImVkaXRDb2xsYWJvcmF0aW9uIiwiZWRpdFNlcnZpY2UiLCJlZGl0RnVybml0dXJlIiwiZ3JheSIsInVwbG9hZGVyQ292ZXJDb25maWciLCJ1bml0IiwieCIsInkiLCJhc3BlY3QiLCJSZWdpc3RyYXRpb25Cb3giLCJCb2R5IiwiRnVsbEJvZHkiLCJNYWluQnV0dG9uIiwiQnV0dG9uIiwiU2Vjb25kYXJ5QnV0dG9uIiwiSW52ZXJzZUJ1dHRvbiIsIlNhdmVCdXR0b24iLCJJY29uQnV0dG9uVHJhbnNwYXJlbnQiLCJJY29uQnV0dG9uIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9qZWN0UGljdHVyZSIsImNvdmVyUGljdHVyZSIsIm5vUHJvZmlsZVBpY3R1cmUiLCJub1Byb2plY3RQaWN0dXJlIiwiRm9ybUJveCIsIkNvbGxhYm9yYXRpb25Cb3giLCJJY29uU3BhbiIsInNwYW4iLCJJY29uU3BhblByb2plY3QiLCJMaW5lYXJHcmFkaWVudCIsImNvdmVyU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIkZsZXhBcm91bmREaXYiLCJGbGV4QmV0d2VlbkRpdiIsIkZsZXhDZW50ZXJEaXYiLCJGb3JtQnV0dG9uR3JvdXAiLCJCdXR0b25Hcm91cCIsIkZvcm1Sb3ciLCJSb3ciLCJUaXRsZSIsImg1IiwiUGFnaW5hdGlvbkJveCIsIklu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LEdBQUduTCxpRUFBTSxDQUFDb0wsMENBQUQsQ0FBVCxxQkFBYjtBQUlBLElBQU1DLEtBQUssR0FBR3JMLHlEQUFNLENBQUNzTCxFQUFWLHNCQUFxQnpMLFFBQXJCLENBQVg7QUFFQSxJQUFNMEwsYUFBYSxHQUFHdkwsaUVBQU0sQ0FBQytLLGNBQUQsQ0FBVCxxQkFBbkI7QUFLQSxJQUFNUyxPQUFPLEdBQUd4TCx5REFBTSxDQUFDeUwsQ0FBVixxQkFBYjtBQVNBLElBQU1DLFNBQVMsR0FBRzFMLHlEQUFNLENBQUNDLEdBQVYscUJBQWY7QUFTQSxJQUFNMEwsVUFBVSxHQUFHM0wsaUVBQU0sQ0FBQ3FMLEtBQUQsQ0FBVCxxQkFBaEI7QUFPQSxJQUFNTyxZQUFZLEdBQUc1TCx5REFBTSxDQUFDNkwsR0FBVixxQkFBbEIsQzs7Ozs7Ozs7Ozs7QUNyTFAsdUMiLCJmaWxlIjoiYXBwfmxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zL2luZGV4JztcblxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwOi8vJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG59KTtcblxuXG5jb25zdCBCYWNrZW5kQ2xpZW50ID0gKHRva2VuID0gbnVsbCwgcmVzcG9uc2VUeXBlPW51bGwpPT5cbiAgICB7XG4gICAgICAgIHJldHVybiAoYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgJ0F1dGhlbnRpY2F0aW9uJzogJ0JlYXJlciAnICt0b2tlblxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZVR5cGVcbiAgICAgICAgfSkpO1xuICAgIH07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbmV4cG9ydCB7QmFja2VuZENsaWVudH07XG4iLCJpbXBvcnQge0JhY2tlbmRDbGllbnR9IGZyb20gXCIuLi9heGlvcy1jbGllbnRcIjtcbmltcG9ydCB7dXNlQ3JlYXRlSG9va30gZnJvbSBcIi4uL3VzZUhvb2tcIjtcbmltcG9ydCB1c2VDb29raWVzIGZyb20gXCIuLi91c2VDb29raWVzXCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VHZXRVc2VySW5mbygpIHtcblxuICAgIGNvbnN0IHthY2Nlc3NUb2tlbn0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KGFjY2Vzc1Rva2VuKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC91c2Vycy9nZXQnLCdnZXQnLG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0VXNlckluZm9CeUVtYWlsKCl7XG4gICAgY29uc3Qge2FjY2Vzc1Rva2VufSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3VzZXJzL2dldEJ5TWFpbCcsJ2dldCcsbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRSYW5kb21Qcm9maWxlcygpe1xuICAgIGNvbnN0IHthY2Nlc3NUb2tlbn0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KGFjY2Vzc1Rva2VuKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC91c2Vycy9nZXRyYW5kb20nLCdnZXQnLFtdKTtcbn1cbiIsImltcG9ydCB7QmFja2VuZENsaWVudH0gZnJvbSBcIi4vYXhpb3MtY2xpZW50XCI7XG5pbXBvcnQge3VzZUNyZWF0ZUhvb2t9IGZyb20gXCIuL3VzZUhvb2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VMb2dpbigpIHtcblxuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2xvZ2luJywncG9zdCcsbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlUmVnaXN0ZXIoKSB7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC9yZWdpc3RlcicsJ3Bvc3QnLG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gIHVzZVBhc3N3b3JkUmVjb3ZlcnkoKSB7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC9yZWNvdmVyeScsJ3Bvc3QnLGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VDaGFuZ2VQYXNzd29yZCgpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3Bhc3N3b3JkY2hhbmdlJywncG9zdCcsZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUNoZWNrVXNlck1haWwoKSB7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvYmFja2VuZC9jaGVja3VzZXInLCdwb3N0JyxmYWxzZSk7XG59XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb29raWVzKCl7XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbiAgICBsZXQgYWNjZXNzVG9rZW4gPSAoY29va2llcy5nZXQoJ2FjY2Vzc1Rva2VuJykpPyBjb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKSA6IG51bGw7XG4gICAgY29uc3QgYXV0aGVudGljYXRlZCA9IGNvb2tpZXMuZ2V0KCdhdXRoZW50aWNhdGVkJyk7XG4gICAgY29uc3QgdXNlciA9IGNvb2tpZXMuZ2V0KCd1c2VyJyk7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBjb29raWVzLmdldCgnbGFuZ3VhZ2UnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgYXV0aGVudGljYXRlZDogYXV0aGVudGljYXRlZCxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlXG4gICAgfVxufVxuXG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gXCIuLy4uL1JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7U1dJVENIX0xPQURJTkdfU1RBVFVTfSBmcm9tIFwiLi4vUmVkdXgvYWN0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlSG9vayhDbGllbnQsIHVybCwgbWV0aG9kLCBkZWZhdWx0RGF0YVZhbHVlKXtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGRlZmF1bHREYXRhVmFsdWUpO1xuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gdXJsICsgXCIgU1VDQ0VTU1wiO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHVybCArIFwiIEVSUk9SXCI7XG4gICAgY29uc3QgZGVmYXVsdFN1Y2Nlc3NDYWxsYmFjayA9ICgpID0+IHsvKmNvbnNvbGUubG9nKHN1Y2Nlc3NNZXNzYWdlKTsqL307XG4gICAgY29uc3QgZGVmYXVsdEVycm9yQ2FsbGJhY2sgPSAoZSkgPT4gey8qY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UsIGUpOyovfTtcbiAgICBsZXQgcmVxdWVzdEhhbmRsZXI7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgY29uc3QgZGVmYXVsdENhbGxiYWNrcyA9IHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrOiBkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrLFxuICAgICAgICBlcnJvckNhbGxiYWNrOiBkZWZhdWx0RXJyb3JDYWxsYmFjayxcbiAgICAgICAgZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uOiBudWxsXG4gICAgfTtcblxuICAgIGxldCBzdGF0dXNSZXNwb25zZSA9IG51bGw7XG4gICAgaWYoc3RhdHVzIT09bnVsbCl7XG4gICAgICAgIHN0YXR1c1Jlc3BvbnNlID0gKHN0YXR1cz09PTIwMCk7XG4gICAgfVxuXG4gICAgc3dpdGNoKG1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJnZXRcIjpcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0YXJ0VXJsID0gdXJsO1xuICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXIgPSAoZ2V0UGFyYW1ldGVycywgY2FsbGJhY2tzID0gZGVmYXVsdENhbGxiYWNrcyApID0+IHtcblxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHZXQgUGFyYW1ldGVyc1wiLCBnZXRQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGdldFBhcmFtZXRlcnMpKXtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbWV0ZXIpPT57dXJsICs9IFwiL1wiICsgcGFyYW1ldGVyIH0pO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpZihnZXRQYXJhbWV0ZXJzIT09dW5kZWZpbmVkICYmIGdldFBhcmFtZXRlcnMhPT1udWxsKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsKz1cIi9cIitnZXRQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihnZXRQYXJhbWV0ZXJzPT09bnVsbCl7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2V0IFVybFwiLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgQ2xpZW50LmdldCh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EYXRhIE1hbmlwdWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hbmlwdWxhdGVkRGF0YSA9IGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShtYW5pcHVsYXRlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU3VjY2VzcyBDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vycm9yQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSXMgY2FsbGJhY2sgdW5kZWZpbmVkXCIsIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrPT09dW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5lcnJvckNhbGxiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhlLnJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvL0NsZWFyaW5nIHRoZSB1cmwgc28gdGhlIHVybCBjYW4gYmUgdXNlZCBhZnRlcndhcmRzXG4gICAgICAgICAgICAgICAgdXJsID0gc3RhcnRVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RhdGEsIHJlcXVlc3RIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c1Jlc3BvbnNlXTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicG9zdFwiOlxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0SGFuZGxlciA9IChmb3JtRGF0YSwgY2FsbGJhY2tzID0gZGVmYXVsdENhbGxiYWNrcykgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlNXSVRDSF9MT0FESU5HX1NUQVRVUywgaXNMb2FkaW5nOnRydWV9KTtcbiAgICAgICAgICAgICAgICBDbGllbnQucG9zdCh1cmwsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGEgTWFuaXB1bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFuaXB1bGF0ZWREYXRhID0gY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTWFuaXB1bGF0aW5nIGRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShtYW5pcHVsYXRlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNldHRpbmcgZGF0YVwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJTdWNjZXNzIGNhbGxiYWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGVmYXVsdCBzdWNjZXNzIGNhbGxiYWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9FcnJvckNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZXJyb3JDYWxsYmFjayE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3MuZXJyb3JDYWxsYmFjayhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhlLnJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6U1dJVENIX0xPQURJTkdfU1RBVFVTLCBpc0xvYWRpbmc6ZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBbZGF0YSxyZXF1ZXN0SGFuZGxlciwgbG9hZGVkLCBzdGF0dXNSZXNwb25zZV07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RhcnRVcmwgPSB1cmw7XG4gICAgICAgICAgICByZXF1ZXN0SGFuZGxlciA9IChnZXRQYXJhbWV0ZXJzLCBjYWxsYmFja3MgPSBkZWZhdWx0Q2FsbGJhY2tzICkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHZXQgUGFyYW1ldGVyc1wiLCBnZXRQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGdldFBhcmFtZXRlcnMpKXtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbWV0ZXIpPT57dXJsICs9IFwiL1wiICsgcGFyYW1ldGVyIH0pO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpZihnZXRQYXJhbWV0ZXJzIT09dW5kZWZpbmVkKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsKz1cIi9cIitnZXRQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHZXQgVXJsXCIsIHVybCk7XG5cbiAgICAgICAgICAgICAgICBDbGllbnQuZGVsZXRlKHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGEgTWFuaXB1bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFuaXB1bGF0ZWREYXRhID0gY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50byBjYXRjaCBkZWxldGVcIixlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhlLnJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vycm9yQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSXMgY2FsbGJhY2sgdW5kZWZpbmVkXCIsIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrPT09dW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5lcnJvckNhbGxiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vQ2xlYXJpbmcgdGhlIHVybCBzbyB0aGUgdXJsIGNhbiBiZSB1c2VkIGFmdGVyd2FyZHNcbiAgICAgICAgICAgICAgICB1cmwgPSBzdGFydFVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGF0YSwgcmVxdWVzdEhhbmRsZXIsIGxvYWRlZCwgc3RhdHVzUmVzcG9uc2VdO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7SWNvbiwgTmF2LCBOYXZiYXJ9IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCAqIGFzIFJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQge2JvcmRlYXV4fSBmcm9tIFwiLi4vc3R5bGVkQ29tcG9uZW50cy9DdXN0b21Db21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZpbmFsSGVhZGVyIGZyb20gXCIuL0ZpbmFsSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRMYXlvdXQoe3BhZ2V9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RGVza3RvcERpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLCBtaW5IZWlnaHQ6XCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8RmluYWxIZWFkZXIgLz5cblxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDpcIjEwMCVcIiwgcGFkZGluZ1RvcDo1MyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDo4MSwgcGFkZGluZ0xlZnQ6NDAsIHBhZGRpbmdSaWdodDo0MCwgbWFyZ2luOlwiMCBhdXRvXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZDpgbGluZWFyLWdyYWRpZW50KCR7Ym9yZGVhdXh9IDUwJSw1MCUsIHdoaXRlc21va2UgNTAlKWAsIGZsZXhHcm93OjEgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EZXNrdG9wRGl2Pilcbn1cblxuY29uc3QgRGVza3RvcERpdiA9IHN0eWxlZC5kaXZgcG9zaXRpb246IGFic29sdXRlOyAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6MTAwJTtgO1xuIiwiaW1wb3J0IHtEcm9wZG93biwgSWNvbiwgTmF2LCBOYXZiYXJ9IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCAqIGFzIFJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSBcIi4uL1JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7aGVhZGVySGVpZ2h0fSBmcm9tIFwiLi4vc3R5bGVkQ29tcG9uZW50cy9DdXN0b21Db21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbmFsSGVhZGVyKCl7XG5cbiAgICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICBjb25zdCB7YXV0aGVudGljYXRlZH0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuICAgIGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gY29kZSA9PiB7XG4gICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoY29kZSk7XG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLnN3aXRjaExhbmd1YWdlKGNvZGUpKVxuXG4gICAgfTtcbiAgICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy5sb2dPdXQoKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2xvZ2luXCI7XG4gICAgfVxuXG4gICAgY29uc3QgTGFuZ3VhZ2VEcm9wZG93biA9ICh7IC4uLnByb3BzIH0pID0+IChcbiAgICAgICAgPERyb3Bkb3duIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZSgnaXQnKX0gPiBJdGFsaWFubzwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKCdlbicpfSA+IEVuZ2xpc2g8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZSgnYXInKX0gPiDYp9mE2YTYutipINin2YTYudix2KjZitipPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoJ2dyJyl9ID4gzpXOu867zrfOvc65zrrOrDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICApO1xuXG4gICAgY29uc3QgQ3VzdG9tRHJvcGRvd24gPSAoeyAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgIDxEcm9wZG93biBwbGFjZW1lbnQ9XCJsZWZ0U3RhcnRcIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmRhc2hib2FyZFBhZ2UpfSBldmVudEtleT1cIjFcIiBpY29uPXs8SWNvbiBpY29uPVwiaG9tZVwiIC8+fT5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKT0+IGhpc3RvcnkucHVzaChSb3V0ZXMuc2VydmljZVNlYXJjaFBhZ2UpfSBldmVudEtleT1cIjNcIj57dCgnU2VhcmNoIHByb2plY3RzJyl9PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLnNlYXJjaFVzZXJQYWdlKX0gZXZlbnRLZXk9XCI0XCI+e3QoJ1NlYXJjaCBvcmdhbmlzYXRpb25zJyl9PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAge3VzZXIgJiYgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLnByb2ZpbGUodXNlci5wcm9maWxlTmFtZSkpfSA+e3QoJ1Byb2ZpbGUnKX08L0Ryb3Bkb3duLkl0ZW0+fVxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlcy5pbmNsdWRlcyhcIlJPTEVfQURNSU5cIikgJiYgPERyb3Bkb3duLk1lbnUgcHVsbExlZnQgdGl0bGU9e3QoJ0FkbWluaXN0cmF0aW9uJyl9ID5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKT0+IGhpc3RvcnkucHVzaChSb3V0ZXMuYWRtaW5pc3RyYXRpb25Qcm9qZWN0cyl9IGV2ZW50S2V5PVwiZS0yXCI+UHJvamVjdHM8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmFkbWluaXN0cmF0aW9uQ29sbGFib3JhdGlvbnMpfSBldmVudEtleT1cImUtM1wiPlNlcnZpY2VzIGFuZCBjb2xsYWJvcmF0aW9uczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKT0+IGhpc3RvcnkucHVzaChSb3V0ZXMuYWRtaW5pc3RyYXRpb25Vc2Vycyl9IGV2ZW50S2V5PVwiZS00XCI+VXNlcnM8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmFkbWluaXN0cmF0aW9uQ2F0ZWdvcmllcyl9IGV2ZW50S2V5PVwiZS01XCI+Q2F0ZWdvcmllczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKT0+IGhpc3RvcnkucHVzaChSb3V0ZXMuYWRtaW5pc3RyYXRpb25FeHBlcnRpc2UpfSBldmVudEtleT1cImUtNlwiPkV4cGVydGlzZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKT0+IGhpc3RvcnkucHVzaChSb3V0ZXMuYWRtaW5pc3RyYXRpb25OZXdzKX0gZXZlbnRLZXk9XCJlLTdcIj5OZXdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51Pn1cbiAgICAgICAgICAgIHthdXRoZW50aWNhdGVkICYmIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIvYmFja2VuZC9sb2dvdXRcIiA+e3QoJ0xvZ291dCcpfTwvRHJvcGRvd24uSXRlbT59XG4gICAgICAgICAgICB7IWF1dGhlbnRpY2F0ZWQgJiYgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIi9sb2dpblwiID57dCgnTG9naW4nKX08L0Ryb3Bkb3duLkl0ZW0+fVxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICk7XG5cblxuXG4gICAgcmV0dXJuIDxOYXZiYXIgYXBwZWFyYW5jZT1cInN1YnRsZVwiIHN0eWxlPXt7cG9zaXRpb246XCJmaXhlZFwiLCB6SW5kZXg6MTAwLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OmhlYWRlckhlaWdodCwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PlxuICAgICAgICA8TmF2YmFyLkhlYWRlciBzdHlsZT17e2hlaWdodDpoZWFkZXJIZWlnaHQsIGZsZXhHcm93OjF9fSBvbkNsaWNrPXsoKT0+aGlzdG9yeS5wdXNoKFJvdXRlcy5kYXNoYm9hcmRQYWdlKX0+XG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gaGVpZ2h0PXtoZWFkZXJIZWlnaHR9IHNyYz1cIi9kZWZhdWx0cy9lbl9tb3JldGhhbmFqb2IucG5nXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIGxvZ29cIj5cbiAgICAgICAgICAgIDwvaW1nPlxuICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgIDxOYXZiYXIuQm9keT5cbiAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgPExhbmd1YWdlRHJvcGRvd24gdGl0bGU9e3QoJ01lbnUgbGFuZ3VhZ2UnKX0gLz5cbiAgICAgICAgICAgICAgICB7ZmFsc2UgJiYgPE5hdi5JdGVtIG9uQ2xpY2s9eygpPT5oaXN0b3J5LnB1c2goUm91dGVzLnJlZ2lzdHJhdGlvbil9IGljb249ezxJY29uIGljb249XCJjb2dcIiAvPn0+UmVnaXN0ZXI8L05hdi5JdGVtPn1cbiAgICAgICAgICAgICAgICAgPEN1c3RvbURyb3Bkb3duIGljb249ezxJY29uIGljb249XCJiYXJzXCIgLz59IHBsYWNlbWVudD1cImJvdHRvbUVuZFwiIC8+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXIuQm9keT5cbiAgICA8L05hdmJhcj5cbn1cbiIsImltcG9ydCB7Ym9yZGVhdXh9IGZyb20gXCIuLi9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB7SWNvbn0gZnJvbSBcInJzdWl0ZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjpib3JkZWF1eCwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIHBhZGRpbmc6NTB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDoyNTAsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwifX0+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2ZhY2Vib29rLmNvbS9tb3JldGhhbmFqb2JcIj48SWNvbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGljb249XCJmYWNlYm9vay1zcXVhcmVcIiBzaXplPVwiM3hcIi8+PC9hPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvbW9yZXRoYW5ham9iZW5pL1wiPjxJY29uIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gaWNvbj1cImxpbmtlZGluLXNxdWFyZVwiIHNpemU9XCIzeFwiLz48L2E+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3R3aXR0ZXIuY29tL3RoYW5fam9iXCI+PEljb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fSBpY29uPVwidHdpdHRlci1zcXVhcmVcIiBzaXplPVwiM3hcIiAvPjwvYT4gPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PGEgc3R5bGU9e3tjb2xvcjpcIndoaXRlc21va2VcIn19IGhyZWY9XCJodHRwOi8vd3d3LmVuaWNiY21lZC5ldS9wcm9qZWN0cy9tb3JldGhhbmFqb2JcIj5odHRwOi8vd3d3LmVuaWNiY21lZC5ldS9wcm9qZWN0cy9tb3JldGhhbmFqb2I8L2E+PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOjQwfX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6OX19PuKAnFRoaXMgd2Vic2l0ZSBoYXMgYmVlbiBwcm9kdWNlZCB3aXRoIHRoZSBmaW5hbmNpYWwgYXNzaXN0YW5jZSBvZiB0aGUgRXVyb3BlYW4gVW5pb24gdW5kZXIgdGhlIEVOSSBDQkMgTWVkaXRlcnJhbmVhbiBTZWEgQmFzaW4gUHJvZ3JhbW1lLiBUaGUgY29udGVudHMgb2YgdGhpcyBkb2N1bWVudCBhcmUgdGhlIHNvbGUgcmVzcG9uc2liaWxpdHkgb2YgQ0VTSUUgYW5kIGNhbiB1bmRlciBubyBjaXJjdW1zdGFuY2VzIGJlIHJlZ2FyZGVkIGFzIHJlZmxlY3RpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBFdXJvcGVhbiBVbmlvbiBvciB0aGUgUHJvZ3JhbW1lIG1hbmFnZW1lbnQgc3RydWN0dXJlcy5cblxuICAgICAgICAgICAgVGhlIDIwMTQgMjAyMCBFTkkgQ0JDIE1lZGl0ZXJyYW5lYW4gU2VhIEJhc2luIFByb2dyYW1tZSBpcyBhIG11bHRpbGF0ZXJhbCBDcm9zcyBCb3JkZXIgQ29vcGVyYXRpb24gKCBpbml0aWF0aXZlIGZ1bmRlZCBieSB0aGUgRXVyb3BlYW4gTmVpZ2hib3VyaG9vZCBJbnN0cnVtZW50IC0gRU5JKS4gVGhlIFByb2dyYW1tZSBvYmplY3RpdmUgaXMgdG8gZm9zdGVyIGZhaXIsIGVxdWl0YWJsZSBhbmQgc3VzdGFpbmFibGUgZWNvbm9taWMsIHNvY2lhbCBhbmQgdGVycml0b3JpYWwgZGV2ZWxvcG1lbnQsIHdoaWNoIG1heSBhZHZhbmNlIGNyb3NzIGIgb3JkZXIgaW50ZWdyYXRpb24gYW5kIHZhbG9yaXNlIHBhcnRpY2lwYXRpbmcgY291bnRyaWVz4oCZIHRlcnJpdG9yaWVzIGFuZCB2YWx1ZXMuIFRoZSBmb2xsb3dpbmcgMTMgY291bnRyaWVzIHBhcnRpY2lwYXRlIGluIHRoZSBQcm9ncmFtbWU6IEN5cHJ1cywgRWd5cHQsIEZyYW5jZSwgR3JlZWNlLCBJc3JhZWwsIEl0YWx5LCBKb3JkYW4sIExlYmFub24sIE1hbHRhLCBQYWxlc3RpbmUsIFBvcnR1Z2FsLCBTcGFpbiwgVHVuaXNpYS4gVGhlIE1hbmFnaW5nIEF1dGhvcml0eSAoTUEpIGlzIHRoZSBBdXRvbm9tb3VzIFJlZ2lvbiBvZiBTYXJkaW5pYSAoSXRhbHkpLiBPZmZpY2lhbCBQcm9ncmFtbWUgbGFuZ3VhZ2VzIGFyZSBBcmFiaWMsIEVuZ2xpc2ggYW5kIEZyZW5jaC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSB2aXNpdDo8L3NwYW4+XG4gICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOjksIGNvbG9yOlwid2hpdGVzbW9rZVwiLCBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9fSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZW5pY2JjbWVkLmV1XCI+IHd3dy5lbmljYmNtZWQuZXU8L2E+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6OX19Pi4gVGhlIEV1cm9wZWFuIFVuaW9uIGlzIG1hZGUgdXAgb2YgMjcgTWVtYmVyIFN0YXRlcyB3aG8gaGF2ZSBkZWNpZGVkIHRvIGdyYWR1YWxseSBsaW5rIHRvZ2V0aGVyIHRoZWlyIGtub3cgaG93LCByZXNvdXJjZXMgYW5kIGRlc3Rpbmllcy4gVG9nZXRoZXIsIGR1cmluZyBhIHBlcmlvZCBvZiBlbmxhcmdlbWVudCBvZiA1MCB5ZWFycywgdGhleSBoYXZlIGJ1aWx0IGEgem9uZSBvZiBzdGFiaWxpdHksIGRlbW9jcmFjeSBhbmQgc3VzdGFpbmFibGUgZGV2ZWxvcG1lbnQgd2hpbHN0IG1haW50YWluaW5nIGN1bHR1cmFsIGRpdmVyc2l0eSwgdG9sZXJhbmNlIGFuZCBpbmRpdmlkdWFsIGZyZWVkb21zLiBUaGUgRXVyb3BlYW4gVW5pb24gaXMgY29tbWl0dGVkIHRvIHNoYXJpbmcgaXRzIGFjaGlldmVtZW50cyBhbmQgaXRzIHZhbHVlcyB3aXRoIGNvdW50cmllcyBhbmQgcGVvcGxlcyBiZXlvbmQgaXRzIGJvcmRlcnMu4oCdPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PilcblxufVxuIiwiaW1wb3J0IHtJbnB1dCxCdXR0b24sIEJ1dHRvblRvb2xiYXIsIENvbnRyb2xMYWJlbCwgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgSGVscEJsb2NrLCBTY2hlbWF9IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rLCB1c2VIaXN0b3J5fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtNYWluQnV0dG9uLCBSZWdpc3RyYXRpb25Cb3gsIFNlY29uZGFyeUJ1dHRvbn0gZnJvbSBcIi4uLy4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQge3VzZUNoYW5nZVBhc3N3b3JkLCB1c2VDaGVja1VzZXJNYWlsLCB1c2VMb2dpbn0gZnJvbSBcIi4uLy4uL0JhY2tlbmQvdXNlQmFja2VuZFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi9UZXh0RmllbGRcIjtcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7bG9naW5Qcm9wc30pe1xuXG4gICAgY29uc3QgeyBTdHJpbmdUeXBlIH0gPSBTY2hlbWEuVHlwZXM7XG4gICAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG5cbiAgICBjb25zdCBtb2RlbCA9IFNjaGVtYS5Nb2RlbCh7XG4gICAgICAgIGVtYWlsOiBTdHJpbmdUeXBlKClcbiAgICAgICAgICAgIC8vIC5hZGRSdWxlKCh2YWx1ZSwgZGF0YSkgPT4ge3JldHVybiBhc3luY0NoZWNrVXNlcm5hbWUodmFsdWUpO30sICdEdXBsaWNhdGUgdXNlcm5hbWUnKVxuICAgICAgICAgICAgLmlzUmVxdWlyZWQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCByZWdpc3RyYXRpb25CdXR0b24gPSAobG9naW5Qcm9wcy5yZWdpc3RyYXRpb24pID8gPFNlY29uZGFyeUJ1dHRvbiBocmVmPXtsb2dpblByb3BzLnJlZ2lzdHJhdGlvbk5hdmlnYXRpb259IGFwcGVhcmFuY2U9XCJkZWZhdWx0XCIgID57dCgnUmVnaXN0ZXInKX08L1NlY29uZGFyeUJ1dHRvbj4gOiA8PjwvPjtcblxuXG4gICAgcmV0dXJuICg8UmVnaXN0cmF0aW9uQm94PlxuICAgICAgICA8Q29udHJvbExhYmVsPnt0KCdFbWFpbCcpfTwvQ29udHJvbExhYmVsPlxuICAgICAgICA8SW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIvPlxuICAgICAgICA8Q29udHJvbExhYmVsPjxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PjxzcGFuPnt0KCdQYXNzd29yZCcpfTwvc3Bhbj4gPGEgaHJlZj1cIi9yZWNvdmVyXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT4gPC9kaXY+PC9Db250cm9sTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIi8+XG4gICAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICAgICAgPE1haW5CdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+e3QoJ0xvZ2luJyl9PC9NYWluQnV0dG9uPlxuICAgICAgICAgICAge3JlZ2lzdHJhdGlvbkJ1dHRvbn1cbiAgICAgICAgPC9CdXR0b25Ub29sYmFyPlxuICAgICAgICA8L1JlZ2lzdHJhdGlvbkJveD4pXG59XG5cblxuLypcbmNvbnN0IGFsdHJvID0gPEZvcm1cbiAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgIG1vZGVsPXttb2RlbH1cbiAgICBmb3JtVmFsdWU9e2Zvcm1WYWx1ZX1cbiAgICBvbkNoYW5nZT17c2V0Rm9ybVZhbHVlfVxuICAgIC8vb25TdWJtaXQ9eygpPT5sb2dpblByb3BzLmxvZ2luSGFuZGxlcihmb3JtVmFsdWUpfVxuPlxuICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxDb250cm9sTGFiZWw+e3QoJ0VtYWlsJyl9PC9Db250cm9sTGFiZWw+XG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBjaGVja0FzeW5jIC8+XG4gICAgPC9Gb3JtR3JvdXA+XG4gICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPENvbnRyb2xMYWJlbD48ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT48c3Bhbj57dCgnUGFzc3dvcmQnKX08L3NwYW4+IDxMaW5rIHRvPXtSb3V0ZXMucGFzc3dvcmRSZWNvdmVyeX0+Rm9yZ290IHBhc3N3b3JkPzwvTGluaz4gPC9kaXY+PC9Db250cm9sTGFiZWw+XG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgIDwvRm9ybUdyb3VwPlxuICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICAgICAgPE1haW5CdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+e3QoJ0xvZ2luJyl9PC9NYWluQnV0dG9uPlxuICAgICAgICAgICAge3JlZ2lzdHJhdGlvbkJ1dHRvbn1cbiAgICAgICAgPC9CdXR0b25Ub29sYmFyPlxuICAgIDwvRm9ybUdyb3VwPlxuPC9Gb3JtPiovXG4iLCJpbXBvcnQge0NvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSBcInJzdWl0ZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmllbGQoeyBuYW1lLCBsYWJlbCwgYWNjZXB0ZXIsIHN0eWxlLCAuLi5yZXN0IH0pIHtcblxuICAgIGxldCBmaW5hbFN0eWxlICA9IHsuLi5zdHlsZX07XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXtmaW5hbFN0eWxlfT5cbiAgICAgICAgICAgIHtsYWJlbCAmJiA8Q29udHJvbExhYmVsPjxiPntsYWJlbH08L2I+IDwvQ29udHJvbExhYmVsPn1cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPXtuYW1lfSBhY2NlcHRlcj17YWNjZXB0ZXJ9IHN0eWxlPXtzdHlsZX0gey4uLnJlc3R9IC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSZWRpcmVjdCwgdXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7dXNlTG9naW59IGZyb20gXCIuLi8uLi9CYWNrZW5kL3VzZUJhY2tlbmRcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gXCIuLi8uLi9SZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi9Db21wb25lbnRzL0xvZ2luRm9ybVwiO1xuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQge3VzZUdldFVzZXJJbmZvQnlFbWFpbH0gZnJvbSBcIi4uLy4uL0JhY2tlbmQvaG9va3MvVXNlckluZm9cIjtcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJzdWl0ZVwiO1xuaW1wb3J0IHtSZWdpc3RyYXRpb25Cb3h9IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKXtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy11c2VyLXJhdGluZycpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXVzZXItcHJvZmlsZScpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7YXV0aGVudGljYXRlZH0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IHVzZXJEYXRhLmRhdGFzZXQudXNlclByb2ZpbGU7XG4gICAgICAgIGlmKHVzZXJQcm9maWxlKXtcbiAgICAgICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLnVwZGF0ZVVzZXJJbmZvKEpTT04ucGFyc2UodXNlclByb2ZpbGUpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGF1dGhlbnRpY2F0ZWQudG9TdHJpbmcoKSE9PWF1dGhlbnRpY2F0aW9uRGF0YS5kYXRhc2V0LmlzQXV0aGVudGljYXRlZCl7XG4gICAgICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy5zd2l0Y2hBdXRoZW50aWNhdGVkU3RhdHVzKCkpXG4gICAgICAgIH1cbiAgICB9LFtdKVxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBbbG9naW5SZXNwb25zZSwgcG9zdExvZ2luSGFuZGxlcl0gPSB1c2VMb2dpbigpO1xuICAgIGNvbnN0IFt1c2VySW5mbywgdXNlckluZm9IYW5kbGVyXSA9IHVzZUdldFVzZXJJbmZvQnlFbWFpbCgpO1xuXG5cbiAgICBjb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSAoYWNjZXNzVG9rZW4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMubG9naW4oYWNjZXNzVG9rZW4pKTtcblxuICAgIH07XG4gICAgY29uc3QgdXNlckluZm9TdWNjZXNzQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy51cGRhdGVVc2VySW5mbyhkYXRhKSk7XG4gICAgICAgIGhpc3RvcnkucHVzaChSb3V0ZXMucHJvZmlsZShkYXRhLnByb2ZpbGVOYW1lKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvZ2luID0gKGZvcm1EYXRhKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgZmluYWxGb3JtRGF0YSA9ICBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSk9PiBmaW5hbEZvcm1EYXRhLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0gKSk7XG4gICAgICAgIHBvc3RMb2dpbkhhbmRsZXIoZmluYWxGb3JtRGF0YSwge3N1Y2Nlc3NDYWxsYmFjazogc3VjY2Vzc0NhbGxiYWNrfSk7XG4gICAgICAgIHVzZXJJbmZvSGFuZGxlcihmb3JtRGF0YS5lbWFpbCx7c3VjY2Vzc0NhbGxiYWNrOiB1c2VySW5mb1N1Y2Nlc3NDYWxsYmFja30pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGxvZ2luUHJvcHMgPSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbjogdHJ1ZSxcbiAgICAgICAgcmVnaXN0cmF0aW9uTmF2aWdhdGlvbiA6IFwiL3JlZ2lzdHJhdGlvblwiLFxuICAgICAgICBsb2dpbkhhbmRsZXI6IGxvZ2luXG5cbiAgICB9XG4gIHJldHVybiAoYXV0aGVudGljYXRlZCkgPyA8QWxyZWFkeUxvZ2dlZEluLz4gOiA8TG9naW5Gb3JtIGxvZ2luUHJvcHM9e2xvZ2luUHJvcHN9Lz47XG59XG5cbmZ1bmN0aW9uIEFscmVhZHlMb2dnZWRJbigpe1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuXG4gICAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMubG9nT3V0KCkpO1xuICAgIH1cblxuICAgIC8vPEJ1dHRvbiBvbkNsaWNrPXtoaXN0b3J5LnB1c2goUm91dGVzLnByb2ZpbGUodXNlci5wcm9maWxlTmFtZSkpfS8+XG4gICAgcmV0dXJuICh1c2VyKSA/IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFJvdXRlcy5wcm9maWxlKHVzZXIucHJvZmlsZU5hbWUpKSA6IDxSZWdpc3RyYXRpb25Cb3g+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+U2lnbiBpbjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8ZGl2Pnt0KCdhbHJlYWR5X2xvZ2dlZF9tZXNzYWdlJyl9PC9kaXY+XG4gICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnNpZ25PdXQoKX0+e3QoJ3NpZ25fb3V0Jyl9PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9SZWdpc3RyYXRpb25Cb3g+XG59XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUdldFVzZXJJbmZvfSBmcm9tIFwiLi4vQmFja2VuZC9ob29rcy9Vc2VySW5mb1wiO1xuXG5leHBvcnQgY29uc3QgU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUyA9IFwiU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVU1wiO1xuZXhwb3J0IGNvbnN0IFNXSVRDSF9MT0FESU5HX1NUQVRVUyA9IFwiU1dJVENIX0xPQURJTkdfU1RBVFVTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfSU5GTyA9IFwiVVBEQVRFX1VTRVJfSU5GT1wiO1xuZXhwb3J0IGNvbnN0IFNXSVRDSF9MQU5HVUFHRSA9IFwiU1dJVENIX0xBTkdVQUdFXCI7XG5leHBvcnQgY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIjtcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VSVklDRVMgPSBcIlVQREFURV9TRVJWSUNFU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9DQVRFR09SSUVTID0gXCJVUERBVEVfQ0FURUdPUklFU1wiO1xuXG5leHBvcnQgY29uc3QgY29va2llc09wdGlvbnMgPSB7cGF0aDogXCIvXCJ9O1xuXG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hBdXRoZW50aWNhdGVkU3RhdHVzID0gKCkgPT57XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTLFxuICAgIH1cbn07XG5cblxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckluZm8gPSAoZGF0YSkgPT57XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbiAgICBjb25zdCB1c2VyQ29va2llID0ge1xuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcm9sZXM6IGRhdGEucm9sZXMsXG4gICAgICAgIHByb2ZpbGVOYW1lOiBkYXRhLnByb2ZpbGVOYW1lLFxuICAgICAgICBsYW5ndWFnZTogZGF0YS5sYW5ndWFnZVxuICAgIH1cbiAgICBjb29raWVzLnNldCgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJDb29raWUpLCBjb29raWVzT3B0aW9ucyk7XG5cbiAgICBsZXQgdXNlckNvb2tpZXMgPSBjb29raWVzLmdldCgndXNlcicpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVVBEQVRFX1VTRVJfSU5GTyxcbiAgICAgICAgdXNlcjogZGF0YVxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+e1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGNvb2tpZXMuc2V0KCdsYW5ndWFnZScsIGxhbmd1YWdlLCBjb29raWVzT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coXCJTd2l0Y2ggbGFuZ3VhZ2UgdG9cIiwgbGFuZ3VhZ2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU1dJVENIX0xBTkdVQUdFLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGFjY2Vzc1Rva2VuKSA9PntcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICBjb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBhY2Nlc3NUb2tlbiwgY29va2llc09wdGlvbnMpO1xuICAgIGNvb2tpZXMuc2V0KCdhdXRoZW50aWNhdGVkJywgdHJ1ZSwgY29va2llc09wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPR0lOLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5cbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT57XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgY29va2llcy5yZW1vdmUoJ2F1dGhlbnRpY2F0ZWQnLGNvb2tpZXNPcHRpb25zKTtcbiAgICBjb29raWVzLnJlbW92ZSgnYWNjZXNzVG9rZW4nLCBjb29raWVzT3B0aW9ucyk7XG4gICAgY29va2llcy5yZW1vdmUoJ3VzZXInLCBjb29raWVzT3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTE9HT1VULFxuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgYWNjZXNzVG9rZW46IG51bGxcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhdGVnb3JpZXMgPSAoY2F0ZWdvcmllcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6VVBEQVRFX0NBVEVHT1JJRVMsXG4gICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlcnZpY2VzID0gKHNlcnZpY2VzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpVUERBVEVfU0VSVklDRVMsXG4gICAgICAgIHNlcnZpY2VzOiBzZXJ2aWNlc1xuICAgIH1cbn1cbiIsImltcG9ydCB1c2VDb29raWVzIGZyb20gXCIuLi9CYWNrZW5kL3VzZUNvb2tpZXNcIjtcblxuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuY29uc3Qge2FjY2Vzc1Rva2VuLCBhdXRoZW50aWNhdGVkLCB1c2VyLCBsYW5ndWFnZX0gPSB1c2VDb29raWVzKCk7XG5cbmNvbnNvbGUubG9nKFwiVW5Fc2NhcGVkIHVzZXJcIiwgdW5lc2NhcGUodXNlcikpO1xuY29uc3QgZGVmYXVsdExhbmd1YWdlID0gKGxhbmd1YWdlIT09dW5kZWZpbmVkKSA/IGxhbmd1YWdlIDogXCJlblwiO1xuY29uc3QgYXV0aGVudGljYXRlZFN0YXR1cyA9IChhdXRoZW50aWNhdGVkIT09dW5kZWZpbmVkKSA/IGF1dGhlbnRpY2F0ZWQgOiBmYWxzZTtcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHthdXRoZW50aWNhdGVkOmF1dGhlbnRpY2F0ZWRTdGF0dXMsIGFjY2Vzc1Rva2VuOmFjY2Vzc1Rva2VuLCB1c2VyOih1c2VyKSwgaXNMb2FkaW5nOmZhbHNlLCBsYW5ndWFnZTpkZWZhdWx0TGFuZ3VhZ2UsIHNlcnZpY2VzOltdLCBjYXRlZ29yaWVzOltdfTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cbiAgICBpZihhY3Rpb24pe1xuXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVM6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAhc3RhdGUuYXV0aGVudGljYXRlZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlNXSVRDSF9MT0FESU5HX1NUQVRVUzp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGlzTG9hZGluZzogYWN0aW9uLmlzTG9hZGluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJfSU5GTzp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi51c2VyLCBsYW5ndWFnZTogYWN0aW9uLnVzZXIubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlNXSVRDSF9MQU5HVUFHRTp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGxhbmd1YWdlOiBhY3Rpb24ubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5MT0dPVVQ6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBhdXRoZW50aWNhdGVkOiBhY3Rpb24uYXV0aGVudGljYXRlZCwgdXNlcjogYWN0aW9uLnVzZXIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5MT0dJTjp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGF1dGhlbnRpY2F0ZWQ6IGFjdGlvbi5hdXRoZW50aWNhdGVkLCBhY2Nlc3NUb2tlbjogYWN0aW9uLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuVVBEQVRFX1NFUlZJQ0VTOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgc2VydmljZXM6YWN0aW9uLnNlcnZpY2VzLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuVVBEQVRFX0NBVEVHT1JJRVM6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBjYXRlZ29yaWVzOmFjdGlvbi5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiXG5leHBvcnQgY29uc3QgbWFpbiA9IFwiL1wiO1xuZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbiA9IFwiL3JlZ2lzdHJhdGlvblwiO1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gXCIvbG9naW5cIjtcbmV4cG9ydCBjb25zdCBwYXNzd29yZFJlY292ZXJ5ID0gXCIvcmVjb3ZlclwiO1xuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gXCIvcGFzc3dvcmQtY2hhbmdlXCI7XG5cblxuXG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25DYXRlZ29yaWVzID0gXCIvYWRtaW5pc3RyYXRpb24tY2F0ZWdvcmllc1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uRXhwZXJ0aXNlID0gXCIvYWRtaW5pc3RyYXRpb24tZXhwZXJ0aXNlXCI7XG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25Qcm9qZWN0cyA9IFwiL2FkbWluaXN0cmF0aW9uLXByb2plY3RzXCI7XG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25Db2xsYWJvcmF0aW9ucyA9IFwiL2FkbWluaXN0cmF0aW9uLWNvbGxhYm9yYXRpb25zXCI7XG5leHBvcnQgY29uc3QgYWRtaW5pc3RyYXRpb25TdGF0aXN0aWNzID0gXCIvYWRtaW5pc3RyYXRpb24tc3RhdGlzdGljc1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uVXNlcnMgPSBcIi9hZG1pbmlzdHJhdGlvbi11c2Vyc1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uTmV3cyA9IFwiL2FkbWluaXN0cmF0aW9uLW5ld3NcIjtcbmV4cG9ydCBjb25zdCBzZXJ2aWNlU2VhcmNoUGFnZSA9IFwiL3NlcnZpY2VzXCI7XG5leHBvcnQgY29uc3Qgc2VhcmNoVXNlclBhZ2UgPSBcIi9vcmdhbmlzYXRpb25zXCI7XG5leHBvcnQgY29uc3QgZGFzaGJvYXJkUGFnZSA9IFwiL2Rhc2hib2FyZFwiO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RQYWdlID0gXCIvbmV3LXByb2plY3RcIjtcbmV4cG9ydCBjb25zdCBuZXdQb3J0Zm9saW9QYWdlID0gXCIvbmV3LXBvcnRmb2xpb1wiO1xuZXhwb3J0IGNvbnN0IG5ld0NvbGxhYm9yYXRpb25QYWdlID0gXCIvbmV3LWNvbGxhYm9yYXRpb25cIjtcbmV4cG9ydCBjb25zdCBuZXdTZXJ2aWNlUGFnZSA9IFwiL25ldy1zZXJ2aWNlXCI7XG5leHBvcnQgY29uc3QgbmV3RnVybml0dXJlUGFnZSA9IFwiL25ldy1mdXJuaXR1cmVcIjtcbmV4cG9ydCBjb25zdCBjb2xsYWJvcmF0aW9uRGV0YWlsUGFnZSA9IFwiL2NvbGxhYm9yYXRpb24vOmlkXCI7XG5leHBvcnQgY29uc3Qgcm91dGVQcm9maWxlID0gXCIvcHJvZmlsZS86cHJvZmlsZW5hbWVcIjtcbmV4cG9ydCBjb25zdCByb3V0ZVByb2ZpbGVFZGl0ID0gXCIvZWRpdC1wcm9maWxlLzpwcm9maWxlbmFtZVwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlUHJvamVjdCA9IFwiL3Byb2plY3QvOmlkXCI7XG5leHBvcnQgY29uc3Qgcm91dGVFZGl0UHJvamVjdCA9IFwiL2VkaXQtcHJvamVjdC86aWRcIjtcbmV4cG9ydCBjb25zdCByb3V0ZUVkaXRDb2xsYWJvcmF0aW9uID0gXCIvZWRpdC1jb2xsYWJvcmF0aW9uLzppZFwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlRWRpdFNlcnZpY2UgPSBcIi9lZGl0LXNlcnZpY2UvOmlkXCI7XG5leHBvcnQgY29uc3QgaW1tZWRpYXRlTG9nb3V0ID0gXCIvaW1tZWRpYXRlbG9nb3V0XCI7XG5cbmV4cG9ydCB2YXIgbmV3c1BhZ2UgPSBcIi9uZXdzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9maWxlKG5hbWUpe1xuICAgIHJldHVybiBcIi9wcm9maWxlL1wiK25hbWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9maWxlKG5hbWUpe1xuICAgIHJldHVybiBcIi9lZGl0LXByb2ZpbGUvXCIrbmFtZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdChpZCl7XG4gICAgcmV0dXJuIFwiL3Byb2plY3QvXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdChpZCl7XG4gICAgcmV0dXJuIFwiL2VkaXQtcHJvamVjdC9cIitpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhYm9yYXRpb24oaWQpe1xuICAgIHJldHVybiBcIi9jb2xsYWJvcmF0aW9uL1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdENvbGxhYm9yYXRpb24oaWQpe1xuICAgIHJldHVybiBcIi9lZGl0LWNvbGxhYm9yYXRpb24vXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0U2VydmljZShpZCl7XG4gICAgcmV0dXJuIFwiL2VkaXQtc2VydmljZS9cIitpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRGdXJuaXR1cmUoaWQpe1xuICAgIHJldHVybiBcIi9lZGl0LWZ1cm5pdHVyZS9cIitpZDtcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkdyb3VwLCBJY29uQnV0dG9uLCBSb3d9IGZyb20gJ3JzdWl0ZSc7XG5cbmV4cG9ydCBjb25zdCBncmF5ID0gXCIjZjdmOGY5XCI7XG5leHBvcnQgY29uc3QgYm9yZGVhdXggPSBcIiNiNDU4NjBcIjtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckhlaWdodCA9IDEyNTtcbmV4cG9ydCBjb25zdCB1cGxvYWRlckNvdmVyQ29uZmlnID0geyB1bml0OiAncHgnLCB4OiAwLCB5OiAwLCBhc3BlY3Q6IDMuNTkyfVxuXG5cbmV4cG9ydCBjb25zdCBSZWdpc3RyYXRpb25Cb3ggPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAke2dyYXl9O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBgO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWF4LXdpZHRoOiAxMDgxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206MjA7XG4gICAgYDtcblxuXG5cbmV4cG9ydCBjb25zdCBGdWxsQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206MjA7XG4gICAgYDtcbmV4cG9ydCBjb25zdCBNYWluQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtib3JkZWF1eH07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6OTk5cHg7XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAke2JvcmRlYXV4fTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlYXV4fVxuYDtcblxuXG5leHBvcnQgY29uc3QgSW52ZXJzZUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICBjb2xvcjoke2JvcmRlYXV4fSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZWF1eH0haW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGA7XG5cbmV4cG9ydCBjb25zdCBTYXZlQnV0dG9uID0gc3R5bGVkKE1haW5CdXR0b24pYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVhdXh9IWltcG9ydGFudDtcbmBcblxuZXhwb3J0IGNvbnN0IEljb25CdXR0b25UcmFuc3BhcmVudCA9IHN0eWxlZChJY29uQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGNvbG9yOiR7Ym9yZGVhdXh9O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7Ym9yZGVhdXh9O1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJvZmlsZVBpY3R1cmUgPSBcIi9kZWZhdWx0cy9wcm9maWxlX3RodW1ibmFpbC5wbmdcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0UGljdHVyZSA9IFwiL2RlZmF1bHRzL3Byb2plY3RfdGh1bWJuYWlsLnBuZ1wiO1xuZXhwb3J0IGNvbnN0IGNvdmVyUGljdHVyZSA9IFwiL2RlZmF1bHRzL2NvdmVyX3RodW1ibmFpbC5wbmdcIjtcbmV4cG9ydCBjb25zdCBub1Byb2ZpbGVQaWN0dXJlID0gXCIvZGVmYXVsdHMvbm8taW1hZ2UucG5nXCI7XG5leHBvcnQgY29uc3Qgbm9Qcm9qZWN0UGljdHVyZSA9IFwiL2RlZmF1bHRzL25vLWltYWdlLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgRm9ybUJveCA9IHN0eWxlZC5kaXZgXG5wYWRkaW5nOiAxMHB4O1xubWluLWhlaWdodDoxMDB2aGBcbjtcblxuZXhwb3J0IGNvbnN0IENvbGxhYm9yYXRpb25Cb3ggPSAgc3R5bGVkLmRpdmBcbndpZHRoOiAxMDAlO1xubWluLWhlaWdodDogMTUwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAke2JvcmRlYXV4fTtcbmNvbG9yOiB3aGl0ZTtcbmZvbnQtc2l6ZTogNDBweDtcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gXG47XG5cbmV4cG9ydCBjb25zdCBJY29uU3BhbiA9IHN0eWxlZC5zcGFuYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMzUlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O2A7XG5cbmV4cG9ydCBjb25zdCBJY29uU3BhblByb2plY3QgPSBzdHlsZWQuc3BhbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2A7XG5cbmV4cG9ydCBjb25zdCBMaW5lYXJHcmFkaWVudCA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjcuODM5NjQzNjUyNTYxMjUlO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgd2hpdGUpO1xuICAgIG9wYWNpdHk6MzMlO1xuICAgIGBcblxuZXhwb3J0IGNvbnN0IGNvdmVyU3R5bGUgPSB7aGVpZ2h0OjAsIHBhZGRpbmdUb3A6XCIyNy44Mzk2NDM2NTI1NjEyNSVcIiwgd2lkdGg6XCIxMDAlXCIsIG1hcmdpbkJvdHRvbToxMCwgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIixwb3NpdGlvbjpcInJlbGF0aXZlXCIsIGJhY2tncm91bmRTaXplOlwiY292ZXJcIn1cblxuXG5leHBvcnQgY29uc3QgRmxleEFyb3VuZERpdiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4QmV0d2VlbkRpdiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEZsZXhDZW50ZXJEaXYgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1CdXR0b25Hcm91cCA9IHN0eWxlZChCdXR0b25Hcm91cClgXG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1Sb3cgPSBzdHlsZWQoUm93KWBcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oNWBjb2xvcjoke2JvcmRlYXV4fTsgdGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbjoxMHB4O2A7XG5cbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uQm94ID0gc3R5bGVkKEZsZXhCZXR3ZWVuRGl2KWBcbiAgICBtYXJnaW46MHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xuYFxuXG5leHBvcnQgY29uc3QgSW5mb0JveCA9IHN0eWxlZC5wYFxuICAgIG1hcmdpbjowcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgXG4gICAgXG5gXG5cbmV4cG9ydCBjb25zdCBCYWNrVGl0bGUgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIGNvbG9yOndoaXRlc21va2U7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgIGZvbnQtc2l6ZTo0cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZyb250VGl0bGUgPSBzdHlsZWQoVGl0bGUpYFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgYDtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
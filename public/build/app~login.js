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
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom:30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function LoginForm(_ref) {
  var loginProps = _ref.loginProps;
  var StringType = rsuite__WEBPACK_IMPORTED_MODULE_3__["Schema"].Types.StringType;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var model = rsuite__WEBPACK_IMPORTED_MODULE_3__["Schema"].Model({
    email: StringType() // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
    .isRequired('This field is required'),
    password: StringType().isRequired('This field is required.')
  });
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  var registrationButton = loginProps.registration ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["SecondaryButton"], {
    href: loginProps.registrationNavigation,
    appearance: "default"
  }, t('Register')) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    style: {
      width: "100%"
    },
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FormRow, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"], null, t('Email')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "email",
    type: "email"
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FormRow, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, t('Password')), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/recover"
  }, "Forgot password?"), " ")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "password",
    type: "password"
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["FlexAroundDiv"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_6__["MainButton"], {
    appearance: "primary",
    type: "submit"
  }, t('Login')), registrationButton)))));
}
var FormRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_3__["Row"])(_templateObject());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC9heGlvcy1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvaG9va3MvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvdXNlQmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC91c2VDb29raWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL3VzZUhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9QYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xlc3MvYXBwLmxlc3MiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQmFja2VuZENsaWVudCIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwicHJvY2VzcyIsIlJFQUNUX0FQUF9CQUNLRU5EX1VSTCIsInVzZUdldFVzZXJJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFjY2Vzc1Rva2VuIiwiYmFja2VuZENsaWVudCIsInVzZUNyZWF0ZUhvb2siLCJ1c2VHZXRVc2VySW5mb0J5RW1haWwiLCJ1c2VHZXRSYW5kb21Qcm9maWxlcyIsInVzZUxvZ2luIiwidXNlUmVnaXN0ZXIiLCJ1c2VQYXNzd29yZFJlY292ZXJ5IiwidXNlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDaGVja1VzZXJNYWlsIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiZ2V0IiwiYXV0aGVudGljYXRlZCIsInVzZXIiLCJsYW5ndWFnZSIsIkNsaWVudCIsInVybCIsIm1ldGhvZCIsImRlZmF1bHREYXRhVmFsdWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrIiwiZGVmYXVsdEVycm9yQ2FsbGJhY2siLCJlIiwicmVxdWVzdEhhbmRsZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGVmYXVsdENhbGxiYWNrcyIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJkYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24iLCJzdGF0dXNSZXNwb25zZSIsInN0YXJ0VXJsIiwiZ2V0UGFyYW1ldGVycyIsImNhbGxiYWNrcyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwYXJhbWV0ZXIiLCJ1bmRlZmluZWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJtYW5pcHVsYXRlZERhdGEiLCJmb3JtRGF0YSIsInR5cGUiLCJTV0lUQ0hfTE9BRElOR19TVEFUVVMiLCJpc0xvYWRpbmciLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkZvb3RlciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVhdXgiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiTG9naW5Gb3JtIiwibG9naW5Qcm9wcyIsIlN0cmluZ1R5cGUiLCJTY2hlbWEiLCJUeXBlcyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJtb2RlbCIsIk1vZGVsIiwiZW1haWwiLCJpc1JlcXVpcmVkIiwicGFzc3dvcmQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsInJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbk5hdmlnYXRpb24iLCJGb3JtUm93Iiwic3R5bGVkIiwiUm93IiwiTG9naW4iLCJhdXRoZW50aWNhdGlvbkRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlckRhdGEiLCJ1c2VFZmZlY3QiLCJ1c2VyUHJvZmlsZSIsImRhdGFzZXQiLCJBY3Rpb25UeXBlcyIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwiaXNBdXRoZW50aWNhdGVkIiwibG9naW5SZXNwb25zZSIsInBvc3RMb2dpbkhhbmRsZXIiLCJ1c2VySW5mbyIsInVzZXJJbmZvSGFuZGxlciIsInVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrIiwicHVzaCIsIlJvdXRlcyIsInByb2ZpbGVOYW1lIiwibG9naW4iLCJmaW5hbEZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXBwZW5kIiwibG9naW5IYW5kbGVyIiwiQWxyZWFkeUxvZ2dlZEluIiwic2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVMiLCJVUERBVEVfVVNFUl9JTkZPIiwiU1dJVENIX0xBTkdVQUdFIiwiTE9HT1VUIiwiTE9HSU4iLCJVUERBVEVfU0VSVklDRVMiLCJVUERBVEVfQ0FURUdPUklFUyIsImNvb2tpZXNPcHRpb25zIiwicGF0aCIsInN3aXRjaEF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJDb29raWUiLCJyb2xlcyIsInNldCIsInN0cmluZ2lmeSIsInVzZXJDb29raWVzIiwic3dpdGNoTGFuZ3VhZ2UiLCJsb2dPdXQiLCJyZW1vdmUiLCJ1cGRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInVwZGF0ZVNlcnZpY2VzIiwic2VydmljZXMiLCJ1bmVzY2FwZSIsImRlZmF1bHRMYW5ndWFnZSIsImF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibWFpbiIsInBhc3N3b3JkUmVjb3ZlcnkiLCJjaGFuZ2VQYXNzd29yZCIsImFkbWluaXN0cmF0aW9uQ2F0ZWdvcmllcyIsImFkbWluaXN0cmF0aW9uRXhwZXJ0aXNlIiwiYWRtaW5pc3RyYXRpb25Qcm9qZWN0cyIsImFkbWluaXN0cmF0aW9uQ29sbGFib3JhdGlvbnMiLCJhZG1pbmlzdHJhdGlvblN0YXRpc3RpY3MiLCJhZG1pbmlzdHJhdGlvblVzZXJzIiwiYWRtaW5pc3RyYXRpb25OZXdzIiwic2VydmljZVNlYXJjaFBhZ2UiLCJzZWFyY2hVc2VyUGFnZSIsImRhc2hib2FyZFBhZ2UiLCJuZXdQcm9qZWN0UGFnZSIsIm5ld1BvcnRmb2xpb1BhZ2UiLCJuZXdDb2xsYWJvcmF0aW9uUGFnZSIsIm5ld1NlcnZpY2VQYWdlIiwibmV3RnVybml0dXJlUGFnZSIsImNvbGxhYm9yYXRpb25EZXRhaWxQYWdlIiwicm91dGVQcm9maWxlIiwicm91dGVQcm9maWxlRWRpdCIsInJvdXRlUHJvamVjdCIsInJvdXRlRWRpdFByb2plY3QiLCJyb3V0ZUVkaXRDb2xsYWJvcmF0aW9uIiwicm91dGVFZGl0U2VydmljZSIsImltbWVkaWF0ZUxvZ291dCIsIm5ld3NQYWdlIiwicHJvZmlsZSIsIm5hbWUiLCJlZGl0UHJvZmlsZSIsInByb2plY3QiLCJpZCIsImVkaXRQcm9qZWN0IiwiY29sbGFib3JhdGlvbiIsImVkaXRDb2xsYWJvcmF0aW9uIiwiZWRpdFNlcnZpY2UiLCJlZGl0RnVybml0dXJlIiwiZ3JheSIsImhlYWRlckhlaWdodCIsInVwbG9hZGVyQ292ZXJDb25maWciLCJ1bml0IiwieCIsInkiLCJhc3BlY3QiLCJSZWdpc3RyYXRpb25Cb3giLCJkaXYiLCJCb2R5IiwiRnVsbEJvZHkiLCJNYWluQnV0dG9uIiwiQnV0dG9uIiwiU2Vjb25kYXJ5QnV0dG9uIiwiSW52ZXJzZUJ1dHRvbiIsIlNhdmVCdXR0b24iLCJJY29uQnV0dG9uVHJhbnNwYXJlbnQiLCJJY29uQnV0dG9uIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9qZWN0UGljdHVyZSIsImNvdmVyUGljdHVyZSIsIm5vUHJvZmlsZVBpY3R1cmUiLCJub1Byb2plY3RQaWN0dXJlIiwiRm9ybUJveCIsIkNvbGxhYm9yYXRpb25Cb3giLCJJY29uU3BhbiIsInNwYW4iLCJJY29uU3BhblByb2plY3QiLCJMaW5lYXJHcmFkaWVudCIsImNvdmVyU3R5bGUiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsIkZsZXhBcm91bmREaXYiLCJGbGV4QmV0d2VlbkRpdiIsIkZsZXhDZW50ZXJEaXYiLCJGb3JtQnV0dG9uR3JvdXAiLCJCdXR0b25Hcm91cCIsIlRpdGxlIiwiaDUiLCJQYWdpbmF0aW9uQm94IiwiSW5mb0JveCIsInAiLCJCYWNrVGl0bGUiLCJGcm9udFRpdGxlIiwiUHJvZmlsZUltYWdlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBR0Msa0RBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzFCQyxTQUFPLEVBQUUsU0FEaUI7QUFFMUJDLFNBQU8sRUFBRTtBQUNMLG9CQUFnQjtBQURYO0FBRmlCLENBQWIsQ0FBakI7O0FBUUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUNsQjtBQUFBLE1BRG1CQyxLQUNuQix1RUFEMkIsSUFDM0I7QUFBQSxNQURpQ0MsWUFDakMsdUVBRDhDLElBQzlDO0FBQ0ksU0FBUU4sa0RBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ2pCQyxXQUFPLEVBQUVLLGdGQUFBLENBQVlDLHFCQURKO0FBRWpCTCxXQUFPLEVBQUU7QUFDTCxzQkFBZ0IsbUNBRFg7QUFFTCx3QkFBa0IsWUFBV0U7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QU02QixhQUFhLEdBQUczSSx5REFBTSxDQUFDOEcsR0FBVixxQkFBbkI7QUFNQSxJQUFNOEIsZUFBZSxHQUFHNUksaUVBQU0sQ0FBQzZJLGtEQUFELENBQVQscUJBQXJCO0FBS0EsSUFBTTlJLE9BQU8sR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUQsQ0FBVCxxQkFBYjtBQUlBLElBQU02SSxLQUFLLEdBQUc5SSx5REFBTSxDQUFDK0ksRUFBVixzQkFBcUIzSyxRQUFyQixDQUFYO0FBRUEsSUFBTTRLLGFBQWEsR0FBR2hKLGlFQUFNLENBQUMwSSxjQUFELENBQVQscUJBQW5CO0FBS0EsSUFBTU8sT0FBTyxHQUFHakoseURBQU0sQ0FBQ2tKLENBQVYscUJBQWI7QUFTQSxJQUFNQyxTQUFTLEdBQUduSix5REFBTSxDQUFDOEcsR0FBVixxQkFBZjtBQVNBLElBQU1zQyxVQUFVLEdBQUdwSixpRUFBTSxDQUFDOEksS0FBRCxDQUFULHFCQUFoQjtBQU9BLElBQU1PLFlBQVksR0FBR3JKLHlEQUFNLENBQUNzSixHQUFWLHFCQUFsQixDOzs7Ozs7Ozs7OztBQ3JMUCx1QyIsImZpbGUiOiJhcHB+bG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MvaW5kZXgnO1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly8nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbn0pO1xuXG5cbmNvbnN0IEJhY2tlbmRDbGllbnQgPSAodG9rZW4gPSBudWxsLCByZXNwb25zZVR5cGU9bnVsbCk9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIChheGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnQXV0aGVudGljYXRpb24nOiAnQmVhcmVyICcgK3Rva2VuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuZXhwb3J0IHtCYWNrZW5kQ2xpZW50fTtcbiIsImltcG9ydCB7QmFja2VuZENsaWVudH0gZnJvbSBcIi4uL2F4aW9zLWNsaWVudFwiO1xuaW1wb3J0IHt1c2VDcmVhdGVIb29rfSBmcm9tIFwiLi4vdXNlSG9va1wiO1xuaW1wb3J0IHVzZUNvb2tpZXMgZnJvbSBcIi4uL3VzZUNvb2tpZXNcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUdldFVzZXJJbmZvKCkge1xuXG4gICAgY29uc3Qge2FjY2Vzc1Rva2VufSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3VzZXJzL2dldCcsJ2dldCcsbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRVc2VySW5mb0J5RW1haWwoKXtcbiAgICBjb25zdCB7YWNjZXNzVG9rZW59ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudChhY2Nlc3NUb2tlbik7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvdXNlcnMvZ2V0QnlNYWlsJywnZ2V0JyxudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldFJhbmRvbVByb2ZpbGVzKCl7XG4gICAgY29uc3Qge2FjY2Vzc1Rva2VufSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3VzZXJzL2dldHJhbmRvbScsJ2dldCcsW10pO1xufVxuIiwiaW1wb3J0IHtCYWNrZW5kQ2xpZW50fSBmcm9tIFwiLi9heGlvcy1jbGllbnRcIjtcbmltcG9ydCB7dXNlQ3JlYXRlSG9va30gZnJvbSBcIi4vdXNlSG9va1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUxvZ2luKCkge1xuXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvbG9naW4nLCdwb3N0JyxudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VSZWdpc3RlcigpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3JlZ2lzdGVyJywncG9zdCcsbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlUGFzc3dvcmRSZWNvdmVyeSgpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3JlY292ZXJ5JywncG9zdCcsZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUNoYW5nZVBhc3N3b3JkKCkge1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvcGFzc3dvcmRjaGFuZ2UnLCdwb3N0JyxmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlQ2hlY2tVc2VyTWFpbCgpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL2NoZWNrdXNlcicsJ3Bvc3QnLGZhbHNlKTtcbn1cbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvb2tpZXMoKXtcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcblxuICAgIGxldCBhY2Nlc3NUb2tlbiA9IChjb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKSk/IGNvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpIDogbnVsbDtcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkID0gY29va2llcy5nZXQoJ2F1dGhlbnRpY2F0ZWQnKTtcbiAgICBjb25zdCB1c2VyID0gY29va2llcy5nZXQoJ3VzZXInKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGNvb2tpZXMuZ2V0KCdsYW5ndWFnZScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiBhdXRoZW50aWNhdGVkLFxuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcbiAgICB9XG59XG5cbiIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSBcIi4vLi4vUmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtTV0lUQ0hfTE9BRElOR19TVEFUVVN9IGZyb20gXCIuLi9SZWR1eC9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVIb29rKENsaWVudCwgdXJsLCBtZXRob2QsIGRlZmF1bHREYXRhVmFsdWUpe1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZGVmYXVsdERhdGFWYWx1ZSk7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSB1cmwgKyBcIiBTVUNDRVNTXCI7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdXJsICsgXCIgRVJST1JcIjtcbiAgICBjb25zdCBkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrID0gKCkgPT4gey8qY29uc29sZS5sb2coc3VjY2Vzc01lc3NhZ2UpOyovfTtcbiAgICBjb25zdCBkZWZhdWx0RXJyb3JDYWxsYmFjayA9IChlKSA9PiB7Lypjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSwgZSk7Ki99O1xuICAgIGxldCByZXF1ZXN0SGFuZGxlcjtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBkZWZhdWx0Q2FsbGJhY2tzID0ge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2s6IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2ssXG4gICAgICAgIGVycm9yQ2FsbGJhY2s6IGRlZmF1bHRFcnJvckNhbGxiYWNrLFxuICAgICAgICBkYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb246IG51bGxcbiAgICB9O1xuXG4gICAgbGV0IHN0YXR1c1Jlc3BvbnNlID0gbnVsbDtcbiAgICBpZihzdGF0dXMhPT1udWxsKXtcbiAgICAgICAgc3RhdHVzUmVzcG9uc2UgPSAoc3RhdHVzPT09MjAwKTtcbiAgICB9XG5cbiAgICBzd2l0Y2gobWV0aG9kKXtcbiAgICAgICAgY2FzZSBcImdldFwiOlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RhcnRVcmwgPSB1cmw7XG4gICAgICAgICAgICByZXF1ZXN0SGFuZGxlciA9IChnZXRQYXJhbWV0ZXJzLCBjYWxsYmFja3MgPSBkZWZhdWx0Q2FsbGJhY2tzICkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBQYXJhbWV0ZXJzXCIsIGdldFBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZ2V0UGFyYW1ldGVycykpe1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtZXRlcik9Pnt1cmwgKz0gXCIvXCIgKyBwYXJhbWV0ZXIgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdldFBhcmFtZXRlcnMhPT11bmRlZmluZWQgJiYgZ2V0UGFyYW1ldGVycyE9PW51bGwpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwrPVwiL1wiK2dldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGdldFBhcmFtZXRlcnM9PT1udWxsKXtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHZXQgVXJsXCIsIHVybCk7XG5cbiAgICAgICAgICAgICAgICBDbGllbnQuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGEgTWFuaXB1bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFuaXB1bGF0ZWREYXRhID0gY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRXJyb3JDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJcyBjYWxsYmFjayB1bmRlZmluZWRcIiwgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2s9PT11bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vQ2xlYXJpbmcgdGhlIHVybCBzbyB0aGUgdXJsIGNhbiBiZSB1c2VkIGFmdGVyd2FyZHNcbiAgICAgICAgICAgICAgICB1cmwgPSBzdGFydFVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGF0YSwgcmVxdWVzdEhhbmRsZXIsIGxvYWRlZCwgc3RhdHVzUmVzcG9uc2VdO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJwb3N0XCI6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyID0gKGZvcm1EYXRhLCBjYWxsYmFja3MgPSBkZWZhdWx0Q2FsbGJhY2tzKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6U1dJVENIX0xPQURJTkdfU1RBVFVTLCBpc0xvYWRpbmc6dHJ1ZX0pO1xuICAgICAgICAgICAgICAgIENsaWVudC5wb3N0KHVybCwgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0YSBNYW5pcHVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYW5pcHVsYXRlZERhdGEgPSBjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNYW5pcHVsYXRpbmcgZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2V0dGluZyBkYXRhXCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MgY2FsbGJhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJEZWZhdWx0IHN1Y2Nlc3MgY2FsbGJhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vycm9yQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5lcnJvckNhbGxiYWNrKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpTV0lUQ0hfTE9BRElOR19TVEFUVVMsIGlzTG9hZGluZzpmYWxzZX0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFtkYXRhLHJlcXVlc3RIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c1Jlc3BvbnNlXTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdGFydFVybCA9IHVybDtcbiAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyID0gKGdldFBhcmFtZXRlcnMsIGNhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3MgKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBQYXJhbWV0ZXJzXCIsIGdldFBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZ2V0UGFyYW1ldGVycykpe1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtZXRlcik9Pnt1cmwgKz0gXCIvXCIgKyBwYXJhbWV0ZXIgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdldFBhcmFtZXRlcnMhPT11bmRlZmluZWQpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwrPVwiL1wiK2dldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBVcmxcIiwgdXJsKTtcblxuICAgICAgICAgICAgICAgIENsaWVudC5kZWxldGUodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0YSBNYW5pcHVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYW5pcHVsYXRlZERhdGEgPSBjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEobWFuaXB1bGF0ZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnRvIGNhdGNoIGRlbGV0ZVwiLGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRXJyb3JDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJcyBjYWxsYmFjayB1bmRlZmluZWRcIiwgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2s9PT11bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9DbGVhcmluZyB0aGUgdXJsIHNvIHRoZSB1cmwgY2FuIGJlIHVzZWQgYWZ0ZXJ3YXJkc1xuICAgICAgICAgICAgICAgIHVybCA9IHN0YXJ0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkYXRhLCByZXF1ZXN0SGFuZGxlciwgbG9hZGVkLCBzdGF0dXNSZXNwb25zZV07XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHtib3JkZWF1eH0gZnJvbSBcIi4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwicnN1aXRlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOmJvcmRlYXV4LCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgcGFkZGluZzo1MH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIHdpZHRoOjI1MCwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCJ9fT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tL21vcmV0aGFuYWpvYlwiPjxJY29uIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gaWNvbj1cImZhY2Vib29rLXNxdWFyZVwiIHNpemU9XCIzeFwiLz48L2E+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9tb3JldGhhbmFqb2JlbmkvXCI+PEljb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fSBpY29uPVwibGlua2VkaW4tc3F1YXJlXCIgc2l6ZT1cIjN4XCIvPjwvYT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb20vdGhhbl9qb2JcIj48SWNvbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGljb249XCJ0d2l0dGVyLXNxdWFyZVwiIHNpemU9XCIzeFwiIC8+PC9hPiA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48YSBzdHlsZT17e2NvbG9yOlwid2hpdGVzbW9rZVwifX0gaHJlZj1cImh0dHA6Ly93d3cuZW5pY2JjbWVkLmV1L3Byb2plY3RzL21vcmV0aGFuYWpvYlwiPmh0dHA6Ly93d3cuZW5pY2JjbWVkLmV1L3Byb2plY3RzL21vcmV0aGFuYWpvYjwvYT48L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6NDB9fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZTo5fX0+4oCcVGhpcyB3ZWJzaXRlIGhhcyBiZWVuIHByb2R1Y2VkIHdpdGggdGhlIGZpbmFuY2lhbCBhc3Npc3RhbmNlIG9mIHRoZSBFdXJvcGVhbiBVbmlvbiB1bmRlciB0aGUgRU5JIENCQyBNZWRpdGVycmFuZWFuIFNlYSBCYXNpbiBQcm9ncmFtbWUuIFRoZSBjb250ZW50cyBvZiB0aGlzIGRvY3VtZW50IGFyZSB0aGUgc29sZSByZXNwb25zaWJpbGl0eSBvZiBDRVNJRSBhbmQgY2FuIHVuZGVyIG5vIGNpcmN1bXN0YW5jZXMgYmUgcmVnYXJkZWQgYXMgcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIEV1cm9wZWFuIFVuaW9uIG9yIHRoZSBQcm9ncmFtbWUgbWFuYWdlbWVudCBzdHJ1Y3R1cmVzLlxuXG4gICAgICAgICAgICBUaGUgMjAxNCAyMDIwIEVOSSBDQkMgTWVkaXRlcnJhbmVhbiBTZWEgQmFzaW4gUHJvZ3JhbW1lIGlzIGEgbXVsdGlsYXRlcmFsIENyb3NzIEJvcmRlciBDb29wZXJhdGlvbiAoIGluaXRpYXRpdmUgZnVuZGVkIGJ5IHRoZSBFdXJvcGVhbiBOZWlnaGJvdXJob29kIEluc3RydW1lbnQgLSBFTkkpLiBUaGUgUHJvZ3JhbW1lIG9iamVjdGl2ZSBpcyB0byBmb3N0ZXIgZmFpciwgZXF1aXRhYmxlIGFuZCBzdXN0YWluYWJsZSBlY29ub21pYywgc29jaWFsIGFuZCB0ZXJyaXRvcmlhbCBkZXZlbG9wbWVudCwgd2hpY2ggbWF5IGFkdmFuY2UgY3Jvc3MgYiBvcmRlciBpbnRlZ3JhdGlvbiBhbmQgdmFsb3Jpc2UgcGFydGljaXBhdGluZyBjb3VudHJpZXPigJkgdGVycml0b3JpZXMgYW5kIHZhbHVlcy4gVGhlIGZvbGxvd2luZyAxMyBjb3VudHJpZXMgcGFydGljaXBhdGUgaW4gdGhlIFByb2dyYW1tZTogQ3lwcnVzLCBFZ3lwdCwgRnJhbmNlLCBHcmVlY2UsIElzcmFlbCwgSXRhbHksIEpvcmRhbiwgTGViYW5vbiwgTWFsdGEsIFBhbGVzdGluZSwgUG9ydHVnYWwsIFNwYWluLCBUdW5pc2lhLiBUaGUgTWFuYWdpbmcgQXV0aG9yaXR5IChNQSkgaXMgdGhlIEF1dG9ub21vdXMgUmVnaW9uIG9mIFNhcmRpbmlhIChJdGFseSkuIE9mZmljaWFsIFByb2dyYW1tZSBsYW5ndWFnZXMgYXJlIEFyYWJpYywgRW5nbGlzaCBhbmQgRnJlbmNoLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpc2l0Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7Zm9udFNpemU6OSwgY29sb3I6XCJ3aGl0ZXNtb2tlXCIsIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn19IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5lbmljYmNtZWQuZXVcIj4gd3d3LmVuaWNiY21lZC5ldTwvYT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZTo5fX0+LiBUaGUgRXVyb3BlYW4gVW5pb24gaXMgbWFkZSB1cCBvZiAyNyBNZW1iZXIgU3RhdGVzIHdobyBoYXZlIGRlY2lkZWQgdG8gZ3JhZHVhbGx5IGxpbmsgdG9nZXRoZXIgdGhlaXIga25vdyBob3csIHJlc291cmNlcyBhbmQgZGVzdGluaWVzLiBUb2dldGhlciwgZHVyaW5nIGEgcGVyaW9kIG9mIGVubGFyZ2VtZW50IG9mIDUwIHllYXJzLCB0aGV5IGhhdmUgYnVpbHQgYSB6b25lIG9mIHN0YWJpbGl0eSwgZGVtb2NyYWN5IGFuZCBzdXN0YWluYWJsZSBkZXZlbG9wbWVudCB3aGlsc3QgbWFpbnRhaW5pbmcgY3VsdHVyYWwgZGl2ZXJzaXR5LCB0b2xlcmFuY2UgYW5kIGluZGl2aWR1YWwgZnJlZWRvbXMuIFRoZSBFdXJvcGVhbiBVbmlvbiBpcyBjb21taXR0ZWQgdG8gc2hhcmluZyBpdHMgYWNoaWV2ZW1lbnRzIGFuZCBpdHMgdmFsdWVzIHdpdGggY291bnRyaWVzIGFuZCBwZW9wbGVzIGJleW9uZCBpdHMgYm9yZGVycy7igJ08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+KVxuXG59XG4iLCJpbXBvcnQge0J1dHRvblRvb2xiYXIsIENvbCwgQ29udHJvbExhYmVsLCBHcmlkLCBJbnB1dCwgUm93LCBTY2hlbWF9IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7RmxleEFyb3VuZERpdiwgTWFpbkJ1dHRvbiwgUmVnaXN0cmF0aW9uQm94LCBTZWNvbmRhcnlCdXR0b259IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oe2xvZ2luUHJvcHN9KXtcblxuICAgIGNvbnN0IHsgU3RyaW5nVHlwZSB9ID0gU2NoZW1hLlR5cGVzO1xuICAgIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXG4gICAgY29uc3QgbW9kZWwgPSBTY2hlbWEuTW9kZWwoe1xuICAgICAgICBlbWFpbDogU3RyaW5nVHlwZSgpXG4gICAgICAgICAgICAvLyAuYWRkUnVsZSgodmFsdWUsIGRhdGEpID0+IHtyZXR1cm4gYXN5bmNDaGVja1VzZXJuYW1lKHZhbHVlKTt9LCAnRHVwbGljYXRlIHVzZXJuYW1lJylcbiAgICAgICAgICAgIC5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmdUeXBlKCkuaXNSZXF1aXJlZCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gKGxvZ2luUHJvcHMucmVnaXN0cmF0aW9uKSA/IDxTZWNvbmRhcnlCdXR0b24gaHJlZj17bG9naW5Qcm9wcy5yZWdpc3RyYXRpb25OYXZpZ2F0aW9ufSBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiICA+e3QoJ1JlZ2lzdGVyJyl9PC9TZWNvbmRhcnlCdXR0b24+IDogPD48Lz47XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWdpc3RyYXRpb25Cb3g+XG4gICAgICAgICAgICA8R3JpZCBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19IGZsdWlkPlxuICAgICAgICAgICAgICAgIDxGb3JtUm93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPnt0KCdFbWFpbCcpfTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Gb3JtUm93PlxuICAgICAgICAgICAgICAgIDxGb3JtUm93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPjxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PjxzcGFuPnt0KCdQYXNzd29yZCcpfTwvc3Bhbj4gPGEgaHJlZj1cIi9yZWNvdmVyXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT4gPC9kaXY+PC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhBcm91bmREaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+e3QoJ0xvZ2luJyl9PC9NYWluQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWdpc3RyYXRpb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhBcm91bmREaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9SZWdpc3RyYXRpb25Cb3g+KVxufVxuXG5cbmNvbnN0IEZvcm1Sb3cgPSBzdHlsZWQoUm93KWBcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XG5gIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UmVkaXJlY3QsIHVzZUhpc3Rvcnl9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge3VzZUxvZ2lufSBmcm9tIFwiLi4vLi4vQmFja2VuZC91c2VCYWNrZW5kXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tIFwiLi4vLi4vUmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcbmltcG9ydCAqIGFzIFJvdXRlcyBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHt1c2VHZXRVc2VySW5mb0J5RW1haWx9IGZyb20gXCIuLi8uLi9CYWNrZW5kL2hvb2tzL1VzZXJJbmZvXCI7XG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCB7UmVnaXN0cmF0aW9uQm94fSBmcm9tIFwiLi4vLi4vc3R5bGVkQ29tcG9uZW50cy9DdXN0b21Db21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCl7XG5cbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdXNlci1yYXRpbmcnKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy11c2VyLXByb2ZpbGUnKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qge2F1dGhlbnRpY2F0ZWR9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGUgPSB1c2VyRGF0YS5kYXRhc2V0LnVzZXJQcm9maWxlO1xuICAgICAgICBpZih1c2VyUHJvZmlsZSl7XG4gICAgICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy51cGRhdGVVc2VySW5mbyhKU09OLnBhcnNlKHVzZXJQcm9maWxlKSkpXG4gICAgICAgIH1cblxuICAgICAgICBpZihhdXRoZW50aWNhdGVkLnRvU3RyaW5nKCkhPT1hdXRoZW50aWNhdGlvbkRhdGEuZGF0YXNldC5pc0F1dGhlbnRpY2F0ZWQpe1xuICAgICAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMuc3dpdGNoQXV0aGVudGljYXRlZFN0YXR1cygpKVxuICAgICAgICB9XG4gICAgfSxbXSlcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2xvZ2luUmVzcG9uc2UsIHBvc3RMb2dpbkhhbmRsZXJdID0gdXNlTG9naW4oKTtcbiAgICBjb25zdCBbdXNlckluZm8sIHVzZXJJbmZvSGFuZGxlcl0gPSB1c2VHZXRVc2VySW5mb0J5RW1haWwoKTtcblxuXG4gICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKGFjY2Vzc1Rva2VuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLmxvZ2luKGFjY2Vzc1Rva2VuKSk7XG5cbiAgICB9O1xuICAgIGNvbnN0IHVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMudXBkYXRlVXNlckluZm8oZGF0YSkpO1xuICAgICAgICBoaXN0b3J5LnB1c2goUm91dGVzLnByb2ZpbGUoZGF0YS5wcm9maWxlTmFtZSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2dpbiA9IChmb3JtRGF0YSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbmFsRm9ybURhdGEgPSAgbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXkpPT4gZmluYWxGb3JtRGF0YS5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldICkpO1xuICAgICAgICBwb3N0TG9naW5IYW5kbGVyKGZpbmFsRm9ybURhdGEsIHtzdWNjZXNzQ2FsbGJhY2s6IHN1Y2Nlc3NDYWxsYmFja30pO1xuICAgICAgICB1c2VySW5mb0hhbmRsZXIoZm9ybURhdGEuZW1haWwse3N1Y2Nlc3NDYWxsYmFjazogdXNlckluZm9TdWNjZXNzQ2FsbGJhY2t9KTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBsb2dpblByb3BzID0ge1xuICAgICAgICByZWdpc3RyYXRpb246IHRydWUsXG4gICAgICAgIHJlZ2lzdHJhdGlvbk5hdmlnYXRpb24gOiBcIi9yZWdpc3RyYXRpb25cIixcbiAgICAgICAgbG9naW5IYW5kbGVyOiBsb2dpblxuXG4gICAgfVxuICByZXR1cm4gKGF1dGhlbnRpY2F0ZWQpID8gPEFscmVhZHlMb2dnZWRJbi8+IDogPExvZ2luRm9ybSBsb2dpblByb3BzPXtsb2dpblByb3BzfS8+O1xufVxuXG5mdW5jdGlvbiBBbHJlYWR5TG9nZ2VkSW4oKXtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcblxuICAgIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLmxvZ091dCgpKTtcbiAgICB9XG5cbiAgICAvLzxCdXR0b24gb25DbGljaz17aGlzdG9yeS5wdXNoKFJvdXRlcy5wcm9maWxlKHVzZXIucHJvZmlsZU5hbWUpKX0vPlxuICAgIHJldHVybiAodXNlcikgPyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShSb3V0ZXMucHJvZmlsZSh1c2VyLnByb2ZpbGVOYW1lKSkgOiA8UmVnaXN0cmF0aW9uQm94PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPlNpZ24gaW48L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdj57dCgnYWxyZWFkeV9sb2dnZWRfbWVzc2FnZScpfTwvZGl2PlxuICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5zaWduT3V0KCl9Pnt0KCdzaWduX291dCcpfTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvUmVnaXN0cmF0aW9uQm94PlxufVxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VHZXRVc2VySW5mb30gZnJvbSBcIi4uL0JhY2tlbmQvaG9va3MvVXNlckluZm9cIjtcblxuZXhwb3J0IGNvbnN0IFNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVMgPSBcIlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVNcIjtcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTE9BRElOR19TVEFUVVMgPSBcIlNXSVRDSF9MT0FESU5HX1NUQVRVU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0lORk8gPSBcIlVQREFURV9VU0VSX0lORk9cIjtcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTEFOR1VBR0UgPSBcIlNXSVRDSF9MQU5HVUFHRVwiO1xuZXhwb3J0IGNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCI7XG5leHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NFUlZJQ0VTID0gXCJVUERBVEVfU0VSVklDRVNcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FURUdPUklFUyA9IFwiVVBEQVRFX0NBVEVHT1JJRVNcIjtcblxuZXhwb3J0IGNvbnN0IGNvb2tpZXNPcHRpb25zID0ge3BhdGg6IFwiL1wifTtcblxuXG5leHBvcnQgY29uc3Qgc3dpdGNoQXV0aGVudGljYXRlZFN0YXR1cyA9ICgpID0+e1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUyxcbiAgICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJJbmZvID0gKGRhdGEpID0+e1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG4gICAgY29uc3QgdXNlckNvb2tpZSA9IHtcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgIHJvbGVzOiBkYXRhLnJvbGVzLFxuICAgICAgICBwcm9maWxlTmFtZTogZGF0YS5wcm9maWxlTmFtZSxcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGEubGFuZ3VhZ2VcbiAgICB9XG4gICAgY29va2llcy5zZXQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyQ29va2llKSwgY29va2llc09wdGlvbnMpO1xuXG4gICAgbGV0IHVzZXJDb29raWVzID0gY29va2llcy5nZXQoJ3VzZXInKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFVQREFURV9VU0VSX0lORk8sXG4gICAgICAgIHVzZXI6IGRhdGFcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHN3aXRjaExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PntcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICBjb29raWVzLnNldCgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSwgY29va2llc09wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKFwiU3dpdGNoIGxhbmd1YWdlIHRvXCIsIGxhbmd1YWdlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNXSVRDSF9MQU5HVUFHRSxcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChhY2Nlc3NUb2tlbikgPT57XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgY29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4sIGNvb2tpZXNPcHRpb25zKTtcbiAgICBjb29raWVzLnNldCgnYXV0aGVudGljYXRlZCcsIHRydWUsIGNvb2tpZXNPcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBMT0dJTixcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+e1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGNvb2tpZXMucmVtb3ZlKCdhdXRoZW50aWNhdGVkJyxjb29raWVzT3B0aW9ucyk7XG4gICAgY29va2llcy5yZW1vdmUoJ2FjY2Vzc1Rva2VuJywgY29va2llc09wdGlvbnMpO1xuICAgIGNvb2tpZXMucmVtb3ZlKCd1c2VyJywgY29va2llc09wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPR09VVCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXRlZ29yaWVzID0gKGNhdGVnb3JpZXMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlVQREFURV9DQVRFR09SSUVTLFxuICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZXJ2aWNlcyA9IChzZXJ2aWNlcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6VVBEQVRFX1NFUlZJQ0VTLFxuICAgICAgICBzZXJ2aWNlczogc2VydmljZXNcbiAgICB9XG59XG4iLCJpbXBvcnQgdXNlQ29va2llcyBmcm9tIFwiLi4vQmFja2VuZC91c2VDb29raWVzXCI7XG5cbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvbnNcIjtcbmNvbnN0IHthY2Nlc3NUb2tlbiwgYXV0aGVudGljYXRlZCwgdXNlciwgbGFuZ3VhZ2V9ID0gdXNlQ29va2llcygpO1xuXG5jb25zb2xlLmxvZyhcIlVuRXNjYXBlZCB1c2VyXCIsIHVuZXNjYXBlKHVzZXIpKTtcbmNvbnN0IGRlZmF1bHRMYW5ndWFnZSA9IChsYW5ndWFnZSE9PXVuZGVmaW5lZCkgPyBsYW5ndWFnZSA6IFwiZW5cIjtcbmNvbnN0IGF1dGhlbnRpY2F0ZWRTdGF0dXMgPSAoYXV0aGVudGljYXRlZCE9PXVuZGVmaW5lZCkgPyBhdXRoZW50aWNhdGVkIDogZmFsc2U7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7YXV0aGVudGljYXRlZDphdXRoZW50aWNhdGVkU3RhdHVzLCBhY2Nlc3NUb2tlbjphY2Nlc3NUb2tlbiwgdXNlcjoodXNlciksIGlzTG9hZGluZzpmYWxzZSwgbGFuZ3VhZ2U6ZGVmYXVsdExhbmd1YWdlLCBzZXJ2aWNlczpbXSwgY2F0ZWdvcmllczpbXX07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgaWYoYWN0aW9uKXtcblxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5TV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogIXN0YXRlLmF1dGhlbnRpY2F0ZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5TV0lUQ0hfTE9BRElOR19TVEFUVVM6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc0xvYWRpbmc6IGFjdGlvbi5pc0xvYWRpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9VU0VSX0lORk86e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24udXNlciwgbGFuZ3VhZ2U6IGFjdGlvbi51c2VyLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5TV0lUQ0hfTEFOR1VBR0U6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBsYW5ndWFnZTogYWN0aW9uLmxhbmd1YWdlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTE9HT1VUOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgYXV0aGVudGljYXRlZDogYWN0aW9uLmF1dGhlbnRpY2F0ZWQsIHVzZXI6IGFjdGlvbi51c2VyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTE9HSU46e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBhdXRoZW50aWNhdGVkOiBhY3Rpb24uYXV0aGVudGljYXRlZCwgYWNjZXNzVG9rZW46IGFjdGlvbi5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9TRVJWSUNFUzp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIHNlcnZpY2VzOmFjdGlvbi5zZXJ2aWNlcyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9DQVRFR09SSUVTOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgY2F0ZWdvcmllczphY3Rpb24uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG5cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsIlxuZXhwb3J0IGNvbnN0IG1haW4gPSBcIi9cIjtcbmV4cG9ydCBjb25zdCByZWdpc3RyYXRpb24gPSBcIi9yZWdpc3RyYXRpb25cIjtcbmV4cG9ydCBjb25zdCBsb2dpbiA9IFwiL2xvZ2luXCI7XG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZWNvdmVyeSA9IFwiL3JlY292ZXJcIjtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IFwiL3Bhc3N3b3JkLWNoYW5nZVwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uQ2F0ZWdvcmllcyA9IFwiL2FkbWluaXN0cmF0aW9uLWNhdGVnb3JpZXNcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvbkV4cGVydGlzZSA9IFwiL2FkbWluaXN0cmF0aW9uLWV4cGVydGlzZVwiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uUHJvamVjdHMgPSBcIi9hZG1pbmlzdHJhdGlvbi1wcm9qZWN0c1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uQ29sbGFib3JhdGlvbnMgPSBcIi9hZG1pbmlzdHJhdGlvbi1jb2xsYWJvcmF0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uU3RhdGlzdGljcyA9IFwiL2FkbWluaXN0cmF0aW9uLXN0YXRpc3RpY3NcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvblVzZXJzID0gXCIvYWRtaW5pc3RyYXRpb24tdXNlcnNcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvbk5ld3MgPSBcIi9hZG1pbmlzdHJhdGlvbi1uZXdzXCI7XG5leHBvcnQgY29uc3Qgc2VydmljZVNlYXJjaFBhZ2UgPSBcIi9zZXJ2aWNlc1wiO1xuZXhwb3J0IGNvbnN0IHNlYXJjaFVzZXJQYWdlID0gXCIvb3JnYW5pc2F0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IGRhc2hib2FyZFBhZ2UgPSBcIi9kYXNoYm9hcmRcIjtcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0UGFnZSA9IFwiL25ldy1wcm9qZWN0XCI7XG5leHBvcnQgY29uc3QgbmV3UG9ydGZvbGlvUGFnZSA9IFwiL25ldy1wb3J0Zm9saW9cIjtcbmV4cG9ydCBjb25zdCBuZXdDb2xsYWJvcmF0aW9uUGFnZSA9IFwiL25ldy1jb2xsYWJvcmF0aW9uXCI7XG5leHBvcnQgY29uc3QgbmV3U2VydmljZVBhZ2UgPSBcIi9uZXctc2VydmljZVwiO1xuZXhwb3J0IGNvbnN0IG5ld0Z1cm5pdHVyZVBhZ2UgPSBcIi9uZXctZnVybml0dXJlXCI7XG5leHBvcnQgY29uc3QgY29sbGFib3JhdGlvbkRldGFpbFBhZ2UgPSBcIi9jb2xsYWJvcmF0aW9uLzppZFwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlUHJvZmlsZSA9IFwiL3Byb2ZpbGUvOnByb2ZpbGVuYW1lXCI7XG5leHBvcnQgY29uc3Qgcm91dGVQcm9maWxlRWRpdCA9IFwiL2VkaXQtcHJvZmlsZS86cHJvZmlsZW5hbWVcIjtcbmV4cG9ydCBjb25zdCByb3V0ZVByb2plY3QgPSBcIi9wcm9qZWN0LzppZFwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlRWRpdFByb2plY3QgPSBcIi9lZGl0LXByb2plY3QvOmlkXCI7XG5leHBvcnQgY29uc3Qgcm91dGVFZGl0Q29sbGFib3JhdGlvbiA9IFwiL2VkaXQtY29sbGFib3JhdGlvbi86aWRcIjtcbmV4cG9ydCBjb25zdCByb3V0ZUVkaXRTZXJ2aWNlID0gXCIvZWRpdC1zZXJ2aWNlLzppZFwiO1xuZXhwb3J0IGNvbnN0IGltbWVkaWF0ZUxvZ291dCA9IFwiL2ltbWVkaWF0ZWxvZ291dFwiO1xuXG5leHBvcnQgdmFyIG5ld3NQYWdlID0gXCIvbmV3c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvZmlsZShuYW1lKXtcbiAgICByZXR1cm4gXCIvcHJvZmlsZS9cIituYW1lO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvZmlsZShuYW1lKXtcbiAgICByZXR1cm4gXCIvZWRpdC1wcm9maWxlL1wiK25hbWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QoaWQpe1xuICAgIHJldHVybiBcIi9wcm9qZWN0L1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3QoaWQpe1xuICAgIHJldHVybiBcIi9lZGl0LXByb2plY3QvXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYWJvcmF0aW9uKGlkKXtcbiAgICByZXR1cm4gXCIvY29sbGFib3JhdGlvbi9cIitpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRDb2xsYWJvcmF0aW9uKGlkKXtcbiAgICByZXR1cm4gXCIvZWRpdC1jb2xsYWJvcmF0aW9uL1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFNlcnZpY2UoaWQpe1xuICAgIHJldHVybiBcIi9lZGl0LXNlcnZpY2UvXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0RnVybml0dXJlKGlkKXtcbiAgICByZXR1cm4gXCIvZWRpdC1mdXJuaXR1cmUvXCIraWQ7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QnV0dG9uLCBCdXR0b25Hcm91cCwgSWNvbkJ1dHRvbiwgUm93fSBmcm9tICdyc3VpdGUnO1xuXG5leHBvcnQgY29uc3QgZ3JheSA9IFwiI2Y3ZjhmOVwiO1xuZXhwb3J0IGNvbnN0IGJvcmRlYXV4ID0gXCIjYjQ1ODYwXCI7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJIZWlnaHQgPSAxMjU7XG5leHBvcnQgY29uc3QgdXBsb2FkZXJDb3ZlckNvbmZpZyA9IHsgdW5pdDogJ3B4JywgeDogMCwgeTogMCwgYXNwZWN0OiAzLjU5Mn1cblxuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uQm94ID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1jb2xvcjogJHtncmF5fTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogMTA4MXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOjIwO1xuICAgIGA7XG5cblxuXG5leHBvcnQgY29uc3QgRnVsbEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOjIwO1xuICAgIGA7XG5leHBvcnQgY29uc3QgTWFpbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym9yZGVhdXh9O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOjk5OXB4O1xuICAgIGA7XG5cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogJHtib3JkZWF1eH07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZWF1eH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEludmVyc2VCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6JHtib3JkZWF1eH0haW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVhdXh9IWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIH1cbiAgICBgO1xuXG5leHBvcnQgY29uc3QgU2F2ZUJ1dHRvbiA9IHN0eWxlZChNYWluQnV0dG9uKWBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlYXV4fSFpbXBvcnRhbnQ7XG5gXG5cbmV4cG9ydCBjb25zdCBJY29uQnV0dG9uVHJhbnNwYXJlbnQgPSBzdHlsZWQoSWNvbkJ1dHRvbilgXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBjb2xvcjoke2JvcmRlYXV4fTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke2JvcmRlYXV4fTtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gXCIvZGVmYXVsdHMvcHJvZmlsZV90aHVtYm5haWwucG5nXCI7XG5leHBvcnQgY29uc3QgcHJvamVjdFBpY3R1cmUgPSBcIi9kZWZhdWx0cy9wcm9qZWN0X3RodW1ibmFpbC5wbmdcIjtcbmV4cG9ydCBjb25zdCBjb3ZlclBpY3R1cmUgPSBcIi9kZWZhdWx0cy9jb3Zlcl90aHVtYm5haWwucG5nXCI7XG5leHBvcnQgY29uc3Qgbm9Qcm9maWxlUGljdHVyZSA9IFwiL2RlZmF1bHRzL25vLWltYWdlLnBuZ1wiO1xuZXhwb3J0IGNvbnN0IG5vUHJvamVjdFBpY3R1cmUgPSBcIi9kZWZhdWx0cy9uby1pbWFnZS5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IEZvcm1Cb3ggPSBzdHlsZWQuZGl2YFxucGFkZGluZzogMTBweDtcbm1pbi1oZWlnaHQ6MTAwdmhgXG47XG5cbmV4cG9ydCBjb25zdCBDb2xsYWJvcmF0aW9uQm94ID0gIHN0eWxlZC5kaXZgXG53aWR0aDogMTAwJTtcbm1pbi1oZWlnaHQ6IDE1MHB4O1xuYmFja2dyb3VuZC1jb2xvcjogJHtib3JkZWF1eH07XG5jb2xvcjogd2hpdGU7XG5mb250LXNpemU6IDQwcHg7XG5mb250LXdlaWdodDogYm9sZGVyO1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYFxuO1xuXG5leHBvcnQgY29uc3QgSWNvblNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtgO1xuXG5leHBvcnQgY29uc3QgSWNvblNwYW5Qcm9qZWN0ID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtgO1xuXG5leHBvcnQgY29uc3QgTGluZWFyR3JhZGllbnQgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDI3LjgzOTY0MzY1MjU2MTI1JTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIHdoaXRlKTtcbiAgICBvcGFjaXR5OjMzJTtcbiAgICBgXG5cbmV4cG9ydCBjb25zdCBjb3ZlclN0eWxlID0ge2hlaWdodDowLCBwYWRkaW5nVG9wOlwiMjcuODM5NjQzNjUyNTYxMjUlXCIsIHdpZHRoOlwiMTAwJVwiLCBtYXJnaW5Cb3R0b206MTAsIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLCBiYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCJ9XG5cblxuZXhwb3J0IGNvbnN0IEZsZXhBcm91bmREaXYgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xuYFxuXG5leHBvcnQgY29uc3QgRmxleEJldHdlZW5EaXYgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4Q2VudGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQnV0dG9uR3JvdXAgPSBzdHlsZWQoQnV0dG9uR3JvdXApYFxuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtUm93ID0gc3R5bGVkKFJvdylgXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDVgY29sb3I6JHtib3JkZWF1eH07IHRleHQtYWxpZ246Y2VudGVyOyBtYXJnaW46MTBweDtgO1xuXG5leHBvcnQgY29uc3QgUGFnaW5hdGlvbkJveCA9IHN0eWxlZChGbGV4QmV0d2VlbkRpdilgXG4gICAgbWFyZ2luOjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcbmBcblxuZXhwb3J0IGNvbnN0IEluZm9Cb3ggPSBzdHlsZWQucGBcbiAgICBtYXJnaW46MHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIFxuICAgIFxuYFxuXG5leHBvcnQgY29uc3QgQmFja1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW46MTBweDtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICBmb250LXNpemU6NHJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGcm9udFRpdGxlID0gc3R5bGVkKFRpdGxlKWBcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgIGA7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
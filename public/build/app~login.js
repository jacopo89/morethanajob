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
/*! exports provided: gray, bordeaux, headerHeight, uploaderCoverConfig, RegistrationBox, Body, FullBody, MainButton, SecondaryButton, InverseButton, SaveButton, IconButtonTransparent, profilePicture, projectPicture, coverPicture, noProfilePicture, noProjectPicture, fundingOpportunitiesPicture, projectDisseminationPicture, projectNewsPicture, videoTutorialPicture, relevantPublicationsPicture, userPagePicture, FormBox, CollaborationBox, IconSpan, IconSpanProject, LinearGradient, coverStyle, FlexAroundDiv, FlexBetweenDiv, FlexCenterDiv, FormButtonGroup, FormRow, Title, PaginationBox, InfoBox, BackTitle, FrontTitle, ProfileImage */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fundingOpportunitiesPicture", function() { return fundingOpportunitiesPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectDisseminationPicture", function() { return projectDisseminationPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectNewsPicture", function() { return projectNewsPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoTutorialPicture", function() { return videoTutorialPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relevantPublicationsPicture", function() { return relevantPublicationsPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPagePicture", function() { return userPagePicture; });
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
var fundingOpportunitiesPicture = "/defaults/news/funding_opportunities.png";
var projectDisseminationPicture = "/defaults/news/project_dissemination.png";
var projectNewsPicture = "/defaults/news/project_news.png";
var videoTutorialPicture = "/defaults/news/video_tutorial.png";
var relevantPublicationsPicture = "/defaults/news/relevant_publications.png";
var userPagePicture = "/defaults/head-search.png";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC9heGlvcy1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvaG9va3MvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvdXNlQmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC91c2VDb29raWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL3VzZUhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9QYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xlc3MvYXBwLmxlc3MiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQmFja2VuZENsaWVudCIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwicHJvY2VzcyIsIlJFQUNUX0FQUF9CQUNLRU5EX1VSTCIsInVzZUdldFVzZXJJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFjY2Vzc1Rva2VuIiwiYmFja2VuZENsaWVudCIsInVzZUNyZWF0ZUhvb2siLCJ1c2VHZXRVc2VySW5mb0J5RW1haWwiLCJ1c2VHZXRSYW5kb21Qcm9maWxlcyIsInVzZUxvZ2luIiwidXNlUmVnaXN0ZXIiLCJ1c2VQYXNzd29yZFJlY292ZXJ5IiwidXNlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDaGVja1VzZXJNYWlsIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiZ2V0IiwiYXV0aGVudGljYXRlZCIsInVzZXIiLCJsYW5ndWFnZSIsIkNsaWVudCIsInVybCIsIm1ldGhvZCIsImRlZmF1bHREYXRhVmFsdWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrIiwiZGVmYXVsdEVycm9yQ2FsbGJhY2siLCJlIiwicmVxdWVzdEhhbmRsZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGVmYXVsdENhbGxiYWNrcyIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJkYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24iLCJzdGF0dXNSZXNwb25zZSIsInN0YXJ0VXJsIiwiZ2V0UGFyYW1ldGVycyIsImNhbGxiYWNrcyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwYXJhbWV0ZXIiLCJ1bmRlZmluZWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJtYW5pcHVsYXRlZERhdGEiLCJmb3JtRGF0YSIsInR5cGUiLCJTV0lUQ0hfTE9BRElOR19TVEFUVVMiLCJpc0xvYWRpbmciLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkZvb3RlciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVhdXgiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiTG9naW5Gb3JtIiwibG9naW5Qcm9wcyIsIlN0cmluZ1R5cGUiLCJTY2hlbWEiLCJUeXBlcyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJtb2RlbCIsIk1vZGVsIiwiZW1haWwiLCJpc1JlcXVpcmVkIiwicGFzc3dvcmQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsInJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbk5hdmlnYXRpb24iLCJGb3JtUm93Iiwic3R5bGVkIiwiUm93IiwiTG9naW4iLCJhdXRoZW50aWNhdGlvbkRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlckRhdGEiLCJ1c2VFZmZlY3QiLCJ1c2VyUHJvZmlsZSIsImRhdGFzZXQiLCJBY3Rpb25UeXBlcyIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwiaXNBdXRoZW50aWNhdGVkIiwibG9naW5SZXNwb25zZSIsInBvc3RMb2dpbkhhbmRsZXIiLCJ1c2VySW5mbyIsInVzZXJJbmZvSGFuZGxlciIsInVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrIiwicHVzaCIsIlJvdXRlcyIsInByb2ZpbGVOYW1lIiwibG9naW4iLCJmaW5hbEZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXBwZW5kIiwibG9naW5IYW5kbGVyIiwiQWxyZWFkeUxvZ2dlZEluIiwic2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVMiLCJVUERBVEVfVVNFUl9JTkZPIiwiU1dJVENIX0xBTkdVQUdFIiwiTE9HT1VUIiwiTE9HSU4iLCJVUERBVEVfU0VSVklDRVMiLCJVUERBVEVfQ0FURUdPUklFUyIsImNvb2tpZXNPcHRpb25zIiwicGF0aCIsInN3aXRjaEF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJDb29raWUiLCJyb2xlcyIsInNldCIsInN0cmluZ2lmeSIsInVzZXJDb29raWVzIiwic3dpdGNoTGFuZ3VhZ2UiLCJsb2dPdXQiLCJyZW1vdmUiLCJ1cGRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInVwZGF0ZVNlcnZpY2VzIiwic2VydmljZXMiLCJ1bmVzY2FwZSIsImRlZmF1bHRMYW5ndWFnZSIsImF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibWFpbiIsInBhc3N3b3JkUmVjb3ZlcnkiLCJjaGFuZ2VQYXNzd29yZCIsImFkbWluaXN0cmF0aW9uQ2F0ZWdvcmllcyIsImFkbWluaXN0cmF0aW9uRXhwZXJ0aXNlIiwiYWRtaW5pc3RyYXRpb25Qcm9qZWN0cyIsImFkbWluaXN0cmF0aW9uQ29sbGFib3JhdGlvbnMiLCJhZG1pbmlzdHJhdGlvblN0YXRpc3RpY3MiLCJhZG1pbmlzdHJhdGlvblVzZXJzIiwiYWRtaW5pc3RyYXRpb25OZXdzIiwic2VydmljZVNlYXJjaFBhZ2UiLCJzZWFyY2hVc2VyUGFnZSIsImRhc2hib2FyZFBhZ2UiLCJuZXdQcm9qZWN0UGFnZSIsIm5ld1BvcnRmb2xpb1BhZ2UiLCJuZXdDb2xsYWJvcmF0aW9uUGFnZSIsIm5ld1NlcnZpY2VQYWdlIiwibmV3RnVybml0dXJlUGFnZSIsImNvbGxhYm9yYXRpb25EZXRhaWxQYWdlIiwicm91dGVQcm9maWxlIiwicm91dGVQcm9maWxlRWRpdCIsInJvdXRlUHJvamVjdCIsInJvdXRlRWRpdFByb2plY3QiLCJyb3V0ZUVkaXRDb2xsYWJvcmF0aW9uIiwicm91dGVFZGl0U2VydmljZSIsImltbWVkaWF0ZUxvZ291dCIsIm5ld3NQYWdlIiwicHJvZmlsZSIsIm5hbWUiLCJlZGl0UHJvZmlsZSIsInByb2plY3QiLCJpZCIsImVkaXRQcm9qZWN0IiwiY29sbGFib3JhdGlvbiIsImVkaXRDb2xsYWJvcmF0aW9uIiwiZWRpdFNlcnZpY2UiLCJlZGl0RnVybml0dXJlIiwiZ3JheSIsImhlYWRlckhlaWdodCIsInVwbG9hZGVyQ292ZXJDb25maWciLCJ1bml0IiwieCIsInkiLCJhc3BlY3QiLCJSZWdpc3RyYXRpb25Cb3giLCJkaXYiLCJCb2R5IiwiRnVsbEJvZHkiLCJNYWluQnV0dG9uIiwiQnV0dG9uIiwiU2Vjb25kYXJ5QnV0dG9uIiwiSW52ZXJzZUJ1dHRvbiIsIlNhdmVCdXR0b24iLCJJY29uQnV0dG9uVHJhbnNwYXJlbnQiLCJJY29uQnV0dG9uIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9qZWN0UGljdHVyZSIsImNvdmVyUGljdHVyZSIsIm5vUHJvZmlsZVBpY3R1cmUiLCJub1Byb2plY3RQaWN0dXJlIiwiZnVuZGluZ09wcG9ydHVuaXRpZXNQaWN0dXJlIiwicHJvamVjdERpc3NlbWluYXRpb25QaWN0dXJlIiwicHJvamVjdE5ld3NQaWN0dXJlIiwidmlkZW9UdXRvcmlhbFBpY3R1cmUiLCJyZWxldmFudFB1YmxpY2F0aW9uc1BpY3R1cmUiLCJ1c2VyUGFnZVBpY3R1cmUiLCJGb3JtQm94IiwiQ29sbGFib3JhdGlvbkJveCIsIkljb25TcGFuIiwic3BhbiIsIkljb25TcGFuUHJvamVjdCIsIkxpbmVhckdyYWRpZW50IiwiY292ZXJTdHlsZSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJwb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiRmxleEFyb3VuZERpdiIsIkZsZXhCZXR3ZWVuRGl2IiwiRmxleENlbnRlckRpdiIsIkZvcm1CdXR0b25Hcm91cCIsIkJ1dHRvbkdyb3VwIiwiVGl0bGUiLCJoNSIsIlBhZ2luYXRpb25Cb3giLCJJbmZvQm94IiwicCIsIkJhY2tUaXRsZSIsIkZyb250VGl0bGUiLCJQcm9maWxlSW1hZ2UiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxrREFBSyxDQUFDQyxNQUFOLENBQWE7QUFDMUJDLFNBQU8sRUFBRSxTQURpQjtBQUUxQkMsU0FBTyxFQUFFO0FBQ0wsb0JBQWdCO0FBRFg7QUFGaUIsQ0FBYixDQUFqQjs7QUFRQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQ2xCO0FBQUEsTUFEbUJDLEtBQ25CLHVFQUQyQixJQUMzQjtB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RSxjQUFjLEdBQUd4SSx5REFBTSxDQUFDOEcsR0FBVixxQkFBcEI7QUFVQSxJQUFNMkIsVUFBVSxHQUFHO0FBQUNDLFFBQU0sRUFBQyxDQUFSO0FBQVdDLFlBQVUsRUFBQyxvQkFBdEI7QUFBNEN6SyxPQUFLLEVBQUMsTUFBbEQ7QUFBMEQwSyxjQUFZLEVBQUMsRUFBdkU7QUFBMkV6SyxpQkFBZSxFQUFDLE9BQTNGO0FBQW1HMEssVUFBUSxFQUFDLFVBQTVHO0FBQXdIQyxnQkFBYyxFQUFDO0FBQXZJLENBQW5CO0FBR0EsSUFBTUMsYUFBYSxHQUFHL0kseURBQU0sQ0FBQzhHLEdBQVYscUJBQW5CO0FBS0EsSUFBTWtDLGNBQWMsR0FBR2hKLHlEQUFNLENBQUM4RyxHQUFWLHFCQUFwQjtBQU1BLElBQU1tQyxhQUFhLEdBQUdqSix5REFBTSxDQUFDOEcsR0FBVixxQkFBbkI7QUFNQSxJQUFNb0MsZUFBZSxHQUFHbEosaUVBQU0sQ0FBQ21KLGtEQUFELENBQVQscUJBQXJCO0FBS0EsSUFBTXBKLE9BQU8sR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUQsQ0FBVCxxQkFBYjtBQUlBLElBQU1tSixLQUFLLEdBQUdwSix5REFBTSxDQUFDcUosRUFBVixzQkFBcUJqTCxRQUFyQixDQUFYO0FBRUEsSUFBTWtMLGFBQWEsR0FBR3RKLGlFQUFNLENBQUNnSixjQUFELENBQVQscUJBQW5CO0FBS0EsSUFBTU8sT0FBTyxHQUFHdkoseURBQU0sQ0FBQ3dKLENBQVYscUJBQWI7QUFTQSxJQUFNQyxTQUFTLEdBQUd6Six5REFBTSxDQUFDOEcsR0FBVixxQkFBZjtBQVNBLElBQU00QyxVQUFVLEdBQUcxSixpRUFBTSxDQUFDb0osS0FBRCxDQUFULHFCQUFoQjtBQU9BLElBQU1PLFlBQVksR0FBRzNKLHlEQUFNLENBQUM0SixHQUFWLHFCQUFsQixDOzs7Ozs7Ozs7OztBQzNMUCx1QyIsImZpbGUiOiJhcHB+bG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MvaW5kZXgnO1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly8nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbn0pO1xuXG5cbmNvbnN0IEJhY2tlbmRDbGllbnQgPSAodG9rZW4gPSBudWxsLCByZXNwb25zZVR5cGU9bnVsbCk9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIChheGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnQXV0aGVudGljYXRpb24nOiAnQmVhcmVyICcgK3Rva2VuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuZXhwb3J0IHtCYWNrZW5kQ2xpZW50fTtcbiIsImltcG9ydCB7QmFja2VuZENsaWVudH0gZnJvbSBcIi4uL2F4aW9zLWNsaWVudFwiO1xuaW1wb3J0IHt1c2VDcmVhdGVIb29rfSBmcm9tIFwiLi4vdXNlSG9va1wiO1xuaW1wb3J0IHVzZUNvb2tpZXMgZnJvbSBcIi4uL3VzZUNvb2tpZXNcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUdldFVzZXJJbmZvKCkge1xuXG4gICAgY29uc3Qge2FjY2Vzc1Rva2VufSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3VzZXJzL2dldCcsJ2dldCcsbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRVc2VySW5mb0J5RW1haWwoKXtcbiAgICBjb25zdCB7YWNjZXNzVG9rZW59ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudChhY2Nlc3NUb2tlbik7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvdXNlcnMvZ2V0QnlNYWlsJywnZ2V0JyxudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldFJhbmRvbVByb2ZpbGVzKCl7XG4gICAgY29uc3Qge2FjY2Vzc1Rva2VufSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3VzZXJzL2dldHJhbmRvbScsJ2dldCcsW10pO1xufVxuIiwiaW1wb3J0IHtCYWNrZW5kQ2xpZW50fSBmcm9tIFwiLi9heGlvcy1jbGllbnRcIjtcbmltcG9ydCB7dXNlQ3JlYXRlSG9va30gZnJvbSBcIi4vdXNlSG9va1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUxvZ2luKCkge1xuXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvbG9naW4nLCdwb3N0JyxudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1c2VSZWdpc3RlcigpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3JlZ2lzdGVyJywncG9zdCcsbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlUGFzc3dvcmRSZWNvdmVyeSgpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL3JlY292ZXJ5JywncG9zdCcsZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gIHVzZUNoYW5nZVBhc3N3b3JkKCkge1xuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL2JhY2tlbmQvcGFzc3dvcmRjaGFuZ2UnLCdwb3N0JyxmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXNlQ2hlY2tVc2VyTWFpbCgpIHtcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9iYWNrZW5kL2NoZWNrdXNlcicsJ3Bvc3QnLGZhbHNlKTtcbn1cbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvb2tpZXMoKXtcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcblxuICAgIGxldCBhY2Nlc3NUb2tlbiA9IChjb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKSk/IGNvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpIDogbnVsbDtcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkID0gY29va2llcy5nZXQoJ2F1dGhlbnRpY2F0ZWQnKTtcbiAgICBjb25zdCB1c2VyID0gY29va2llcy5nZXQoJ3VzZXInKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGNvb2tpZXMuZ2V0KCdsYW5ndWFnZScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiBhdXRoZW50aWNhdGVkLFxuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcbiAgICB9XG59XG5cbiIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSBcIi4vLi4vUmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtTV0lUQ0hfTE9BRElOR19TVEFUVVN9IGZyb20gXCIuLi9SZWR1eC9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVIb29rKENsaWVudCwgdXJsLCBtZXRob2QsIGRlZmF1bHREYXRhVmFsdWUpe1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZGVmYXVsdERhdGFWYWx1ZSk7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSB1cmwgKyBcIiBTVUNDRVNTXCI7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdXJsICsgXCIgRVJST1JcIjtcbiAgICBjb25zdCBkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrID0gKCkgPT4gey8qY29uc29sZS5sb2coc3VjY2Vzc01lc3NhZ2UpOyovfTtcbiAgICBjb25zdCBkZWZhdWx0RXJyb3JDYWxsYmFjayA9IChlKSA9PiB7Lypjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSwgZSk7Ki99O1xuICAgIGxldCByZXF1ZXN0SGFuZGxlcjtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBkZWZhdWx0Q2FsbGJhY2tzID0ge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2s6IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2ssXG4gICAgICAgIGVycm9yQ2FsbGJhY2s6IGRlZmF1bHRFcnJvckNhbGxiYWNrLFxuICAgICAgICBkYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb246IG51bGxcbiAgICB9O1xuXG4gICAgbGV0IHN0YXR1c1Jlc3BvbnNlID0gbnVsbDtcbiAgICBpZihzdGF0dXMhPT1udWxsKXtcbiAgICAgICAgc3RhdHVzUmVzcG9uc2UgPSAoc3RhdHVzPT09MjAwKTtcbiAgICB9XG5cbiAgICBzd2l0Y2gobWV0aG9kKXtcbiAgICAgICAgY2FzZSBcImdldFwiOlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RhcnRVcmwgPSB1cmw7XG4gICAgICAgICAgICByZXF1ZXN0SGFuZGxlciA9IChnZXRQYXJhbWV0ZXJzLCBjYWxsYmFja3MgPSBkZWZhdWx0Q2FsbGJhY2tzICkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBQYXJhbWV0ZXJzXCIsIGdldFBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZ2V0UGFyYW1ldGVycykpe1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtZXRlcik9Pnt1cmwgKz0gXCIvXCIgKyBwYXJhbWV0ZXIgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdldFBhcmFtZXRlcnMhPT11bmRlZmluZWQgJiYgZ2V0UGFyYW1ldGVycyE9PW51bGwpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwrPVwiL1wiK2dldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGdldFBhcmFtZXRlcnM9PT1udWxsKXtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHZXQgVXJsXCIsIHVybCk7XG5cbiAgICAgICAgICAgICAgICBDbGllbnQuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGEgTWFuaXB1bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFuaXB1bGF0ZWREYXRhID0gY2FsbGJhY2tzLmRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRXJyb3JDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJcyBjYWxsYmFjayB1bmRlZmluZWRcIiwgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2s9PT11bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vQ2xlYXJpbmcgdGhlIHVybCBzbyB0aGUgdXJsIGNhbiBiZSB1c2VkIGFmdGVyd2FyZHNcbiAgICAgICAgICAgICAgICB1cmwgPSBzdGFydFVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGF0YSwgcmVxdWVzdEhhbmRsZXIsIGxvYWRlZCwgc3RhdHVzUmVzcG9uc2VdO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJwb3N0XCI6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyID0gKGZvcm1EYXRhLCBjYWxsYmFja3MgPSBkZWZhdWx0Q2FsbGJhY2tzKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6U1dJVENIX0xPQURJTkdfU1RBVFVTLCBpc0xvYWRpbmc6dHJ1ZX0pO1xuICAgICAgICAgICAgICAgIENsaWVudC5wb3N0KHVybCwgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0YSBNYW5pcHVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYW5pcHVsYXRlZERhdGEgPSBjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNYW5pcHVsYXRpbmcgZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2V0dGluZyBkYXRhXCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MgY2FsbGJhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJEZWZhdWx0IHN1Y2Nlc3MgY2FsbGJhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vycm9yQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhbGxiYWNrcy5lcnJvckNhbGxiYWNrKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpTV0lUQ0hfTE9BRElOR19TVEFUVVMsIGlzTG9hZGluZzpmYWxzZX0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFtkYXRhLHJlcXVlc3RIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c1Jlc3BvbnNlXTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdGFydFVybCA9IHVybDtcbiAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyID0gKGdldFBhcmFtZXRlcnMsIGNhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3MgKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBQYXJhbWV0ZXJzXCIsIGdldFBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZ2V0UGFyYW1ldGVycykpe1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtZXRlcik9Pnt1cmwgKz0gXCIvXCIgKyBwYXJhbWV0ZXIgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdldFBhcmFtZXRlcnMhPT11bmRlZmluZWQpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwrPVwiL1wiK2dldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBVcmxcIiwgdXJsKTtcblxuICAgICAgICAgICAgICAgIENsaWVudC5kZWxldGUodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0YSBNYW5pcHVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYW5pcHVsYXRlZERhdGEgPSBjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEobWFuaXB1bGF0ZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnRvIGNhdGNoIGRlbGV0ZVwiLGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRXJyb3JDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJcyBjYWxsYmFjayB1bmRlZmluZWRcIiwgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2s9PT11bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2shPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9DbGVhcmluZyB0aGUgdXJsIHNvIHRoZSB1cmwgY2FuIGJlIHVzZWQgYWZ0ZXJ3YXJkc1xuICAgICAgICAgICAgICAgIHVybCA9IHN0YXJ0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkYXRhLCByZXF1ZXN0SGFuZGxlciwgbG9hZGVkLCBzdGF0dXNSZXNwb25zZV07XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHtib3JkZWF1eH0gZnJvbSBcIi4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwicnN1aXRlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOmJvcmRlYXV4LCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgcGFkZGluZzo1MH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIHdpZHRoOjI1MCwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCJ9fT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tL21vcmV0aGFuYWpvYlwiPjxJY29uIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gaWNvbj1cImZhY2Vib29rLXNxdWFyZVwiIHNpemU9XCIzeFwiLz48L2E+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9tb3JldGhhbmFqb2JlbmkvXCI+PEljb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fSBpY29uPVwibGlua2VkaW4tc3F1YXJlXCIgc2l6ZT1cIjN4XCIvPjwvYT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb20vdGhhbl9qb2JcIj48SWNvbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGljb249XCJ0d2l0dGVyLXNxdWFyZVwiIHNpemU9XCIzeFwiIC8+PC9hPiA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48YSBzdHlsZT17e2NvbG9yOlwid2hpdGVzbW9rZVwifX0gaHJlZj1cImh0dHA6Ly93d3cuZW5pY2JjbWVkLmV1L3Byb2plY3RzL21vcmV0aGFuYWpvYlwiPmh0dHA6Ly93d3cuZW5pY2JjbWVkLmV1L3Byb2plY3RzL21vcmV0aGFuYWpvYjwvYT48L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6NDB9fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZTo5fX0+4oCcVGhpcyB3ZWJzaXRlIGhhcyBiZWVuIHByb2R1Y2VkIHdpdGggdGhlIGZpbmFuY2lhbCBhc3Npc3RhbmNlIG9mIHRoZSBFdXJvcGVhbiBVbmlvbiB1bmRlciB0aGUgRU5JIENCQyBNZWRpdGVycmFuZWFuIFNlYSBCYXNpbiBQcm9ncmFtbWUuIFRoZSBjb250ZW50cyBvZiB0aGlzIGRvY3VtZW50IGFyZSB0aGUgc29sZSByZXNwb25zaWJpbGl0eSBvZiBDRVNJRSBhbmQgY2FuIHVuZGVyIG5vIGNpcmN1bXN0YW5jZXMgYmUgcmVnYXJkZWQgYXMgcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIEV1cm9wZWFuIFVuaW9uIG9yIHRoZSBQcm9ncmFtbWUgbWFuYWdlbWVudCBzdHJ1Y3R1cmVzLlxuXG4gICAgICAgICAgICBUaGUgMjAxNCAyMDIwIEVOSSBDQkMgTWVkaXRlcnJhbmVhbiBTZWEgQmFzaW4gUHJvZ3JhbW1lIGlzIGEgbXVsdGlsYXRlcmFsIENyb3NzIEJvcmRlciBDb29wZXJhdGlvbiAoIGluaXRpYXRpdmUgZnVuZGVkIGJ5IHRoZSBFdXJvcGVhbiBOZWlnaGJvdXJob29kIEluc3RydW1lbnQgLSBFTkkpLiBUaGUgUHJvZ3JhbW1lIG9iamVjdGl2ZSBpcyB0byBmb3N0ZXIgZmFpciwgZXF1aXRhYmxlIGFuZCBzdXN0YWluYWJsZSBlY29ub21pYywgc29jaWFsIGFuZCB0ZXJyaXRvcmlhbCBkZXZlbG9wbWVudCwgd2hpY2ggbWF5IGFkdmFuY2UgY3Jvc3MgYiBvcmRlciBpbnRlZ3JhdGlvbiBhbmQgdmFsb3Jpc2UgcGFydGljaXBhdGluZyBjb3VudHJpZXPigJkgdGVycml0b3JpZXMgYW5kIHZhbHVlcy4gVGhlIGZvbGxvd2luZyAxMyBjb3VudHJpZXMgcGFydGljaXBhdGUgaW4gdGhlIFByb2dyYW1tZTogQ3lwcnVzLCBFZ3lwdCwgRnJhbmNlLCBHcmVlY2UsIElzcmFlbCwgSXRhbHksIEpvcmRhbiwgTGViYW5vbiwgTWFsdGEsIFBhbGVzdGluZSwgUG9ydHVnYWwsIFNwYWluLCBUdW5pc2lhLiBUaGUgTWFuYWdpbmcgQXV0aG9yaXR5IChNQSkgaXMgdGhlIEF1dG9ub21vdXMgUmVnaW9uIG9mIFNhcmRpbmlhIChJdGFseSkuIE9mZmljaWFsIFByb2dyYW1tZSBsYW5ndWFnZXMgYXJlIEFyYWJpYywgRW5nbGlzaCBhbmQgRnJlbmNoLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpc2l0Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7Zm9udFNpemU6OSwgY29sb3I6XCJ3aGl0ZXNtb2tlXCIsIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn19IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5lbmljYmNtZWQuZXVcIj4gd3d3LmVuaWNiY21lZC5ldTwvYT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZTo5fX0+LiBUaGUgRXVyb3BlYW4gVW5pb24gaXMgbWFkZSB1cCBvZiAyNyBNZW1iZXIgU3RhdGVzIHdobyBoYXZlIGRlY2lkZWQgdG8gZ3JhZHVhbGx5IGxpbmsgdG9nZXRoZXIgdGhlaXIga25vdyBob3csIHJlc291cmNlcyBhbmQgZGVzdGluaWVzLiBUb2dldGhlciwgZHVyaW5nIGEgcGVyaW9kIG9mIGVubGFyZ2VtZW50IG9mIDUwIHllYXJzLCB0aGV5IGhhdmUgYnVpbHQgYSB6b25lIG9mIHN0YWJpbGl0eSwgZGVtb2NyYWN5IGFuZCBzdXN0YWluYWJsZSBkZXZlbG9wbWVudCB3aGlsc3QgbWFpbnRhaW5pbmcgY3VsdHVyYWwgZGl2ZXJzaXR5LCB0b2xlcmFuY2UgYW5kIGluZGl2aWR1YWwgZnJlZWRvbXMuIFRoZSBFdXJvcGVhbiBVbmlvbiBpcyBjb21taXR0ZWQgdG8gc2hhcmluZyBpdHMgYWNoaWV2ZW1lbnRzIGFuZCBpdHMgdmFsdWVzIHdpdGggY291bnRyaWVzIGFuZCBwZW9wbGVzIGJleW9uZCBpdHMgYm9yZGVycy7igJ08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+KVxuXG59XG4iLCJpbXBvcnQge0J1dHRvblRvb2xiYXIsIENvbCwgQ29udHJvbExhYmVsLCBHcmlkLCBJbnB1dCwgUm93LCBTY2hlbWF9IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7RmxleEFyb3VuZERpdiwgTWFpbkJ1dHRvbiwgUmVnaXN0cmF0aW9uQm94LCBTZWNvbmRhcnlCdXR0b259IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oe2xvZ2luUHJvcHN9KXtcblxuICAgIGNvbnN0IHsgU3RyaW5nVHlwZSB9ID0gU2NoZW1hLlR5cGVzO1xuICAgIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXG4gICAgY29uc3QgbW9kZWwgPSBTY2hlbWEuTW9kZWwoe1xuICAgICAgICBlbWFpbDogU3RyaW5nVHlwZSgpXG4gICAgICAgICAgICAvLyAuYWRkUnVsZSgodmFsdWUsIGRhdGEpID0+IHtyZXR1cm4gYXN5bmNDaGVja1VzZXJuYW1lKHZhbHVlKTt9LCAnRHVwbGljYXRlIHVzZXJuYW1lJylcbiAgICAgICAgICAgIC5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmdUeXBlKCkuaXNSZXF1aXJlZCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gKGxvZ2luUHJvcHMucmVnaXN0cmF0aW9uKSA/IDxTZWNvbmRhcnlCdXR0b24gaHJlZj17bG9naW5Qcm9wcy5yZWdpc3RyYXRpb25OYXZpZ2F0aW9ufSBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiICA+e3QoJ1JlZ2lzdGVyJyl9PC9TZWNvbmRhcnlCdXR0b24+IDogPD48Lz47XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWdpc3RyYXRpb25Cb3g+XG4gICAgICAgICAgICA8R3JpZCBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19IGZsdWlkPlxuICAgICAgICAgICAgICAgIDxGb3JtUm93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPnt0KCdFbWFpbCcpfTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Gb3JtUm93PlxuICAgICAgICAgICAgICAgIDxGb3JtUm93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPjxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PjxzcGFuPnt0KCdQYXNzd29yZCcpfTwvc3Bhbj4gPGEgaHJlZj1cIi9yZWNvdmVyXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT4gPC9kaXY+PC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhBcm91bmREaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+e3QoJ0xvZ2luJyl9PC9NYWluQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWdpc3RyYXRpb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhBcm91bmREaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9SZWdpc3RyYXRpb25Cb3g+KVxufVxuXG5cbmNvbnN0IEZvcm1Sb3cgPSBzdHlsZWQoUm93KWBcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XG5gIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UmVkaXJlY3QsIHVzZUhpc3Rvcnl9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge3VzZUxvZ2lufSBmcm9tIFwiLi4vLi4vQmFja2VuZC91c2VCYWNrZW5kXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tIFwiLi4vLi4vUmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcbmltcG9ydCAqIGFzIFJvdXRlcyBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHt1c2VHZXRVc2VySW5mb0J5RW1haWx9IGZyb20gXCIuLi8uLi9CYWNrZW5kL2hvb2tzL1VzZXJJbmZvXCI7XG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJyc3VpdGVcIjtcbmltcG9ydCB7UmVnaXN0cmF0aW9uQm94fSBmcm9tIFwiLi4vLi4vc3R5bGVkQ29tcG9uZW50cy9DdXN0b21Db21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCl7XG5cbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdXNlci1yYXRpbmcnKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy11c2VyLXByb2ZpbGUnKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qge2F1dGhlbnRpY2F0ZWR9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGUgPSB1c2VyRGF0YS5kYXRhc2V0LnVzZXJQcm9maWxlO1xuICAgICAgICBpZih1c2VyUHJvZmlsZSl7XG4gICAgICAgICAgICBkaXNwYXRjaChBY3Rpb25UeXBlcy51cGRhdGVVc2VySW5mbyhKU09OLnBhcnNlKHVzZXJQcm9maWxlKSkpXG4gICAgICAgIH1cblxuICAgICAgICBpZihhdXRoZW50aWNhdGVkLnRvU3RyaW5nKCkhPT1hdXRoZW50aWNhdGlvbkRhdGEuZGF0YXNldC5pc0F1dGhlbnRpY2F0ZWQpe1xuICAgICAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMuc3dpdGNoQXV0aGVudGljYXRlZFN0YXR1cygpKVxuICAgICAgICB9XG4gICAgfSxbXSlcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2xvZ2luUmVzcG9uc2UsIHBvc3RMb2dpbkhhbmRsZXJdID0gdXNlTG9naW4oKTtcbiAgICBjb25zdCBbdXNlckluZm8sIHVzZXJJbmZvSGFuZGxlcl0gPSB1c2VHZXRVc2VySW5mb0J5RW1haWwoKTtcblxuXG4gICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKGFjY2Vzc1Rva2VuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLmxvZ2luKGFjY2Vzc1Rva2VuKSk7XG5cbiAgICB9O1xuICAgIGNvbnN0IHVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMudXBkYXRlVXNlckluZm8oZGF0YSkpO1xuICAgICAgICBoaXN0b3J5LnB1c2goUm91dGVzLnByb2ZpbGUoZGF0YS5wcm9maWxlTmFtZSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2dpbiA9IChmb3JtRGF0YSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbmFsRm9ybURhdGEgPSAgbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXkpPT4gZmluYWxGb3JtRGF0YS5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldICkpO1xuICAgICAgICBwb3N0TG9naW5IYW5kbGVyKGZpbmFsRm9ybURhdGEsIHtzdWNjZXNzQ2FsbGJhY2s6IHN1Y2Nlc3NDYWxsYmFja30pO1xuICAgICAgICB1c2VySW5mb0hhbmRsZXIoZm9ybURhdGEuZW1haWwse3N1Y2Nlc3NDYWxsYmFjazogdXNlckluZm9TdWNjZXNzQ2FsbGJhY2t9KTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBsb2dpblByb3BzID0ge1xuICAgICAgICByZWdpc3RyYXRpb246IHRydWUsXG4gICAgICAgIHJlZ2lzdHJhdGlvbk5hdmlnYXRpb24gOiBcIi9yZWdpc3RyYXRpb25cIixcbiAgICAgICAgbG9naW5IYW5kbGVyOiBsb2dpblxuXG4gICAgfVxuICByZXR1cm4gKGF1dGhlbnRpY2F0ZWQpID8gPEFscmVhZHlMb2dnZWRJbi8+IDogPExvZ2luRm9ybSBsb2dpblByb3BzPXtsb2dpblByb3BzfS8+O1xufVxuXG5mdW5jdGlvbiBBbHJlYWR5TG9nZ2VkSW4oKXtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcblxuICAgIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLmxvZ091dCgpKTtcbiAgICB9XG5cbiAgICAvLzxCdXR0b24gb25DbGljaz17aGlzdG9yeS5wdXNoKFJvdXRlcy5wcm9maWxlKHVzZXIucHJvZmlsZU5hbWUpKX0vPlxuICAgIHJldHVybiAodXNlcikgPyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShSb3V0ZXMucHJvZmlsZSh1c2VyLnByb2ZpbGVOYW1lKSkgOiA8UmVnaXN0cmF0aW9uQm94PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPlNpZ24gaW48L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdj57dCgnYWxyZWFkeV9sb2dnZWRfbWVzc2FnZScpfTwvZGl2PlxuICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5zaWduT3V0KCl9Pnt0KCdzaWduX291dCcpfTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvUmVnaXN0cmF0aW9uQm94PlxufVxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VHZXRVc2VySW5mb30gZnJvbSBcIi4uL0JhY2tlbmQvaG9va3MvVXNlckluZm9cIjtcblxuZXhwb3J0IGNvbnN0IFNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVMgPSBcIlNXSVRDSF9BVVRIRU5USUNBVElPTl9TVEFUVVNcIjtcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTE9BRElOR19TVEFUVVMgPSBcIlNXSVRDSF9MT0FESU5HX1NUQVRVU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0lORk8gPSBcIlVQREFURV9VU0VSX0lORk9cIjtcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTEFOR1VBR0UgPSBcIlNXSVRDSF9MQU5HVUFHRVwiO1xuZXhwb3J0IGNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCI7XG5leHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NFUlZJQ0VTID0gXCJVUERBVEVfU0VSVklDRVNcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FURUdPUklFUyA9IFwiVVBEQVRFX0NBVEVHT1JJRVNcIjtcblxuZXhwb3J0IGNvbnN0IGNvb2tpZXNPcHRpb25zID0ge3BhdGg6IFwiL1wifTtcblxuXG5leHBvcnQgY29uc3Qgc3dpdGNoQXV0aGVudGljYXRlZFN0YXR1cyA9ICgpID0+e1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUyxcbiAgICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJJbmZvID0gKGRhdGEpID0+e1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG4gICAgY29uc3QgdXNlckNvb2tpZSA9IHtcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgIHJvbGVzOiBkYXRhLnJvbGVzLFxuICAgICAgICBwcm9maWxlTmFtZTogZGF0YS5wcm9maWxlTmFtZSxcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGEubGFuZ3VhZ2VcbiAgICB9XG4gICAgY29va2llcy5zZXQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyQ29va2llKSwgY29va2llc09wdGlvbnMpO1xuXG4gICAgbGV0IHVzZXJDb29raWVzID0gY29va2llcy5nZXQoJ3VzZXInKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFVQREFURV9VU0VSX0lORk8sXG4gICAgICAgIHVzZXI6IGRhdGFcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHN3aXRjaExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PntcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICBjb29raWVzLnNldCgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSwgY29va2llc09wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKFwiU3dpdGNoIGxhbmd1YWdlIHRvXCIsIGxhbmd1YWdlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNXSVRDSF9MQU5HVUFHRSxcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChhY2Nlc3NUb2tlbikgPT57XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgY29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4sIGNvb2tpZXNPcHRpb25zKTtcbiAgICBjb29raWVzLnNldCgnYXV0aGVudGljYXRlZCcsIHRydWUsIGNvb2tpZXNPcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBMT0dJTixcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+e1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGNvb2tpZXMucmVtb3ZlKCdhdXRoZW50aWNhdGVkJyxjb29raWVzT3B0aW9ucyk7XG4gICAgY29va2llcy5yZW1vdmUoJ2FjY2Vzc1Rva2VuJywgY29va2llc09wdGlvbnMpO1xuICAgIGNvb2tpZXMucmVtb3ZlKCd1c2VyJywgY29va2llc09wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPR09VVCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXRlZ29yaWVzID0gKGNhdGVnb3JpZXMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlVQREFURV9DQVRFR09SSUVTLFxuICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZXJ2aWNlcyA9IChzZXJ2aWNlcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6VVBEQVRFX1NFUlZJQ0VTLFxuICAgICAgICBzZXJ2aWNlczogc2VydmljZXNcbiAgICB9XG59XG4iLCJpbXBvcnQgdXNlQ29va2llcyBmcm9tIFwiLi4vQmFja2VuZC91c2VDb29raWVzXCI7XG5cbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvbnNcIjtcbmNvbnN0IHthY2Nlc3NUb2tlbiwgYXV0aGVudGljYXRlZCwgdXNlciwgbGFuZ3VhZ2V9ID0gdXNlQ29va2llcygpO1xuXG5jb25zb2xlLmxvZyhcIlVuRXNjYXBlZCB1c2VyXCIsIHVuZXNjYXBlKHVzZXIpKTtcbmNvbnN0IGRlZmF1bHRMYW5ndWFnZSA9IChsYW5ndWFnZSE9PXVuZGVmaW5lZCkgPyBsYW5ndWFnZSA6IFwiZW5cIjtcbmNvbnN0IGF1dGhlbnRpY2F0ZWRTdGF0dXMgPSAoYXV0aGVudGljYXRlZCE9PXVuZGVmaW5lZCkgPyBhdXRoZW50aWNhdGVkIDogZmFsc2U7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7YXV0aGVudGljYXRlZDphdXRoZW50aWNhdGVkU3RhdHVzLCBhY2Nlc3NUb2tlbjphY2Nlc3NUb2tlbiwgdXNlcjoodXNlciksIGlzTG9hZGluZzpmYWxzZSwgbGFuZ3VhZ2U6ZGVmYXVsdExhbmd1YWdlLCBzZXJ2aWNlczpbXSwgY2F0ZWdvcmllczpbXX07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgaWYoYWN0aW9uKXtcblxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5TV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogIXN0YXRlLmF1dGhlbnRpY2F0ZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5TV0lUQ0hfTE9BRElOR19TVEFUVVM6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc0xvYWRpbmc6IGFjdGlvbi5pc0xvYWRpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9VU0VSX0lORk86e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24udXNlciwgbGFuZ3VhZ2U6IGFjdGlvbi51c2VyLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5TV0lUQ0hfTEFOR1VBR0U6e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBsYW5ndWFnZTogYWN0aW9uLmxhbmd1YWdlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTE9HT1VUOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgYXV0aGVudGljYXRlZDogYWN0aW9uLmF1dGhlbnRpY2F0ZWQsIHVzZXI6IGFjdGlvbi51c2VyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTE9HSU46e1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBhdXRoZW50aWNhdGVkOiBhY3Rpb24uYXV0aGVudGljYXRlZCwgYWNjZXNzVG9rZW46IGFjdGlvbi5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9TRVJWSUNFUzp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIHNlcnZpY2VzOmFjdGlvbi5zZXJ2aWNlcyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9DQVRFR09SSUVTOntcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgY2F0ZWdvcmllczphY3Rpb24uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG5cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsIlxuZXhwb3J0IGNvbnN0IG1haW4gPSBcIi9cIjtcbmV4cG9ydCBjb25zdCByZWdpc3RyYXRpb24gPSBcIi9yZWdpc3RyYXRpb25cIjtcbmV4cG9ydCBjb25zdCBsb2dpbiA9IFwiL2xvZ2luXCI7XG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZWNvdmVyeSA9IFwiL3JlY292ZXJcIjtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IFwiL3Bhc3N3b3JkLWNoYW5nZVwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uQ2F0ZWdvcmllcyA9IFwiL2FkbWluaXN0cmF0aW9uLWNhdGVnb3JpZXNcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvbkV4cGVydGlzZSA9IFwiL2FkbWluaXN0cmF0aW9uLWV4cGVydGlzZVwiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uUHJvamVjdHMgPSBcIi9hZG1pbmlzdHJhdGlvbi1wcm9qZWN0c1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uQ29sbGFib3JhdGlvbnMgPSBcIi9hZG1pbmlzdHJhdGlvbi1jb2xsYWJvcmF0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IGFkbWluaXN0cmF0aW9uU3RhdGlzdGljcyA9IFwiL2FkbWluaXN0cmF0aW9uLXN0YXRpc3RpY3NcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvblVzZXJzID0gXCIvYWRtaW5pc3RyYXRpb24tdXNlcnNcIjtcbmV4cG9ydCBjb25zdCBhZG1pbmlzdHJhdGlvbk5ld3MgPSBcIi9hZG1pbmlzdHJhdGlvbi1uZXdzXCI7XG5leHBvcnQgY29uc3Qgc2VydmljZVNlYXJjaFBhZ2UgPSBcIi9zZXJ2aWNlc1wiO1xuZXhwb3J0IGNvbnN0IHNlYXJjaFVzZXJQYWdlID0gXCIvb3JnYW5pc2F0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IGRhc2hib2FyZFBhZ2UgPSBcIi9kYXNoYm9hcmRcIjtcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0UGFnZSA9IFwiL25ldy1wcm9qZWN0XCI7XG5leHBvcnQgY29uc3QgbmV3UG9ydGZvbGlvUGFnZSA9IFwiL25ldy1wb3J0Zm9saW9cIjtcbmV4cG9ydCBjb25zdCBuZXdDb2xsYWJvcmF0aW9uUGFnZSA9IFwiL25ldy1jb2xsYWJvcmF0aW9uXCI7XG5leHBvcnQgY29uc3QgbmV3U2VydmljZVBhZ2UgPSBcIi9uZXctc2VydmljZVwiO1xuZXhwb3J0IGNvbnN0IG5ld0Z1cm5pdHVyZVBhZ2UgPSBcIi9uZXctZnVybml0dXJlXCI7XG5leHBvcnQgY29uc3QgY29sbGFib3JhdGlvbkRldGFpbFBhZ2UgPSBcIi9jb2xsYWJvcmF0aW9uLzppZFwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlUHJvZmlsZSA9IFwiL3Byb2ZpbGUvOnByb2ZpbGVuYW1lXCI7XG5leHBvcnQgY29uc3Qgcm91dGVQcm9maWxlRWRpdCA9IFwiL2VkaXQtcHJvZmlsZS86cHJvZmlsZW5hbWVcIjtcbmV4cG9ydCBjb25zdCByb3V0ZVByb2plY3QgPSBcIi9wcm9qZWN0LzppZFwiO1xuZXhwb3J0IGNvbnN0IHJvdXRlRWRpdFByb2plY3QgPSBcIi9lZGl0LXByb2plY3QvOmlkXCI7XG5leHBvcnQgY29uc3Qgcm91dGVFZGl0Q29sbGFib3JhdGlvbiA9IFwiL2VkaXQtY29sbGFib3JhdGlvbi86aWRcIjtcbmV4cG9ydCBjb25zdCByb3V0ZUVkaXRTZXJ2aWNlID0gXCIvZWRpdC1zZXJ2aWNlLzppZFwiO1xuZXhwb3J0IGNvbnN0IGltbWVkaWF0ZUxvZ291dCA9IFwiL2ltbWVkaWF0ZWxvZ291dFwiO1xuXG5leHBvcnQgdmFyIG5ld3NQYWdlID0gXCIvbmV3c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvZmlsZShuYW1lKXtcbiAgICByZXR1cm4gXCIvcHJvZmlsZS9cIituYW1lO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvZmlsZShuYW1lKXtcbiAgICByZXR1cm4gXCIvZWRpdC1wcm9maWxlL1wiK25hbWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QoaWQpe1xuICAgIHJldHVybiBcIi9wcm9qZWN0L1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3QoaWQpe1xuICAgIHJldHVybiBcIi9lZGl0LXByb2plY3QvXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYWJvcmF0aW9uKGlkKXtcbiAgICByZXR1cm4gXCIvY29sbGFib3JhdGlvbi9cIitpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRDb2xsYWJvcmF0aW9uKGlkKXtcbiAgICByZXR1cm4gXCIvZWRpdC1jb2xsYWJvcmF0aW9uL1wiK2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFNlcnZpY2UoaWQpe1xuICAgIHJldHVybiBcIi9lZGl0LXNlcnZpY2UvXCIraWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0RnVybml0dXJlKGlkKXtcbiAgICByZXR1cm4gXCIvZWRpdC1mdXJuaXR1cmUvXCIraWQ7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QnV0dG9uLCBCdXR0b25Hcm91cCwgSWNvbkJ1dHRvbiwgUm93fSBmcm9tICdyc3VpdGUnO1xuXG5leHBvcnQgY29uc3QgZ3JheSA9IFwiI2Y3ZjhmOVwiO1xuZXhwb3J0IGNvbnN0IGJvcmRlYXV4ID0gXCIjYjQ1ODYwXCI7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJIZWlnaHQgPSAxMjU7XG5leHBvcnQgY29uc3QgdXBsb2FkZXJDb3ZlckNvbmZpZyA9IHsgdW5pdDogJ3B4JywgeDogMCwgeTogMCwgYXNwZWN0OiAzLjU5Mn1cblxuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uQm94ID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1jb2xvcjogJHtncmF5fTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogMTA4MXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOjIwO1xuICAgIGA7XG5cblxuXG5leHBvcnQgY29uc3QgRnVsbEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOjIwO1xuICAgIGA7XG5leHBvcnQgY29uc3QgTWFpbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym9yZGVhdXh9O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOjk5OXB4O1xuICAgIGA7XG5cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogJHtib3JkZWF1eH07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZWF1eH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEludmVyc2VCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6JHtib3JkZWF1eH0haW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVhdXh9IWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIH1cbiAgICBgO1xuXG5leHBvcnQgY29uc3QgU2F2ZUJ1dHRvbiA9IHN0eWxlZChNYWluQnV0dG9uKWBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlYXV4fSFpbXBvcnRhbnQ7XG5gXG5cbmV4cG9ydCBjb25zdCBJY29uQnV0dG9uVHJhbnNwYXJlbnQgPSBzdHlsZWQoSWNvbkJ1dHRvbilgXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBjb2xvcjoke2JvcmRlYXV4fTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke2JvcmRlYXV4fTtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gXCIvZGVmYXVsdHMvcHJvZmlsZV90aHVtYm5haWwucG5nXCI7XG5leHBvcnQgY29uc3QgcHJvamVjdFBpY3R1cmUgPSBcIi9kZWZhdWx0cy9wcm9qZWN0X3RodW1ibmFpbC5wbmdcIjtcbmV4cG9ydCBjb25zdCBjb3ZlclBpY3R1cmUgPSBcIi9kZWZhdWx0cy9jb3Zlcl90aHVtYm5haWwucG5nXCI7XG5leHBvcnQgY29uc3Qgbm9Qcm9maWxlUGljdHVyZSA9IFwiL2RlZmF1bHRzL25vLWltYWdlLnBuZ1wiO1xuZXhwb3J0IGNvbnN0IG5vUHJvamVjdFBpY3R1cmUgPSBcIi9kZWZhdWx0cy9uby1pbWFnZS5wbmdcIjtcbmV4cG9ydCBjb25zdCBmdW5kaW5nT3Bwb3J0dW5pdGllc1BpY3R1cmUgPSBcIi9kZWZhdWx0cy9uZXdzL2Z1bmRpbmdfb3Bwb3J0dW5pdGllcy5wbmdcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGlzc2VtaW5hdGlvblBpY3R1cmUgPSBcIi9kZWZhdWx0cy9uZXdzL3Byb2plY3RfZGlzc2VtaW5hdGlvbi5wbmdcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TmV3c1BpY3R1cmUgPSBcIi9kZWZhdWx0cy9uZXdzL3Byb2plY3RfbmV3cy5wbmdcIjtcbmV4cG9ydCBjb25zdCB2aWRlb1R1dG9yaWFsUGljdHVyZSA9IFwiL2RlZmF1bHRzL25ld3MvdmlkZW9fdHV0b3JpYWwucG5nXCI7XG5leHBvcnQgY29uc3QgcmVsZXZhbnRQdWJsaWNhdGlvbnNQaWN0dXJlID0gXCIvZGVmYXVsdHMvbmV3cy9yZWxldmFudF9wdWJsaWNhdGlvbnMucG5nXCI7XG5leHBvcnQgY29uc3QgdXNlclBhZ2VQaWN0dXJlID0gXCIvZGVmYXVsdHMvaGVhZC1zZWFyY2gucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBGb3JtQm94ID0gc3R5bGVkLmRpdmBcbnBhZGRpbmc6IDEwcHg7XG5taW4taGVpZ2h0OjEwMHZoYFxuO1xuXG5leHBvcnQgY29uc3QgQ29sbGFib3JhdGlvbkJveCA9ICBzdHlsZWQuZGl2YFxud2lkdGg6IDEwMCU7XG5taW4taGVpZ2h0OiAxNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICR7Ym9yZGVhdXh9O1xuY29sb3I6IHdoaXRlO1xuZm9udC1zaXplOiA0MHB4O1xuZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyOyAgICBcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmBcbjtcblxuZXhwb3J0IGNvbnN0IEljb25TcGFuID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7YDtcblxuZXhwb3J0IGNvbnN0IEljb25TcGFuUHJvamVjdCA9IHN0eWxlZC5zcGFuYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YDtcblxuZXhwb3J0IGNvbnN0IExpbmVhckdyYWRpZW50ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyNy44Mzk2NDM2NTI1NjEyNSU7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCB3aGl0ZSk7XG4gICAgb3BhY2l0eTozMyU7XG4gICAgYFxuXG5leHBvcnQgY29uc3QgY292ZXJTdHlsZSA9IHtoZWlnaHQ6MCwgcGFkZGluZ1RvcDpcIjI3LjgzOTY0MzY1MjU2MTI1JVwiLCB3aWR0aDpcIjEwMCVcIiwgbWFyZ2luQm90dG9tOjEwLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgYmFja2dyb3VuZFNpemU6XCJjb3ZlclwifVxuXG5cbmV4cG9ydCBjb25zdCBGbGV4QXJvdW5kRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbmBcblxuZXhwb3J0IGNvbnN0IEZsZXhCZXR3ZWVuRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRmxleENlbnRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUJ1dHRvbkdyb3VwID0gc3R5bGVkKEJ1dHRvbkdyb3VwKWBcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybVJvdyA9IHN0eWxlZChSb3cpYFxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmg1YGNvbG9yOiR7Ym9yZGVhdXh9OyB0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luOjEwcHg7YDtcblxuZXhwb3J0IGNvbnN0IFBhZ2luYXRpb25Cb3ggPSBzdHlsZWQoRmxleEJldHdlZW5EaXYpYFxuICAgIG1hcmdpbjowcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvQm94ID0gc3R5bGVkLnBgXG4gICAgbWFyZ2luOjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBcbiAgICBcbmBcblxuZXhwb3J0IGNvbnN0IEJhY2tUaXRsZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgY29sb3I6d2hpdGVzbW9rZTtcbiAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgZm9udC1zaXplOjRyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgRnJvbnRUaXRsZSA9IHN0eWxlZChUaXRsZSlgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICBgO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
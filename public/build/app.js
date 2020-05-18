(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/header.css":
/*!*******************************!*\
  !*** ./assets/css/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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
    baseURL: Object({"NODE_ENV":"development"}).REACT_APP_BACKEND_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authentication': token
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
/*! exports provided: useGetUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserInfo", function() { return useGetUserInfo; });
/* harmony import */ var _axios_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios-client */ "./assets/js/Backend/axios-client.js");
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useHook */ "./assets/js/Backend/useHook.js");


function useGetUserInfo() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/users/get', 'get', null);
}

/***/ }),

/***/ "./assets/js/Backend/hooks/useNotifications.js":
/*!*****************************************************!*\
  !*** ./assets/js/Backend/hooks/useNotifications.js ***!
  \*****************************************************/
/*! exports provided: useSetNotificationUrl, useForceNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetNotificationUrl", function() { return useSetNotificationUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceNotification", function() { return useForceNotification; });
/* harmony import */ var _axios_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios-client */ "./assets/js/Backend/axios-client.js");
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useHook */ "./assets/js/Backend/useHook.js");


function useSetNotificationUrl() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/notifications/setNotificationUrl', 'post', null);
}
function useForceNotification() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/notifications/forceNotification', 'post', null);
}

/***/ }),

/***/ "./assets/js/Backend/hooks/useProfile.js":
/*!***********************************************!*\
  !*** ./assets/js/Backend/hooks/useProfile.js ***!
  \***********************************************/
/*! exports provided: useUploadPictures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUploadPictures", function() { return useUploadPictures; });
/* harmony import */ var _axios_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios-client */ "./assets/js/Backend/axios-client.js");
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useHook */ "./assets/js/Backend/useHook.js");


function useUploadPictures() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/profile/loadfile', 'post', null);
}

/***/ }),

/***/ "./assets/js/Backend/hooks/usePushNotifications.js":
/*!*********************************************************!*\
  !*** ./assets/js/Backend/hooks/usePushNotifications.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePushNotifications; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _push_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../push-notifications */ "./assets/js/push-notifications.js");
/* harmony import */ var _useNotifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useNotifications */ "./assets/js/Backend/hooks/useNotifications.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");














function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 //the function to call the push server: https://github.com/Spyna/push-notification-demo/blob/master/front-end-react/src/utils/http.js



 //import all the function created to manage the push notifications

var pushNotificationSupported = Object(_push_notifications__WEBPACK_IMPORTED_MODULE_14__["isPushNotificationSupported"])(); //first thing to do: check if the push notifications are supported by the browser

function usePushNotifications() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(Notification.permission),
      _useState2 = _slicedToArray(_useState, 2),
      userConsent = _useState2[0],
      setSuserConsent = _useState2[1]; //to manage the user consent: Notification.permission is a JavaScript native function that return the current state of the permission
  //We initialize the userConsent with that value


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userSubscription = _useState4[0],
      setUserSubscription = _useState4[1]; //to manage the use push notification subscription


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      pushServerSubscriptionId = _useState6[0],
      setPushServerSubscriptionId = _useState6[1]; //to manage the push server subscription


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1]; //to manage errors


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1]; //to manage async actions
  //JACOPO


  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(function (state) {
    return state;
  }),
      user = _useSelector.user;

  var _useSetNotificationUr = Object(_useNotifications__WEBPACK_IMPORTED_MODULE_15__["useSetNotificationUrl"])(),
      _useSetNotificationUr2 = _slicedToArray(_useSetNotificationUr, 2),
      response = _useSetNotificationUr2[0],
      setNotificationUrlHandler = _useSetNotificationUr2[1];

  var _useForceNotification = Object(_useNotifications__WEBPACK_IMPORTED_MODULE_15__["useForceNotification"])(),
      _useForceNotification2 = _slicedToArray(_useForceNotification, 2),
      responseNotification = _useForceNotification2[0],
      forceNotificationHandler = _useForceNotification2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    if (pushNotificationSupported) {
      setLoading(true);
      setError(false);
      Object(_push_notifications__WEBPACK_IMPORTED_MODULE_14__["registerServiceWorker"])().then(function () {
        console.log("Service worker registration completed");
        setLoading(false);
      })["catch"](function (reason) {
        return console.log("Service worker not registered for reason", reason);
      });
    }
  }, []); //if the push notifications are supported, registers the service worker
  //this effect runs only the first render

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    setLoading(true);
    setError(false);

    var getExixtingSubscription =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var existingSubscription;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_push_notifications__WEBPACK_IMPORTED_MODULE_14__["getUserSubscription"])();

              case 2:
                existingSubscription = _context.sent;
                setUserSubscription(existingSubscription);
                setLoading(false);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getExixtingSubscription() {
        return _ref.apply(this, arguments);
      };
    }();

    getExixtingSubscription();
  }, []); //Retrieve if there is any push notification subscription for the registered service worker
  // this use effect runs only in the first render

  /**
   * define a click handler that asks the user permission,
   * it uses the setSuserConsent state, to set the consent of the user
   * If the user denies the consent, an error is created with the setError hook
   */

  var onClickAskUserPermission = function onClickAskUserPermission() {
    setLoading(true);
    setError(false);
    Object(_push_notifications__WEBPACK_IMPORTED_MODULE_14__["askUserPermission"])().then(function (consent) {
      setSuserConsent(consent);

      if (consent !== "granted") {
        setError({
          name: "Consent denied",
          message: "You denied the consent to receive notifications",
          code: 0
        });
      }

      setLoading(false);
    });
  }; //

  /**
   * define a click handler that creates a push notification subscription.
   * Once the subscription is created, it uses the setUserSubscription hook
   */


  var onClickSusbribeToPushNotification = function onClickSusbribeToPushNotification() {
    setLoading(true);
    setError(false);
    Object(_push_notifications__WEBPACK_IMPORTED_MODULE_14__["createNotificationSubscription"])().then(function (subscrition) {
      setUserSubscription(subscrition);
      setLoading(false);
    })["catch"](function (err) {
      console.error("Couldn't create the notification subscription", err, "name:", err.name, "message:", err.message, "code:", err.code);
      setError(err);
      setLoading(false);
    });
  };
  /**
   * define a click handler that sends the push susbcribtion to the push server.
   * Once the subscription ics created on the server, it saves the id using the hook setPushServerSubscriptionId
   */


  var onClickSendSubscriptionToPushServer = function onClickSendSubscriptionToPushServer() {
    setLoading(true);
    setError(false); //TODO cambio con il mio hook

    var formData = new FormData();
    formData.append('userSubscription', JSON.stringify(userSubscription));
    formData.append('email', user.email);

    var successCallback = function successCallback(data) {
      setPushServerSubscriptionId(data.id);
      setLoading(false);
    };

    setNotificationUrlHandler(formData, {
      successCallback: successCallback
    });
    /*http
        .post("/subscription", userSubscription)
        .then(function(response) {
            setPushServerSubscriptionId(response.id);
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            setError(err);
        });*/
  };
  /**
   * define a click handler that request the push server to send a notification, passing the id of the saved subscription
   */


  var onClickSendNotification =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var formData, successCallback;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              setError(false);
              formData = new FormData();
              formData.append('email', user.email);

              successCallback = function successCallback(data) {
                setLoading(false);
              };

              forceNotificationHandler(formData, {
                successCallback: successCallback
              });
              /* await http.get(`/subscription/${pushServerSubscriptionId}`).catch(err => {
                   setLoading(false);
                   setError(err);
               });
               setLoading(false);*/

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onClickSendNotification() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * returns all the stuff needed by a Component
   */


  return {
    onClickAskUserPermission: onClickAskUserPermission,
    onClickSusbribeToPushNotification: onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer: onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId: pushServerSubscriptionId,
    onClickSendNotification: onClickSendNotification,
    userConsent: userConsent,
    pushNotificationSupported: pushNotificationSupported,
    userSubscription: userSubscription,
    error: error,
    loading: loading
  };
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
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/register', 'post', null);
}
function usePasswordRecovery() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/recovery', 'post', false);
}
function useChangePassword() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/passwordchange', 'post', false);
}
function useCheckUserMail() {
  var backendClient = Object(_axios_client__WEBPACK_IMPORTED_MODULE_0__["BackendClient"])();
  return Object(_useHook__WEBPACK_IMPORTED_MODULE_1__["useCreateHook"])(backendClient, '/checkuser', 'post', false);
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
  return [accessToken, authenticated, user, language];
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
            console.log("Response", response); //Data Manipulation
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

/***/ "./assets/js/Layout/Header.js":
/*!************************************!*\
  !*** ./assets/js/Layout/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/header.css */ "./assets/css/header.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Redux/actions */ "./assets/js/Redux/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Header() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NavBarInstance, null);
}

function NavBarInstance(_ref) {
  var onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      props = _objectWithoutProperties(_ref, ["onSelect", "activeKey"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var changeLanguage = function changeLanguage(code) {
    i18n.changeLanguage(code);
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_8__["switchLanguage"](code));
  };

  var logout = function logout() {
    return console.log("logout");
  };

  var CustomDropdown = function CustomDropdown(_ref2) {
    var props = Object.assign({}, _ref2);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], props, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('it');
      }
    }, " It"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
      onClick: function onClick() {
        return changeLanguage('en');
      }
    }, " En"));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Navbar"], props, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Header, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "#",
    className: "navbar-brand logo"
  }, "RSUITE")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Body, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    onSelect: onSelect,
    activeKey: activeKey
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Nav"].Item, {
    eventKey: "1",
    icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      icon: "home"
    })
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Nav"].Item, {
    eventKey: "2"
  }, "News"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Nav"].Item, {
    eventKey: "3"
  }, "Products"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    title: t('company')
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
    eventKey: "4"
  }, t('company')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
    eventKey: "5"
  }, "Team"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
    eventKey: "6"
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    pullRight: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CustomDropdown, {
    title: "Language",
    trigger: "hover"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Nav"].Item, {
    icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      icon: "cog"
    })
  }, "Settings"))));
}

;

/***/ }),

/***/ "./assets/js/Layout/Layout.js":
/*!************************************!*\
  !*** ./assets/js/Layout/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./assets/js/Layout/Header.js");



function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: '66px',
      position: 'absolute',
      height: '100vh',
      width: '100vw',
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    }
  }, props.page));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./assets/js/Layout/Loading.js":
/*!*************************************!*\
  !*** ./assets/js/Layout/Loading.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");


function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
    style: {
      bottom: 0,
      right: 0,
      marginBottom: 15,
      marginRight: 15,
      position: "fixed",
      zIndex: "99"
    },
    inverse: true,
    size: "md"
  });
}

/***/ }),

/***/ "./assets/js/Layout/MainPage.js":
/*!**************************************!*\
  !*** ./assets/js/Layout/MainPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function MainPage(_ref) {
  var page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NavBarInstance, null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", {
    style: {
      backgroundColor: "yellow"
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    style: {
      backgroundColor: "red",
      flexGrow: 1,
      margin: "0 auto",
      maxWidth: 900,
      position: "relative",
      width: "100%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_3__["Body"], null, page))));
}

var NavBarInstance = function NavBarInstance(_ref2) {
  var onSelect = _ref2.onSelect,
      activeKey = _ref2.activeKey,
      props = _objectWithoutProperties(_ref2, ["onSelect", "activeKey"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Navbar"], props, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Header, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "#",
    className: "navbar-brand logo"
  }, "RSUITE")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Body, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    onSelect: onSelect,
    activeKey: activeKey
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, {
    eventKey: "1",
    icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: "home"
    })
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, {
    eventKey: "2"
  }, "News"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, {
    eventKey: "3"
  }, "Products"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    title: "About"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    eventKey: "4"
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    eventKey: "5"
  }, "Team"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    eventKey: "6"
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    pullRight: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, {
    icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: "cog"
    })
  }, "Settings"))));
};

/***/ }),

/***/ "./assets/js/Login/Components/ChangePassword.js":
/*!******************************************************!*\
  !*** ./assets/js/Login/Components/ChangePassword.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangePassword; });
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
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TextField */ "./assets/js/Login/Components/TextField.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var StringType = rsuite__WEBPACK_IMPORTED_MODULE_13__["Schema"].Types.StringType;
var model = rsuite__WEBPACK_IMPORTED_MODULE_13__["Schema"].Model({
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType().addRule(function (value, data) {
    console.log(data);

    if (value !== data.password) {
      return false;
    }

    return true;
  }, 'The two passwords do not match').isRequired('This field is required.')
});
function ChangePassword() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["useHistory"])();

  var _useChangePassword = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_17__["useChangePassword"])(),
      _useChangePassword2 = _slicedToArray(_useChangePassword, 4),
      response = _useChangePassword2[0],
      submitBackendHandler = _useChangePassword2[1],
      loaded = _useChangePassword2[2],
      status = _useChangePassword2[3];

  var submitHandler = function submitHandler(formValue) {
    var formData = new FormData();
    Object.keys(formValue).forEach(function (key) {
      return formData.append(key, formValue[key]);
    });
    submitBackendHandler(formData);
  };

  var renderForm = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["Form"], {
    model: model,
    formValue: formValue,
    onChange: setFormValue,
    onSubmit: function onSubmit() {
      return submitHandler(formValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: "password",
    label: "New Password",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: "verifyPassword",
    label: "Type new Password again",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__["MainButton"], {
    appearance: "primary",
    type: "submit"
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    appearance: "default",
    onClick: function onClick() {
      return history.push(_routes__WEBPACK_IMPORTED_MODULE_19__["login"]);
    }
  }, "Login")));
  var recoverPasswordFinalMessage = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, "Password has been changed");
  var render = status ? recoverPasswordFinalMessage : renderForm;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Change password")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, render));
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
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TextField */ "./assets/js/Login/Components/TextField.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function LoginForm(_ref) {
  var loginProps = _ref.loginProps;
  var StringType = rsuite__WEBPACK_IMPORTED_MODULE_13__["Schema"].Types.StringType;

  var _useCheckUserMail = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_18__["useCheckUserMail"])(),
      _useCheckUserMail2 = _slicedToArray(_useCheckUserMail, 4),
      userMailResponse = _useCheckUserMail2[0],
      checkUserMailHandler = _useCheckUserMail2[1],
      userMailLoaded = _useCheckUserMail2[2],
      userMailStatus = _useCheckUserMail2[3];

  function asyncCheckUsername(name) {
    var formData = new FormData();
    formData.append('email', name);
    var response = "cazzo";
    var callbacks = {
      successCallback: function successCallback() {
        return response = response + response;
      },
      errorCallback: function errorCallback() {
        return response = false;
      }
    };
    checkUserMailHandler(formData, callbacks);
    console.log("user mail checked", response);
    return response;
  }

  var model = rsuite__WEBPACK_IMPORTED_MODULE_13__["Schema"].Model({
    email: StringType() // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
    .isRequired('This field is required'),
    password: StringType().isRequired('This field is required.')
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var _useLogin = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_18__["useLogin"])(),
      _useLogin2 = _slicedToArray(_useLogin, 4),
      response = _useLogin2[0],
      submitBackendHandler = _useLogin2[1],
      loaded = _useLogin2[2],
      status = _useLogin2[3];

  var submitHandler = function submitHandler(formValue) {
    var formData = new FormData();
    Object.keys(formValue).forEach(function (key) {
      return formData.append(key, formValue[key]);
    });
    submitBackendHandler(formData);
  };

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["useHistory"])();
  var registrationButton = loginProps.registration ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__["SecondaryButton"], {
    appearance: "default",
    onClick: loginProps.registrationNavigation
  }, "Register") : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null);
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Sign in")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["Form"], {
    autoComplete: "off",
    model: model,
    formValue: formValue,
    onChange: setFormValue,
    onSubmit: function onSubmit() {
      return loginProps.loginHandler(formValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["ControlLabel"], null, "Email"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["FormControl"], {
    name: "email",
    type: "email",
    checkAsync: true
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["ControlLabel"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "Password"), " ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Link"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_17__["passwordRecovery"]
  }, "Forgot password?"), " ")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["FormControl"], {
    name: "password",
    type: "password"
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__["MainButton"], {
    appearance: "primary",
    type: "submit"
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_16__["SecondaryButton"], {
    appearance: "default",
    onClick: function onClick() {
      return history.push(_routes__WEBPACK_IMPORTED_MODULE_17__["changePassword"]);
    }
  }, "Cancel"), registrationButton)))));
}

/***/ }),

/***/ "./assets/js/Login/Components/RecoverPasswordForm.js":
/*!***********************************************************!*\
  !*** ./assets/js/Login/Components/RecoverPasswordForm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecoverPasswordForm; });
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
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TextField */ "./assets/js/Login/Components/TextField.js");
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function RecoverPasswordForm() {
  var StringType = rsuite__WEBPACK_IMPORTED_MODULE_13__["Schema"].Types.StringType;
  var model = rsuite__WEBPACK_IMPORTED_MODULE_13__["Schema"].Model({
    recoveryKey: StringType().isRequired('This field is required.')
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["useHistory"])();

  var _usePasswordRecovery = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_17__["usePasswordRecovery"])(),
      _usePasswordRecovery2 = _slicedToArray(_usePasswordRecovery, 2),
      status = _usePasswordRecovery2[0],
      passwordRecoveryHandler = _usePasswordRecovery2[1];

  var passwordRecovery = function passwordRecovery(formValue) {
    var formData = new FormData();
    Object.keys(formValue).forEach(function (key) {
      return formData.append(key, formValue[key]);
    });
    passwordRecoveryHandler(formData);
  };

  var recoverPasswordForm = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["Form"], {
    model: model,
    formValue: formValue,
    onChange: function onChange(formValue) {
      console.log(formValue);
      setFormValue(formValue);
    },
    onSubmit: function onSubmit() {
      return passwordRecovery(formValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: "recoveryKey",
    label: "Your email or MoreThanAJob username"
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    appearance: "primary",
    type: "submit"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    appearance: "default",
    onClick: function onClick() {
      return history.push(_routes__WEBPACK_IMPORTED_MODULE_19__["login"]);
    }
  }, "Login")));
  var recoverPasswordFinalMessage = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, "An email has been sent. Please, follow the instructions.");
  var render = status ? recoverPasswordFinalMessage : recoverPasswordForm;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_15__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Recover Password")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, render));
}

/***/ }),

/***/ "./assets/js/Login/Components/RegistrationForm.js":
/*!********************************************************!*\
  !*** ./assets/js/Login/Components/RegistrationForm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegistrationForm; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styledComponents/CustomComponents */ "./assets/js/styledComponents/CustomComponents.js");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TextField */ "./assets/js/Login/Components/TextField.js");











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function RegistrationForm(_ref) {
  var registrationProps = _ref.registrationProps;
  var pickerData = [{
    "label": "Italiano",
    "value": "it-IT"
  }, {
    "label": "English",
    "value": "en-US"
  }];
  var StringType = rsuite__WEBPACK_IMPORTED_MODULE_11__["Schema"].Types.StringType;
  var model = rsuite__WEBPACK_IMPORTED_MODULE_11__["Schema"].Model({
    email: StringType().isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.')
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var submitHandler = function submitHandler(formValue) {
    registrationProps.registrationHandler();
  };

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_12__["RegistrationBox"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_11__["Form"], {
    model: model,
    formValue: formValue,
    onChange: setFormValue,
    onSubmit: function onSubmit() {
      return submitHandler(formValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "email",
    label: "Email"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "password",
    label: "Password",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "language",
    label: "Select Language",
    accepter: rsuite__WEBPACK_IMPORTED_MODULE_11__["SelectPicker"],
    data: pickerData
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_11__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_12__["MainButton"], {
    appearance: "primary",
    onClick: function onClick() {
      return registrationProps.registrationHandler(formValue);
    }
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styledComponents_CustomComponents__WEBPACK_IMPORTED_MODULE_12__["SecondaryButton"], {
    appearance: "default"
  }, "Cancel"))));
}

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
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function TextField(_ref) {
  var name = _ref.name,
      label = _ref.label,
      accepter = _ref.accepter,
      rest = _objectWithoutProperties(_ref, ["name", "label", "accepter"]);

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["ControlLabel"], null, label, " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({
    name: name,
    accepter: accepter
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

  var _useGetUserInfo = Object(_Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_21__["useGetUserInfo"])(),
      _useGetUserInfo2 = _slicedToArray(_useGetUserInfo, 2),
      userInfo = _useGetUserInfo2[0],
      userInfoHandler = _useGetUserInfo2[1]; //const { t, i18n } = useTranslation();


  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_19__["default"]();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(function (state) {
    return state;
  }),
      authenticated = _useSelector.authenticated,
      user = _useSelector.user;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])();

  var successCallback = function successCallback(data) {
    cookies.set('accessToken', data);
    cookies.set('authenticated', true);
    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_17__["switchAuthenticatedStatus"]());
  };

  var userInfoSuccessCallback = function userInfoSuccessCallback(data) {
    console.log("info callback", data);
    cookies.set('user', data); //cookies.set('user', JSON.stringify(data));

    dispatch(_Redux_actions__WEBPACK_IMPORTED_MODULE_17__["updateUserInfo"](data));
    history.push(_routes__WEBPACK_IMPORTED_MODULE_20__["dashboard"]);
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

  var goToRegistration = function goToRegistration() {
    return history.push(_routes__WEBPACK_IMPORTED_MODULE_20__["registration"]);
  };

  var loginProps = {
    registration: true,
    registrationNavigation: goToRegistration,
    loginHandler: login
  };
  return authenticated ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, t('Already logged'), " ") : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Components_LoginForm__WEBPACK_IMPORTED_MODULE_18__["default"], {
    loginProps: loginProps
  });
}

/***/ }),

/***/ "./assets/js/Login/Pages/Registration.js":
/*!***********************************************!*\
  !*** ./assets/js/Login/Pages/Registration.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Registration; });
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
/* harmony import */ var _Backend_useBackend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Backend/useBackend */ "./assets/js/Backend/useBackend.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_RegistrationForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/RegistrationForm */ "./assets/js/Login/Components/RegistrationForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../routes */ "./assets/js/routes.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Registration() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["useHistory"])();

  var _useRegister = Object(_Backend_useBackend__WEBPACK_IMPORTED_MODULE_14__["useRegister"])(),
      _useRegister2 = _slicedToArray(_useRegister, 2),
      registerResponse = _useRegister2[0],
      postRegisterHandler = _useRegister2[1];

  var successCallback = function successCallback() {
    history.push(_routes__WEBPACK_IMPORTED_MODULE_17__["login"]);
  };

  var register = function register(formData) {
    var finalFormData = new FormData();
    Object.keys(formData).forEach(function (key) {
      return finalFormData.append(key, formData[key]);
    });
    postRegisterHandler(finalFormData, {
      successCallback: successCallback
    });
  };

  var registrationProps = {
    registrationHandler: register
  };
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Components_RegistrationForm__WEBPACK_IMPORTED_MODULE_16__["default"], {
    registrationProps: registrationProps
  });
}

/***/ }),

/***/ "./assets/js/MainApp/Dashboard.js":
/*!****************************************!*\
  !*** ./assets/js/MainApp/Dashboard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var _Backend_hooks_UserInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Backend/hooks/UserInfo */ "./assets/js/Backend/hooks/UserInfo.js");
/* harmony import */ var _Backend_hooks_useProfile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Backend/hooks/useProfile */ "./assets/js/Backend/hooks/useProfile.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Dashboard() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"])(function (state) {
    return state;
  }),
      user = _useSelector.user;

  var _useUploadPictures = Object(_Backend_hooks_useProfile__WEBPACK_IMPORTED_MODULE_17__["useUploadPictures"])(),
      _useUploadPictures2 = _slicedToArray(_useUploadPictures, 2),
      response = _useUploadPictures2[0],
      uploadPictureHandler = _useUploadPictures2[1];

  console.log("Dashboard user", user);

  var onChangeHandler = function onChangeHandler(file) {
    console.log("file", file);
    var data = {};
    var formData = new FormData();
    formData.append('file', file.blobFile);
    data.email = user.email;
    Object.keys(data).forEach(function (key) {
      formData.append(key, JSON.stringify(data[key]));
    });
    uploadPictureHandler(formData);
  };

  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    style: {
      height: 250,
      width: "100%",
      backgroundColor: "green",
      backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png)"
    }
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(CoverPicture, null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(ProfilePicture, null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_15__["Uploader"], {
    autoUpload: false,
    onChange: onChangeHandler,
    action: "//jsonplaceholder.typicode.com/posts/"
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(rsuite__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
    icon: "camera-retro",
    size: "lg"
  }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, user && user.email)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    style: {
      height: 500,
      width: "100%",
      backgroundColor: "cyan"
    }
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, "Info")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    style: {
      height: 300,
      width: "100%",
      backgroundColor: "grey"
    }
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, "Projects")));
}

function CoverPicture() {
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, "Picture");
}

function ProfilePicture() {
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, "Profile Picture");
}

/***/ }),

/***/ "./assets/js/Redux/actions.js":
/*!************************************!*\
  !*** ./assets/js/Redux/actions.js ***!
  \************************************/
/*! exports provided: SWITCH_AUTHENTICATION_STATUS, SWITCH_LOADING_STATUS, UPDATE_USER_INFO, SWITCH_LANGUAGE, switchAuthenticatedStatus, updateUserInfo, switchLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_AUTHENTICATION_STATUS", function() { return SWITCH_AUTHENTICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LOADING_STATUS", function() { return SWITCH_LOADING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO", function() { return UPDATE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LANGUAGE", function() { return SWITCH_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchAuthenticatedStatus", function() { return switchAuthenticatedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return updateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return switchLanguage; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
var SWITCH_LOADING_STATUS = "SWITCH_LOADING_STATUS";
var UPDATE_USER_INFO = "UPDATE_USER_INFO";
var SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
var switchAuthenticatedStatus = function switchAuthenticatedStatus() {
  return {
    type: SWITCH_AUTHENTICATION_STATUS
  };
};
var updateUserInfo = function updateUserInfo(data) {
  console.log("Updating user info to", data);
  return {
    type: UPDATE_USER_INFO,
    user: data
  };
};
var switchLanguage = function switchLanguage(language) {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
  cookies.set('language', language);
  console.log("Switch language to", language);
  return {
    type: SWITCH_LANGUAGE,
    language: language
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
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Backend_useCookies__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Backend/useCookies */ "./assets/js/Backend/useCookies.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actions */ "./assets/js/Redux/actions.js");



















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _useCookies = Object(_Backend_useCookies__WEBPACK_IMPORTED_MODULE_18__["default"])(),
    _useCookies2 = _slicedToArray(_useCookies, 4),
    accessToken = _useCookies2[0],
    authenticated = _useCookies2[1],
    user = _useCookies2[2],
    language = _useCookies2[3];

console.log("reducer language", language);
var defaultLanguage = language !== undefined ? language : "en";
var initialState = {
  authenticated: authenticated,
  user: user,
  isLoading: false,
  language: defaultLanguage
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_19__["SWITCH_AUTHENTICATION_STATUS"]:
        {
          return _objectSpread({}, state, {
            authenticated: !state.authenticated
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_19__["SWITCH_LOADING_STATUS"]:
        {
          return _objectSpread({}, state, {
            isLoading: action.isLoading
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_19__["UPDATE_USER_INFO"]:
        {
          return _objectSpread({}, state, {
            user: action.user
          });
        }

      case _actions__WEBPACK_IMPORTED_MODULE_19__["SWITCH_LANGUAGE"]:
        {
          return _objectSpread({}, state, {
            language: action.language
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

/***/ "./assets/js/Test.js":
/*!***************************!*\
  !*** ./assets/js/Test.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backend_hooks_usePushNotifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backend/hooks/usePushNotifications */ "./assets/js/Backend/hooks/usePushNotifications.js");




var Loading = function Loading(_ref) {
  var loading = _ref.loading;
  return loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "app-loader"
  }, "Please wait, we are loading something...") : null;
};

var Error = function Error(_ref2) {
  var error = _ref2.error;
  return error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "app-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, error.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Error message : ", error.message), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Error code : ", error.code)) : null;
};

function Test() {
  var _usePushNotifications = Object(_Backend_hooks_usePushNotifications__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      userConsent = _usePushNotifications.userConsent,
      pushNotificationSupported = _usePushNotifications.pushNotificationSupported,
      userSubscription = _usePushNotifications.userSubscription,
      onClickAskUserPermission = _usePushNotifications.onClickAskUserPermission,
      onClickSusbribeToPushNotification = _usePushNotifications.onClickSusbribeToPushNotification,
      onClickSendSubscriptionToPushServer = _usePushNotifications.onClickSendSubscriptionToPushServer,
      pushServerSubscriptionId = _usePushNotifications.pushServerSubscriptionId,
      onClickSendNotification = _usePushNotifications.onClickSendNotification,
      error = _usePushNotifications.error,
      loading = _usePushNotifications.loading;

  var isConsentGranted = userConsent === "granted";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, {
    loading: loading
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Push notification are ", !pushNotificationSupported && "NOT", " supported by your device."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "User consent to recevie push notificaitons is ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, userConsent), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
    error: error
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: !pushNotificationSupported || isConsentGranted,
    onClick: onClickAskUserPermission
  }, isConsentGranted ? "Consent granted" : " Ask user permission"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: !pushNotificationSupported || !isConsentGranted || userSubscription,
    onClick: onClickSusbribeToPushNotification
  }, userSubscription ? "Push subscription created" : "Create Notification subscription"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: !userSubscription || pushServerSubscriptionId,
    onClick: onClickSendSubscriptionToPushServer
  }, pushServerSubscriptionId ? "Subscrption sent to the server" : "Send subscription to push server"), pushServerSubscriptionId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The server accepted the push subscrption!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onClickSendNotification
  }, "Send a notification")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Your notification subscription details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", null, JSON.stringify(userSubscription, null, " ")))));
}

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rsuite_dist_styles_rsuite_default_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rsuite/dist/styles/rsuite-default.min.css */ "./node_modules/rsuite/dist/styles/rsuite-default.min.css");
/* harmony import */ var rsuite_dist_styles_rsuite_default_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rsuite_dist_styles_rsuite_default_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Login_Pages_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Login/Pages/Login */ "./assets/js/Login/Pages/Login.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Redux_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Redux/reducer */ "./assets/js/Redux/reducer.js");
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Layout/Layout */ "./assets/js/Layout/Layout.js");
/* harmony import */ var _Login_Pages_Registration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Login/Pages/Registration */ "./assets/js/Login/Pages/Registration.js");
/* harmony import */ var _Login_Components_RecoverPasswordForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Login/Components/RecoverPasswordForm */ "./assets/js/Login/Components/RecoverPasswordForm.js");
/* harmony import */ var _MainApp_Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MainApp/Dashboard */ "./assets/js/MainApp/Dashboard.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes */ "./assets/js/routes.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./i18n */ "./assets/js/i18n.js");
/* harmony import */ var _Login_Components_ChangePassword__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Login/Components/ChangePassword */ "./assets/js/Login/Components/ChangePassword.js");
/* harmony import */ var _Layout_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Layout/Loading */ "./assets/js/Layout/Loading.js");
/* harmony import */ var _Layout_MainPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Layout/MainPage */ "./assets/js/Layout/MainPage.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Test */ "./assets/js/Test.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

























function App() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state;
  }),
      authenticated = _useSelector.authenticated,
      language = _useSelector.language;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_22__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  console.log("translation", i18n.language);
  console.log("cookies", language);

  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }

  var registrationPage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    page: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Login_Pages_Registration__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  });
  var changePasswordPage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    page: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Login_Components_ChangePassword__WEBPACK_IMPORTED_MODULE_19__["default"], null)
  });
  var recoverPage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    page: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Login_Components_RecoverPasswordForm__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  });
  var dashboardPage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_MainPage__WEBPACK_IMPORTED_MODULE_21__["default"], {
    page: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MainApp_Dashboard__WEBPACK_IMPORTED_MODULE_13__["default"], null)
  });
  var loginPage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    page: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Login_Pages_Login__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  });

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state;
  }),
      isLoading = _useSelector2.isLoading;

  var loading = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null);
  var mainApp = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["registration"],
    children: registrationPage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["changePassword"],
    children: changePasswordPage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["passwordRecovery"],
    children: recoverPage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["dashboard"],
    children: dashboardPage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["main"],
    children: loginPage
  })));
  var authRequired = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["main"],
    children: loginPage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["login"],
    children: loginPage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_14__["registration"],
    children: registrationPage
  })));
  var render = authenticated ? mainApp : authRequired;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, render, isLoading && loading);
}

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_4__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_Redux_reducer__WEBPACK_IMPORTED_MODULE_9__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"])));
var firebaseConfig = {
  apiKey: "AIzaSyDxbfpWNPN68Pd2arE1mVZlDPSJ_ddbLio",
  authDomain: "morethanajob-555ac.firebaseapp.com",
  databaseURL: "https://morethanajob-555ac.firebaseio.com",
  projectId: "morethanajob-555ac",
  storageBucket: "morethanajob-555ac.appspot.com",
  messagingSenderId: "658273758321",
  appId: "1:658273758321:web:abbb5898193d348bac7fd0",
  measurementId: "G-KH5GT2GVYS"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_15__["initializeApp"](firebaseConfig);
var messaging = firebase_app__WEBPACK_IMPORTED_MODULE_15__["messaging"]();
messaging.usePublicVapidKey("BJ2vLwEXdwyrGarVrA8BlhuBKHIcjWNIAE4T9uNUoc2xoxEgAiTfpdVp86gVDkL9TPULDd9LkT5L4Uh9bqKTTKo");
react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, null))), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/i18n.js":
/*!***************************!*\
  !*** ./assets/js/i18n.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _i18n_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/en-US */ "./assets/js/i18n/en-US.js");
/* harmony import */ var _i18n_it_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/it-IT */ "./assets/js/i18n/it-IT.js");



 // not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18next__WEBPACK_IMPORTED_MODULE_0__["default"] // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// learn more: https://github.com/i18next/i18next-xhr-backend
//.use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
//  .use(LanguageDetector)
// pass the i18n instance to react-i18next.
.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  resources: {
    en: _i18n_en_US__WEBPACK_IMPORTED_MODULE_2__["translation"],
    it: _i18n_it_IT__WEBPACK_IMPORTED_MODULE_3__["translation"]
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./assets/js/i18n/en-US.js":
/*!*********************************!*\
  !*** ./assets/js/i18n/en-US.js ***!
  \*********************************/
/*! exports provided: translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translation", function() { return translation; });
var translation = {
  translation: {
    "Welcome to React": "Welcome to React and react-i18next",
    "company": "company"
  }
};

/***/ }),

/***/ "./assets/js/i18n/it-IT.js":
/*!*********************************!*\
  !*** ./assets/js/i18n/it-IT.js ***!
  \*********************************/
/*! exports provided: translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translation", function() { return translation; });
var translation = {
  translation: {
    "Welcome to React": "Benvenuto in react",
    "company": "Compagnia",
    "Already logged": "Già autenticato"
  }
};

/***/ }),

/***/ "./assets/js/push-notifications.js":
/*!*****************************************!*\
  !*** ./assets/js/push-notifications.js ***!
  \*****************************************/
/*! exports provided: isPushNotificationSupported, askUserPermission, registerServiceWorker, sendNotification, createNotificationSubscription, getUserSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPushNotificationSupported", function() { return isPushNotificationSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askUserPermission", function() { return askUserPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerServiceWorker", function() { return registerServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendNotification", function() { return sendNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotificationSubscription", function() { return createNotificationSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSubscription", function() { return getUserSubscription; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pushServerPublicKey = "BJ2vLwEXdwyrGarVrA8BlhuBKHIcjWNIAE4T9uNUoc2xoxEgAiTfpdVp86gVDkL9TPULDd9LkT5L4Uh9bqKTTKo";
/**
 * checks if Push notification and service workers are supported by your browser
 */

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}
/**
 * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
 */


function askUserPermission() {
  return _askUserPermission.apply(this, arguments);
}
/**
 * shows a notification
 */


function _askUserPermission() {
  _askUserPermission = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Notification.requestPermission();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _askUserPermission.apply(this, arguments);
}

function sendNotification() {
  var img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
  var text = "Take a look at this brand new t-shirt!";
  var title = "New Product Available";
  var options = {
    body: text,
    icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
    vibrate: [200, 100, 200],
    tag: "new-product",
    image: img,
    badge: "https://spyna.it/icons/android-icon-192x192.png",
    actions: [{
      action: "Detail",
      title: "View",
      icon: "https://via.placeholder.com/128/ff0000"
    }]
  };
  navigator.serviceWorker.ready.then(function (serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}
/**
 *
 */


function registerServiceWorker() {
  console.log("Registering service Worker");
  return navigator.serviceWorker.register("./../serviceWorker.js");
}
/**
 *
 * using the registered service worker creates a push notification subscription and returns it
 *
 */


function createNotificationSubscription() {
  return _createNotificationSubscription.apply(this, arguments);
}
/**
 * returns the subscription if present or nothing
 */


function _createNotificationSubscription() {
  _createNotificationSubscription = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var serviceWorker;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return navigator.serviceWorker.ready;

          case 2:
            serviceWorker = _context2.sent;
            _context2.next = 5;
            return serviceWorker.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: pushServerPublicKey
            });

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createNotificationSubscription.apply(this, arguments);
}

function getUserSubscription() {
  //wait for service worker installation to be ready, and then
  return navigator.serviceWorker.ready.then(function (serviceWorker) {
    return serviceWorker.pushManager.getSubscription();
  }).then(function (pushSubscription) {
    return pushSubscription;
  });
}



/***/ }),

/***/ "./assets/js/routes.js":
/*!*****************************!*\
  !*** ./assets/js/routes.js ***!
  \*****************************/
/*! exports provided: main, registration, login, passwordRecovery, dashboard, changePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordRecovery", function() { return passwordRecovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboard", function() { return dashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
var main = "/app/";
var registration = "/app/registration";
var login = "/app/login";
var passwordRecovery = "/app/recover";
var dashboard = "/app/dashboard";
var changePassword = "/app/passwordchange";

/***/ }),

/***/ "./assets/js/styledComponents/CustomComponents.js":
/*!********************************************************!*\
  !*** ./assets/js/styledComponents/CustomComponents.js ***!
  \********************************************************/
/*! exports provided: RegistrationBox, Body, MainButton, SecondaryButton, DeleteButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationBox", function() { return RegistrationBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainButton", function() { return MainButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return SecondaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");




function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: #2589f5;\n    color: white;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    max-width: 800px;\n    border-color: ", ";\n    border-width: 1px;\n    border-style: solid;\n    height:100vh;\n    display: flex;\n    flex-direction: column;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    padding: 25px;\n    border-color: ", ";\n    border-width: 1px;\n    border-radius: 8px;\n    border-style: solid;\n    display: flex;\n    flex-direction: column;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gray = "#f7f8f9";
var RegistrationBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), gray);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), gray);
var MainButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject3());
var SecondaryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject4());
var DeleteButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rsuite__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject5());

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL2F4aW9zLWNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC9ob29rcy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC9ob29rcy91c2VOb3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL2hvb2tzL3VzZVByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvaG9va3MvdXNlUHVzaE5vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0JhY2tlbmQvdXNlQmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQmFja2VuZC91c2VDb29raWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CYWNrZW5kL3VzZUhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xheW91dC9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9MYXlvdXQvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvQ2hhbmdlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9Db21wb25lbnRzL1JlY292ZXJQYXNzd29yZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL0NvbXBvbmVudHMvUmVnaXN0cmF0aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTG9naW4vQ29tcG9uZW50cy9UZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0xvZ2luL1BhZ2VzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9QYWdlcy9SZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01haW5BcHAvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9SZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9SZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9UZXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3B1c2gtbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHMuanMiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQmFja2VuZENsaWVudCIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwicHJvY2VzcyIsIlJFQUNUX0FQUF9CQUNLRU5EX1VSTCIsInVzZUdldFVzZXJJbmZvIiwiYmFja2VuZENsaWVudCIsInVzZUNyZWF0ZUhvb2siLCJ1c2VTZXROb3RpZmljYXRpb25VcmwiLCJ1c2VGb3JjZU5vdGlmaWNhdGlvbiIsInVzZVVwbG9hZFBpY3R1cmVzIiwicHVzaE5vdGlmaWNhdGlvblN1cHBvcnRlZCIsImlzUHVzaE5vdGlmaWNhdGlvblN1cHBvcnRlZCIsInVzZVB1c2hOb3RpZmljYXRpb25zIiwidXNlU3RhdGUiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwidXNlckNvbnNlbnQiLCJzZXRTdXNlckNvbnNlbnQiLCJ1c2VyU3Vic2NyaXB0aW9uIiwic2V0VXNlclN1YnNjcmlwdGlvbiIsInB1c2hTZXJ2ZXJTdWJzY3JpcHRpb25JZCIsInNldFB1c2hTZXJ2ZXJTdWJzY3JpcHRpb25JZCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicmVzcG9uc2UiLCJzZXROb3RpZmljYXRpb25VcmxIYW5kbGVyIiwicmVzcG9uc2VOb3RpZmljYXRpb24iLCJmb3JjZU5vdGlmaWNhdGlvbkhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJyZWdpc3RlclNlcnZpY2VXb3JrZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlYXNvbiIsImdldEV4aXh0aW5nU3Vic2NyaXB0aW9uIiwiZ2V0VXNlclN1YnNjcmlwdGlvbiIsImV4aXN0aW5nU3Vic2NyaXB0aW9uIiwib25DbGlja0Fza1VzZXJQZXJtaXNzaW9uIiwiYXNrVXNlclBlcm1pc3Npb24iLCJjb25zZW50IiwibmFtZSIsIm1lc3NhZ2UiLCJjb2RlIiwib25DbGlja1N1c2JyaWJlVG9QdXNoTm90aWZpY2F0aW9uIiwiY3JlYXRlTm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uIiwic3Vic2NyaXRpb24iLCJlcnIiLCJvbkNsaWNrU2VuZFN1YnNjcmlwdGlvblRvUHVzaFNlcnZlciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJzdWNjZXNzQ2FsbGJhY2siLCJkYXRhIiwiaWQiLCJvbkNsaWNrU2VuZE5vdGlmaWNhdGlvbiIsInVzZUxvZ2luIiwidXNlUmVnaXN0ZXIiLCJ1c2VQYXNzd29yZFJlY292ZXJ5IiwidXNlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDaGVja1VzZXJNYWlsIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJhdXRoZW50aWNhdGVkIiwibGFuZ3VhZ2UiLCJDbGllbnQiLCJ1cmwiLCJtZXRob2QiLCJkZWZhdWx0RGF0YVZhbHVlIiwic2V0RGF0YSIsImxvYWRlZCIsInNldExvYWRlZCIsInN0YXR1cyIsInNldFN0YXR1cyIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZGVmYXVsdFN1Y2Nlc3NDYWxsYmFjayIsImRlZmF1bHRFcnJvckNhbGxiYWNrIiwiZSIsInJlcXVlc3RIYW5kbGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImRlZmF1bHRDYWxsYmFja3MiLCJlcnJvckNhbGxiYWNrIiwiZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uIiwic3RhdHVzUmVzcG9uc2UiLCJzdGFydFVybCIsImdldFBhcmFtZXRlcnMiLCJjYWxsYmFja3MiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwicGFyYW1ldGVyIiwidW5kZWZpbmVkIiwibWFuaXB1bGF0ZWREYXRhIiwidHlwZSIsIlNXSVRDSF9MT0FESU5HX1NUQVRVUyIsImlzTG9hZGluZyIsInBvc3QiLCJIZWFkZXIiLCJOYXZCYXJJbnN0YW5jZSIsIm9uU2VsZWN0IiwiYWN0aXZlS2V5IiwicHJvcHMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwiY2hhbmdlTGFuZ3VhZ2UiLCJBY3Rpb25UeXBlcyIsImxvZ291dCIsIkN1c3RvbURyb3Bkb3duIiwiTGF5b3V0IiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFnZSIsIkxvYWRpbmciLCJib3R0b20iLCJyaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiekluZGV4IiwiTWFpblBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4R3JvdyIsIm1hcmdpbiIsIm1heFdpZHRoIiwiU3RyaW5nVHlwZSIsIlNjaGVtYSIsIlR5cGVzIiwibW9kZWwiLCJNb2RlbCIsInBhc3N3b3JkIiwiaXNSZXF1aXJlZCIsInZlcmlmeVBhc3N3b3JkIiwiYWRkUnVsZSIsInZhbHVlIiwiQ2hhbmdlUGFzc3dvcmQiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInN1Ym1pdEJhY2tlbmRIYW5kbGVyIiwic3VibWl0SGFuZGxlciIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJyZW5kZXJGb3JtIiwicHVzaCIsIlJvdXRlcyIsInJlY292ZXJQYXNzd29yZEZpbmFsTWVzc2FnZSIsInJlbmRlciIsIkxvZ2luRm9ybSIsImxvZ2luUHJvcHMiLCJ1c2VyTWFpbFJlc3BvbnNlIiwiY2hlY2tVc2VyTWFpbEhhbmRsZXIiLCJ1c2VyTWFpbExvYWRlZCIsInVzZXJNYWlsU3RhdHVzIiwiYXN5bmNDaGVja1VzZXJuYW1lIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwicmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uTmF2aWdhdGlvbiIsImxvZ2luSGFuZGxlciIsInBhc3N3b3JkUmVjb3ZlcnkiLCJSZWNvdmVyUGFzc3dvcmRGb3JtIiwicmVjb3ZlcnlLZXkiLCJwYXNzd29yZFJlY292ZXJ5SGFuZGxlciIsInJlY292ZXJQYXNzd29yZEZvcm0iLCJSZWdpc3RyYXRpb25Gb3JtIiwicmVnaXN0cmF0aW9uUHJvcHMiLCJwaWNrZXJEYXRhIiwicmVnaXN0cmF0aW9uSGFuZGxlciIsIlNlbGVjdFBpY2tlciIsIlRleHRGaWVsZCIsImxhYmVsIiwiYWNjZXB0ZXIiLCJyZXN0IiwiTG9naW4iLCJsb2dpblJlc3BvbnNlIiwicG9zdExvZ2luSGFuZGxlciIsInVzZXJJbmZvIiwidXNlckluZm9IYW5kbGVyIiwic2V0IiwidXNlckluZm9TdWNjZXNzQ2FsbGJhY2siLCJsb2dpbiIsImZpbmFsRm9ybURhdGEiLCJnb1RvUmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0ZXJSZXNwb25zZSIsInBvc3RSZWdpc3RlckhhbmRsZXIiLCJyZWdpc3RlciIsIkRhc2hib2FyZCIsInVwbG9hZFBpY3R1cmVIYW5kbGVyIiwib25DaGFuZ2VIYW5kbGVyIiwiZmlsZSIsImJsb2JGaWxlIiwiYmFja2dyb3VuZEltYWdlIiwiQ292ZXJQaWN0dXJlIiwiUHJvZmlsZVBpY3R1cmUiLCJTV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTIiwiVVBEQVRFX1VTRVJfSU5GTyIsIlNXSVRDSF9MQU5HVUFHRSIsInN3aXRjaEF1dGhlbnRpY2F0ZWRTdGF0dXMiLCJ1cGRhdGVVc2VySW5mbyIsInN3aXRjaExhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsIkVycm9yIiwiVGVzdCIsImlzQ29uc2VudEdyYW50ZWQiLCJBcHAiLCJyZWdpc3RyYXRpb25QYWdlIiwiY2hhbmdlUGFzc3dvcmRQYWdlIiwicmVjb3ZlclBhZ2UiLCJkYXNoYm9hcmRQYWdlIiwibG9naW5QYWdlIiwibWFpbkFwcCIsImF1dGhSZXF1aXJlZCIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsIm1lc3NhZ2luZyIsInVzZVB1YmxpY1ZhcGlkS2V5IiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlIiwiaW5pdFJlYWN0STE4bmV4dCIsImluaXQiLCJyZXNvdXJjZXMiLCJlbiIsIkVuZ2xpc2giLCJpdCIsIkl0YWxpYW4iLCJsbmciLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsInRyYW5zbGF0aW9uIiwicHVzaFNlcnZlclB1YmxpY0tleSIsIm5hdmlnYXRvciIsInJlcXVlc3RQZXJtaXNzaW9uIiwic2VuZE5vdGlmaWNhdGlvbiIsImltZyIsInRleHQiLCJ0aXRsZSIsIm9wdGlvbnMiLCJib2R5IiwiaWNvbiIsInZpYnJhdGUiLCJ0YWciLCJpbWFnZSIsImJhZGdlIiwiYWN0aW9ucyIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsInNob3dOb3RpZmljYXRpb24iLCJwdXNoTWFuYWdlciIsInN1YnNjcmliZSIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwiZ2V0U3Vic2NyaXB0aW9uIiwicHVzaFN1YnNjcmlwdGlvbiIsIm1haW4iLCJkYXNoYm9hcmQiLCJjaGFuZ2VQYXNzd29yZCIsImdyYXkiLCJSZWdpc3RyYXRpb25Cb3giLCJzdHlsZWQiLCJkaXYiLCJCb2R5IiwiTWFpbkJ1dHRvbiIsIkJ1dHRvbiIsIlNlY29uZGFyeUJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGtEQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMxQkMsU0FBTyxFQUFFLFNBRGlCO0FBRTFCQyxTQUFPLEVBQUU7QUFDTCxvQkFBZ0I7QUFEWDtBQUZpQixDQUFiLENBQWpCOztBQVFBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FDbEI7QUFBQSxNQURtQkMsS0FDbkIsdUVBRDJCLElBQzNCO0FBQUEsTUFEaUNDLFlBQ2pDLHVFQUQ4QyxJQUM5QztBQUNJLFNBQVFOLGtEQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUNqQkMsV0FBTyxFQUFFSyxrQ0FB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QUFNd0IsS0FBSyxHQUFHLFlBQWQ7QUFDQSxJQUFNckIsZ0JBQWdCLEdBQUcsY0FBekI7QUFDQSxJQUFNc0gsU0FBUyxHQUFHLGdCQUFsQjtBQUNBLElBQU1DLGNBQWMsR0FBRyxxQkFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQO0FBQ0E7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBYjtBQUVPLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFHUkgsSUFIUSxDQUFyQjtBQVdBLElBQU1JLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixxQkFHR0gsSUFISCxDQUFWO0FBV0EsSUFBTUssVUFBVSxHQUFHSCxpRUFBTSxDQUFDSSw2Q0FBRCxDQUFULG9CQUFoQjtBQUtBLElBQU1DLGVBQWUsR0FBR0wsaUVBQU0sQ0FBQ0ksNkNBQUQsQ0FBVCxvQkFBckI7QUFFQSxJQUFNRSxZQUFZLEdBQUdOLGlFQUFNLENBQUNJLDZDQUFELENBQVQsb0JBQWxCLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zL2luZGV4JztcclxuXHJcbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IEJhY2tlbmRDbGllbnQgPSAodG9rZW4gPSBudWxsLCByZXNwb25zZVR5cGU9bnVsbCk9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICAgICAnQXV0aGVudGljYXRpb24nOiB0b2tlblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZVR5cGVcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuZXhwb3J0IHtCYWNrZW5kQ2xpZW50fTtcclxuIiwiaW1wb3J0IHtCYWNrZW5kQ2xpZW50fSBmcm9tIFwiLi4vYXhpb3MtY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlQ3JlYXRlSG9va30gZnJvbSBcIi4uL3VzZUhvb2tcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgdXNlR2V0VXNlckluZm8oKSB7XHJcblxyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy91c2Vycy9nZXQnLCdnZXQnLG51bGwpO1xyXG59IiwiaW1wb3J0IHtCYWNrZW5kQ2xpZW50fSBmcm9tIFwiLi4vYXhpb3MtY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlQ3JlYXRlSG9va30gZnJvbSBcIi4uL3VzZUhvb2tcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgdXNlU2V0Tm90aWZpY2F0aW9uVXJsKCkge1xyXG5cclxuICAgIGNvbnN0IGJhY2tlbmRDbGllbnQgPSBCYWNrZW5kQ2xpZW50KCk7XHJcbiAgICByZXR1cm4gdXNlQ3JlYXRlSG9vayhiYWNrZW5kQ2xpZW50LCcvbm90aWZpY2F0aW9ucy9zZXROb3RpZmljYXRpb25VcmwnLCdwb3N0JyxudWxsKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgdXNlRm9yY2VOb3RpZmljYXRpb24oKSB7XHJcblxyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9ub3RpZmljYXRpb25zL2ZvcmNlTm90aWZpY2F0aW9uJywncG9zdCcsbnVsbCk7XHJcbn1cclxuIiwiaW1wb3J0IHtCYWNrZW5kQ2xpZW50fSBmcm9tIFwiLi4vYXhpb3MtY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlQ3JlYXRlSG9va30gZnJvbSBcIi4uL3VzZUhvb2tcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgdXNlVXBsb2FkUGljdHVyZXMoKSB7XHJcblxyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9wcm9maWxlL2xvYWRmaWxlJywncG9zdCcsbnVsbCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy90aGUgZnVuY3Rpb24gdG8gY2FsbCB0aGUgcHVzaCBzZXJ2ZXI6IGh0dHBzOi8vZ2l0aHViLmNvbS9TcHluYS9wdXNoLW5vdGlmaWNhdGlvbi1kZW1vL2Jsb2IvbWFzdGVyL2Zyb250LWVuZC1yZWFjdC9zcmMvdXRpbHMvaHR0cC5qc1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGlzUHVzaE5vdGlmaWNhdGlvblN1cHBvcnRlZCxcclxuICAgIGFza1VzZXJQZXJtaXNzaW9uLFxyXG4gICAgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLFxyXG4gICAgY3JlYXRlTm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uLFxyXG4gICAgZ2V0VXNlclN1YnNjcmlwdGlvblxyXG59IGZyb20gXCIuLy4uLy4uL3B1c2gtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQge3VzZUZvcmNlTm90aWZpY2F0aW9uLCB1c2VTZXROb3RpZmljYXRpb25Vcmx9IGZyb20gXCIuL3VzZU5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vaW1wb3J0IGFsbCB0aGUgZnVuY3Rpb24gY3JlYXRlZCB0byBtYW5hZ2UgdGhlIHB1c2ggbm90aWZpY2F0aW9uc1xyXG5cclxuY29uc3QgcHVzaE5vdGlmaWNhdGlvblN1cHBvcnRlZCA9IGlzUHVzaE5vdGlmaWNhdGlvblN1cHBvcnRlZCgpO1xyXG4vL2ZpcnN0IHRoaW5nIHRvIGRvOiBjaGVjayBpZiB0aGUgcHVzaCBub3RpZmljYXRpb25zIGFyZSBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVB1c2hOb3RpZmljYXRpb25zKCkge1xyXG4gICAgY29uc3QgW3VzZXJDb25zZW50LCBzZXRTdXNlckNvbnNlbnRdID0gdXNlU3RhdGUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pO1xyXG4gICAgLy90byBtYW5hZ2UgdGhlIHVzZXIgY29uc2VudDogTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gaXMgYSBKYXZhU2NyaXB0IG5hdGl2ZSBmdW5jdGlvbiB0aGF0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcGVybWlzc2lvblxyXG4gICAgLy9XZSBpbml0aWFsaXplIHRoZSB1c2VyQ29uc2VudCB3aXRoIHRoYXQgdmFsdWVcclxuICAgIGNvbnN0IFt1c2VyU3Vic2NyaXB0aW9uLCBzZXRVc2VyU3Vic2NyaXB0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy90byBtYW5hZ2UgdGhlIHVzZSBwdXNoIG5vdGlmaWNhdGlvbiBzdWJzY3JpcHRpb25cclxuICAgIGNvbnN0IFtwdXNoU2VydmVyU3Vic2NyaXB0aW9uSWQsIHNldFB1c2hTZXJ2ZXJTdWJzY3JpcHRpb25JZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy90byBtYW5hZ2UgdGhlIHB1c2ggc2VydmVyIHN1YnNjcmlwdGlvblxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIC8vdG8gbWFuYWdlIGVycm9yc1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvL3RvIG1hbmFnZSBhc3luYyBhY3Rpb25zXHJcblxyXG4gICAgLy9KQUNPUE9cclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXROb3RpZmljYXRpb25VcmxIYW5kbGVyXSA9IHVzZVNldE5vdGlmaWNhdGlvblVybCgpO1xyXG5cclxuICAgIGNvbnN0IFtyZXNwb25zZU5vdGlmaWNhdGlvbiwgZm9yY2VOb3RpZmljYXRpb25IYW5kbGVyXSA9IHVzZUZvcmNlTm90aWZpY2F0aW9uKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHB1c2hOb3RpZmljYXRpb25TdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgICByZWdpc3RlclNlcnZpY2VXb3JrZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGNvbXBsZXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKT0+Y29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBub3QgcmVnaXN0ZXJlZCBmb3IgcmVhc29uXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIC8vaWYgdGhlIHB1c2ggbm90aWZpY2F0aW9ucyBhcmUgc3VwcG9ydGVkLCByZWdpc3RlcnMgdGhlIHNlcnZpY2Ugd29ya2VyXHJcbiAgICAvL3RoaXMgZWZmZWN0IHJ1bnMgb25seSB0aGUgZmlyc3QgcmVuZGVyXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgICBjb25zdCBnZXRFeGl4dGluZ1N1YnNjcmlwdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTdWJzY3JpcHRpb24gPSBhd2FpdCBnZXRVc2VyU3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHNldFVzZXJTdWJzY3JpcHRpb24oZXhpc3RpbmdTdWJzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldEV4aXh0aW5nU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvL1JldHJpZXZlIGlmIHRoZXJlIGlzIGFueSBwdXNoIG5vdGlmaWNhdGlvbiBzdWJzY3JpcHRpb24gZm9yIHRoZSByZWdpc3RlcmVkIHNlcnZpY2Ugd29ya2VyXHJcbiAgICAvLyB0aGlzIHVzZSBlZmZlY3QgcnVucyBvbmx5IGluIHRoZSBmaXJzdCByZW5kZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlZmluZSBhIGNsaWNrIGhhbmRsZXIgdGhhdCBhc2tzIHRoZSB1c2VyIHBlcm1pc3Npb24sXHJcbiAgICAgKiBpdCB1c2VzIHRoZSBzZXRTdXNlckNvbnNlbnQgc3RhdGUsIHRvIHNldCB0aGUgY29uc2VudCBvZiB0aGUgdXNlclxyXG4gICAgICogSWYgdGhlIHVzZXIgZGVuaWVzIHRoZSBjb25zZW50LCBhbiBlcnJvciBpcyBjcmVhdGVkIHdpdGggdGhlIHNldEVycm9yIGhvb2tcclxuICAgICAqL1xyXG4gICAgY29uc3Qgb25DbGlja0Fza1VzZXJQZXJtaXNzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIGFza1VzZXJQZXJtaXNzaW9uKCkudGhlbihjb25zZW50ID0+IHtcclxuICAgICAgICAgICAgc2V0U3VzZXJDb25zZW50KGNvbnNlbnQpO1xyXG4gICAgICAgICAgICBpZiAoY29uc2VudCAhPT0gXCJncmFudGVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnNlbnQgZGVuaWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgZGVuaWVkIHRoZSBjb25zZW50IHRvIHJlY2VpdmUgbm90aWZpY2F0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZWZpbmUgYSBjbGljayBoYW5kbGVyIHRoYXQgY3JlYXRlcyBhIHB1c2ggbm90aWZpY2F0aW9uIHN1YnNjcmlwdGlvbi5cclxuICAgICAqIE9uY2UgdGhlIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkLCBpdCB1c2VzIHRoZSBzZXRVc2VyU3Vic2NyaXB0aW9uIGhvb2tcclxuICAgICAqL1xyXG4gICAgY29uc3Qgb25DbGlja1N1c2JyaWJlVG9QdXNoTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIGNyZWF0ZU5vdGlmaWNhdGlvblN1YnNjcmlwdGlvbigpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcml0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyU3Vic2NyaXB0aW9uKHN1YnNjcml0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBjcmVhdGUgdGhlIG5vdGlmaWNhdGlvbiBzdWJzY3JpcHRpb25cIiwgZXJyLCBcIm5hbWU6XCIsIGVyci5uYW1lLCBcIm1lc3NhZ2U6XCIsIGVyci5tZXNzYWdlLCBcImNvZGU6XCIsIGVyci5jb2RlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVmaW5lIGEgY2xpY2sgaGFuZGxlciB0aGF0IHNlbmRzIHRoZSBwdXNoIHN1c2JjcmlidGlvbiB0byB0aGUgcHVzaCBzZXJ2ZXIuXHJcbiAgICAgKiBPbmNlIHRoZSBzdWJzY3JpcHRpb24gaWNzIGNyZWF0ZWQgb24gdGhlIHNlcnZlciwgaXQgc2F2ZXMgdGhlIGlkIHVzaW5nIHRoZSBob29rIHNldFB1c2hTZXJ2ZXJTdWJzY3JpcHRpb25JZFxyXG4gICAgICovXHJcbiAgICBjb25zdCBvbkNsaWNrU2VuZFN1YnNjcmlwdGlvblRvUHVzaFNlcnZlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy9UT0RPIGNhbWJpbyBjb24gaWwgbWlvIGhvb2tcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlclN1YnNjcmlwdGlvbicsIEpTT04uc3RyaW5naWZ5KHVzZXJTdWJzY3JpcHRpb24pKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKGRhdGEpID0+e1xyXG4gICAgICAgICAgICBzZXRQdXNoU2VydmVyU3Vic2NyaXB0aW9uSWQoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROb3RpZmljYXRpb25VcmxIYW5kbGVyKGZvcm1EYXRhLCB7c3VjY2Vzc0NhbGxiYWNrOiBzdWNjZXNzQ2FsbGJhY2t9KTtcclxuICAgICAgICAvKmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoXCIvc3Vic2NyaXB0aW9uXCIsIHVzZXJTdWJzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQdXNoU2VydmVyU3Vic2NyaXB0aW9uSWQocmVzcG9uc2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KTsqL1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlZmluZSBhIGNsaWNrIGhhbmRsZXIgdGhhdCByZXF1ZXN0IHRoZSBwdXNoIHNlcnZlciB0byBzZW5kIGEgbm90aWZpY2F0aW9uLCBwYXNzaW5nIHRoZSBpZCBvZiB0aGUgc2F2ZWQgc3Vic2NyaXB0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9uQ2xpY2tTZW5kTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IChkYXRhKSA9PntcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcmNlTm90aWZpY2F0aW9uSGFuZGxlcihmb3JtRGF0YSwge3N1Y2Nlc3NDYWxsYmFjazogc3VjY2Vzc0NhbGxiYWNrfSk7XHJcbiAgICAgICAvKiBhd2FpdCBodHRwLmdldChgL3N1YnNjcmlwdGlvbi8ke3B1c2hTZXJ2ZXJTdWJzY3JpcHRpb25JZH1gKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsqL1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYWxsIHRoZSBzdHVmZiBuZWVkZWQgYnkgYSBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvbkNsaWNrQXNrVXNlclBlcm1pc3Npb24sXHJcbiAgICAgICAgb25DbGlja1N1c2JyaWJlVG9QdXNoTm90aWZpY2F0aW9uLFxyXG4gICAgICAgIG9uQ2xpY2tTZW5kU3Vic2NyaXB0aW9uVG9QdXNoU2VydmVyLFxyXG4gICAgICAgIHB1c2hTZXJ2ZXJTdWJzY3JpcHRpb25JZCxcclxuICAgICAgICBvbkNsaWNrU2VuZE5vdGlmaWNhdGlvbixcclxuICAgICAgICB1c2VyQ29uc2VudCxcclxuICAgICAgICBwdXNoTm90aWZpY2F0aW9uU3VwcG9ydGVkLFxyXG4gICAgICAgIHVzZXJTdWJzY3JpcHRpb24sXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgbG9hZGluZ1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge0JhY2tlbmRDbGllbnR9IGZyb20gXCIuL2F4aW9zLWNsaWVudFwiO1xyXG5pbXBvcnQge3VzZUNyZWF0ZUhvb2t9IGZyb20gXCIuL3VzZUhvb2tcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgdXNlTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9sb2dpbicsJ3Bvc3QnLG51bGwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gIHVzZVJlZ2lzdGVyKCkge1xyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9yZWdpc3RlcicsJ3Bvc3QnLG51bGwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gIHVzZVBhc3N3b3JkUmVjb3ZlcnkoKSB7XHJcbiAgICBjb25zdCBiYWNrZW5kQ2xpZW50ID0gQmFja2VuZENsaWVudCgpO1xyXG4gICAgcmV0dXJuIHVzZUNyZWF0ZUhvb2soYmFja2VuZENsaWVudCwnL3JlY292ZXJ5JywncG9zdCcsZmFsc2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gIHVzZUNoYW5nZVBhc3N3b3JkKCkge1xyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9wYXNzd29yZGNoYW5nZScsJ3Bvc3QnLGZhbHNlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICB1c2VDaGVja1VzZXJNYWlsKCkge1xyXG4gICAgY29uc3QgYmFja2VuZENsaWVudCA9IEJhY2tlbmRDbGllbnQoKTtcclxuICAgIHJldHVybiB1c2VDcmVhdGVIb29rKGJhY2tlbmRDbGllbnQsJy9jaGVja3VzZXInLCdwb3N0JyxmYWxzZSk7XHJcbn1cclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvb2tpZXMoKXtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuICAgIGxldCBhY2Nlc3NUb2tlbiA9IChjb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKSk/IGNvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpIDogbnVsbDtcclxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSBjb29raWVzLmdldCgnYXV0aGVudGljYXRlZCcpO1xyXG4gICAgY29uc3QgdXNlciA9IGNvb2tpZXMuZ2V0KCd1c2VyJyk7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGNvb2tpZXMuZ2V0KCdsYW5ndWFnZScpO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIFthY2Nlc3NUb2tlbiwgYXV0aGVudGljYXRlZCwgdXNlciwgbGFuZ3VhZ2VdO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tIFwiLi8uLi9SZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7U1dJVENIX0xPQURJTkdfU1RBVFVTfSBmcm9tIFwiLi4vUmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUhvb2soQ2xpZW50LCB1cmwsIG1ldGhvZCwgZGVmYXVsdERhdGFWYWx1ZSl7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZGVmYXVsdERhdGFWYWx1ZSk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSB1cmwgKyBcIiBTVUNDRVNTXCI7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB1cmwgKyBcIiBFUlJPUlwiO1xyXG4gICAgY29uc3QgZGVmYXVsdFN1Y2Nlc3NDYWxsYmFjayA9ICgpID0+IHsvKmNvbnNvbGUubG9nKHN1Y2Nlc3NNZXNzYWdlKTsqL307XHJcbiAgICBjb25zdCBkZWZhdWx0RXJyb3JDYWxsYmFjayA9IChlKSA9PiB7Lypjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSwgZSk7Ki99O1xyXG4gICAgbGV0IHJlcXVlc3RIYW5kbGVyO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRDYWxsYmFja3MgPSB7XHJcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrOiBkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrLFxyXG4gICAgICAgIGVycm9yQ2FsbGJhY2s6IGRlZmF1bHRFcnJvckNhbGxiYWNrLFxyXG4gICAgICAgIGRhdGFNYW5pcHVsYXRpb25GdW5jdGlvbjogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc3RhdHVzUmVzcG9uc2UgPSBudWxsO1xyXG4gICAgaWYoc3RhdHVzIT09bnVsbCl7XHJcbiAgICAgICAgc3RhdHVzUmVzcG9uc2UgPSAoc3RhdHVzPT09MjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICBjYXNlIFwiZ2V0XCI6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRVcmwgPSB1cmw7XHJcbiAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyID0gKGdldFBhcmFtZXRlcnMsIGNhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2V0IFBhcmFtZXRlcnNcIiwgZ2V0UGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGdldFBhcmFtZXRlcnMpKXtcclxuICAgICAgICAgICAgICAgICAgICBnZXRQYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtZXRlcik9Pnt1cmwgKz0gXCIvXCIgKyBwYXJhbWV0ZXIgfSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihnZXRQYXJhbWV0ZXJzIT09dW5kZWZpbmVkICYmIGdldFBhcmFtZXRlcnMhPT1udWxsKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCs9XCIvXCIrZ2V0UGFyYW1ldGVycztcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihnZXRQYXJhbWV0ZXJzPT09bnVsbCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHZXQgVXJsXCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2xpZW50LmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EYXRhIE1hbmlwdWxhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYW5pcHVsYXRlZERhdGEgPSBjYWxsYmFja3MuZGF0YU1hbmlwdWxhdGlvbkZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShtYW5pcHVsYXRlZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIENhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vycm9yQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJcyBjYWxsYmFjayB1bmRlZmluZWRcIiwgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2s9PT11bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZXJyb3JDYWxsYmFjayE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vQ2xlYXJpbmcgdGhlIHVybCBzbyB0aGUgdXJsIGNhbiBiZSB1c2VkIGFmdGVyd2FyZHNcclxuICAgICAgICAgICAgICAgIHVybCA9IHN0YXJ0VXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbZGF0YSwgcmVxdWVzdEhhbmRsZXIsIGxvYWRlZCwgc3RhdHVzUmVzcG9uc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwicG9zdFwiOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXIgPSAoZm9ybURhdGEsIGNhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlNXSVRDSF9MT0FESU5HX1NUQVRVUywgaXNMb2FkaW5nOnRydWV9KTtcclxuICAgICAgICAgICAgICAgIENsaWVudC5wb3N0KHVybCwgZm9ybURhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EYXRhIE1hbmlwdWxhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hbmlwdWxhdGVkRGF0YSA9IGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTWFuaXB1bGF0aW5nIGRhdGFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNldHRpbmcgZGF0YVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIENhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2shPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiU3VjY2VzcyBjYWxsYmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRlZmF1bHQgc3VjY2VzcyBjYWxsYmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRXJyb3JDYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFja3MuZXJyb3JDYWxsYmFjayE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZXJyb3JDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3MuZXJyb3JDYWxsYmFjayhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoZS5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpTV0lUQ0hfTE9BRElOR19TVEFUVVMsIGlzTG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIFtkYXRhLHJlcXVlc3RIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c1Jlc3BvbnNlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0VXJsID0gdXJsO1xyXG4gICAgICAgICAgICByZXF1ZXN0SGFuZGxlciA9IChnZXRQYXJhbWV0ZXJzLCBjYWxsYmFja3MgPSBkZWZhdWx0Q2FsbGJhY2tzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBQYXJhbWV0ZXJzXCIsIGdldFBhcmFtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShnZXRQYXJhbWV0ZXJzKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbWV0ZXIpPT57dXJsICs9IFwiL1wiICsgcGFyYW1ldGVyIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2V0UGFyYW1ldGVycyE9PXVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwrPVwiL1wiK2dldFBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdldCBVcmxcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBDbGllbnQuZGVsZXRlKHVybClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGEgTWFuaXB1bGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hbmlwdWxhdGVkRGF0YSA9IGNhbGxiYWNrcy5kYXRhTWFuaXB1bGF0aW9uRnVuY3Rpb24ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG1hbmlwdWxhdGVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLnN1Y2Nlc3NDYWxsYmFjayE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFja3Muc3VjY2Vzc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKGUucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9FcnJvckNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSXMgY2FsbGJhY2sgdW5kZWZpbmVkXCIsIGNhbGxiYWNrcy5lcnJvckNhbGxiYWNrPT09dW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2shPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2tzLmVycm9yQ2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL0NsZWFyaW5nIHRoZSB1cmwgc28gdGhlIHVybCBjYW4gYmUgdXNlZCBhZnRlcndhcmRzXHJcbiAgICAgICAgICAgICAgICB1cmwgPSBzdGFydFVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW2RhdGEsIHJlcXVlc3RIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c1Jlc3BvbnNlXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vLi4vY3NzL2hlYWRlci5jc3MnO1xyXG5pbXBvcnQge0J1dHRvblRvb2xiYXIsIENvbCwgQ29udGFpbmVyLCBEcm9wZG93biwgR3JpZCwgSWNvbiwgTmF2LCBOYXZiYXIsIFJvd30gZnJvbSBcInJzdWl0ZVwiO1xyXG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tIFwiLi4vUmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE5hdkJhckluc3RhbmNlIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5hdkJhckluc3RhbmNlKHsgb25TZWxlY3QsIGFjdGl2ZUtleSwgLi4ucHJvcHMgfSl7XHJcblxyXG4gICAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSBjb2RlID0+IHtcclxuICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGNvZGUpO1xyXG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLnN3aXRjaExhbmd1YWdlKGNvZGUpKVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuXHJcbiAgICBjb25zdCBDdXN0b21Ecm9wZG93biA9ICh7IC4uLnByb3BzIH0pID0+IChcclxuICAgICAgICA8RHJvcGRvd24gey4uLnByb3BzfT5cclxuICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZSgnaXQnKX0gPiBJdDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZSgnZW4nKX0gPiBFbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJTVUlURVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQm9keT5cclxuICAgICAgICAgICAgICAgIDxOYXYgb25TZWxlY3Q9e29uU2VsZWN0fSBhY3RpdmVLZXk9e2FjdGl2ZUtleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGV2ZW50S2V5PVwiMVwiIGljb249ezxJY29uIGljb249XCJob21lXCIgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gZXZlbnRLZXk9XCIyXCI+TmV3czwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGV2ZW50S2V5PVwiM1wiPlByb2R1Y3RzPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPXt0KCdjb21wYW55Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cIjRcIj57dCgnY29tcGFueScpfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCI1XCI+VGVhbTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCI2XCI+Q29udGFjdDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IHB1bGxSaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tRHJvcGRvd24gdGl0bGU9XCJMYW5ndWFnZVwiIHRyaWdnZXI9XCJob3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGljb249ezxJY29uIGljb249XCJjb2dcIiAvPn0+U2V0dGluZ3M8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkJvZHk+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICApO1xyXG5cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2NnB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDB2dycsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnBhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TG9hZGVyfSBmcm9tIFwicnN1aXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCl7XHJcbiAgICByZXR1cm4gPExvYWRlciBzdHlsZT17e2JvdHRvbTowLCByaWdodDowLCBtYXJnaW5Cb3R0b206MTUsIG1hcmdpblJpZ2h0OjE1LCBwb3NpdGlvbjogXCJmaXhlZFwiLCB6SW5kZXg6XCI5OVwiIH19IGludmVyc2Ugc2l6ZT1cIm1kXCIvPjtcclxufSIsImltcG9ydCB7Qm9keX0gZnJvbSBcIi4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7TmF2YmFyLCBOYXYsIERyb3Bkb3duLCBJY29ufSBmcm9tICdyc3VpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2Uoe3BhZ2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkJhckluc3RhbmNlIC8+XHJcbiAgICAgICAgICAgIDxtYWluIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwieWVsbG93XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA5MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IE5hdkJhckluc3RhbmNlID0gKHsgb25TZWxlY3QsIGFjdGl2ZUtleSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJTVUlURVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQm9keT5cclxuICAgICAgICAgICAgICAgIDxOYXYgb25TZWxlY3Q9e29uU2VsZWN0fSBhY3RpdmVLZXk9e2FjdGl2ZUtleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGV2ZW50S2V5PVwiMVwiIGljb249ezxJY29uIGljb249XCJob21lXCIgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gZXZlbnRLZXk9XCIyXCI+TmV3czwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGV2ZW50S2V5PVwiM1wiPlByb2R1Y3RzPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGl0bGU9XCJBYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cIjRcIj5Db21wYW55PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cIjVcIj5UZWFtPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cIjZcIj5Db250YWN0PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBpY29uPXs8SWNvbiBpY29uPVwiY29nXCIgLz59PlNldHRpbmdzPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L05hdmJhci5Cb2R5PlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHtCdXR0b24sIEJ1dHRvblRvb2xiYXIsIENvbnRyb2xMYWJlbCwgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSBcInJzdWl0ZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7U2NoZW1hfSBmcm9tICdyc3VpdGUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQge01haW5CdXR0b24sIFJlZ2lzdHJhdGlvbkJveH0gZnJvbSBcIi4uLy4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZUNoYW5nZVBhc3N3b3JkfSBmcm9tIFwiLi4vLi4vQmFja2VuZC91c2VCYWNrZW5kXCI7XHJcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5cclxuY29uc3QgeyBTdHJpbmdUeXBlIH0gPSBTY2hlbWEuVHlwZXM7XHJcblxyXG5jb25zdCBtb2RlbCA9IFNjaGVtYS5Nb2RlbCh7XHJcbiAgICBwYXNzd29yZDogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyksXHJcbiAgICB2ZXJpZnlQYXNzd29yZDogU3RyaW5nVHlwZSgpXHJcbiAgICAgICAgLmFkZFJ1bGUoKHZhbHVlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBkYXRhLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sICdUaGUgdHdvIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKVxyXG4gICAgICAgIC5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhbmdlUGFzc3dvcmQoKXtcclxuXHJcbiAgICBjb25zdCBbZm9ybVZhbHVlLCBzZXRGb3JtVmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzdWJtaXRCYWNrZW5kSGFuZGxlciwgbG9hZGVkLCBzdGF0dXNdID0gdXNlQ2hhbmdlUGFzc3dvcmQoKTtcclxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZm9ybVZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtVmFsdWUpLmZvckVhY2goKGtleSk9PiBmb3JtRGF0YS5hcHBlbmQoa2V5LCBmb3JtVmFsdWVba2V5XSApKTtcclxuICAgICAgICBzdWJtaXRCYWNrZW5kSGFuZGxlcihmb3JtRGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHJlbmRlckZvcm0gPSAoPEZvcm1cclxuICAgICAgICBtb2RlbD17bW9kZWx9XHJcbiAgICAgICAgZm9ybVZhbHVlPXtmb3JtVmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e3NldEZvcm1WYWx1ZX1cclxuICAgICAgICBvblN1Ym1pdD17KCk9PnN1Ym1pdEhhbmRsZXIoZm9ybVZhbHVlKX0+XHJcbiAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbD1cIk5ldyBQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwidmVyaWZ5UGFzc3dvcmRcIiBsYWJlbD1cIlR5cGUgbmV3IFBhc3N3b3JkIGFnYWluXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICA8QnV0dG9uVG9vbGJhcj5cclxuICAgICAgICAgICAgPE1haW5CdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgPlNhdmU8L01haW5CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKT0+IGhpc3RvcnkucHVzaChSb3V0ZXMubG9naW4pfT5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cclxuICAgIDwvRm9ybT4pO1xyXG5cclxuICAgIGNvbnN0IHJlY292ZXJQYXNzd29yZEZpbmFsTWVzc2FnZSA9ICA8cD5QYXNzd29yZCBoYXMgYmVlbiBjaGFuZ2VkPC9wPjtcclxuICAgIGNvbnN0IHJlbmRlciA9IChzdGF0dXMpID8gcmVjb3ZlclBhc3N3b3JkRmluYWxNZXNzYWdlIDogcmVuZGVyRm9ybTtcclxuXHJcbiAgICByZXR1cm4gKDxSZWdpc3RyYXRpb25Cb3g+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPkNoYW5nZSBwYXNzd29yZDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3JlbmRlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVnaXN0cmF0aW9uQm94Pik7XHJcblxyXG59IiwiaW1wb3J0IHtCdXR0b24sIEJ1dHRvblRvb2xiYXIsIENvbnRyb2xMYWJlbCwgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgSGVscEJsb2NrLCBTY2hlbWF9IGZyb20gXCJyc3VpdGVcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGluaywgdXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtNYWluQnV0dG9uLCBSZWdpc3RyYXRpb25Cb3gsIFNlY29uZGFyeUJ1dHRvbn0gZnJvbSBcIi4uLy4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBSb3V0ZXMgZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHt1c2VDaGFuZ2VQYXNzd29yZCwgdXNlQ2hlY2tVc2VyTWFpbCwgdXNlTG9naW59IGZyb20gXCIuLi8uLi9CYWNrZW5kL3VzZUJhY2tlbmRcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi9UZXh0RmllbGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7bG9naW5Qcm9wc30pe1xyXG5cclxuICAgIGNvbnN0IHsgU3RyaW5nVHlwZSB9ID0gU2NoZW1hLlR5cGVzO1xyXG4gICAgY29uc3QgW3VzZXJNYWlsUmVzcG9uc2UsIGNoZWNrVXNlck1haWxIYW5kbGVyLCB1c2VyTWFpbExvYWRlZCwgdXNlck1haWxTdGF0dXNdID0gIHVzZUNoZWNrVXNlck1haWwoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhc3luY0NoZWNrVXNlcm5hbWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIG5hbWUpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiY2F6em9cIjtcclxuXHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0ge3N1Y2Nlc3NDYWxsYmFjazogKCk9PiByZXNwb25zZSA9IHJlc3BvbnNlICsgcmVzcG9uc2UsIGVycm9yQ2FsbGJhY2s6ICgpPT4gcmVzcG9uc2U9IGZhbHNlIH07XHJcbiAgICAgICAgY2hlY2tVc2VyTWFpbEhhbmRsZXIoZm9ybURhdGEsIGNhbGxiYWNrcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIG1haWwgY2hlY2tlZFwiLCByZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgbW9kZWwgPSBTY2hlbWEuTW9kZWwoe1xyXG4gICAgICAgIGVtYWlsOiBTdHJpbmdUeXBlKClcclxuICAgICAgICAgICAgLy8gLmFkZFJ1bGUoKHZhbHVlLCBkYXRhKSA9PiB7cmV0dXJuIGFzeW5jQ2hlY2tVc2VybmFtZSh2YWx1ZSk7fSwgJ0R1cGxpY2F0ZSB1c2VybmFtZScpXHJcbiAgICAgICAgICAgIC5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXHJcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2UsIHN1Ym1pdEJhY2tlbmRIYW5kbGVyLCBsb2FkZWQsIHN0YXR1c10gPSB1c2VMb2dpbigpO1xyXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChmb3JtVmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1WYWx1ZSkuZm9yRWFjaCgoa2V5KT0+IGZvcm1EYXRhLmFwcGVuZChrZXksIGZvcm1WYWx1ZVtrZXldICkpO1xyXG4gICAgICAgIHN1Ym1pdEJhY2tlbmRIYW5kbGVyKGZvcm1EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gKGxvZ2luUHJvcHMucmVnaXN0cmF0aW9uKSA/IDxTZWNvbmRhcnlCdXR0b24gYXBwZWFyYW5jZT1cImRlZmF1bHRcIiBvbkNsaWNrPXtsb2dpblByb3BzLnJlZ2lzdHJhdGlvbk5hdmlnYXRpb259ID5SZWdpc3RlcjwvU2Vjb25kYXJ5QnV0dG9uPiA6IDw+PC8+O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWdpc3RyYXRpb25Cb3g+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+U2lnbiBpbjwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXttb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWU9e2Zvcm1WYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Rm9ybVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKT0+bG9naW5Qcm9wcy5sb2dpbkhhbmRsZXIoZm9ybVZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5FbWFpbDwvQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgY2hlY2tBc3luYyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+PHNwYW4+UGFzc3dvcmQ8L3NwYW4+IDxMaW5rIHRvPXtSb3V0ZXMucGFzc3dvcmRSZWNvdmVyeX0+Rm9yZ290IHBhc3N3b3JkPzwvTGluaz4gPC9kaXY+PC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+TG9naW48L01haW5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCIgb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmNoYW5nZVBhc3N3b3JkKX0+Q2FuY2VsPC9TZWNvbmRhcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVnaXN0cmF0aW9uQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlZ2lzdHJhdGlvbkJveD4pXHJcbn0iLCJpbXBvcnQge0J1dHRvbiwgQnV0dG9uVG9vbGJhciwgQ29udHJvbExhYmVsLCBGb3JtLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBIZWxwQmxvY2t9IGZyb20gXCJyc3VpdGVcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1NjaGVtYX0gZnJvbSAncnN1aXRlJztcclxuaW1wb3J0IHtSZWdpc3RyYXRpb25Cb3h9IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL0N1c3RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHt1c2VQYXNzd29yZFJlY292ZXJ5fSBmcm9tIFwiLi4vLi4vQmFja2VuZC91c2VCYWNrZW5kXCI7XHJcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3ZlclBhc3N3b3JkRm9ybSgpe1xyXG4gICAgY29uc3QgeyBTdHJpbmdUeXBlIH0gPSBTY2hlbWEuVHlwZXM7XHJcbiAgICBjb25zdCBtb2RlbCA9IFNjaGVtYS5Nb2RlbCh7XHJcbiAgICAgICAgcmVjb3ZlcnlLZXk6IFN0cmluZ1R5cGUoKVxyXG4gICAgICAgICAgICAuaXNSZXF1aXJlZCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHBhc3N3b3JkUmVjb3ZlcnlIYW5kbGVyXSA9IHVzZVBhc3N3b3JkUmVjb3ZlcnkoKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkUmVjb3ZlcnkgPSAoZm9ybVZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtVmFsdWUpLmZvckVhY2goKGtleSk9PiBmb3JtRGF0YS5hcHBlbmQoa2V5LCBmb3JtVmFsdWVba2V5XSApKTtcclxuICAgICAgICBwYXNzd29yZFJlY292ZXJ5SGFuZGxlcihmb3JtRGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCByZWNvdmVyUGFzc3dvcmRGb3JtID0gKDxGb3JtXHJcbiAgICAgICAgbW9kZWw9e21vZGVsfVxyXG4gICAgICAgIGZvcm1WYWx1ZT17Zm9ybVZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZm9ybVZhbHVlKT0+e2NvbnNvbGUubG9nKGZvcm1WYWx1ZSk7IHNldEZvcm1WYWx1ZShmb3JtVmFsdWUpIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eygpPT5wYXNzd29yZFJlY292ZXJ5KGZvcm1WYWx1ZSl9PlxyXG4gICAgICAgIDxUZXh0RmllbGQgbmFtZT1cInJlY292ZXJ5S2V5XCIgbGFiZWw9XCJZb3VyIGVtYWlsIG9yIE1vcmVUaGFuQUpvYiB1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgPEJ1dHRvblRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCIgb25DbGljaz17KCk9PiBoaXN0b3J5LnB1c2goUm91dGVzLmxvZ2luKX0+TG9naW48L0J1dHRvbj5cclxuICAgICAgICA8L0J1dHRvblRvb2xiYXI+XHJcbiAgICA8L0Zvcm0+KTtcclxuXHJcbiAgICBjb25zdCByZWNvdmVyUGFzc3dvcmRGaW5hbE1lc3NhZ2UgPSAgPHA+QW4gZW1haWwgaGFzIGJlZW4gc2VudC4gUGxlYXNlLCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucy48L3A+O1xyXG4gICAgY29uc3QgcmVuZGVyID0gKHN0YXR1cykgPyByZWNvdmVyUGFzc3dvcmRGaW5hbE1lc3NhZ2UgOiByZWNvdmVyUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgIHJldHVybiAoPFJlZ2lzdHJhdGlvbkJveD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+UmVjb3ZlciBQYXNzd29yZDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWdpc3RyYXRpb25Cb3g+KTtcclxuXHJcbn0iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFNlbGVjdFBpY2tlcixcclxuICAgIEJ1dHRvblRvb2xiYXIsXHJcbiAgICBDb250cm9sTGFiZWwsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGb3JtR3JvdXAsXHJcbiAgICBIZWxwQmxvY2ssXHJcbiAgICBTY2hlbWFcclxufSBmcm9tIFwicnN1aXRlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNYWluQnV0dG9uLCBSZWdpc3RyYXRpb25Cb3gsIFNlY29uZGFyeUJ1dHRvbn0gZnJvbSBcIi4uLy4uL3N0eWxlZENvbXBvbmVudHMvQ3VzdG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuL1RleHRGaWVsZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uRm9ybSh7cmVnaXN0cmF0aW9uUHJvcHN9KXtcclxuICAgIGNvbnN0IHBpY2tlckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSXRhbGlhbm9cIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0LUlUXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJlbi1VU1wiLFxyXG4gICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICBjb25zdCB7IFN0cmluZ1R5cGUgfSA9IFNjaGVtYS5UeXBlcztcclxuXHJcblxyXG4gICAgY29uc3QgbW9kZWwgPSBTY2hlbWEuTW9kZWwoe1xyXG4gICAgICAgIGVtYWlsOiBTdHJpbmdUeXBlKCkuaXNSZXF1aXJlZCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKSxcclxuICAgICAgICBwYXNzd29yZDogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChmb3JtVmFsdWUpID0+XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHJlZ2lzdHJhdGlvblByb3BzLnJlZ2lzdHJhdGlvbkhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVnaXN0cmF0aW9uQm94PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgbW9kZWw9e21vZGVsfVxyXG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlPXtmb3JtVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Rm9ybVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eygpPT5zdWJtaXRIYW5kbGVyKGZvcm1WYWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwiZW1haWxcIiBsYWJlbD1cIkVtYWlsXCIgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwibGFuZ3VhZ2VcIiBsYWJlbD1cIlNlbGVjdCBMYW5ndWFnZVwiIGFjY2VwdGVyPXtTZWxlY3RQaWNrZXJ9IGRhdGE9e3BpY2tlckRhdGF9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbkJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpPT5yZWdpc3RyYXRpb25Qcm9wcy5yZWdpc3RyYXRpb25IYW5kbGVyKGZvcm1WYWx1ZSl9PlN1Ym1pdDwvTWFpbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCI+Q2FuY2VsPC9TZWNvbmRhcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvblRvb2xiYXI+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9SZWdpc3RyYXRpb25Cb3g+KTtcclxufVxyXG4iLCJpbXBvcnQge0NvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSBcInJzdWl0ZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmllbGQoeyBuYW1lLCBsYWJlbCwgYWNjZXB0ZXIsIC4uLnJlc3QgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPntsYWJlbH0gPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPXtuYW1lfSBhY2NlcHRlcj17YWNjZXB0ZXJ9IHsuLi5yZXN0fSAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VIaXN0b3J5fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZUxvZ2lufSBmcm9tIFwiLi4vLi4vQmFja2VuZC91c2VCYWNrZW5kXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSBcIi4uLy4uL1JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7dXNlR2V0VXNlckluZm99IGZyb20gXCIuLi8uLi9CYWNrZW5kL2hvb2tzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpe1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgW2xvZ2luUmVzcG9uc2UsIHBvc3RMb2dpbkhhbmRsZXJdID0gdXNlTG9naW4oKTtcclxuICAgIGNvbnN0IFt1c2VySW5mbywgdXNlckluZm9IYW5kbGVyXSA9IHVzZUdldFVzZXJJbmZvKCk7XHJcbiAgICAvL2NvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuICAgIGNvbnN0IHthdXRoZW50aWNhdGVkLCB1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBkYXRhKTtcclxuICAgICAgICBjb29raWVzLnNldCgnYXV0aGVudGljYXRlZCcsIHRydWUpO1xyXG4gICAgICAgIGRpc3BhdGNoKEFjdGlvblR5cGVzLnN3aXRjaEF1dGhlbnRpY2F0ZWRTdGF0dXMoKSk7XHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZm8gY2FsbGJhY2tcIixkYXRhKTtcclxuICAgICAgICBjb29raWVzLnNldCgndXNlcicsIGRhdGEpO1xyXG4gICAgICAgIC8vY29va2llcy5zZXQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9uVHlwZXMudXBkYXRlVXNlckluZm8oZGF0YSkpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChSb3V0ZXMuZGFzaGJvYXJkKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IChmb3JtRGF0YSkgPT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBmaW5hbEZvcm1EYXRhID0gIG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXkpPT4gZmluYWxGb3JtRGF0YS5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldICkpO1xyXG4gICAgICAgIHBvc3RMb2dpbkhhbmRsZXIoZmluYWxGb3JtRGF0YSwge3N1Y2Nlc3NDYWxsYmFjazogc3VjY2Vzc0NhbGxiYWNrfSk7XHJcbiAgICAgICAgdXNlckluZm9IYW5kbGVyKGZvcm1EYXRhLmVtYWlsLHtzdWNjZXNzQ2FsbGJhY2s6IHVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ29Ub1JlZ2lzdHJhdGlvbiA9ICgpID0+IGhpc3RvcnkucHVzaChSb3V0ZXMucmVnaXN0cmF0aW9uKTtcclxuXHJcblxyXG4gICAgY29uc3QgbG9naW5Qcm9wcyA9IHtcclxuICAgICAgICByZWdpc3RyYXRpb246IHRydWUsXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uTmF2aWdhdGlvbiA6IGdvVG9SZWdpc3RyYXRpb24sXHJcbiAgICAgICAgbG9naW5IYW5kbGVyOiBsb2dpblxyXG5cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChhdXRoZW50aWNhdGVkKSA/IDxkaXY+e3QoJ0FscmVhZHkgbG9nZ2VkJyl9IDwvZGl2PiA6IDxMb2dpbkZvcm0gbG9naW5Qcm9wcz17bG9naW5Qcm9wc30vPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSZWdpc3Rlcn0gZnJvbSBcIi4uLy4uL0JhY2tlbmQvdXNlQmFja2VuZFwiO1xyXG5pbXBvcnQge3VzZUhpc3Rvcnl9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gXCIuLi9Db21wb25lbnRzL1JlZ2lzdHJhdGlvbkZvcm1cIjtcclxuaW1wb3J0ICogYXMgUm91dGVzIGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RyYXRpb24oKXtcclxuXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyUmVzcG9uc2UsIHBvc3RSZWdpc3RlckhhbmRsZXJdID0gdXNlUmVnaXN0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKFJvdXRlcy5sb2dpbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gKGZvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmluYWxGb3JtRGF0YSA9ICBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5KT0+IGZpbmFsRm9ybURhdGEuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSApKTtcclxuICAgICAgICBwb3N0UmVnaXN0ZXJIYW5kbGVyKGZpbmFsRm9ybURhdGEsIHtzdWNjZXNzQ2FsbGJhY2s6IHN1Y2Nlc3NDYWxsYmFjayB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uUHJvcHMgPSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uSGFuZGxlciA6IHJlZ2lzdGVyLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKCA8UmVnaXN0cmF0aW9uRm9ybSByZWdpc3RyYXRpb25Qcm9wcz17cmVnaXN0cmF0aW9uUHJvcHN9Lz4pO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7VXBsb2FkZXIsIEljb259IGZyb20gXCJyc3VpdGVcIjtcclxuaW1wb3J0IHt1c2VHZXRVc2VySW5mb30gZnJvbSBcIi4uL0JhY2tlbmQvaG9va3MvVXNlckluZm9cIjtcclxuaW1wb3J0IHt1c2VVcGxvYWRQaWN0dXJlc30gZnJvbSBcIi4uL0JhY2tlbmQvaG9va3MvdXNlUHJvZmlsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCl7XHJcblxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlKTtcclxuICAgIGNvbnN0W3Jlc3BvbnNlLCB1cGxvYWRQaWN0dXJlSGFuZGxlcl0gPSB1c2VVcGxvYWRQaWN0dXJlcygpO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmQgdXNlclwiLHVzZXIpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChmaWxlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLmJsb2JGaWxlKTtcclxuICAgICAgICBkYXRhLmVtYWlsID0gdXNlci5lbWFpbDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpPT4gIHsgZm9ybURhdGEuYXBwZW5kKGtleSxKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pKTt9KTtcclxuICAgICAgICB1cGxvYWRQaWN0dXJlSGFuZGxlcihmb3JtRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MjUwLCB3aWR0aDpcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOlwiZ3JlZW5cIiwgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYi9iNi9JbWFnZV9jcmVhdGVkX3dpdGhfYV9tb2JpbGVfcGhvbmUucG5nLzEyMDBweC1JbWFnZV9jcmVhdGVkX3dpdGhfYV9tb2JpbGVfcGhvbmUucG5nKWB9fT5cclxuICAgICAgICAgICAgPENvdmVyUGljdHVyZSAvPlxyXG4gICAgICAgICAgICA8UHJvZmlsZVBpY3R1cmUgLz5cclxuICAgICAgICAgICAgPFVwbG9hZGVyIGF1dG9VcGxvYWQ9e2ZhbHNlfSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSBhY3Rpb249XCIvL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCIgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjYW1lcmEtcmV0cm8nIHNpemU9XCJsZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9VcGxvYWRlcj5cclxuICAgICAgICAgICAgPGRpdj57dXNlciAmJiB1c2VyLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NTAwLCB3aWR0aDpcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOlwiY3lhblwifX0+XHJcbiAgICAgICAgICAgIDxoMz5JbmZvPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjMwMCwgd2lkdGg6XCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjpcImdyZXlcIn19PlxyXG4gICAgICAgICAgICA8aDM+UHJvamVjdHM8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdmVyUGljdHVyZSgpe1xyXG4gICAgcmV0dXJuIDxkaXY+UGljdHVyZTwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlUGljdHVyZSgpe1xyXG4gICAgcmV0dXJuIDxkaXY+UHJvZmlsZSBQaWN0dXJlPC9kaXY+XHJcbn1cclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTID0gXCJTV0lUQ0hfQVVUSEVOVElDQVRJT05fU1RBVFVTXCI7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTE9BRElOR19TVEFUVVMgPSBcIlNXSVRDSF9MT0FESU5HX1NUQVRVU1wiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfSU5GTyA9IFwiVVBEQVRFX1VTRVJfSU5GT1wiO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0xBTkdVQUdFID0gXCJTV0lUQ0hfTEFOR1VBR0VcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoQXV0aGVudGljYXRlZFN0YXR1cyA9ICgpID0+e1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUyxcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJJbmZvID0gKGRhdGEpID0+e1xyXG4gICAgY29uc29sZS5sb2coXCJVcGRhdGluZyB1c2VyIGluZm8gdG9cIiwgZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVVBEQVRFX1VTRVJfSU5GTyxcclxuICAgICAgICB1c2VyOiBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+e1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgICBjb29raWVzLnNldCgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN3aXRjaCBsYW5ndWFnZSB0b1wiLCBsYW5ndWFnZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU1dJVENIX0xBTkdVQUdFLFxyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgdXNlQ29va2llcyBmcm9tIFwiLi4vQmFja2VuZC91c2VDb29raWVzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmNvbnN0IFthY2Nlc3NUb2tlbiwgYXV0aGVudGljYXRlZCwgdXNlciwgbGFuZ3VhZ2VdID0gdXNlQ29va2llcygpO1xyXG5cclxuY29uc29sZS5sb2coXCJyZWR1Y2VyIGxhbmd1YWdlXCIsIGxhbmd1YWdlKTtcclxuY29uc3QgZGVmYXVsdExhbmd1YWdlID0gKGxhbmd1YWdlIT09dW5kZWZpbmVkKSA/IGxhbmd1YWdlIDogXCJlblwiO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7YXV0aGVudGljYXRlZDphdXRoZW50aWNhdGVkLCB1c2VyOnVzZXIsIGlzTG9hZGluZzpmYWxzZSwgbGFuZ3VhZ2U6ZGVmYXVsdExhbmd1YWdlfTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIGlmKGFjdGlvbil7XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU1dJVENIX0FVVEhFTlRJQ0FUSU9OX1NUQVRVUzoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAhc3RhdGUuYXV0aGVudGljYXRlZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlNXSVRDSF9MT0FESU5HX1NUQVRVUzp7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc0xvYWRpbmc6IGFjdGlvbi5pc0xvYWRpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9VU0VSX0lORk86e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlNXSVRDSF9MQU5HVUFHRTp7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBsYW5ndWFnZTogYWN0aW9uLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlUHVzaE5vdGlmaWNhdGlvbnMgZnJvbSBcIi4vQmFja2VuZC9ob29rcy91c2VQdXNoTm90aWZpY2F0aW9uc1wiO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICh7IGxvYWRpbmcgfSkgPT4gKGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFwcC1sb2FkZXJcIj5QbGVhc2Ugd2FpdCwgd2UgYXJlIGxvYWRpbmcgc29tZXRoaW5nLi4uPC9kaXY+IDogbnVsbCk7XHJcbmNvbnN0IEVycm9yID0gKHsgZXJyb3IgfSkgPT5cclxuICAgIGVycm9yID8gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFwcC1lcnJvclwiPlxyXG4gICAgICAgICAgICA8aDI+e2Vycm9yLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPHA+RXJyb3IgbWVzc2FnZSA6IHtlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgPHA+RXJyb3IgY29kZSA6IHtlcnJvci5jb2RlfTwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApIDogbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdXNlckNvbnNlbnQsXHJcbiAgICAgICAgcHVzaE5vdGlmaWNhdGlvblN1cHBvcnRlZCxcclxuICAgICAgICB1c2VyU3Vic2NyaXB0aW9uLFxyXG4gICAgICAgIG9uQ2xpY2tBc2tVc2VyUGVybWlzc2lvbixcclxuICAgICAgICBvbkNsaWNrU3VzYnJpYmVUb1B1c2hOb3RpZmljYXRpb24sXHJcbiAgICAgICAgb25DbGlja1NlbmRTdWJzY3JpcHRpb25Ub1B1c2hTZXJ2ZXIsXHJcbiAgICAgICAgcHVzaFNlcnZlclN1YnNjcmlwdGlvbklkLFxyXG4gICAgICAgIG9uQ2xpY2tTZW5kTm90aWZpY2F0aW9uLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGxvYWRpbmdcclxuICAgIH0gPSB1c2VQdXNoTm90aWZpY2F0aW9ucygpO1xyXG5cclxuICAgIGNvbnN0IGlzQ29uc2VudEdyYW50ZWQgPSB1c2VyQ29uc2VudCA9PT0gXCJncmFudGVkXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cclxuXHJcbiAgICAgICAgICAgIDxwPlB1c2ggbm90aWZpY2F0aW9uIGFyZSB7IXB1c2hOb3RpZmljYXRpb25TdXBwb3J0ZWQgJiYgXCJOT1RcIn0gc3VwcG9ydGVkIGJ5IHlvdXIgZGV2aWNlLjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVXNlciBjb25zZW50IHRvIHJlY2V2aWUgcHVzaCBub3RpZmljYWl0b25zIGlzIDxzdHJvbmc+e3VzZXJDb25zZW50fTwvc3Ryb25nPi5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFwdXNoTm90aWZpY2F0aW9uU3VwcG9ydGVkIHx8IGlzQ29uc2VudEdyYW50ZWR9IG9uQ2xpY2s9e29uQ2xpY2tBc2tVc2VyUGVybWlzc2lvbn0+XHJcbiAgICAgICAgICAgICAgICB7aXNDb25zZW50R3JhbnRlZCA/IFwiQ29uc2VudCBncmFudGVkXCIgOiBcIiBBc2sgdXNlciBwZXJtaXNzaW9uXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXB1c2hOb3RpZmljYXRpb25TdXBwb3J0ZWQgfHwgIWlzQ29uc2VudEdyYW50ZWQgfHwgdXNlclN1YnNjcmlwdGlvbn0gb25DbGljaz17b25DbGlja1N1c2JyaWJlVG9QdXNoTm90aWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgIHt1c2VyU3Vic2NyaXB0aW9uID8gXCJQdXNoIHN1YnNjcmlwdGlvbiBjcmVhdGVkXCIgOiBcIkNyZWF0ZSBOb3RpZmljYXRpb24gc3Vic2NyaXB0aW9uXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXVzZXJTdWJzY3JpcHRpb24gfHwgcHVzaFNlcnZlclN1YnNjcmlwdGlvbklkfSBvbkNsaWNrPXtvbkNsaWNrU2VuZFN1YnNjcmlwdGlvblRvUHVzaFNlcnZlcn0+XHJcbiAgICAgICAgICAgICAgICB7cHVzaFNlcnZlclN1YnNjcmlwdGlvbklkID8gXCJTdWJzY3JwdGlvbiBzZW50IHRvIHRoZSBzZXJ2ZXJcIiA6IFwiU2VuZCBzdWJzY3JpcHRpb24gdG8gcHVzaCBzZXJ2ZXJcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7cHVzaFNlcnZlclN1YnNjcmlwdGlvbklkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHNlcnZlciBhY2NlcHRlZCB0aGUgcHVzaCBzdWJzY3JwdGlvbiE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrU2VuZE5vdGlmaWNhdGlvbn0+U2VuZCBhIG5vdGlmaWNhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoND5Zb3VyIG5vdGlmaWNhdGlvbiBzdWJzY3JpcHRpb24gZGV0YWlsczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHVzZXJTdWJzY3JpcHRpb24sIG51bGwsIFwiIFwiKX08L2NvZGU+XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcbmltcG9ydCAncnN1aXRlL2Rpc3Qvc3R5bGVzL3JzdWl0ZS1kZWZhdWx0Lm1pbi5jc3MnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHtQcm92aWRlciwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vUGFnZXMvTG9naW5cIjtcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNofSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9SZWR1eC9yZWR1Y2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gXCIuL0xvZ2luL1BhZ2VzL1JlZ2lzdHJhdGlvblwiO1xyXG5pbXBvcnQgUmVjb3ZlclBhc3N3b3JkRm9ybSBmcm9tIFwiLi9Mb2dpbi9Db21wb25lbnRzL1JlY292ZXJQYXNzd29yZEZvcm1cIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9NYWluQXBwL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgKiBhcyBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL21lc3NhZ2luZ1wiO1xyXG5cclxuaW1wb3J0ICcuL2kxOG4nO1xyXG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmQgZnJvbSBcIi4vTG9naW4vQ29tcG9uZW50cy9DaGFuZ2VQYXNzd29yZFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9MYXlvdXQvTG9hZGluZ1wiO1xyXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIi4vTGF5b3V0L01haW5QYWdlXCI7XHJcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpe1xyXG4gICAgY29uc3Qge2F1dGhlbnRpY2F0ZWQsIGxhbmd1YWdlfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XHJcbiAgICBjb25zdCB7dCxpMThufSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uXCIsIGkxOG4ubGFuZ3VhZ2UpXHJcbiAgICBjb25zb2xlLmxvZyhcImNvb2tpZXNcIiwgbGFuZ3VhZ2UpXHJcbiAgICBpZihpMThuLmxhbmd1YWdlIT09bGFuZ3VhZ2Upe1xyXG5cclxuICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RyYXRpb25QYWdlID0gPExheW91dCBwYWdlPXs8UmVnaXN0cmF0aW9uLz59Lz47XHJcbiAgICBjb25zdCBjaGFuZ2VQYXNzd29yZFBhZ2UgPSA8TGF5b3V0IHBhZ2U9ezxDaGFuZ2VQYXNzd29yZC8+fS8+O1xyXG4gICAgY29uc3QgcmVjb3ZlclBhZ2UgPSA8TGF5b3V0IHBhZ2U9ezxSZWNvdmVyUGFzc3dvcmRGb3JtLz59Lz47XHJcbiAgICBjb25zdCBkYXNoYm9hcmRQYWdlID0gPE1haW5QYWdlIHBhZ2U9ezxEYXNoYm9hcmQvPn0vPjtcclxuICAgIGNvbnN0IGxvZ2luUGFnZSA9IDxMYXlvdXQgcGFnZT17PExvZ2luLz59Lz47XHJcbiAgICBjb25zdCB7aXNMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZyA9IDxMb2FkaW5nLz47XHJcblxyXG5cclxuICAgIGNvbnN0IG1haW5BcHAgPVxyXG4gICAgICAgICg8PlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e1JvdXRlcy5yZWdpc3RyYXRpb259IGNoaWxkcmVuPXtyZWdpc3RyYXRpb25QYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Um91dGVzLmNoYW5nZVBhc3N3b3JkfSBjaGlsZHJlbj17Y2hhbmdlUGFzc3dvcmRQYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17Um91dGVzLnBhc3N3b3JkUmVjb3Zlcnl9IGNoaWxkcmVuPXtyZWNvdmVyUGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e1JvdXRlcy5kYXNoYm9hcmR9IGNoaWxkcmVuPXtkYXNoYm9hcmRQYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17Um91dGVzLm1haW59IGNoaWxkcmVuPXtsb2dpblBhZ2V9Lz5cclxuICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC8+KTtcclxuXHJcbiAgICBjb25zdCBhdXRoUmVxdWlyZWQgPVxyXG4gICAgICAgICg8PlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e1JvdXRlcy5tYWlufSBjaGlsZHJlbj17bG9naW5QYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e1JvdXRlcy5sb2dpbn0gY2hpbGRyZW49e2xvZ2luUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtSb3V0ZXMucmVnaXN0cmF0aW9ufSBjaGlsZHJlbj17cmVnaXN0cmF0aW9uUGFnZX0vPlxyXG4gICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICA8Lz4pO1xyXG5cclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSAoYXV0aGVudGljYXRlZCkgPyBtYWluQXBwIDogYXV0aFJlcXVpcmVkIDtcclxuICAgIHJldHVybiA8PntyZW5kZXJ9e2lzTG9hZGluZyAmJiBsb2FkaW5nfTwvPjtcclxufVxyXG5cclxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcixjb21wb3NlRW5oYW5jZXJzKFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxyXG4pKTtcclxuXHJcblxyXG5jb25zdCAgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RHhiZnBXTlBONjhQZDJhckUxbVZabERQU0pfZGRiTGlvXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcIm1vcmV0aGFuYWpvYi01NTVhYy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbW9yZXRoYW5ham9iLTU1NWFjLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwibW9yZXRoYW5ham9iLTU1NWFjXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcIm1vcmV0aGFuYWpvYi01NTVhYy5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjU4MjczNzU4MzIxXCIsXHJcbiAgICBhcHBJZDogXCIxOjY1ODI3Mzc1ODMyMTp3ZWI6YWJiYjU4OTgxOTNkMzQ4YmFjN2ZkMFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUtINUdUMkdWWVNcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XHJcbm1lc3NhZ2luZy51c2VQdWJsaWNWYXBpZEtleShcIkJKMnZMd0VYZHd5ckdhclZyQThCbGh1QktISWNqV05JQUU0VDl1TlVvYzJ4b3hFZ0FpVGZwZFZwODZnVkRrTDlUUFVMRGQ5TGtUNUw0VWg5YnFLVFRLb1wiKTtcclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbjwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuIiwiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHt0cmFuc2xhdGlvbiBhcyBFbmdsaXNofSBmcm9tICcuL2kxOG4vZW4tVVMnO1xyXG5pbXBvcnQge3RyYW5zbGF0aW9uIGFzIEl0YWxpYW59IGZyb20gJy4vaTE4bi9pdC1JVCc7XHJcblxyXG4vLyBub3QgbGlrZSB0byB1c2UgdGhpcz9cclxuLy8gaGF2ZSBhIGxvb2sgYXQgdGhlIFF1aWNrIHN0YXJ0IGd1aWRlXHJcbi8vIGZvciBwYXNzaW5nIGluIGxuZyBhbmQgdHJhbnNsYXRpb25zIG9uIGluaXRcclxuXHJcbmkxOG5cclxuLy8gbG9hZCB0cmFuc2xhdGlvbiB1c2luZyB4aHIgLT4gc2VlIC9wdWJsaWMvbG9jYWxlcyAoaS5lLiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9yZWFjdC1pMThuZXh0L3RyZWUvbWFzdGVyL2V4YW1wbGUvcmVhY3QvcHVibGljL2xvY2FsZXMpXHJcbi8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQteGhyLWJhY2tlbmRcclxuICAgIC8vLnVzZShCYWNrZW5kKVxyXG4gICAgLy8gZGV0ZWN0IHVzZXIgbGFuZ3VhZ2VcclxuICAgIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yXHJcbiAgLy8gIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcclxuICAgIC8vIHBhc3MgdGhlIGkxOG4gaW5zdGFuY2UgdG8gcmVhY3QtaTE4bmV4dC5cclxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAgIC8vIGluaXQgaTE4bmV4dFxyXG4gICAgLy8gZm9yIGFsbCBvcHRpb25zIHJlYWQ6IGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xyXG4gICAgLmluaXQoe1xyXG4gICAgICAgIHJlc291cmNlczoge1xyXG4gICAgICAgICAgICBlbjogRW5nbGlzaCxcclxuICAgICAgICAgICAgaXQ6IEl0YWxpYW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxuZzogXCJlblwiLFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXHJcblxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjsiLCJleHBvcnQgY29uc3QgdHJhbnNsYXRpb24gPSB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAgIFwiV2VsY29tZSB0byBSZWFjdFwiOiBcIldlbGNvbWUgdG8gUmVhY3QgYW5kIHJlYWN0LWkxOG5leHRcIixcclxuICAgICAgICBcImNvbXBhbnlcIjogXCJjb21wYW55XCJcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgdHJhbnNsYXRpb24gPSB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAgIFwiV2VsY29tZSB0byBSZWFjdFwiOiBcIkJlbnZlbnV0byBpbiByZWFjdFwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOlwiQ29tcGFnbmlhXCIsXHJcbiAgICAgICAgXCJBbHJlYWR5IGxvZ2dlZFwiOiBcIkdpw6AgYXV0ZW50aWNhdG9cIlxyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHB1c2hTZXJ2ZXJQdWJsaWNLZXkgPSBcIkJKMnZMd0VYZHd5ckdhclZyQThCbGh1QktISWNqV05JQUU0VDl1TlVvYzJ4b3hFZ0FpVGZwZFZwODZnVkRrTDlUUFVMRGQ5TGtUNUw0VWg5YnFLVFRLb1wiO1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrcyBpZiBQdXNoIG5vdGlmaWNhdGlvbiBhbmQgc2VydmljZSB3b3JrZXJzIGFyZSBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1B1c2hOb3RpZmljYXRpb25TdXBwb3J0ZWQoKSB7XHJcbiAgICByZXR1cm4gXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yICYmIFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3c7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBhc2tzIHVzZXIgY29uc2VudCB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2Ugb2YgdGhlIHVzZXIsIG9uZSBvZiBncmFudGVkLCBkZWZhdWx0LCBkZW5pZWRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGFza1VzZXJQZXJtaXNzaW9uKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG59XHJcbi8qKlxyXG4gKiBzaG93cyBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbigpIHtcclxuICAgIGNvbnN0IGltZyA9IFwiL2ltYWdlcy9qYXNvbi1sZXVuZy1ITTZUTW1ldmJaUS11bnNwbGFzaC5qcGdcIjtcclxuICAgIGNvbnN0IHRleHQgPSBcIlRha2UgYSBsb29rIGF0IHRoaXMgYnJhbmQgbmV3IHQtc2hpcnQhXCI7XHJcbiAgICBjb25zdCB0aXRsZSA9IFwiTmV3IFByb2R1Y3QgQXZhaWxhYmxlXCI7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGJvZHk6IHRleHQsXHJcbiAgICAgICAgaWNvbjogXCIvaW1hZ2VzL2phc29uLWxldW5nLUhNNlRNbWV2YlpRLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgICAgIHZpYnJhdGU6IFsyMDAsIDEwMCwgMjAwXSxcclxuICAgICAgICB0YWc6IFwibmV3LXByb2R1Y3RcIixcclxuICAgICAgICBpbWFnZTogaW1nLFxyXG4gICAgICAgIGJhZGdlOiBcImh0dHBzOi8vc3B5bmEuaXQvaWNvbnMvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIsXHJcbiAgICAgICAgYWN0aW9uczogW3sgYWN0aW9uOiBcIkRldGFpbFwiLCB0aXRsZTogXCJWaWV3XCIsIGljb246IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEyOC9mZjAwMDBcIiB9XVxyXG4gICAgfTtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24oc2VydmljZVdvcmtlcikge1xyXG4gICAgICAgIHNlcnZpY2VXb3JrZXIuc2hvd05vdGlmaWNhdGlvbih0aXRsZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlclNlcnZpY2VXb3JrZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdGVyaW5nIHNlcnZpY2UgV29ya2VyXCIpO1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiLi8uLi9zZXJ2aWNlV29ya2VyLmpzXCIpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogdXNpbmcgdGhlIHJlZ2lzdGVyZWQgc2VydmljZSB3b3JrZXIgY3JlYXRlcyBhIHB1c2ggbm90aWZpY2F0aW9uIHN1YnNjcmlwdGlvbiBhbmQgcmV0dXJucyBpdFxyXG4gKlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uKCkge1xyXG4gICAgLy93YWl0IGZvciBzZXJ2aWNlIHdvcmtlciBpbnN0YWxsYXRpb24gdG8gYmUgcmVhZHlcclxuICAgIGNvbnN0IHNlcnZpY2VXb3JrZXIgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcclxuICAgIC8vIHN1YnNjcmliZSBhbmQgcmV0dXJuIHRoZSBzdWJzY3JpcHRpb25cclxuICAgIHJldHVybiBhd2FpdCBzZXJ2aWNlV29ya2VyLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxyXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiBwdXNoU2VydmVyUHVibGljS2V5XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgdGhlIHN1YnNjcmlwdGlvbiBpZiBwcmVzZW50IG9yIG5vdGhpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldFVzZXJTdWJzY3JpcHRpb24oKSB7XHJcbiAgICAvL3dhaXQgZm9yIHNlcnZpY2Ugd29ya2VyIGluc3RhbGxhdGlvbiB0byBiZSByZWFkeSwgYW5kIHRoZW5cclxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHNlcnZpY2VXb3JrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2VXb3JrZXIucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbihwdXNoU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwdXNoU3Vic2NyaXB0aW9uO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgaXNQdXNoTm90aWZpY2F0aW9uU3VwcG9ydGVkLFxyXG4gICAgYXNrVXNlclBlcm1pc3Npb24sXHJcbiAgICByZWdpc3RlclNlcnZpY2VXb3JrZXIsXHJcbiAgICBzZW5kTm90aWZpY2F0aW9uLFxyXG4gICAgY3JlYXRlTm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uLFxyXG4gICAgZ2V0VXNlclN1YnNjcmlwdGlvblxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgbWFpbiA9IFwiL2FwcC9cIjtcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbiA9IFwiL2FwcC9yZWdpc3RyYXRpb25cIjtcclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gXCIvYXBwL2xvZ2luXCI7XHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFJlY292ZXJ5ID0gXCIvYXBwL3JlY292ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZCA9IFwiL2FwcC9kYXNoYm9hcmRcIjtcclxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gXCIvYXBwL3Bhc3N3b3JkY2hhbmdlXCI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyc3VpdGUnO1xyXG5cclxuY29uc3QgZ3JheSA9IFwiI2Y3ZjhmOVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJhdGlvbkJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICR7Z3JheX07XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGA7XHJcblxyXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICR7Z3JheX07XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGA7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1ODlmNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGA7XHJcblxyXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBgO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
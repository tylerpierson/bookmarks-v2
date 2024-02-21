/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Auth/Auth */ "./src/components/Auth/Auth.js");
/* harmony import */ var _components_CreateBookmark_CreateBookmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CreateBookmark/CreateBookmark */ "./src/components/CreateBookmark/CreateBookmark.js");
/* harmony import */ var _components_BookmarkList_BookmarkList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BookmarkList/BookmarkList */ "./src/components/BookmarkList/BookmarkList.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function App() {
  /*
    Login, SignUp, CreateBookmark, ListBookmarksByUser, DeleteBookmark, UpdateBookmark
    */

  const handleChangeAuth = event => {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [event.target.name]: event.target.value
    }));
  };
  const handleChange = event => {
    setBookmark(_objectSpread(_objectSpread({}, bookmark), {}, {
      [event.target.name]: event.target.value
    }));
  };
  const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: '',
    name: ''
  });
  const [bookmark, setBookmark] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: '',
    url: ''
  });
  const [bookmarks, setBookmarks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem('token', JSON.stringify(tokenResponse));
    } catch (error) {
      console.error(error);
    }
  };
  const signUp = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_objectSpread({}, credentials))
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem('token', JSON.stringify(tokenResponse));
    } catch (error) {
      console.error(error);
    }
  };
  const createBookmark = async () => {
    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(token)
        },
        body: JSON.stringify(_objectSpread({}, bookmark))
      });
      const data = await response.json();
      setBookmarks([data, ...bookmarks]);
    } catch (error) {
      console.error(error);
    } finally {
      setBookmark({
        title: '',
        url: ''
      });
    }
  };
  const listBookmarksByUser = async () => {
    try {
      const response = await fetch('/api/users/bookmarks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(JSON.parse(localStorage.getItem('token')))
        }
      });
      const data = await response.json();
      setBookmarks(data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteBookmark = async id => {
    try {
      const response = await fetch("/api/bookmarks/".concat(id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(token)
        }
      });
      const data = await response.json();
      const bookmarksCopy = [...bookmarks];
      const index = bookmarksCopy.findIndex(bookmark => id === bookmark._id);
      bookmarksCopy.splice(index, 1);
      setBookmarks(bookmarksCopy);
    } catch (error) {
      console.error(error);
    }
  };
  const updateBookmark = async (id, updatedData) => {
    try {
      const response = await fetch("/api/bookmarks/".concat(id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(token)
        },
        body: JSON.stringify(updatedData)
      });
      const data = await response.json();
      const bookmarksCopy = [...bookmarks];
      const index = bookmarksCopy.findIndex(bookmark => id === bookmark._id);
      bookmarksCopy[index] = _objectSpread(_objectSpread({}, bookmarksCopy[index]), updatedData);
      setBookmarks(bookmarksCopy);
    } catch (error) {
      console.error(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tokenData = localStorage.getItem('token');
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      listBookmarksByUser();
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tokenData = localStorage.getItem('token');
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      setToken(JSON.parse(tokenData));
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"], {
    login: login,
    credentials: credentials,
    handleChangeAuth: handleChangeAuth,
    signUp: signUp
  }), /*#__PURE__*/React.createElement(_components_CreateBookmark_CreateBookmark__WEBPACK_IMPORTED_MODULE_2__["default"], {
    createBookmark: createBookmark,
    bookmark: bookmark,
    handleChange: handleChange
  }), /*#__PURE__*/React.createElement(_components_BookmarkList_BookmarkList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bookmarks: bookmarks,
    deleteBookmark: deleteBookmark,
    updateBookmark: updateBookmark
  }));
}

/***/ }),

/***/ "./src/components/Auth/Auth.js":
/*!*************************************!*\
  !*** ./src/components/Auth/Auth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _SignUp_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignUp/SignUp */ "./src/components/SignUp/SignUp.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function Auth(_ref) {
  let {
    login,
    signUp,
    credentials,
    handleChangeAuth
  } = _ref;
  const [showSignUp, setShowSignUp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getToken = () => {
      const token = window.localStorage.getItem('token');
      if (!token || token === 'null' || token === 'undefined') return null;
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {
        window.localStorage.removeItem('token');
        return null;
      }
      return token;
    };
    const token = getToken();
    const data = token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
    setUser(data);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, user && user.name ? /*#__PURE__*/React.createElement("h1", null, "Welcome ", user.name.toUpperCase()) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowSignUp(!showSignUp);
    }
  }, showSignUp ? 'Sign Up With A New Account Below or Click Here To Login As An Existing User' : 'Welcome Back, Login As An Existing User or Click Here To Sign Up With A New Account'), showSignUp ? /*#__PURE__*/React.createElement(_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    signUp: signUp,
    credentials: credentials,
    handleChangeAuth: handleChangeAuth
  }) : /*#__PURE__*/React.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    login: login,
    credentials: credentials,
    handleChangeAuth: handleChangeAuth
  })));
}

/***/ }),

/***/ "./src/components/Bookmark/Bookmark.js":
/*!*********************************************!*\
  !*** ./src/components/Bookmark/Bookmark.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bookmark)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Bookmark(_ref) {
  let {
    bookmark,
    updateBookmark,
    deleteBookmark
  } = _ref;
  const [showInput, setShowInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h4", {
    onClick: () => setShowInput(!showInput)
  }, bookmark.title), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    style: {
      display: showInput ? 'block' : 'none'
    },
    type: "text",
    onKeyDown: e => {
      if (e.key === 'Enter') {
        const title = inputRef.current.value;
        updateBookmark(bookmark._id, {
          title
        });
        setShowInput(false);
      }
    },
    defaultValue: bookmark.title
  }), /*#__PURE__*/React.createElement("a", {
    href: bookmark.url,
    target: "_blank",
    rel: "noreferrer"
  }, " ", bookmark.url), /*#__PURE__*/React.createElement("button", {
    onClick: () => deleteBookmark(bookmark._id)
  }, "Delete Me")));
}

/***/ }),

/***/ "./src/components/BookmarkList/BookmarkList.js":
/*!*****************************************************!*\
  !*** ./src/components/BookmarkList/BookmarkList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BookmarkList)
/* harmony export */ });
/* harmony import */ var _Bookmark_Bookmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bookmark/Bookmark */ "./src/components/Bookmark/Bookmark.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function BookmarkList(_ref) {
  let {
    bookmarks,
    updateBookmark,
    deleteBookmark
  } = _ref;
  return /*#__PURE__*/React.createElement("ul", null, bookmarks.length ? bookmarks.map(bookmark => /*#__PURE__*/React.createElement(_Bookmark_Bookmark__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: bookmark._id,
    bookmark: bookmark,
    updateBookmark: updateBookmark,
    deleteBookmark: deleteBookmark
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "No Bookmarks Yet... Add one in the Form Above")));
}

/***/ }),

/***/ "./src/components/CreateBookmark/CreateBookmark.js":
/*!*********************************************************!*\
  !*** ./src/components/CreateBookmark/CreateBookmark.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateBookmark)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function CreateBookmark(_ref) {
  let {
    createBookmark,
    bookmark,
    handleChange
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Create A Bookmark"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      createBookmark();
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: bookmark.title,
    name: "title",
    onChange: handleChange,
    placeholder: "Title"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: bookmark.url,
    name: "url",
    onChange: handleChange,
    placeholder: "URL"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Create Bookmark"
  })));
}

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function Login(_ref) {
  let {
    login,
    credentials,
    handleChangeAuth
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h6", null, "Login"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      login();
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.email,
    name: "email",
    onChange: handleChangeAuth,
    placeholder: 'Email'
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: credentials.password,
    name: "password",
    onChange: handleChangeAuth,
    placeholder: 'Password'
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Login as Existing User"
  })));
}

/***/ }),

/***/ "./src/components/SignUp/SignUp.js":
/*!*****************************************!*\
  !*** ./src/components/SignUp/SignUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function SignUp(_ref) {
  let {
    credentials,
    signUp,
    handleChangeAuth
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h6", null, "Sign Up"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      signUp();
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.email,
    name: "email",
    onChange: handleChangeAuth,
    placeholder: 'Email'
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.name,
    name: "name",
    onChange: handleChangeAuth,
    placeholder: 'Name'
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: credentials.password,
    name: "password",
    onChange: handleChangeAuth,
    placeholder: 'Password'
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Sign Up as a New User"
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./utils/style.js");

var _jsxFileName = "/mnt/c/seihyunj/projectRiver/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 13px;\n    line-height: 70px;\n    float: right;\n  \n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 50px;\n  line-height: 100px;\n  font-size: 20px;\n  float: right;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 48px;\n    float: left;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 200px;\n  float: left;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var linkStyle = {
  marginRight: 20,
  textDecoration: 'none'
};
var logoStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  marginLeft: '1px'
};
var LogoBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), _utils_style__WEBPACK_IMPORTED_MODULE_4__["mediaQuery"].lessThan('medium')(_templateObject2()));
var fontStyle = {
  color: '#FFF',
  //fontSize: 20,
  marginRight: 20
};
var FontBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), _utils_style__WEBPACK_IMPORTED_MODULE_4__["mediaQuery"].lessThan('medium')(_templateObject4()));
var layoutStyle = {
  //padding: 20,
  height: '100%',
  maxWidth: '1200px',
  margin: 'auto'
};

var Header = function Header() {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, " ", __jsx(LogoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("img", {
    style: logoStyle,
    src: "../static/default-monochrome-black.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), __jsx(FontBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#mission",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("font", {
    style: fontStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Mission"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#feature",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("font", {
    style: fontStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Intelligence"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#partners",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("font", {
    style: fontStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Partners"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amazon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("font", {
    style: fontStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Product")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
/*
      <Link href="/amazon">
        <a style={linkStyle}><font style={fontStyle}>Amazon</font></a>
      </Link>
      <Link href="/naver">
        <a style={linkStyle}><font style={fontStyle}>Naver</font></a>
      </Link>
      <Link href="/shopee">
        <a style={linkStyle}><font style={fontStyle}>Shopee</font></a>
      </Link>
      <Link href="/">
        <a style={linkStyle}><font style={fontStyle}>Home</font></a>
      </Link>
      <Link href="#about">
        <a style={linkStyle}><font style={fontStyle}>About</font></a>
      </Link>
      <Link href="#feature">
        <a style={linkStyle}><font style={fontStyle}>Features</font></a>
      </Link>
      <Link href="#partners">
        <a style={linkStyle}><font style={fontStyle}>Partners</font></a>
      </Link>
      <Link href="/naver">
            <a style={linkStyle}><font style={fontStyle}>Naver</font></a>
          </Link>
          <Link href="/shopee">
            <a style={linkStyle}><font style={fontStyle}>Shopee</font></a>
          </Link>
*/

/***/ })

})
//# sourceMappingURL=index.js.d7e33cedcfe0e6fa4184.hot-update.js.map
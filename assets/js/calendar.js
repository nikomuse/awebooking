(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/babel/calendar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDatePicker", function() { return createDatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dates_lib_utils_isBeforeDay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-dates/lib/utils/isBeforeDay.js");
/* harmony import */ var react_dates_lib_utils_isBeforeDay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_utils_isBeforeDay__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js");
/* harmony import */ var react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dates_lib_utils_toLocalizedDateString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-dates/lib/utils/toLocalizedDateString.js");
/* harmony import */ var react_dates_lib_utils_toLocalizedDateString__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_utils_toLocalizedDateString__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dates_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react-dates/constants.js");
/* harmony import */ var react_dates_constants__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}












var defaultProps = {
  form: null,
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,
  minimumNights: 1,
  maximumNights: 0,
  minimumDateRange: 0,
  maximumDateRange: 0,
  disablePastDates: true,
  disableFutureDates: false,
  isRTL: false,
  withFullScreenPortal: false,
  displayFormat: 'DD MM YY',
  // calendar presentation and interaction related props
  numberOfMonths: 2,
  disabled: false,
  keepOpenOnDateSelect: false,
  isDayBlocked: function isDayBlocked() {
    return false;
  },
  isDayHighlighted: function isDayHighlighted() {
    return false;
  },
  isOutsideRange: function isOutsideRange(day) {
    return !Object(react_dates__WEBPACK_IMPORTED_MODULE_9__["isInclusivelyAfterDay"])(day, moment__WEBPACK_IMPORTED_MODULE_3___default()());
  },
  endDateOffset: undefined,
  getMinNightsForHoverDate: undefined,
  // Internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  onFocus: function onFocus() {},
  onChange: function onChange() {},
  onClose: function onClose() {}
};
var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);

    if (typeof window.Popper === 'undefined') {
      throw new TypeError('The Calendar require Popper.js (https://popper.js.org/)');
    }

    _this.form = props.form;
    var elements = _this.form.elements;
    _this.state = {
      focusedInput: null,
      startDate: react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7___default()(elements['check_in'].get()),
      endDate: react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7___default()(elements['check_out'].get()),
      isDayPickerFocused: false
    };
    _this.onDatesChange = _this.onDatesChange.bind(_assertThisInitialized(_this));
    _this.onFocusChange = _this.onFocusChange.bind(_assertThisInitialized(_this));
    _this.onOutsideClick = _this.onOutsideClick.bind(_assertThisInitialized(_this));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_assertThisInitialized(_this));
    _this.isOutsideRange = _this.isOutsideRange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getFormElement('check_in_alt').on('change', this._onStartDateChange.bind(this)).on('focus', this._onStartDateFocus.bind(this)).on('keydown', this._clearInputValues.bind(this, 'startDate'));
      this.getFormElement('check_out_alt').on('focus', this._onEndDateFocus.bind(this)).on('change', this._onEndDateChange.bind(this)).on('keydown', this._clearInputValues.bind(this, 'endDate'));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.getFormElement('check_in_alt').off('change focus keydown');
      this.getFormElement('check_out_alt').off('change focus keydown');
    }
  }, {
    key: "open",
    value: function open(focusedInput) {
      this.onFocusChange(focusedInput ? focusedInput : react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"]);
    }
  }, {
    key: "close",
    value: function close() {
      this.onFocusChange(null);
    }
  }, {
    key: "onFocusChange",
    value: function onFocusChange(focusedInput) {
      this.setState({
        focusedInput: focusedInput
      }, this._onInputFocus.bind(this, focusedInput));
    }
  }, {
    key: "_onInputFocus",
    value: function _onInputFocus(focusedInput) {
      var onFocus = this.props.onFocus;

      if (focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"] && !this.getFormElement('check_in_alt').is(':focus')) {
        this.getFormElement('check_in_alt')[0].focus();
      } else if (focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"] && !this.getFormElement('check_out_alt').is(':focus')) {
        this.getFormElement('check_out_alt')[0].focus();
      }

      onFocus(focusedInput);
    }
  }, {
    key: "onDatesChange",
    value: function onDatesChange(_ref) {
      var _this2 = this;

      var startDate = _ref.startDate,
          endDate = _ref.endDate;
      var onChange = this.props.onChange;
      this.setState({
        startDate: startDate,
        endDate: endDate
      }, function () {
        var elements = _this2.form.elements;
        elements['check_in'].set(startDate ? startDate.format(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["ISO_FORMAT"]) : '');
        elements['check_out'].set(endDate ? endDate.format(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["ISO_FORMAT"]) : '');
        onChange({
          startDate: startDate,
          endDate: endDate
        });
      });
    }
  }, {
    key: "clearDates",
    value: function clearDates() {
      var reopenPickerOnClearDates = this.props.reopenPickerOnClearDates;
      this.onDatesChange({
        startDate: null,
        endDate: null
      });

      if (reopenPickerOnClearDates) {
        this.onFocusChange(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"]);
      }
    }
  }, {
    key: "isOpened",
    value: function isOpened() {
      var focusedInput = this.state.focusedInput;
      return focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"] || focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"];
    }
  }, {
    key: "_onStartDateChange",
    value: function _onStartDateChange(e) {
      var startDateString = e.target.value;
      var endDate = this.state.endDate;
      var _this$props = this.props,
          disabled = _this$props.disabled,
          minimumNights = _this$props.minimumNights,
          isOutsideRange = _this$props.isOutsideRange;
      var startDate = react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7___default()(startDateString, this.getDisplayFormat());
      console.log(startDate);
      var isEndDateBeforeStartDate = startDate && react_dates_lib_utils_isBeforeDay__WEBPACK_IMPORTED_MODULE_6___default()(endDate, startDate.clone().add(minimumNights, 'days'));
      var isStartDateValid = startDate && !isOutsideRange(startDate) && !(disabled === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"] && isEndDateBeforeStartDate);

      if (isStartDateValid) {
        if (isEndDateBeforeStartDate) {
          endDate = null;
        }

        this.onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        this.onFocusChange(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"]);
      } else {
        this.onDatesChange({
          startDate: null,
          endDate: endDate
        });
      }
    }
  }, {
    key: "_onEndDateChange",
    value: function _onEndDateChange(e) {
      var endDateString = e.target.value;
      var startDate = this.state.startDate;
      var _this$props2 = this.props,
          minimumNights = _this$props2.minimumNights,
          isOutsideRange = _this$props2.isOutsideRange,
          keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect;
      var endDate = react_dates_lib_utils_toMomentObject__WEBPACK_IMPORTED_MODULE_7___default()(endDateString, this.getDisplayFormat());
      var isEndDateValid = endDate && !isOutsideRange(endDate) && !(startDate && react_dates_lib_utils_isBeforeDay__WEBPACK_IMPORTED_MODULE_6___default()(endDate, startDate.clone().add(minimumNights, 'days')));

      if (isEndDateValid) {
        this.onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        if (!keepOpenOnDateSelect) this.onClearFocus();
      } else {
        this.onDatesChange({
          startDate: startDate,
          endDate: null
        });
      }
    }
  }, {
    key: "_onStartDateFocus",
    value: function _onStartDateFocus() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          focusedInput = _this$props3.focusedInput;

      if (this.isOpened() && focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"]) {
        return;
      }

      if (!disabled || disabled === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"]) {
        this.onFocusChange(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"]);
      }
    }
  }, {
    key: "_onEndDateFocus",
    value: function _onEndDateFocus() {
      var _this$state = this.state,
          startDate = _this$state.startDate,
          focusedInput = _this$state.focusedInput;
      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          withFullScreenPortal = _this$props4.withFullScreenPortal;

      if (this.isOpened() && focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"]) {
        return;
      } // When the datepicker is full screen, we never want to focus the end date first
      // because there's no indication that that is the case once the datepicker is open and it
      // might confuse the user


      if (!startDate && withFullScreenPortal && (!disabled || disabled === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"])) {
        this.onFocusChange(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"]);
      } else if (!disabled || disabled === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"]) {
        this.onFocusChange(react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["END_DATE"]);
      }
    }
  }, {
    key: "_clearInputValues",
    value: function _clearInputValues(type, event) {
      if (event.which === 8 || event.which === 46) {
        if (type === 'endDate') {
          this.onDatesChange({
            startDate: this.state.startDate,
            endDate: null
          });
        } else {
          this.clearDates();
        }
      }
    }
  }, {
    key: "onClearFocus",
    value: function onClearFocus() {
      this.close();
    }
  }, {
    key: "getDateString",
    value: function getDateString(date) {
      var displayFormat = this.getDisplayFormat();

      if (date && displayFormat) {
        return date && date.format(displayFormat);
      }

      return react_dates_lib_utils_toLocalizedDateString__WEBPACK_IMPORTED_MODULE_8___default()(date);
    }
  }, {
    key: "getDisplayFormat",
    value: function getDisplayFormat() {
      var displayFormat = this.props.displayFormat;
      return typeof displayFormat === 'string' ? displayFormat : displayFormat();
    }
    /**
     * Gets a DOM element in the form.
     *
     * @param  {string} name
     * @return {jQuery}
     */

  }, {
    key: "getFormElement",
    value: function getFormElement(name) {
      var elements = this.form.elements;

      if (elements.hasOwnProperty(name)) {
        return elements[name].element;
      }
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(e) {
      if (!this.isOpened()) {
        return;
      }

      if (this._isClickOnInputs(e)) {
        return;
      }

      this.setState({
        isDayPickerFocused: false
      });
      this.close();
    }
  }, {
    key: "_isClickOnInputs",
    value: function _isClickOnInputs(e) {
      var inputs = [this.getFormElement('check_in'), this.getFormElement('check_out'), this.getFormElement('check_in_alt'), this.getFormElement('check_out_alt')];
      var clicked = false;
      inputs.forEach(function (element) {
        if (element[0] && element[0].contains(e.target)) {
          clicked = true;
        }
      });
      return clicked;
    }
  }, {
    key: "onDayPickerFocus",
    value: function onDayPickerFocus() {
      /*const { focusedInput, onFocusChange } = this.props
      if (!focusedInput) onFocusChange(START_DATE)
       this.setState({
        isDayPickerFocused: true,
      })*/
    }
  }, {
    key: "onDayPickerBlur",
    value: function onDayPickerBlur() {
      this.setState({
        isDayPickerFocused: false
      });
    }
  }, {
    key: "getReferenceElement",
    value: function getReferenceElement(focusedInput) {
      var numberOfMonths = this.props.numberOfMonths;

      if (!focusedInput) {
        return;
      }

      var referenceElement = focusedInput === react_dates_constants__WEBPACK_IMPORTED_MODULE_10__["START_DATE"] ? this.getFormElement('check_in_alt') : this.getFormElement('check_out_alt');

      if (numberOfMonths > 1 && referenceElement.closest('.abrs-searchbox__group-wrap').length > 0) {
        return referenceElement.closest('.abrs-searchbox__group')[0];
      }

      return referenceElement.closest('.abrs-searchbox__box')[0];
    }
  }, {
    key: "isOutsideRange",
    value: function isOutsideRange(day) {
      var _this$state2 = this.state,
          startDate = _this$state2.startDate,
          focusedInput = _this$state2.focusedInput;
      var _this$props5 = this.props,
          disablePastDates = _this$props5.disablePastDates,
          disableFutureDates = _this$props5.disableFutureDates,
          maximumNights = _this$props5.maximumNights,
          isOutsideRange = _this$props5.isOutsideRange,
          minimumDateRange = _this$props5.minimumDateRange,
          maximumDateRange = _this$props5.maximumDateRange;
      var today = moment__WEBPACK_IMPORTED_MODULE_3___default()();

      if (startDate && focusedInput === 'endDate' && day.isBefore(startDate, 'day')) {
        return true;
      }

      if (disablePastDates && today.isAfter(day, 'day')) {
        return true;
      }

      if (disableFutureDates && today.isBefore(day, 'day')) {
        return true;
      }

      if (maximumNights && startDate) {
        var maxDate = startDate.clone().add(maximumNights, 'day');

        if (focusedInput === 'endDate' && maxDate.isBefore(day)) {
          return true;
        }
      }

      if (minimumDateRange > 0 || maximumDateRange > 0) {
        return !Object(react_dates__WEBPACK_IMPORTED_MODULE_9__["isInclusivelyAfterDay"])(day, today.clone().add(minimumDateRange, 'days')) || maximumDateRange && Object(react_dates__WEBPACK_IMPORTED_MODULE_9__["isInclusivelyAfterDay"])(day, today.clone().add(maximumDateRange, 'days'));
      }

      if (isOutsideRange) {
        return isOutsideRange(day);
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          focusedInput = _this$state3.focusedInput,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate,
          isDayPickerFocused = _this$state3.isDayPickerFocused;
      var _this$props6 = this.props,
          disabled = _this$props6.disabled,
          numberOfMonths = _this$props6.numberOfMonths,
          minimumNights = _this$props6.minimumNights,
          keepOpenOnDateSelect = _this$props6.keepOpenOnDateSelect,
          isDayBlocked = _this$props6.isDayBlocked,
          isDayHighlighted = _this$props6.isDayHighlighted,
          isRTL = _this$props6.isRTL,
          endDateOffset = _this$props6.endDateOffset,
          getMinNightsForHoverDate = _this$props6.getMinNightsForHoverDate;
      var modifiers = {
        preventOverflow: {
          enabled: false
        },
        hide: {
          enabled: false
        },
        offset: {
          offset: 0
        },
        flip: {
          behavior: 'flip'
        }
      };
      return focusedInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onOutsideClick: this.onOutsideClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_4__["Popper"], {
        placement: "bottom-end",
        referenceElement: this.getReferenceElement(focusedInput),
        modifiers: modifiers
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement,
            arrowProps = _ref2.arrowProps;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "DayPickerPopper",
          ref: ref,
          style: style,
          "data-placement": placement
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "DayPickerPopper__Arrow",
          ref: arrowProps.ref,
          style: arrowProps.style
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_9__["DayPickerRangeController"], {
          isRTL: isRTL,
          endDate: endDate,
          startDate: startDate,
          focusedInput: focusedInput,
          onDatesChange: _this3.onDatesChange,
          onFocusChange: _this3.onFocusChange,
          disabled: disabled,
          numberOfMonths: numberOfMonths,
          minimumNights: minimumNights,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          isDayBlocked: isDayBlocked,
          isDayHighlighted: isDayHighlighted,
          isOutsideRange: _this3.isOutsideRange,
          isFocused: isDayPickerFocused,
          onBlur: _this3.onDayPickerBlur,
          hideKeyboardShortcutsPanel: true,
          endDateOffset: endDateOffset,
          getMinNightsForHoverDate: getMinNightsForHoverDate
        }));
      }));
    }
  }]);

  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
DatePicker.defaultProps = defaultProps;
function createDatePicker(searchform, props) {
  var root = searchform.getRootElement().querySelector('.abrs-searchbox__dates');
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DatePicker, _extends({
    form: searchform
  }, props)), root);
}

(function () {
  window.createReactDatePicker = createDatePicker;
})();

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/and.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = andValidator;

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function andValidator(validators) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';

  if (!Array.isArray(validators)) {
    throw new TypeError('and: 2 or more validators are required');
  }

  if (validators.length <= 1) {
    throw new RangeError('and: 2 or more validators are required');
  }

  var validator = function and() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var firstError = null;
    validators.some(function (validatorFn) {
      firstError = validatorFn.apply(void 0, args);
      return firstError != null;
    });
    return firstError == null ? null : firstError;
  };

  validator.isRequired = function andIsRequired() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var firstError = null;
    validators.some(function (validatorFn) {
      firstError = validatorFn.isRequired.apply(validatorFn, args);
      return firstError != null;
    });
    return firstError == null ? null : firstError;
  };

  return (0, _wrapValidator["default"])(validator, name, validators);
}
//# sourceMappingURL=and.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/between.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = betweenValidator;

var _object = _interopRequireDefault(__webpack_require__("./node_modules/object.entries/index.js"));

var _shape = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/shape.js"));

var _valuesOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/valuesOf.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function number(props, propName, componentName) {
  var value = props[propName];

  if (typeof value === 'number' && !isNaN(value)) {
    return null;
  }

  return new TypeError("".concat(componentName, ": ").concat(propName, " must be a non-NaN number."));
}

function numberOrPropsFunc(props, propName) {
  var value = props[propName];

  if (typeof value === 'function') {
    return null;
  }

  if (typeof value === 'number' && !isNaN(value)) {
    return null;
  }

  return new TypeError("".concat(propName, ": a function, or a non-NaN number is required"));
}

function lowerCompare(value, _ref) {
  var gt = _ref.gt,
      gte = _ref.gte;

  if (typeof gt === 'number') {
    return value > gt;
  }

  if (typeof gte === 'number') {
    return value >= gte;
  }

  return true;
}

function upperCompare(value, _ref2) {
  var lt = _ref2.lt,
      lte = _ref2.lte;

  if (typeof lt === 'number') {
    return value < lt;
  }

  if (typeof lte === 'number') {
    return value <= lte;
  }

  return true;
}

function greaterThanError(_ref3) {
  var gt = _ref3.gt,
      gte = _ref3.gte;

  if (typeof gt === 'number') {
    return "greater than ".concat(gt);
  }

  if (typeof gte === 'number') {
    return "greater than or equal to ".concat(gte);
  }

  return '';
}

function lessThanError(_ref4) {
  var lt = _ref4.lt,
      lte = _ref4.lte;

  if (typeof lt === 'number') {
    return "less than ".concat(lt);
  }

  if (typeof lte === 'number') {
    return "less than or equal to ".concat(lte);
  }

  return '';
}

function errorMessage(componentName, propName, opts) {
  var errors = [greaterThanError(opts), lessThanError(opts)].filter(Boolean).join(' and ');
  return "".concat(componentName, ": ").concat(propName, " must be ").concat(errors);
}

function propsThunkify(opts) {
  return (0, _object["default"])(opts).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    var numberThunk = typeof value === 'number' ? function () {
      return value;
    } : value;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, numberThunk));
  }, {});
}

function invokeWithProps(optsThunks, props) {
  return (0, _object["default"])(optsThunks).reduce(function (acc, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        thunk = _ref8[1];

    var value = thunk(props);
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, value));
  }, {});
}

var argValidators = [(0, _shape["default"])({
  lt: numberOrPropsFunc,
  gt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lte: numberOrPropsFunc,
  gt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lt: numberOrPropsFunc,
  gte: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lte: numberOrPropsFunc,
  gte: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lte: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  gt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  gte: numberOrPropsFunc
}).isRequired];

function argValidator(props, propName) {
  return argValidators.every(function (validator) {
    return !!validator(props, propName);
  });
}

var thunkValueValidator = (0, _valuesOf["default"])(number).isRequired;

function betweenValidator(options) {
  var argError = argValidator({
    options: options
  }, 'options');

  if (argError) {
    throw new TypeError('between: only one of the pairs of `lt`/`lte`, and `gt`/`gte`, may be supplied, and at least one pair must be provided.');
  }

  var optsThunks = propsThunkify(options);

  var validator = function between(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    if (typeof propValue !== 'number') {
      return new RangeError("".concat(componentName, ": ").concat(propName, " must be a number, got \"").concat(_typeof(propValue), "\""));
    }

    var opts = invokeWithProps(optsThunks, props);

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var thunkValuesError = thunkValueValidator.apply(void 0, [_defineProperty({}, propName, opts), propName, componentName].concat(rest));

    if (thunkValuesError) {
      return thunkValuesError;
    }

    if (!lowerCompare(propValue, opts) || !upperCompare(propValue, opts)) {
      return new RangeError(errorMessage(componentName, propName, opts));
    }

    return null;
  };

  validator.isRequired = function betweenRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (typeof propValue !== 'number') {
      return new RangeError("".concat(componentName, ": ").concat(propName, " must be a number, got \"").concat(_typeof(propValue), "\""));
    }

    var opts = invokeWithProps(optsThunks, props);

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    var thunkValuesError = thunkValueValidator.apply(void 0, [_defineProperty({}, propName, opts), propName, componentName].concat(rest));

    if (thunkValuesError) {
      return thunkValuesError;
    }

    if (!lowerCompare(propValue, opts) || !upperCompare(propValue, opts)) {
      return new RangeError(errorMessage(componentName, propName, opts));
    }

    return null;
  };

  return (0, _wrapValidator["default"])(validator, 'between', options);
}
//# sourceMappingURL=between.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/booleanSome.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = booleanSomeValidator;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function booleanSomeValidator() {
  for (var _len = arguments.length, notAllPropsFalse = new Array(_len), _key = 0; _key < _len; _key++) {
    notAllPropsFalse[_key] = arguments[_key];
  }

  if (notAllPropsFalse.length < 1) {
    throw new TypeError('at least one prop (one of which must be `true`) is required');
  }

  if (!notAllPropsFalse.every(function (x) {
    return typeof x === 'string';
  })) {
    throw new TypeError('all booleanSome props must be strings');
  }

  var propsList = notAllPropsFalse.join(', or ');

  var validator = function booleanSome(props, propName, componentName) {
    var countFalse = function countFalse(count, prop) {
      return count + (props[prop] === false ? 1 : 0);
    };

    var falsePropCount = notAllPropsFalse.reduce(countFalse, 0);

    if (falsePropCount === notAllPropsFalse.length) {
      return new Error("A ".concat(componentName, " must have at least one of these boolean props be `true`: ").concat(propsList));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return _propTypes.bool.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = function booleanSomeRequired(props, propName, componentName) {
    var countFalse = function countFalse(count, prop) {
      return count + (props[prop] === false ? 1 : 0);
    };

    var falsePropCount = notAllPropsFalse.reduce(countFalse, 0);

    if (falsePropCount === notAllPropsFalse.length) {
      return new Error("A ".concat(componentName, " must have at least one of these boolean props be `true`: ").concat(propsList));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return _propTypes.bool.isRequired.apply(_propTypes.bool, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, "booleanSome: ".concat(propsList), notAllPropsFalse);
}
//# sourceMappingURL=booleanSome.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenHavePropXorChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = childrenHavePropXorChildren;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function childrenHavePropXorChildren(prop) {
  if (typeof prop !== 'string' && _typeof(prop) !== 'symbol') {
    throw new TypeError('invalid prop: must be string or symbol');
  }

  var validator = function childrenHavePropXorChildrenWithProp(_ref, _, componentName) {
    var children = _ref.children;
    var truthyChildrenCount = 0;
    var propCount = 0;
    var grandchildrenCount = 0;

    _react["default"].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }

      truthyChildrenCount += 1;

      if (child.props[prop]) {
        propCount += 1;
      }

      if (_react["default"].Children.count(child.props.children)) {
        grandchildrenCount += 1;
      }
    });

    if (propCount === truthyChildrenCount && grandchildrenCount === 0 || propCount === 0 && grandchildrenCount === truthyChildrenCount || propCount === 0 && grandchildrenCount === 0) {
      return null;
    }

    return new TypeError("`".concat(componentName, "` requires children to all have prop \u201C").concat(prop, "\u201D, all have children, or all have neither."));
  };

  validator.isRequired = validator;
  return (0, _wrapValidator["default"])(validator, "childrenHavePropXorChildrenWithProp:".concat(prop), prop);
}
//# sourceMappingURL=childrenHavePropXorChildren.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = childrenOf;

var _renderableChildren = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function validateChildren(propType, children, props) {
  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var error;
  children.some(function (child) {
    error = propType.apply(void 0, [_objectSpread(_objectSpread({}, props), {}, {
      children: child
    }), 'children'].concat(rest));
    return error;
  });
  return error || null;
}

function childrenOf(propType) {
  function childrenOfPropType(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenOf validator on non-children prop \"").concat(propName, "\""));
    }

    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    var children = (0, _renderableChildren["default"])(propValue);

    if (children.length === 0) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validateChildren.apply(void 0, [propType, children, props, componentName].concat(rest));
  }

  childrenOfPropType.isRequired = function (props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenOf validator on non-children prop \"").concat(propName, "\""));
    }

    var children = (0, _renderableChildren["default"])(props[propName]);

    if (children.length === 0) {
      return new TypeError("`".concat(componentName, "` requires at least one node of type ").concat(propType.typeName || propType.name));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return validateChildren.apply(void 0, [propType, children, props, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(childrenOfPropType, 'childrenOf', propType);
}
//# sourceMappingURL=childrenOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenOfType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrayPrototype = _interopRequireDefault(__webpack_require__("./node_modules/array.prototype.find/index.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _renderableChildren = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function onlyTypes(types, children, componentName) {
  if (!children.every(function (child) {
    return child && (0, _arrayPrototype["default"])(types, function (Type) {
      return Type === '*' || child.type === Type;
    });
  })) {
    var typeNames = types.map(_getComponentName["default"]).join(', or ');
    return new TypeError("`".concat(componentName, "` only accepts children of type ").concat(typeNames));
  }

  return null;
}

function isRequired(types, children, componentName) {
  if (children.length === 0) {
    var typeNames = types.map(_getComponentName["default"]).join(', or ');
    return new TypeError("`".concat(componentName, "` requires at least one node of type ").concat(typeNames));
  }

  return null;
}

function childrenOfType() {
  for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  if (types.length < 1) {
    throw new TypeError('childrenOfType: at least 1 type is required');
  }

  function validator(props, propName, componentName) {
    return onlyTypes(types, (0, _renderableChildren["default"])(props[propName]), componentName);
  }

  validator.isRequired = function (props, propName, componentName) {
    var children = (0, _renderableChildren["default"])(props[propName]);
    return isRequired(types, children, componentName) || onlyTypes(types, children, componentName);
  };

  return (0, _wrapValidator["default"])(validator, 'childrenOfType', types);
}

var _default = childrenOfType;
exports["default"] = _default;
//# sourceMappingURL=childrenOfType.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenSequenceOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = childrenSequenceOfValidator;

var _sequenceOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/sequenceOf.js"));

var _renderableChildren = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function childrenSequenceOfValidator() {
  for (var _len = arguments.length, specifiers = new Array(_len), _key = 0; _key < _len; _key++) {
    specifiers[_key] = arguments[_key];
  }

  var seq = _sequenceOf["default"].apply(void 0, specifiers);

  var validator = function childrenSequenceOf(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenSequenceOf validator on non-children prop \"").concat(propName, "\""));
    }

    var propValue = props[propName];
    var children = (0, _renderableChildren["default"])(propValue);

    if (children.length === 0) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return seq.apply(void 0, [_objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), propName, componentName].concat(rest));
  };

  validator.isRequired = function childrenSequenceOfRequired(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenSequenceOf validator on non-children prop \"").concat(propName, "\""));
    }

    var propValue = props[propName];
    var children = (0, _renderableChildren["default"])(propValue);

    if (children.length === 0) {
      return new TypeError("".concat(componentName, ": renderable children are required."));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return seq.isRequired.apply(seq, [_objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, 'childrenSequenceOf', specifiers);
}
//# sourceMappingURL=childrenSequenceOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/componentWithName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = componentWithName;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _isRegex = _interopRequireDefault(__webpack_require__("./node_modules/is-regex/index.js"));

var _arrayPrototype = _interopRequireDefault(__webpack_require__("./node_modules/array.prototype.find/index.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stripHOCs(fullName, namesOfHOCsToStrip) {
  var innerName = fullName;

  while (/\([^()]*\)/g.test(innerName)) {
    var HOC = innerName;
    var previousHOC = void 0;

    do {
      previousHOC = HOC;
      HOC = previousHOC.replace(/\([^()]*\)/g, '');
    } while (previousHOC !== HOC);

    if (namesOfHOCsToStrip.indexOf(HOC) === -1) {
      return innerName;
    }

    innerName = innerName.replace(RegExp("^".concat(HOC, "\\(|\\)$"), 'g'), '');
  }

  return innerName;
}

function hasName(name, namesOfHOCsToStrip, propValue, propName, componentName) {
  for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    rest[_key - 5] = arguments[_key];
  }

  if (Array.isArray(propValue)) {
    return (0, _arrayPrototype["default"])(propValue.map(function (item) {
      return hasName.apply(void 0, [name, namesOfHOCsToStrip, item, propName, componentName].concat(rest));
    }), Boolean) || null;
  }

  if (! /*#__PURE__*/_react["default"].isValidElement(propValue)) {
    return new TypeError("".concat(componentName, ".").concat(propName, " is not a valid React element"));
  }

  var type = propValue.type;
  var componentNameFromType = (0, _getComponentName["default"])(type);
  var innerComponentName = namesOfHOCsToStrip.length > 0 ? stripHOCs(componentNameFromType, namesOfHOCsToStrip) : componentNameFromType;

  if ((0, _isRegex["default"])(name) && !name.test(innerComponentName)) {
    return new TypeError("`".concat(componentName, ".").concat(propName, "` only accepts components matching the regular expression ").concat(name));
  }

  if (!(0, _isRegex["default"])(name) && innerComponentName !== name) {
    return new TypeError("`".concat(componentName, ".").concat(propName, "` only accepts components named ").concat(name, ", got ").concat(innerComponentName));
  }

  return null;
}

function componentWithName(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof name !== 'string' && !(0, _isRegex["default"])(name)) {
    throw new TypeError('name must be a string or a regex');
  }

  var passedOptions = Object.keys(options);

  if (passedOptions.length > 1 || passedOptions.length === 1 && passedOptions[0] !== 'stripHOCs') {
    throw new TypeError("The only options supported are: \u201CstripHOCs\u201D, got: \u201C".concat(passedOptions.join('”, “'), "\u201D"));
  }

  var _options$stripHOCs = options.stripHOCs,
      namesOfHOCsToStrip = _options$stripHOCs === void 0 ? [] : _options$stripHOCs;
  var allHOCNamesAreValid = namesOfHOCsToStrip.every(function (x) {
    if (typeof x !== 'string' || /[()]/g.test(x)) {
      return false;
    }

    return /^(?:[a-z][a-zA-Z0-9]+|[A-Z][a-z][a-zA-Z0-9]+)$/.test(x);
  });

  if (!allHOCNamesAreValid) {
    throw new TypeError('every provided HOC name must be a string with no parens, and in camelCase');
  }

  function componentWithNameValidator(props, propName, componentName) {
    var propValue = props[propName];

    if (props[propName] == null) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return hasName.apply(void 0, [name, namesOfHOCsToStrip, propValue, propName, componentName].concat(rest));
  }

  componentWithNameValidator.isRequired = function componentWithNameRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("`".concat(componentName, ".").concat(propName, "` requires at least one component named ").concat(name));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return hasName.apply(void 0, [name, namesOfHOCsToStrip, propValue, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(componentWithNameValidator, "componentWithName:".concat(name), name);
}
//# sourceMappingURL=componentWithName.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/disallowedIf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = disallowedIf;

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function disallowedIf(propType, otherPropName, otherPropType) {
  if (typeof propType !== 'function' || typeof propType.isRequired !== 'function') {
    throw new TypeError('a propType validator is required; propType validators must also provide `.isRequired`');
  }

  if (typeof otherPropName !== 'string') {
    throw new TypeError('other prop name must be a string');
  }

  if (typeof otherPropType !== 'function') {
    throw new TypeError('other prop type validator is required');
  }

  function disallowedIfRequired(props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var error = propType.isRequired.apply(propType, [props, propName, componentName].concat(rest));

    if (error) {
      return error;
    }

    if (props[otherPropName] == null) {
      return null;
    }

    var otherError = otherPropType.apply(void 0, [props, otherPropName, componentName].concat(rest));

    if (otherError) {
      return null;
    }

    return new Error("prop \u201C".concat(propName, "\u201D is disallowed when \u201C").concat(otherPropName, "\u201D matches the provided validator"));
  }

  var validator = function disallowedIfPropType(props, propName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      rest[_key2 - 2] = arguments[_key2];
    }

    return disallowedIfRequired.apply(void 0, [props, propName].concat(rest));
  };

  validator.isRequired = disallowedIfRequired;
  return (0, _wrapValidator["default"])(validator, 'disallowedIf', {
    propType: propType,
    otherPropName: otherPropName,
    otherPropType: otherPropType
  });
}
//# sourceMappingURL=disallowedIf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/elementType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = elementTypeValidator;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _reactIs = __webpack_require__("./node_modules/react-is/index.js");

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getTypeName(Type) {
  if (typeof Type === 'string') {
    return Type;
  }

  var type = (0, _getComponentName["default"])(Type);
  /* istanbul ignore next */
  // in environments where functions do not have names

  return type || 'Anonymous Component';
}

function validateElementType(Type, props, propName, componentName) {
  var type = props[propName].type;

  if (type === Type) {
    return null;
  }

  return new TypeError("".concat(componentName, ".").concat(propName, " must be a React element of type ").concat(getTypeName(Type)));
}

function elementTypeValidator(Type) {
  if (Type === '*') {
    return (0, _wrapValidator["default"])(_propTypes.element, 'elementType(*)', Type);
  }

  if (!(0, _reactIs.isValidElementType)(Type)) {
    throw new TypeError("Type must be a React Component, an HTML element tag name, or \"*\". Got an ".concat(_typeof(Type)));
  }

  function elementType(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return validateElementType.apply(void 0, [Type, props, propName, componentName].concat(rest));
  }

  elementType.isRequired = elementType; // covered by and + element

  var typeName = getTypeName(Type);
  var validatorName = "elementType(".concat(typeName, ")");
  return (0, _wrapValidator["default"])((0, _and["default"])([_propTypes.element, elementType], validatorName), validatorName, Type);
}
//# sourceMappingURL=elementType.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _or = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/or.js"));

var _explicitNull = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/explicitNull.js"));

var _withShape = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/withShape.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var arrayOfValidator;
var validator = (0, _or["default"])([_explicitNull["default"], // null/undefined
(0, _propTypes.oneOf)([false, '', NaN]), (0, _withShape["default"])(_propTypes.array, {
  length: (0, _propTypes.oneOf)([0]).isRequired
}).isRequired, function () {
  return arrayOfValidator.apply(void 0, arguments);
}]);
arrayOfValidator = (0, _propTypes.arrayOf)(validator).isRequired;

var _default = function _default() {
  return (0, _wrapValidator["default"])(validator, 'empty');
};

exports["default"] = _default;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/explicitNull.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function explicitNull(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }

  return new TypeError("".concat(componentName, ": prop \u201C").concat(propName, "\u201D must be null or undefined; received ").concat(_typeof(props[propName])));
}

explicitNull.isRequired = function explicitNullRequired(props, propName, componentName) {
  if (props[propName] === null) {
    return null;
  }

  return new TypeError("".concat(componentName, ": prop \u201C").concat(propName, "\u201D must be null; received ").concat(_typeof(props[propName])));
};

var _default = function _default() {
  return (0, _wrapValidator["default"])(explicitNull, 'explicitNull');
};

exports["default"] = _default;
//# sourceMappingURL=explicitNull.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/getComponentName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getComponentName;

var _functionPrototype = _interopRequireDefault(__webpack_require__("./node_modules/function.prototype.name/index.js"));

var _reactIs = __webpack_require__("./node_modules/react-is/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getComponentName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return Component.displayName || (0, _functionPrototype["default"])(Component);
  }

  if ((0, _reactIs.isForwardRef)({
    type: Component,
    $$typeof: _reactIs.Element
  })) {
    return Component.displayName;
  }

  if ((0, _reactIs.isMemo)(Component)) {
    return getComponentName(Component.type);
  }

  return null;
}
//# sourceMappingURL=getComponentName.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/isInteger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var floor = Math.floor;
var finite = isFinite;

var _default = Number.isInteger ||
/* istanbul ignore next */
function (x) {
  return typeof x === 'number' && finite(x) && floor(x) === x;
};

exports["default"] = _default;
//# sourceMappingURL=isInteger.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isPlainObject = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _isPlainObject["default"];
exports["default"] = _default;
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPrimitive;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isPrimitive(x) {
  return !x || _typeof(x) !== 'object' && typeof x !== 'function';
}
//# sourceMappingURL=isPrimitive.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderableChildren;

var _react = _interopRequireDefault(__webpack_require__("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderableChildren(childrenProp) {
  return _react["default"].Children.toArray(childrenProp).filter(function (child) {
    return child === 0 || child;
  });
}
//# sourceMappingURL=renderableChildren.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/typeOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = typeOf;

var _react = _interopRequireDefault(__webpack_require__("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function typeOf(child) {
  if (child === null) {
    return 'null';
  }

  if (Array.isArray(child)) {
    return 'array';
  }

  if (_typeof(child) !== 'object') {
    return _typeof(child);
  }

  if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
    return child.type;
  }

  return child;
}
//# sourceMappingURL=typeOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapValidator;

var _object = _interopRequireDefault(__webpack_require__("./node_modules/object.assign/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function wrapValidator(validator, typeName) {
  var typeChecker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _object["default"])(validator.bind(), {
    typeName: typeName,
    typeChecker: typeChecker,
    isRequired: (0, _object["default"])(validator.isRequired.bind(), {
      typeName: typeName,
      typeChecker: typeChecker,
      typeRequired: true
    })
  });
}
//# sourceMappingURL=wrapValidator.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _between = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/between.js"));

var _booleanSome = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/booleanSome.js"));

var _childrenHavePropXorChildren = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/childrenHavePropXorChildren.js"));

var _childrenOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/childrenOf.js"));

var _childrenOfType = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/childrenOfType.js"));

var _childrenSequenceOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/childrenSequenceOf.js"));

var _componentWithName = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/componentWithName.js"));

var _disallowedIf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/disallowedIf.js"));

var _elementType = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/elementType.js"));

var _empty = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/empty.js"));

var _explicitNull = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/explicitNull.js"));

var _integer = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/integer.js"));

var _keysOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/keysOf.js"));

var _mutuallyExclusiveProps = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/mutuallyExclusiveProps.js"));

var _mutuallyExclusiveTrueProps = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/mutuallyExclusiveTrueProps.js"));

var _nChildren = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/nChildren.js"));

var _nonNegativeInteger = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/nonNegativeInteger.js"));

var _nonNegativeNumber = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/nonNegativeNumber.js"));

var _numericString = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/numericString.js"));

var _object = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/object.js"));

var _or = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/or.js"));

var _predicate = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/predicate.js"));

var _range = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/range.js"));

var _ref = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/ref.js"));

var _requiredBy = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/requiredBy.js"));

var _restrictedProp = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/restrictedProp.js"));

var _sequenceOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/sequenceOf.js"));

var _shape = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/shape.js"));

var _stringEndsWith = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/stringEndsWith.js"));

var _stringStartsWith = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/stringStartsWith.js"));

var _uniqueArray = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/uniqueArray.js"));

var _uniqueArrayOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/uniqueArrayOf.js"));

var _valuesOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/valuesOf.js"));

var _withShape = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/withShape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  and: _and["default"],
  between: _between["default"],
  booleanSome: _booleanSome["default"],
  childrenHavePropXorChildren: _childrenHavePropXorChildren["default"],
  childrenOf: _childrenOf["default"],
  childrenOfType: _childrenOfType["default"],
  childrenSequenceOf: _childrenSequenceOf["default"],
  componentWithName: _componentWithName["default"],
  disallowedIf: _disallowedIf["default"],
  elementType: _elementType["default"],
  empty: _empty["default"],
  explicitNull: _explicitNull["default"],
  forbidExtraProps: _propTypesExact["default"],
  integer: _integer["default"],
  keysOf: _keysOf["default"],
  mutuallyExclusiveProps: _mutuallyExclusiveProps["default"],
  mutuallyExclusiveTrueProps: _mutuallyExclusiveTrueProps["default"],
  nChildren: _nChildren["default"],
  nonNegativeInteger: _nonNegativeInteger["default"],
  nonNegativeNumber: _nonNegativeNumber["default"],
  numericString: _numericString["default"],
  object: _object["default"],
  or: _or["default"],
  predicate: _predicate["default"],
  range: _range["default"],
  ref: _ref["default"],
  requiredBy: _requiredBy["default"],
  restrictedProp: _restrictedProp["default"],
  sequenceOf: _sequenceOf["default"],
  shape: _shape["default"],
  stringEndsWith: _stringEndsWith["default"],
  stringStartsWith: _stringStartsWith["default"],
  uniqueArray: _uniqueArray["default"],
  uniqueArrayOf: _uniqueArrayOf["default"],
  valuesOf: _valuesOf["default"],
  withShape: _withShape["default"]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/integer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isInteger = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isInteger.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function requiredInteger(props, propName, componentName) {
  var propValue = props[propName];

  if (propValue == null || !(0, _isInteger["default"])(propValue)) {
    return new RangeError("".concat(propName, " in ").concat(componentName, " must be an integer"));
  }

  return null;
}

var validator = function integer(props, propName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  return requiredInteger.apply(void 0, [props, propName].concat(rest));
};

validator.isRequired = requiredInteger;

var _default = function _default() {
  return (0, _wrapValidator["default"])(validator, 'integer');
};

exports["default"] = _default;
//# sourceMappingURL=integer.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/keysOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = keysOfValidator;

var _isPrimitive = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function keysOfValidator(propType) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keysOf';

  if (typeof propType !== 'function') {
    throw new TypeError('argument to keysOf must be a valid PropType function');
  }

  var validator = function keysOf(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (propValue == null || (0, _isPrimitive["default"])(propValue)) {
      return null;
    }

    var firstError = null;
    Object.keys(propValue).some(function (key) {
      firstError = propType.apply(void 0, [_defineProperty({}, key, key), key, componentName, location, "(".concat(propFullName, ").").concat(key)].concat(rest));
      return firstError != null;
    });
    return firstError || null;
  };

  validator.isRequired = function keyedByRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " is required, but value is ").concat(propValue));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, name, propType);
}
//# sourceMappingURL=keysOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/mutuallyExclusiveProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mutuallyExclusiveOfType;

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mutuallyExclusiveOfType(propType) {
  if (typeof propType !== 'function') {
    throw new TypeError('a propType is required');
  }

  for (var _len = arguments.length, exclusiveProps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    exclusiveProps[_key - 1] = arguments[_key];
  }

  if (exclusiveProps.length < 1) {
    throw new TypeError('at least one prop that is mutually exclusive with this propType is required');
  }

  var propList = exclusiveProps.join(', or ');
  var map = exclusiveProps.reduce(function (acc, prop) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, true));
  }, {});

  var countProps = function countProps(count, prop) {
    return count + (map[prop] ? 1 : 0);
  };

  var validator = function mutuallyExclusiveProps(props, propName, componentName) {
    var exclusivePropCount = Object.keys(props).filter(function (prop) {
      return props[prop] != null;
    }).reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these props: ").concat(propList));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = function mutuallyExclusivePropsRequired(props, propName, componentName) {
    var exclusivePropCount = Object.keys(props).filter(function (prop) {
      return prop === propName || props[prop] != null;
    }).reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these props: ").concat(propList));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, "mutuallyExclusiveProps:".concat(propList), exclusiveProps);
}
//# sourceMappingURL=mutuallyExclusiveProps.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/mutuallyExclusiveTrueProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mutuallyExclusiveTrue;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mutuallyExclusiveTrue() {
  for (var _len = arguments.length, exclusiveProps = new Array(_len), _key = 0; _key < _len; _key++) {
    exclusiveProps[_key] = arguments[_key];
  }

  if (exclusiveProps.length < 1) {
    throw new TypeError('at least one prop that is mutually exclusive is required');
  }

  if (!exclusiveProps.every(function (x) {
    return typeof x === 'string';
  })) {
    throw new TypeError('all exclusive true props must be strings');
  }

  var propsList = exclusiveProps.join(', or ');

  var validator = function mutuallyExclusiveTrueProps(props, propName, componentName) {
    var countProps = function countProps(count, prop) {
      return count + (props[prop] ? 1 : 0);
    };

    var exclusivePropCount = exclusiveProps.reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these boolean props be true: ").concat(propsList));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return _propTypes.bool.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = function mutuallyExclusiveTruePropsRequired(props, propName, componentName) {
    var countProps = function countProps(count, prop) {
      return count + (props[prop] ? 1 : 0);
    };

    var exclusivePropCount = exclusiveProps.reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these boolean props be true: ").concat(propsList));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return _propTypes.bool.isRequired.apply(_propTypes.bool, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, "mutuallyExclusiveTrueProps: ".concat(propsList), exclusiveProps);
}
//# sourceMappingURL=mutuallyExclusiveTrueProps.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/nChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = nChildren;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function nChildren(n) {
  var propType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _propTypes.node;

  if (typeof n !== 'number' || isNaN(n) || n < 0) {
    throw new TypeError('a non-negative number is required');
  }

  var validator = function nChildrenValidator(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the nChildren validator on a non-children prop"));
    }

    var children = props.children;

    var childrenCount = _react["default"].Children.count(children);

    if (childrenCount !== n) {
      return new RangeError("".concat(componentName, " expects to receive ").concat(n, " children, but received ").concat(childrenCount, " children."));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = validator;
  return (0, _wrapValidator["default"])(validator, "nChildren:".concat(n), n);
}
//# sourceMappingURL=nChildren.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/nonNegativeInteger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _integer = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/integer.js"));

var _nonNegativeNumber = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/nonNegativeNumber.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _and["default"])([(0, _integer["default"])(), (0, _nonNegativeNumber["default"])()], 'nonNegativeInteger');

exports["default"] = _default;
//# sourceMappingURL=nonNegativeInteger.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/nonNegativeNumber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectIs = _interopRequireDefault(__webpack_require__("./node_modules/object-is/index.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNonNegative(x) {
  return typeof x === 'number' && isFinite(x) && x >= 0 && !(0, _objectIs["default"])(x, -0);
}

function nonNegativeNumber(props, propName, componentName) {
  var value = props[propName];

  if (value == null || isNonNegative(value)) {
    return null;
  }

  return new RangeError("".concat(propName, " in ").concat(componentName, " must be a non-negative number"));
}

function requiredNonNegativeNumber(props, propName, componentName) {
  var value = props[propName];

  if (isNonNegative(value)) {
    return null;
  }

  return new RangeError("".concat(propName, " in ").concat(componentName, " must be a non-negative number"));
}

nonNegativeNumber.isRequired = requiredNonNegativeNumber;

var _default = function _default() {
  return (0, _wrapValidator["default"])(nonNegativeNumber, 'nonNegativeNumber');
};

exports["default"] = _default;
//# sourceMappingURL=nonNegativeNumber.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/numericString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validNumericChars = /^[-+]?(?:[1-9][0-9]*(?:\.[0-9]+)?|0|0\.[0-9]+)$/;

var validator = function numericString(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var stringError = _propTypes.string.apply(void 0, [props, propName, componentName].concat(rest));

  if (stringError) {
    return stringError;
  }

  var value = props[propName];
  var passesRegex = validNumericChars.test(value);

  if (passesRegex) {
    return null;
  }

  return new TypeError("".concat(componentName, ": prop \"").concat(propName, "\" (value \"").concat(value, "\") must be a numeric string:\n    - starting with an optional + or -\n    - that does not have a leading zero\n    - with an optional decimal part (that contains only one decimal point, if present)\n    - that otherwise only contains digits (0-9)\n    - not +-NaN, or +-Infinity\n  "));
};

validator.isRequired = function numericStringRequired(props, propName, componentName) {
  if (props[propName] == null) {
    return new TypeError("".concat(componentName, ": ").concat(propName, " is required"));
  }

  for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    rest[_key2 - 3] = arguments[_key2];
  }

  return validator.apply(void 0, [props, propName, componentName].concat(rest));
};

var _default = function _default() {
  return (0, _wrapValidator["default"])(validator, 'numericString');
};

exports["default"] = _default;
//# sourceMappingURL=numericString.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/object.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isPlainObject = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js"));

var _typeOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/typeOf.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  code adapted from https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L202-L206
  so that it can be called outside of React's normal PropType flow
*/
var ReactPropTypeLocationNames = {
  prop: 'prop',
  context: 'context',
  childContext: 'child context'
};

function object(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  if ((0, _isPlainObject["default"])(propValue)) {
    return null;
  }

  var locationName = ReactPropTypeLocationNames[location] || location;
  return new TypeError("Invalid ".concat(locationName, " `").concat(propFullName, "` of type `").concat((0, _typeOf["default"])(propValue), "` supplied to `").concat(componentName, "`, expected `object`."));
}

object.isRequired = function objectRequired(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (propValue == null) {
    var locationName = ReactPropTypeLocationNames[location] || location;
    return new TypeError("The ".concat(locationName, " `").concat(propFullName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(propValue, "`."));
  }

  for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    rest[_key - 5] = arguments[_key];
  }

  return object.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
};

var _default = function _default() {
  return (0, _wrapValidator["default"])(object, 'object');
};

exports["default"] = _default;
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/or.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = or;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function oneOfTypeValidator(validators) {
  var validator = function oneOfType(props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var propValue = props[propName];

    if (typeof propValue === 'undefined') {
      return null;
    }

    var errors = validators.map(function (v) {
      return v.apply(void 0, [props, propName, componentName].concat(rest));
    }).filter(Boolean);

    if (errors.length < validators.length) {
      return null;
    }

    return new TypeError("".concat(componentName, ": invalid value supplied to ").concat(propName, "."));
  };

  validator.isRequired = function oneOfTypeRequired(props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    var propValue = props[propName];

    if (typeof propValue === 'undefined') {
      return new TypeError("".concat(componentName, ": missing value for required ").concat(propName, "."));
    }

    var errors = validators.map(function (v) {
      return v.apply(void 0, [props, propName, componentName].concat(rest));
    }).filter(Boolean);

    if (errors.length === validators.length) {
      return new TypeError("".concat(componentName, ": invalid value ").concat(errors, " supplied to required ").concat(propName, "."));
    }

    return null;
  };

  return (0, _wrapValidator["default"])(validator, 'oneOfType', validators);
}

function or(validators) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'or';

  if (!Array.isArray(validators)) {
    throw new TypeError('or: 2 or more validators are required');
  }

  if (validators.length <= 1) {
    throw new RangeError('or: 2 or more validators are required');
  }

  var validator = oneOfTypeValidator([(0, _propTypes.arrayOf)(oneOfTypeValidator(validators))].concat(_toConsumableArray(validators)));
  return (0, _wrapValidator["default"])(validator, name, validators);
}
//# sourceMappingURL=or.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/predicate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = predicate;

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function predicate(fn) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof fn !== 'function') {
    throw new TypeError('`fn` must be a function');
  }

  if (typeof message !== 'string') {
    throw new TypeError('`message`, if provided, must be a string');
  }

  function requiredValidator(props, propName, componentName) {
    var result = fn(props[propName]);

    if (result) {
      return null;
    }

    return new TypeError("`".concat(componentName, "` requires that `").concat(propName, "` pass a predicate function").concat(message ? ": ".concat(message) : '', "."));
  }

  function validator(props, propName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    return requiredValidator.apply(void 0, [props, propName].concat(rest));
  }

  validator.isRequired = requiredValidator;
  return (0, _wrapValidator["default"])(validator, 'predicate', fn);
}
//# sourceMappingURL=predicate.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/range.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = range;

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _between = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/between.js"));

var _integer = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/integer.js"));

var _isInteger = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isInteger.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
Math.pow(2, 53) - 1;

function isValidLength(x) {
  return (0, _isInteger["default"])(x) && Math.abs(x) < MAX_SAFE_INTEGER;
}

function range(min, max) {
  if (!isValidLength(min) || !isValidLength(max)) {
    throw new RangeError("\"range\" requires two integers: ".concat(min, " and ").concat(max, " given"));
  }

  if (min === max) {
    throw new RangeError('min and max must not be the same');
  }

  return (0, _wrapValidator["default"])((0, _and["default"])([(0, _integer["default"])(), (0, _between["default"])({
    gte: min,
    lt: max
  })], 'range'), 'range', {
    min: min,
    max: max
  });
}
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/ref.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__("react");

var _isPlainObject = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isPrototypeOf = Object.prototype.isPrototypeOf;

function isNewRef(prop) {
  if (!(0, _isPlainObject["default"])(prop)) {
    return false;
  }

  var ownProperties = Object.keys(prop);
  return ownProperties.length === 1 && ownProperties[0] === 'current';
}

function isCallbackRef(prop) {
  return typeof prop === 'function' && !isPrototypeOf.call(_react.Component, prop) && (!_react.PureComponent || !isPrototypeOf.call(_react.PureComponent, prop));
}

function requiredRef(props, propName, componentName) {
  var propValue = props[propName];

  if (isCallbackRef(propValue) || isNewRef(propValue)) {
    return null;
  }

  return new TypeError("".concat(propName, " in ").concat(componentName, " must be a ref"));
}

function ref(props, propName, componentName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  return requiredRef.apply(void 0, [props, propName, componentName].concat(rest));
}

ref.isRequired = requiredRef;

var _default = function _default() {
  return (0, _wrapValidator["default"])(ref, 'ref');
};

exports["default"] = _default;
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/requiredBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRequiredBy;

var _objectIs = _interopRequireDefault(__webpack_require__("./node_modules/object-is/index.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getRequiredBy(requiredByPropName, propType) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  function requiredBy(props, propName, componentName) {
    if (props[requiredByPropName]) {
      var propValue = props[propName];

      if ((0, _objectIs["default"])(propValue, defaultValue) || typeof propValue === 'undefined') {
        return new TypeError("".concat(componentName, ": when ").concat(requiredByPropName, " is true, prop \u201C").concat(propName, "\u201D must be present."));
      }
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  }

  requiredBy.isRequired = function requiredByRequired(props, propName, componentName) {
    var propValue = props[propName];

    if ((0, _objectIs["default"])(propValue, defaultValue)) {
      return new TypeError("".concat(componentName, ": prop \u201C").concat(propName, "\u201D must be present."));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return propType.isRequired.apply(propType, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(requiredBy, "requiredBy \u201C".concat(requiredByPropName, "\u201D"), [requiredByPropName, defaultValue]);
}
//# sourceMappingURL=requiredBy.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/restrictedProp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function customMessageWrapper(messsageFunction) {
  function restrictedProp(props, propName, componentName, location) {
    if (props[propName] == null) {
      return null;
    }

    if (messsageFunction && typeof messsageFunction === 'function') {
      for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        rest[_key - 4] = arguments[_key];
      }

      return new TypeError(messsageFunction.apply(void 0, [props, propName, componentName, location].concat(rest)));
    }

    return new TypeError("The ".concat(propName, " ").concat(location, " on ").concat(componentName, " is not allowed."));
  }

  restrictedProp.isRequired = restrictedProp;
  return restrictedProp;
}

var _default = function _default() {
  var messsageFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _wrapValidator["default"])(customMessageWrapper(messsageFunction), 'restrictedProp');
};

exports["default"] = _default;
//# sourceMappingURL=restrictedProp.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/sequenceOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sequenceOfValidator;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _between = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/between.js"));

var _nonNegativeInteger = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/nonNegativeInteger.js"));

var _object = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/object.js"));

var _withShape = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/withShape.js"));

var _typeOf = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/typeOf.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var minValidator = _nonNegativeInteger["default"];
var maxValidator = (0, _and["default"])([_nonNegativeInteger["default"], (0, _between["default"])({
  gte: 1
})]);

function validateRange(min, max) {
  if (typeof max !== 'number' || typeof min !== 'number') {
    return null; // no additional checking needed unless both are present
  }

  if (min <= max) {
    return null;
  }

  return new RangeError('min must be less than or equal to max');
}

var specifierShape = {
  validator: function validator(props, propName) {
    var propValue = props[propName];

    if (typeof propValue !== 'function') {
      return new TypeError('"validator" must be a propType validator function');
    }

    return null;
  },
  min: function min(props, propName) {
    return minValidator(props, propName) || validateRange(props.min, props.max);
  },
  max: function max(props, propName) {
    return maxValidator(props, propName) || validateRange(props.min, props.max);
  }
};

function getMinMax(_ref) {
  var min = _ref.min,
      max = _ref.max;
  var minimum;
  var maximum;

  if (typeof min !== 'number' && typeof max !== 'number') {
    // neither provided, default to "1"
    minimum = 1;
    maximum = 1;
  } else {
    minimum = typeof min === 'number' ? min : 1;
    maximum = typeof max === 'number' ? max : Infinity;
  }

  return {
    minimum: minimum,
    maximum: maximum
  };
}

function chunkByType(items) {
  var chunk = [];
  var lastType;
  return items.reduce(function (chunks, item) {
    var itemType = (0, _typeOf["default"])(item);

    if (!lastType || itemType === lastType) {
      chunk.push(item);
    } else {
      chunks.push(chunk);
      chunk = [item];
    }

    lastType = itemType;
    return chunks;
  }, []).concat(chunk.length > 0 ? [chunk] : []);
}

function validateChunks(specifiers, props, propName, componentName) {
  var items = props[propName];
  var chunks = chunkByType(items);

  for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    rest[_key - 4] = arguments[_key];
  }

  for (var i = 0; i < specifiers.length; i += 1) {
    var _specifiers$i = specifiers[i],
        validator = _specifiers$i.validator,
        min = _specifiers$i.min,
        max = _specifiers$i.max;

    var _getMinMax = getMinMax({
      min: min,
      max: max
    }),
        minimum = _getMinMax.minimum,
        maximum = _getMinMax.maximum;

    if (chunks.length === 0 && minimum === 0) {
      // no chunks left, but this specifier does not require any items
      continue; // eslint-disable-line no-continue
    }

    var arrayOfValidator = (0, _propTypes.arrayOf)(validator).isRequired;
    var chunk = chunks.shift(); // extract the next chunk to test

    var chunkError = arrayOfValidator.apply(void 0, [_objectSpread(_objectSpread({}, props), {}, _defineProperty({}, propName, chunk)), propName, componentName].concat(rest));

    if (chunkError) {
      // this chunk is invalid
      if (minimum === 0) {
        // but, specifier has a min of 0 and can be skipped
        chunks.unshift(chunk); // put the chunk back, for the next iteration

        continue; // eslint-disable-line no-continue
      }

      return chunkError;
    } // chunk is valid!


    if (chunk.length < minimum) {
      return new RangeError("".concat(componentName, ": specifier index ").concat(i, " requires a minimum of ").concat(min, " items, but only has ").concat(chunk.length, "."));
    }

    if (chunk.length > maximum) {
      return new RangeError("".concat(componentName, ": specifier index ").concat(i, " requires a maximum of ").concat(max, " items, but has ").concat(chunk.length, "."));
    }
  }

  if (chunks.length > 0) {
    return new TypeError("".concat(componentName, ": after all ").concat(specifiers.length, " specifiers matched, ").concat(chunks.length, " types of items were remaining."));
  }

  return null;
}

var specifierValidator = (0, _withShape["default"])((0, _object["default"])(), specifierShape).isRequired;

function sequenceOfValidator() {
  for (var _len2 = arguments.length, specifiers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    specifiers[_key2] = arguments[_key2];
  }

  if (specifiers.length === 0) {
    throw new RangeError('sequenceOf: at least one specifier is required');
  }

  var errors = specifiers.map(function (specifier, i) {
    return specifierValidator({
      specifier: specifier
    }, 'specifier', 'sequenceOf specifier', "suequenceOf specifier, index ".concat(i), "specifier, index ".concat(i));
  });

  if (errors.some(Boolean)) {
    throw new TypeError("\n      sequenceOf: all specifiers must match the appropriate shape.\n\n      Errors:\n        ".concat(errors.map(function (e, i) {
      return " - Argument index ".concat(i, ": ").concat(e.message);
    }).join(',\n        '), "\n    "));
  }

  var validator = function sequenceOf(props, propName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      rest[_key3 - 2] = arguments[_key3];
    }

    var error = _propTypes.array.apply(void 0, [props, propName].concat(rest));

    if (error) {
      return error;
    }

    return validateChunks.apply(void 0, [specifiers, props, propName].concat(rest));
  };

  validator.isRequired = function sequenceOfRequired(props, propName, componentName) {
    for (var _len4 = arguments.length, rest = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
      rest[_key4 - 3] = arguments[_key4];
    }

    var error = _propTypes.array.isRequired.apply(_propTypes.array, [props, propName, componentName].concat(rest));

    if (error) {
      return error;
    }

    return validateChunks.apply(void 0, [specifiers, props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, 'sequenceOf', specifiers);
}
//# sourceMappingURL=sequenceOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/shape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shapeValidator;

var _isPlainObject = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function shapeValidator(shapeTypes) {
  if (!(0, _isPlainObject["default"])(shapeTypes)) {
    throw new TypeError('shape must be a normal object');
  }

  function shape(props, propName, componentName, location) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    } // code adapted from PropTypes.shape: https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L381
    // eslint-disable-next-line guard-for-in, no-restricted-syntax


    for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    for (var key in shapeTypes) {
      var checker = shapeTypes[key];

      if (checker) {
        var error = checker.apply(void 0, [propValue, key, componentName, location].concat(rest));

        if (error) {
          return error;
        }
      }
    }

    return null;
  }

  shape.isRequired = function shapeRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " is required."));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return shape.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(shape, 'shape', shapeTypes);
}
//# sourceMappingURL=shape.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/stringEndsWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stringEndsWithValidator;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stringEndsWithValidator(end) {
  if (typeof end !== 'string' || end.length === 0) {
    throw new TypeError('a non-empty string is required');
  }

  var validator = function stringEndsWith(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var stringError = _propTypes.string.apply(void 0, [props, propName, componentName].concat(rest));

    if (stringError) {
      return stringError;
    }

    if (!propValue.endsWith(end) || propValue.length <= end.length) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " does not end with \"").concat(end, "\""));
    }

    return null;
  };

  validator.isRequired = function requiredStringEndsWith() {
    var stringError = _propTypes.string.isRequired.apply(_propTypes.string, arguments);

    if (stringError) {
      return stringError;
    }

    return validator.apply(void 0, arguments);
  };

  return (0, _wrapValidator["default"])(validator, "stringEndsWith: ".concat(end));
}
//# sourceMappingURL=stringEndsWith.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/stringStartsWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stringStartsWithValidator;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stringStartsWithValidator(start) {
  if (typeof start !== 'string' || start.length === 0) {
    throw new TypeError('a non-empty string is required');
  }

  var validator = function stringStartsWith(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var stringError = _propTypes.string.apply(void 0, [props, propName, componentName].concat(rest));

    if (stringError) {
      return stringError;
    }

    if (!propValue.startsWith(start) || propValue.length <= start.length) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " does not start with \"").concat(start, "\""));
    }

    return null;
  };

  validator.isRequired = function requiredStringStartsWith() {
    var stringError = _propTypes.string.isRequired.apply(_propTypes.string, arguments);

    if (stringError) {
      return stringError;
    }

    return validator.apply(void 0, arguments);
  };

  return (0, _wrapValidator["default"])(validator, "stringStartsWith: ".concat(start));
}
//# sourceMappingURL=stringStartsWith.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/uniqueArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function uniqueCountWithSet(arr) {
  return new Set(arr).size;
}
/* istanbul ignore next */


function uniqueCountLegacy(arr) {
  var seen = [];
  arr.forEach(function (item) {
    if (seen.indexOf(item) === -1) {
      seen.push(item);
    }
  });
  return seen.length;
}

var getUniqueCount = typeof Set === 'function' ? uniqueCountWithSet :
/* istanbul ignore next */
uniqueCountLegacy;

function requiredUniqueArray(props, propName, componentName) {
  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var result = _propTypes.array.isRequired.apply(_propTypes.array, [props, propName, componentName].concat(rest));

  if (result != null) {
    return result;
  }

  var propValue = props[propName];
  var uniqueCount = getUniqueCount(propValue);

  if (uniqueCount !== propValue.length) {
    return new RangeError("".concat(componentName, ": values must be unique. ").concat(propValue.length - uniqueCount, " duplicate values found."));
  }

  return null;
}

function uniqueArray(props, propName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len2 = arguments.length, rest = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    rest[_key2 - 2] = arguments[_key2];
  }

  return requiredUniqueArray.apply(void 0, [props, propName].concat(rest));
}

uniqueArray.isRequired = requiredUniqueArray;

var _default = function _default() {
  return (0, _wrapValidator["default"])(uniqueArray, 'uniqueArray');
};

exports["default"] = _default;
//# sourceMappingURL=uniqueArray.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/uniqueArrayOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uniqueArrayOfTypeValidator;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _uniqueArray = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/uniqueArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unique = (0, _uniqueArray["default"])();

function uniqueArrayOfTypeValidator(type) {
  if (typeof type !== 'function') {
    throw new TypeError('type must be a validator function');
  }

  var mapper = null;
  var name = 'uniqueArrayOfType';

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  if (rest.length === 1) {
    if (typeof rest[0] === 'function') {
      mapper = rest[0];
    } else if (typeof rest[0] === 'string') {
      name = rest[0];
    } else {
      throw new TypeError('single input must either be string or function');
    }
  } else if (rest.length === 2) {
    if (typeof rest[0] === 'function' && typeof rest[1] === 'string') {
      mapper = rest[0];
      name = rest[1];
    } else {
      throw new TypeError('multiple inputs must be in [function, string] order');
    }
  } else if (rest.length > 2) {
    throw new TypeError('only [], [name], [mapper], and [mapper, name] are valid inputs');
  }

  function uniqueArrayOfMapped(props, propName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    var values = propValue.map(mapper);

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return unique.apply(void 0, [_objectSpread(_objectSpread({}, props), {}, _defineProperty({}, propName, values)), propName].concat(args));
  }

  uniqueArrayOfMapped.isRequired = function isRequired(props, propName) {
    var propValue = props[propName];

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    if (propValue == null) {
      return _propTypes.array.isRequired.apply(_propTypes.array, [props, propName].concat(args));
    }

    return uniqueArrayOfMapped.apply(void 0, [props, propName].concat(args));
  };

  var arrayValidator = (0, _propTypes.arrayOf)(type);
  var uniqueValidator = mapper ? uniqueArrayOfMapped : unique;
  var validator = (0, _and["default"])([arrayValidator, uniqueValidator], name);
  validator.isRequired = (0, _and["default"])([uniqueValidator.isRequired, arrayValidator.isRequired], "".concat(name, ".isRequired"));
  return validator;
}
//# sourceMappingURL=uniqueArrayOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/valuesOf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = valuesOfValidator;

var _isPrimitive = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// code adapted from https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L307-L340
function valuesOfValidator(propType) {
  if (typeof propType !== 'function') {
    throw new TypeError('objectOf: propType must be a function');
  }

  var validator = function valuesOf(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (propValue == null || (0, _isPrimitive["default"])(propValue)) {
      return null;
    }

    var firstError;
    Object.keys(propValue).some(function (key) {
      firstError = propType.apply(void 0, [propValue, key, componentName, location, "".concat(propFullName, ".").concat(key)].concat(rest));
      return firstError;
    });
    return firstError || null;
  };

  validator.isRequired = function valuesOfRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " is required."));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, 'valuesOf', propType);
}
//# sourceMappingURL=valuesOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/withShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withShape;

var _and = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/and.js"));

var _shape = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/shape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function withShape(type, shapeTypes) {
  if (typeof type !== 'function') {
    throw new TypeError('type must be a valid PropType');
  }

  var shapeValidator = (0, _shape["default"])(shapeTypes);
  return (0, _and["default"])([type, shapeValidator], 'withShape');
}
//# sourceMappingURL=withShape.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports =  false ? undefined : __webpack_require__("./node_modules/airbnb-prop-types/build/index.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/array.prototype.find/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ToObject = __webpack_require__("./node_modules/es-abstract/2019/ToObject.js");
var ToLength = __webpack_require__("./node_modules/es-abstract/2019/ToLength.js");
var IsCallable = __webpack_require__("./node_modules/es-abstract/2019/IsCallable.js");

module.exports = function find(predicate) {
	var list = ToObject(this);
	var length = ToLength(list.length);
	if (!IsCallable(predicate)) {
		throw new TypeError('Array#find: predicate must be a function');
	}
	if (length === 0) {
		return void 0;
	}
	var thisArg;
	if (arguments.length > 0) {
		thisArg = arguments[1];
	}

	for (var i = 0, value; i < length; i++) {
		value = list[i];
		// inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
		if (predicate.apply(thisArg, [value, i, list])) {
			return value;
		}
	}
	return void 0;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var RequireObjectCoercible = __webpack_require__("./node_modules/es-abstract/2019/RequireObjectCoercible.js");

var implementation = __webpack_require__("./node_modules/array.prototype.find/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/array.prototype.find/polyfill.js");
var shim = __webpack_require__("./node_modules/array.prototype.find/shim.js");

var slice = Array.prototype.slice;

var polyfill = getPolyfill();

var boundFindShim = function find(array, predicate) { // eslint-disable-line no-unused-vars
	RequireObjectCoercible(array);
	var args = slice.call(arguments, 1);
	return polyfill.apply(array, args);
};

define(boundFindShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFindShim;


/***/ }),

/***/ "./node_modules/array.prototype.find/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getPolyfill() {
	// Detect if an implementation exists
	// Detect early implementations which skipped holes in sparse arrays
	// eslint-disable-next-line no-sparse-arrays
	var implemented = Array.prototype.find && [, 1].find(function () {
		return true;
	}) !== 1;

	// eslint-disable-next-line global-require
	return implemented ? Array.prototype.find : __webpack_require__("./node_modules/array.prototype.find/implementation.js");
};


/***/ }),

/***/ "./node_modules/array.prototype.find/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/array.prototype.find/polyfill.js");

module.exports = function shimArrayPrototypeFind() {
	var polyfill = getPolyfill();

	define(Array.prototype, { find: polyfill }, {
		find: function () {
			return Array.prototype.find !== polyfill;
		}
	});

	return polyfill;
};


/***/ }),

/***/ "./node_modules/array.prototype.flat/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArraySpeciesCreate = __webpack_require__("./node_modules/es-abstract/2019/ArraySpeciesCreate.js");
var FlattenIntoArray = __webpack_require__("./node_modules/es-abstract/2019/FlattenIntoArray.js");
var Get = __webpack_require__("./node_modules/es-abstract/2019/Get.js");
var ToInteger = __webpack_require__("./node_modules/es-abstract/2019/ToInteger.js");
var ToLength = __webpack_require__("./node_modules/es-abstract/2019/ToLength.js");
var ToObject = __webpack_require__("./node_modules/es-abstract/2019/ToObject.js");

module.exports = function flat() {
	var O = ToObject(this);
	var sourceLen = ToLength(Get(O, 'length'));

	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ToInteger(arguments[0]);
	}

	var A = ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	return A;
};


/***/ }),

/***/ "./node_modules/array.prototype.flat/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__("./node_modules/array.prototype.flat/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/array.prototype.flat/polyfill.js");
var polyfill = getPolyfill();
var shim = __webpack_require__("./node_modules/array.prototype.flat/shim.js");

var boundFlat = callBind(polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ "./node_modules/array.prototype.flat/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/array.prototype.flat/implementation.js");

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ "./node_modules/array.prototype.flat/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/array.prototype.flat/polyfill.js");

module.exports = function shimFlat() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ flat: polyfill },
		{ flat: function () { return Array.prototype.flat !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/consolidated-events/lib/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}




/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__("./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__("./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__("./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__("./node_modules/object-keys/index.js");
var isArguments = __webpack_require__("./node_modules/is-arguments/index.js");
var is = __webpack_require__("./node_modules/object-is/index.js");
var isRegex = __webpack_require__("./node_modules/is-regex/index.js");
var flags = __webpack_require__("./node_modules/regexp.prototype.flags/index.js");
var isDate = __webpack_require__("./node_modules/is-date-object/index.js");

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/document.contains/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function contains(other) {
	if (arguments.length < 1) {
		throw new TypeError('1 argument is required');
	}
	if (typeof other !== 'object') {
		throw new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');
	}

	var node = other;
	do {
		if (this === node) {
			return true;
		}
		if (node) {
			node = node.parentNode;
		}
	} while (node);

	return false;
};


/***/ }),

/***/ "./node_modules/document.contains/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/document.contains/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/document.contains/polyfill.js");
var polyfill = getPolyfill();
var shim = __webpack_require__("./node_modules/document.contains/shim.js");

var boundContains = function contains(node, other) {
	return polyfill.apply(node, [other]);
};

define(boundContains, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundContains;


/***/ }),

/***/ "./node_modules/document.contains/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/document.contains/implementation.js");

module.exports = function getPolyfill() {
	if (typeof document !== 'undefined') {
		if (document.contains) {
			return document.contains;
		}
		if (document.body && document.body.contains) {
			try {
				if (typeof document.body.contains.call(document, '') === 'boolean') {
					return document.body.contains;
				}
			} catch (e) { /**/ }
		}
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/document.contains/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/document.contains/polyfill.js");

module.exports = function shimContains() {
	var polyfill = getPolyfill();
	if (typeof document !== 'undefined') {
		define(
			document,
			{ contains: polyfill },
			{ contains: function () { return document.contains !== polyfill; } }
		);
		if (typeof Element !== 'undefined') {
			define(
				Element.prototype,
				{ contains: polyfill },
				{ contains: function () { return Element.prototype.contains !== polyfill; } }
			);
		}
	}
	return polyfill;
};


/***/ }),

/***/ "./node_modules/enzyme-shallow-equal/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shallowEqual;

var _objectIs = _interopRequireDefault(__webpack_require__("./node_modules/object-is/index.js"));

var _has = _interopRequireDefault(__webpack_require__("./node_modules/has/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// adapted from https://github.com/facebook/react/blob/144328fe81719e916b946e22660479e31561bb0b/packages/shared/shallowEqual.js#L36-L68
function shallowEqual(objA, objB) {
  if ((0, _objectIs["default"])(objA, objB)) {
    return true;
  }

  if (!objA || !objB || _typeof(objA) !== 'object' || _typeof(objB) !== 'object') {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  keysA.sort();
  keysB.sort(); // Test for A's keys different from B.

  for (var i = 0; i < keysA.length; i += 1) {
    if (!(0, _has["default"])(objB, keysA[i]) || !(0, _objectIs["default"])(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzaGFsbG93RXF1YWwiLCJvYmpBIiwib2JqQiIsImtleXNBIiwiT2JqZWN0Iiwia2V5cyIsImtleXNCIiwibGVuZ3RoIiwic29ydCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7QUFDZSxTQUFTQSxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDL0MsTUFBSSwwQkFBR0QsSUFBSCxFQUFTQyxJQUFULENBQUosRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0MsSUFBVixJQUFrQixRQUFPRCxJQUFQLE1BQWdCLFFBQWxDLElBQThDLFFBQU9DLElBQVAsTUFBZ0IsUUFBbEUsRUFBNEU7QUFDMUUsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixDQUFkO0FBQ0EsTUFBTUssS0FBSyxHQUFHRixNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixDQUFkOztBQUVBLE1BQUlDLEtBQUssQ0FBQ0ksTUFBTixLQUFpQkQsS0FBSyxDQUFDQyxNQUEzQixFQUFtQztBQUNqQyxXQUFPLEtBQVA7QUFDRDs7QUFFREosRUFBQUEsS0FBSyxDQUFDSyxJQUFOO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsSUFBTixHQWpCK0MsQ0FtQi9DOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sS0FBSyxDQUFDSSxNQUExQixFQUFrQ0UsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0FBQ3hDLFFBQUksQ0FBQyxxQkFBSVAsSUFBSixFQUFVQyxLQUFLLENBQUNNLENBQUQsQ0FBZixDQUFELElBQXdCLENBQUMsMEJBQUdSLElBQUksQ0FBQ0UsS0FBSyxDQUFDTSxDQUFELENBQU4sQ0FBUCxFQUFtQlAsSUFBSSxDQUFDQyxLQUFLLENBQUNNLENBQUQsQ0FBTixDQUF2QixDQUE3QixFQUFpRTtBQUMvRCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzIGZyb20gJ29iamVjdC1pcyc7XG5pbXBvcnQgaGFzIGZyb20gJ2hhcyc7XG5cbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNDQzMjhmZTgxNzE5ZTkxNmI5NDZlMjI2NjA0NzllMzE1NjFiYjBiL3BhY2thZ2VzL3NoYXJlZC9zaGFsbG93RXF1YWwuanMjTDM2LUw2OFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIW9iakEgfHwgIW9iakIgfHwgdHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAga2V5c0Euc29ydCgpO1xuICBrZXlzQi5zb3J0KCk7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICghaGFzKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIl19
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/es-abstract/2019/ArraySpeciesCreate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__("./node_modules/es-abstract/2019/Get.js");
var IsArray = __webpack_require__("./node_modules/es-abstract/2019/IsArray.js");
var IsConstructor = __webpack_require__("./node_modules/es-abstract/2019/IsConstructor.js");
var IsInteger = __webpack_require__("./node_modules/es-abstract/2019/IsInteger.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};



/***/ }),

/***/ "./node_modules/es-abstract/2019/Call.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");
var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");

var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('%Function.prototype.apply%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	return $apply(F, V, args);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/CreateDataProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = __webpack_require__("./node_modules/es-abstract/helpers/DefineOwnProperty.js");

var FromPropertyDescriptor = __webpack_require__("./node_modules/es-abstract/2019/FromPropertyDescriptor.js");
var OrdinaryGetOwnProperty = __webpack_require__("./node_modules/es-abstract/2019/OrdinaryGetOwnProperty.js");
var IsDataDescriptor = __webpack_require__("./node_modules/es-abstract/2019/IsDataDescriptor.js");
var IsExtensible = __webpack_require__("./node_modules/es-abstract/2019/IsExtensible.js");
var IsPropertyKey = __webpack_require__("./node_modules/es-abstract/2019/IsPropertyKey.js");
var SameValue = __webpack_require__("./node_modules/es-abstract/2019/SameValue.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = OrdinaryGetOwnProperty(O, P);
	var extensible = !oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc['[[Writable]]'] || !oldDesc['[[Configurable]]']);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/CreateDataPropertyOrThrow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = __webpack_require__("./node_modules/es-abstract/2019/CreateDataProperty.js");
var IsPropertyKey = __webpack_require__("./node_modules/es-abstract/2019/IsPropertyKey.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/DefinePropertyOrThrow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = __webpack_require__("./node_modules/es-abstract/helpers/isPropertyDescriptor.js");
var DefineOwnProperty = __webpack_require__("./node_modules/es-abstract/helpers/DefineOwnProperty.js");

var FromPropertyDescriptor = __webpack_require__("./node_modules/es-abstract/2019/FromPropertyDescriptor.js");
var IsAccessorDescriptor = __webpack_require__("./node_modules/es-abstract/2019/IsAccessorDescriptor.js");
var IsDataDescriptor = __webpack_require__("./node_modules/es-abstract/2019/IsDataDescriptor.js");
var IsPropertyKey = __webpack_require__("./node_modules/es-abstract/2019/IsPropertyKey.js");
var SameValue = __webpack_require__("./node_modules/es-abstract/2019/SameValue.js");
var ToPropertyDescriptor = __webpack_require__("./node_modules/es-abstract/2019/ToPropertyDescriptor.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/FlattenIntoArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var MAX_SAFE_INTEGER = __webpack_require__("./node_modules/es-abstract/helpers/maxSafeInteger.js");

var Call = __webpack_require__("./node_modules/es-abstract/2019/Call.js");
var CreateDataPropertyOrThrow = __webpack_require__("./node_modules/es-abstract/2019/CreateDataPropertyOrThrow.js");
var Get = __webpack_require__("./node_modules/es-abstract/2019/Get.js");
var HasProperty = __webpack_require__("./node_modules/es-abstract/2019/HasProperty.js");
var IsArray = __webpack_require__("./node_modules/es-abstract/2019/IsArray.js");
var ToLength = __webpack_require__("./node_modules/es-abstract/2019/ToLength.js");
var ToString = __webpack_require__("./node_modules/es-abstract/2019/ToString.js");

// https://ecma-international.org/ecma-262/10.0/#sec-flattenintoarray

// eslint-disable-next-line max-params, max-statements
module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = ToLength(Get(element, 'length'));
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/FromPropertyDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assertRecord = __webpack_require__("./node_modules/es-abstract/helpers/assertRecord.js");

var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/Get.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__("./node_modules/object-inspect/index.js");

var IsPropertyKey = __webpack_require__("./node_modules/es-abstract/2019/IsPropertyKey.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/HasProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = __webpack_require__("./node_modules/es-abstract/2019/IsPropertyKey.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsAccessorDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("./node_modules/has/src/index.js");

var assertRecord = __webpack_require__("./node_modules/es-abstract/helpers/assertRecord.js");

var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__("./node_modules/es-abstract/helpers/callBound.js")('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsCallable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__("./node_modules/is-callable/index.js");


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsConstructor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = __webpack_require__("./node_modules/es-abstract/2019/DefinePropertyOrThrow.js");
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsDataDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("./node_modules/has/src/index.js");

var assertRecord = __webpack_require__("./node_modules/es-abstract/helpers/assertRecord.js");

var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsExtensible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Object = GetIntrinsic('%Object%');

var isPrimitive = __webpack_require__("./node_modules/es-abstract/helpers/isPrimitive.js");

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) {
		return !isPrimitive(obj);
	};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsInteger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = __webpack_require__("./node_modules/es-abstract/helpers/isNaN.js");
var $isFinite = __webpack_require__("./node_modules/es-abstract/helpers/isFinite.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsPropertyKey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsRegExp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = __webpack_require__("./node_modules/is-regex/index.js");

var ToBoolean = __webpack_require__("./node_modules/es-abstract/2019/ToBoolean.js");

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/OrdinaryGetOwnProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $gOPD = __webpack_require__("./node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = __webpack_require__("./node_modules/has/src/index.js");

var IsArray = __webpack_require__("./node_modules/es-abstract/2019/IsArray.js");
var IsPropertyKey = __webpack_require__("./node_modules/es-abstract/2019/IsPropertyKey.js");
var IsRegExp = __webpack_require__("./node_modules/es-abstract/2019/IsRegExp.js");
var ToPropertyDescriptor = __webpack_require__("./node_modules/es-abstract/2019/ToPropertyDescriptor.js");
var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/RequireObjectCoercible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/es-abstract/5/CheckObjectCoercible.js");


/***/ }),

/***/ "./node_modules/es-abstract/2019/SameValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__("./node_modules/es-abstract/helpers/isNaN.js");

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToBoolean.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToInteger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5ToInteger = __webpack_require__("./node_modules/es-abstract/5/ToInteger.js");

var ToNumber = __webpack_require__("./node_modules/es-abstract/2019/ToNumber.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToLength.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = __webpack_require__("./node_modules/es-abstract/helpers/maxSafeInteger.js");

var ToInteger = __webpack_require__("./node_modules/es-abstract/2019/ToInteger.js");

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToNumber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");
var regexTester = __webpack_require__("./node_modules/es-abstract/helpers/regexTester.js");
var isPrimitive = __webpack_require__("./node_modules/es-abstract/helpers/isPrimitive.js");

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__("./node_modules/es-abstract/2019/ToPrimitive.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__("./node_modules/es-abstract/2019/RequireObjectCoercible.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToPrimitive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__("./node_modules/es-to-primitive/es2015.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToPropertyDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("./node_modules/has/src/index.js");

var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__("./node_modules/es-abstract/2019/Type.js");
var ToBoolean = __webpack_require__("./node_modules/es-abstract/2019/ToBoolean.js");
var IsCallable = __webpack_require__("./node_modules/es-abstract/2019/IsCallable.js");

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/ToString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/Type.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__("./node_modules/es-abstract/5/Type.js");

// https://ecma-international.org/ecma-262/6.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};


/***/ }),

/***/ "./node_modules/es-abstract/5/CheckObjectCoercible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),

/***/ "./node_modules/es-abstract/5/ToInteger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Math = GetIntrinsic('%Math%');

var ToNumber = __webpack_require__("./node_modules/es-abstract/5/ToNumber.js");
var $isNaN = __webpack_require__("./node_modules/es-abstract/helpers/isNaN.js");
var $isFinite = __webpack_require__("./node_modules/es-abstract/helpers/isFinite.js");
var $sign = __webpack_require__("./node_modules/es-abstract/helpers/sign.js");

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * $floor($abs(number));
};


/***/ }),

/***/ "./node_modules/es-abstract/5/ToNumber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	return +value; // eslint-disable-line no-implicit-coercion
};


/***/ }),

/***/ "./node_modules/es-abstract/5/Type.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),

/***/ "./node_modules/es-abstract/GetIntrinsic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__("./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__("./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/DefineOwnProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/assertRecord.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__("./node_modules/has/src/index.js");

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/callBind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/callBound.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "./node_modules/es-abstract/helpers/isFinite.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ "./node_modules/es-abstract/helpers/isNaN.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/isPrimitive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/isPropertyDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var has = __webpack_require__("./node_modules/has/src/index.js");
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/maxSafeInteger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;


/***/ }),

/***/ "./node_modules/es-abstract/helpers/regexTester.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("./node_modules/es-abstract/GetIntrinsic.js");

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/sign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ "./node_modules/es-to-primitive/es2015.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__("./node_modules/es-to-primitive/helpers/isPrimitive.js");
var isCallable = __webpack_require__("./node_modules/is-callable/index.js");
var isDate = __webpack_require__("./node_modules/is-date-object/index.js");
var isSymbol = __webpack_require__("./node_modules/is-symbol/index.js");

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),

/***/ "./node_modules/es-to-primitive/helpers/isPrimitive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/function.prototype.name/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IsCallable = __webpack_require__("./node_modules/es-abstract/2019/IsCallable.js");
var functionsHaveNames = __webpack_require__("./node_modules/functions-have-names/index.js")();
var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');

var classRegex = /^class /;

var isClass = function isClassConstructor(fn) {
	if (IsCallable(fn)) {
		return false;
	}
	if (typeof fn !== 'function') {
		return false;
	}
	try {
		var match = $stringMatch($functionToString(fn), classRegex);
		return !!match;
	} catch (e) {}
	return false;
};

var regex = /\s*function\s+([^(\s]*)\s*/;

var functionProto = Function.prototype;

module.exports = function getName() {
	if (!isClass(this) && !IsCallable(this)) {
		throw new TypeError('Function.prototype.name sham getter called on non-function');
	}
	if (functionsHaveNames) {
		return this.name;
	}
	if (this === functionProto) {
		return '';
	}
	var str = $functionToString(this);
	var match = $stringMatch(str, regex);
	var name = match && match[1];
	return name;
};


/***/ }),

/***/ "./node_modules/function.prototype.name/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__("./node_modules/function.prototype.name/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/function.prototype.name/polyfill.js");
var shim = __webpack_require__("./node_modules/function.prototype.name/shim.js");

var bound = callBind(implementation);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "./node_modules/function.prototype.name/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function.prototype.name/implementation.js");

module.exports = function getPolyfill() {
	return implementation;
};


/***/ }),

/***/ "./node_modules/function.prototype.name/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__("./node_modules/define-properties/index.js").supportsDescriptors;
var functionsHaveNames = __webpack_require__("./node_modules/functions-have-names/index.js")();
var getPolyfill = __webpack_require__("./node_modules/function.prototype.name/polyfill.js");
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;

module.exports = function shimName() {
	var polyfill = getPolyfill();
	if (functionsHaveNames) {
		return polyfill;
	}
	if (!supportsDescriptors) {
		throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
	}
	var functionProto = Function.prototype;
	defineProperty(functionProto, 'name', {
		configurable: true,
		enumerable: false,
		get: function () {
			var name = polyfill.call(this);
			if (this !== functionProto) {
				defineProperty(this, 'name', {
					configurable: true,
					enumerable: false,
					value: name,
					writable: false
				});
			}
			return name;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/functions-have-names/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	return functionsHaveNames() && gOPD && !!gOPD(function () {}, 'name').configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;


/***/ }),

/***/ "./node_modules/global-cache/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var define = __webpack_require__("./node_modules/define-properties/index.js");
var isSymbol = __webpack_require__("./node_modules/is-symbol/index.js");

var globalKey = '__ global cache key __';
/* istanbul ignore else */
// eslint-disable-next-line no-restricted-properties
if (typeof Symbol === 'function' && isSymbol(Symbol('foo')) && typeof Symbol['for'] === 'function') {
	// eslint-disable-next-line no-restricted-properties
	globalKey = Symbol['for'](globalKey);
}

var trueThunk = function () {
	return true;
};

var ensureCache = function ensureCache() {
	if (!global[globalKey]) {
		var properties = {};
		properties[globalKey] = {};
		var predicates = {};
		predicates[globalKey] = trueThunk;
		define(global, properties, predicates);
	}
	return global[globalKey];
};

var cache = ensureCache();

var isPrimitive = function isPrimitive(val) {
	return val === null || (typeof val !== 'object' && typeof val !== 'function');
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	clear: function clear() {
		delete global[globalKey];
		cache = ensureCache();
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var primitiveKey = getPrimitiveKey(key);
		var props = {};
		props[primitiveKey] = value;
		var predicates = {};
		predicates[primitiveKey] = trueThunk;
		define(cache, props, predicates);
		return globalCache.has(key);
	},

	setIfMissingThenGet: function setIfMissingThenGet(key, valueThunk) {
		if (globalCache.has(key)) {
			return globalCache.get(key);
		}
		var item = valueThunk();
		globalCache.set(key, item);
		return item;
	}
};

module.exports = globalCache;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/gud/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__("./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./node_modules/is-callable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
	} catch (_) {
		reflectApply = null;
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = reflectApply
	? function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "./node_modules/is-regex/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__("./node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var hasOwnProperty;
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwnProperty(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),

/***/ "./node_modules/is-symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__("./node_modules/has-symbols/index.js")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ "./node_modules/is-touch-device/build/index.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isTouchDevice;
function isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__("./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(13).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__("./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object-is/polyfill.js");
var shim = __webpack_require__("./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__("./node_modules/object-is/polyfill.js");
var define = __webpack_require__("./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__("./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object.entries/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RequireObjectCoercible = __webpack_require__("./node_modules/es-abstract/2019/RequireObjectCoercible.js");
var has = __webpack_require__("./node_modules/has/src/index.js");
var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function entries(O) {
	var obj = RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
	return entrys;
};


/***/ }),

/***/ "./node_modules/object.entries/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__("./node_modules/object.entries/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.entries/polyfill.js");
var shim = __webpack_require__("./node_modules/object.entries/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.entries/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.entries/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};


/***/ }),

/***/ "./node_modules/object.entries/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__("./node_modules/object.entries/polyfill.js");
var define = __webpack_require__("./node_modules/define-properties/index.js");

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { entries: polyfill }, {
		entries: function testEntries() {
			return Object.entries !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object.values/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("./node_modules/has/src/index.js");
var RequireObjectCoercible = __webpack_require__("./node_modules/es-abstract/2019/RequireObjectCoercible.js");
var callBound = __webpack_require__("./node_modules/es-abstract/helpers/callBound.js");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			vals.push(obj[key]);
		}
	}
	return vals;
};


/***/ }),

/***/ "./node_modules/object.values/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.values/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.values/polyfill.js");
var shim = __webpack_require__("./node_modules/object.values/shim.js");

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.values/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.values/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};


/***/ }),

/***/ "./node_modules/object.values/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__("./node_modules/object.values/polyfill.js");
var define = __webpack_require__("./node_modules/define-properties/index.js");

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__("./node_modules/react-is/index.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__("./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/raf/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__("./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-dates/constants.js":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("./node_modules/react-dates/lib/constants.js");


/***/ }),

/***/ "./node_modules/react-dates/index.js":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("./node_modules/react-dates/lib/index.js");


/***/ }),

/***/ "./node_modules/react-dates/initialize.js":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__("./node_modules/react-dates/lib/initialize.js");


/***/ }),

/***/ "./node_modules/react-dates/lib/components/CalendarDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureCalendarDay = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _raf = _interopRequireDefault(__webpack_require__("./node_modules/raf/index.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _getCalendarDaySettings = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getCalendarDaySettings.js"));

var _ModifiersShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ModifiersShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  day: _reactMomentProptypes["default"].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes["default"].bool,
  modifiers: _ModifiersShape["default"],
  isFocused: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOf([0, -1]),
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  ariaLabelFormat: _propTypes["default"].string,
  // internationalization
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases))
})) : undefined;
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarDay =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(CalendarDay, _ref);
  var _proto = CalendarDay.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function CalendarDay() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ref.call.apply(_ref, [this].concat(args)) || this;
    _this.setButtonRef = _this.setButtonRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var _this$props = this.props,
        isFocused = _this$props.isFocused,
        tabIndex = _this$props.tabIndex;

    if (tabIndex === 0) {
      if (isFocused || tabIndex !== prevProps.tabIndex) {
        (0, _raf["default"])(function () {
          if (_this2.buttonRef) {
            _this2.buttonRef.focus();
          }
        });
      }
    }
  };

  _proto.onDayClick = function onDayClick(day, e) {
    var onDayClick = this.props.onDayClick;
    onDayClick(day, e);
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day, e) {
    var onDayMouseEnter = this.props.onDayMouseEnter;
    onDayMouseEnter(day, e);
  };

  _proto.onDayMouseLeave = function onDayMouseLeave(day, e) {
    var onDayMouseLeave = this.props.onDayMouseLeave;
    onDayMouseLeave(day, e);
  };

  _proto.onKeyDown = function onKeyDown(day, e) {
    var onDayClick = this.props.onDayClick;
    var key = e.key;

    if (key === 'Enter' || key === ' ') {
      onDayClick(day, e);
    }
  };

  _proto.setButtonRef = function setButtonRef(ref) {
    this.buttonRef = ref;
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        day = _this$props2.day,
        ariaLabelFormat = _this$props2.ariaLabelFormat,
        daySize = _this$props2.daySize,
        isOutsideDay = _this$props2.isOutsideDay,
        modifiers = _this$props2.modifiers,
        renderDayContents = _this$props2.renderDayContents,
        tabIndex = _this$props2.tabIndex,
        styles = _this$props2.styles,
        phrases = _this$props2.phrases;
    if (!day) return _react["default"].createElement("td", null);

    var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
        daySizeStyles = _getCalendarDaySettin.daySizeStyles,
        useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
        selected = _getCalendarDaySettin.selected,
        hoveredSpan = _getCalendarDaySettin.hoveredSpan,
        isOutsideRange = _getCalendarDaySettin.isOutsideRange,
        ariaLabel = _getCalendarDaySettin.ariaLabel;

    return _react["default"].createElement("td", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, styles.CalendarDay__default, isOutsideDay && styles.CalendarDay__outside, modifiers.has('today') && styles.CalendarDay__today, modifiers.has('first-day-of-week') && styles.CalendarDay__firstDayOfWeek, modifiers.has('last-day-of-week') && styles.CalendarDay__lastDayOfWeek, modifiers.has('hovered-offset') && styles.CalendarDay__hovered_offset, modifiers.has('hovered-start-first-possible-end') && styles.CalendarDay__hovered_start_first_possible_end, modifiers.has('hovered-start-blocked-minimum-nights') && styles.CalendarDay__hovered_start_blocked_min_nights, modifiers.has('highlighted-calendar') && styles.CalendarDay__highlighted_calendar, modifiers.has('blocked-minimum-nights') && styles.CalendarDay__blocked_minimum_nights, modifiers.has('blocked-calendar') && styles.CalendarDay__blocked_calendar, hoveredSpan && styles.CalendarDay__hovered_span, modifiers.has('after-hovered-start') && styles.CalendarDay__after_hovered_start, modifiers.has('selected-span') && styles.CalendarDay__selected_span, modifiers.has('selected-start') && styles.CalendarDay__selected_start, modifiers.has('selected-end') && styles.CalendarDay__selected_end, selected && !modifiers.has('selected-span') && styles.CalendarDay__selected, modifiers.has('before-hovered-end') && styles.CalendarDay__before_hovered_end, modifiers.has('no-selected-start-before-selected-end') && styles.CalendarDay__no_selected_start_before_selected_end, modifiers.has('selected-start-in-hovered-span') && styles.CalendarDay__selected_start_in_hovered_span, modifiers.has('selected-end-in-hovered-span') && styles.CalendarDay__selected_end_in_hovered_span, modifiers.has('selected-start-no-selected-end') && styles.CalendarDay__selected_start_no_selected_end, modifiers.has('selected-end-no-selected-start') && styles.CalendarDay__selected_end_no_selected_start, isOutsideRange && styles.CalendarDay__blocked_out_of_range, daySizeStyles), {
      role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
      ,
      ref: this.setButtonRef,
      "aria-disabled": modifiers.has('blocked'),
      "aria-label": ariaLabel,
      onMouseEnter: function onMouseEnter(e) {
        _this3.onDayMouseEnter(day, e);
      },
      onMouseLeave: function onMouseLeave(e) {
        _this3.onDayMouseLeave(day, e);
      },
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      },
      onClick: function onClick(e) {
        _this3.onDayClick(day, e);
      },
      onKeyDown: function onKeyDown(e) {
        _this3.onKeyDown(day, e);
      },
      tabIndex: tabIndex
    }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
  };

  return CalendarDay;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureCalendarDay = CalendarDay;
CalendarDay.propTypes =  true ? propTypes : undefined;
CalendarDay.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    },
    CalendarDay__default: {
      border: "1px solid ".concat(color.core.borderLight),
      color: color.text,
      background: color.background,
      ':hover': {
        background: color.core.borderLight,
        border: "1px solid ".concat(color.core.borderLight),
        color: 'inherit'
      }
    },
    CalendarDay__hovered_offset: {
      background: color.core.borderBright,
      border: "1px double ".concat(color.core.borderLight),
      color: 'inherit'
    },
    CalendarDay__outside: {
      border: 0,
      background: color.outside.backgroundColor,
      color: color.outside.color,
      ':hover': {
        border: 0
      }
    },
    CalendarDay__blocked_minimum_nights: {
      background: color.minimumNights.backgroundColor,
      border: "1px solid ".concat(color.minimumNights.borderColor),
      color: color.minimumNights.color,
      ':hover': {
        background: color.minimumNights.backgroundColor_hover,
        color: color.minimumNights.color_active
      },
      ':active': {
        background: color.minimumNights.backgroundColor_active,
        color: color.minimumNights.color_active
      }
    },
    CalendarDay__highlighted_calendar: {
      background: color.highlighted.backgroundColor,
      color: color.highlighted.color,
      ':hover': {
        background: color.highlighted.backgroundColor_hover,
        color: color.highlighted.color_active
      },
      ':active': {
        background: color.highlighted.backgroundColor_active,
        color: color.highlighted.color_active
      }
    },
    CalendarDay__selected_span: {
      background: color.selectedSpan.backgroundColor,
      border: "1px double ".concat(color.selectedSpan.borderColor),
      color: color.selectedSpan.color,
      ':hover': {
        background: color.selectedSpan.backgroundColor_hover,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      },
      ':active': {
        background: color.selectedSpan.backgroundColor_active,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      }
    },
    CalendarDay__selected: {
      background: color.selected.backgroundColor,
      border: "1px double ".concat(color.selected.borderColor),
      color: color.selected.color,
      ':hover': {
        background: color.selected.backgroundColor_hover,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      },
      ':active': {
        background: color.selected.backgroundColor_active,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      }
    },
    CalendarDay__hovered_span: {
      background: color.hoveredSpan.backgroundColor,
      border: "1px double ".concat(color.hoveredSpan.borderColor),
      color: color.hoveredSpan.color,
      ':hover': {
        background: color.hoveredSpan.backgroundColor_hover,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      },
      ':active': {
        background: color.hoveredSpan.backgroundColor_active,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      }
    },
    CalendarDay__blocked_calendar: {
      background: color.blocked_calendar.backgroundColor,
      border: "1px solid ".concat(color.blocked_calendar.borderColor),
      color: color.blocked_calendar.color,
      ':hover': {
        background: color.blocked_calendar.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      },
      ':active': {
        background: color.blocked_calendar.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      }
    },
    CalendarDay__blocked_out_of_range: {
      background: color.blocked_out_of_range.backgroundColor,
      border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
      color: color.blocked_out_of_range.color,
      ':hover': {
        background: color.blocked_out_of_range.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      },
      ':active': {
        background: color.blocked_out_of_range.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      }
    },
    CalendarDay__hovered_start_first_possible_end: {
      background: color.core.borderLighter,
      border: "1px double ".concat(color.core.borderLighter)
    },
    CalendarDay__hovered_start_blocked_min_nights: {
      background: color.core.borderLighter,
      border: "1px double ".concat(color.core.borderLight)
    },
    CalendarDay__selected_start: {},
    CalendarDay__selected_end: {},
    CalendarDay__today: {},
    CalendarDay__firstDayOfWeek: {},
    CalendarDay__lastDayOfWeek: {},
    CalendarDay__after_hovered_start: {},
    CalendarDay__before_hovered_end: {},
    CalendarDay__no_selected_start_before_selected_end: {},
    CalendarDay__selected_start_in_hovered_span: {},
    CalendarDay__selected_end_in_hovered_span: {},
    CalendarDay__selected_start_no_selected_end: {},
    CalendarDay__selected_end_no_selected_start: {}
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarDay);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/CalendarIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var CalendarIcon = function CalendarIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z"
  }));
};

CalendarIcon.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1393.1 1500"
};
var _default = CalendarIcon;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/CalendarMonth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _CalendarWeek = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarWeek.js"));

var _CalendarDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarDay.js"));

var _calculateDimension = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/calculateDimension.js"));

var _getCalendarMonthWeeks = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getCalendarMonthWeeks.js"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

var _toISODateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISODateString.js"));

var _ModifiersShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ModifiersShape.js"));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  month: _reactMomentProptypes["default"].momentObj,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  isVisible: _propTypes["default"].bool,
  enableOutsideDays: _propTypes["default"].bool,
  modifiers: _propTypes["default"].objectOf(_ModifiersShape["default"]),
  orientation: _ScrollableOrientationShape["default"],
  daySize: _airbnbPropTypes.nonNegativeInteger,
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  onMonthSelect: _propTypes["default"].func,
  onYearSelect: _propTypes["default"].func,
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  firstDayOfWeek: _DayOfWeekShape["default"],
  setMonthTitleHeight: _propTypes["default"].func,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  focusedDate: _reactMomentProptypes["default"].momentObj,
  // indicates focusable day
  isFocused: _propTypes["default"].bool,
  // indicates whether or not to move focus to focusable day
  // i18n
  monthFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
})) : undefined;
var defaultProps = {
  month: (0, _moment["default"])(),
  horizontalMonthPadding: 13,
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  daySize: _constants.DAY_SIZE,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthSelect: function onMonthSelect() {},
  onYearSelect: function onYearSelect() {},
  renderMonthText: null,
  renderCalendarDay: function renderCalendarDay(props) {
    return _react["default"].createElement(_CalendarDay["default"], props);
  },
  renderDayContents: null,
  renderMonthElement: null,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  focusedDate: null,
  isFocused: false,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined,
  verticalBorderSpacing: undefined
};

var CalendarMonth =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(CalendarMonth, _ref);
  var _proto = CalendarMonth.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function CalendarMonth(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.state = {
      weeks: (0, _getCalendarMonthWeeks["default"])(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };
    _this.setCaptionRef = _this.setCaptionRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.setMonthTitleHeightTimeout = setTimeout(this.setMonthTitleHeight, 0);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var month = nextProps.month,
        enableOutsideDays = nextProps.enableOutsideDays,
        firstDayOfWeek = nextProps.firstDayOfWeek;
    var _this$props = this.props,
        prevMonth = _this$props.month,
        prevEnableOutsideDays = _this$props.enableOutsideDays,
        prevFirstDayOfWeek = _this$props.firstDayOfWeek;

    if (!month.isSame(prevMonth) || enableOutsideDays !== prevEnableOutsideDays || firstDayOfWeek !== prevFirstDayOfWeek) {
      this.setState({
        weeks: (0, _getCalendarMonthWeeks["default"])(month, enableOutsideDays, firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : firstDayOfWeek)
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.setMonthTitleHeightTimeout) {
      clearTimeout(this.setMonthTitleHeightTimeout);
    }
  };

  _proto.setMonthTitleHeight = function setMonthTitleHeight() {
    var setMonthTitleHeight = this.props.setMonthTitleHeight;

    if (setMonthTitleHeight) {
      var captionHeight = (0, _calculateDimension["default"])(this.captionRef, 'height', true, true);
      setMonthTitleHeight(captionHeight);
    }
  };

  _proto.setCaptionRef = function setCaptionRef(ref) {
    this.captionRef = ref;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        dayAriaLabelFormat = _this$props2.dayAriaLabelFormat,
        daySize = _this$props2.daySize,
        focusedDate = _this$props2.focusedDate,
        horizontalMonthPadding = _this$props2.horizontalMonthPadding,
        isFocused = _this$props2.isFocused,
        isVisible = _this$props2.isVisible,
        modifiers = _this$props2.modifiers,
        month = _this$props2.month,
        monthFormat = _this$props2.monthFormat,
        onDayClick = _this$props2.onDayClick,
        onDayMouseEnter = _this$props2.onDayMouseEnter,
        onDayMouseLeave = _this$props2.onDayMouseLeave,
        onMonthSelect = _this$props2.onMonthSelect,
        onYearSelect = _this$props2.onYearSelect,
        orientation = _this$props2.orientation,
        phrases = _this$props2.phrases,
        renderCalendarDay = _this$props2.renderCalendarDay,
        renderDayContents = _this$props2.renderDayContents,
        renderMonthElement = _this$props2.renderMonthElement,
        renderMonthText = _this$props2.renderMonthText,
        styles = _this$props2.styles,
        verticalBorderSpacing = _this$props2.verticalBorderSpacing;
    var weeks = this.state.weeks;
    var monthTitle = renderMonthText ? renderMonthText(month) : month.format(monthFormat);
    var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    return _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.CalendarMonth, {
      padding: "0 ".concat(horizontalMonthPadding, "px")
    }), {
      "data-visible": isVisible
    }), _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setCaptionRef
    }, (0, _reactWithStyles.css)(styles.CalendarMonth_caption, verticalScrollable && styles.CalendarMonth_caption__verticalScrollable)), renderMonthElement ? renderMonthElement({
      month: month,
      onMonthSelect: onMonthSelect,
      onYearSelect: onYearSelect,
      isVisible: isVisible
    }) : _react["default"].createElement("strong", null, monthTitle)), _react["default"].createElement("table", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(!verticalBorderSpacing && styles.CalendarMonth_table, verticalBorderSpacing && styles.CalendarMonth_verticalSpacing, verticalBorderSpacing && {
      borderSpacing: "0px ".concat(verticalBorderSpacing, "px")
    }), {
      role: "presentation"
    }), _react["default"].createElement("tbody", null, weeks.map(function (week, i) {
      return _react["default"].createElement(_CalendarWeek["default"], {
        key: i
      }, week.map(function (day, dayOfWeek) {
        return renderCalendarDay({
          key: dayOfWeek,
          day: day,
          daySize: daySize,
          isOutsideDay: !day || day.month() !== month.month(),
          tabIndex: isVisible && (0, _isSameDay["default"])(day, focusedDate) ? 0 : -1,
          isFocused: isFocused,
          onDayMouseEnter: onDayMouseEnter,
          onDayMouseLeave: onDayMouseLeave,
          onDayClick: onDayClick,
          renderDayContents: renderDayContents,
          phrases: phrases,
          modifiers: modifiers[(0, _toISODateString["default"])(day)],
          ariaLabelFormat: dayAriaLabelFormat
        });
      }));
    }))));
  };

  return CalendarMonth;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonth.propTypes =  true ? propTypes : undefined;
CalendarMonth.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font,
      spacing = _ref2$reactDates.spacing;
  return {
    CalendarMonth: {
      background: color.background,
      textAlign: 'center',
      verticalAlign: 'top',
      userSelect: 'none'
    },
    CalendarMonth_table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    CalendarMonth_verticalSpacing: {
      borderCollapse: 'separate'
    },
    CalendarMonth_caption: {
      color: color.text,
      fontSize: font.captionSize,
      textAlign: 'center',
      paddingTop: spacing.captionPaddingTop,
      paddingBottom: spacing.captionPaddingBottom,
      captionSide: 'initial'
    },
    CalendarMonth_caption__verticalScrollable: {
      paddingTop: 12,
      paddingBottom: 7
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonth);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/CalendarMonthGrid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _consolidatedEvents = __webpack_require__("./node_modules/consolidated-events/lib/index.esm.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _CalendarMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarMonth.js"));

var _isTransitionEndSupported = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isTransitionEndSupported.js"));

var _getTransformStyles = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getTransformStyles.js"));

var _getCalendarMonthWidth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getCalendarMonthWidth.js"));

var _toISOMonthString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISOMonthString.js"));

var _isPrevMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isPrevMonth.js"));

var _isNextMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isNextMonth.js"));

var _ModifiersShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ModifiersShape.js"));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  enableOutsideDays: _propTypes["default"].bool,
  firstVisibleMonthIndex: _propTypes["default"].number,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  initialMonth: _reactMomentProptypes["default"].momentObj,
  isAnimating: _propTypes["default"].bool,
  numberOfMonths: _propTypes["default"].number,
  modifiers: _propTypes["default"].objectOf(_propTypes["default"].objectOf(_ModifiersShape["default"])),
  orientation: _ScrollableOrientationShape["default"],
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  onMonthTransitionEnd: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  onYearChange: _propTypes["default"].func,
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  translationValue: _propTypes["default"].number,
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  daySize: _airbnbPropTypes.nonNegativeInteger,
  focusedDate: _reactMomentProptypes["default"].momentObj,
  // indicates focusable day
  isFocused: _propTypes["default"].bool,
  // indicates whether or not to move focus to focusable day
  firstDayOfWeek: _DayOfWeekShape["default"],
  setMonthTitleHeight: _propTypes["default"].func,
  isRTL: _propTypes["default"].bool,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  // i18n
  monthFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
})) : undefined;
var defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 0,
  horizontalMonthPadding: 13,
  initialMonth: (0, _moment["default"])(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onMonthTransitionEnd: function onMonthTransitionEnd() {},
  renderMonthText: null,
  renderCalendarDay: undefined,
  renderDayContents: null,
  translationValue: null,
  renderMonthElement: null,
  daySize: _constants.DAY_SIZE,
  focusedDate: null,
  isFocused: false,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  isRTL: false,
  transitionDuration: 200,
  verticalBorderSpacing: undefined,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined
};

function getMonths(initialMonth, numberOfMonths, withoutTransitionMonths) {
  var month = initialMonth.clone();
  if (!withoutTransitionMonths) month = month.subtract(1, 'month');
  var months = [];

  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    months.push(month);
    month = month.clone().add(1, 'month');
  }

  return months;
}

var CalendarMonthGrid =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(CalendarMonthGrid, _ref);
  var _proto = CalendarMonthGrid.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function CalendarMonthGrid(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    var withoutTransitionMonths = props.orientation === _constants.VERTICAL_SCROLLABLE;
    _this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths, withoutTransitionMonths)
    };
    _this.isTransitionEndSupported = (0, _isTransitionEndSupported["default"])();
    _this.onTransitionEnd = _this.onTransitionEnd.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.locale = _moment["default"].locale();
    _this.onMonthSelect = _this.onMonthSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearSelect = _this.onYearSelect.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.removeEventListener = (0, _consolidatedEvents.addEventListener)(this.container, 'transitionend', this.onTransitionEnd);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var initialMonth = nextProps.initialMonth,
        numberOfMonths = nextProps.numberOfMonths,
        orientation = nextProps.orientation;
    var months = this.state.months;
    var _this$props = this.props,
        prevInitialMonth = _this$props.initialMonth,
        prevNumberOfMonths = _this$props.numberOfMonths;
    var hasMonthChanged = !prevInitialMonth.isSame(initialMonth, 'month');
    var hasNumberOfMonthsChanged = prevNumberOfMonths !== numberOfMonths;
    var newMonths = months;

    if (hasMonthChanged && !hasNumberOfMonthsChanged) {
      if ((0, _isNextMonth["default"])(prevInitialMonth, initialMonth)) {
        newMonths = months.slice(1);
        newMonths.push(months[months.length - 1].clone().add(1, 'month'));
      } else if ((0, _isPrevMonth["default"])(prevInitialMonth, initialMonth)) {
        newMonths = months.slice(0, months.length - 1);
        newMonths.unshift(months[0].clone().subtract(1, 'month'));
      } else {
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        newMonths = getMonths(initialMonth, numberOfMonths, withoutTransitionMonths);
      }
    }

    if (hasNumberOfMonthsChanged) {
      var _withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;

      newMonths = getMonths(initialMonth, numberOfMonths, _withoutTransitionMonths);
    }

    var momentLocale = _moment["default"].locale();

    if (this.locale !== momentLocale) {
      this.locale = momentLocale;
      newMonths = newMonths.map(function (m) {
        return m.locale(_this2.locale);
      });
    }

    this.setState({
      months: newMonths
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props2 = this.props,
        isAnimating = _this$props2.isAnimating,
        transitionDuration = _this$props2.transitionDuration,
        onMonthTransitionEnd = _this$props2.onMonthTransitionEnd; // For IE9, immediately call onMonthTransitionEnd instead of
    // waiting for the animation to complete. Similarly, if transitionDuration
    // is set to 0, also immediately invoke the onMonthTransitionEnd callback

    if ((!this.isTransitionEndSupported || !transitionDuration) && isAnimating) {
      onMonthTransitionEnd();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.removeEventListener) this.removeEventListener();
  };

  _proto.onTransitionEnd = function onTransitionEnd() {
    var onMonthTransitionEnd = this.props.onMonthTransitionEnd;
    onMonthTransitionEnd();
  };

  _proto.onMonthSelect = function onMonthSelect(currentMonth, newMonthVal) {
    var newMonth = currentMonth.clone();
    var _this$props3 = this.props,
        onMonthChange = _this$props3.onMonthChange,
        orientation = _this$props3.orientation;
    var months = this.state.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var initialMonthSubtraction = months.indexOf(currentMonth);

    if (!withoutTransitionMonths) {
      initialMonthSubtraction -= 1;
    }

    newMonth.set('month', newMonthVal).subtract(initialMonthSubtraction, 'months');
    onMonthChange(newMonth);
  };

  _proto.onYearSelect = function onYearSelect(currentMonth, newYearVal) {
    var newMonth = currentMonth.clone();
    var _this$props4 = this.props,
        onYearChange = _this$props4.onYearChange,
        orientation = _this$props4.orientation;
    var months = this.state.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var initialMonthSubtraction = months.indexOf(currentMonth);

    if (!withoutTransitionMonths) {
      initialMonthSubtraction -= 1;
    }

    newMonth.set('year', newYearVal).subtract(initialMonthSubtraction, 'months');
    onYearChange(newMonth);
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props5 = this.props,
        enableOutsideDays = _this$props5.enableOutsideDays,
        firstVisibleMonthIndex = _this$props5.firstVisibleMonthIndex,
        horizontalMonthPadding = _this$props5.horizontalMonthPadding,
        isAnimating = _this$props5.isAnimating,
        modifiers = _this$props5.modifiers,
        numberOfMonths = _this$props5.numberOfMonths,
        monthFormat = _this$props5.monthFormat,
        orientation = _this$props5.orientation,
        translationValue = _this$props5.translationValue,
        daySize = _this$props5.daySize,
        onDayMouseEnter = _this$props5.onDayMouseEnter,
        onDayMouseLeave = _this$props5.onDayMouseLeave,
        onDayClick = _this$props5.onDayClick,
        renderMonthText = _this$props5.renderMonthText,
        renderCalendarDay = _this$props5.renderCalendarDay,
        renderDayContents = _this$props5.renderDayContents,
        renderMonthElement = _this$props5.renderMonthElement,
        onMonthTransitionEnd = _this$props5.onMonthTransitionEnd,
        firstDayOfWeek = _this$props5.firstDayOfWeek,
        focusedDate = _this$props5.focusedDate,
        isFocused = _this$props5.isFocused,
        isRTL = _this$props5.isRTL,
        styles = _this$props5.styles,
        phrases = _this$props5.phrases,
        dayAriaLabelFormat = _this$props5.dayAriaLabelFormat,
        transitionDuration = _this$props5.transitionDuration,
        verticalBorderSpacing = _this$props5.verticalBorderSpacing,
        setMonthTitleHeight = _this$props5.setMonthTitleHeight;
    var months = this.state.months;
    var isVertical = orientation === _constants.VERTICAL_ORIENTATION;
    var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
    var calendarMonthWidth = (0, _getCalendarMonthWidth["default"])(daySize, horizontalMonthPadding);
    var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;
    var transformType = isVertical || isVerticalScrollable ? 'translateY' : 'translateX';
    var transformValue = "".concat(transformType, "(").concat(translationValue, "px)");
    return _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.CalendarMonthGrid, isHorizontal && styles.CalendarMonthGrid__horizontal, isVertical && styles.CalendarMonthGrid__vertical, isVerticalScrollable && styles.CalendarMonthGrid__vertical_scrollable, isAnimating && styles.CalendarMonthGrid__animating, isAnimating && transitionDuration && {
      transition: "transform ".concat(transitionDuration, "ms ease-in-out")
    }, _objectSpread({}, (0, _getTransformStyles["default"])(transformValue), {
      width: width
    })), {
      ref: this.setContainerRef,
      onTransitionEnd: onMonthTransitionEnd
    }), months.map(function (month, i) {
      var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
      var hideForAnimation = i === 0 && !isVisible;
      var showForAnimation = i === 0 && isAnimating && isVisible;
      var monthString = (0, _toISOMonthString["default"])(month);
      return _react["default"].createElement("div", (0, _extends2["default"])({
        key: monthString
      }, (0, _reactWithStyles.css)(isHorizontal && styles.CalendarMonthGrid_month__horizontal, hideForAnimation && styles.CalendarMonthGrid_month__hideForAnimation, showForAnimation && !isVertical && !isRTL && {
        position: 'absolute',
        left: -calendarMonthWidth
      }, showForAnimation && !isVertical && isRTL && {
        position: 'absolute',
        right: 0
      }, showForAnimation && isVertical && {
        position: 'absolute',
        top: -translationValue
      }, !isVisible && !isAnimating && styles.CalendarMonthGrid_month__hidden)), _react["default"].createElement(_CalendarMonth["default"], {
        month: month,
        isVisible: isVisible,
        enableOutsideDays: enableOutsideDays,
        modifiers: modifiers[monthString],
        monthFormat: monthFormat,
        orientation: orientation,
        onDayMouseEnter: onDayMouseEnter,
        onDayMouseLeave: onDayMouseLeave,
        onDayClick: onDayClick,
        onMonthSelect: _this3.onMonthSelect,
        onYearSelect: _this3.onYearSelect,
        renderMonthText: renderMonthText,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderMonthElement: renderMonthElement,
        firstDayOfWeek: firstDayOfWeek,
        daySize: daySize,
        focusedDate: isVisible ? focusedDate : null,
        isFocused: isFocused,
        phrases: phrases,
        setMonthTitleHeight: setMonthTitleHeight,
        dayAriaLabelFormat: dayAriaLabelFormat,
        verticalBorderSpacing: verticalBorderSpacing,
        horizontalMonthPadding: horizontalMonthPadding
      }));
    }));
  };

  return CalendarMonthGrid;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonthGrid.propTypes =  true ? propTypes : undefined;
CalendarMonthGrid.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      spacing = _ref2$reactDates.spacing,
      zIndex = _ref2$reactDates.zIndex;
  return {
    CalendarMonthGrid: {
      background: color.background,
      textAlign: (0, _noflip["default"])('left'),
      zIndex: zIndex
    },
    CalendarMonthGrid__animating: {
      zIndex: zIndex + 1
    },
    CalendarMonthGrid__horizontal: {
      position: 'absolute',
      left: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    CalendarMonthGrid__vertical: {
      margin: '0 auto'
    },
    CalendarMonthGrid__vertical_scrollable: {
      margin: '0 auto'
    },
    CalendarMonthGrid_month__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top',
      minHeight: '100%'
    },
    CalendarMonthGrid_month__hideForAnimation: {
      position: 'absolute',
      zIndex: zIndex - 1,
      opacity: 0,
      pointerEvents: 'none'
    },
    CalendarMonthGrid_month__hidden: {
      visibility: 'hidden'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonthGrid);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/CalendarWeek.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CalendarWeek;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes["default"].node.isRequired
}) : undefined;

function CalendarWeek(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("tr", null, children);
}

CalendarWeek.propTypes =  true ? propTypes : undefined;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/ChevronDown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var ChevronDown = function ChevronDown(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M968 289L514 741c-11 11-21 11-32 0L29 289c-4-5-6-11-6-16 0-13 10-23 23-23 6 0 11 2 15 7l437 436 438-436c4-5 9-7 16-7 6 0 11 2 16 7 9 10 9 21 0 32z"
  }));
};

ChevronDown.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = ChevronDown;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/ChevronUp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var ChevronUp = function ChevronUp(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M32 713l453-453c11-11 21-11 32 0l453 453c5 5 7 10 7 16 0 13-10 23-22 23-7 0-12-2-16-7L501 309 64 745c-4 5-9 7-15 7-7 0-12-2-17-7-9-11-9-21 0-32z"
  }));
};

ChevronUp.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = ChevronUp;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/CloseButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var CloseButton = function CloseButton(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z"
  }));
};

CloseButton.defaultProps = {
  focusable: "false",
  viewBox: "0 0 12 12"
};
var _default = CloseButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DateInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _throttle = _interopRequireDefault(__webpack_require__("./node_modules/lodash/throttle.js"));

var _isTouchDevice = _interopRequireDefault(__webpack_require__("./node_modules/is-touch-device/build/index.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _getInputHeight = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getInputHeight.js"));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FANG_PATH_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0z");
var FANG_STROKE_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0 ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX);
var FANG_PATH_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX, ",0 ").concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, "z");
var FANG_STROKE_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",0");
var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  displayValue: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  focused: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  showCaret: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  small: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDownShiftTab: _propTypes["default"].func,
  onKeyDownTab: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  // accessibility
  isFocused: _propTypes["default"].bool // describes actual DOM focus

})) : undefined;
var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  ariaLabel: undefined,
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  small: false,
  block: false,
  regular: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyDownShiftTab: function onKeyDownShiftTab() {},
  onKeyDownTab: function onKeyDownTab() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  // accessibility
  isFocused: false
};

var DateInput =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DateInput, _ref);
  var _proto = DateInput.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DateInput(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.state = {
      dateString: '',
      isTouchDevice: false
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setInputRef = _this.setInputRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 300, {
      trailing: false
    });
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isTouchDevice: (0, _isTouchDevice["default"])()
    });
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var dateString = this.state.dateString;

    if (dateString && nextProps.displayValue) {
      this.setState({
        dateString: ''
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        focused = _this$props.focused,
        isFocused = _this$props.isFocused;
    if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

    if (focused && isFocused) {
      this.inputRef.focus();
    }
  };

  _proto.onChange = function onChange(e) {
    var _this$props2 = this.props,
        onChange = _this$props2.onChange,
        onKeyDownQuestionMark = _this$props2.onKeyDownQuestionMark;
    var dateString = e.target.value; // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
    // special case the `?` key so that it always triggers the appropriate callback, instead of
    // modifying the input value

    if (dateString[dateString.length - 1] === '?') {
      onKeyDownQuestionMark(e);
    } else {
      this.setState({
        dateString: dateString
      }, function () {
        return onChange(dateString);
      });
    }
  };

  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();

    if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
      this.throttledKeyDown(e);
    }
  };

  _proto.onFinalKeyDown = function onFinalKeyDown(e) {
    var _this$props3 = this.props,
        onKeyDownShiftTab = _this$props3.onKeyDownShiftTab,
        onKeyDownTab = _this$props3.onKeyDownTab,
        onKeyDownArrowDown = _this$props3.onKeyDownArrowDown,
        onKeyDownQuestionMark = _this$props3.onKeyDownQuestionMark;
    var key = e.key;

    if (key === 'Tab') {
      if (e.shiftKey) {
        onKeyDownShiftTab(e);
      } else {
        onKeyDownTab(e);
      }
    } else if (key === 'ArrowDown') {
      onKeyDownArrowDown(e);
    } else if (key === '?') {
      e.preventDefault();
      onKeyDownQuestionMark(e);
    }
  };

  _proto.setInputRef = function setInputRef(ref) {
    this.inputRef = ref;
  };

  _proto.render = function render() {
    var _this$state = this.state,
        dateString = _this$state.dateString,
        isTouch = _this$state.isTouchDevice;
    var _this$props4 = this.props,
        id = _this$props4.id,
        placeholder = _this$props4.placeholder,
        ariaLabel = _this$props4.ariaLabel,
        displayValue = _this$props4.displayValue,
        screenReaderMessage = _this$props4.screenReaderMessage,
        focused = _this$props4.focused,
        showCaret = _this$props4.showCaret,
        onFocus = _this$props4.onFocus,
        disabled = _this$props4.disabled,
        required = _this$props4.required,
        readOnly = _this$props4.readOnly,
        openDirection = _this$props4.openDirection,
        verticalSpacing = _this$props4.verticalSpacing,
        small = _this$props4.small,
        regular = _this$props4.regular,
        block = _this$props4.block,
        styles = _this$props4.styles,
        reactDates = _this$props4.theme.reactDates;
    var value = dateString || displayValue || '';
    var screenReaderMessageId = "DateInput__screen-reader-message-".concat(id);
    var withFang = showCaret && focused;
    var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
    return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateInput, small && styles.DateInput__small, block && styles.DateInput__block, withFang && styles.DateInput__withFang, disabled && styles.DateInput__disabled, withFang && openDirection === _constants.OPEN_DOWN && styles.DateInput__openDown, withFang && openDirection === _constants.OPEN_UP && styles.DateInput__openUp), _react["default"].createElement("input", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_input, small && styles.DateInput_input__small, regular && styles.DateInput_input__regular, readOnly && styles.DateInput_input__readOnly, focused && styles.DateInput_input__focused, disabled && styles.DateInput_input__disabled), {
      "aria-label": ariaLabel === undefined ? placeholder : ariaLabel,
      type: "text",
      id: id,
      name: id,
      ref: this.setInputRef,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onFocus: onFocus,
      placeholder: placeholder,
      autoComplete: "off",
      disabled: disabled,
      readOnly: typeof readOnly === 'boolean' ? readOnly : isTouch,
      required: required,
      "aria-describedby": screenReaderMessage && screenReaderMessageId
    })), withFang && _react["default"].createElement("svg", (0, _extends2["default"])({
      role: "presentation",
      focusable: "false"
    }, (0, _reactWithStyles.css)(styles.DateInput_fang, openDirection === _constants.OPEN_DOWN && {
      top: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
    }, openDirection === _constants.OPEN_UP && {
      bottom: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
    })), _react["default"].createElement("path", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_fangShape), {
      d: openDirection === _constants.OPEN_DOWN ? FANG_PATH_TOP : FANG_PATH_BOTTOM
    })), _react["default"].createElement("path", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_fangStroke), {
      d: openDirection === _constants.OPEN_DOWN ? FANG_STROKE_TOP : FANG_STROKE_BOTTOM
    }))), screenReaderMessage && _react["default"].createElement("p", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_screenReaderMessage), {
      id: screenReaderMessageId
    }), screenReaderMessage));
  };

  return DateInput;
}(_react["default"].PureComponent || _react["default"].Component);

DateInput.propTypes =  true ? propTypes : undefined;
DateInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing,
      spacing = _ref2$reactDates.spacing,
      font = _ref2$reactDates.font,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateInput: {
      margin: 0,
      padding: spacing.inputPadding,
      background: color.background,
      position: 'relative',
      display: 'inline-block',
      width: sizing.inputWidth,
      verticalAlign: 'middle'
    },
    DateInput__small: {
      width: sizing.inputWidth_small
    },
    DateInput__block: {
      width: '100%'
    },
    DateInput__disabled: {
      background: color.disabled,
      color: color.textDisabled
    },
    DateInput_input: {
      fontWeight: font.input.weight,
      fontSize: font.input.size,
      lineHeight: font.input.lineHeight,
      color: color.text,
      backgroundColor: color.background,
      width: '100%',
      padding: "".concat(spacing.displayTextPaddingVertical, "px ").concat(spacing.displayTextPaddingHorizontal, "px"),
      paddingTop: spacing.displayTextPaddingTop,
      paddingBottom: spacing.displayTextPaddingBottom,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight),
      border: border.input.border,
      borderTop: border.input.borderTop,
      borderRight: (0, _noflip["default"])(border.input.borderRight),
      borderBottom: border.input.borderBottom,
      borderLeft: (0, _noflip["default"])(border.input.borderLeft),
      borderRadius: border.input.borderRadius
    },
    DateInput_input__small: {
      fontSize: font.input.size_small,
      lineHeight: font.input.lineHeight_small,
      letterSpacing: font.input.letterSpacing_small,
      padding: "".concat(spacing.displayTextPaddingVertical_small, "px ").concat(spacing.displayTextPaddingHorizontal_small, "px"),
      paddingTop: spacing.displayTextPaddingTop_small,
      paddingBottom: spacing.displayTextPaddingBottom_small,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft_small),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight_small)
    },
    DateInput_input__regular: {
      fontWeight: 'auto'
    },
    DateInput_input__readOnly: {
      userSelect: 'none'
    },
    DateInput_input__focused: {
      outline: border.input.outlineFocused,
      background: color.backgroundFocused,
      border: border.input.borderFocused,
      borderTop: border.input.borderTopFocused,
      borderRight: (0, _noflip["default"])(border.input.borderRightFocused),
      borderBottom: border.input.borderBottomFocused,
      borderLeft: (0, _noflip["default"])(border.input.borderLeftFocused)
    },
    DateInput_input__disabled: {
      background: color.disabled,
      fontStyle: font.input.styleDisabled
    },
    DateInput_screenReaderMessage: {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    },
    DateInput_fang: {
      position: 'absolute',
      width: _constants.FANG_WIDTH_PX,
      height: _constants.FANG_HEIGHT_PX,
      left: 22,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      zIndex: zIndex + 2
    },
    DateInput_fangShape: {
      fill: color.background
    },
    DateInput_fangStroke: {
      stroke: color.core.border,
      fill: 'transparent'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateInput);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DateRangePicker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureDateRangePicker = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _reactPortal = __webpack_require__("./node_modules/react-portal/es/index.js");

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _consolidatedEvents = __webpack_require__("./node_modules/consolidated-events/lib/index.esm.js");

var _isTouchDevice = _interopRequireDefault(__webpack_require__("./node_modules/is-touch-device/build/index.js"));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__("./node_modules/react-outside-click-handler/index.js"));

var _DateRangePickerShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DateRangePickerShape.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getResponsiveContainerStyles = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getResponsiveContainerStyles.js"));

var _getDetachedContainerStyles = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getDetachedContainerStyles.js"));

var _getInputHeight = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getInputHeight.js"));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js"));

var _disableScroll2 = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/disableScroll.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _DateRangePickerInputController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateRangePickerInputController.js"));

var _DayPickerRangeController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPickerRangeController.js"));

var _CloseButton = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CloseButton.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {}, _DateRangePickerShape["default"])) : undefined;
var defaultProps = {
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,
  // input related props
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateAriaLabel: undefined,
  endDateAriaLabel: undefined,
  startDateOffset: undefined,
  endDateOffset: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  firstDayOfWeek: null,
  verticalHeight: null,
  transitionDuration: undefined,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  horizontalMonthPadding: undefined,
  // navigation related props
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked() {
    return false;
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  isDayHighlighted: function isDayHighlighted() {
    return false;
  },
  minDate: undefined,
  maxDate: undefined,
  // internationalization
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DateRangePickerPhrases,
  dayAriaLabelFormat: undefined
};

var DateRangePicker =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DateRangePicker, _ref);
  var _proto = DateRangePicker.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DateRangePicker(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.state = {
      dayPickerContainerStyles: {},
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    };
    _this.isTouchDevice = false;
    _this.onOutsideClick = _this.onOutsideClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDateRangePickerInputFocus = _this.onDateRangePickerInputFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerFocusOut = _this.onDayPickerFocusOut.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.disableScroll = _this.disableScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.removeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
      passive: true
    });
    this.responsivizePickerPosition();
    this.disableScroll();
    var focusedInput = this.props.focusedInput;

    if (focusedInput) {
      this.setState({
        isDateRangePickerInputFocused: true
      });
    }

    this.isTouchDevice = (0, _isTouchDevice["default"])();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var focusedInput = this.props.focusedInput;

    if (!prevProps.focusedInput && focusedInput && this.isOpened()) {
      // The date picker just changed from being closed to being open.
      this.responsivizePickerPosition();
      this.disableScroll();
    } else if (prevProps.focusedInput && !focusedInput && !this.isOpened()) {
      // The date picker just changed from being open to being closed.
      if (this.enableScroll) this.enableScroll();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeDayPickerEventListeners();
    if (this.removeEventListener) this.removeEventListener();
    if (this.enableScroll) this.enableScroll();
  };

  _proto.onOutsideClick = function onOutsideClick(event) {
    var _this$props = this.props,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate,
        appendToBody = _this$props.appendToBody;
    if (!this.isOpened()) return;
    if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
    onFocusChange(null);
    onClose({
      startDate: startDate,
      endDate: endDate
    });
  };

  _proto.onDateRangePickerInputFocus = function onDateRangePickerInputFocus(focusedInput) {
    var _this$props2 = this.props,
        onFocusChange = _this$props2.onFocusChange,
        readOnly = _this$props2.readOnly,
        withPortal = _this$props2.withPortal,
        withFullScreenPortal = _this$props2.withFullScreenPortal,
        keepFocusOnInput = _this$props2.keepFocusOnInput;

    if (focusedInput) {
      var withAnyPortal = withPortal || withFullScreenPortal;
      var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

      if (moveFocusToDayPicker) {
        this.onDayPickerFocus();
      } else {
        this.onDayPickerBlur();
      }
    }

    onFocusChange(focusedInput);
  };

  _proto.onDayPickerFocus = function onDayPickerFocus() {
    var _this$props3 = this.props,
        focusedInput = _this$props3.focusedInput,
        onFocusChange = _this$props3.onFocusChange;
    if (!focusedInput) onFocusChange(_constants.START_DATE);
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: false
    });
  };

  _proto.onDayPickerFocusOut = function onDayPickerFocusOut(event) {
    // In cases where **relatedTarget** is not null, it points to the right
    // element here. However, in cases where it is null (such as clicking on a
    // specific day) or it is **document.body** (IE11), the appropriate value is **event.target**.
    //
    // We handle both situations here by using the ` || ` operator to fallback
    // to *event.target** when **relatedTarget** is not provided.
    var relatedTarget = event.relatedTarget === document.body ? event.target : event.relatedTarget || event.target;
    if (this.dayPickerContainer.contains(relatedTarget)) return;
    this.onOutsideClick(event);
  };

  _proto.onDayPickerBlur = function onDayPickerBlur() {
    this.setState({
      isDateRangePickerInputFocused: true,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
  };

  _proto.setDayPickerContainerRef = function setDayPickerContainerRef(ref) {
    if (ref === this.dayPickerContainer) return;
    if (this.dayPickerContainer) this.removeDayPickerEventListeners();
    this.dayPickerContainer = ref;
    if (!ref) return;
    this.addDayPickerEventListeners();
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.addDayPickerEventListeners = function addDayPickerEventListeners() {
    // NOTE: We are using a manual event listener here, because React doesn't
    // provide FocusOut, while blur and keydown don't provide the information
    // needed in order to know whether we have left focus or not.
    //
    // For reference, this issue is further described here:
    // - https://github.com/facebook/react/issues/6410
    this.removeDayPickerFocusOut = (0, _consolidatedEvents.addEventListener)(this.dayPickerContainer, 'focusout', this.onDayPickerFocusOut);
  };

  _proto.removeDayPickerEventListeners = function removeDayPickerEventListeners() {
    if (this.removeDayPickerFocusOut) this.removeDayPickerFocusOut();
  };

  _proto.isOpened = function isOpened() {
    var focusedInput = this.props.focusedInput;
    return focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
  };

  _proto.disableScroll = function disableScroll() {
    var _this$props4 = this.props,
        appendToBody = _this$props4.appendToBody,
        propDisableScroll = _this$props4.disableScroll;
    if (!appendToBody && !propDisableScroll) return;
    if (!this.isOpened()) return; // Disable scroll for every ancestor of this DateRangePicker up to the
    // document level. This ensures the input and the picker never move. Other
    // sibling elements or the picker itself can scroll.

    this.enableScroll = (0, _disableScroll2["default"])(this.container);
  };

  _proto.responsivizePickerPosition = function responsivizePickerPosition() {
    // It's possible the portal props have been changed in response to window resizes
    // So let's ensure we reset this back to the base state each time
    var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

    if (Object.keys(dayPickerContainerStyles).length > 0) {
      this.setState({
        dayPickerContainerStyles: {}
      });
    }

    if (!this.isOpened()) {
      return;
    }

    var _this$props5 = this.props,
        openDirection = _this$props5.openDirection,
        anchorDirection = _this$props5.anchorDirection,
        horizontalMargin = _this$props5.horizontalMargin,
        withPortal = _this$props5.withPortal,
        withFullScreenPortal = _this$props5.withFullScreenPortal,
        appendToBody = _this$props5.appendToBody;
    var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

    if (!withPortal && !withFullScreenPortal) {
      var containerRect = this.dayPickerContainer.getBoundingClientRect();
      var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
      var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
      this.setState({
        dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), {}, appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
      });
    }
  };

  _proto.showKeyboardShortcutsPanel = function showKeyboardShortcutsPanel() {
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: true
    });
  };

  _proto.maybeRenderDayPickerWithPortal = function maybeRenderDayPickerWithPortal() {
    var _this$props6 = this.props,
        withPortal = _this$props6.withPortal,
        withFullScreenPortal = _this$props6.withFullScreenPortal,
        appendToBody = _this$props6.appendToBody;

    if (!this.isOpened()) {
      return null;
    }

    if (withPortal || withFullScreenPortal || appendToBody) {
      return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
    }

    return this.renderDayPicker();
  };

  _proto.renderDayPicker = function renderDayPicker() {
    var _this$props7 = this.props,
        anchorDirection = _this$props7.anchorDirection,
        openDirection = _this$props7.openDirection,
        isDayBlocked = _this$props7.isDayBlocked,
        isDayHighlighted = _this$props7.isDayHighlighted,
        isOutsideRange = _this$props7.isOutsideRange,
        numberOfMonths = _this$props7.numberOfMonths,
        orientation = _this$props7.orientation,
        monthFormat = _this$props7.monthFormat,
        renderMonthText = _this$props7.renderMonthText,
        renderWeekHeaderElement = _this$props7.renderWeekHeaderElement,
        dayPickerNavigationInlineStyles = _this$props7.dayPickerNavigationInlineStyles,
        navPosition = _this$props7.navPosition,
        navPrev = _this$props7.navPrev,
        navNext = _this$props7.navNext,
        renderNavPrevButton = _this$props7.renderNavPrevButton,
        renderNavNextButton = _this$props7.renderNavNextButton,
        onPrevMonthClick = _this$props7.onPrevMonthClick,
        onNextMonthClick = _this$props7.onNextMonthClick,
        onDatesChange = _this$props7.onDatesChange,
        onFocusChange = _this$props7.onFocusChange,
        withPortal = _this$props7.withPortal,
        withFullScreenPortal = _this$props7.withFullScreenPortal,
        daySize = _this$props7.daySize,
        enableOutsideDays = _this$props7.enableOutsideDays,
        focusedInput = _this$props7.focusedInput,
        startDate = _this$props7.startDate,
        startDateOffset = _this$props7.startDateOffset,
        endDate = _this$props7.endDate,
        endDateOffset = _this$props7.endDateOffset,
        minDate = _this$props7.minDate,
        maxDate = _this$props7.maxDate,
        minimumNights = _this$props7.minimumNights,
        keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
        renderCalendarDay = _this$props7.renderCalendarDay,
        renderDayContents = _this$props7.renderDayContents,
        renderCalendarInfo = _this$props7.renderCalendarInfo,
        renderMonthElement = _this$props7.renderMonthElement,
        calendarInfoPosition = _this$props7.calendarInfoPosition,
        firstDayOfWeek = _this$props7.firstDayOfWeek,
        initialVisibleMonth = _this$props7.initialVisibleMonth,
        hideKeyboardShortcutsPanel = _this$props7.hideKeyboardShortcutsPanel,
        customCloseIcon = _this$props7.customCloseIcon,
        onClose = _this$props7.onClose,
        phrases = _this$props7.phrases,
        dayAriaLabelFormat = _this$props7.dayAriaLabelFormat,
        isRTL = _this$props7.isRTL,
        weekDayFormat = _this$props7.weekDayFormat,
        styles = _this$props7.styles,
        verticalHeight = _this$props7.verticalHeight,
        transitionDuration = _this$props7.transitionDuration,
        verticalSpacing = _this$props7.verticalSpacing,
        horizontalMonthPadding = _this$props7.horizontalMonthPadding,
        small = _this$props7.small,
        disabled = _this$props7.disabled,
        reactDates = _this$props7.theme.reactDates;
    var _this$state = this.state,
        dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
        isDayPickerFocused = _this$state.isDayPickerFocused,
        showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
    var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

    var initialVisibleMonthThunk = initialVisibleMonth || function () {
      return startDate || endDate || (0, _moment["default"])();
    };

    var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateRangePicker_closeButton_svg));

    var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
    var withAnyPortal = withPortal || withFullScreenPortal;
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setDayPickerContainerRef
    }, (0, _reactWithStyles.css)(styles.DateRangePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.DateRangePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.DateRangePicker_picker__directionRight, orientation === _constants.HORIZONTAL_ORIENTATION && styles.DateRangePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.DateRangePicker_picker__vertical, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
      top: inputHeight + verticalSpacing
    }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
      bottom: inputHeight + verticalSpacing
    }, withAnyPortal && styles.DateRangePicker_picker__portal, withFullScreenPortal && styles.DateRangePicker_picker__fullScreenPortal, isRTL && styles.DateRangePicker_picker__rtl, dayPickerContainerStyles), {
      onClick: onOutsideClick
    }), _react["default"].createElement(_DayPickerRangeController["default"], {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      numberOfMonths: numberOfMonths,
      onPrevMonthClick: onPrevMonthClick,
      onNextMonthClick: onNextMonthClick,
      onDatesChange: onDatesChange,
      onFocusChange: onFocusChange,
      onClose: onClose,
      focusedInput: focusedInput,
      startDate: startDate,
      startDateOffset: startDateOffset,
      endDate: endDate,
      endDateOffset: endDateOffset,
      minDate: minDate,
      maxDate: maxDate,
      monthFormat: monthFormat,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      withPortal: withAnyPortal,
      daySize: daySize,
      initialVisibleMonth: initialVisibleMonthThunk,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      minimumNights: minimumNights,
      isOutsideRange: isOutsideRange,
      isDayHighlighted: isDayHighlighted,
      isDayBlocked: isDayBlocked,
      keepOpenOnDateSelect: keepOpenOnDateSelect,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isDayPickerFocused,
      showKeyboardShortcuts: showKeyboardShortcuts,
      onBlur: this.onDayPickerBlur,
      phrases: phrases,
      dayAriaLabelFormat: dayAriaLabelFormat,
      isRTL: isRTL,
      firstDayOfWeek: firstDayOfWeek,
      weekDayFormat: weekDayFormat,
      verticalHeight: verticalHeight,
      transitionDuration: transitionDuration,
      disabled: disabled,
      horizontalMonthPadding: horizontalMonthPadding
    }), withFullScreenPortal && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateRangePicker_closeButton), {
      type: "button",
      onClick: this.onOutsideClick,
      "aria-label": phrases.closeDatePicker
    }), closeIcon));
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    /* eslint-enable jsx-a11y/click-events-have-key-events */
  };

  _proto.render = function render() {
    var _this$props8 = this.props,
        startDate = _this$props8.startDate,
        startDateId = _this$props8.startDateId,
        startDatePlaceholderText = _this$props8.startDatePlaceholderText,
        startDateAriaLabel = _this$props8.startDateAriaLabel,
        endDate = _this$props8.endDate,
        endDateId = _this$props8.endDateId,
        endDatePlaceholderText = _this$props8.endDatePlaceholderText,
        endDateAriaLabel = _this$props8.endDateAriaLabel,
        focusedInput = _this$props8.focusedInput,
        screenReaderInputMessage = _this$props8.screenReaderInputMessage,
        showClearDates = _this$props8.showClearDates,
        showDefaultInputIcon = _this$props8.showDefaultInputIcon,
        inputIconPosition = _this$props8.inputIconPosition,
        customInputIcon = _this$props8.customInputIcon,
        customArrowIcon = _this$props8.customArrowIcon,
        customCloseIcon = _this$props8.customCloseIcon,
        disabled = _this$props8.disabled,
        required = _this$props8.required,
        readOnly = _this$props8.readOnly,
        openDirection = _this$props8.openDirection,
        phrases = _this$props8.phrases,
        isOutsideRange = _this$props8.isOutsideRange,
        minimumNights = _this$props8.minimumNights,
        withPortal = _this$props8.withPortal,
        withFullScreenPortal = _this$props8.withFullScreenPortal,
        displayFormat = _this$props8.displayFormat,
        reopenPickerOnClearDates = _this$props8.reopenPickerOnClearDates,
        keepOpenOnDateSelect = _this$props8.keepOpenOnDateSelect,
        onDatesChange = _this$props8.onDatesChange,
        onClose = _this$props8.onClose,
        isRTL = _this$props8.isRTL,
        noBorder = _this$props8.noBorder,
        block = _this$props8.block,
        verticalSpacing = _this$props8.verticalSpacing,
        small = _this$props8.small,
        regular = _this$props8.regular,
        styles = _this$props8.styles;
    var isDateRangePickerInputFocused = this.state.isDateRangePickerInputFocused;
    var enableOutsideClick = !withPortal && !withFullScreenPortal;
    var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

    var input = _react["default"].createElement(_DateRangePickerInputController["default"], {
      startDate: startDate,
      startDateId: startDateId,
      startDatePlaceholderText: startDatePlaceholderText,
      isStartDateFocused: focusedInput === _constants.START_DATE,
      startDateAriaLabel: startDateAriaLabel,
      endDate: endDate,
      endDateId: endDateId,
      endDatePlaceholderText: endDatePlaceholderText,
      isEndDateFocused: focusedInput === _constants.END_DATE,
      endDateAriaLabel: endDateAriaLabel,
      displayFormat: displayFormat,
      showClearDates: showClearDates,
      showCaret: !withPortal && !withFullScreenPortal && !hideFang,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      customInputIcon: customInputIcon,
      customArrowIcon: customArrowIcon,
      customCloseIcon: customCloseIcon,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      reopenPickerOnClearDates: reopenPickerOnClearDates,
      keepOpenOnDateSelect: keepOpenOnDateSelect,
      isOutsideRange: isOutsideRange,
      minimumNights: minimumNights,
      withFullScreenPortal: withFullScreenPortal,
      onDatesChange: onDatesChange,
      onFocusChange: this.onDateRangePickerInputFocus,
      onKeyDownArrowDown: this.onDayPickerFocus,
      onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
      onClose: onClose,
      phrases: phrases,
      screenReaderMessage: screenReaderInputMessage,
      isFocused: isDateRangePickerInputFocused,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing
    }, this.maybeRenderDayPickerWithPortal());

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setContainerRef
    }, (0, _reactWithStyles.css)(styles.DateRangePicker, block && styles.DateRangePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
      onOutsideClick: this.onOutsideClick
    }, input), enableOutsideClick || input);
  };

  return DateRangePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDateRangePicker = DateRangePicker;
DateRangePicker.propTypes =  true ? propTypes : undefined;
DateRangePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateRangePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    DateRangePicker__block: {
      display: 'block'
    },
    DateRangePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    DateRangePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    DateRangePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    DateRangePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    DateRangePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    DateRangePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    DateRangePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePicker);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DateRangePickerInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _DateInput = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateInput.js"));

var _IconPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/IconPositionShape.js"));

var _DisabledShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DisabledShape.js"));

var _RightArrow = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/RightArrow.js"));

var _LeftArrow = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/LeftArrow.js"));

var _CloseButton = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CloseButton.js"));

var _CalendarIcon = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarIcon.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  children: _propTypes["default"].node,
  startDateId: _propTypes["default"].string,
  startDatePlaceholderText: _propTypes["default"].string,
  startDateAriaLabel: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  endDateId: _propTypes["default"].string,
  endDatePlaceholderText: _propTypes["default"].string,
  endDateAriaLabel: _propTypes["default"].string,
  onStartDateFocus: _propTypes["default"].func,
  onEndDateFocus: _propTypes["default"].func,
  onStartDateChange: _propTypes["default"].func,
  onEndDateChange: _propTypes["default"].func,
  onStartDateShiftTab: _propTypes["default"].func,
  onEndDateTab: _propTypes["default"].func,
  onClearDates: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  startDate: _propTypes["default"].string,
  endDate: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  isEndDateFocused: _propTypes["default"].bool,
  showClearDates: _propTypes["default"].bool,
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  showCaret: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  customArrowIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  // accessibility
  isFocused: _propTypes["default"].bool,
  // describes actual DOM focus
  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DateRangePickerInputPhrases)),
  isRTL: _propTypes["default"].bool
})) : undefined;
var defaultProps = {
  children: null,
  startDateId: _constants.START_DATE,
  endDateId: _constants.END_DATE,
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateAriaLabel: undefined,
  endDateAriaLabel: undefined,
  screenReaderMessage: '',
  onStartDateFocus: function onStartDateFocus() {},
  onEndDateFocus: function onEndDateFocus() {},
  onStartDateChange: function onStartDateChange() {},
  onEndDateChange: function onEndDateChange() {},
  onStartDateShiftTab: function onStartDateShiftTab() {},
  onEndDateTab: function onEndDateTab() {},
  onClearDates: function onClearDates() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  startDate: '',
  endDate: '',
  isStartDateFocused: false,
  isEndDateFocused: false,
  showClearDates: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};

function DateRangePickerInput(_ref) {
  var children = _ref.children,
      startDate = _ref.startDate,
      startDateId = _ref.startDateId,
      startDatePlaceholderText = _ref.startDatePlaceholderText,
      screenReaderMessage = _ref.screenReaderMessage,
      isStartDateFocused = _ref.isStartDateFocused,
      onStartDateChange = _ref.onStartDateChange,
      onStartDateFocus = _ref.onStartDateFocus,
      onStartDateShiftTab = _ref.onStartDateShiftTab,
      startDateAriaLabel = _ref.startDateAriaLabel,
      endDate = _ref.endDate,
      endDateId = _ref.endDateId,
      endDatePlaceholderText = _ref.endDatePlaceholderText,
      isEndDateFocused = _ref.isEndDateFocused,
      onEndDateChange = _ref.onEndDateChange,
      onEndDateFocus = _ref.onEndDateFocus,
      onEndDateTab = _ref.onEndDateTab,
      endDateAriaLabel = _ref.endDateAriaLabel,
      onKeyDownArrowDown = _ref.onKeyDownArrowDown,
      onKeyDownQuestionMark = _ref.onKeyDownQuestionMark,
      onClearDates = _ref.onClearDates,
      showClearDates = _ref.showClearDates,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      showCaret = _ref.showCaret,
      openDirection = _ref.openDirection,
      showDefaultInputIcon = _ref.showDefaultInputIcon,
      inputIconPosition = _ref.inputIconPosition,
      customInputIcon = _ref.customInputIcon,
      customArrowIcon = _ref.customArrowIcon,
      customCloseIcon = _ref.customCloseIcon,
      isFocused = _ref.isFocused,
      phrases = _ref.phrases,
      isRTL = _ref.isRTL,
      noBorder = _ref.noBorder,
      block = _ref.block,
      verticalSpacing = _ref.verticalSpacing,
      small = _ref.small,
      regular = _ref.regular,
      styles = _ref.styles;

  var calendarIcon = customInputIcon || _react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_calendarIcon_svg));

  var arrowIcon = customArrowIcon || _react["default"].createElement(_RightArrow["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow_svg));

  if (isRTL) arrowIcon = _react["default"].createElement(_LeftArrow["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow_svg));
  if (small) arrowIcon = '-';

  var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_clearDates_svg, small && styles.DateRangePickerInput_clearDates_svg__small));

  var screenReaderStartDateText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;
  var screenReaderEndDateText = screenReaderMessage || phrases.keyboardBackwardNavigationInstructions;

  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateRangePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onKeyDownArrowDown
  }), calendarIcon);

  var startDateDisabled = disabled === _constants.START_DATE || disabled === true;
  var endDateDisabled = disabled === _constants.END_DATE || disabled === true;
  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateRangePickerInput, disabled && styles.DateRangePickerInput__disabled, isRTL && styles.DateRangePickerInput__rtl, !noBorder && styles.DateRangePickerInput__withBorder, block && styles.DateRangePickerInput__block, showClearDates && styles.DateRangePickerInput__showClearDates), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, _react["default"].createElement(_DateInput["default"], {
    id: startDateId,
    placeholder: startDatePlaceholderText,
    ariaLabel: startDateAriaLabel,
    displayValue: startDate,
    screenReaderMessage: screenReaderStartDateText,
    focused: isStartDateFocused,
    isFocused: isFocused,
    disabled: startDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onStartDateChange,
    onFocus: onStartDateFocus,
    onKeyDownShiftTab: onStartDateShiftTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), children, _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow), {
    "aria-hidden": "true",
    role: "presentation"
  }), arrowIcon), _react["default"].createElement(_DateInput["default"], {
    id: endDateId,
    placeholder: endDatePlaceholderText,
    ariaLabel: endDateAriaLabel,
    displayValue: endDate,
    screenReaderMessage: screenReaderEndDateText,
    focused: isEndDateFocused,
    isFocused: isFocused,
    disabled: endDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onEndDateChange,
    onFocus: onEndDateFocus,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    onKeyDownTab: onEndDateTab,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), showClearDates && _react["default"].createElement("button", (0, _extends2["default"])({
    type: "button",
    "aria-label": phrases.clearDates
  }, (0, _reactWithStyles.css)(styles.DateRangePickerInput_clearDates, small && styles.DateRangePickerInput_clearDates__small, !customCloseIcon && styles.DateRangePickerInput_clearDates_default, !(startDate || endDate) && styles.DateRangePickerInput_clearDates__hide), {
    onClick: onClearDates,
    disabled: disabled
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}

DateRangePickerInput.propTypes =  true ? propTypes : undefined;
DateRangePickerInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing;
  return {
    DateRangePickerInput: {
      backgroundColor: color.background,
      display: 'inline-block'
    },
    DateRangePickerInput__disabled: {
      background: color.disabled
    },
    DateRangePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    DateRangePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePickerInput__block: {
      display: 'block'
    },
    DateRangePickerInput__showClearDates: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    DateRangePickerInput_arrow: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateRangePickerInput_arrow_svg: {
      verticalAlign: 'middle',
      fill: color.text,
      height: sizing.arrowWidth,
      width: sizing.arrowWidth
    },
    DateRangePickerInput_clearDates: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    DateRangePickerInput_clearDates__small: {
      padding: 6
    },
    DateRangePickerInput_clearDates_default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    DateRangePickerInput_clearDates__hide: {
      visibility: 'hidden'
    },
    DateRangePickerInput_clearDates_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    DateRangePickerInput_clearDates_svg__small: {
      height: 9
    },
    DateRangePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    DateRangePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePickerInput);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DateRangePickerInputController.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _DateRangePickerInput = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateRangePickerInput.js"));

var _IconPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/IconPositionShape.js"));

var _DisabledShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DisabledShape.js"));

var _toMomentObject = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js"));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toLocalizedDateString.js"));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js"));

var _isBeforeDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isBeforeDay.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes["default"].node,
  startDate: _reactMomentProptypes["default"].momentObj,
  startDateId: _propTypes["default"].string,
  startDatePlaceholderText: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  startDateAriaLabel: _propTypes["default"].string,
  endDate: _reactMomentProptypes["default"].momentObj,
  endDateId: _propTypes["default"].string,
  endDatePlaceholderText: _propTypes["default"].string,
  isEndDateFocused: _propTypes["default"].bool,
  endDateAriaLabel: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  showClearDates: _propTypes["default"].bool,
  showCaret: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDates: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  minimumNights: _airbnbPropTypes.nonNegativeInteger,
  isOutsideRange: _propTypes["default"].func,
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  onFocusChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  onDatesChange: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  customInputIcon: _propTypes["default"].node,
  customArrowIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  // accessibility
  isFocused: _propTypes["default"].bool,
  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DateRangePickerInputPhrases)),
  isRTL: _propTypes["default"].bool
}) : undefined;
var defaultProps = {
  children: null,
  startDate: null,
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,
  startDateAriaLabel: undefined,
  endDate: null,
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,
  endDateAriaLabel: undefined,
  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  minimumNights: 1,
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  onDatesChange: function onDatesChange() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};

var DateRangePickerInputController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DateRangePickerInputController, _ref);
  var _proto = DateRangePickerInputController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DateRangePickerInputController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.onClearFocus = _this.onClearFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onStartDateChange = _this.onStartDateChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onStartDateFocus = _this.onStartDateFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onEndDateChange = _this.onEndDateChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onEndDateFocus = _this.onEndDateFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.clearDates = _this.clearDates.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.onClearFocus = function onClearFocus() {
    var _this$props = this.props,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate;
    onFocusChange(null);
    onClose({
      startDate: startDate,
      endDate: endDate
    });
  };

  _proto.onEndDateChange = function onEndDateChange(endDateString) {
    var _this$props2 = this.props,
        startDate = _this$props2.startDate,
        isOutsideRange = _this$props2.isOutsideRange,
        minimumNights = _this$props2.minimumNights,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        onDatesChange = _this$props2.onDatesChange;
    var endDate = (0, _toMomentObject["default"])(endDateString, this.getDisplayFormat());
    var isEndDateValid = endDate && !isOutsideRange(endDate) && !(startDate && (0, _isBeforeDay["default"])(endDate, startDate.clone().add(minimumNights, 'days')));

    if (isEndDateValid) {
      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
      if (!keepOpenOnDateSelect) this.onClearFocus();
    } else {
      onDatesChange({
        startDate: startDate,
        endDate: null
      });
    }
  };

  _proto.onEndDateFocus = function onEndDateFocus() {
    var _this$props3 = this.props,
        startDate = _this$props3.startDate,
        onFocusChange = _this$props3.onFocusChange,
        withFullScreenPortal = _this$props3.withFullScreenPortal,
        disabled = _this$props3.disabled;

    if (!startDate && withFullScreenPortal && (!disabled || disabled === _constants.END_DATE)) {
      // When the datepicker is full screen, we never want to focus the end date first
      // because there's no indication that that is the case once the datepicker is open and it
      // might confuse the user
      onFocusChange(_constants.START_DATE);
    } else if (!disabled || disabled === _constants.START_DATE) {
      onFocusChange(_constants.END_DATE);
    }
  };

  _proto.onStartDateChange = function onStartDateChange(startDateString) {
    var endDate = this.props.endDate;
    var _this$props4 = this.props,
        isOutsideRange = _this$props4.isOutsideRange,
        minimumNights = _this$props4.minimumNights,
        onDatesChange = _this$props4.onDatesChange,
        onFocusChange = _this$props4.onFocusChange,
        disabled = _this$props4.disabled;
    var startDate = (0, _toMomentObject["default"])(startDateString, this.getDisplayFormat());
    var isEndDateBeforeStartDate = startDate && (0, _isBeforeDay["default"])(endDate, startDate.clone().add(minimumNights, 'days'));
    var isStartDateValid = startDate && !isOutsideRange(startDate) && !(disabled === _constants.END_DATE && isEndDateBeforeStartDate);

    if (isStartDateValid) {
      if (isEndDateBeforeStartDate) {
        endDate = null;
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
      onFocusChange(_constants.END_DATE);
    } else {
      onDatesChange({
        startDate: null,
        endDate: endDate
      });
    }
  };

  _proto.onStartDateFocus = function onStartDateFocus() {
    var _this$props5 = this.props,
        disabled = _this$props5.disabled,
        onFocusChange = _this$props5.onFocusChange;

    if (!disabled || disabled === _constants.END_DATE) {
      onFocusChange(_constants.START_DATE);
    }
  };

  _proto.getDisplayFormat = function getDisplayFormat() {
    var displayFormat = this.props.displayFormat;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  };

  _proto.getDateString = function getDateString(date) {
    var displayFormat = this.getDisplayFormat();

    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }

    return (0, _toLocalizedDateString["default"])(date);
  };

  _proto.clearDates = function clearDates() {
    var _this$props6 = this.props,
        onDatesChange = _this$props6.onDatesChange,
        reopenPickerOnClearDates = _this$props6.reopenPickerOnClearDates,
        onFocusChange = _this$props6.onFocusChange;
    onDatesChange({
      startDate: null,
      endDate: null
    });

    if (reopenPickerOnClearDates) {
      onFocusChange(_constants.START_DATE);
    }
  };

  _proto.render = function render() {
    var _this$props7 = this.props,
        children = _this$props7.children,
        startDate = _this$props7.startDate,
        startDateId = _this$props7.startDateId,
        startDatePlaceholderText = _this$props7.startDatePlaceholderText,
        isStartDateFocused = _this$props7.isStartDateFocused,
        startDateAriaLabel = _this$props7.startDateAriaLabel,
        endDate = _this$props7.endDate,
        endDateId = _this$props7.endDateId,
        endDatePlaceholderText = _this$props7.endDatePlaceholderText,
        endDateAriaLabel = _this$props7.endDateAriaLabel,
        isEndDateFocused = _this$props7.isEndDateFocused,
        screenReaderMessage = _this$props7.screenReaderMessage,
        showClearDates = _this$props7.showClearDates,
        showCaret = _this$props7.showCaret,
        showDefaultInputIcon = _this$props7.showDefaultInputIcon,
        inputIconPosition = _this$props7.inputIconPosition,
        customInputIcon = _this$props7.customInputIcon,
        customArrowIcon = _this$props7.customArrowIcon,
        customCloseIcon = _this$props7.customCloseIcon,
        disabled = _this$props7.disabled,
        required = _this$props7.required,
        readOnly = _this$props7.readOnly,
        openDirection = _this$props7.openDirection,
        isFocused = _this$props7.isFocused,
        phrases = _this$props7.phrases,
        onKeyDownArrowDown = _this$props7.onKeyDownArrowDown,
        onKeyDownQuestionMark = _this$props7.onKeyDownQuestionMark,
        isRTL = _this$props7.isRTL,
        noBorder = _this$props7.noBorder,
        block = _this$props7.block,
        small = _this$props7.small,
        regular = _this$props7.regular,
        verticalSpacing = _this$props7.verticalSpacing;
    var startDateString = this.getDateString(startDate);
    var endDateString = this.getDateString(endDate);
    return _react["default"].createElement(_DateRangePickerInput["default"], {
      startDate: startDateString,
      startDateId: startDateId,
      startDatePlaceholderText: startDatePlaceholderText,
      isStartDateFocused: isStartDateFocused,
      startDateAriaLabel: startDateAriaLabel,
      endDate: endDateString,
      endDateId: endDateId,
      endDatePlaceholderText: endDatePlaceholderText,
      isEndDateFocused: isEndDateFocused,
      endDateAriaLabel: endDateAriaLabel,
      isFocused: isFocused,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      showCaret: showCaret,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      customInputIcon: customInputIcon,
      customArrowIcon: customArrowIcon,
      customCloseIcon: customCloseIcon,
      phrases: phrases,
      onStartDateChange: this.onStartDateChange,
      onStartDateFocus: this.onStartDateFocus,
      onStartDateShiftTab: this.onClearFocus,
      onEndDateChange: this.onEndDateChange,
      onEndDateFocus: this.onEndDateFocus,
      showClearDates: showClearDates,
      onClearDates: this.clearDates,
      screenReaderMessage: screenReaderMessage,
      onKeyDownArrowDown: onKeyDownArrowDown,
      onKeyDownQuestionMark: onKeyDownQuestionMark,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing
    }, children);
  };

  return DateRangePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DateRangePickerInputController;
DateRangePickerInputController.propTypes =  true ? propTypes : undefined;
DateRangePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DayPicker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureDayPicker = exports.defaultProps = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _throttle = _interopRequireDefault(__webpack_require__("./node_modules/lodash/throttle.js"));

var _isTouchDevice = _interopRequireDefault(__webpack_require__("./node_modules/is-touch-device/build/index.js"));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__("./node_modules/react-outside-click-handler/index.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _CalendarMonthGrid = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarMonthGrid.js"));

var _DayPickerNavigation = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPickerNavigation.js"));

var _DayPickerKeyboardShortcuts = _interopRequireWildcard(__webpack_require__("./node_modules/react-dates/lib/components/DayPickerKeyboardShortcuts.js"));

var _getNumberOfCalendarMonthWeeks = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getNumberOfCalendarMonthWeeks.js"));

var _getCalendarMonthWidth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getCalendarMonthWidth.js"));

var _calculateDimension = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/calculateDimension.js"));

var _getActiveElement = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getActiveElement.js"));

var _isDayVisible = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isDayVisible.js"));

var _isSameMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameMonth.js"));

var _ModifiersShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ModifiersShape.js"));

var _NavPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/NavPositionShape.js"));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/CalendarInfoPositionShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MONTH_PADDING = 23;
var PREV_TRANSITION = 'prev';
var NEXT_TRANSITION = 'next';
var MONTH_SELECTION_TRANSITION = 'month_selection';
var YEAR_SELECTION_TRANSITION = 'year_selection';
var PREV_NAV = 'prev_nav';
var NEXT_NAV = 'next_nav';
var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  // calendar presentation props
  enableOutsideDays: _propTypes["default"].bool,
  numberOfMonths: _propTypes["default"].number,
  orientation: _ScrollableOrientationShape["default"],
  withPortal: _propTypes["default"].bool,
  onOutsideClick: _propTypes["default"].func,
  hidden: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  firstDayOfWeek: _DayOfWeekShape["default"],
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  noBorder: _propTypes["default"].bool,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  renderKeyboardShortcutsButton: _propTypes["default"].func,
  renderKeyboardShortcutsPanel: _propTypes["default"].func,
  // navigation props
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  disablePrev: _propTypes["default"].bool,
  disableNext: _propTypes["default"].bool,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  noNavButtons: _propTypes["default"].bool,
  noNavNextButton: _propTypes["default"].bool,
  noNavPrevButton: _propTypes["default"].bool,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  onYearChange: _propTypes["default"].func,
  onGetNextScrollableMonths: _propTypes["default"].func,
  // VERTICAL_SCROLLABLE daypickers only
  onGetPrevScrollableMonths: _propTypes["default"].func,
  // VERTICAL_SCROLLABLE daypickers only
  // month props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  // day props
  modifiers: _propTypes["default"].objectOf(_propTypes["default"].objectOf(_ModifiersShape["default"])),
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  // accessibility props
  isFocused: _propTypes["default"].bool,
  getFirstFocusableDay: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  showKeyboardShortcuts: _propTypes["default"].bool,
  onTab: _propTypes["default"].func,
  onShiftTab: _propTypes["default"].func,
  // internationalization
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
})) : undefined;
var defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 2,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick: function onOutsideClick() {},
  hidden: false,
  initialVisibleMonth: function initialVisibleMonth() {
    return (0, _moment["default"])();
  },
  firstDayOfWeek: null,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined,
  // navigation props
  dayPickerNavigationInlineStyles: null,
  disablePrev: false,
  disableNext: false,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  noNavButtons: false,
  noNavNextButton: false,
  noNavPrevButton: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onGetNextScrollableMonths: function onGetNextScrollableMonths() {},
  onGetPrevScrollableMonths: function onGetPrevScrollableMonths() {},
  // month props
  renderMonthText: null,
  renderMonthElement: null,
  renderWeekHeaderElement: null,
  // day props
  modifiers: {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  // accessibility props
  isFocused: false,
  getFirstFocusableDay: null,
  onBlur: function onBlur() {},
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined
};
exports.defaultProps = defaultProps;

var DayPicker =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPicker, _ref);
  var _proto = DayPicker.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPicker(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    var currentMonth = props.hidden ? (0, _moment["default"])() : props.initialVisibleMonth();
    var focusedDate = currentMonth.clone().startOf('month');

    if (props.getFirstFocusableDay) {
      focusedDate = props.getFirstFocusableDay(currentMonth);
    }

    var horizontalMonthPadding = props.horizontalMonthPadding;
    var translationValue = props.isRTL && _this.isHorizontal() ? -(0, _getCalendarMonthWidth["default"])(props.daySize, horizontalMonthPadding) : 0;
    _this.hasSetInitialVisibleMonth = !props.hidden;
    _this.state = {
      currentMonthScrollTop: null,
      currentMonth: currentMonth,
      monthTransition: null,
      translationValue: translationValue,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: (0, _getCalendarMonthWidth["default"])(props.daySize, horizontalMonthPadding),
      focusedDate: !props.hidden || props.isFocused ? focusedDate : null,
      nextFocusedDate: null,
      showKeyboardShortcuts: props.showKeyboardShortcuts,
      onKeyboardShortcutsPanelClose: function onKeyboardShortcutsPanelClose() {},
      isTouchDevice: (0, _isTouchDevice["default"])(),
      withMouseInteractions: true,
      calendarInfoWidth: 0,
      monthTitleHeight: null,
      hasSetHeight: false
    };

    _this.setCalendarMonthWeeks(currentMonth);

    _this.calendarMonthGridHeight = 0;
    _this.setCalendarInfoWidthTimeout = null;
    _this.setCalendarMonthGridHeightTimeout = null;
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 200, {
      trailing: false
    });
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onPrevMonthTransition = _this.onPrevMonthTransition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthTransition = _this.onNextMonthTransition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMonthChange = _this.onMonthChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearChange = _this.onYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getNextScrollableMonths = _this.getNextScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getPrevScrollableMonths = _this.getPrevScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openKeyboardShortcutsPanel = _this.openKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeKeyboardShortcutsPanel = _this.closeKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setCalendarInfoRef = _this.setCalendarInfoRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setTransitionContainerRef = _this.setTransitionContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    var orientation = this.props.orientation;
    var currentMonth = this.state.currentMonth;
    var calendarInfoWidth = this.calendarInfo ? (0, _calculateDimension["default"])(this.calendarInfo, 'width', true, true) : 0;
    var currentMonthScrollTop = this.transitionContainer && orientation === _constants.VERTICAL_SCROLLABLE ? this.transitionContainer.scrollHeight - this.transitionContainer.scrollTop : null;
    this.setState({
      isTouchDevice: (0, _isTouchDevice["default"])(),
      calendarInfoWidth: calendarInfoWidth,
      currentMonthScrollTop: currentMonthScrollTop
    });
    this.setCalendarMonthWeeks(currentMonth);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    var hidden = nextProps.hidden,
        isFocused = nextProps.isFocused,
        showKeyboardShortcuts = nextProps.showKeyboardShortcuts,
        onBlur = nextProps.onBlur,
        orientation = nextProps.orientation,
        renderMonthText = nextProps.renderMonthText,
        horizontalMonthPadding = nextProps.horizontalMonthPadding;
    var currentMonth = this.state.currentMonth;
    var nextCurrentMonth = nextState.currentMonth;

    if (!hidden) {
      if (!this.hasSetInitialVisibleMonth) {
        this.hasSetInitialVisibleMonth = true;
        this.setState({
          currentMonth: nextProps.initialVisibleMonth()
        });
      }
    }

    var _this$props = this.props,
        daySize = _this$props.daySize,
        prevIsFocused = _this$props.isFocused,
        prevRenderMonthText = _this$props.renderMonthText;

    if (nextProps.daySize !== daySize) {
      this.setState({
        calendarMonthWidth: (0, _getCalendarMonthWidth["default"])(nextProps.daySize, horizontalMonthPadding)
      });
    }

    if (isFocused !== prevIsFocused) {
      if (isFocused) {
        var focusedDate = this.getFocusedDay(currentMonth);
        var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

        if (nextProps.showKeyboardShortcuts) {
          // the ? shortcut came from the input and we should return input there once it is close
          onKeyboardShortcutsPanelClose = onBlur;
        }

        this.setState({
          showKeyboardShortcuts: showKeyboardShortcuts,
          onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelClose,
          focusedDate: focusedDate,
          withMouseInteractions: false
        });
      } else {
        this.setState({
          focusedDate: null
        });
      }
    }

    if (renderMonthText !== prevRenderMonthText) {
      this.setState({
        monthTitleHeight: null
      });
    } // Capture the scroll position so when previous months are rendered above the current month
    // we can adjust scroll after the component has updated and the previous current month
    // stays in view.


    if (orientation === _constants.VERTICAL_SCROLLABLE && this.transitionContainer && !(0, _isSameMonth["default"])(currentMonth, nextCurrentMonth)) {
      this.setState({
        currentMonthScrollTop: this.transitionContainer.scrollHeight - this.transitionContainer.scrollTop
      });
    }
  };

  _proto.componentWillUpdate = function componentWillUpdate() {
    var _this2 = this;

    var transitionDuration = this.props.transitionDuration; // Calculating the dimensions trigger a DOM repaint which
    // breaks the CSS transition.
    // The setTimeout will wait until the transition ends.

    if (this.calendarInfo) {
      this.setCalendarInfoWidthTimeout = setTimeout(function () {
        var calendarInfoWidth = _this2.state.calendarInfoWidth;
        var calendarInfoPanelWidth = (0, _calculateDimension["default"])(_this2.calendarInfo, 'width', true, true);

        if (calendarInfoWidth !== calendarInfoPanelWidth) {
          _this2.setState({
            calendarInfoWidth: calendarInfoPanelWidth
          });
        }
      }, transitionDuration);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props2 = this.props,
        orientation = _this$props2.orientation,
        daySize = _this$props2.daySize,
        isFocused = _this$props2.isFocused,
        numberOfMonths = _this$props2.numberOfMonths;
    var _this$state = this.state,
        currentMonth = _this$state.currentMonth,
        currentMonthScrollTop = _this$state.currentMonthScrollTop,
        focusedDate = _this$state.focusedDate,
        monthTitleHeight = _this$state.monthTitleHeight;

    if (this.isHorizontal() && (orientation !== prevProps.orientation || daySize !== prevProps.daySize)) {
      var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
      var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);
      var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;
      this.adjustDayPickerHeight(newMonthHeight);
    }

    if (!prevProps.isFocused && isFocused && !focusedDate) {
      this.container.focus();
    } // If orientation is VERTICAL_SCROLLABLE and currentMonth has changed adjust scrollTop so the
    // new months rendered above the current month don't push the current month out of view.


    if (orientation === _constants.VERTICAL_SCROLLABLE && !(0, _isSameMonth["default"])(prevState.currentMonth, currentMonth) && currentMonthScrollTop && this.transitionContainer) {
      this.transitionContainer.scrollTop = this.transitionContainer.scrollHeight - currentMonthScrollTop;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.setCalendarInfoWidthTimeout);
    clearTimeout(this.setCalendarMonthGridHeightTimeout);
  };

  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();

    if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
      this.throttledKeyDown(e);
    }
  };

  _proto.onFinalKeyDown = function onFinalKeyDown(e) {
    this.setState({
      withMouseInteractions: false
    });
    var _this$props3 = this.props,
        onBlur = _this$props3.onBlur,
        onTab = _this$props3.onTab,
        onShiftTab = _this$props3.onShiftTab,
        isRTL = _this$props3.isRTL;
    var _this$state2 = this.state,
        focusedDate = _this$state2.focusedDate,
        showKeyboardShortcuts = _this$state2.showKeyboardShortcuts;
    if (!focusedDate) return;
    var newFocusedDate = focusedDate.clone();
    var didTransitionMonth = false; // focus might be anywhere when the keyboard shortcuts panel is opened so we want to
    // return it to wherever it was before when the panel was opened

    var activeElement = (0, _getActiveElement["default"])();

    var onKeyboardShortcutsPanelClose = function onKeyboardShortcutsPanelClose() {
      if (activeElement) activeElement.focus();
    };

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        newFocusedDate.subtract(1, 'week');
        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'ArrowLeft':
        e.preventDefault();

        if (isRTL) {
          newFocusedDate.add(1, 'day');
        } else {
          newFocusedDate.subtract(1, 'day');
        }

        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'Home':
        e.preventDefault();
        newFocusedDate.startOf('week');
        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'PageUp':
        e.preventDefault();
        newFocusedDate.subtract(1, 'month');
        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'ArrowDown':
        e.preventDefault();
        newFocusedDate.add(1, 'week');
        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case 'ArrowRight':
        e.preventDefault();

        if (isRTL) {
          newFocusedDate.subtract(1, 'day');
        } else {
          newFocusedDate.add(1, 'day');
        }

        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case 'End':
        e.preventDefault();
        newFocusedDate.endOf('week');
        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case 'PageDown':
        e.preventDefault();
        newFocusedDate.add(1, 'month');
        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case '?':
        this.openKeyboardShortcutsPanel(onKeyboardShortcutsPanelClose);
        break;

      case 'Escape':
        if (showKeyboardShortcuts) {
          this.closeKeyboardShortcutsPanel();
        } else {
          onBlur(e);
        }

        break;

      case 'Tab':
        if (e.shiftKey) {
          onShiftTab();
        } else {
          onTab(e);
        }

        break;

      default:
        break;
    } // If there was a month transition, do not update the focused date until the transition has
    // completed. Otherwise, attempting to focus on a DOM node may interrupt the CSS animation. If
    // didTransitionMonth is true, the focusedDate gets updated in #updateStateAfterMonthTransition


    if (!didTransitionMonth) {
      this.setState({
        focusedDate: newFocusedDate
      });
    }
  };

  _proto.onPrevMonthClick = function onPrevMonthClick(e) {
    if (e) e.preventDefault();
    this.onPrevMonthTransition();
  };

  _proto.onPrevMonthTransition = function onPrevMonthTransition(nextFocusedDate) {
    var _this$props4 = this.props,
        daySize = _this$props4.daySize,
        isRTL = _this$props4.isRTL,
        numberOfMonths = _this$props4.numberOfMonths;
    var _this$state3 = this.state,
        calendarMonthWidth = _this$state3.calendarMonthWidth,
        monthTitleHeight = _this$state3.monthTitleHeight;
    var translationValue;

    if (this.isVertical()) {
      var calendarMonthWeeksHeight = this.calendarMonthWeeks[0] * (daySize - 1);
      translationValue = monthTitleHeight + calendarMonthWeeksHeight + 1;
    } else if (this.isHorizontal()) {
      translationValue = calendarMonthWidth;

      if (isRTL) {
        translationValue = -2 * calendarMonthWidth;
      }

      var visibleCalendarWeeks = this.calendarMonthWeeks.slice(0, numberOfMonths);

      var _calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);

      var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight + 1;
      this.adjustDayPickerHeight(newMonthHeight);
    }

    this.setState({
      monthTransition: PREV_TRANSITION,
      translationValue: translationValue,
      focusedDate: null,
      nextFocusedDate: nextFocusedDate
    });
  };

  _proto.onMonthChange = function onMonthChange(currentMonth) {
    this.setCalendarMonthWeeks(currentMonth);
    this.calculateAndSetDayPickerHeight(); // Translation value is a hack to force an invisible transition that
    // properly rerenders the CalendarMonthGrid

    this.setState({
      monthTransition: MONTH_SELECTION_TRANSITION,
      translationValue: 0.00001,
      focusedDate: null,
      nextFocusedDate: currentMonth,
      currentMonth: currentMonth
    });
  };

  _proto.onYearChange = function onYearChange(currentMonth) {
    this.setCalendarMonthWeeks(currentMonth);
    this.calculateAndSetDayPickerHeight(); // Translation value is a hack to force an invisible transition that
    // properly rerenders the CalendarMonthGrid

    this.setState({
      monthTransition: YEAR_SELECTION_TRANSITION,
      translationValue: 0.0001,
      focusedDate: null,
      nextFocusedDate: currentMonth,
      currentMonth: currentMonth
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick(e) {
    if (e) e.preventDefault();
    this.onNextMonthTransition();
  };

  _proto.onNextMonthTransition = function onNextMonthTransition(nextFocusedDate) {
    var _this$props5 = this.props,
        isRTL = _this$props5.isRTL,
        numberOfMonths = _this$props5.numberOfMonths,
        daySize = _this$props5.daySize;
    var _this$state4 = this.state,
        calendarMonthWidth = _this$state4.calendarMonthWidth,
        monthTitleHeight = _this$state4.monthTitleHeight;
    var translationValue;

    if (this.isVertical()) {
      var firstVisibleMonthWeeks = this.calendarMonthWeeks[1];
      var calendarMonthWeeksHeight = firstVisibleMonthWeeks * (daySize - 1);
      translationValue = -(monthTitleHeight + calendarMonthWeeksHeight + 1);
    }

    if (this.isHorizontal()) {
      translationValue = -calendarMonthWidth;

      if (isRTL) {
        translationValue = 0;
      }

      var visibleCalendarWeeks = this.calendarMonthWeeks.slice(2, numberOfMonths + 2);

      var _calendarMonthWeeksHeight2 = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);

      var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight2 + 1;
      this.adjustDayPickerHeight(newMonthHeight);
    }

    this.setState({
      monthTransition: NEXT_TRANSITION,
      translationValue: translationValue,
      focusedDate: null,
      nextFocusedDate: nextFocusedDate
    });
  };

  _proto.getFirstDayOfWeek = function getFirstDayOfWeek() {
    var firstDayOfWeek = this.props.firstDayOfWeek;

    if (firstDayOfWeek == null) {
      return _moment["default"].localeData().firstDayOfWeek();
    }

    return firstDayOfWeek;
  };

  _proto.getWeekHeaders = function getWeekHeaders() {
    var weekDayFormat = this.props.weekDayFormat;
    var currentMonth = this.state.currentMonth;
    var firstDayOfWeek = this.getFirstDayOfWeek();
    var weekHeaders = [];

    for (var i = 0; i < 7; i += 1) {
      weekHeaders.push(currentMonth.clone().day((i + firstDayOfWeek) % 7).format(weekDayFormat));
    }

    return weekHeaders;
  };

  _proto.getFirstVisibleIndex = function getFirstVisibleIndex() {
    var orientation = this.props.orientation;
    var monthTransition = this.state.monthTransition;
    if (orientation === _constants.VERTICAL_SCROLLABLE) return 0;
    var firstVisibleMonthIndex = 1;

    if (monthTransition === PREV_TRANSITION) {
      firstVisibleMonthIndex -= 1;
    } else if (monthTransition === NEXT_TRANSITION) {
      firstVisibleMonthIndex += 1;
    }

    return firstVisibleMonthIndex;
  };

  _proto.getFocusedDay = function getFocusedDay(newMonth) {
    var _this$props6 = this.props,
        getFirstFocusableDay = _this$props6.getFirstFocusableDay,
        numberOfMonths = _this$props6.numberOfMonths;
    var focusedDate;

    if (getFirstFocusableDay) {
      focusedDate = getFirstFocusableDay(newMonth);
    }

    if (newMonth && (!focusedDate || !(0, _isDayVisible["default"])(focusedDate, newMonth, numberOfMonths))) {
      focusedDate = newMonth.clone().startOf('month');
    }

    return focusedDate;
  };

  _proto.setMonthTitleHeight = function setMonthTitleHeight(monthTitleHeight) {
    var _this3 = this;

    this.setState({
      monthTitleHeight: monthTitleHeight
    }, function () {
      _this3.calculateAndSetDayPickerHeight();
    });
  };

  _proto.setCalendarMonthWeeks = function setCalendarMonthWeeks(currentMonth) {
    var numberOfMonths = this.props.numberOfMonths;
    this.calendarMonthWeeks = [];
    var month = currentMonth.clone().subtract(1, 'months');
    var firstDayOfWeek = this.getFirstDayOfWeek();

    for (var i = 0; i < numberOfMonths + 2; i += 1) {
      var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(month, firstDayOfWeek);
      this.calendarMonthWeeks.push(numberOfWeeks);
      month = month.add(1, 'months');
    }
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.setCalendarInfoRef = function setCalendarInfoRef(ref) {
    this.calendarInfo = ref;
  };

  _proto.setTransitionContainerRef = function setTransitionContainerRef(ref) {
    this.transitionContainer = ref;
  };

  _proto.getNextScrollableMonths = function getNextScrollableMonths(e) {
    var onGetNextScrollableMonths = this.props.onGetNextScrollableMonths;
    if (e) e.preventDefault();
    if (onGetNextScrollableMonths) onGetNextScrollableMonths(e);
    this.setState(function (_ref2) {
      var scrollableMonthMultiple = _ref2.scrollableMonthMultiple;
      return {
        scrollableMonthMultiple: scrollableMonthMultiple + 1
      };
    });
  };

  _proto.getPrevScrollableMonths = function getPrevScrollableMonths(e) {
    var _this$props7 = this.props,
        numberOfMonths = _this$props7.numberOfMonths,
        onGetPrevScrollableMonths = _this$props7.onGetPrevScrollableMonths;
    if (e) e.preventDefault();
    if (onGetPrevScrollableMonths) onGetPrevScrollableMonths(e);
    this.setState(function (_ref3) {
      var currentMonth = _ref3.currentMonth,
          scrollableMonthMultiple = _ref3.scrollableMonthMultiple;
      return {
        currentMonth: currentMonth.clone().subtract(numberOfMonths, 'month'),
        scrollableMonthMultiple: scrollableMonthMultiple + 1
      };
    });
  };

  _proto.maybeTransitionNextMonth = function maybeTransitionNextMonth(newFocusedDate) {
    var numberOfMonths = this.props.numberOfMonths;
    var _this$state5 = this.state,
        currentMonth = _this$state5.currentMonth,
        focusedDate = _this$state5.focusedDate;
    var newFocusedDateMonth = newFocusedDate.month();
    var focusedDateMonth = focusedDate.month();
    var isNewFocusedDateVisible = (0, _isDayVisible["default"])(newFocusedDate, currentMonth, numberOfMonths);

    if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
      this.onNextMonthTransition(newFocusedDate);
      return true;
    }

    return false;
  };

  _proto.maybeTransitionPrevMonth = function maybeTransitionPrevMonth(newFocusedDate) {
    var numberOfMonths = this.props.numberOfMonths;
    var _this$state6 = this.state,
        currentMonth = _this$state6.currentMonth,
        focusedDate = _this$state6.focusedDate;
    var newFocusedDateMonth = newFocusedDate.month();
    var focusedDateMonth = focusedDate.month();
    var isNewFocusedDateVisible = (0, _isDayVisible["default"])(newFocusedDate, currentMonth, numberOfMonths);

    if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
      this.onPrevMonthTransition(newFocusedDate);
      return true;
    }

    return false;
  };

  _proto.isHorizontal = function isHorizontal() {
    var orientation = this.props.orientation;
    return orientation === _constants.HORIZONTAL_ORIENTATION;
  };

  _proto.isVertical = function isVertical() {
    var orientation = this.props.orientation;
    return orientation === _constants.VERTICAL_ORIENTATION || orientation === _constants.VERTICAL_SCROLLABLE;
  };

  _proto.updateStateAfterMonthTransition = function updateStateAfterMonthTransition() {
    var _this4 = this;

    var _this$props8 = this.props,
        onPrevMonthClick = _this$props8.onPrevMonthClick,
        onNextMonthClick = _this$props8.onNextMonthClick,
        numberOfMonths = _this$props8.numberOfMonths,
        onMonthChange = _this$props8.onMonthChange,
        onYearChange = _this$props8.onYearChange,
        isRTL = _this$props8.isRTL;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        monthTransition = _this$state7.monthTransition,
        focusedDate = _this$state7.focusedDate,
        nextFocusedDate = _this$state7.nextFocusedDate,
        withMouseInteractions = _this$state7.withMouseInteractions,
        calendarMonthWidth = _this$state7.calendarMonthWidth;
    if (!monthTransition) return;
    var newMonth = currentMonth.clone();
    var firstDayOfWeek = this.getFirstDayOfWeek();

    if (monthTransition === PREV_TRANSITION) {
      newMonth.subtract(1, 'month');
      if (onPrevMonthClick) onPrevMonthClick(newMonth);
      var newInvisibleMonth = newMonth.clone().subtract(1, 'month');
      var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(newInvisibleMonth, firstDayOfWeek);
      this.calendarMonthWeeks = [numberOfWeeks].concat((0, _toConsumableArray2["default"])(this.calendarMonthWeeks.slice(0, -1)));
    } else if (monthTransition === NEXT_TRANSITION) {
      newMonth.add(1, 'month');
      if (onNextMonthClick) onNextMonthClick(newMonth);

      var _newInvisibleMonth = newMonth.clone().add(numberOfMonths, 'month');

      var _numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(_newInvisibleMonth, firstDayOfWeek);

      this.calendarMonthWeeks = [].concat((0, _toConsumableArray2["default"])(this.calendarMonthWeeks.slice(1)), [_numberOfWeeks]);
    } else if (monthTransition === MONTH_SELECTION_TRANSITION) {
      if (onMonthChange) onMonthChange(newMonth);
    } else if (monthTransition === YEAR_SELECTION_TRANSITION) {
      if (onYearChange) onYearChange(newMonth);
    }

    var newFocusedDate = null;

    if (nextFocusedDate) {
      newFocusedDate = nextFocusedDate;
    } else if (!focusedDate && !withMouseInteractions) {
      newFocusedDate = this.getFocusedDay(newMonth);
    }

    this.setState({
      currentMonth: newMonth,
      monthTransition: null,
      translationValue: isRTL && this.isHorizontal() ? -calendarMonthWidth : 0,
      nextFocusedDate: null,
      focusedDate: newFocusedDate
    }, function () {
      // we don't want to focus on the relevant calendar day after a month transition
      // if the user is navigating around using a mouse
      if (withMouseInteractions) {
        var activeElement = (0, _getActiveElement["default"])();

        if (activeElement && activeElement !== document.body && _this4.container.contains(activeElement) && activeElement.blur) {
          activeElement.blur();
        }
      }
    });
  };

  _proto.adjustDayPickerHeight = function adjustDayPickerHeight(newMonthHeight) {
    var _this5 = this;

    var monthHeight = newMonthHeight + MONTH_PADDING;

    if (monthHeight !== this.calendarMonthGridHeight) {
      this.transitionContainer.style.height = "".concat(monthHeight, "px");

      if (!this.calendarMonthGridHeight) {
        this.setCalendarMonthGridHeightTimeout = setTimeout(function () {
          _this5.setState({
            hasSetHeight: true
          });
        }, 0);
      }

      this.calendarMonthGridHeight = monthHeight;
    }
  };

  _proto.calculateAndSetDayPickerHeight = function calculateAndSetDayPickerHeight() {
    var _this$props9 = this.props,
        daySize = _this$props9.daySize,
        numberOfMonths = _this$props9.numberOfMonths;
    var monthTitleHeight = this.state.monthTitleHeight;
    var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
    var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);
    var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;

    if (this.isHorizontal()) {
      this.adjustDayPickerHeight(newMonthHeight);
    }
  };

  _proto.openKeyboardShortcutsPanel = function openKeyboardShortcutsPanel(onCloseCallBack) {
    this.setState({
      showKeyboardShortcuts: true,
      onKeyboardShortcutsPanelClose: onCloseCallBack
    });
  };

  _proto.closeKeyboardShortcutsPanel = function closeKeyboardShortcutsPanel() {
    var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

    if (onKeyboardShortcutsPanelClose) {
      onKeyboardShortcutsPanelClose();
    }

    this.setState({
      onKeyboardShortcutsPanelClose: null,
      showKeyboardShortcuts: false
    });
  };

  _proto.renderNavigation = function renderNavigation(navDirection) {
    var _this$props10 = this.props,
        dayPickerNavigationInlineStyles = _this$props10.dayPickerNavigationInlineStyles,
        disablePrev = _this$props10.disablePrev,
        disableNext = _this$props10.disableNext,
        navPosition = _this$props10.navPosition,
        navPrev = _this$props10.navPrev,
        navNext = _this$props10.navNext,
        noNavButtons = _this$props10.noNavButtons,
        noNavNextButton = _this$props10.noNavNextButton,
        noNavPrevButton = _this$props10.noNavPrevButton,
        orientation = _this$props10.orientation,
        phrases = _this$props10.phrases,
        renderNavPrevButton = _this$props10.renderNavPrevButton,
        renderNavNextButton = _this$props10.renderNavNextButton,
        isRTL = _this$props10.isRTL;

    if (noNavButtons) {
      return null;
    }

    var onPrevMonthClick = orientation === _constants.VERTICAL_SCROLLABLE ? this.getPrevScrollableMonths : this.onPrevMonthClick;
    var onNextMonthClick = orientation === _constants.VERTICAL_SCROLLABLE ? this.getNextScrollableMonths : this.onNextMonthClick;
    return _react["default"].createElement(_DayPickerNavigation["default"], {
      disablePrev: disablePrev,
      disableNext: disableNext,
      inlineStyles: dayPickerNavigationInlineStyles,
      onPrevMonthClick: onPrevMonthClick,
      onNextMonthClick: onNextMonthClick,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      orientation: orientation,
      phrases: phrases,
      isRTL: isRTL,
      showNavNextButton: !(noNavNextButton || orientation === _constants.VERTICAL_SCROLLABLE && navDirection === PREV_NAV),
      showNavPrevButton: !(noNavPrevButton || orientation === _constants.VERTICAL_SCROLLABLE && navDirection === NEXT_NAV)
    });
  };

  _proto.renderWeekHeader = function renderWeekHeader(index) {
    var _this$props11 = this.props,
        daySize = _this$props11.daySize,
        horizontalMonthPadding = _this$props11.horizontalMonthPadding,
        orientation = _this$props11.orientation,
        renderWeekHeaderElement = _this$props11.renderWeekHeaderElement,
        styles = _this$props11.styles;
    var calendarMonthWidth = this.state.calendarMonthWidth;
    var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var horizontalStyle = {
      left: index * calendarMonthWidth
    };
    var verticalStyle = {
      marginLeft: -calendarMonthWidth / 2
    };
    var weekHeaderStyle = {}; // no styles applied to the vertical-scrollable orientation

    if (this.isHorizontal()) {
      weekHeaderStyle = horizontalStyle;
    } else if (this.isVertical() && !verticalScrollable) {
      weekHeaderStyle = verticalStyle;
    }

    var weekHeaders = this.getWeekHeaders();
    var header = weekHeaders.map(function (day) {
      return _react["default"].createElement("li", (0, _extends2["default"])({
        key: day
      }, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_li, {
        width: daySize
      })), renderWeekHeaderElement ? renderWeekHeaderElement(day) : _react["default"].createElement("small", null, day));
    });
    return _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader, this.isVertical() && styles.DayPicker_weekHeader__vertical, verticalScrollable && styles.DayPicker_weekHeader__verticalScrollable, weekHeaderStyle, {
      padding: "0 ".concat(horizontalMonthPadding, "px")
    }), {
      key: "week-".concat(index)
    }), _react["default"].createElement("ul", (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_ul), header));
  };

  _proto.render = function render() {
    var _this6 = this;

    var _this$state8 = this.state,
        calendarMonthWidth = _this$state8.calendarMonthWidth,
        currentMonth = _this$state8.currentMonth,
        monthTransition = _this$state8.monthTransition,
        translationValue = _this$state8.translationValue,
        scrollableMonthMultiple = _this$state8.scrollableMonthMultiple,
        focusedDate = _this$state8.focusedDate,
        showKeyboardShortcuts = _this$state8.showKeyboardShortcuts,
        isTouch = _this$state8.isTouchDevice,
        hasSetHeight = _this$state8.hasSetHeight,
        calendarInfoWidth = _this$state8.calendarInfoWidth,
        monthTitleHeight = _this$state8.monthTitleHeight;
    var _this$props12 = this.props,
        enableOutsideDays = _this$props12.enableOutsideDays,
        numberOfMonths = _this$props12.numberOfMonths,
        orientation = _this$props12.orientation,
        modifiers = _this$props12.modifiers,
        withPortal = _this$props12.withPortal,
        onDayClick = _this$props12.onDayClick,
        onDayMouseEnter = _this$props12.onDayMouseEnter,
        onDayMouseLeave = _this$props12.onDayMouseLeave,
        firstDayOfWeek = _this$props12.firstDayOfWeek,
        renderMonthText = _this$props12.renderMonthText,
        renderCalendarDay = _this$props12.renderCalendarDay,
        renderDayContents = _this$props12.renderDayContents,
        renderCalendarInfo = _this$props12.renderCalendarInfo,
        renderMonthElement = _this$props12.renderMonthElement,
        renderKeyboardShortcutsButton = _this$props12.renderKeyboardShortcutsButton,
        renderKeyboardShortcutsPanel = _this$props12.renderKeyboardShortcutsPanel,
        calendarInfoPosition = _this$props12.calendarInfoPosition,
        hideKeyboardShortcutsPanel = _this$props12.hideKeyboardShortcutsPanel,
        onOutsideClick = _this$props12.onOutsideClick,
        monthFormat = _this$props12.monthFormat,
        daySize = _this$props12.daySize,
        isFocused = _this$props12.isFocused,
        isRTL = _this$props12.isRTL,
        styles = _this$props12.styles,
        theme = _this$props12.theme,
        phrases = _this$props12.phrases,
        verticalHeight = _this$props12.verticalHeight,
        dayAriaLabelFormat = _this$props12.dayAriaLabelFormat,
        noBorder = _this$props12.noBorder,
        transitionDuration = _this$props12.transitionDuration,
        verticalBorderSpacing = _this$props12.verticalBorderSpacing,
        horizontalMonthPadding = _this$props12.horizontalMonthPadding,
        navPosition = _this$props12.navPosition;
    var dayPickerHorizontalPadding = theme.reactDates.spacing.dayPickerHorizontalPadding;
    var isHorizontal = this.isHorizontal();
    var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
    var weekHeaders = [];

    for (var i = 0; i < numOfWeekHeaders; i += 1) {
      weekHeaders.push(this.renderWeekHeader(i));
    }

    var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var height;

    if (isHorizontal) {
      height = this.calendarMonthGridHeight;
    } else if (this.isVertical() && !verticalScrollable && !withPortal) {
      // If the user doesn't set a desired height,
      // we default back to this kind of made-up value that generally looks good
      height = verticalHeight || 1.75 * calendarMonthWidth;
    }

    var isCalendarMonthGridAnimating = monthTransition !== null;
    var shouldFocusDate = !isCalendarMonthGridAnimating && isFocused;
    var keyboardShortcutButtonLocation = _DayPickerKeyboardShortcuts.BOTTOM_RIGHT;

    if (this.isVertical()) {
      keyboardShortcutButtonLocation = withPortal ? _DayPickerKeyboardShortcuts.TOP_LEFT : _DayPickerKeyboardShortcuts.TOP_RIGHT;
    }

    var shouldAnimateHeight = isHorizontal && hasSetHeight;
    var calendarInfoPositionTop = calendarInfoPosition === _constants.INFO_POSITION_TOP;
    var calendarInfoPositionBottom = calendarInfoPosition === _constants.INFO_POSITION_BOTTOM;
    var calendarInfoPositionBefore = calendarInfoPosition === _constants.INFO_POSITION_BEFORE;
    var calendarInfoPositionAfter = calendarInfoPosition === _constants.INFO_POSITION_AFTER;
    var calendarInfoIsInline = calendarInfoPositionBefore || calendarInfoPositionAfter;

    var calendarInfo = renderCalendarInfo && _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setCalendarInfoRef
    }, (0, _reactWithStyles.css)(calendarInfoIsInline && styles.DayPicker_calendarInfo__horizontal)), renderCalendarInfo());

    var calendarInfoPanelWidth = renderCalendarInfo && calendarInfoIsInline ? calendarInfoWidth : 0;
    var firstVisibleMonthIndex = this.getFirstVisibleIndex();
    var wrapperHorizontalWidth = calendarMonthWidth * numberOfMonths + 2 * dayPickerHorizontalPadding; // Adding `1px` because of whitespace between 2 inline-block

    var fullHorizontalWidth = wrapperHorizontalWidth + calendarInfoPanelWidth + 1;
    var transitionContainerStyle = {
      width: isHorizontal && wrapperHorizontalWidth,
      height: height
    };
    var dayPickerWrapperStyle = {
      width: isHorizontal && wrapperHorizontalWidth
    };
    var dayPickerStyle = {
      width: isHorizontal && fullHorizontalWidth,
      // These values are to center the datepicker (approximately) on the page
      marginLeft: isHorizontal && withPortal ? -fullHorizontalWidth / 2 : null,
      marginTop: isHorizontal && withPortal ? -calendarMonthWidth / 2 : null
    };
    return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DayPicker, isHorizontal && styles.DayPicker__horizontal, verticalScrollable && styles.DayPicker__verticalScrollable, isHorizontal && withPortal && styles.DayPicker_portal__horizontal, this.isVertical() && withPortal && styles.DayPicker_portal__vertical, dayPickerStyle, !monthTitleHeight && styles.DayPicker__hidden, !noBorder && styles.DayPicker__withBorder), _react["default"].createElement(_reactOutsideClickHandler["default"], {
      onOutsideClick: onOutsideClick
    }, (calendarInfoPositionTop || calendarInfoPositionBefore) && calendarInfo, _react["default"].createElement("div", (0, _reactWithStyles.css)(dayPickerWrapperStyle, calendarInfoIsInline && isHorizontal && styles.DayPicker_wrapper__horizontal), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeaders, isHorizontal && styles.DayPicker_weekHeaders__horizontal), {
      "aria-hidden": "true",
      role: "presentation"
    }), weekHeaders), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_focusRegion), {
      ref: this.setContainerRef,
      onClick: function onClick(e) {
        e.stopPropagation();
      },
      onKeyDown: this.onKeyDown,
      onMouseUp: function onMouseUp() {
        _this6.setState({
          withMouseInteractions: true
        });
      },
      tabIndex: -1,
      role: "application",
      "aria-roledescription": phrases.roleDescription,
      "aria-label": phrases.calendarLabel
    }), !verticalScrollable && navPosition === _constants.NAV_POSITION_TOP && this.renderNavigation(), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_transitionContainer, shouldAnimateHeight && styles.DayPicker_transitionContainer__horizontal, this.isVertical() && styles.DayPicker_transitionContainer__vertical, verticalScrollable && styles.DayPicker_transitionContainer__verticalScrollable, transitionContainerStyle), {
      ref: this.setTransitionContainerRef
    }), verticalScrollable && this.renderNavigation(PREV_NAV), _react["default"].createElement(_CalendarMonthGrid["default"], {
      setMonthTitleHeight: !monthTitleHeight ? this.setMonthTitleHeight : undefined,
      translationValue: translationValue,
      enableOutsideDays: enableOutsideDays,
      firstVisibleMonthIndex: firstVisibleMonthIndex,
      initialMonth: currentMonth,
      isAnimating: isCalendarMonthGridAnimating,
      modifiers: modifiers,
      orientation: orientation,
      numberOfMonths: numberOfMonths * scrollableMonthMultiple,
      onDayClick: onDayClick,
      onDayMouseEnter: onDayMouseEnter,
      onDayMouseLeave: onDayMouseLeave,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
      renderMonthText: renderMonthText,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderMonthElement: renderMonthElement,
      onMonthTransitionEnd: this.updateStateAfterMonthTransition,
      monthFormat: monthFormat,
      daySize: daySize,
      firstDayOfWeek: firstDayOfWeek,
      isFocused: shouldFocusDate,
      focusedDate: focusedDate,
      phrases: phrases,
      isRTL: isRTL,
      dayAriaLabelFormat: dayAriaLabelFormat,
      transitionDuration: transitionDuration,
      verticalBorderSpacing: verticalBorderSpacing,
      horizontalMonthPadding: horizontalMonthPadding
    }), verticalScrollable && this.renderNavigation(NEXT_NAV)), !verticalScrollable && navPosition === _constants.NAV_POSITION_BOTTOM && this.renderNavigation(), !isTouch && !hideKeyboardShortcutsPanel && _react["default"].createElement(_DayPickerKeyboardShortcuts["default"], {
      block: this.isVertical() && !withPortal,
      buttonLocation: keyboardShortcutButtonLocation,
      showKeyboardShortcutsPanel: showKeyboardShortcuts,
      openKeyboardShortcutsPanel: this.openKeyboardShortcutsPanel,
      closeKeyboardShortcutsPanel: this.closeKeyboardShortcutsPanel,
      phrases: phrases,
      renderKeyboardShortcutsButton: renderKeyboardShortcutsButton,
      renderKeyboardShortcutsPanel: renderKeyboardShortcutsPanel
    }))), (calendarInfoPositionBottom || calendarInfoPositionAfter) && calendarInfo));
  };

  return DayPicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDayPicker = DayPicker;
DayPicker.propTypes =  true ? propTypes : undefined;
DayPicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref4) {
  var _ref4$reactDates = _ref4.reactDates,
      color = _ref4$reactDates.color,
      font = _ref4$reactDates.font,
      noScrollBarOnVerticalScrollable = _ref4$reactDates.noScrollBarOnVerticalScrollable,
      spacing = _ref4$reactDates.spacing,
      zIndex = _ref4$reactDates.zIndex;
  return {
    DayPicker: {
      background: color.background,
      position: 'relative',
      textAlign: (0, _noflip["default"])('left')
    },
    DayPicker__horizontal: {
      background: color.background
    },
    DayPicker__verticalScrollable: {
      height: '100%'
    },
    DayPicker__hidden: {
      visibility: 'hidden'
    },
    DayPicker__withBorder: {
      boxShadow: (0, _noflip["default"])('0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)'),
      borderRadius: 3
    },
    DayPicker_portal__horizontal: {
      boxShadow: 'none',
      position: 'absolute',
      left: (0, _noflip["default"])('50%'),
      top: '50%'
    },
    DayPicker_portal__vertical: {
      position: 'initial'
    },
    DayPicker_focusRegion: {
      outline: 'none'
    },
    DayPicker_calendarInfo__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    DayPicker_wrapper__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    DayPicker_weekHeaders: {
      position: 'relative'
    },
    DayPicker_weekHeaders__horizontal: {
      marginLeft: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    DayPicker_weekHeader: {
      color: color.placeholderText,
      position: 'absolute',
      top: 62,
      zIndex: zIndex + 2,
      textAlign: (0, _noflip["default"])('left')
    },
    DayPicker_weekHeader__vertical: {
      left: (0, _noflip["default"])('50%')
    },
    DayPicker_weekHeader__verticalScrollable: {
      top: 0,
      display: 'table-row',
      borderBottom: "1px solid ".concat(color.core.border),
      background: color.background,
      marginLeft: (0, _noflip["default"])(0),
      left: (0, _noflip["default"])(0),
      width: '100%',
      textAlign: 'center'
    },
    DayPicker_weekHeader_ul: {
      listStyle: 'none',
      margin: '1px 0',
      paddingLeft: (0, _noflip["default"])(0),
      paddingRight: (0, _noflip["default"])(0),
      fontSize: font.size
    },
    DayPicker_weekHeader_li: {
      display: 'inline-block',
      textAlign: 'center'
    },
    DayPicker_transitionContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 3
    },
    DayPicker_transitionContainer__horizontal: {
      transition: 'height 0.2s ease-in-out'
    },
    DayPicker_transitionContainer__vertical: {
      width: '100%'
    },
    DayPicker_transitionContainer__verticalScrollable: _objectSpread({
      paddingTop: 20,
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: (0, _noflip["default"])(0),
      left: (0, _noflip["default"])(0),
      overflowY: 'scroll'
    }, noScrollBarOnVerticalScrollable && {
      '-webkitOverflowScrolling': 'touch',
      '::-webkit-scrollbar': {
        '-webkit-appearance': 'none',
        display: 'none'
      }
    })
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPicker);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DayPickerKeyboardShortcuts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BOTTOM_RIGHT = exports.TOP_RIGHT = exports.TOP_LEFT = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _KeyboardShortcutRow = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/KeyboardShortcutRow.js"));

var _CloseButton = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CloseButton.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TOP_LEFT = 'top-left';
exports.TOP_LEFT = TOP_LEFT;
var TOP_RIGHT = 'top-right';
exports.TOP_RIGHT = TOP_RIGHT;
var BOTTOM_RIGHT = 'bottom-right';
exports.BOTTOM_RIGHT = BOTTOM_RIGHT;
var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  block: _propTypes["default"].bool,
  // TODO: rename button location to be direction-agnostic
  buttonLocation: _propTypes["default"].oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT]),
  showKeyboardShortcutsPanel: _propTypes["default"].bool,
  openKeyboardShortcutsPanel: _propTypes["default"].func,
  closeKeyboardShortcutsPanel: _propTypes["default"].func,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerKeyboardShortcutsPhrases)),
  renderKeyboardShortcutsButton: _propTypes["default"].func,
  renderKeyboardShortcutsPanel: _propTypes["default"].func
})) : undefined;
var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function openKeyboardShortcutsPanel() {},
  closeKeyboardShortcutsPanel: function closeKeyboardShortcutsPanel() {},
  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined
};

function getKeyboardShortcuts(phrases) {
  return [{
    unicode: '↵',
    label: phrases.enterKey,
    action: phrases.selectFocusedDate
  }, {
    unicode: '←/→',
    label: phrases.leftArrowRightArrow,
    action: phrases.moveFocusByOneDay
  }, {
    unicode: '↑/↓',
    label: phrases.upArrowDownArrow,
    action: phrases.moveFocusByOneWeek
  }, {
    unicode: 'PgUp/PgDn',
    label: phrases.pageUpPageDown,
    action: phrases.moveFocusByOneMonth
  }, {
    unicode: 'Home/End',
    label: phrases.homeEnd,
    action: phrases.moveFocustoStartAndEndOfWeek
  }, {
    unicode: 'Esc',
    label: phrases.escape,
    action: phrases.returnFocusToInput
  }, {
    unicode: '?',
    label: phrases.questionMark,
    action: phrases.openThisPanel
  }];
}

var DayPickerKeyboardShortcuts =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerKeyboardShortcuts, _ref);
  var _proto = DayPickerKeyboardShortcuts.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPickerKeyboardShortcuts() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ref.call.apply(_ref, [this].concat(args)) || this;
    var phrases = _this.props.phrases;
    _this.keyboardShortcuts = getKeyboardShortcuts(phrases);
    _this.onShowKeyboardShortcutsButtonClick = _this.onShowKeyboardShortcutsButtonClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setHideKeyboardShortcutsButtonRef = _this.setHideKeyboardShortcutsButtonRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var phrases = this.props.phrases;

    if (nextProps.phrases !== phrases) {
      this.keyboardShortcuts = getKeyboardShortcuts(nextProps.phrases);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.handleFocus();
  };

  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();
    var closeKeyboardShortcutsPanel = this.props.closeKeyboardShortcutsPanel; // Because the close button is the only focusable element inside of the panel, this
    // amounts to a very basic focus trap. The user can exit the panel by "pressing" the
    // close button or hitting escape

    switch (e.key) {
      case 'Escape':
        closeKeyboardShortcutsPanel();
        break;
      // do nothing - this allows the up and down arrows continue their
      // default behavior of scrolling the content of the Keyboard Shortcuts Panel
      // which is needed when only a single month is shown for instance.

      case 'ArrowUp':
      case 'ArrowDown':
        break;
      // completely block the rest of the keys that have functionality outside of this panel

      case 'Tab':
      case 'Home':
      case 'End':
      case 'PageUp':
      case 'PageDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  _proto.onShowKeyboardShortcutsButtonClick = function onShowKeyboardShortcutsButtonClick() {
    var _this2 = this;

    var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel; // we want to return focus to this button after closing the keyboard shortcuts panel

    openKeyboardShortcutsPanel(function () {
      _this2.showKeyboardShortcutsButton.focus();
    });
  };

  _proto.setShowKeyboardShortcutsButtonRef = function setShowKeyboardShortcutsButtonRef(ref) {
    this.showKeyboardShortcutsButton = ref;
  };

  _proto.setHideKeyboardShortcutsButtonRef = function setHideKeyboardShortcutsButtonRef(ref) {
    this.hideKeyboardShortcutsButton = ref;
  };

  _proto.handleFocus = function handleFocus() {
    if (this.hideKeyboardShortcutsButton) {
      // automatically move focus into the dialog by moving
      // to the only interactive element, the hide button
      this.hideKeyboardShortcutsButton.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        block = _this$props.block,
        buttonLocation = _this$props.buttonLocation,
        showKeyboardShortcutsPanel = _this$props.showKeyboardShortcutsPanel,
        closeKeyboardShortcutsPanel = _this$props.closeKeyboardShortcutsPanel,
        styles = _this$props.styles,
        phrases = _this$props.phrases,
        renderKeyboardShortcutsButton = _this$props.renderKeyboardShortcutsButton,
        renderKeyboardShortcutsPanel = _this$props.renderKeyboardShortcutsPanel;
    var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;
    var bottomRight = buttonLocation === BOTTOM_RIGHT;
    var topRight = buttonLocation === TOP_RIGHT;
    var topLeft = buttonLocation === TOP_LEFT;
    return _react["default"].createElement("div", null, renderKeyboardShortcutsButton && renderKeyboardShortcutsButton({
      // passing in context-specific props
      ref: this.setShowKeyboardShortcutsButtonRef,
      onClick: this.onShowKeyboardShortcutsButtonClick,
      ariaLabel: toggleButtonText
    }), !renderKeyboardShortcutsButton && _react["default"].createElement("button", (0, _extends2["default"])({
      ref: this.setShowKeyboardShortcutsButtonRef
    }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_show, bottomRight && styles.DayPickerKeyboardShortcuts_show__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_show__topRight, topLeft && styles.DayPickerKeyboardShortcuts_show__topLeft), {
      type: "button",
      "aria-label": toggleButtonText,
      onClick: this.onShowKeyboardShortcutsButtonClick,
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      }
    }), _react["default"].createElement("span", (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_showSpan, bottomRight && styles.DayPickerKeyboardShortcuts_showSpan__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_showSpan__topRight, topLeft && styles.DayPickerKeyboardShortcuts_showSpan__topLeft), "?")), showKeyboardShortcutsPanel && (renderKeyboardShortcutsPanel ? renderKeyboardShortcutsPanel({
      closeButtonAriaLabel: phrases.hideKeyboardShortcutsPanel,
      keyboardShortcuts: this.keyboardShortcuts,
      onCloseButtonClick: closeKeyboardShortcutsPanel,
      onKeyDown: this.onKeyDown,
      title: phrases.keyboardShortcuts
    }) : _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_panel), {
      role: "dialog",
      "aria-labelledby": "DayPickerKeyboardShortcuts_title",
      "aria-describedby": "DayPickerKeyboardShortcuts_description"
    }), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_title), {
      id: "DayPickerKeyboardShortcuts_title"
    }), phrases.keyboardShortcuts), _react["default"].createElement("button", (0, _extends2["default"])({
      ref: this.setHideKeyboardShortcutsButtonRef
    }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_close), {
      type: "button",
      tabIndex: "0",
      "aria-label": phrases.hideKeyboardShortcutsPanel,
      onClick: closeKeyboardShortcutsPanel,
      onKeyDown: this.onKeyDown
    }), _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_closeSvg))), _react["default"].createElement("ul", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_list), {
      id: "DayPickerKeyboardShortcuts_description"
    }), this.keyboardShortcuts.map(function (_ref2) {
      var unicode = _ref2.unicode,
          label = _ref2.label,
          action = _ref2.action;
      return _react["default"].createElement(_KeyboardShortcutRow["default"], {
        key: label,
        unicode: unicode,
        label: label,
        action: action,
        block: block
      });
    })))));
  };

  return DayPickerKeyboardShortcuts;
}(_react["default"].PureComponent || _react["default"].Component);

DayPickerKeyboardShortcuts.propTypes =  true ? propTypes : undefined;
DayPickerKeyboardShortcuts.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      font = _ref3$reactDates.font,
      zIndex = _ref3$reactDates.zIndex;
  return {
    DayPickerKeyboardShortcuts_buttonReset: {
      background: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      padding: 0,
      cursor: 'pointer',
      fontSize: font.size,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_show: {
      width: 33,
      height: 26,
      position: 'absolute',
      zIndex: zIndex + 2,
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute'
      }
    },
    DayPickerKeyboardShortcuts_show__bottomRight: {
      bottom: 0,
      right: 0,
      '::before': {
        borderTop: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        bottom: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topRight: {
      top: 0,
      right: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        top: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topLeft: {
      top: 0,
      left: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderLeft: "33px solid ".concat(color.core.primary),
        top: 0,
        left: 0
      },
      ':hover::before': {
        borderLeft: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_showSpan: {
      color: color.core.white,
      position: 'absolute'
    },
    DayPickerKeyboardShortcuts_showSpan__bottomRight: {
      bottom: 0,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topRight: {
      top: 1,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topLeft: {
      top: 1,
      left: 5
    },
    DayPickerKeyboardShortcuts_panel: {
      overflow: 'auto',
      background: color.background,
      border: "1px solid ".concat(color.core.border),
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: zIndex + 2,
      padding: 22,
      margin: 33,
      textAlign: 'left' // TODO: investigate use of text-align throughout the library

    },
    DayPickerKeyboardShortcuts_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 0
    },
    DayPickerKeyboardShortcuts_list: {
      listStyle: 'none',
      padding: 0,
      fontSize: font.size
    },
    DayPickerKeyboardShortcuts_close: {
      position: 'absolute',
      right: 22,
      top: 22,
      zIndex: zIndex + 2,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_closeSvg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter,
      ':hover': {
        fill: color.core.grayLight
      },
      ':focus': {
        fill: color.core.grayLight
      }
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerKeyboardShortcuts);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DayPickerNavigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _LeftArrow = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/LeftArrow.js"));

var _RightArrow = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/RightArrow.js"));

var _ChevronUp = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/ChevronUp.js"));

var _ChevronDown = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/ChevronDown.js"));

var _NavPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/NavPositionShape.js"));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  disablePrev: _propTypes["default"].bool,
  disableNext: _propTypes["default"].bool,
  inlineStyles: _propTypes["default"].object,
  isRTL: _propTypes["default"].bool,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  orientation: _ScrollableOrientationShape["default"],
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  // internationalization
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerNavigationPhrases)),
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  showNavPrevButton: _propTypes["default"].bool,
  showNavNextButton: _propTypes["default"].bool
})) : undefined;
var defaultProps = {
  disablePrev: false,
  disableNext: false,
  inlineStyles: null,
  isRTL: false,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  // internationalization
  phrases: _defaultPhrases.DayPickerNavigationPhrases,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  showNavPrevButton: true,
  showNavNextButton: true
};

var DayPickerNavigation =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerNavigation, _ref);

  function DayPickerNavigation() {
    return _ref.apply(this, arguments) || this;
  }

  var _proto = DayPickerNavigation.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        inlineStyles = _this$props.inlineStyles,
        isRTL = _this$props.isRTL,
        disablePrev = _this$props.disablePrev,
        disableNext = _this$props.disableNext,
        navPosition = _this$props.navPosition,
        navPrev = _this$props.navPrev,
        navNext = _this$props.navNext,
        onPrevMonthClick = _this$props.onPrevMonthClick,
        onNextMonthClick = _this$props.onNextMonthClick,
        orientation = _this$props.orientation,
        phrases = _this$props.phrases,
        renderNavPrevButton = _this$props.renderNavPrevButton,
        renderNavNextButton = _this$props.renderNavNextButton,
        showNavPrevButton = _this$props.showNavPrevButton,
        showNavNextButton = _this$props.showNavNextButton,
        styles = _this$props.styles;

    if (!showNavNextButton && !showNavPrevButton) {
      return null;
    }

    var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
    var isVertical = orientation !== _constants.HORIZONTAL_ORIENTATION;
    var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var isBottomNavPosition = navPosition === _constants.NAV_POSITION_BOTTOM;
    var hasInlineStyles = !!inlineStyles;
    var navPrevIcon = navPrev;
    var navNextIcon = navNext;
    var isDefaultNavPrev = false;
    var isDefaultNavNext = false;
    var navPrevTabIndex = {};
    var navNextTabIndex = {};

    if (!navPrevIcon && !renderNavPrevButton && showNavPrevButton) {
      navPrevTabIndex = {
        tabIndex: '0'
      };
      isDefaultNavPrev = true;
      var Icon = isVertical ? _ChevronUp["default"] : _LeftArrow["default"];

      if (isRTL && !isVertical) {
        Icon = _RightArrow["default"];
      }

      navPrevIcon = _react["default"].createElement(Icon, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disablePrev && styles.DayPickerNavigation_svg__disabled));
    }

    if (!navNextIcon && !renderNavNextButton && showNavNextButton) {
      navNextTabIndex = {
        tabIndex: '0'
      };
      isDefaultNavNext = true;

      var _Icon = isVertical ? _ChevronDown["default"] : _RightArrow["default"];

      if (isRTL && !isVertical) {
        _Icon = _LeftArrow["default"];
      }

      navNextIcon = _react["default"].createElement(_Icon, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disableNext && styles.DayPickerNavigation_svg__disabled));
    }

    var isDefaultNav = isDefaultNavNext || isDefaultNavPrev;
    return _react["default"].createElement("div", _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation, isHorizontal && styles.DayPickerNavigation__horizontal].concat((0, _toConsumableArray2["default"])(isVertical ? [styles.DayPickerNavigation__vertical, isDefaultNav && styles.DayPickerNavigation__verticalDefault] : []), (0, _toConsumableArray2["default"])(isVerticalScrollable ? [styles.DayPickerNavigation__verticalScrollable, isDefaultNav && styles.DayPickerNavigation__verticalScrollableDefault, showNavPrevButton && styles.DayPickerNavigation__verticalScrollable_prevNav] : []), (0, _toConsumableArray2["default"])(isBottomNavPosition ? [styles.DayPickerNavigation__bottom, isDefaultNav && styles.DayPickerNavigation__bottomDefault] : []), [hasInlineStyles && inlineStyles])), showNavPrevButton && (renderNavPrevButton ? renderNavPrevButton({
      ariaLabel: phrases.jumpToPrevMonth,
      disabled: disablePrev,
      onClick: disablePrev ? undefined : onPrevMonthClick,
      onKeyUp: disablePrev ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onPrevMonthClick(e);
        }
      },
      onMouseUp: disablePrev ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }) : _react["default"].createElement("div", (0, _extends2["default"])({
      // eslint-disable-line jsx-a11y/interactive-supports-focus
      role: "button"
    }, navPrevTabIndex, _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavPrev && styles.DayPickerNavigation_button__default, disablePrev && styles.DayPickerNavigation_button__disabled].concat((0, _toConsumableArray2["default"])(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat((0, _toConsumableArray2["default"])(isDefaultNavPrev ? [styles.DayPickerNavigation_button__horizontalDefault, isBottomNavPosition && styles.DayPickerNavigation_bottomButton__horizontalDefault, !isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), (0, _toConsumableArray2["default"])(isVertical ? [styles.DayPickerNavigation_button__vertical].concat((0, _toConsumableArray2["default"])(isDefaultNavPrev ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_prevButton__verticalDefault, isVerticalScrollable && styles.DayPickerNavigation_prevButton__verticalScrollableDefault] : [])) : []))), {
      "aria-disabled": disablePrev ? true : undefined,
      "aria-label": phrases.jumpToPrevMonth,
      onClick: disablePrev ? undefined : onPrevMonthClick,
      onKeyUp: disablePrev ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onPrevMonthClick(e);
        }
      },
      onMouseUp: disablePrev ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }), navPrevIcon)), showNavNextButton && (renderNavNextButton ? renderNavNextButton({
      ariaLabel: phrases.jumpToNextMonth,
      disabled: disableNext,
      onClick: disableNext ? undefined : onNextMonthClick,
      onKeyUp: disableNext ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onNextMonthClick(e);
        }
      },
      onMouseUp: disableNext ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }) : _react["default"].createElement("div", (0, _extends2["default"])({
      // eslint-disable-line jsx-a11y/interactive-supports-focus
      role: "button"
    }, navNextTabIndex, _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavNext && styles.DayPickerNavigation_button__default, disableNext && styles.DayPickerNavigation_button__disabled].concat((0, _toConsumableArray2["default"])(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat((0, _toConsumableArray2["default"])(isDefaultNavNext ? [styles.DayPickerNavigation_button__horizontalDefault, isBottomNavPosition && styles.DayPickerNavigation_bottomButton__horizontalDefault, isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, !isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), (0, _toConsumableArray2["default"])(isVertical ? [styles.DayPickerNavigation_button__vertical].concat((0, _toConsumableArray2["default"])(isDefaultNavNext ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_nextButton__verticalDefault, isVerticalScrollable && styles.DayPickerNavigation_nextButton__verticalScrollableDefault] : [])) : []))), {
      "aria-disabled": disableNext ? true : undefined,
      "aria-label": phrases.jumpToNextMonth,
      onClick: disableNext ? undefined : onNextMonthClick,
      onKeyUp: disableNext ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onNextMonthClick(e);
        }
      },
      onMouseUp: disableNext ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }), navNextIcon)));
  };

  return DayPickerNavigation;
}(_react["default"].PureComponent || _react["default"].Component);

DayPickerNavigation.propTypes =  true ? propTypes : undefined;
DayPickerNavigation.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DayPickerNavigation: {
      position: 'relative',
      zIndex: zIndex + 2
    },
    DayPickerNavigation__horizontal: {
      height: 0
    },
    DayPickerNavigation__vertical: {},
    DayPickerNavigation__verticalScrollable: {},
    DayPickerNavigation__verticalScrollable_prevNav: {
      zIndex: zIndex + 1 // zIndex + 2 causes the button to show on top of the day of week headers

    },
    DayPickerNavigation__verticalDefault: {
      position: 'absolute',
      width: '100%',
      height: 52,
      bottom: 0,
      left: (0, _noflip["default"])(0)
    },
    DayPickerNavigation__verticalScrollableDefault: {
      position: 'relative'
    },
    DayPickerNavigation__bottom: {
      height: 'auto'
    },
    DayPickerNavigation__bottomDefault: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    DayPickerNavigation_button: {
      cursor: 'pointer',
      userSelect: 'none',
      border: 0,
      padding: 0,
      margin: 0
    },
    DayPickerNavigation_button__default: {
      border: "1px solid ".concat(color.core.borderLight),
      backgroundColor: color.background,
      color: color.placeholderText,
      ':focus': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':hover': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':active': {
        background: color.backgroundDark
      }
    },
    DayPickerNavigation_button__disabled: {
      cursor: 'default',
      border: "1px solid ".concat(color.disabled),
      ':focus': {
        border: "1px solid ".concat(color.disabled)
      },
      ':hover': {
        border: "1px solid ".concat(color.disabled)
      },
      ':active': {
        background: 'none'
      }
    },
    DayPickerNavigation_button__horizontal: {},
    DayPickerNavigation_button__horizontalDefault: {
      position: 'absolute',
      top: 18,
      lineHeight: 0.78,
      borderRadius: 3,
      padding: '6px 9px'
    },
    DayPickerNavigation_bottomButton__horizontalDefault: {
      position: 'static',
      marginLeft: 22,
      marginRight: 22,
      marginBottom: 30,
      marginTop: -10
    },
    DayPickerNavigation_leftButton__horizontalDefault: {
      left: (0, _noflip["default"])(22)
    },
    DayPickerNavigation_rightButton__horizontalDefault: {
      right: (0, _noflip["default"])(22)
    },
    DayPickerNavigation_button__vertical: {},
    DayPickerNavigation_button__verticalDefault: {
      padding: 5,
      background: color.background,
      boxShadow: (0, _noflip["default"])('0 0 5px 2px rgba(0, 0, 0, 0.1)'),
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center',
      height: '100%',
      width: '50%'
    },
    DayPickerNavigation_prevButton__verticalDefault: {},
    DayPickerNavigation_nextButton__verticalDefault: {
      borderLeft: (0, _noflip["default"])(0)
    },
    DayPickerNavigation_nextButton__verticalScrollableDefault: {
      width: '100%'
    },
    DayPickerNavigation_prevButton__verticalScrollableDefault: {
      width: '100%'
    },
    DayPickerNavigation_svg__horizontal: {
      height: 19,
      width: 19,
      fill: color.core.grayLight,
      display: 'block'
    },
    DayPickerNavigation_svg__vertical: {
      height: 42,
      width: 42,
      fill: color.text
    },
    DayPickerNavigation_svg__disabled: {
      fill: color.disabled
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerNavigation);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DayPickerRangeController.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _object = _interopRequireDefault(__webpack_require__("./node_modules/object.values/index.js"));

var _isTouchDevice = _interopRequireDefault(__webpack_require__("./node_modules/is-touch-device/build/index.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js"));

var _isNextDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isNextDay.js"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

var _isAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isAfterDay.js"));

var _isBeforeDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isBeforeDay.js"));

var _isPreviousDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isPreviousDay.js"));

var _getVisibleDays = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getVisibleDays.js"));

var _isDayVisible = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isDayVisible.js"));

var _getSelectedDateOffset = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getSelectedDateOffset.js"));

var _toISODateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISODateString.js"));

var _modifiers = __webpack_require__("./node_modules/react-dates/lib/utils/modifiers.js");

var _DisabledShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DisabledShape.js"));

var _FocusedInputShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/FocusedInputShape.js"));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/CalendarInfoPositionShape.js"));

var _NavPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/NavPositionShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _DayPicker = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPicker.js"));

var _getPooledMoment = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPooledMoment.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)({
  startDate: _reactMomentProptypes["default"].momentObj,
  endDate: _reactMomentProptypes["default"].momentObj,
  onDatesChange: _propTypes["default"].func,
  startDateOffset: _propTypes["default"].func,
  endDateOffset: _propTypes["default"].func,
  minDate: _reactMomentProptypes["default"].momentObj,
  maxDate: _reactMomentProptypes["default"].momentObj,
  focusedInput: _FocusedInputShape["default"],
  onFocusChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  minimumNights: _propTypes["default"].number,
  disabled: _DisabledShape["default"],
  isOutsideRange: _propTypes["default"].func,
  isDayBlocked: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  getMinNightsForHoverDate: _propTypes["default"].func,
  daysViolatingMinNightsCanBeClicked: _propTypes["default"].bool,
  // DayPicker props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  enableOutsideDays: _propTypes["default"].bool,
  numberOfMonths: _propTypes["default"].number,
  orientation: _ScrollableOrientationShape["default"],
  withPortal: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  noBorder: _propTypes["default"].bool,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  noNavButtons: _propTypes["default"].bool,
  noNavNextButton: _propTypes["default"].bool,
  noNavPrevButton: _propTypes["default"].bool,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onOutsideClick: _propTypes["default"].func,
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  renderCalendarInfo: _propTypes["default"].func,
  renderKeyboardShortcutsButton: _propTypes["default"].func,
  renderKeyboardShortcutsPanel: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  firstDayOfWeek: _DayOfWeekShape["default"],
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  // accessibility
  onBlur: _propTypes["default"].func,
  isFocused: _propTypes["default"].bool,
  showKeyboardShortcuts: _propTypes["default"].bool,
  onTab: _propTypes["default"].func,
  onShiftTab: _propTypes["default"].func,
  // i18n
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string,
  isRTL: _propTypes["default"].bool
}) : undefined;
var defaultProps = {
  startDate: undefined,
  // TODO: use null
  endDate: undefined,
  // TODO: use null
  minDate: null,
  maxDate: null,
  onDatesChange: function onDatesChange() {},
  startDateOffset: undefined,
  endDateOffset: undefined,
  focusedInput: null,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  minimumNights: 1,
  disabled: false,
  isOutsideRange: function isOutsideRange() {},
  isDayBlocked: function isDayBlocked() {},
  isDayHighlighted: function isDayHighlighted() {},
  getMinNightsForHoverDate: function getMinNightsForHoverDate() {},
  daysViolatingMinNightsCanBeClicked: false,
  // DayPicker props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  daySize: _constants.DAY_SIZE,
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  noNavButtons: false,
  noNavNextButton: false,
  noNavPrevButton: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  firstDayOfWeek: null,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
  // accessibility
  onBlur: function onBlur() {},
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var getChooseAvailableDatePhrase = function getChooseAvailableDatePhrase(phrases, focusedInput) {
  if (focusedInput === _constants.START_DATE) {
    return phrases.chooseAvailableStartDate;
  }

  if (focusedInput === _constants.END_DATE) {
    return phrases.chooseAvailableEndDate;
  }

  return phrases.chooseAvailableDate;
};

var DayPickerRangeController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerRangeController, _ref);
  var _proto = DayPickerRangeController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPickerRangeController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = (0, _isTouchDevice["default"])();
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function today(day) {
        return _this.isToday(day);
      },
      blocked: function blocked(day) {
        return _this.isBlocked(day);
      },
      'blocked-calendar': function blockedCalendar(day) {
        return props.isDayBlocked(day);
      },
      'blocked-out-of-range': function blockedOutOfRange(day) {
        return props.isOutsideRange(day);
      },
      'highlighted-calendar': function highlightedCalendar(day) {
        return props.isDayHighlighted(day);
      },
      valid: function valid(day) {
        return !_this.isBlocked(day);
      },
      'selected-start': function selectedStart(day) {
        return _this.isStartDate(day);
      },
      'selected-end': function selectedEnd(day) {
        return _this.isEndDate(day);
      },
      'blocked-minimum-nights': function blockedMinimumNights(day) {
        return _this.doesNotMeetMinimumNights(day);
      },
      'selected-span': function selectedSpan(day) {
        return _this.isInSelectedSpan(day);
      },
      'last-in-range': function lastInRange(day) {
        return _this.isLastInRange(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      'hovered-span': function hoveredSpan(day) {
        return _this.isInHoveredSpan(day);
      },
      'hovered-offset': function hoveredOffset(day) {
        return _this.isInHoveredSpan(day);
      },
      'after-hovered-start': function afterHoveredStart(day) {
        return _this.isDayAfterHoveredStartDate(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      },
      'hovered-start-first-possible-end': function hoveredStartFirstPossibleEnd(day, hoverDate) {
        return _this.isFirstPossibleEndDateForHoveredStartDate(day, hoverDate);
      },
      'hovered-start-blocked-minimum-nights': function hoveredStartBlockedMinimumNights(day, hoverDate) {
        return _this.doesNotMeetMinNightsForHoveredStartDate(day, hoverDate);
      },
      'before-hovered-end': function beforeHoveredEnd(day) {
        return _this.isDayBeforeHoveredEndDate(day);
      },
      'no-selected-start-before-selected-end': function noSelectedStartBeforeSelectedEnd(day) {
        return _this.beforeSelectedEnd(day) && !props.startDate;
      },
      'selected-start-in-hovered-span': function selectedStartInHoveredSpan(day, hoverDate) {
        return _this.isStartDate(day) && (0, _isAfterDay["default"])(hoverDate, day);
      },
      'selected-start-no-selected-end': function selectedStartNoSelectedEnd(day) {
        return _this.isStartDate(day) && !props.endDate;
      },
      'selected-end-no-selected-start': function selectedEndNoSelectedStart(day) {
        return _this.isEndDate(day) && !props.startDate;
      }
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays; // initialize phrases
    // set the appropriate CalendarDay phrase based on focusedInput


    var chooseAvailableDate = getChooseAvailableDatePhrase(props.phrases, props.focusedInput);
    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      phrases: _objectSpread({}, props.phrases, {
        chooseAvailableDate: chooseAvailableDate
      }),
      visibleDays: visibleDays,
      disablePrev: _this.shouldDisableMonthNavigation(props.minDate, currentMonth),
      disableNext: _this.shouldDisableMonthNavigation(props.maxDate, currentMonth)
    };
    _this.onDayClick = _this.onDayClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMonthChange = _this.onMonthChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearChange = _this.onYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetNextScrollableMonths = _this.onGetNextScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetPrevScrollableMonths = _this.onGetPrevScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var startDate = nextProps.startDate,
        endDate = nextProps.endDate,
        focusedInput = nextProps.focusedInput,
        getMinNightsForHoverDate = nextProps.getMinNightsForHoverDate,
        minimumNights = nextProps.minimumNights,
        isOutsideRange = nextProps.isOutsideRange,
        isDayBlocked = nextProps.isDayBlocked,
        isDayHighlighted = nextProps.isDayHighlighted,
        phrases = nextProps.phrases,
        initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays;
    var _this$props = this.props,
        prevStartDate = _this$props.startDate,
        prevEndDate = _this$props.endDate,
        prevFocusedInput = _this$props.focusedInput,
        prevMinimumNights = _this$props.minimumNights,
        prevIsOutsideRange = _this$props.isOutsideRange,
        prevIsDayBlocked = _this$props.isDayBlocked,
        prevIsDayHighlighted = _this$props.isDayHighlighted,
        prevPhrases = _this$props.phrases,
        prevInitialVisibleMonth = _this$props.initialVisibleMonth,
        prevNumberOfMonths = _this$props.numberOfMonths,
        prevEnableOutsideDays = _this$props.enableOutsideDays;
    var hoverDate = this.state.hoverDate;
    var visibleDays = this.state.visibleDays;
    var recomputeOutsideRange = false;
    var recomputeDayBlocked = false;
    var recomputeDayHighlighted = false;

    if (isOutsideRange !== prevIsOutsideRange) {
      this.modifiers['blocked-out-of-range'] = function (day) {
        return isOutsideRange(day);
      };

      recomputeOutsideRange = true;
    }

    if (isDayBlocked !== prevIsDayBlocked) {
      this.modifiers['blocked-calendar'] = function (day) {
        return isDayBlocked(day);
      };

      recomputeDayBlocked = true;
    }

    if (isDayHighlighted !== prevIsDayHighlighted) {
      this.modifiers['highlighted-calendar'] = function (day) {
        return isDayHighlighted(day);
      };

      recomputeDayHighlighted = true;
    }

    var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;
    var didStartDateChange = startDate !== prevStartDate;
    var didEndDateChange = endDate !== prevEndDate;
    var didFocusChange = focusedInput !== prevFocusedInput;

    if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocusedInput && didFocusChange) {
      var newMonthState = this.getStateForNewMonth(nextProps);
      var currentMonth = newMonthState.currentMonth;
      visibleDays = newMonthState.visibleDays;
      this.setState({
        currentMonth: currentMonth,
        visibleDays: visibleDays
      });
    }

    var modifiers = {};

    if (didStartDateChange) {
      modifiers = this.deleteModifier(modifiers, prevStartDate, 'selected-start');
      modifiers = this.addModifier(modifiers, startDate, 'selected-start');

      if (prevStartDate) {
        var startSpan = prevStartDate.clone().add(1, 'day');
        var endSpan = prevStartDate.clone().add(prevMinimumNights + 1, 'days');
        modifiers = this.deleteModifierFromRange(modifiers, startSpan, endSpan, 'after-hovered-start');

        if (!endDate || !prevEndDate) {
          modifiers = this.deleteModifier(modifiers, prevStartDate, 'selected-start-no-selected-end');
        }
      }

      if (!prevStartDate && endDate && startDate) {
        modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-no-selected-start');
        modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-in-hovered-span');
        (0, _object["default"])(visibleDays).forEach(function (days) {
          Object.keys(days).forEach(function (day) {
            var momentObj = (0, _moment["default"])(day);
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'no-selected-start-before-selected-end');
          });
        });
      }
    }

    if (didEndDateChange) {
      modifiers = this.deleteModifier(modifiers, prevEndDate, 'selected-end');
      modifiers = this.addModifier(modifiers, endDate, 'selected-end');

      if (prevEndDate && (!startDate || !prevStartDate)) {
        modifiers = this.deleteModifier(modifiers, prevEndDate, 'selected-end-no-selected-start');
      }
    }

    if (didStartDateChange || didEndDateChange) {
      if (prevStartDate && prevEndDate) {
        modifiers = this.deleteModifierFromRange(modifiers, prevStartDate, prevEndDate.clone().add(1, 'day'), 'selected-span');
      }

      if (startDate && endDate) {
        modifiers = this.deleteModifierFromRange(modifiers, startDate, endDate.clone().add(1, 'day'), 'hovered-span');
        modifiers = this.addModifierToRange(modifiers, startDate.clone().add(1, 'day'), endDate, 'selected-span');
      }

      if (startDate && !endDate) {
        modifiers = this.addModifier(modifiers, startDate, 'selected-start-no-selected-end');
      }

      if (endDate && !startDate) {
        modifiers = this.addModifier(modifiers, endDate, 'selected-end-no-selected-start');
      }

      if (!startDate && endDate) {
        (0, _object["default"])(visibleDays).forEach(function (days) {
          Object.keys(days).forEach(function (day) {
            var momentObj = (0, _moment["default"])(day);

            if ((0, _isBeforeDay["default"])(momentObj, endDate)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'no-selected-start-before-selected-end');
            }
          });
        });
      }
    }

    if (!this.isTouchDevice && didStartDateChange && startDate && !endDate) {
      var _startSpan = startDate.clone().add(1, 'day');

      var _endSpan = startDate.clone().add(minimumNights + 1, 'days');

      modifiers = this.addModifierToRange(modifiers, _startSpan, _endSpan, 'after-hovered-start');
    }

    if (!this.isTouchDevice && didEndDateChange && !startDate && endDate) {
      var _startSpan2 = endDate.clone().subtract(minimumNights, 'days');

      var _endSpan2 = endDate.clone();

      modifiers = this.addModifierToRange(modifiers, _startSpan2, _endSpan2, 'before-hovered-end');
    }

    if (prevMinimumNights > 0) {
      if (didFocusChange || didStartDateChange || minimumNights !== prevMinimumNights) {
        var _startSpan3 = prevStartDate || this.today;

        modifiers = this.deleteModifierFromRange(modifiers, _startSpan3, _startSpan3.clone().add(prevMinimumNights, 'days'), 'blocked-minimum-nights');
        modifiers = this.deleteModifierFromRange(modifiers, _startSpan3, _startSpan3.clone().add(prevMinimumNights, 'days'), 'blocked');
      }
    }

    if (didFocusChange || recomputePropModifiers) {
      (0, _object["default"])(visibleDays).forEach(function (days) {
        Object.keys(days).forEach(function (day) {
          var momentObj = (0, _getPooledMoment["default"])(day);
          var isBlocked = false;

          if (didFocusChange || recomputeOutsideRange) {
            if (isOutsideRange(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
              isBlocked = true;
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
            }
          }

          if (didFocusChange || recomputeDayBlocked) {
            if (isDayBlocked(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
              isBlocked = true;
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
            }
          }

          if (isBlocked) {
            modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
          } else {
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
          }

          if (didFocusChange || recomputeDayHighlighted) {
            if (isDayHighlighted(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
            }
          }
        });
      });
    }

    if (!this.isTouchDevice && didFocusChange && hoverDate && !this.isBlocked(hoverDate)) {
      var minNightsForHoverDate = getMinNightsForHoverDate(hoverDate);

      if (minNightsForHoverDate > 0 && focusedInput === _constants.END_DATE) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
        modifiers = this.deleteModifier(modifiers, hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
      }

      if (minNightsForHoverDate > 0 && focusedInput === _constants.START_DATE) {
        modifiers = this.addModifierToRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
        modifiers = this.addModifier(modifiers, hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
      }
    }

    if (minimumNights > 0 && startDate && focusedInput === _constants.END_DATE) {
      modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked-minimum-nights');
      modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked');
    }

    var today = (0, _moment["default"])();

    if (!(0, _isSameDay["default"])(this.today, today)) {
      modifiers = this.deleteModifier(modifiers, this.today, 'today');
      modifiers = this.addModifier(modifiers, today, 'today');
      this.today = today;
    }

    if (Object.keys(modifiers).length > 0) {
      this.setState({
        visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
      });
    }

    if (didFocusChange || phrases !== prevPhrases) {
      // set the appropriate CalendarDay phrase based on focusedInput
      var chooseAvailableDate = getChooseAvailableDatePhrase(phrases, focusedInput);
      this.setState({
        phrases: _objectSpread({}, phrases, {
          chooseAvailableDate: chooseAvailableDate
        })
      });
    }
  };

  _proto.onDayClick = function onDayClick(day, e) {
    var _this$props2 = this.props,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        minimumNights = _this$props2.minimumNights,
        onBlur = _this$props2.onBlur,
        focusedInput = _this$props2.focusedInput,
        onFocusChange = _this$props2.onFocusChange,
        onClose = _this$props2.onClose,
        onDatesChange = _this$props2.onDatesChange,
        startDateOffset = _this$props2.startDateOffset,
        endDateOffset = _this$props2.endDateOffset,
        disabled = _this$props2.disabled,
        daysViolatingMinNightsCanBeClicked = _this$props2.daysViolatingMinNightsCanBeClicked;
    if (e) e.preventDefault();
    if (this.isBlocked(day, !daysViolatingMinNightsCanBeClicked)) return;
    var _this$props3 = this.props,
        startDate = _this$props3.startDate,
        endDate = _this$props3.endDate;

    if (startDateOffset || endDateOffset) {
      startDate = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
      endDate = (0, _getSelectedDateOffset["default"])(endDateOffset, day);

      if (this.isBlocked(startDate) || this.isBlocked(endDate)) {
        return;
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });

      if (!keepOpenOnDateSelect) {
        onFocusChange(null);
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      }
    } else if (focusedInput === _constants.START_DATE) {
      var lastAllowedStartDate = endDate && endDate.clone().subtract(minimumNights, 'days');
      var isStartDateAfterEndDate = (0, _isBeforeDay["default"])(lastAllowedStartDate, day) || (0, _isAfterDay["default"])(startDate, endDate);
      var isEndDateDisabled = disabled === _constants.END_DATE;

      if (!isEndDateDisabled || !isStartDateAfterEndDate) {
        startDate = day;

        if (isStartDateAfterEndDate) {
          endDate = null;
        }
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });

      if (isEndDateDisabled && !isStartDateAfterEndDate) {
        onFocusChange(null);
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      } else if (!isEndDateDisabled) {
        onFocusChange(_constants.END_DATE);
      }
    } else if (focusedInput === _constants.END_DATE) {
      var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

      if (!startDate) {
        endDate = day;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        onFocusChange(_constants.START_DATE);
      } else if ((0, _isInclusivelyAfterDay["default"])(day, firstAllowedEndDate)) {
        endDate = day;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });

        if (!keepOpenOnDateSelect) {
          onFocusChange(null);
          onClose({
            startDate: startDate,
            endDate: endDate
          });
        }
      } else if (daysViolatingMinNightsCanBeClicked && this.doesNotMeetMinimumNights(day)) {
        endDate = day;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      } else if (disabled !== _constants.START_DATE) {
        startDate = day;
        endDate = null;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      } else {
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    } else {
      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
    }

    onBlur();
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day) {
    /* eslint react/destructuring-assignment: 1 */
    if (this.isTouchDevice) return;
    var _this$props4 = this.props,
        startDate = _this$props4.startDate,
        endDate = _this$props4.endDate,
        focusedInput = _this$props4.focusedInput,
        getMinNightsForHoverDate = _this$props4.getMinNightsForHoverDate,
        minimumNights = _this$props4.minimumNights,
        startDateOffset = _this$props4.startDateOffset,
        endDateOffset = _this$props4.endDateOffset;
    var _this$state = this.state,
        hoverDate = _this$state.hoverDate,
        visibleDays = _this$state.visibleDays,
        dateOffset = _this$state.dateOffset;
    var nextDateOffset = null;

    if (focusedInput) {
      var hasOffset = startDateOffset || endDateOffset;
      var modifiers = {};

      if (hasOffset) {
        var start = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
        var end = (0, _getSelectedDateOffset["default"])(endDateOffset, day, function (rangeDay) {
          return rangeDay.add(1, 'day');
        });
        nextDateOffset = {
          start: start,
          end: end
        }; // eslint-disable-next-line react/destructuring-assignment

        if (dateOffset && dateOffset.start && dateOffset.end) {
          modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
        }

        modifiers = this.addModifierToRange(modifiers, start, end, 'hovered-offset');
      }

      if (!hasOffset) {
        modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');
        modifiers = this.addModifier(modifiers, day, 'hovered');

        if (startDate && !endDate && focusedInput === _constants.END_DATE) {
          if ((0, _isAfterDay["default"])(hoverDate, startDate)) {
            var endSpan = hoverDate.clone().add(1, 'day');
            modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
          }

          if ((0, _isBeforeDay["default"])(day, startDate) || (0, _isSameDay["default"])(day, startDate)) {
            modifiers = this.deleteModifier(modifiers, startDate, 'selected-start-in-hovered-span');
          }

          if (!this.isBlocked(day) && (0, _isAfterDay["default"])(day, startDate)) {
            var _endSpan3 = day.clone().add(1, 'day');

            modifiers = this.addModifierToRange(modifiers, startDate, _endSpan3, 'hovered-span');
            modifiers = this.addModifier(modifiers, startDate, 'selected-start-in-hovered-span');
          }
        }

        if (!startDate && endDate && focusedInput === _constants.START_DATE) {
          if ((0, _isBeforeDay["default"])(hoverDate, endDate)) {
            modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
          }

          if ((0, _isAfterDay["default"])(day, endDate) || (0, _isSameDay["default"])(day, endDate)) {
            modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-in-hovered-span');
          }

          if (!this.isBlocked(day) && (0, _isBeforeDay["default"])(day, endDate)) {
            modifiers = this.addModifierToRange(modifiers, day, endDate, 'hovered-span');
            modifiers = this.addModifier(modifiers, endDate, 'selected-end-in-hovered-span');
          }
        }

        if (startDate) {
          var startSpan = startDate.clone().add(1, 'day');

          var _endSpan4 = startDate.clone().add(minimumNights + 1, 'days');

          modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan4, 'after-hovered-start');

          if ((0, _isSameDay["default"])(day, startDate)) {
            var newStartSpan = startDate.clone().add(1, 'day');
            var newEndSpan = startDate.clone().add(minimumNights + 1, 'days');
            modifiers = this.addModifierToRange(modifiers, newStartSpan, newEndSpan, 'after-hovered-start');
          }
        }

        if (endDate) {
          var _startSpan4 = endDate.clone().subtract(minimumNights, 'days');

          modifiers = this.deleteModifierFromRange(modifiers, _startSpan4, endDate, 'before-hovered-end');

          if ((0, _isSameDay["default"])(day, endDate)) {
            var _newStartSpan = endDate.clone().subtract(minimumNights, 'days');

            modifiers = this.addModifierToRange(modifiers, _newStartSpan, endDate, 'before-hovered-end');
          }
        }

        if (hoverDate && !this.isBlocked(hoverDate)) {
          var minNightsForPrevHoverDate = getMinNightsForHoverDate(hoverDate);

          if (minNightsForPrevHoverDate > 0 && focusedInput === _constants.START_DATE) {
            modifiers = this.deleteModifierFromRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForPrevHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
            modifiers = this.deleteModifier(modifiers, hoverDate.clone().add(minNightsForPrevHoverDate, 'days'), 'hovered-start-first-possible-end');
          }
        }

        if (!this.isBlocked(day)) {
          var minNightsForHoverDate = getMinNightsForHoverDate(day);

          if (minNightsForHoverDate > 0 && focusedInput === _constants.START_DATE) {
            modifiers = this.addModifierToRange(modifiers, day.clone().add(1, 'days'), day.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
            modifiers = this.addModifier(modifiers, day.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
          }
        }
      }

      this.setState({
        hoverDate: day,
        dateOffset: nextDateOffset,
        visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
      });
    }
  };

  _proto.onDayMouseLeave = function onDayMouseLeave(day) {
    var _this$props5 = this.props,
        startDate = _this$props5.startDate,
        endDate = _this$props5.endDate,
        focusedInput = _this$props5.focusedInput,
        getMinNightsForHoverDate = _this$props5.getMinNightsForHoverDate,
        minimumNights = _this$props5.minimumNights;
    var _this$state2 = this.state,
        hoverDate = _this$state2.hoverDate,
        visibleDays = _this$state2.visibleDays,
        dateOffset = _this$state2.dateOffset;
    if (this.isTouchDevice || !hoverDate) return;
    var modifiers = {};
    modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');

    if (dateOffset) {
      modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
    }

    if (startDate && !endDate) {
      if ((0, _isAfterDay["default"])(hoverDate, startDate)) {
        var endSpan = hoverDate.clone().add(1, 'day');
        modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
      }

      if ((0, _isAfterDay["default"])(day, startDate)) {
        modifiers = this.deleteModifier(modifiers, startDate, 'selected-start-in-hovered-span');
      }
    }

    if (!startDate && endDate) {
      if ((0, _isAfterDay["default"])(endDate, hoverDate)) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
      }

      if ((0, _isBeforeDay["default"])(day, endDate)) {
        modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-in-hovered-span');
      }
    }

    if (startDate && (0, _isSameDay["default"])(day, startDate)) {
      var startSpan = startDate.clone().add(1, 'day');

      var _endSpan5 = startDate.clone().add(minimumNights + 1, 'days');

      modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan5, 'after-hovered-start');
    }

    if (endDate && (0, _isSameDay["default"])(day, endDate)) {
      var _startSpan5 = endDate.clone().subtract(minimumNights, 'days');

      modifiers = this.deleteModifierFromRange(modifiers, _startSpan5, endDate, 'before-hovered-end');
    }

    if (!this.isBlocked(hoverDate)) {
      var minNightsForHoverDate = getMinNightsForHoverDate(hoverDate);

      if (minNightsForHoverDate > 0 && focusedInput === _constants.START_DATE) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
        modifiers = this.deleteModifier(modifiers, hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
      }
    }

    this.setState({
      hoverDate: null,
      visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
    });
  };

  _proto.onPrevMonthClick = function onPrevMonthClick() {
    var _this$props6 = this.props,
        enableOutsideDays = _this$props6.enableOutsideDays,
        maxDate = _this$props6.maxDate,
        minDate = _this$props6.minDate,
        numberOfMonths = _this$props6.numberOfMonths,
        onPrevMonthClick = _this$props6.onPrevMonthClick;
    var _this$state3 = this.state,
        currentMonth = _this$state3.currentMonth,
        visibleDays = _this$state3.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var prevMonth = currentMonth.clone().subtract(2, 'months');
    var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays, true);
    var newCurrentMonth = currentMonth.clone().subtract(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
      disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(prevMonthVisibleDays))
    }, function () {
      onPrevMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick() {
    var _this$props7 = this.props,
        enableOutsideDays = _this$props7.enableOutsideDays,
        maxDate = _this$props7.maxDate,
        minDate = _this$props7.minDate,
        numberOfMonths = _this$props7.numberOfMonths,
        onNextMonthClick = _this$props7.onNextMonthClick;
    var _this$state4 = this.state,
        currentMonth = _this$state4.currentMonth,
        visibleDays = _this$state4.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var nextMonth = currentMonth.clone().add(numberOfMonths + 1, 'month');
    var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays, true);
    var newCurrentMonth = currentMonth.clone().add(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
      disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(nextMonthVisibleDays))
    }, function () {
      onNextMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onMonthChange = function onMonthChange(newMonth) {
    var _this$props8 = this.props,
        numberOfMonths = _this$props8.numberOfMonths,
        enableOutsideDays = _this$props8.enableOutsideDays,
        orientation = _this$props8.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onYearChange = function onYearChange(newMonth) {
    var _this$props9 = this.props,
        numberOfMonths = _this$props9.numberOfMonths,
        enableOutsideDays = _this$props9.enableOutsideDays,
        orientation = _this$props9.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onGetNextScrollableMonths = function onGetNextScrollableMonths() {
    var _this$props10 = this.props,
        numberOfMonths = _this$props10.numberOfMonths,
        enableOutsideDays = _this$props10.enableOutsideDays;
    var _this$state5 = this.state,
        currentMonth = _this$state5.currentMonth,
        visibleDays = _this$state5.visibleDays;
    var numberOfVisibleMonths = Object.keys(visibleDays).length;
    var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(nextMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.onGetPrevScrollableMonths = function onGetPrevScrollableMonths() {
    var _this$props11 = this.props,
        numberOfMonths = _this$props11.numberOfMonths,
        enableOutsideDays = _this$props11.enableOutsideDays;
    var _this$state6 = this.state,
        currentMonth = _this$state6.currentMonth,
        visibleDays = _this$state6.visibleDays;
    var firstPreviousMonth = currentMonth.clone().subtract(numberOfMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(firstPreviousMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      currentMonth: firstPreviousMonth.clone(),
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.getFirstFocusableDay = function getFirstFocusableDay(newMonth) {
    var _this3 = this;

    var _this$props12 = this.props,
        startDate = _this$props12.startDate,
        endDate = _this$props12.endDate,
        focusedInput = _this$props12.focusedInput,
        minimumNights = _this$props12.minimumNights,
        numberOfMonths = _this$props12.numberOfMonths;
    var focusedDate = newMonth.clone().startOf('month');

    if (focusedInput === _constants.START_DATE && startDate) {
      focusedDate = startDate.clone();
    } else if (focusedInput === _constants.END_DATE && !endDate && startDate) {
      focusedDate = startDate.clone().add(minimumNights, 'days');
    } else if (focusedInput === _constants.END_DATE && endDate) {
      focusedDate = endDate.clone();
    }

    if (this.isBlocked(focusedDate)) {
      var days = [];
      var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
      var currentDay = focusedDate.clone();

      while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
        currentDay = currentDay.clone().add(1, 'day');
        days.push(currentDay);
      }

      var viableDays = days.filter(function (day) {
        return !_this3.isBlocked(day);
      });

      if (viableDays.length > 0) {
        var _viableDays = (0, _slicedToArray2["default"])(viableDays, 1);

        focusedDate = _viableDays[0];
      }
    }

    return focusedDate;
  };

  _proto.getModifiers = function getModifiers(visibleDays) {
    var _this4 = this;

    var modifiers = {};
    Object.keys(visibleDays).forEach(function (month) {
      modifiers[month] = {};
      visibleDays[month].forEach(function (day) {
        modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
      });
    });
    return modifiers;
  };

  _proto.getModifiersForDay = function getModifiersForDay(day) {
    var _this5 = this;

    return new Set(Object.keys(this.modifiers).filter(function (modifier) {
      return _this5.modifiers[modifier](day);
    }));
  };

  _proto.getStateForNewMonth = function getStateForNewMonth(nextProps) {
    var _this6 = this;

    var initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays,
        orientation = nextProps.orientation,
        startDate = nextProps.startDate;
    var initialVisibleMonthThunk = initialVisibleMonth || (startDate ? function () {
      return startDate;
    } : function () {
      return _this6.today;
    });
    var currentMonth = initialVisibleMonthThunk();
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
    return {
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
  };

  _proto.shouldDisableMonthNavigation = function shouldDisableMonthNavigation(date, visibleMonth) {
    if (!date) return false;
    var _this$props13 = this.props,
        numberOfMonths = _this$props13.numberOfMonths,
        enableOutsideDays = _this$props13.enableOutsideDays;
    return (0, _isDayVisible["default"])(date, visibleMonth, numberOfMonths, enableOutsideDays);
  };

  _proto.addModifier = function addModifier(updatedDays, day, modifier) {
    return (0, _modifiers.addModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.addModifierToRange = function addModifierToRange(updatedDays, start, end, modifier) {
    var days = updatedDays;
    var spanStart = start.clone();

    while ((0, _isBeforeDay["default"])(spanStart, end)) {
      days = this.addModifier(days, spanStart, modifier);
      spanStart = spanStart.clone().add(1, 'day');
    }

    return days;
  };

  _proto.deleteModifier = function deleteModifier(updatedDays, day, modifier) {
    return (0, _modifiers.deleteModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.deleteModifierFromRange = function deleteModifierFromRange(updatedDays, start, end, modifier) {
    var days = updatedDays;
    var spanStart = start.clone();

    while ((0, _isBeforeDay["default"])(spanStart, end)) {
      days = this.deleteModifier(days, spanStart, modifier);
      spanStart = spanStart.clone().add(1, 'day');
    }

    return days;
  };

  _proto.doesNotMeetMinimumNights = function doesNotMeetMinimumNights(day) {
    var _this$props14 = this.props,
        startDate = _this$props14.startDate,
        isOutsideRange = _this$props14.isOutsideRange,
        focusedInput = _this$props14.focusedInput,
        minimumNights = _this$props14.minimumNights;
    if (focusedInput !== _constants.END_DATE) return false;

    if (startDate) {
      var dayDiff = day.diff(startDate.clone().startOf('day').hour(12), 'days');
      return dayDiff < minimumNights && dayDiff >= 0;
    }

    return isOutsideRange((0, _moment["default"])(day).subtract(minimumNights, 'days'));
  };

  _proto.doesNotMeetMinNightsForHoveredStartDate = function doesNotMeetMinNightsForHoveredStartDate(day, hoverDate) {
    var _this$props15 = this.props,
        focusedInput = _this$props15.focusedInput,
        getMinNightsForHoverDate = _this$props15.getMinNightsForHoverDate;
    if (focusedInput !== _constants.END_DATE) return false;

    if (hoverDate && !this.isBlocked(hoverDate)) {
      var minNights = getMinNightsForHoverDate(hoverDate);
      var dayDiff = day.diff(hoverDate.clone().startOf('day').hour(12), 'days');
      return dayDiff < minNights && dayDiff >= 0;
    }

    return false;
  };

  _proto.isDayAfterHoveredStartDate = function isDayAfterHoveredStartDate(day) {
    var _this$props16 = this.props,
        startDate = _this$props16.startDate,
        endDate = _this$props16.endDate,
        minimumNights = _this$props16.minimumNights;

    var _ref2 = this.state || {},
        hoverDate = _ref2.hoverDate;

    return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay["default"])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay["default"])(hoverDate, startDate);
  };

  _proto.isEndDate = function isEndDate(day) {
    var endDate = this.props.endDate;
    return (0, _isSameDay["default"])(day, endDate);
  };

  _proto.isHovered = function isHovered(day) {
    var _ref3 = this.state || {},
        hoverDate = _ref3.hoverDate;

    var focusedInput = this.props.focusedInput;
    return !!focusedInput && (0, _isSameDay["default"])(day, hoverDate);
  };

  _proto.isInHoveredSpan = function isInHoveredSpan(day) {
    var _this$props17 = this.props,
        startDate = _this$props17.startDate,
        endDate = _this$props17.endDate;

    var _ref4 = this.state || {},
        hoverDate = _ref4.hoverDate;

    var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay["default"])(hoverDate, day));
    var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay["default"])(hoverDate, day));
    var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);
    return (isForwardRange || isBackwardRange) && isValidDayHovered;
  };

  _proto.isInSelectedSpan = function isInSelectedSpan(day) {
    var _this$props18 = this.props,
        startDate = _this$props18.startDate,
        endDate = _this$props18.endDate;
    return day.isBetween(startDate, endDate, 'days');
  };

  _proto.isLastInRange = function isLastInRange(day) {
    var endDate = this.props.endDate;
    return this.isInSelectedSpan(day) && (0, _isNextDay["default"])(day, endDate);
  };

  _proto.isStartDate = function isStartDate(day) {
    var startDate = this.props.startDate;
    return (0, _isSameDay["default"])(day, startDate);
  };

  _proto.isBlocked = function isBlocked(day) {
    var blockDaysViolatingMinNights = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var _this$props19 = this.props,
        isDayBlocked = _this$props19.isDayBlocked,
        isOutsideRange = _this$props19.isOutsideRange;
    return isDayBlocked(day) || isOutsideRange(day) || blockDaysViolatingMinNights && this.doesNotMeetMinimumNights(day);
  };

  _proto.isToday = function isToday(day) {
    return (0, _isSameDay["default"])(day, this.today);
  };

  _proto.isFirstDayOfWeek = function isFirstDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
  };

  _proto.isLastDayOfWeek = function isLastDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
  };

  _proto.isFirstPossibleEndDateForHoveredStartDate = function isFirstPossibleEndDateForHoveredStartDate(day, hoverDate) {
    var _this$props20 = this.props,
        focusedInput = _this$props20.focusedInput,
        getMinNightsForHoverDate = _this$props20.getMinNightsForHoverDate;
    if (focusedInput !== _constants.END_DATE || !hoverDate || this.isBlocked(hoverDate)) return false;
    var minNights = getMinNightsForHoverDate(hoverDate);
    var firstAvailableEndDate = hoverDate.clone().add(minNights, 'days');
    return (0, _isSameDay["default"])(day, firstAvailableEndDate);
  };

  _proto.beforeSelectedEnd = function beforeSelectedEnd(day) {
    var endDate = this.props.endDate;
    return (0, _isBeforeDay["default"])(day, endDate);
  };

  _proto.isDayBeforeHoveredEndDate = function isDayBeforeHoveredEndDate(day) {
    var _this$props21 = this.props,
        startDate = _this$props21.startDate,
        endDate = _this$props21.endDate,
        minimumNights = _this$props21.minimumNights;

    var _ref5 = this.state || {},
        hoverDate = _ref5.hoverDate;

    return !!endDate && !startDate && !this.isBlocked(day) && (0, _isPreviousDay["default"])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay["default"])(hoverDate, endDate);
  };

  _proto.render = function render() {
    var _this$props22 = this.props,
        numberOfMonths = _this$props22.numberOfMonths,
        orientation = _this$props22.orientation,
        monthFormat = _this$props22.monthFormat,
        renderMonthText = _this$props22.renderMonthText,
        renderWeekHeaderElement = _this$props22.renderWeekHeaderElement,
        dayPickerNavigationInlineStyles = _this$props22.dayPickerNavigationInlineStyles,
        navPosition = _this$props22.navPosition,
        navPrev = _this$props22.navPrev,
        navNext = _this$props22.navNext,
        renderNavPrevButton = _this$props22.renderNavPrevButton,
        renderNavNextButton = _this$props22.renderNavNextButton,
        noNavButtons = _this$props22.noNavButtons,
        noNavNextButton = _this$props22.noNavNextButton,
        noNavPrevButton = _this$props22.noNavPrevButton,
        onOutsideClick = _this$props22.onOutsideClick,
        withPortal = _this$props22.withPortal,
        enableOutsideDays = _this$props22.enableOutsideDays,
        firstDayOfWeek = _this$props22.firstDayOfWeek,
        renderKeyboardShortcutsButton = _this$props22.renderKeyboardShortcutsButton,
        renderKeyboardShortcutsPanel = _this$props22.renderKeyboardShortcutsPanel,
        hideKeyboardShortcutsPanel = _this$props22.hideKeyboardShortcutsPanel,
        daySize = _this$props22.daySize,
        focusedInput = _this$props22.focusedInput,
        renderCalendarDay = _this$props22.renderCalendarDay,
        renderDayContents = _this$props22.renderDayContents,
        renderCalendarInfo = _this$props22.renderCalendarInfo,
        renderMonthElement = _this$props22.renderMonthElement,
        calendarInfoPosition = _this$props22.calendarInfoPosition,
        onBlur = _this$props22.onBlur,
        onShiftTab = _this$props22.onShiftTab,
        onTab = _this$props22.onTab,
        isFocused = _this$props22.isFocused,
        showKeyboardShortcuts = _this$props22.showKeyboardShortcuts,
        isRTL = _this$props22.isRTL,
        weekDayFormat = _this$props22.weekDayFormat,
        dayAriaLabelFormat = _this$props22.dayAriaLabelFormat,
        verticalHeight = _this$props22.verticalHeight,
        noBorder = _this$props22.noBorder,
        transitionDuration = _this$props22.transitionDuration,
        verticalBorderSpacing = _this$props22.verticalBorderSpacing,
        horizontalMonthPadding = _this$props22.horizontalMonthPadding;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        phrases = _this$state7.phrases,
        visibleDays = _this$state7.visibleDays,
        disablePrev = _this$state7.disablePrev,
        disableNext = _this$state7.disableNext;
    return _react["default"].createElement(_DayPicker["default"], {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      modifiers: visibleDays,
      numberOfMonths: numberOfMonths,
      onDayClick: this.onDayClick,
      onDayMouseEnter: this.onDayMouseEnter,
      onDayMouseLeave: this.onDayMouseLeave,
      onPrevMonthClick: this.onPrevMonthClick,
      onNextMonthClick: this.onNextMonthClick,
      onMonthChange: this.onMonthChange,
      onTab: onTab,
      onShiftTab: onShiftTab,
      onYearChange: this.onYearChange,
      onGetNextScrollableMonths: this.onGetNextScrollableMonths,
      onGetPrevScrollableMonths: this.onGetPrevScrollableMonths,
      monthFormat: monthFormat,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      withPortal: withPortal,
      hidden: !focusedInput,
      initialVisibleMonth: function initialVisibleMonth() {
        return currentMonth;
      },
      daySize: daySize,
      onOutsideClick: onOutsideClick,
      disablePrev: disablePrev,
      disableNext: disableNext,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      noNavButtons: noNavButtons,
      noNavPrevButton: noNavPrevButton,
      noNavNextButton: noNavNextButton,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      renderKeyboardShortcutsButton: renderKeyboardShortcutsButton,
      renderKeyboardShortcutsPanel: renderKeyboardShortcutsPanel,
      calendarInfoPosition: calendarInfoPosition,
      firstDayOfWeek: firstDayOfWeek,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      isFocused: isFocused,
      getFirstFocusableDay: this.getFirstFocusableDay,
      onBlur: onBlur,
      showKeyboardShortcuts: showKeyboardShortcuts,
      phrases: phrases,
      isRTL: isRTL,
      weekDayFormat: weekDayFormat,
      dayAriaLabelFormat: dayAriaLabelFormat,
      verticalHeight: verticalHeight,
      verticalBorderSpacing: verticalBorderSpacing,
      noBorder: noBorder,
      transitionDuration: transitionDuration,
      horizontalMonthPadding: horizontalMonthPadding
    });
  };

  return DayPickerRangeController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DayPickerRangeController;
DayPickerRangeController.propTypes =  true ? propTypes : undefined;
DayPickerRangeController.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/DayPickerSingleDateController.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _object = _interopRequireDefault(__webpack_require__("./node_modules/object.values/index.js"));

var _isTouchDevice = _interopRequireDefault(__webpack_require__("./node_modules/is-touch-device/build/index.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

var _isAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isAfterDay.js"));

var _getVisibleDays = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getVisibleDays.js"));

var _toISODateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISODateString.js"));

var _modifiers = __webpack_require__("./node_modules/react-dates/lib/utils/modifiers.js");

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/CalendarInfoPositionShape.js"));

var _NavPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/NavPositionShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _DayPicker = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPicker.js"));

var _getPooledMoment = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPooledMoment.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)({
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  isOutsideRange: _propTypes["default"].func,
  isDayBlocked: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // DayPicker props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  enableOutsideDays: _propTypes["default"].bool,
  numberOfMonths: _propTypes["default"].number,
  orientation: _ScrollableOrientationShape["default"],
  withPortal: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  firstDayOfWeek: _DayOfWeekShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  noBorder: _propTypes["default"].bool,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  noNavButtons: _propTypes["default"].bool,
  noNavNextButton: _propTypes["default"].bool,
  noNavPrevButton: _propTypes["default"].bool,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onOutsideClick: _propTypes["default"].func,
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  // accessibility
  onBlur: _propTypes["default"].func,
  isFocused: _propTypes["default"].bool,
  showKeyboardShortcuts: _propTypes["default"].bool,
  onTab: _propTypes["default"].func,
  onShiftTab: _propTypes["default"].func,
  // i18n
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string,
  isRTL: _propTypes["default"].bool
}) : undefined;
var defaultProps = {
  date: undefined,
  // TODO: use null
  onDateChange: function onDateChange() {},
  focused: false,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  isOutsideRange: function isOutsideRange() {},
  isDayBlocked: function isDayBlocked() {},
  isDayHighlighted: function isDayHighlighted() {},
  // DayPicker props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  daySize: _constants.DAY_SIZE,
  verticalHeight: null,
  noBorder: false,
  verticalBorderSpacing: undefined,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  noNavButtons: false,
  noNavNextButton: false,
  noNavPrevButton: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  // accessibility
  onBlur: function onBlur() {},
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var DayPickerSingleDateController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerSingleDateController, _ref);
  var _proto = DayPickerSingleDateController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPickerSingleDateController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = false;
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function today(day) {
        return _this.isToday(day);
      },
      blocked: function blocked(day) {
        return _this.isBlocked(day);
      },
      'blocked-calendar': function blockedCalendar(day) {
        return props.isDayBlocked(day);
      },
      'blocked-out-of-range': function blockedOutOfRange(day) {
        return props.isOutsideRange(day);
      },
      'highlighted-calendar': function highlightedCalendar(day) {
        return props.isDayHighlighted(day);
      },
      valid: function valid(day) {
        return !_this.isBlocked(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      selected: function selected(day) {
        return _this.isSelected(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      }
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays;

    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayClick = _this.onDayClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMonthChange = _this.onMonthChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearChange = _this.onYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetNextScrollableMonths = _this.onGetNextScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetPrevScrollableMonths = _this.onGetPrevScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.isTouchDevice = (0, _isTouchDevice["default"])();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var date = nextProps.date,
        focused = nextProps.focused,
        isOutsideRange = nextProps.isOutsideRange,
        isDayBlocked = nextProps.isDayBlocked,
        isDayHighlighted = nextProps.isDayHighlighted,
        initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays;
    var _this$props = this.props,
        prevIsOutsideRange = _this$props.isOutsideRange,
        prevIsDayBlocked = _this$props.isDayBlocked,
        prevIsDayHighlighted = _this$props.isDayHighlighted,
        prevNumberOfMonths = _this$props.numberOfMonths,
        prevEnableOutsideDays = _this$props.enableOutsideDays,
        prevInitialVisibleMonth = _this$props.initialVisibleMonth,
        prevFocused = _this$props.focused,
        prevDate = _this$props.date;
    var visibleDays = this.state.visibleDays;
    var recomputeOutsideRange = false;
    var recomputeDayBlocked = false;
    var recomputeDayHighlighted = false;

    if (isOutsideRange !== prevIsOutsideRange) {
      this.modifiers['blocked-out-of-range'] = function (day) {
        return isOutsideRange(day);
      };

      recomputeOutsideRange = true;
    }

    if (isDayBlocked !== prevIsDayBlocked) {
      this.modifiers['blocked-calendar'] = function (day) {
        return isDayBlocked(day);
      };

      recomputeDayBlocked = true;
    }

    if (isDayHighlighted !== prevIsDayHighlighted) {
      this.modifiers['highlighted-calendar'] = function (day) {
        return isDayHighlighted(day);
      };

      recomputeDayHighlighted = true;
    }

    var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;

    if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocused && focused) {
      var newMonthState = this.getStateForNewMonth(nextProps);
      var currentMonth = newMonthState.currentMonth;
      visibleDays = newMonthState.visibleDays;
      this.setState({
        currentMonth: currentMonth,
        visibleDays: visibleDays
      });
    }

    var didDateChange = date !== prevDate;
    var didFocusChange = focused !== prevFocused;
    var modifiers = {};

    if (didDateChange) {
      modifiers = this.deleteModifier(modifiers, prevDate, 'selected');
      modifiers = this.addModifier(modifiers, date, 'selected');
    }

    if (didFocusChange || recomputePropModifiers) {
      (0, _object["default"])(visibleDays).forEach(function (days) {
        Object.keys(days).forEach(function (day) {
          var momentObj = (0, _getPooledMoment["default"])(day);

          if (_this2.isBlocked(momentObj)) {
            modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
          } else {
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
          }

          if (didFocusChange || recomputeOutsideRange) {
            if (isOutsideRange(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
            }
          }

          if (didFocusChange || recomputeDayBlocked) {
            if (isDayBlocked(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
            }
          }

          if (didFocusChange || recomputeDayHighlighted) {
            if (isDayHighlighted(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
            }
          }
        });
      });
    }

    var today = (0, _moment["default"])();

    if (!(0, _isSameDay["default"])(this.today, today)) {
      modifiers = this.deleteModifier(modifiers, this.today, 'today');
      modifiers = this.addModifier(modifiers, today, 'today');
      this.today = today;
    }

    if (Object.keys(modifiers).length > 0) {
      this.setState({
        visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
      });
    }
  };

  _proto.componentWillUpdate = function componentWillUpdate() {
    this.today = (0, _moment["default"])();
  };

  _proto.onDayClick = function onDayClick(day, e) {
    if (e) e.preventDefault();
    if (this.isBlocked(day)) return;
    var _this$props2 = this.props,
        onDateChange = _this$props2.onDateChange,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        onFocusChange = _this$props2.onFocusChange,
        onClose = _this$props2.onClose;
    onDateChange(day);

    if (!keepOpenOnDateSelect) {
      onFocusChange({
        focused: false
      });
      onClose({
        date: day
      });
    }
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day) {
    if (this.isTouchDevice) return;
    var _this$state = this.state,
        hoverDate = _this$state.hoverDate,
        visibleDays = _this$state.visibleDays;
    var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
    modifiers = this.addModifier(modifiers, day, 'hovered');
    this.setState({
      hoverDate: day,
      visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
    });
  };

  _proto.onDayMouseLeave = function onDayMouseLeave() {
    var _this$state2 = this.state,
        hoverDate = _this$state2.hoverDate,
        visibleDays = _this$state2.visibleDays;
    if (this.isTouchDevice || !hoverDate) return;
    var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
    this.setState({
      hoverDate: null,
      visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
    });
  };

  _proto.onPrevMonthClick = function onPrevMonthClick() {
    var _this$props3 = this.props,
        onPrevMonthClick = _this$props3.onPrevMonthClick,
        numberOfMonths = _this$props3.numberOfMonths,
        enableOutsideDays = _this$props3.enableOutsideDays;
    var _this$state3 = this.state,
        currentMonth = _this$state3.currentMonth,
        visibleDays = _this$state3.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var prevMonth = currentMonth.clone().subtract(1, 'month');
    var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays);
    this.setState({
      currentMonth: prevMonth,
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(prevMonthVisibleDays))
    }, function () {
      onPrevMonthClick(prevMonth.clone());
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick() {
    var _this$props4 = this.props,
        onNextMonthClick = _this$props4.onNextMonthClick,
        numberOfMonths = _this$props4.numberOfMonths,
        enableOutsideDays = _this$props4.enableOutsideDays;
    var _this$state4 = this.state,
        currentMonth = _this$state4.currentMonth,
        visibleDays = _this$state4.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
    var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays);
    var newCurrentMonth = currentMonth.clone().add(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(nextMonthVisibleDays))
    }, function () {
      onNextMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onMonthChange = function onMonthChange(newMonth) {
    var _this$props5 = this.props,
        numberOfMonths = _this$props5.numberOfMonths,
        enableOutsideDays = _this$props5.enableOutsideDays,
        orientation = _this$props5.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onYearChange = function onYearChange(newMonth) {
    var _this$props6 = this.props,
        numberOfMonths = _this$props6.numberOfMonths,
        enableOutsideDays = _this$props6.enableOutsideDays,
        orientation = _this$props6.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onGetNextScrollableMonths = function onGetNextScrollableMonths() {
    var _this$props7 = this.props,
        numberOfMonths = _this$props7.numberOfMonths,
        enableOutsideDays = _this$props7.enableOutsideDays;
    var _this$state5 = this.state,
        currentMonth = _this$state5.currentMonth,
        visibleDays = _this$state5.visibleDays;
    var numberOfVisibleMonths = Object.keys(visibleDays).length;
    var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(nextMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.onGetPrevScrollableMonths = function onGetPrevScrollableMonths() {
    var _this$props8 = this.props,
        numberOfMonths = _this$props8.numberOfMonths,
        enableOutsideDays = _this$props8.enableOutsideDays;
    var _this$state6 = this.state,
        currentMonth = _this$state6.currentMonth,
        visibleDays = _this$state6.visibleDays;
    var firstPreviousMonth = currentMonth.clone().subtract(numberOfMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(firstPreviousMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      currentMonth: firstPreviousMonth.clone(),
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.getFirstFocusableDay = function getFirstFocusableDay(newMonth) {
    var _this3 = this;

    var _this$props9 = this.props,
        date = _this$props9.date,
        numberOfMonths = _this$props9.numberOfMonths;
    var focusedDate = newMonth.clone().startOf('month');

    if (date) {
      focusedDate = date.clone();
    }

    if (this.isBlocked(focusedDate)) {
      var days = [];
      var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
      var currentDay = focusedDate.clone();

      while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
        currentDay = currentDay.clone().add(1, 'day');
        days.push(currentDay);
      }

      var viableDays = days.filter(function (day) {
        return !_this3.isBlocked(day) && (0, _isAfterDay["default"])(day, focusedDate);
      });

      if (viableDays.length > 0) {
        var _viableDays = (0, _slicedToArray2["default"])(viableDays, 1);

        focusedDate = _viableDays[0];
      }
    }

    return focusedDate;
  };

  _proto.getModifiers = function getModifiers(visibleDays) {
    var _this4 = this;

    var modifiers = {};
    Object.keys(visibleDays).forEach(function (month) {
      modifiers[month] = {};
      visibleDays[month].forEach(function (day) {
        modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
      });
    });
    return modifiers;
  };

  _proto.getModifiersForDay = function getModifiersForDay(day) {
    var _this5 = this;

    return new Set(Object.keys(this.modifiers).filter(function (modifier) {
      return _this5.modifiers[modifier](day);
    }));
  };

  _proto.getStateForNewMonth = function getStateForNewMonth(nextProps) {
    var _this6 = this;

    var initialVisibleMonth = nextProps.initialVisibleMonth,
        date = nextProps.date,
        numberOfMonths = nextProps.numberOfMonths,
        orientation = nextProps.orientation,
        enableOutsideDays = nextProps.enableOutsideDays;
    var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
      return date;
    } : function () {
      return _this6.today;
    });
    var currentMonth = initialVisibleMonthThunk();
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
    return {
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
  };

  _proto.addModifier = function addModifier(updatedDays, day, modifier) {
    return (0, _modifiers.addModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.deleteModifier = function deleteModifier(updatedDays, day, modifier) {
    return (0, _modifiers.deleteModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.isBlocked = function isBlocked(day) {
    var _this$props10 = this.props,
        isDayBlocked = _this$props10.isDayBlocked,
        isOutsideRange = _this$props10.isOutsideRange;
    return isDayBlocked(day) || isOutsideRange(day);
  };

  _proto.isHovered = function isHovered(day) {
    var _ref2 = this.state || {},
        hoverDate = _ref2.hoverDate;

    return (0, _isSameDay["default"])(day, hoverDate);
  };

  _proto.isSelected = function isSelected(day) {
    var date = this.props.date;
    return (0, _isSameDay["default"])(day, date);
  };

  _proto.isToday = function isToday(day) {
    return (0, _isSameDay["default"])(day, this.today);
  };

  _proto.isFirstDayOfWeek = function isFirstDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
  };

  _proto.isLastDayOfWeek = function isLastDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
  };

  _proto.render = function render() {
    var _this$props11 = this.props,
        numberOfMonths = _this$props11.numberOfMonths,
        orientation = _this$props11.orientation,
        monthFormat = _this$props11.monthFormat,
        renderMonthText = _this$props11.renderMonthText,
        renderWeekHeaderElement = _this$props11.renderWeekHeaderElement,
        dayPickerNavigationInlineStyles = _this$props11.dayPickerNavigationInlineStyles,
        navPosition = _this$props11.navPosition,
        navPrev = _this$props11.navPrev,
        navNext = _this$props11.navNext,
        renderNavPrevButton = _this$props11.renderNavPrevButton,
        renderNavNextButton = _this$props11.renderNavNextButton,
        noNavButtons = _this$props11.noNavButtons,
        noNavPrevButton = _this$props11.noNavPrevButton,
        noNavNextButton = _this$props11.noNavNextButton,
        onOutsideClick = _this$props11.onOutsideClick,
        onShiftTab = _this$props11.onShiftTab,
        onTab = _this$props11.onTab,
        withPortal = _this$props11.withPortal,
        focused = _this$props11.focused,
        enableOutsideDays = _this$props11.enableOutsideDays,
        hideKeyboardShortcutsPanel = _this$props11.hideKeyboardShortcutsPanel,
        daySize = _this$props11.daySize,
        firstDayOfWeek = _this$props11.firstDayOfWeek,
        renderCalendarDay = _this$props11.renderCalendarDay,
        renderDayContents = _this$props11.renderDayContents,
        renderCalendarInfo = _this$props11.renderCalendarInfo,
        renderMonthElement = _this$props11.renderMonthElement,
        calendarInfoPosition = _this$props11.calendarInfoPosition,
        isFocused = _this$props11.isFocused,
        isRTL = _this$props11.isRTL,
        phrases = _this$props11.phrases,
        dayAriaLabelFormat = _this$props11.dayAriaLabelFormat,
        onBlur = _this$props11.onBlur,
        showKeyboardShortcuts = _this$props11.showKeyboardShortcuts,
        weekDayFormat = _this$props11.weekDayFormat,
        verticalHeight = _this$props11.verticalHeight,
        noBorder = _this$props11.noBorder,
        transitionDuration = _this$props11.transitionDuration,
        verticalBorderSpacing = _this$props11.verticalBorderSpacing,
        horizontalMonthPadding = _this$props11.horizontalMonthPadding;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        visibleDays = _this$state7.visibleDays;
    return _react["default"].createElement(_DayPicker["default"], {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      modifiers: visibleDays,
      numberOfMonths: numberOfMonths,
      onDayClick: this.onDayClick,
      onDayMouseEnter: this.onDayMouseEnter,
      onDayMouseLeave: this.onDayMouseLeave,
      onPrevMonthClick: this.onPrevMonthClick,
      onNextMonthClick: this.onNextMonthClick,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
      onGetNextScrollableMonths: this.onGetNextScrollableMonths,
      onGetPrevScrollableMonths: this.onGetPrevScrollableMonths,
      monthFormat: monthFormat,
      withPortal: withPortal,
      hidden: !focused,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      initialVisibleMonth: function initialVisibleMonth() {
        return currentMonth;
      },
      firstDayOfWeek: firstDayOfWeek,
      onOutsideClick: onOutsideClick,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      noNavButtons: noNavButtons,
      noNavNextButton: noNavNextButton,
      noNavPrevButton: noNavPrevButton,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isFocused,
      getFirstFocusableDay: this.getFirstFocusableDay,
      onBlur: onBlur,
      onTab: onTab,
      onShiftTab: onShiftTab,
      phrases: phrases,
      daySize: daySize,
      isRTL: isRTL,
      showKeyboardShortcuts: showKeyboardShortcuts,
      weekDayFormat: weekDayFormat,
      dayAriaLabelFormat: dayAriaLabelFormat,
      verticalHeight: verticalHeight,
      noBorder: noBorder,
      transitionDuration: transitionDuration,
      verticalBorderSpacing: verticalBorderSpacing,
      horizontalMonthPadding: horizontalMonthPadding
    });
  };

  return DayPickerSingleDateController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DayPickerSingleDateController;
DayPickerSingleDateController.propTypes =  true ? propTypes : undefined;
DayPickerSingleDateController.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/KeyboardShortcutRow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  unicode: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  action: _propTypes["default"].string.isRequired,
  block: _propTypes["default"].bool
})) : undefined;
var defaultProps = {
  block: false
};

function KeyboardShortcutRow(_ref) {
  var unicode = _ref.unicode,
      label = _ref.label,
      action = _ref.action,
      block = _ref.block,
      styles = _ref.styles;
  return _react["default"].createElement("li", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow, block && styles.KeyboardShortcutRow__block), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_keyContainer, block && styles.KeyboardShortcutRow_keyContainer__block), _react["default"].createElement("span", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_key), {
    role: "img",
    "aria-label": "".concat(label, ",") // add comma so screen readers will pause before reading action

  }), unicode)), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_action), action));
}

KeyboardShortcutRow.propTypes =  true ? propTypes : undefined;
KeyboardShortcutRow.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var color = _ref2.reactDates.color;
  return {
    KeyboardShortcutRow: {
      listStyle: 'none',
      margin: '6px 0'
    },
    KeyboardShortcutRow__block: {
      marginBottom: 16
    },
    KeyboardShortcutRow_keyContainer: {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      // is not handled by isRTL
      marginRight: 6 // is not handled by isRTL

    },
    KeyboardShortcutRow_keyContainer__block: {
      textAlign: 'left',
      // is not handled by isRTL
      display: 'inline'
    },
    KeyboardShortcutRow_key: {
      fontFamily: 'monospace',
      fontSize: 12,
      textTransform: 'uppercase',
      background: color.core.grayLightest,
      padding: '2px 6px'
    },
    KeyboardShortcutRow_action: {
      display: 'inline',
      wordBreak: 'break-word',
      marginLeft: 8 // is not handled by isRTL

    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(KeyboardShortcutRow);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/LeftArrow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var LeftArrow = function LeftArrow(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z"
  }));
};

LeftArrow.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = LeftArrow;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/RightArrow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var RightArrow = function RightArrow(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"
  }));
};

RightArrow.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = RightArrow;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/SingleDatePicker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureSingleDatePicker = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _reactPortal = __webpack_require__("./node_modules/react-portal/es/index.js");

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _consolidatedEvents = __webpack_require__("./node_modules/consolidated-events/lib/index.esm.js");

var _isTouchDevice = _interopRequireDefault(__webpack_require__("./node_modules/is-touch-device/build/index.js"));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__("./node_modules/react-outside-click-handler/index.js"));

var _SingleDatePickerShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/SingleDatePickerShape.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getResponsiveContainerStyles = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getResponsiveContainerStyles.js"));

var _getDetachedContainerStyles = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getDetachedContainerStyles.js"));

var _getInputHeight = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getInputHeight.js"));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js"));

var _disableScroll2 = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/disableScroll.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _SingleDatePickerInputController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/SingleDatePickerInputController.js"));

var _DayPickerSingleDateController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPickerSingleDateController.js"));

var _CloseButton = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CloseButton.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {}, _SingleDatePickerShape["default"])) : undefined;
var defaultProps = {
  // required props for a functional interactive SingleDatePicker
  date: null,
  focused: false,
  // input related props
  id: 'date',
  placeholder: 'Date',
  ariaLabel: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  // navigation related props
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // month presentation and interaction related props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked() {
    return false;
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  isDayHighlighted: function isDayHighlighted() {},
  // internationalization props
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.SingleDatePickerPhrases,
  dayAriaLabelFormat: undefined
};

var SingleDatePicker =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(SingleDatePicker, _ref);
  var _proto = SingleDatePicker.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function SingleDatePicker(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = false;
    _this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false,
      showKeyboardShortcuts: false
    };
    _this.onFocusOut = _this.onFocusOut.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onOutsideClick = _this.onOutsideClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onInputFocus = _this.onInputFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.disableScroll = _this.disableScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  /* istanbul ignore next */


  _proto.componentDidMount = function componentDidMount() {
    this.removeResizeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
      passive: true
    });
    this.responsivizePickerPosition();
    this.disableScroll();
    var focused = this.props.focused;

    if (focused) {
      this.setState({
        isInputFocused: true
      });
    }

    this.isTouchDevice = (0, _isTouchDevice["default"])();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var focused = this.props.focused;

    if (!prevProps.focused && focused) {
      this.responsivizePickerPosition();
      this.disableScroll();
    } else if (prevProps.focused && !focused) {
      if (this.enableScroll) this.enableScroll();
    }
  }
  /* istanbul ignore next */
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.removeResizeEventListener) this.removeResizeEventListener();
    if (this.removeFocusOutEventListener) this.removeFocusOutEventListener();
    if (this.enableScroll) this.enableScroll();
  };

  _proto.onOutsideClick = function onOutsideClick(event) {
    var _this$props = this.props,
        focused = _this$props.focused,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose,
        date = _this$props.date,
        appendToBody = _this$props.appendToBody;
    if (!focused) return;
    if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
    onFocusChange({
      focused: false
    });
    onClose({
      date: date
    });
  };

  _proto.onInputFocus = function onInputFocus(_ref2) {
    var focused = _ref2.focused;
    var _this$props2 = this.props,
        onFocusChange = _this$props2.onFocusChange,
        readOnly = _this$props2.readOnly,
        withPortal = _this$props2.withPortal,
        withFullScreenPortal = _this$props2.withFullScreenPortal,
        keepFocusOnInput = _this$props2.keepFocusOnInput;

    if (focused) {
      var withAnyPortal = withPortal || withFullScreenPortal;
      var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

      if (moveFocusToDayPicker) {
        this.onDayPickerFocus();
      } else {
        this.onDayPickerBlur();
      }
    }

    onFocusChange({
      focused: focused
    });
  };

  _proto.onDayPickerFocus = function onDayPickerFocus() {
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: false
    });
  };

  _proto.onDayPickerBlur = function onDayPickerBlur() {
    this.setState({
      isInputFocused: true,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
  };

  _proto.onFocusOut = function onFocusOut(e) {
    var onFocusChange = this.props.onFocusChange; // In cases where **relatedTarget** is not null, it points to the right
    // element here. However, in cases where it is null (such as clicking on a
    // specific day) or it is **document.body** (IE11), the appropriate value is **event.target**.
    //
    // We handle both situations here by using the ` || ` operator to fallback
    // to *event.target** when **relatedTarget** is not provided.

    var relatedTarget = e.relatedTarget === document.body ? e.target : e.relatedTarget || e.target;
    if (this.dayPickerContainer.contains(relatedTarget)) return;
    onFocusChange({
      focused: false
    });
  };

  _proto.setDayPickerContainerRef = function setDayPickerContainerRef(ref) {
    if (ref === this.dayPickerContainer) return;
    this.removeEventListeners();
    this.dayPickerContainer = ref;
    if (!ref) return;
    this.addEventListeners();
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.addEventListeners = function addEventListeners() {
    // We manually set event because React has not implemented onFocusIn/onFocusOut.
    // Keep an eye on https://github.com/facebook/react/issues/6410 for updates
    // We use "blur w/ useCapture param" vs "onfocusout" for FF browser support
    this.removeFocusOutEventListener = (0, _consolidatedEvents.addEventListener)(this.dayPickerContainer, 'focusout', this.onFocusOut);
  };

  _proto.removeEventListeners = function removeEventListeners() {
    if (this.removeFocusOutEventListener) this.removeFocusOutEventListener();
  };

  _proto.disableScroll = function disableScroll() {
    var _this$props3 = this.props,
        appendToBody = _this$props3.appendToBody,
        propDisableScroll = _this$props3.disableScroll,
        focused = _this$props3.focused;
    if (!appendToBody && !propDisableScroll) return;
    if (!focused) return; // Disable scroll for every ancestor of this <SingleDatePicker> up to the
    // document level. This ensures the input and the picker never move. Other
    // sibling elements or the picker itself can scroll.

    this.enableScroll = (0, _disableScroll2["default"])(this.container);
  }
  /* istanbul ignore next */
  ;

  _proto.responsivizePickerPosition = function responsivizePickerPosition() {
    // It's possible the portal props have been changed in response to window resizes
    // So let's ensure we reset this back to the base state each time
    this.setState({
      dayPickerContainerStyles: {}
    });
    var _this$props4 = this.props,
        openDirection = _this$props4.openDirection,
        anchorDirection = _this$props4.anchorDirection,
        horizontalMargin = _this$props4.horizontalMargin,
        withPortal = _this$props4.withPortal,
        withFullScreenPortal = _this$props4.withFullScreenPortal,
        appendToBody = _this$props4.appendToBody,
        focused = _this$props4.focused;
    var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

    if (!focused) {
      return;
    }

    var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

    if (!withPortal && !withFullScreenPortal) {
      var containerRect = this.dayPickerContainer.getBoundingClientRect();
      var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
      var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
      this.setState({
        dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), {}, appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
      });
    }
  };

  _proto.showKeyboardShortcutsPanel = function showKeyboardShortcutsPanel() {
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: true
    });
  };

  _proto.maybeRenderDayPickerWithPortal = function maybeRenderDayPickerWithPortal() {
    var _this$props5 = this.props,
        focused = _this$props5.focused,
        withPortal = _this$props5.withPortal,
        withFullScreenPortal = _this$props5.withFullScreenPortal,
        appendToBody = _this$props5.appendToBody;

    if (!focused) {
      return null;
    }

    if (withPortal || withFullScreenPortal || appendToBody) {
      return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
    }

    return this.renderDayPicker();
  };

  _proto.renderDayPicker = function renderDayPicker() {
    var _this$props6 = this.props,
        anchorDirection = _this$props6.anchorDirection,
        openDirection = _this$props6.openDirection,
        onDateChange = _this$props6.onDateChange,
        date = _this$props6.date,
        onFocusChange = _this$props6.onFocusChange,
        focused = _this$props6.focused,
        enableOutsideDays = _this$props6.enableOutsideDays,
        numberOfMonths = _this$props6.numberOfMonths,
        orientation = _this$props6.orientation,
        monthFormat = _this$props6.monthFormat,
        dayPickerNavigationInlineStyles = _this$props6.dayPickerNavigationInlineStyles,
        navPosition = _this$props6.navPosition,
        navPrev = _this$props6.navPrev,
        navNext = _this$props6.navNext,
        renderNavPrevButton = _this$props6.renderNavPrevButton,
        renderNavNextButton = _this$props6.renderNavNextButton,
        onPrevMonthClick = _this$props6.onPrevMonthClick,
        onNextMonthClick = _this$props6.onNextMonthClick,
        onClose = _this$props6.onClose,
        withPortal = _this$props6.withPortal,
        withFullScreenPortal = _this$props6.withFullScreenPortal,
        keepOpenOnDateSelect = _this$props6.keepOpenOnDateSelect,
        initialVisibleMonth = _this$props6.initialVisibleMonth,
        renderMonthText = _this$props6.renderMonthText,
        renderWeekHeaderElement = _this$props6.renderWeekHeaderElement,
        renderCalendarDay = _this$props6.renderCalendarDay,
        renderDayContents = _this$props6.renderDayContents,
        renderCalendarInfo = _this$props6.renderCalendarInfo,
        renderMonthElement = _this$props6.renderMonthElement,
        calendarInfoPosition = _this$props6.calendarInfoPosition,
        hideKeyboardShortcutsPanel = _this$props6.hideKeyboardShortcutsPanel,
        firstDayOfWeek = _this$props6.firstDayOfWeek,
        customCloseIcon = _this$props6.customCloseIcon,
        phrases = _this$props6.phrases,
        dayAriaLabelFormat = _this$props6.dayAriaLabelFormat,
        daySize = _this$props6.daySize,
        isRTL = _this$props6.isRTL,
        isOutsideRange = _this$props6.isOutsideRange,
        isDayBlocked = _this$props6.isDayBlocked,
        isDayHighlighted = _this$props6.isDayHighlighted,
        weekDayFormat = _this$props6.weekDayFormat,
        styles = _this$props6.styles,
        verticalHeight = _this$props6.verticalHeight,
        transitionDuration = _this$props6.transitionDuration,
        verticalSpacing = _this$props6.verticalSpacing,
        horizontalMonthPadding = _this$props6.horizontalMonthPadding,
        small = _this$props6.small,
        reactDates = _this$props6.theme.reactDates;
    var _this$state = this.state,
        dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
        isDayPickerFocused = _this$state.isDayPickerFocused,
        showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
    var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

    var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], null);

    var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
    var withAnyPortal = withPortal || withFullScreenPortal;
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setDayPickerContainerRef
    }, (0, _reactWithStyles.css)(styles.SingleDatePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.SingleDatePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.SingleDatePicker_picker__directionRight, openDirection === _constants.OPEN_DOWN && styles.SingleDatePicker_picker__openDown, openDirection === _constants.OPEN_UP && styles.SingleDatePicker_picker__openUp, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
      top: inputHeight + verticalSpacing
    }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
      bottom: inputHeight + verticalSpacing
    }, orientation === _constants.HORIZONTAL_ORIENTATION && styles.SingleDatePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.SingleDatePicker_picker__vertical, withAnyPortal && styles.SingleDatePicker_picker__portal, withFullScreenPortal && styles.SingleDatePicker_picker__fullScreenPortal, isRTL && styles.SingleDatePicker_picker__rtl, dayPickerContainerStyles), {
      onClick: onOutsideClick
    }), _react["default"].createElement(_DayPickerSingleDateController["default"], {
      date: date,
      onDateChange: onDateChange,
      onFocusChange: onFocusChange,
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      numberOfMonths: numberOfMonths,
      monthFormat: monthFormat,
      withPortal: withAnyPortal,
      focused: focused,
      keepOpenOnDateSelect: keepOpenOnDateSelect,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      initialVisibleMonth: initialVisibleMonth,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      onPrevMonthClick: onPrevMonthClick,
      onNextMonthClick: onNextMonthClick,
      onClose: onClose,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isDayPickerFocused,
      showKeyboardShortcuts: showKeyboardShortcuts,
      onBlur: this.onDayPickerBlur,
      phrases: phrases,
      dayAriaLabelFormat: dayAriaLabelFormat,
      daySize: daySize,
      isRTL: isRTL,
      isOutsideRange: isOutsideRange,
      isDayBlocked: isDayBlocked,
      isDayHighlighted: isDayHighlighted,
      firstDayOfWeek: firstDayOfWeek,
      weekDayFormat: weekDayFormat,
      verticalHeight: verticalHeight,
      transitionDuration: transitionDuration,
      horizontalMonthPadding: horizontalMonthPadding
    }), withFullScreenPortal && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton), {
      "aria-label": phrases.closeDatePicker,
      type: "button",
      onClick: this.onOutsideClick
    }), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton_svg), closeIcon)));
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    /* eslint-enable jsx-a11y/click-events-have-key-events */
  };

  _proto.render = function render() {
    var _this$props7 = this.props,
        id = _this$props7.id,
        placeholder = _this$props7.placeholder,
        ariaLabel = _this$props7.ariaLabel,
        disabled = _this$props7.disabled,
        focused = _this$props7.focused,
        required = _this$props7.required,
        readOnly = _this$props7.readOnly,
        openDirection = _this$props7.openDirection,
        showClearDate = _this$props7.showClearDate,
        showDefaultInputIcon = _this$props7.showDefaultInputIcon,
        inputIconPosition = _this$props7.inputIconPosition,
        customCloseIcon = _this$props7.customCloseIcon,
        customInputIcon = _this$props7.customInputIcon,
        date = _this$props7.date,
        onDateChange = _this$props7.onDateChange,
        displayFormat = _this$props7.displayFormat,
        phrases = _this$props7.phrases,
        withPortal = _this$props7.withPortal,
        withFullScreenPortal = _this$props7.withFullScreenPortal,
        screenReaderInputMessage = _this$props7.screenReaderInputMessage,
        isRTL = _this$props7.isRTL,
        noBorder = _this$props7.noBorder,
        block = _this$props7.block,
        small = _this$props7.small,
        regular = _this$props7.regular,
        verticalSpacing = _this$props7.verticalSpacing,
        reopenPickerOnClearDate = _this$props7.reopenPickerOnClearDate,
        keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
        styles = _this$props7.styles,
        isOutsideRange = _this$props7.isOutsideRange;
    var isInputFocused = this.state.isInputFocused;
    var enableOutsideClick = !withPortal && !withFullScreenPortal;
    var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

    var input = _react["default"].createElement(_SingleDatePickerInputController["default"], {
      id: id,
      placeholder: placeholder,
      ariaLabel: ariaLabel,
      focused: focused,
      isFocused: isInputFocused,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      showCaret: !withPortal && !withFullScreenPortal && !hideFang,
      showClearDate: showClearDate,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      isOutsideRange: isOutsideRange,
      customCloseIcon: customCloseIcon,
      customInputIcon: customInputIcon,
      date: date,
      onDateChange: onDateChange,
      displayFormat: displayFormat,
      onFocusChange: this.onInputFocus,
      onKeyDownArrowDown: this.onDayPickerFocus,
      onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
      screenReaderMessage: screenReaderInputMessage,
      phrases: phrases,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing,
      reopenPickerOnClearDate: reopenPickerOnClearDate,
      keepOpenOnDateSelect: keepOpenOnDateSelect
    }, this.maybeRenderDayPickerWithPortal());

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setContainerRef
    }, (0, _reactWithStyles.css)(styles.SingleDatePicker, block && styles.SingleDatePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
      onOutsideClick: this.onOutsideClick
    }, input), enableOutsideClick || input);
  };

  return SingleDatePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureSingleDatePicker = SingleDatePicker;
SingleDatePicker.propTypes =  true ? propTypes : undefined;
SingleDatePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      zIndex = _ref3$reactDates.zIndex;
  return {
    SingleDatePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    SingleDatePicker__block: {
      display: 'block'
    },
    SingleDatePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    SingleDatePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    SingleDatePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    SingleDatePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    SingleDatePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePicker);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/SingleDatePickerInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _reactWithStyles = __webpack_require__("./node_modules/react-with-styles/lib/withStyles.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _noflip = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/noflip.js"));

var _DateInput = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateInput.js"));

var _IconPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/IconPositionShape.js"));

var _CloseButton = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CloseButton.js"));

var _CalendarIcon = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarIcon.js"));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  displayValue: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  focused: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  // describes actual DOM focus
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  showCaret: _propTypes["default"].bool,
  showClearDate: _propTypes["default"].bool,
  customCloseIcon: _propTypes["default"].node,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  isRTL: _propTypes["default"].bool,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  onChange: _propTypes["default"].func,
  onClearDate: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDownShiftTab: _propTypes["default"].func,
  onKeyDownTab: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerInputPhrases))
})) : undefined;
var defaultProps = {
  children: null,
  placeholder: 'Select Date',
  ariaLabel: undefined,
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  isFocused: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customCloseIcon: null,
  customInputIcon: null,
  isRTL: false,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  onChange: function onChange() {},
  onClearDate: function onClearDate() {},
  onFocus: function onFocus() {},
  onKeyDownShiftTab: function onKeyDownShiftTab() {},
  onKeyDownTab: function onKeyDownTab() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases
};

function SingleDatePickerInput(_ref) {
  var id = _ref.id,
      children = _ref.children,
      placeholder = _ref.placeholder,
      ariaLabel = _ref.ariaLabel,
      displayValue = _ref.displayValue,
      focused = _ref.focused,
      isFocused = _ref.isFocused,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      showCaret = _ref.showCaret,
      showClearDate = _ref.showClearDate,
      showDefaultInputIcon = _ref.showDefaultInputIcon,
      inputIconPosition = _ref.inputIconPosition,
      phrases = _ref.phrases,
      onClearDate = _ref.onClearDate,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onKeyDownShiftTab = _ref.onKeyDownShiftTab,
      onKeyDownTab = _ref.onKeyDownTab,
      onKeyDownArrowDown = _ref.onKeyDownArrowDown,
      onKeyDownQuestionMark = _ref.onKeyDownQuestionMark,
      screenReaderMessage = _ref.screenReaderMessage,
      customCloseIcon = _ref.customCloseIcon,
      customInputIcon = _ref.customInputIcon,
      openDirection = _ref.openDirection,
      isRTL = _ref.isRTL,
      noBorder = _ref.noBorder,
      block = _ref.block,
      small = _ref.small,
      regular = _ref.regular,
      verticalSpacing = _ref.verticalSpacing,
      styles = _ref.styles;

  var calendarIcon = customInputIcon || _react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.SingleDatePickerInput_calendarIcon_svg));

  var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.SingleDatePickerInput_clearDate_svg, small && styles.SingleDatePickerInput_clearDate_svg__small));

  var screenReaderText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;

  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.SingleDatePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onFocus
  }), calendarIcon);

  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePickerInput, disabled && styles.SingleDatePickerInput__disabled, isRTL && styles.SingleDatePickerInput__rtl, !noBorder && styles.SingleDatePickerInput__withBorder, block && styles.SingleDatePickerInput__block, showClearDate && styles.SingleDatePickerInput__showClearDate), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, _react["default"].createElement(_DateInput["default"], {
    id: id,
    placeholder: placeholder,
    ariaLabel: ariaLabel,
    displayValue: displayValue,
    screenReaderMessage: screenReaderText,
    focused: focused,
    isFocused: isFocused,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDownShiftTab: onKeyDownShiftTab,
    onKeyDownTab: onKeyDownTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    openDirection: openDirection,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular,
    block: block
  }), children, showClearDate && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.SingleDatePickerInput_clearDate, small && styles.SingleDatePickerInput_clearDate__small, !customCloseIcon && styles.SingleDatePickerInput_clearDate__default, !displayValue && styles.SingleDatePickerInput_clearDate__hide), {
    type: "button",
    "aria-label": phrases.clearDate,
    disabled: disabled,
    onClick: onClearDate
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}

SingleDatePickerInput.propTypes =  true ? propTypes : undefined;
SingleDatePickerInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color;
  return {
    SingleDatePickerInput: {
      display: 'inline-block',
      backgroundColor: color.background
    },
    SingleDatePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    SingleDatePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePickerInput__disabled: {
      backgroundColor: color.disabled
    },
    SingleDatePickerInput__block: {
      display: 'block'
    },
    SingleDatePickerInput__showClearDate: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    SingleDatePickerInput_clearDate: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    SingleDatePickerInput_clearDate__default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    SingleDatePickerInput_clearDate__small: {
      padding: 6
    },
    SingleDatePickerInput_clearDate__hide: {
      visibility: 'hidden'
    },
    SingleDatePickerInput_clearDate_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    SingleDatePickerInput_clearDate_svg__small: {
      height: 9
    },
    SingleDatePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    SingleDatePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePickerInput);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/components/SingleDatePickerInputController.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__("./node_modules/enzyme-shallow-equal/build/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _SingleDatePickerInput = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/SingleDatePickerInput.js"));

var _IconPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/IconPositionShape.js"));

var _DisabledShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DisabledShape.js"));

var _toMomentObject = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js"));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toLocalizedDateString.js"));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var propTypes =  true ? (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes["default"].node,
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func.isRequired,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  showClearDate: _propTypes["default"].bool,
  showCaret: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDate: _propTypes["default"].bool,
  isOutsideRange: _propTypes["default"].func,
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  onClose: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  customInputIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  // accessibility
  isFocused: _propTypes["default"].bool,
  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerInputPhrases)),
  isRTL: _propTypes["default"].bool
}) : undefined;
var defaultProps = {
  children: null,
  date: null,
  focused: false,
  placeholder: '',
  ariaLabel: undefined,
  screenReaderMessage: 'Date',
  showClearDate: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  onClose: function onClose() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  customInputIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases,
  isRTL: false
};

var SingleDatePickerInputController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(SingleDatePickerInputController, _ref);
  var _proto = SingleDatePickerInputController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function SingleDatePickerInputController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFocus = _this.onFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onClearFocus = _this.onClearFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.clearDate = _this.clearDate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.onChange = function onChange(dateString) {
    var _this$props = this.props,
        isOutsideRange = _this$props.isOutsideRange,
        keepOpenOnDateSelect = _this$props.keepOpenOnDateSelect,
        onDateChange = _this$props.onDateChange,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose;
    var newDate = (0, _toMomentObject["default"])(dateString, this.getDisplayFormat());
    var isValid = newDate && !isOutsideRange(newDate);

    if (isValid) {
      onDateChange(newDate);

      if (!keepOpenOnDateSelect) {
        onFocusChange({
          focused: false
        });
        onClose({
          date: newDate
        });
      }
    } else {
      onDateChange(null);
    }
  };

  _proto.onFocus = function onFocus() {
    var _this$props2 = this.props,
        onFocusChange = _this$props2.onFocusChange,
        disabled = _this$props2.disabled;

    if (!disabled) {
      onFocusChange({
        focused: true
      });
    }
  };

  _proto.onClearFocus = function onClearFocus() {
    var _this$props3 = this.props,
        focused = _this$props3.focused,
        onFocusChange = _this$props3.onFocusChange,
        onClose = _this$props3.onClose,
        date = _this$props3.date;
    if (!focused) return;
    onFocusChange({
      focused: false
    });
    onClose({
      date: date
    });
  };

  _proto.getDisplayFormat = function getDisplayFormat() {
    var displayFormat = this.props.displayFormat;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  };

  _proto.getDateString = function getDateString(date) {
    var displayFormat = this.getDisplayFormat();

    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }

    return (0, _toLocalizedDateString["default"])(date);
  };

  _proto.clearDate = function clearDate() {
    var _this$props4 = this.props,
        onDateChange = _this$props4.onDateChange,
        reopenPickerOnClearDate = _this$props4.reopenPickerOnClearDate,
        onFocusChange = _this$props4.onFocusChange;
    onDateChange(null);

    if (reopenPickerOnClearDate) {
      onFocusChange({
        focused: true
      });
    }
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        children = _this$props5.children,
        id = _this$props5.id,
        placeholder = _this$props5.placeholder,
        ariaLabel = _this$props5.ariaLabel,
        disabled = _this$props5.disabled,
        focused = _this$props5.focused,
        isFocused = _this$props5.isFocused,
        required = _this$props5.required,
        readOnly = _this$props5.readOnly,
        openDirection = _this$props5.openDirection,
        showClearDate = _this$props5.showClearDate,
        showCaret = _this$props5.showCaret,
        showDefaultInputIcon = _this$props5.showDefaultInputIcon,
        inputIconPosition = _this$props5.inputIconPosition,
        customCloseIcon = _this$props5.customCloseIcon,
        customInputIcon = _this$props5.customInputIcon,
        date = _this$props5.date,
        phrases = _this$props5.phrases,
        onKeyDownArrowDown = _this$props5.onKeyDownArrowDown,
        onKeyDownQuestionMark = _this$props5.onKeyDownQuestionMark,
        screenReaderMessage = _this$props5.screenReaderMessage,
        isRTL = _this$props5.isRTL,
        noBorder = _this$props5.noBorder,
        block = _this$props5.block,
        small = _this$props5.small,
        regular = _this$props5.regular,
        verticalSpacing = _this$props5.verticalSpacing;
    var displayValue = this.getDateString(date);
    return _react["default"].createElement(_SingleDatePickerInput["default"], {
      id: id,
      placeholder: placeholder,
      ariaLabel: ariaLabel,
      focused: focused,
      isFocused: isFocused,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      showCaret: showCaret,
      onClearDate: this.clearDate,
      showClearDate: showClearDate,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      customCloseIcon: customCloseIcon,
      customInputIcon: customInputIcon,
      displayValue: displayValue,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onKeyDownShiftTab: this.onClearFocus,
      onKeyDownArrowDown: onKeyDownArrowDown,
      onKeyDownQuestionMark: onKeyDownQuestionMark,
      screenReaderMessage: screenReaderMessage,
      phrases: phrases,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing
    }, children);
  };

  return SingleDatePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = SingleDatePickerInputController;
SingleDatePickerInputController.propTypes =  true ? propTypes : undefined;
SingleDatePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-dates/lib/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODIFIER_KEY_NAMES = exports.DEFAULT_VERTICAL_SPACING = exports.FANG_HEIGHT_PX = exports.FANG_WIDTH_PX = exports.WEEKDAYS = exports.BLOCKED_MODIFIER = exports.DAY_SIZE = exports.OPEN_UP = exports.OPEN_DOWN = exports.ANCHOR_RIGHT = exports.ANCHOR_LEFT = exports.INFO_POSITION_AFTER = exports.INFO_POSITION_BEFORE = exports.INFO_POSITION_BOTTOM = exports.INFO_POSITION_TOP = exports.ICON_AFTER_POSITION = exports.ICON_BEFORE_POSITION = exports.NAV_POSITION_TOP = exports.NAV_POSITION_BOTTOM = exports.VERTICAL_SCROLLABLE = exports.VERTICAL_ORIENTATION = exports.HORIZONTAL_ORIENTATION = exports.END_DATE = exports.START_DATE = exports.ISO_MONTH_FORMAT = exports.ISO_FORMAT = exports.DISPLAY_FORMAT = void 0;
var DISPLAY_FORMAT = 'L';
exports.DISPLAY_FORMAT = DISPLAY_FORMAT;
var ISO_FORMAT = 'YYYY-MM-DD';
exports.ISO_FORMAT = ISO_FORMAT;
var ISO_MONTH_FORMAT = 'YYYY-MM'; // TODO delete this line of dead code on next breaking change

exports.ISO_MONTH_FORMAT = ISO_MONTH_FORMAT;
var START_DATE = 'startDate';
exports.START_DATE = START_DATE;
var END_DATE = 'endDate';
exports.END_DATE = END_DATE;
var HORIZONTAL_ORIENTATION = 'horizontal';
exports.HORIZONTAL_ORIENTATION = HORIZONTAL_ORIENTATION;
var VERTICAL_ORIENTATION = 'vertical';
exports.VERTICAL_ORIENTATION = VERTICAL_ORIENTATION;
var VERTICAL_SCROLLABLE = 'verticalScrollable';
exports.VERTICAL_SCROLLABLE = VERTICAL_SCROLLABLE;
var NAV_POSITION_BOTTOM = 'navPositionBottom';
exports.NAV_POSITION_BOTTOM = NAV_POSITION_BOTTOM;
var NAV_POSITION_TOP = 'navPositionTop';
exports.NAV_POSITION_TOP = NAV_POSITION_TOP;
var ICON_BEFORE_POSITION = 'before';
exports.ICON_BEFORE_POSITION = ICON_BEFORE_POSITION;
var ICON_AFTER_POSITION = 'after';
exports.ICON_AFTER_POSITION = ICON_AFTER_POSITION;
var INFO_POSITION_TOP = 'top';
exports.INFO_POSITION_TOP = INFO_POSITION_TOP;
var INFO_POSITION_BOTTOM = 'bottom';
exports.INFO_POSITION_BOTTOM = INFO_POSITION_BOTTOM;
var INFO_POSITION_BEFORE = 'before';
exports.INFO_POSITION_BEFORE = INFO_POSITION_BEFORE;
var INFO_POSITION_AFTER = 'after';
exports.INFO_POSITION_AFTER = INFO_POSITION_AFTER;
var ANCHOR_LEFT = 'left';
exports.ANCHOR_LEFT = ANCHOR_LEFT;
var ANCHOR_RIGHT = 'right';
exports.ANCHOR_RIGHT = ANCHOR_RIGHT;
var OPEN_DOWN = 'down';
exports.OPEN_DOWN = OPEN_DOWN;
var OPEN_UP = 'up';
exports.OPEN_UP = OPEN_UP;
var DAY_SIZE = 39;
exports.DAY_SIZE = DAY_SIZE;
var BLOCKED_MODIFIER = 'blocked';
exports.BLOCKED_MODIFIER = BLOCKED_MODIFIER;
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
exports.WEEKDAYS = WEEKDAYS;
var FANG_WIDTH_PX = 20;
exports.FANG_WIDTH_PX = FANG_WIDTH_PX;
var FANG_HEIGHT_PX = 10;
exports.FANG_HEIGHT_PX = FANG_HEIGHT_PX;
var DEFAULT_VERTICAL_SPACING = 22;
exports.DEFAULT_VERTICAL_SPACING = DEFAULT_VERTICAL_SPACING;
var MODIFIER_KEY_NAMES = new Set(['Shift', 'Control', 'Alt', 'Meta']);
exports.MODIFIER_KEY_NAMES = MODIFIER_KEY_NAMES;

/***/ }),

/***/ "./node_modules/react-dates/lib/defaultPhrases.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarDayPhrases = exports.DayPickerNavigationPhrases = exports.DayPickerKeyboardShortcutsPhrases = exports.DayPickerPhrases = exports.SingleDatePickerInputPhrases = exports.SingleDatePickerPhrases = exports.DateRangePickerInputPhrases = exports.DateRangePickerPhrases = exports["default"] = void 0;
var calendarLabel = 'Calendar';
var roleDescription = 'datepicker';
var closeDatePicker = 'Close';
var focusStartDate = 'Interact with the calendar and add the check-in date for your trip.';
var clearDate = 'Clear Date';
var clearDates = 'Clear Dates';
var jumpToPrevMonth = 'Move backward to switch to the previous month.';
var jumpToNextMonth = 'Move forward to switch to the next month.';
var keyboardShortcuts = 'Keyboard Shortcuts';
var showKeyboardShortcutsPanel = 'Open the keyboard shortcuts panel.';
var hideKeyboardShortcutsPanel = 'Close the shortcuts panel.';
var openThisPanel = 'Open this panel.';
var enterKey = 'Enter key';
var leftArrowRightArrow = 'Right and left arrow keys';
var upArrowDownArrow = 'up and down arrow keys';
var pageUpPageDown = 'page up and page down keys';
var homeEnd = 'Home and end keys';
var escape = 'Escape key';
var questionMark = 'Question mark';
var selectFocusedDate = 'Select the date in focus.';
var moveFocusByOneDay = 'Move backward (left) and forward (right) by one day.';
var moveFocusByOneWeek = 'Move backward (up) and forward (down) by one week.';
var moveFocusByOneMonth = 'Switch months.';
var moveFocustoStartAndEndOfWeek = 'Go to the first or last day of a week.';
var returnFocusToInput = 'Return to the date input field.';
var keyboardForwardNavigationInstructions = 'Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.';
var keyboardBackwardNavigationInstructions = 'Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.';

var chooseAvailableStartDate = function chooseAvailableStartDate(_ref) {
  var date = _ref.date;
  return "Choose ".concat(date, " as your check-in date. It\u2019s available.");
};

var chooseAvailableEndDate = function chooseAvailableEndDate(_ref2) {
  var date = _ref2.date;
  return "Choose ".concat(date, " as your check-out date. It\u2019s available.");
};

var chooseAvailableDate = function chooseAvailableDate(_ref3) {
  var date = _ref3.date;
  return date;
};

var dateIsUnavailable = function dateIsUnavailable(_ref4) {
  var date = _ref4.date;
  return "Not available. ".concat(date);
};

var dateIsSelected = function dateIsSelected(_ref5) {
  var date = _ref5.date;
  return "Selected. ".concat(date);
};

var dateIsSelectedAsStartDate = function dateIsSelectedAsStartDate(_ref6) {
  var date = _ref6.date;
  return "Selected as start date. ".concat(date);
};

var dateIsSelectedAsEndDate = function dateIsSelectedAsEndDate(_ref7) {
  var date = _ref7.date;
  return "Selected as end date. ".concat(date);
};

var _default = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  closeDatePicker: closeDatePicker,
  focusStartDate: focusStartDate,
  clearDate: clearDate,
  clearDates: clearDates,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports["default"] = _default;
var DateRangePickerPhrases = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  closeDatePicker: closeDatePicker,
  clearDates: clearDates,
  focusStartDate: focusStartDate,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.DateRangePickerPhrases = DateRangePickerPhrases;
var DateRangePickerInputPhrases = {
  focusStartDate: focusStartDate,
  clearDates: clearDates,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions
};
exports.DateRangePickerInputPhrases = DateRangePickerInputPhrases;
var SingleDatePickerPhrases = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  closeDatePicker: closeDatePicker,
  clearDate: clearDate,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions,
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected
};
exports.SingleDatePickerPhrases = SingleDatePickerPhrases;
var SingleDatePickerInputPhrases = {
  clearDate: clearDate,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions
};
exports.SingleDatePickerInputPhrases = SingleDatePickerInputPhrases;
var DayPickerPhrases = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.DayPickerPhrases = DayPickerPhrases;
var DayPickerKeyboardShortcutsPhrases = {
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput
};
exports.DayPickerKeyboardShortcutsPhrases = DayPickerKeyboardShortcutsPhrases;
var DayPickerNavigationPhrases = {
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth
};
exports.DayPickerNavigationPhrases = DayPickerNavigationPhrases;
var CalendarDayPhrases = {
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.CalendarDayPhrases = CalendarDayPhrases;

/***/ }),

/***/ "./node_modules/react-dates/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CalendarDay", {
  enumerable: true,
  get: function get() {
    return _CalendarDay["default"];
  }
});
Object.defineProperty(exports, "CalendarMonth", {
  enumerable: true,
  get: function get() {
    return _CalendarMonth["default"];
  }
});
Object.defineProperty(exports, "CalendarMonthGrid", {
  enumerable: true,
  get: function get() {
    return _CalendarMonthGrid["default"];
  }
});
Object.defineProperty(exports, "DateRangePicker", {
  enumerable: true,
  get: function get() {
    return _DateRangePicker["default"];
  }
});
Object.defineProperty(exports, "DateRangePickerInput", {
  enumerable: true,
  get: function get() {
    return _DateRangePickerInput["default"];
  }
});
Object.defineProperty(exports, "DateRangePickerInputController", {
  enumerable: true,
  get: function get() {
    return _DateRangePickerInputController["default"];
  }
});
Object.defineProperty(exports, "DateRangePickerShape", {
  enumerable: true,
  get: function get() {
    return _DateRangePickerShape["default"];
  }
});
Object.defineProperty(exports, "DayPicker", {
  enumerable: true,
  get: function get() {
    return _DayPicker["default"];
  }
});
Object.defineProperty(exports, "DayPickerRangeController", {
  enumerable: true,
  get: function get() {
    return _DayPickerRangeController["default"];
  }
});
Object.defineProperty(exports, "DayPickerSingleDateController", {
  enumerable: true,
  get: function get() {
    return _DayPickerSingleDateController["default"];
  }
});
Object.defineProperty(exports, "SingleDatePicker", {
  enumerable: true,
  get: function get() {
    return _SingleDatePicker["default"];
  }
});
Object.defineProperty(exports, "SingleDatePickerInput", {
  enumerable: true,
  get: function get() {
    return _SingleDatePickerInput["default"];
  }
});
Object.defineProperty(exports, "SingleDatePickerShape", {
  enumerable: true,
  get: function get() {
    return _SingleDatePickerShape["default"];
  }
});
Object.defineProperty(exports, "isInclusivelyAfterDay", {
  enumerable: true,
  get: function get() {
    return _isInclusivelyAfterDay["default"];
  }
});
Object.defineProperty(exports, "isInclusivelyBeforeDay", {
  enumerable: true,
  get: function get() {
    return _isInclusivelyBeforeDay["default"];
  }
});
Object.defineProperty(exports, "isNextDay", {
  enumerable: true,
  get: function get() {
    return _isNextDay["default"];
  }
});
Object.defineProperty(exports, "isSameDay", {
  enumerable: true,
  get: function get() {
    return _isSameDay["default"];
  }
});
Object.defineProperty(exports, "toISODateString", {
  enumerable: true,
  get: function get() {
    return _toISODateString["default"];
  }
});
Object.defineProperty(exports, "toLocalizedDateString", {
  enumerable: true,
  get: function get() {
    return _toLocalizedDateString["default"];
  }
});
Object.defineProperty(exports, "toMomentObject", {
  enumerable: true,
  get: function get() {
    return _toMomentObject["default"];
  }
});

var _CalendarDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarDay.js"));

var _CalendarMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarMonth.js"));

var _CalendarMonthGrid = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/CalendarMonthGrid.js"));

var _DateRangePicker = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateRangePicker.js"));

var _DateRangePickerInput = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateRangePickerInput.js"));

var _DateRangePickerInputController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DateRangePickerInputController.js"));

var _DateRangePickerShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DateRangePickerShape.js"));

var _DayPicker = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPicker.js"));

var _DayPickerRangeController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPickerRangeController.js"));

var _DayPickerSingleDateController = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/DayPickerSingleDateController.js"));

var _SingleDatePicker = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/SingleDatePicker.js"));

var _SingleDatePickerInput = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/components/SingleDatePickerInput.js"));

var _SingleDatePickerShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/SingleDatePickerShape.js"));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js"));

var _isInclusivelyBeforeDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isInclusivelyBeforeDay.js"));

var _isNextDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isNextDay.js"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

var _toISODateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISODateString.js"));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toLocalizedDateString.js"));

var _toMomentObject = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js"));

/***/ }),

/***/ "./node_modules/react-dates/lib/initialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/registerCSSInterfaceWithDefaultTheme.js"));

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/AnchorDirectionShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.ANCHOR_LEFT, _constants.ANCHOR_RIGHT]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/CalendarInfoPositionShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.INFO_POSITION_TOP, _constants.INFO_POSITION_BOTTOM, _constants.INFO_POSITION_BEFORE, _constants.INFO_POSITION_AFTER]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/DateRangePickerShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _FocusedInputShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/FocusedInputShape.js"));

var _IconPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/IconPositionShape.js"));

var _OrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OrientationShape.js"));

var _DisabledShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DisabledShape.js"));

var _AnchorDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/AnchorDirectionShape.js"));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/CalendarInfoPositionShape.js"));

var _NavPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/NavPositionShape.js"));

var _default = {
  // required props for a functional interactive DateRangePicker
  startDate: _reactMomentProptypes["default"].momentObj,
  endDate: _reactMomentProptypes["default"].momentObj,
  onDatesChange: _propTypes["default"].func.isRequired,
  focusedInput: _FocusedInputShape["default"],
  onFocusChange: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func,
  // input related props
  startDateId: _propTypes["default"].string.isRequired,
  startDatePlaceholderText: _propTypes["default"].string,
  startDateOffset: _propTypes["default"].func,
  endDateOffset: _propTypes["default"].func,
  endDateId: _propTypes["default"].string.isRequired,
  endDatePlaceholderText: _propTypes["default"].string,
  startDateAriaLabel: _propTypes["default"].string,
  endDateAriaLabel: _propTypes["default"].string,
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  screenReaderInputMessage: _propTypes["default"].string,
  showClearDates: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  customArrowIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  keepFocusOnInput: _propTypes["default"].bool,
  // calendar presentation and interaction related props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  orientation: _OrientationShape["default"],
  anchorDirection: _AnchorDirectionShape["default"],
  openDirection: _OpenDirectionShape["default"],
  horizontalMargin: _propTypes["default"].number,
  withPortal: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  appendToBody: _propTypes["default"].bool,
  disableScroll: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  firstDayOfWeek: _DayOfWeekShape["default"],
  initialVisibleMonth: _propTypes["default"].func,
  numberOfMonths: _propTypes["default"].number,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDates: _propTypes["default"].bool,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  // navigation related props
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  // day presentation and interaction related props
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  minimumNights: _propTypes["default"].number,
  minDate: _reactMomentProptypes["default"].momentObj,
  maxDate: _reactMomentProptypes["default"].momentObj,
  enableOutsideDays: _propTypes["default"].bool,
  isDayBlocked: _propTypes["default"].func,
  isOutsideRange: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // internationalization props
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DateRangePickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/DayOfWeekShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf(_constants.WEEKDAYS);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/DisabledShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE])]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/FocusedInputShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/IconPositionShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.ICON_BEFORE_POSITION, _constants.ICON_AFTER_POSITION]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/ModifiersShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _default = (0, _airbnbPropTypes.and)([_propTypes["default"].instanceOf(Set), function modifiers(props, propName) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  var propValue = props[propName];
  var firstError;
  (0, _toConsumableArray2["default"])(propValue).some(function (v, i) {
    var _PropTypes$string;

    var fakePropName = "".concat(propName, ": index ").concat(i);
    firstError = (_PropTypes$string = _propTypes["default"].string).isRequired.apply(_PropTypes$string, [(0, _defineProperty2["default"])({}, fakePropName, v), fakePropName].concat(rest));
    return firstError != null;
  });
  return firstError == null ? null : firstError;
}], 'Modifiers (Set of Strings)');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/NavPositionShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.NAV_POSITION_BOTTOM, _constants.NAV_POSITION_TOP]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/OpenDirectionShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.OPEN_DOWN, _constants.OPEN_UP]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/OrientationShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/ScrollableOrientationShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

var _default = _propTypes["default"].oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION, _constants.VERTICAL_SCROLLABLE]);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/shapes/SingleDatePickerShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__("./node_modules/react-moment-proptypes/src/index.js"));

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _defaultPhrases = __webpack_require__("./node_modules/react-dates/lib/defaultPhrases.js");

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrasePropTypes.js"));

var _IconPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/IconPositionShape.js"));

var _OrientationShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OrientationShape.js"));

var _AnchorDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/AnchorDirectionShape.js"));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/OpenDirectionShape.js"));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/DayOfWeekShape.js"));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/CalendarInfoPositionShape.js"));

var _NavPositionShape = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/shapes/NavPositionShape.js"));

var _default = {
  // required props for a functional interactive SingleDatePicker
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func.isRequired,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func.isRequired,
  // input related props
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  screenReaderInputMessage: _propTypes["default"].string,
  showClearDate: _propTypes["default"].bool,
  customCloseIcon: _propTypes["default"].node,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  keepFocusOnInput: _propTypes["default"].bool,
  // calendar presentation and interaction related props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  orientation: _OrientationShape["default"],
  anchorDirection: _AnchorDirectionShape["default"],
  openDirection: _OpenDirectionShape["default"],
  horizontalMargin: _propTypes["default"].number,
  withPortal: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  appendToBody: _propTypes["default"].bool,
  disableScroll: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  firstDayOfWeek: _DayOfWeekShape["default"],
  numberOfMonths: _propTypes["default"].number,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDate: _propTypes["default"].bool,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  // navigation related props
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  // day presentation and interaction related props
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  enableOutsideDays: _propTypes["default"].bool,
  isDayBlocked: _propTypes["default"].func,
  isOutsideRange: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // internationalization props
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/theme/DefaultTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var core = {
  white: '#fff',
  gray: '#484848',
  grayLight: '#82888a',
  grayLighter: '#cacccd',
  grayLightest: '#f2f2f2',
  borderMedium: '#c4c4c4',
  border: '#dbdbdb',
  borderLight: '#e4e7e7',
  borderLighter: '#eceeee',
  borderBright: '#f4f5f5',
  primary: '#00a699',
  primaryShade_1: '#33dacd',
  primaryShade_2: '#66e2da',
  primaryShade_3: '#80e8e0',
  primaryShade_4: '#b2f1ec',
  primary_dark: '#008489',
  secondary: '#007a87',
  yellow: '#ffe8bc',
  yellow_dark: '#ffce71'
};
var _default = {
  reactDates: {
    zIndex: 0,
    border: {
      input: {
        border: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: '2px solid transparent',
        borderLeft: 0,
        outlineFocused: 0,
        borderFocused: 0,
        borderTopFocused: 0,
        borderLeftFocused: 0,
        borderBottomFocused: "2px solid ".concat(core.primary_dark),
        borderRightFocused: 0,
        borderRadius: 0
      },
      pickerInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2
      }
    },
    color: {
      core: core,
      disabled: core.grayLightest,
      background: core.white,
      backgroundDark: '#f2f2f2',
      backgroundFocused: core.white,
      border: 'rgb(219, 219, 219)',
      text: core.gray,
      textDisabled: core.border,
      textFocused: '#007a87',
      placeholderText: '#757575',
      outside: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      highlighted: {
        backgroundColor: core.yellow,
        backgroundColor_active: core.yellow_dark,
        backgroundColor_hover: core.yellow_dark,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      minimumNights: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLighter,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      },
      hoveredSpan: {
        backgroundColor: core.primaryShade_4,
        backgroundColor_active: core.primaryShade_3,
        backgroundColor_hover: core.primaryShade_4,
        borderColor: core.primaryShade_3,
        borderColor_active: core.primaryShade_3,
        borderColor_hover: core.primaryShade_3,
        color: core.secondary,
        color_active: core.secondary,
        color_hover: core.secondary
      },
      selectedSpan: {
        backgroundColor: core.primaryShade_2,
        backgroundColor_active: core.primaryShade_1,
        backgroundColor_hover: core.primaryShade_1,
        borderColor: core.primaryShade_1,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      selected: {
        backgroundColor: core.primary,
        backgroundColor_active: core.primary,
        backgroundColor_hover: core.primary,
        borderColor: core.primary,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      blocked_calendar: {
        backgroundColor: core.grayLighter,
        backgroundColor_active: core.grayLighter,
        backgroundColor_hover: core.grayLighter,
        borderColor: core.grayLighter,
        borderColor_active: core.grayLighter,
        borderColor_hover: core.grayLighter,
        color: core.grayLight,
        color_active: core.grayLight,
        color_hover: core.grayLight
      },
      blocked_out_of_range: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLight,
        borderColor_active: core.borderLight,
        borderColor_hover: core.borderLight,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      }
    },
    spacing: {
      dayPickerHorizontalPadding: 9,
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      displayTextPaddingVertical: undefined,
      displayTextPaddingTop: 11,
      displayTextPaddingBottom: 9,
      displayTextPaddingHorizontal: undefined,
      displayTextPaddingLeft: 11,
      displayTextPaddingRight: 11,
      displayTextPaddingVertical_small: undefined,
      displayTextPaddingTop_small: 7,
      displayTextPaddingBottom_small: 5,
      displayTextPaddingHorizontal_small: undefined,
      displayTextPaddingLeft_small: 7,
      displayTextPaddingRight_small: 7
    },
    sizing: {
      inputWidth: 130,
      inputWidth_small: 97,
      arrowWidth: 24
    },
    noScrollBarOnVerticalScrollable: false,
    font: {
      size: 14,
      captionSize: 18,
      input: {
        size: 19,
        weight: 200,
        lineHeight: '24px',
        size_small: 15,
        lineHeight_small: '18px',
        letterSpacing_small: '0.2px',
        styleDisabled: 'italic'
      }
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/calculateDimension.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = calculateDimension;

function calculateDimension(el, axis) {
  var borderBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var withMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!el) {
    return 0;
  }

  var axisStart = axis === 'width' ? 'Left' : 'Top';
  var axisEnd = axis === 'width' ? 'Right' : 'Bottom'; // Only read styles if we need to

  var style = !borderBox || withMargin ? window.getComputedStyle(el) : null; // Offset includes border and padding

  var offsetWidth = el.offsetWidth,
      offsetHeight = el.offsetHeight;
  var size = axis === 'width' ? offsetWidth : offsetHeight; // Get the inner size

  if (!borderBox) {
    size -= parseFloat(style["padding".concat(axisStart)]) + parseFloat(style["padding".concat(axisEnd)]) + parseFloat(style["border".concat(axisStart, "Width")]) + parseFloat(style["border".concat(axisEnd, "Width")]);
  } // Apply margin


  if (withMargin) {
    size += parseFloat(style["margin".concat(axisStart)]) + parseFloat(style["margin".concat(axisEnd)]);
  }

  return size;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/disableScroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollParent = getScrollParent;
exports.getScrollAncestorsOverflowY = getScrollAncestorsOverflowY;
exports["default"] = disableScroll;

var getScrollingRoot = function getScrollingRoot() {
  return document.scrollingElement || document.documentElement;
};
/**
 * Recursively finds the scroll parent of a node. The scroll parrent of a node
 * is the closest node that is scrollable. A node is scrollable if:
 *  - it is allowed to scroll via CSS ('overflow-y' not visible or hidden);
 *  - and its children/content are "bigger" than the node's box height.
 *
 * The root of the document always scrolls by default.
 *
 * @param {HTMLElement} node Any DOM element.
 * @return {HTMLElement} The scroll parent element.
 */


function getScrollParent(node) {
  var parent = node.parentElement;
  if (parent == null) return getScrollingRoot();

  var _window$getComputedSt = window.getComputedStyle(parent),
      overflowY = _window$getComputedSt.overflowY;

  var canScroll = overflowY !== 'visible' && overflowY !== 'hidden';

  if (canScroll && parent.scrollHeight > parent.clientHeight) {
    return parent;
  }

  return getScrollParent(parent);
}
/**
 * Recursively traverses the tree upwards from the given node, capturing all
 * ancestor nodes that scroll along with their current 'overflow-y' CSS
 * property.
 *
 * @param {HTMLElement} node Any DOM element.
 * @param {Map<HTMLElement,string>} [acc] Accumulator map.
 * @return {Map<HTMLElement,string>} Map of ancestors with their 'overflow-y' value.
 */


function getScrollAncestorsOverflowY(node) {
  var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
  var scrollingRoot = getScrollingRoot();
  var scrollParent = getScrollParent(node);
  acc.set(scrollParent, scrollParent.style.overflowY);
  if (scrollParent === scrollingRoot) return acc;
  return getScrollAncestorsOverflowY(scrollParent, acc);
}
/**
 * Disabling the scroll on a node involves finding all the scrollable ancestors
 * and set their 'overflow-y' CSS property to 'hidden'. When all ancestors have
 * 'overflow-y: hidden' (up to the document element) there is no scroll
 * container, thus all the scroll outside of the node is disabled. In order to
 * enable scroll again, we store the previous value of the 'overflow-y' for
 * every ancestor in a closure and reset it back.
 *
 * @param {HTMLElement} node Any DOM element.
 */


function disableScroll(node) {
  var scrollAncestorsOverflowY = getScrollAncestorsOverflowY(node);

  var toggle = function toggle(on) {
    return scrollAncestorsOverflowY.forEach(function (overflowY, ancestor) {
      ancestor.style.setProperty('overflow-y', on ? 'hidden' : overflowY);
    });
  };

  toggle(true);
  return function () {
    return toggle(false);
  };
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getActiveElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getActiveElement;

function getActiveElement() {
  return typeof document !== 'undefined' && document.activeElement;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getCalendarDaySettings.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarDaySettings;

var _getPhrase = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPhrase.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function isSelected(modifiers) {
  return modifiers.has('selected') || modifiers.has('selected-span') || modifiers.has('selected-start') || modifiers.has('selected-end');
}

function shouldUseDefaultCursor(modifiers) {
  return modifiers.has('blocked-minimum-nights') || modifiers.has('blocked-calendar') || modifiers.has('blocked-out-of-range');
}

function isHoveredSpan(modifiers) {
  if (isSelected(modifiers)) return false;
  return modifiers.has('hovered-span') || modifiers.has('after-hovered-start') || modifiers.has('before-hovered-end');
}

function getAriaLabel(phrases, modifiers, day, ariaLabelFormat) {
  var chooseAvailableDate = phrases.chooseAvailableDate,
      dateIsUnavailable = phrases.dateIsUnavailable,
      dateIsSelected = phrases.dateIsSelected,
      dateIsSelectedAsStartDate = phrases.dateIsSelectedAsStartDate,
      dateIsSelectedAsEndDate = phrases.dateIsSelectedAsEndDate;
  var formattedDate = {
    date: day.format(ariaLabelFormat)
  };

  if (modifiers.has('selected-start') && dateIsSelectedAsStartDate) {
    return (0, _getPhrase["default"])(dateIsSelectedAsStartDate, formattedDate);
  }

  if (modifiers.has('selected-end') && dateIsSelectedAsEndDate) {
    return (0, _getPhrase["default"])(dateIsSelectedAsEndDate, formattedDate);
  }

  if (isSelected(modifiers) && dateIsSelected) {
    return (0, _getPhrase["default"])(dateIsSelected, formattedDate);
  }

  if (modifiers.has(_constants.BLOCKED_MODIFIER)) {
    return (0, _getPhrase["default"])(dateIsUnavailable, formattedDate);
  }

  return (0, _getPhrase["default"])(chooseAvailableDate, formattedDate);
}

function getCalendarDaySettings(day, ariaLabelFormat, daySize, modifiers, phrases) {
  return {
    ariaLabel: getAriaLabel(phrases, modifiers, day, ariaLabelFormat),
    hoveredSpan: isHoveredSpan(modifiers),
    isOutsideRange: modifiers.has('blocked-out-of-range'),
    selected: isSelected(modifiers),
    useDefaultCursor: shouldUseDefaultCursor(modifiers),
    daySizeStyles: {
      width: daySize,
      height: daySize - 1
    }
  };
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getCalendarMonthWeeks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarMonthWeeks;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function getCalendarMonthWeeks(month, enableOutsideDays) {
  var firstDayOfWeek = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _moment["default"].localeData().firstDayOfWeek();

  if (!_moment["default"].isMoment(month) || !month.isValid()) {
    throw new TypeError('`month` must be a valid moment object');
  }

  if (_constants.WEEKDAYS.indexOf(firstDayOfWeek) === -1) {
    throw new TypeError('`firstDayOfWeek` must be an integer between 0 and 6');
  } // set utc offset to get correct dates in future (when timezone changes)


  var firstOfMonth = month.clone().startOf('month').hour(12);
  var lastOfMonth = month.clone().endOf('month').hour(12); // calculate the exact first and last days to fill the entire matrix
  // (considering days outside month)

  var prevDays = (firstOfMonth.day() + 7 - firstDayOfWeek) % 7;
  var nextDays = (firstDayOfWeek + 6 - lastOfMonth.day()) % 7;
  var firstDay = firstOfMonth.clone().subtract(prevDays, 'day');
  var lastDay = lastOfMonth.clone().add(nextDays, 'day');
  var totalDays = lastDay.diff(firstDay, 'days') + 1;
  var currentDay = firstDay.clone();
  var weeksInMonth = [];

  for (var i = 0; i < totalDays; i += 1) {
    if (i % 7 === 0) {
      weeksInMonth.push([]);
    }

    var day = null;

    if (i >= prevDays && i < totalDays - nextDays || enableOutsideDays) {
      day = currentDay.clone();
    }

    weeksInMonth[weeksInMonth.length - 1].push(day);
    currentDay.add(1, 'day');
  }

  return weeksInMonth;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getCalendarMonthWidth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarMonthWidth;

function getCalendarMonthWidth(daySize) {
  var calendarMonthPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return 7 * daySize + 2 * calendarMonthPadding + 1;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getDetachedContainerStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDetachedContainerStyles;

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

/**
 * Calculate and return a CSS transform style to position a detached element
 * next to a reference element. The open and anchor direction indicate wether
 * it should be positioned above/below and/or to the left/right of the
 * reference element.
 *
 * Assuming r(0,0), r(1,1), d(0,0), d(1,1) for the bottom-left and top-right
 * corners of the reference and detached elements, respectively:
 *  - openDirection = DOWN, anchorDirection = LEFT => d(0,1) == r(0,1)
 *  - openDirection = UP, anchorDirection = LEFT => d(0,0) == r(0,0)
 *  - openDirection = DOWN, anchorDirection = RIGHT => d(1,1) == r(1,1)
 *  - openDirection = UP, anchorDirection = RIGHT => d(1,0) == r(1,0)
 *
 * By using a CSS transform, we allow to further position it using
 * top/bottom CSS properties for the anchor gutter.
 *
 * @param {string} openDirection The vertical positioning of the popup
 * @param {string} anchorDirection The horizontal position of the popup
 * @param {HTMLElement} referenceEl The reference element
 */
function getDetachedContainerStyles(openDirection, anchorDirection, referenceEl) {
  var referenceRect = referenceEl.getBoundingClientRect();
  var offsetX = referenceRect.left;
  var offsetY = referenceRect.top;

  if (openDirection === _constants.OPEN_UP) {
    offsetY = -(window.innerHeight - referenceRect.bottom);
  }

  if (anchorDirection === _constants.ANCHOR_RIGHT) {
    offsetX = -(window.innerWidth - referenceRect.right);
  }

  return {
    transform: "translate3d(".concat(Math.round(offsetX), "px, ").concat(Math.round(offsetY), "px, 0)")
  };
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getInputHeight.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getInputHeight;

/* eslint-disable camelcase */
function getPadding(vertical, top, bottom) {
  var isTopDefined = typeof top === 'number';
  var isBottomDefined = typeof bottom === 'number';
  var isVerticalDefined = typeof vertical === 'number';

  if (isTopDefined && isBottomDefined) {
    return top + bottom;
  }

  if (isTopDefined && isVerticalDefined) {
    return top + vertical;
  }

  if (isTopDefined) {
    return top;
  }

  if (isBottomDefined && isVerticalDefined) {
    return bottom + vertical;
  }

  if (isBottomDefined) {
    return bottom;
  }

  if (isVerticalDefined) {
    return 2 * vertical;
  }

  return 0;
}

function getInputHeight(_ref, small) {
  var _ref$font$input = _ref.font.input,
      lineHeight = _ref$font$input.lineHeight,
      lineHeight_small = _ref$font$input.lineHeight_small,
      _ref$spacing = _ref.spacing,
      inputPadding = _ref$spacing.inputPadding,
      displayTextPaddingVertical = _ref$spacing.displayTextPaddingVertical,
      displayTextPaddingTop = _ref$spacing.displayTextPaddingTop,
      displayTextPaddingBottom = _ref$spacing.displayTextPaddingBottom,
      displayTextPaddingVertical_small = _ref$spacing.displayTextPaddingVertical_small,
      displayTextPaddingTop_small = _ref$spacing.displayTextPaddingTop_small,
      displayTextPaddingBottom_small = _ref$spacing.displayTextPaddingBottom_small;
  var calcLineHeight = small ? lineHeight_small : lineHeight;
  var padding = small ? getPadding(displayTextPaddingVertical_small, displayTextPaddingTop_small, displayTextPaddingBottom_small) : getPadding(displayTextPaddingVertical, displayTextPaddingTop, displayTextPaddingBottom);
  return parseInt(calcLineHeight, 10) + 2 * inputPadding + padding;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getNumberOfCalendarMonthWeeks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNumberOfCalendarMonthWeeks;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

function getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek) {
  var weekDayDiff = firstDayOfMonth.day() - firstDayOfWeek;
  return (weekDayDiff + 7) % 7;
}

function getNumberOfCalendarMonthWeeks(month) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _moment["default"].localeData().firstDayOfWeek();
  var firstDayOfMonth = month.clone().startOf('month');
  var numBlankDays = getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek);
  return Math.ceil((numBlankDays + month.daysInMonth()) / 7);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getPhrase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPhrase;

function getPhrase(phrase, args) {
  if (typeof phrase === 'string') return phrase;

  if (typeof phrase === 'function') {
    return phrase(args);
  }

  return '';
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getPhrasePropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPhrasePropTypes;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getPhrasePropTypes(defaultPhrases) {
  return Object.keys(defaultPhrases).reduce(function (phrases, key) {
    return _objectSpread({}, phrases, (0, _defineProperty2["default"])({}, key, _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].node])));
  }, {});
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getPooledMoment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPooledMoment;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var momentPool = new Map();

function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, (0, _moment["default"])(dayString));
  }

  return momentPool.get(dayString);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getPreviousMonthMemoLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPreviousMonthMemoLast;
var getPreviousMonthMemoKey;
var getPreviousMonthMemoValue;

function getPreviousMonthMemoLast(month) {
  if (month !== getPreviousMonthMemoKey) {
    getPreviousMonthMemoKey = month;
    getPreviousMonthMemoValue = month.clone().subtract(1, 'month');
  }

  return getPreviousMonthMemoValue;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getResponsiveContainerStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getResponsiveContainerStyles;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function getResponsiveContainerStyles(anchorDirection, currentOffset, containerEdge, margin) {
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  var calculatedOffset = anchorDirection === _constants.ANCHOR_LEFT ? windowWidth - containerEdge : containerEdge;
  var calculatedMargin = margin || 0;
  return (0, _defineProperty2["default"])({}, anchorDirection, Math.min(currentOffset + calculatedOffset - calculatedMargin, 0));
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getSelectedDateOffset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSelectedDateOffset;

var defaultModifier = function defaultModifier(day) {
  return day;
};

function getSelectedDateOffset(fn, day) {
  var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultModifier;
  if (!fn) return day;
  return modifier(fn(day.clone()));
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getTransformStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTransformStyles;

function getTransformStyles(transformValue) {
  return {
    transform: transformValue,
    msTransform: transformValue,
    MozTransform: transformValue,
    WebkitTransform: transformValue
  };
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/getVisibleDays.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getVisibleDays;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _toISOMonthString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISOMonthString.js"));

function getVisibleDays(month, numberOfMonths, enableOutsideDays, withoutTransitionMonths) {
  if (!_moment["default"].isMoment(month)) return {};
  var visibleDaysByMonth = {};
  var currentMonth = withoutTransitionMonths ? month.clone() : month.clone().subtract(1, 'month');

  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    var visibleDays = []; // set utc offset to get correct dates in future (when timezone changes)

    var baseDate = currentMonth.clone();
    var firstOfMonth = baseDate.clone().startOf('month').hour(12);
    var lastOfMonth = baseDate.clone().endOf('month').hour(12);
    var currentDay = firstOfMonth.clone(); // days belonging to the previous month

    if (enableOutsideDays) {
      for (var j = 0; j < currentDay.weekday(); j += 1) {
        var prevDay = currentDay.clone().subtract(j + 1, 'day');
        visibleDays.unshift(prevDay);
      }
    }

    while (currentDay < lastOfMonth) {
      visibleDays.push(currentDay.clone());
      currentDay.add(1, 'day');
    }

    if (enableOutsideDays) {
      // weekday() returns the index of the day of the week according to the locale
      // this means if the week starts on Monday, weekday() will return 0 for a Monday date, not 1
      if (currentDay.weekday() !== 0) {
        // days belonging to the next month
        for (var k = currentDay.weekday(), count = 0; k < 7; k += 1, count += 1) {
          var nextDay = currentDay.clone().add(count, 'day');
          visibleDays.push(nextDay);
        }
      }
    }

    visibleDaysByMonth[(0, _toISOMonthString["default"])(currentMonth)] = visibleDays;
    currentMonth = currentMonth.clone().add(1, 'month');
  }

  return visibleDaysByMonth;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isAfterDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isAfterDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isBeforeDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isBeforeDay.js"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

function isAfterDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b) && !(0, _isSameDay["default"])(a, b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isBeforeDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isBeforeDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

function isBeforeDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var aYear = a.year();
  var aMonth = a.month();
  var bYear = b.year();
  var bMonth = b.month();
  var isSameYear = aYear === bYear;
  var isSameMonth = aMonth === bMonth;
  if (isSameYear && isSameMonth) return a.date() < b.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isDayVisible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDayVisible;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isBeforeDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isBeforeDay.js"));

var _isAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isAfterDay.js"));

var _toISOMonthString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISOMonthString.js"));

var startCacheOutsideDays = new Map();
var endCacheOutsideDays = new Map();
var startCacheInsideDays = new Map();
var endCacheInsideDays = new Map();

function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  if (!_moment["default"].isMoment(day)) return false; // Cloning is a little expensive, so we want to do it as little as possible.

  var startKey = (0, _toISOMonthString["default"])(month); // eslint-disable-next-line prefer-template

  var endKey = startKey + '+' + numberOfMonths;

  if (enableOutsideDays) {
    if (!startCacheOutsideDays.has(startKey)) {
      startCacheOutsideDays.set(startKey, month.clone().startOf('month').startOf('week'));
    }

    if ((0, _isBeforeDay["default"])(day, startCacheOutsideDays.get(startKey))) return false;

    if (!endCacheOutsideDays.has(endKey)) {
      endCacheOutsideDays.set(endKey, month.clone().endOf('week').add(numberOfMonths - 1, 'months').endOf('month').endOf('week'));
    }

    return !(0, _isAfterDay["default"])(day, endCacheOutsideDays.get(endKey));
  } // !enableOutsideDays


  if (!startCacheInsideDays.has(startKey)) {
    startCacheInsideDays.set(startKey, month.clone().startOf('month'));
  }

  if ((0, _isBeforeDay["default"])(day, startCacheInsideDays.get(startKey))) return false;

  if (!endCacheInsideDays.has(endKey)) {
    endCacheInsideDays.set(endKey, month.clone().add(numberOfMonths - 1, 'months').endOf('month'));
  }

  return !(0, _isAfterDay["default"])(day, endCacheInsideDays.get(endKey));
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isInclusivelyAfterDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInclusivelyAfterDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isBeforeDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isBeforeDay.js"));

function isInclusivelyAfterDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isInclusivelyBeforeDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInclusivelyBeforeDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isAfterDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isAfterDay.js"));

function isInclusivelyBeforeDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isAfterDay["default"])(a, b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isNextDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNextDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

function isNextDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var nextDay = (0, _moment["default"])(a).add(1, 'day');
  return (0, _isSameDay["default"])(nextDay, b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isNextMonth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNextMonth;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isSameMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameMonth.js"));

function isNextMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().add(1, 'month'), b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isPrevMonth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPrevMonth;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isSameMonth = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameMonth.js"));

function isPrevMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().subtract(1, 'month'), b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isPreviousDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPreviousDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _isSameDay = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isSameDay.js"));

function isPreviousDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var dayBefore = (0, _moment["default"])(a).subtract(1, 'day');
  return (0, _isSameDay["default"])(dayBefore, b);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isSameDay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameDay;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

function isSameDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.date() === b.date() && a.month() === b.month() && a.year() === b.year();
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isSameMonth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameMonth;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

function isSameMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.month() === b.month() && a.year() === b.year();
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/isTransitionEndSupported.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isTransitionEndSupported;

function isTransitionEndSupported() {
  return !!(typeof window !== 'undefined' && 'TransitionEvent' in window);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/modifiers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addModifier = addModifier;
exports.deleteModifier = deleteModifier;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _isDayVisible = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/isDayVisible.js"));

var _toISODateString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISODateString.js"));

var _toISOMonthString = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toISOMonthString.js"));

var _getPreviousMonthMemoLast = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/getPreviousMonthMemoLast.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function addModifier(updatedDays, day, modifier, props, state) {
  var numberOfVisibleMonths = props.numberOfMonths,
      enableOutsideDays = props.enableOutsideDays,
      orientation = props.orientation;
  var firstVisibleMonth = state.currentMonth,
      visibleDays = state.visibleDays;
  var currentMonth = firstVisibleMonth;
  var numberOfMonths = numberOfVisibleMonths;

  if (orientation === _constants.VERTICAL_SCROLLABLE) {
    numberOfMonths = Object.keys(visibleDays).length;
  } else {
    currentMonth = (0, _getPreviousMonthMemoLast["default"])(currentMonth);
    numberOfMonths += 2;
  }

  if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
    return updatedDays;
  }

  var iso = (0, _toISODateString["default"])(day);

  var updatedDaysAfterAddition = _objectSpread({}, updatedDays);

  if (enableOutsideDays) {
    var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
      return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
    });
    updatedDaysAfterAddition = monthsToUpdate.reduce(function (acc, monthIso) {
      var month = updatedDays[monthIso] || visibleDays[monthIso];

      if (!month[iso] || !month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers.add(modifier);
        acc[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
      }

      return acc;
    }, updatedDaysAfterAddition);
  } else {
    var monthIso = (0, _toISOMonthString["default"])(day);
    var month = updatedDays[monthIso] || visibleDays[monthIso] || {};

    if (!month[iso] || !month[iso].has(modifier)) {
      var modifiers = new Set(month[iso]);
      modifiers.add(modifier);
      updatedDaysAfterAddition[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
    }
  }

  return updatedDaysAfterAddition;
}

function deleteModifier(updatedDays, day, modifier, props, state) {
  var numberOfVisibleMonths = props.numberOfMonths,
      enableOutsideDays = props.enableOutsideDays,
      orientation = props.orientation;
  var firstVisibleMonth = state.currentMonth,
      visibleDays = state.visibleDays;
  var currentMonth = firstVisibleMonth;
  var numberOfMonths = numberOfVisibleMonths;

  if (orientation === _constants.VERTICAL_SCROLLABLE) {
    numberOfMonths = Object.keys(visibleDays).length;
  } else {
    currentMonth = (0, _getPreviousMonthMemoLast["default"])(currentMonth);
    numberOfMonths += 2;
  }

  if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
    return updatedDays;
  }

  var iso = (0, _toISODateString["default"])(day);

  var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);

  if (enableOutsideDays) {
    var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
      return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
    });
    updatedDaysAfterDeletion = monthsToUpdate.reduce(function (acc, monthIso) {
      var month = updatedDays[monthIso] || visibleDays[monthIso];

      if (month[iso] && month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers["delete"](modifier);
        acc[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
      }

      return acc;
    }, updatedDaysAfterDeletion);
  } else {
    var monthIso = (0, _toISOMonthString["default"])(day);
    var month = updatedDays[monthIso] || visibleDays[monthIso] || {};

    if (month[iso] && month[iso].has(modifier)) {
      var modifiers = new Set(month[iso]);
      modifiers["delete"](modifier);
      updatedDaysAfterDeletion[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
    }
  }

  return updatedDaysAfterDeletion;
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/noflip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = noflip;
var NOFLIP = '/* @noflip */'; // Appends a noflip comment to a style rule in order to prevent it from being automatically
// flipped in RTL contexts. This should be used only in situations where the style must remain
// unflipped regardless of direction context. See: https://github.com/kentcdodds/rtl-css-js#usage

function noflip(value) {
  if (typeof value === 'number') return "".concat(value, "px ").concat(NOFLIP);
  if (typeof value === 'string') return "".concat(value, " ").concat(NOFLIP);
  throw new TypeError('noflip expects a string or a number');
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/registerCSSInterfaceWithDefaultTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__("./node_modules/react-with-styles-interface-css/index.js"));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/registerInterfaceWithDefaultTheme.js"));

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/registerInterfaceWithDefaultTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__("./node_modules/react-with-styles/lib/ThemedStyleSheet.js"));

var _DefaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/theme/DefaultTheme.js"));

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/toISODateString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toISODateString;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _toMomentObject = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js"));

function toISODateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null; // Template strings compiled in strict mode uses concat, which is slow. Since
  // this code is in a hot path and we want it to be as fast as possible, we
  // want to use old-fashioned +.
  // eslint-disable-next-line prefer-template

  return dateObj.year() + '-' + String(dateObj.month() + 1).padStart(2, '0') + '-' + String(dateObj.date()).padStart(2, '0');
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/toISOMonthString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toISOMonthString;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _toMomentObject = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js"));

function toISOMonthString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null; // Template strings compiled in strict mode uses concat, which is slow. Since
  // this code is in a hot path and we want it to be as fast as possible, we
  // want to use old-fashioned +.
  // eslint-disable-next-line prefer-template

  return dateObj.year() + '-' + String(dateObj.month() + 1).padStart(2, '0');
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/toLocalizedDateString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toLocalizedDateString;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _toMomentObject = _interopRequireDefault(__webpack_require__("./node_modules/react-dates/lib/utils/toMomentObject.js"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function toLocalizedDateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.DISPLAY_FORMAT);
}

/***/ }),

/***/ "./node_modules/react-dates/lib/utils/toMomentObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toMomentObject;

var _moment = _interopRequireDefault(__webpack_require__("moment"));

var _constants = __webpack_require__("./node_modules/react-dates/lib/constants.js");

function toMomentObject(dateString, customFormat) {
  var dateFormats = customFormat ? [customFormat, _constants.DISPLAY_FORMAT, _constants.ISO_FORMAT] : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];
  var date = (0, _moment["default"])(dateString, dateFormats, true);
  return date.isValid() ? date.hour(12) : null;
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-moment-proptypes/src/core.js":
/***/ (function(module, exports) {

var messages = {
  invalidPredicate: '`predicate` must be a function',
  invalidPropValidator: '`propValidator` must be a function',
  requiredCore: 'is marked as required',
  invalidTypeCore: 'Invalid input type',
  predicateFailureCore: 'Failed to succeed with predicate',
  anonymousMessage: '<<anonymous>>',
  baseInvalidMessage: 'Invalid ',
};

function constructPropValidatorVariations(propValidator) {
  if (typeof propValidator !== 'function') {
    throw new Error(messages.invalidPropValidator);
  }

  var requiredPropValidator = propValidator.bind(null, false, null);
  requiredPropValidator.isRequired = propValidator.bind(null, true, null);

  requiredPropValidator.withPredicate = function predicateApplication(predicate) {
    if (typeof predicate !== 'function') {
      throw new Error(messages.invalidPredicate);
    }
    var basePropValidator = propValidator.bind(null, false, predicate);
    basePropValidator.isRequired = propValidator.bind(null, true, predicate);
    return basePropValidator;
  };

  return requiredPropValidator;
}

function createInvalidRequiredErrorMessage(propName, componentName, value) {
  return new Error(
    'The prop `' + propName + '` ' + messages.requiredCore +
    ' in `' + componentName + '`, but its value is `' + value + '`.'
  );
}

var independentGuardianValue = -1;

function preValidationRequireCheck(isRequired, componentName, propFullName, propValue) {
  var isPropValueUndefined = typeof propValue === 'undefined';
  var isPropValueNull = propValue === null;

  if (isRequired) {
    if (isPropValueUndefined) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'undefined');
    } else if (isPropValueNull) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'null');
    }
  }

  if (isPropValueUndefined || isPropValueNull) {
    return null;
  }

  return independentGuardianValue;
}

function createMomentChecker(type, typeValidator, validator, momentType) {

  function propValidator(
    isRequired, // Bound parameter to indicate with the propType is required
    predicate, // Bound parameter to allow user to add dynamic validation
    props,
    propName,
    componentName,
    location,
    propFullName
  ) {
    var propValue = props[ propName ];
    var propType = typeof propValue;

    componentName = componentName || messages.anonymousMessage;
    propFullName = propFullName || propName;

    var preValidationRequireCheckValue = preValidationRequireCheck(
      isRequired, componentName, propFullName, propValue
    );

    if (preValidationRequireCheckValue !== independentGuardianValue) {
      return preValidationRequireCheckValue;
    }

    if (typeValidator && !typeValidator(propValue)) {
      return new Error(
        messages.invalidTypeCore + ': `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + type + '`.'
      );
    }

    if (!validator(propValue)) {
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + momentType + '`.'
      );
    }

    if (predicate && !predicate(propValue)) {
      var predicateName = predicate.name || messages.anonymousMessage;
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`. ' + messages.predicateFailureCore + ' `' +
        predicateName + '`.'
      );
    }

    return null;

  }

  return constructPropValidatorVariations(propValidator);

}

module.exports = {
  constructPropValidatorVariations: constructPropValidatorVariations,
  createMomentChecker: createMomentChecker,
  messages: messages,
};


/***/ }),

/***/ "./node_modules/react-moment-proptypes/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var moment = __webpack_require__("moment");
var momentValidationWrapper = __webpack_require__("./node_modules/react-moment-proptypes/src/moment-validation-wrapper.js");
var core = __webpack_require__("./node_modules/react-moment-proptypes/src/core.js");

module.exports = {

  momentObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(value);
    },
    'Moment'
  ),

  momentString : core.createMomentChecker(
    'string',
    function(str) {
      return typeof str === 'string';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(moment(value));
    },
    'Moment'
  ),

  momentDurationObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return moment.isDuration(value);
    },
    'Duration'
  ),

};


/***/ }),

/***/ "./node_modules/react-moment-proptypes/src/moment-validation-wrapper.js":
/***/ (function(module, exports, __webpack_require__) {

var moment = __webpack_require__("moment");

function isValidMoment(testMoment) {
  if (typeof moment.isMoment === 'function' && !moment.isMoment(testMoment)) {
    return false;
  }

  /* istanbul ignore else  */
  if (typeof testMoment.isValid === 'function') {
    // moment 1.7.0+
    return testMoment.isValid();
  }

  /* istanbul ignore next */
  return !isNaN(testMoment);
}

module.exports = {
  isValidMoment : isValidMoment,
};


/***/ }),

/***/ "./node_modules/react-outside-click-handler/build/OutsideClickHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__("./node_modules/airbnb-prop-types/index.js");

var _consolidatedEvents = __webpack_require__("./node_modules/consolidated-events/lib/index.esm.js");

var _object = __webpack_require__("./node_modules/object.values/index.js");

var _object2 = _interopRequireDefault(_object);

var _document = __webpack_require__("./node_modules/document.contains/index.js");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents'
};

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes2['default'].node.isRequired,
  onOutsideClick: _propTypes2['default'].func.isRequired,
  disabled: _propTypes2['default'].bool,
  useCapture: _propTypes2['default'].bool,
  display: _propTypes2['default'].oneOf((0, _object2['default'])(DISPLAY))
});

var defaultProps = {
  disabled: false,

  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

var OutsideClickHandler = function (_React$Component) {
  _inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler() {
    var _ref;

    _classCallCheck(this, OutsideClickHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref, [this].concat(args)));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.setChildNodeRef = _this.setChildNodeRef.bind(_this);
    return _this;
  }

  _createClass(OutsideClickHandler, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            disabled = _props.disabled,
            useCapture = _props.useCapture;


        if (!disabled) this.addMouseDownEventListener(useCapture);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(_ref2) {
        var prevDisabled = _ref2.disabled;
        var _props2 = this.props,
            disabled = _props2.disabled,
            useCapture = _props2.useCapture;

        if (prevDisabled !== disabled) {
          if (disabled) {
            this.removeEventListeners();
          } else {
            this.addMouseDownEventListener(useCapture);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.removeEventListeners();
      }

      return componentWillUnmount;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseDown',
    value: function () {
      function onMouseDown(e) {
        var useCapture = this.props.useCapture;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (!isDescendantOfRoot) {
          if (this.removeMouseUp) {
            this.removeMouseUp();
            this.removeMouseUp = null;
          }
          this.removeMouseUp = (0, _consolidatedEvents.addEventListener)(document, 'mouseup', this.onMouseUp, { capture: useCapture });
        }
      }

      return onMouseDown;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseUp',
    value: function () {
      function onMouseUp(e) {
        var onOutsideClick = this.props.onOutsideClick;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        if (!isDescendantOfRoot) {
          onOutsideClick(e);
        }
      }

      return onMouseUp;
    }()
  }, {
    key: 'setChildNodeRef',
    value: function () {
      function setChildNodeRef(ref) {
        this.childNode = ref;
      }

      return setChildNodeRef;
    }()
  }, {
    key: 'addMouseDownEventListener',
    value: function () {
      function addMouseDownEventListener(useCapture) {
        this.removeMouseDown = (0, _consolidatedEvents.addEventListener)(document, 'mousedown', this.onMouseDown, { capture: useCapture });
      }

      return addMouseDownEventListener;
    }()
  }, {
    key: 'removeEventListeners',
    value: function () {
      function removeEventListeners() {
        if (this.removeMouseDown) this.removeMouseDown();
        if (this.removeMouseUp) this.removeMouseUp();
      }

      return removeEventListeners;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            children = _props3.children,
            display = _props3.display;


        return _react2['default'].createElement(
          'div',
          {
            ref: this.setChildNodeRef,
            style: display !== DISPLAY.BLOCK && (0, _object2['default'])(DISPLAY).includes(display) ? { display: display } : undefined
          },
          children
        );
      }

      return render;
    }()
  }]);

  return OutsideClickHandler;
}(_react2['default'].Component);

exports['default'] = OutsideClickHandler;


OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-outside-click-handler/index.js":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("./node_modules/react-outside-click-handler/build/OutsideClickHandler.js");


/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeContext", function() { return ManagerReferenceNodeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeSetterContext", function() { return ManagerReferenceNodeSetterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_4__);





var ManagerReferenceNodeContext = create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();
var ManagerReferenceNodeSetterContext = create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "referenceNode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPopper", function() { return InnerPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("popper.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(popper_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-popper/lib/esm/utils.js");










var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      data: undefined,
      placement: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "arrowNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers, {
          arrow: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_7___default.a(referenceElement, popperNode, _this.getOptions());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      // develop only check that modifiers isn't being updated needlessly
      if (true) {
        if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["shallowEqual"])(this.props.modifiers, prevProps.modifiers)) {
          console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
        }
      }

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["unwrapArray"])(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = popper_js__WEBPACK_IMPORTED_MODULE_7___default.a.placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["referenceElement"]);

  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_8__["ManagerReferenceNodeContext"].Consumer, null, function (referenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](InnerPopper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-popper/lib/esm/utils.js");









var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "refHandler", function (node) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(_this.props.innerRef, node);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning__WEBPACK_IMPORTED_MODULE_5___default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["unwrapArray"])(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

function Reference(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_6__["ManagerReferenceNodeSetterContext"].Consumer, null, function (setReferenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InnerReference, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// Public components



 // Public types

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Does a shallow equality check of two objects by comparing the reference
 * equality of each value.
 */

var shallowEqual = function shallowEqual(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (bKeys.length !== aKeys.length) {
    return false;
  }

  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

/***/ }),

/***/ "./node_modules/react-portal/es/LegacyPortal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(this.props.children);
      }

      this.portal = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Portal);


Portal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  node: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

/***/ }),

/***/ "./node_modules/react-portal/es/Portal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-portal/es/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!_utils__WEBPACK_IMPORTED_MODULE_3__["canUseDOM"]) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Portal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/react-portal/es/PortalCompat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-portal/es/Portal.js");
/* harmony import */ var _LegacyPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-portal/es/LegacyPortal.js");





var Portal = void 0;

if (react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.createPortal) {
  Portal = _Portal__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  Portal = _LegacyPortal__WEBPACK_IMPORTED_MODULE_2__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/react-portal/es/PortalWithState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PortalCompat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-portal/es/PortalCompat.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState = function (_React$Component) {
  _inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    _classCallCheck(this, PortalWithState);

    var _this = _possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _PortalCompat__WEBPACK_IMPORTED_MODULE_2__["default"],
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode && (this.portalNode.props.node || this.portalNode.defaultNode);
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PortalWithState.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  closeOnEsc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  closeOnOutsideClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

/* harmony default export */ __webpack_exports__["default"] = (PortalWithState);

/***/ }),

/***/ "./node_modules/react-portal/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PortalCompat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-portal/es/PortalCompat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return _PortalCompat__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PortalWithState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-portal/es/PortalWithState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalWithState", function() { return _PortalWithState__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./node_modules/react-portal/es/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ "./node_modules/react-with-direction/dist/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = exports.CHANNEL = '__direction__';

var DIRECTIONS = exports.DIRECTIONS = {
  LTR: 'ltr',
  RTL: 'rtl'
};

/***/ }),

/***/ "./node_modules/react-with-direction/dist/proptypes/brcast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _propTypes2['default'].shape({
  getState: _propTypes2['default'].func,
  setState: _propTypes2['default'].func,
  subscribe: _propTypes2['default'].func
});

/***/ }),

/***/ "./node_modules/react-with-direction/dist/proptypes/direction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = __webpack_require__("./node_modules/object.values/index.js");

var _object2 = _interopRequireDefault(_object);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__("./node_modules/react-with-direction/dist/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _propTypes2['default'].oneOf((0, _object2['default'])(_constants.DIRECTIONS));

/***/ }),

/***/ "./node_modules/react-with-direction/dist/withDirection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDirectionPropTypes = exports.DIRECTIONS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports['default'] = withDirection;

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _deepmerge = __webpack_require__("./node_modules/deepmerge/dist/cjs.js");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _getComponentName = __webpack_require__("./node_modules/airbnb-prop-types/build/helpers/getComponentName.js");

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _constants = __webpack_require__("./node_modules/react-with-direction/dist/constants.js");

var _brcast = __webpack_require__("./node_modules/react-with-direction/dist/proptypes/brcast.js");

var _brcast2 = _interopRequireDefault(_brcast);

var _direction = __webpack_require__("./node_modules/react-with-direction/dist/proptypes/direction.js");

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable react/forbid-foreign-prop-types */
// This higher-order component consumes a string from React context that is
// provided by the DirectionProvider component.
// We can use this to conditionally switch layout/direction for right-to-left layouts.

var contextTypes = _defineProperty({}, _constants.CHANNEL, _brcast2['default']);

exports.DIRECTIONS = _constants.DIRECTIONS;

// set a default direction so that a component wrapped with this HOC can be
// used even without a DirectionProvider ancestor in its react tree.

var defaultDirection = _constants.DIRECTIONS.LTR;

// export for convenience, in order for components to spread these onto their propTypes
var withDirectionPropTypes = exports.withDirectionPropTypes = {
  direction: _direction2['default'].isRequired
};

function withDirection(WrappedComponent) {
  var WithDirection = function (_React$Component) {
    _inherits(WithDirection, _React$Component);

    function WithDirection(props, context) {
      _classCallCheck(this, WithDirection);

      var _this = _possibleConstructorReturn(this, (WithDirection.__proto__ || Object.getPrototypeOf(WithDirection)).call(this, props, context));

      _this.state = {
        direction: context[_constants.CHANNEL] ? context[_constants.CHANNEL].getState() : defaultDirection
      };
      return _this;
    }

    _createClass(WithDirection, [{
      key: 'componentDidMount',
      value: function () {
        function componentDidMount() {
          var _this2 = this;

          if (this.context[_constants.CHANNEL]) {
            // subscribe to future direction changes
            this.channelUnsubscribe = this.context[_constants.CHANNEL].subscribe(function (direction) {
              _this2.setState({ direction: direction });
            });
          }
        }

        return componentDidMount;
      }()
    }, {
      key: 'componentWillUnmount',
      value: function () {
        function componentWillUnmount() {
          if (this.channelUnsubscribe) {
            this.channelUnsubscribe();
          }
        }

        return componentWillUnmount;
      }()
    }, {
      key: 'render',
      value: function () {
        function render() {
          var direction = this.state.direction;


          return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, {
            direction: direction
          }));
        }

        return render;
      }()
    }]);

    return WithDirection;
  }(_react2['default'].Component);

  var wrappedComponentName = (0, _getComponentName2['default'])(WrappedComponent) || 'Component';

  WithDirection.WrappedComponent = WrappedComponent;
  WithDirection.contextTypes = contextTypes;
  WithDirection.displayName = 'withDirection(' + String(wrappedComponentName) + ')';
  if (WrappedComponent.propTypes) {
    WithDirection.propTypes = (0, _deepmerge2['default'])({}, WrappedComponent.propTypes);
    delete WithDirection.propTypes.direction;
  }
  if (WrappedComponent.defaultProps) {
    WithDirection.defaultProps = (0, _deepmerge2['default'])({}, WrappedComponent.defaultProps);
  }

  return (0, _hoistNonReactStatics2['default'])(WithDirection, WrappedComponent);
}

/***/ }),

/***/ "./node_modules/react-with-styles-interface-css/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrayPrototype = _interopRequireDefault(__webpack_require__("./node_modules/array.prototype.flat/index.js"));

var _globalCache = _interopRequireDefault(__webpack_require__("./node_modules/global-cache/index.js"));

var _constants = __webpack_require__("./node_modules/react-with-styles-interface-css/dist/utils/constants.js");

var _getClassName = _interopRequireDefault(__webpack_require__("./node_modules/react-with-styles-interface-css/dist/utils/getClassName.js"));

var _separateStyles2 = _interopRequireDefault(__webpack_require__("./node_modules/react-with-styles-interface-css/dist/utils/separateStyles.js"));

/**
 * Function required as part of the react-with-styles interface. Parses the styles provided by
 * react-with-styles to produce class names based on the style name and optionally the namespace if
 * available.
 *
 * stylesObject {Object} The styles object passed to withStyles.
 *
 * Return an object mapping style names to class names.
 */
function create(stylesObject) {
  var stylesToClasses = {};
  var styleNames = Object.keys(stylesObject);
  var sharedState = _globalCache["default"].get(_constants.GLOBAL_CACHE_KEY) || {};
  var _sharedState$namespac = sharedState.namespace,
      namespace = _sharedState$namespac === void 0 ? '' : _sharedState$namespac;
  styleNames.forEach(function (styleName) {
    var className = (0, _getClassName["default"])(namespace, styleName);
    stylesToClasses[styleName] = className;
  });
  return stylesToClasses;
}
/**
 * Process styles to be consumed by a component.
 *
 * stylesArray {Array} Array of the following: values returned by create, plain JavaScript objects
 * representing inline styles, or arrays thereof.
 *
 * Return an object with optional className and style properties to be spread on a component.
 */


function resolve(stylesArray) {
  var flattenedStyles = (0, _arrayPrototype["default"])(stylesArray, Infinity);

  var _separateStyles = (0, _separateStyles2["default"])(flattenedStyles),
      classNames = _separateStyles.classNames,
      hasInlineStyles = _separateStyles.hasInlineStyles,
      inlineStyles = _separateStyles.inlineStyles;

  var specificClassNames = classNames.map(function (name, index) {
    return "".concat(name, " ").concat(name, "_").concat(index + 1);
  });
  var className = specificClassNames.join(' ');
  var result = {
    className: className
  };
  if (hasInlineStyles) result.style = inlineStyles;
  return result;
}

var _default = {
  create: create,
  resolve: resolve
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-with-styles-interface-css/dist/utils/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_SPECIFICITY = exports.GLOBAL_CACHE_KEY = void 0;
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
var MAX_SPECIFICITY = 20;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ "./node_modules/react-with-styles-interface-css/dist/utils/getClassName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getClassName;

/**
 * Construct a class name.
 *
 * namespace {String} Used to construct unique class names.
 * styleName {String} Name identifying the specific style.
 *
 * Return the class name.
 */
function getClassName(namespace, styleName) {
  var namespaceSegment = namespace.length > 0 ? "".concat(namespace, "__") : '';
  return "".concat(namespaceSegment).concat(styleName);
}

/***/ }),

/***/ "./node_modules/react-with-styles-interface-css/dist/utils/separateStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// This function takes an array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var classNames = []; // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.

  var hasInlineStyles = false;
  var inlineStyles = {}; // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.

  for (var i = 0; i < stylesArray.length; i++) {
    // eslint-disable-line no-plusplus
    var style = stylesArray[i]; // If this  style is falsy, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)

    if (style) {
      if (typeof style === 'string') {
        classNames.push(style);
      } else {
        Object.assign(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    classNames: classNames,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}

var _default = separateStyles;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-with-styles-interface-css/index.js":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("./node_modules/react-with-styles-interface-css/dist/index.js").default;


/***/ }),

/***/ "./node_modules/react-with-styles/lib/ThemedStyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getInterface = _getInterface;
exports._getTheme = get;
exports["default"] = void 0;
var styleInterface;
var styleTheme;
var START_MARK = 'react-with-styles.resolve.start';
var END_MARK = 'react-with-styles.resolve.end';
var MEASURE_MARK = "\uD83D\uDC69\u200D\uD83C\uDFA8 [resolve]";

function registerTheme(theme) {
  styleTheme = theme;
}

function registerInterface(interfaceToRegister) {
  styleInterface = interfaceToRegister;
}

function create(makeFromTheme, createWithDirection) {
  var styles = createWithDirection(makeFromTheme(styleTheme));
  return function () {
    return styles;
  };
}

function createLTR(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createLTR || styleInterface.create);
}

function createRTL(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createRTL || styleInterface.create);
}

function get() {
  return styleTheme;
}

function resolve() {
  if ( true && typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(START_MARK);
    performance.mark(START_MARK);
  }

  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if ( true && typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(END_MARK);
    performance.mark(END_MARK);
    performance.measure(MEASURE_MARK, START_MARK, END_MARK);
    performance.clearMarks(MEASURE_MARK);
  }

  return result;
}

function resolveLTR() {
  for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  if (styleInterface.resolveLTR) {
    return styleInterface.resolveLTR(styles);
  }

  return resolve(styles);
}

function resolveRTL() {
  for (var _len3 = arguments.length, styles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  if (styleInterface.resolveRTL) {
    return styleInterface.resolveRTL(styles);
  }

  return resolve(styles);
}

function flush() {
  if (styleInterface.flush) {
    styleInterface.flush();
  }
} // Exported until we deprecate this API completely
// eslint-disable-next-line no-underscore-dangle


function _getInterface() {
  return styleInterface;
} // Exported until we deprecate this API completely


var _default = {
  registerTheme: registerTheme,
  registerInterface: registerInterface,
  create: createLTR,
  createLTR: createLTR,
  createRTL: createRTL,
  get: get,
  resolve: resolveLTR,
  resolveLTR: resolveLTR,
  resolveRTL: resolveRTL,
  flush: flush
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-with-styles/lib/WithStylesContext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DIRECTIONS", {
  enumerable: true,
  get: function get() {
    return _reactWithDirection.DIRECTIONS;
  }
});
exports["default"] = void 0;

var _react = __webpack_require__("react");

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _reactWithDirection = __webpack_require__("./node_modules/react-with-direction/dist/withDirection.js");

function detectAndCreateContext(defaultValue) {
  if (_react.createContext) {
    return (0, _react.createContext)(defaultValue);
  }

  return {
    Provider: function Provider() {
      throw new ReferenceError('WithStylesContext requires React 16.3 or later');
    },
    Consumer: function Consumer() {
      throw new ReferenceError('WithStylesContext requires React 16.3 or later');
    }
  };
}

var WithStylesContext = detectAndCreateContext({
  stylesInterface: null,
  stylesTheme: null,
  direction: null
});
WithStylesContext.Provider.propTypes = {
  stylesInterface: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  stylesTheme: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  direction: _propTypes["default"].oneOf([_reactWithDirection.DIRECTIONS.LTR, _reactWithDirection.DIRECTIONS.RTL])
};
var _default = WithStylesContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-with-styles/lib/utils/emptyStylesFn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var EMPTY_STYLES = {};

var EMPTY_STYLES_FN = function EMPTY_STYLES_FN() {
  return EMPTY_STYLES;
};

var _default = EMPTY_STYLES_FN;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-with-styles/lib/utils/perf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perfStart = perfStart;
exports.perfEnd = perfEnd;
exports["default"] = withPerf;

function perfStart(startMark) {
  if (typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function' && startMark) {
    performance.clearMarks(startMark);
    performance.mark(startMark);
  }
}

function perfEnd(startMark, endMark, measureName) {
  if (typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(endMark);
    performance.mark(endMark);
    performance.measure(measureName, startMark, endMark);
    performance.clearMarks(measureName);
  }
}

function withPerf(methodName) {
  var startMark = "react-with-styles.".concat(methodName, ".start");
  var endMark = "react-with-styles.".concat(methodName, ".end");
  var measureName = "\uD83D\uDC69\u200D\uD83C\uDFA8 [".concat(methodName, "]");
  return function (fn) {
    return function () {
      if (true) {
        perfStart(startMark);
      }

      var result = fn.apply(void 0, arguments);

      if (true) {
        perfEnd(startMark, endMark, measureName);
      }

      return result;
    };
  };
}

/***/ }),

/***/ "./node_modules/react-with-styles/lib/withStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStyles = withStyles;
Object.defineProperty(exports, "withStylesPropTypes", {
  enumerable: true,
  get: function get() {
    return _withStylesPropTypes.withStylesPropTypes;
  }
});
exports.css = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__("./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _emptyStylesFn = _interopRequireDefault(__webpack_require__("./node_modules/react-with-styles/lib/utils/emptyStylesFn.js"));

var _perf = _interopRequireDefault(__webpack_require__("./node_modules/react-with-styles/lib/utils/perf.js"));

var _WithStylesContext = _interopRequireWildcard(__webpack_require__("./node_modules/react-with-styles/lib/WithStylesContext.js"));

var _ThemedStyleSheet = _interopRequireWildcard(__webpack_require__("./node_modules/react-with-styles/lib/ThemedStyleSheet.js"));

var _withStylesPropTypes = __webpack_require__("./node_modules/react-with-styles/lib/withStylesPropTypes.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * A higher order function that returns a higher order class component that injects
 * CSS-in-JS props derived from the react-with-styles theme, interface, and
 * direction provided through the WithStylesContext provider.
 *
 * The function should be used as follows:
 * `withStyles((theme) => styles, options)(Component)`
 *
 * Options can be used to rename the injected props, memoize the component, and flush
 * the styles to the styles tag (or whatever the interface implements as flush) before
 * rendering.
 *
 * @export
 * @param {Function|null|undefined} [stylesFn=EMPTY_STYLES_FN]
 * @param {Object} [{
 *     stylesPropName = 'styles',
 *     themePropName = 'theme',
 *     cssPropName = 'css',
 *     flushBefore = false,
 *     pureComponent = false,
 *   }={}]
 * @returns a higher order component that wraps the provided component and injects
 * the react-with-styles css, styles, and theme props.
 */
function withStyles() {
  var stylesFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emptyStylesFn["default"];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stylesPropName = _ref.stylesPropName,
      stylesPropName = _ref$stylesPropName === void 0 ? 'styles' : _ref$stylesPropName,
      _ref$themePropName = _ref.themePropName,
      themePropName = _ref$themePropName === void 0 ? 'theme' : _ref$themePropName,
      _ref$cssPropName = _ref.cssPropName,
      cssPropName = _ref$cssPropName === void 0 ? 'css' : _ref$cssPropName,
      _ref$flushBefore = _ref.flushBefore,
      flushBefore = _ref$flushBefore === void 0 ? false : _ref$flushBefore,
      _ref$pureComponent = _ref.pureComponent,
      pureComponent = _ref$pureComponent === void 0 ? false : _ref$pureComponent;

  stylesFn = stylesFn || _emptyStylesFn["default"];
  var BaseClass = pureComponent ? _react["default"].PureComponent : _react["default"].Component;
  /** Cache for storing the result of stylesFn(theme) for all themes. */

  var stylesFnResultCacheMap = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();

  function getOrCreateStylesFnResultCache(theme) {
    // Get and store the result in the stylesFnResultsCache for the component
    // -- not the instance -- so we only apply the theme to the stylesFn
    // once per theme for this component.
    var cachedResultForTheme = stylesFnResultCacheMap.get(theme);
    var stylesFnResult = cachedResultForTheme || stylesFn(theme) || {};
    stylesFnResultCacheMap.set(theme, stylesFnResult); // cache the result of stylesFn(theme)

    return stylesFnResult;
  }
  /**
   * Cache for storing the results of computations:
   * `WeakMap<Theme, WeakMap<typeof WithStyles, { ltr: {}, rtl: {} }>>`
   * Falling back to `Map` whenever `WeakMap` is not supported
   */


  var withStylesCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();

  function getComponentCache(theme, component, direction) {
    var themeCache = withStylesCache.get(theme);

    if (!themeCache) {
      return null;
    }

    var componentCache = themeCache.get(component);

    if (!componentCache) {
      return null;
    }

    return componentCache[direction];
  }

  function updateComponentCache(theme, component, direction, results) {
    var themeCache = withStylesCache.get(theme);

    if (!themeCache) {
      themeCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();
      withStylesCache.set(theme, themeCache);
    }

    var componentCache = themeCache.get(component);

    if (!componentCache) {
      componentCache = {
        ltr: {},
        rtl: {}
      };
      themeCache.set(component, componentCache);
    }

    componentCache[direction] = results;
  }
  /** Derive the create function from the interface and direction */


  function makeCreateFn(direction, stylesInterface) {
    var directionSelector = direction === _WithStylesContext.DIRECTIONS.RTL ? 'RTL' : 'LTR';
    var create = stylesInterface["create".concat(directionSelector)] || stylesInterface.create;

    if (true) {
      create = (0, _perf["default"])('create')(create);
    }

    return create;
  }
  /** Derive the resolve function from the interface and direction */


  function makeResolveFn(direction, stylesInterface) {
    var directionSelector = direction === _WithStylesContext.DIRECTIONS.RTL ? 'RTL' : 'LTR';
    var resolve = stylesInterface["resolve".concat(directionSelector)] || stylesInterface.resolve;

    if (true) {
      resolve = (0, _perf["default"])('resolve')(resolve);
    }

    return resolve;
  } // The function that wraps the provided component in a wrapper
  // component that injects the withStyles props


  return function withStylesHOC(WrappedComponent) {
    var wrappedComponentName = (0, _getComponentName["default"])(WrappedComponent); // The wrapper component that injects the withStyles props

    var WithStyles =
    /*#__PURE__*/
    function (_BaseClass) {
      (0, _inheritsLoose2["default"])(WithStyles, _BaseClass);

      function WithStyles() {
        return _BaseClass.apply(this, arguments) || this;
      }

      var _proto = WithStyles.prototype;

      _proto.getCurrentInterface = function getCurrentInterface() {
        // Fallback to the singleton implementation
        return this.context && this.context.stylesInterface || (0, _ThemedStyleSheet._getInterface)();
      };

      _proto.getCurrentTheme = function getCurrentTheme() {
        // Fallback to the singleton implementation
        return this.context && this.context.stylesTheme || (0, _ThemedStyleSheet._getTheme)();
      };

      _proto.getCurrentDirection = function getCurrentDirection() {
        return this.context && this.context.direction || _WithStylesContext.DIRECTIONS.LTR;
      };

      _proto.getProps = function getProps() {
        // Get the styles interface, theme, and direction from context
        var stylesInterface = this.getCurrentInterface();
        var theme = this.getCurrentTheme();
        var direction = this.getCurrentDirection(); // Use a cache to store the interface methods and created styles by direction.
        // This way, if the theme and the interface don't change, we do not recalculate
        // styles or any other interface derivations. They are effectively only calculated
        // once per direction, until the theme or interface change.
        // Assume: always an object.

        var componentCache = getComponentCache(theme, WithStyles, direction); // Determine what's changed

        var interfaceChanged = !componentCache || !componentCache.stylesInterface || stylesInterface && componentCache.stylesInterface !== stylesInterface;
        var themeChanged = !componentCache || componentCache.theme !== theme; // If the interface and theme haven't changed for this direction,
        // we return the cached props immediately.

        if (!interfaceChanged && !themeChanged) {
          return componentCache.props;
        } // If the theme or the interface changed, then there are some values
        // we need to recalculate. We avoid recalculating the ones we already
        // calculated in the past if the objects they're derived from have not
        // changed.


        var create = interfaceChanged && makeCreateFn(direction, stylesInterface) || componentCache.create;
        var resolve = interfaceChanged && makeResolveFn(direction, stylesInterface) || componentCache.resolve; // Derive the css function prop

        var css = interfaceChanged && function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return resolve(args);
        } || componentCache.props.css; // Get or calculate the themed styles from the stylesFn:
        // Uses a separate cache at the component level, not at the instance level,
        // to only apply the theme to the stylesFn once per component class per theme.


        var stylesFnResult = getOrCreateStylesFnResultCache(theme); // Derive the styles prop: recalculate it if create changed, or stylesFnResult changed

        var styles = (interfaceChanged || stylesFnResult !== componentCache.stylesFnResult) && create(stylesFnResult) || componentCache.props.styles; // Put the new props together

        var props = {
          css: css,
          styles: styles,
          theme: theme
        }; // Update the cache with all the new values

        updateComponentCache(theme, WithStyles, direction, {
          stylesInterface: stylesInterface,
          theme: theme,
          create: create,
          resolve: resolve,
          stylesFnResult: stylesFnResult,
          props: props
        });
        return props;
      };

      _proto.flush = function flush() {
        var stylesInterface = this.getCurrentInterface();

        if (stylesInterface && stylesInterface.flush) {
          stylesInterface.flush();
        }
      };

      _proto.render = function render() {
        var _ref2;

        // We only want to re-render if the theme, stylesInterface, or direction change.
        // These values are in context so we're listening for their updates.
        // this.getProps() derives the props from the theme, stylesInterface, and direction in
        // context, and memoizes them on the instance per direction.
        var _this$getProps = this.getProps(),
            theme = _this$getProps.theme,
            styles = _this$getProps.styles,
            css = _this$getProps.css; // Flush if specified


        if (flushBefore) {
          this.flush();
        }

        return _react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, this.props, (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, themePropName, theme), (0, _defineProperty2["default"])(_ref2, stylesPropName, styles), (0, _defineProperty2["default"])(_ref2, cssPropName, css), _ref2)));
      };

      return WithStyles;
    }(BaseClass); // Copy the wrapped component's prop types and default props on WithStyles


    if (WrappedComponent.propTypes) {
      WithStyles.propTypes = _objectSpread({}, WrappedComponent.propTypes);
      delete WithStyles.propTypes[stylesPropName];
      delete WithStyles.propTypes[themePropName];
      delete WithStyles.propTypes[cssPropName];
    }

    if (WrappedComponent.defaultProps) {
      WithStyles.defaultProps = _objectSpread({}, WrappedComponent.defaultProps);
    }

    WithStyles.contextType = _WithStylesContext["default"];
    WithStyles.WrappedComponent = WrappedComponent;
    WithStyles.displayName = "withStyles(".concat(wrappedComponentName, ")");
    return (0, _hoistNonReactStatics["default"])(WithStyles, WrappedComponent);
  };
}

var _default = withStyles;
/**
 * Deprecated: Do not use directly. Please wrap your component in `withStyles` and use the `css`
 * prop injected via props instead.
 */

exports["default"] = _default;
var css = _ThemedStyleSheet["default"].resolveLTR;
exports.css = css;

/***/ }),

/***/ "./node_modules/react-with-styles/lib/withStylesPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.withStylesPropTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var withStylesPropTypes = {
  styles: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired,
  css: _propTypes["default"].func.isRequired
};
exports.withStylesPropTypes = withStylesPropTypes;
var _default = withStylesPropTypes;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var callBind = __webpack_require__("./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__("./node_modules/regexp.prototype.flags/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/regexp.prototype.flags/polyfill.js");
var shim = __webpack_require__("./node_modules/regexp.prototype.flags/shim.js");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/regexp.prototype.flags/implementation.js");

var supportsDescriptors = __webpack_require__("./node_modules/define-properties/index.js").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__("./node_modules/define-properties/index.js").supportsDescriptors;
var getPolyfill = __webpack_require__("./node_modules/regexp.prototype.flags/polyfill.js");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ "./node_modules/warning/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/babel/calendar.jsx");


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ "popper.js":
/***/ (function(module, exports) {

(function() { module.exports = this["Popper"]; }());

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=calendar.js.map
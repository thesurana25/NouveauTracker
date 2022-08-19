(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+NcZ":
    /*!******************************************!*\
      !*** ./src/app/service/email.service.ts ***!
      \******************************************/

    /*! exports provided: EmailService, CustomEmailRequest */

    /***/
    function NcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailService", function () {
        return EmailService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomEmailRequest", function () {
        return CustomEmailRequest;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var EmailService = /*#__PURE__*/function () {
        function EmailService(httpClient) {
          _classCallCheck(this, EmailService);

          this.httpClient = httpClient;
          this.requestBody = new CustomEmailRequest();
          this.BASE_URL = 'https://nouveautracker.stackroute.io/email-service/'; // BASE_URL = 'http://localhost:8080/email-service/';

          this.CUSTOM_EMPLOYEE_EMAIL = 'sendemployeecustomemail/';
        }

        _createClass(EmailService, [{
          key: "revertMonthlyTracker",
          value: function revertMonthlyTracker(monthlyTracker) {
            this.requestBody.to = monthlyTracker.employeeEmail;
            this.requestBody.actionToBeTaken = monthlyTracker.remarks;
            this.requestBody.month = monthlyTracker.monthName;
            this.requestBody.subject = 'REVERTED: Monthly Tracker for ' + monthlyTracker.monthName + ' ' + monthlyTracker.year;
            this.requestBody.year = monthlyTracker.year.toString();
            return this.httpClient.post(this.BASE_URL + this.CUSTOM_EMPLOYEE_EMAIL, this.requestBody, {
              responseType: 'text'
            });
          }
        }]);

        return EmailService;
      }();

      EmailService.ɵfac = function EmailService_Factory(t) {
        return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmailService,
        factory: EmailService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();

      var CustomEmailRequest = function CustomEmailRequest() {
        _classCallCheck(this, CustomEmailRequest);
      };
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\NIIT\Product Engineering\nouveautracker\product-webapp\webapp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0guk":
    /*!****************************************************************!*\
      !*** ./src/app/component/add-program/add-program.component.ts ***!
      \****************************************************************/

    /*! exports provided: AddProgramComponent */

    /***/
    function guk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProgramComponent", function () {
        return AddProgramComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      var _c0 = ["fileInput"];

      function AddProgramComponent_mat_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r5);
        }
      }

      function AddProgramComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manager_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", manager_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manager_r6);
        }
      }

      var AddProgramComponent = /*#__PURE__*/function () {
        function AddProgramComponent(formBuilder, programService, snackBar, employeeService) {
          _classCallCheck(this, AddProgramComponent);

          this.programService = programService;
          this.snackBar = snackBar;
          this.employeeService = employeeService;
          this.fileAttr = 'Choose File';
          this.managersArray = [];
          this.addProgramForm = formBuilder.group({
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            programName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            programType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            programCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            costCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            customerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            managerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddProgramComponent, [{
          key: "onFileUpload",
          value: function onFileUpload(event) {
            this.file = event.target.files[0];
            this.fileAttr = event.target.files[0].name;
          }
        }, {
          key: "getProgramTypes",
          value: function getProgramTypes() {
            var _this = this;

            this.programService.getAllProgramType().subscribe(function (response) {
              _this.programType = response;
            });
          }
        }, {
          key: "saveProgram",
          value: function saveProgram() {
            var _this2 = this;

            this.addProgramForm.patchValue({
              startDate: this.addProgramForm.value.startDate.getTime(),
              endDate: this.addProgramForm.value.endDate.getTime()
            });
            console.log(this.addProgramForm.value);
            var programData = new FormData();
            programData.append('image', this.file, this.file.name);
            programData.append('program', JSON.stringify(this.addProgramForm.value));
            this.programService.addProgram(programData).subscribe(function (response) {
              _this2.snackBar.open('Program Created Successfully.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-primary']
              });

              _this2.addProgramForm.reset();

              console.log(response);
            }, function (error) {
              _this2.snackBar.open('Some error occured while adding Program.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-warn']
              });

              console.log(error);
            });
          }
        }, {
          key: "getAllManagers",
          value: function getAllManagers() {
            var _this3 = this;

            this.employeeService.getEmployeesByRole('MANAGER').subscribe(function (response) {
              response.forEach(function (manager) {
                console.log(manager.emailId);

                _this3.managersArray.push(manager.emailId);
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProgramTypes();
            this.getAllManagers();
          }
        }]);

        return AddProgramComponent;
      }();

      AddProgramComponent.ɵfac = function AddProgramComponent_Factory(t) {
        return new (t || AddProgramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]));
      };

      AddProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddProgramComponent,
        selectors: [["app-add-program"]],
        viewQuery: function AddProgramComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
          }
        },
        decls: 83,
        vars: 10,
        consts: [["mat-dialog-title", "", 1, "flex-container"], ["mat-dialog-title", ""], [1, "example-spacer"], ["matTooltip", "Close", 3, "mat-dialog-close"], [1, "example-form", 3, "formGroup"], ["fxLayout", "column", "fxFlex", "100%"], ["fxLayout", "row", "fxLayoutGap", "2%", "fxLayout.xs", "column"], ["fxFlex", "50%", "appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "programName", "maxlength", "20", "required", ""], ["programName", ""], ["align", "end"], ["formControlName", "programType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "fxFlex", "50%", 1, "example-full-width"], ["matInput", "", "formControlName", "organizationName", "maxlength", "15", "required", ""], ["organizationName", ""], ["fxFlex", "50%"], ["type", "file", "accept", "image/*", "formControlName", "image", "required", "", 3, "change"], ["formControlName", "managerEmailId", "required", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "startDate", "required", ""], ["matEndDate", "", "placeholder", "End date", "formControlName", "endDate", "required", ""], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "time", "matInput", "", "formControlName", "startTime", "required", ""], ["matSuffix", ""], ["type", "time", "matInput", "", "formControlName", "endTime", "required", ""], ["appearance", "outline", "fxFlex", "33%", 1, "example-full-width"], ["matInput", "", "formControlName", "customerId", "required", "", "type", "number"], ["appearance", "outline", "fxFlex", "33%", "required", "", 1, "example-full-width"], ["matInput", "", "formControlName", "costCode", "required", "", "type", "number"], ["matInput", "", "formControlName", "programCode", "required", "", "type", "number"], ["mat-raised-button", "", 3, "click"], ["color", "primary", "mat-flat-button", "", 3, "mat-dialog-close", "disabled", "click"], [3, "value"]],
        template: function AddProgramComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Program");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Program Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Program Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddProgramComponent_mat_option_21_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Organization Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Organization Logo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProgramComponent_Template_input_change_34_listener($event) {
              return ctx.onFileUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Manager Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddProgramComponent_mat_option_40_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Enter Date Range for Program");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-date-range-input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "MM/DD/YYYY \u2013 MM/DD/YYYY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-datepicker-toggle", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-date-range-picker", null, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Daily Start Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "alarm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Daily End Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "alarm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Customer Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Cost Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Program Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-dialog-actions", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProgramComponent_Template_button_click_79_listener() {
              return ctx.addProgramForm.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProgramComponent_Template_button_click_81_listener() {
              return ctx.saveProgram();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProgramForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.managersArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("disabled", !ctx.addProgramForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangePicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
        styles: ["button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  width: 100px;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=\"time\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\r\n  background: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::file-selector-button {\r\n  cursor: pointer;\r\n  color: #2c3855;\r\n  padding: 0.5em;\r\n  border: thin solid #2c3855;\r\n  border-radius: 3px;\r\n  background: transparent;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  color: #2c3855;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFkZC1wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGltZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5pbnB1dDo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzJjMzg1NTtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzJjMzg1NTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjb2xvcjogIzJjMzg1NTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProgramComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-program',
            templateUrl: './add-program.component.html',
            styleUrls: ['./add-program.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
          }];
        }, {
          fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
          }]
        });
      })();
      /***/

    },

    /***/
    "0x4Q":
    /*!********************************************!*\
      !*** ./src/app/service/program.service.ts ***!
      \********************************************/

    /*! exports provided: ProgramService */

    /***/
    function x4Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramService", function () {
        return ProgramService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var ProgramService = /*#__PURE__*/function () {
        function ProgramService(http) {
          _classCallCheck(this, ProgramService);

          this.http = http;
          this.baseUrl = 'https://nouveautracker.stackroute.io/program-service/api/v1/'; // baseUrl = 'http://localhost:8080/program-service/api/v1/';

          this.programUrl = this.baseUrl + 'program';
          this.projectUrl = this.baseUrl + 'project';
        }

        _createClass(ProgramService, [{
          key: "getAllPrograms",
          value: function getAllPrograms() {
            return this.http.get(this.baseUrl + '/programs');
          }
        }, {
          key: "getAllProjects",
          value: function getAllProjects() {
            return this.http.get(this.baseUrl + '/projects');
          }
        }, {
          key: "getProgramDetails",
          value: function getProgramDetails(programName) {
            var url = this.programUrl + '/' + programName;
            return this.http.get(url);
          }
        }, {
          key: "getProjectDetails",
          value: function getProjectDetails(projectName) {
            var url = this.projectUrl + '/' + projectName;
            return this.http.get(url);
          }
        }, {
          key: "addProgram",
          value: function addProgram(program) {
            return this.http.post(this.programUrl, program);
          }
        }, {
          key: "addProject",
          value: function addProject(project) {
            return this.http.post(this.projectUrl, project);
          }
        }, {
          key: "addMembersToProgram",
          value: function addMembersToProgram(program, programName) {
            console.log("hola");
            console.log(program);
            var url = this.programUrl + '/member/' + programName;
            return this.http.put(url, program);
          }
        }, {
          key: "addMembersToProject",
          value: function addMembersToProject(project, projectName) {
            var url = this.projectUrl + '/member/' + projectName;
            return this.http.put(url, project);
          }
        }, {
          key: "getAllActiveProgramsOnParticularDate",
          value: function getAllActiveProgramsOnParticularDate(memberEmail, dateInMillis) {
            var url = this.baseUrl + '/programs' + '/member/' + memberEmail + '/' + dateInMillis;
            return this.http.get(url);
          }
        }, {
          key: "getAllActiveProjectsOnParticularDate",
          value: function getAllActiveProjectsOnParticularDate(memberEmail, dateInMillis) {
            var url = this.baseUrl + '/projects' + '/member/' + memberEmail + '/' + dateInMillis;
            return this.http.get(url);
          }
        }, {
          key: "getProgramsByManager",
          value: function getProgramsByManager(managerEmail) {
            var url = this.baseUrl + '/programs' + '/manager/' + managerEmail;
            return this.http.get(url);
          }
        }, {
          key: "getProjectsByManager",
          value: function getProjectsByManager(managerEmail) {
            var url = this.baseUrl + '/projects' + '/manager/' + managerEmail;
            return this.http.get(url);
          }
        }, {
          key: "removeMembersFromProgram",
          value: function removeMembersFromProgram(programName, memberEmail) {
            var url = this.programUrl + '/member/' + programName + '/' + memberEmail;
            return this.http.get(url);
          }
        }, {
          key: "removeMembersFromProject",
          value: function removeMembersFromProject(projectName, memberEmail) {
            var url = this.projectUrl + '/member/' + projectName + '/' + memberEmail;
            return this.http.get(url);
          }
        }, {
          key: "getAllProgramType",
          value: function getAllProgramType() {
            var url = this.baseUrl + '/programtype';
            return this.http.get(url);
          }
        }, {
          key: "getAllActivePrograms",
          value: function getAllActivePrograms(programStatus) {
            var url = this.programUrl + '/status/' + programStatus;
            return this.http.get(url);
          }
        }, {
          key: "getAllActiveProjects",
          value: function getAllActiveProjects(projectStatus) {
            var url = this.projectUrl + '/status/' + projectStatus;
            return this.http.get(url);
          }
        }, {
          key: "searchPrograms",
          value: function searchPrograms(program) {
            var url = this.baseUrl + '/programs/search';
            return this.http.post(url, program);
          }
        }, {
          key: "searchProjects",
          value: function searchProjects(project) {
            var url = this.baseUrl + '/projects/search';
            return this.http.post(url, project);
          }
        }, {
          key: "searchProgramsManager",
          value: function searchProgramsManager(program) {
            var url = this.baseUrl + '/programs/manager/search';
            return this.http.post(url, program);
          }
        }, {
          key: "searchProjectManager",
          value: function searchProjectManager(project) {
            var url = this.baseUrl + '/projects/manager/search';
            return this.http.post(url, project);
          }
        }]);

        return ProgramService;
      }();

      ProgramService.ɵfac = function ProgramService_Factory(t) {
        return new (t || ProgramService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProgramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProgramService,
        factory: ProgramService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1+rk":
    /*!****************************************************!*\
      !*** ./src/app/service/monthly-tracker.service.ts ***!
      \****************************************************/

    /*! exports provided: MonthlyTrackerService */

    /***/
    function rk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthlyTrackerService", function () {
        return MonthlyTrackerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var MonthlyTrackerService = /*#__PURE__*/function () {
        function MonthlyTrackerService(httpClient) {
          _classCallCheck(this, MonthlyTrackerService);

          this.httpClient = httpClient;
          this.BASE_URL = 'https://nouveautracker.stackroute.io/monthly-tracker-service/api/v1/'; // BASE_URL = 'http://localhost:8080/monthly-tracker-service/api/v1/';

          this.MONTHLY_TRACKER = 'monthlytracker';
          this.MONTHLY_TRACKERS = 'filtermonthlytrackers';
        }

        _createClass(MonthlyTrackerService, [{
          key: "saveMonthlyTracker",
          value: function saveMonthlyTracker(monthlyTracker) {
            this.httpClient.post(this.BASE_URL + this.MONTHLY_TRACKER, monthlyTracker).subscribe(function (res) {
              return console.log("Result of MT save,", res);
            }, function (err) {
              return console.log("error while saving MT", err);
            });
          }
        }, {
          key: "getAllMonthlyTrackers",
          value: function getAllMonthlyTrackers(month, year) {
            console.log(month);
            return this.httpClient.get(this.BASE_URL + this.MONTHLY_TRACKERS + '?month=' + month + '&year=' + year);
          }
        }, {
          key: "ApproveMonthlyTracker",
          value: function ApproveMonthlyTracker(monthlyTracker) {
            return this.httpClient.put(this.BASE_URL + this.MONTHLY_TRACKER + '?id=' + monthlyTracker.monthlyTrackerId + '&status=' + 'COMPLETED', monthlyTracker, {
              responseType: 'text'
            });
          }
        }, {
          key: "RevertMonthlyTracker",
          value: function RevertMonthlyTracker(monthlyTracker) {
            return this.httpClient.put(this.BASE_URL + this.MONTHLY_TRACKER + '?id=' + monthlyTracker.monthlyTrackerId + '&status=' + 'REVERTED', monthlyTracker, {
              responseType: 'text'
            });
          }
        }, {
          key: "SubmitMonthlyTracker",
          value: function SubmitMonthlyTracker(monthlyTracker) {
            return this.httpClient.put(this.BASE_URL + this.MONTHLY_TRACKER + '?id=' + monthlyTracker.monthlyTrackerId + '&status=' + 'SUBMITTED', monthlyTracker, {
              responseType: 'text'
            });
          }
        }, {
          key: "findMonthlyTrackerById",
          value: function findMonthlyTrackerById(id) {
            return this.httpClient.get(this.BASE_URL + this.MONTHLY_TRACKER + '?monthlyTrackerID=' + id);
          }
        }, {
          key: "RemarkMonthlyTracker",
          value: function RemarkMonthlyTracker(monthlyTrackerId, remarks) {
            return this.httpClient.put(this.BASE_URL + this.MONTHLY_TRACKER + '/revert' + '?id=' + monthlyTrackerId + '&remarks=' + remarks, null, {
              responseType: 'text'
            });
          }
        }]);

        return MonthlyTrackerService;
      }();

      MonthlyTrackerService.ɵfac = function MonthlyTrackerService_Factory(t) {
        return new (t || MonthlyTrackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      MonthlyTrackerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MonthlyTrackerService,
        factory: MonthlyTrackerService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthlyTrackerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "11K9":
    /*!***************************************!*\
      !*** ./src/app/model/program-time.ts ***!
      \***************************************/

    /*! exports provided: ProgramTime */

    /***/
    function K9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramTime", function () {
        return ProgramTime;
      });

      var ProgramTime = function ProgramTime(program, time) {
        _classCallCheck(this, ProgramTime);

        this.program = program;
        this.time = time;
      };
      /***/

    },

    /***/
    "3PO9":
    /*!***************************************!*\
      !*** ./src/app/model/project-time.ts ***!
      \***************************************/

    /*! exports provided: ProjectTime */

    /***/
    function PO9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectTime", function () {
        return ProjectTime;
      });

      var ProjectTime = function ProjectTime(project, time) {
        _classCallCheck(this, ProjectTime);

        this.project = project;
        this.time = time;
      };
      /***/

    },

    /***/
    "3pHJ":
    /*!**************************************************************************!*\
      !*** ./src/app/component/charts-folder/bar-chart/bar-chart.component.ts ***!
      \**************************************************************************/

    /*! exports provided: BarChartComponent */

    /***/
    function pHJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
        return BarChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/daily-tracker.service */
      "KjdE");

      var BarChartComponent = /*#__PURE__*/function () {
        function BarChartComponent(programService, dailyTrackerService) {
          _classCallCheck(this, BarChartComponent);

          this.programService = programService;
          this.dailyTrackerService = dailyTrackerService;
          this.programsArray = [];
          this.programChartData = [];
        }

        _createClass(BarChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = window.localStorage.getItem('role');
            this.loggedEmail = window.localStorage.getItem('tgt_email');

            switch (this.role) {
              case 'OPERATIONS':
                {
                  // this.getAllActivePrograms();
                  this.getAllProgramHours();
                  break;
                }

              case 'MANAGER':
                {
                  this.getAllProgramHoursByManagers();
                  break;
                }

              case 'EMPLOYEE':
                {
                  this.getAllProgramHoursByEmployee();
                  break;
                }
            }
          }
        }, {
          key: "myChart",
          value: function myChart() {
            var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__('myChart', {
              type: 'bar',
              data: {
                labels: this.programChartLabel,
                datasets: [{
                  label: 'Number of employees',
                  data: this.programChartData,
                  backgroundColor: 'lightpink',
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 1,
                  hoverBorderColor: '#000'
                }, {
                  label: 'Total working hours',
                  // data: this.programChartData,
                  data: this.programChartDataHours,
                  backgroundColor: 'cornflowerblue',
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 1,
                  hoverBorderColor: '#000'
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                },
                // scaleShowVerticalLines: false,
                responsive: true,
                title: {
                  display: true,
                  text: 'External Programs (active)',
                  padding: 20,
                  fontSize: 22
                },
                legend: {
                  position: 'top',
                  labels: {
                    fontColor: '#777',
                    fontSize: 13
                  }
                },
                layout: {
                  padding: {
                    left: 50
                  }
                },
                tooltips: {
                  displayColors: false
                }
              }
            });
          }
        }, {
          key: "getAllActivePrograms",
          value: function getAllActivePrograms() {
            var _this4 = this;

            this.programService.getAllActivePrograms('ACTIVE').subscribe(function (response) {
              console.log(response);
              _this4.programsArray = response;

              _this4.programChartLabel.forEach(function (labelName) {
                _this4.programsArray.forEach(function (program) {
                  if (labelName === program.programName) {
                    _this4.programChartData.push(program.membersList.length);
                  }
                });
              });

              _this4.myChart(); // everything should load at once

            }, function (error) {
              console.log(error);
            });
          } //////////////////////////////////////////

        }, {
          key: "getAllProgramHours",
          value: function getAllProgramHours() {
            var _this5 = this;

            this.dailyTrackerService.getAllProgramHours().subscribe(function (response) {
              console.log("All program with hours");
              console.log(response);
              _this5.programChartLabel = Object.keys(response);
              _this5.programChartDataHours = Object.values(response);

              _this5.getAllActivePrograms(); // this.myChart();

            }, function (error) {
              console.log(error);
            });
          } //////////////////////////////////////////////

        }, {
          key: "getAllProgramHoursByEmployee",
          value: function getAllProgramHoursByEmployee() {
            var _this6 = this;

            this.dailyTrackerService.getAllProgramHoursByEmployee(this.loggedEmail).subscribe(function (response) {
              console.log("All program with hours");
              console.log(response);
              _this6.programChartLabel = Object.keys(response);
              _this6.programChartDataHours = Object.values(response);

              _this6.getAllActivePrograms(); // this.myChart();

            }, function (error) {
              console.log(error);
            });
          } //////////////////////////////////////////////

        }, {
          key: "getAllProgramHoursByManagers",
          value: function getAllProgramHoursByManagers() {
            var _this7 = this;

            this.dailyTrackerService.getAllProgramsHoursForManager(this.loggedEmail).subscribe(function (response) {
              console.log("All program with hours");
              console.log(response);
              _this7.programChartLabel = Object.keys(response);
              _this7.programChartDataHours = Object.values(response);

              _this7.getAllActivePrograms(); // this.myChart();

            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return BarChartComponent;
      }();

      BarChartComponent.ɵfac = function BarChartComponent_Factory(t) {
        return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_3__["DailyTrackerService"]));
      };

      BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarChartComponent,
        selectors: [["app-bar-chart"]],
        decls: 3,
        vars: 0,
        consts: [[2, "display", "block"], ["id", "divChart"], ["id", "myChart"]],
        template: function BarChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bar-chart',
            templateUrl: './bar-chart.component.html',
            styleUrls: ['./bar-chart.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }, {
            type: src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_3__["DailyTrackerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3qMO":
    /*!**************************************************************************************!*\
      !*** ./src/app/component/charts-folder/doughnut-chart2/doughnut-chart2.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: DoughnutChart2Component */

    /***/
    function qMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoughnutChart2Component", function () {
        return DoughnutChart2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");

      var DoughnutChart2Component = /*#__PURE__*/function () {
        function DoughnutChart2Component(programService) {
          _classCallCheck(this, DoughnutChart2Component);

          this.programService = programService;
          this.projectsArray = [];
          this.doughnutChartLabel = [];
          this.doughnutChartData = [];
        }

        _createClass(DoughnutChart2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllActiveprojects();
          }
        }, {
          key: "myChart",
          value: function myChart() {
            var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__('myChart', {
              type: 'doughnut',
              data: {
                labels: this.doughnutChartLabel,
                datasets: [{
                  label: 'No. of employees',
                  data: this.doughnutChartData,
                  backgroundColor: ['cornflowerblue', 'olivedrab', 'orange', 'tomato', 'crimson', 'purple', 'turquoise', 'forestgreen', 'navy', '#455a64', 'rgba(255, 220, 129, 0.2)', 'rgba(200, 181, 199, 0.2)', 'rgba(193, 226, 206, 0.2)', 'rgba(201, 193, 226, 0.2)', 'rgba(175, 201, 195, 0.2)', 'rgba(253, 222, 166, 0.2)', 'rgba(216, 156, 218, 0.2)', 'rgba(154, 215, 209, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(216, 181, 173, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(154, 198, 215, 0.2)', 'rgba(208, 232, 191, 0.2)'],
                  // hoverOffset: 4,
                  borderWidth: 1,
                  borderColor: '#fff',
                  hoverBorderWidth: 2,
                  hoverBorderColor: '#fff'
                }]
              },
              options: {
                title: {
                  display: true,
                  text: 'Employee Distribution (Active projects)',
                  padding: 20,
                  fontSize: 25
                },
                legend: {
                  position: 'right',
                  labels: {
                    fontColor: '#000'
                  }
                },
                layout: {
                  padding: {
                    left: 100
                  }
                },
                tooltips: {
                  displayColors: false
                }
              }
            });
          }
        }, {
          key: "getAllActiveprojects",
          value: function getAllActiveprojects() {
            var _this8 = this;

            this.programService.getAllActiveProjects('ACTIVE').subscribe(function (response) {
              _this8.projectsArray = response;
              console.log(response);

              _this8.projectsArray.forEach(function (project) {
                _this8.doughnutChartLabel.push(project.projectName);

                _this8.doughnutChartData.push(project.membersList.length);
              });

              _this8.myChart();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return DoughnutChart2Component;
      }();

      DoughnutChart2Component.ɵfac = function DoughnutChart2Component_Factory(t) {
        return new (t || DoughnutChart2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]));
      };

      DoughnutChart2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DoughnutChart2Component,
        selectors: [["app-doughnut-chart2"]],
        decls: 3,
        vars: 0,
        consts: [[2, "display", "block"], ["id", "divChart"], ["id", "myChart"]],
        template: function DoughnutChart2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3VnaG51dC1jaGFydDIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoughnutChart2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-doughnut-chart2',
            templateUrl: './doughnut-chart2.component.html',
            styleUrls: ['./doughnut-chart2.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6ORI":
    /*!****************************************!*\
      !*** ./src/app/model/daily-tracker.ts ***!
      \****************************************/

    /*! exports provided: LeaveType, DailyTracker */

    /***/
    function ORI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveType", function () {
        return LeaveType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DailyTracker", function () {
        return DailyTracker;
      });

      var LeaveType;

      (function (LeaveType) {
        LeaveType["FULL_DAY"] = "FULLDAY";
        LeaveType["HALF_DAY"] = "HALF_DAY";
        LeaveType["NONE"] = "NONE";
      })(LeaveType || (LeaveType = {}));

      var DailyTracker = function DailyTracker(date, state) {
        _classCallCheck(this, DailyTracker);

        this.trackerId = '';
        this.employeeEmail = '';
        this.logs = [];
        this.leaveType = LeaveType.NONE;
        this.remarks = '';
        this.state = false; // show whether the tracker is available for edit or not

        this.currentDay = false; // this attribute tells whther this daily tracker is current day of the calendar or not.it will always be false, except for 1 day when it matches the current calendar date

        this.leaveHours = 0;
        this.state = state;
        this.date = date;

        if (this.state) {
          this.dayOfMonth = String(this.date.getDate());
        } else {
          this.dayOfMonth = '';
        }
      };
      /***/

    },

    /***/
    "8GX+":
    /*!**********************************************************************************!*\
      !*** ./src/app/component/view-program-manager/view-program-manager.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ViewProgramManagerComponent */

    /***/
    function GX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewProgramManagerComponent", function () {
        return ViewProgramManagerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _add_program_add_program_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-program/add-program.component */
      "0guk");
      /* harmony import */


      var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../add-project/add-project.component */
      "DUpI");
      /* harmony import */


      var _view_program_card_view_program_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../view-program-card/view-program-card.component */
      "wIXF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _service_program_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _program_card_program_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../program-card/program-card.component */
      "s+jY");
      /* harmony import */


      var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../project-card/project-card.component */
      "Bslf");

      function ViewProgramManagerComponent_mat_expansion_panel_2_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_2_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.openAddProgramDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add New Program ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_2_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var organization_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", organization_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organization_r15);
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_2_mat_form_field_30_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manager_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", manager_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manager_r17);
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_2_mat_form_field_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manager Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProgramManagerComponent_mat_expansion_panel_2_mat_form_field_30_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.managersArray);
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_2_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r8.expanded = !_r8.expanded;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "tune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewProgramManagerComponent_mat_expansion_panel_2_button_7_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Program Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Organization Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewProgramManagerComponent_mat_expansion_panel_2_mat_option_19_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose a date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "MM/DD/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-datepicker", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViewProgramManagerComponent_mat_expansion_panel_2_mat_form_field_30_Template, 5, 1, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Program Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_2_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.resetFilterProgramForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_2_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.filterPrograms();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Apply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role === "OPERATIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.filterProgramForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.organizationNameArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role === "OPERATIONS");
        }
      }

      function ViewProgramManagerComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProgramManagerComponent_ng_template_5_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Programs to Show.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProgramManagerComponent_ng_template_5_ng_template_1_app_program_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-program-card", 37);
        }

        if (rf & 2) {
          var program_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("programData", program_r26);
        }
      }

      function ViewProgramManagerComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewProgramManagerComponent_ng_template_5_ng_template_1_app_program_card_0_Template, 1, 1, "app-program-card", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, ctx_r24.programArray, ctx_r24.lowValue, ctx_r24.highValue));
        }
      }

      function ViewProgramManagerComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewProgramManagerComponent_ng_template_5_div_0_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewProgramManagerComponent_ng_template_5_ng_template_1_Template, 2, 5, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.programArray.length < 1)("ngIfElse", _r23);
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_8_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_8_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.openAddProjectDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add New Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_8_mat_form_field_33_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manager_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", manager_r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manager_r34);
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_8_mat_form_field_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manager Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProgramManagerComponent_mat_expansion_panel_8_mat_form_field_33_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.managersArray);
        }
      }

      function ViewProgramManagerComponent_mat_expansion_panel_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 8, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_8_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r27.expanded = !_r27.expanded;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "tune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewProgramManagerComponent_mat_expansion_panel_8_button_7_Template, 2, 0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Project Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Choose a date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MM/DD/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", null, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ViewProgramManagerComponent_mat_expansion_panel_8_mat_form_field_33_Template, 5, 1, "mat-form-field", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_8_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.resetFilterProjectForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProgramManagerComponent_mat_expansion_panel_8_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.filterProjects();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Apply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.role === "OPERATIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.filterProjectForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.role === "OPERATIONS");
        }
      }

      function ViewProgramManagerComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProgramManagerComponent_ng_template_11_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Projects to Show.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProgramManagerComponent_ng_template_11_ng_template_1_app_project_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-card", 49);
        }

        if (rf & 2) {
          var project_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectData", project_r43);
        }
      }

      function ViewProgramManagerComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewProgramManagerComponent_ng_template_11_ng_template_1_app_project_card_0_Template, 1, 1, "app-project-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, ctx_r41.projectArray, ctx_r41.lowValue, ctx_r41.highValue));
        }
      }

      function ViewProgramManagerComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewProgramManagerComponent_ng_template_11_div_0_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewProgramManagerComponent_ng_template_11_ng_template_1_Template, 2, 5, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.projectArray.length < 1)("ngIfElse", _r40);
        }
      }

      var ViewProgramManagerComponent = /*#__PURE__*/function () {
        function ViewProgramManagerComponent(programService, dialog, formBuilder, employeeService) {
          _classCallCheck(this, ViewProgramManagerComponent);

          this.programService = programService;
          this.dialog = dialog;
          this.formBuilder = formBuilder;
          this.employeeService = employeeService;
          this.lowValue = 0;
          this.highValue = 8;
          this.panelOpenState = false;
          this.showProgramSpinner = true;
          this.showProjectSpinner = true;
          this.managersArray = [];
          this.organizationNameArray = new Set();
          this.role = '';
          this.filterProgramForm = formBuilder.group({
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            programName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            programDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            managerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            programStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('ACTIVE')
          });
          this.filterProjectForm = formBuilder.group({
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            projectDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            managerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            projectStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('ACTIVE')
          });
        }

        _createClass(ViewProgramManagerComponent, [{
          key: "showProgramDetails",
          value: function showProgramDetails(programName) {
            console.log(programName);
            this.dialog.open(_view_program_card_view_program_card_component__WEBPACK_IMPORTED_MODULE_3__["ViewProgramCardComponent"]);
          }
        }, {
          key: "openAddProgramDialog",
          value: function openAddProgramDialog() {
            var _this9 = this;

            var dialogForProgram = this.dialog.open(_add_program_add_program_component__WEBPACK_IMPORTED_MODULE_1__["AddProgramComponent"], {
              width: '900px'
            });
            dialogForProgram.afterClosed().subscribe(function (result) {
              console.log(result);
              _this9.showProgramSpinner = true;

              _this9.getAllPrograms();
            });
          }
        }, {
          key: "openAddProjectDialog",
          value: function openAddProjectDialog() {
            var _this10 = this;

            var dialogForProject = this.dialog.open(_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_2__["AddProjectComponent"], {
              width: '900px'
            });
            dialogForProject.afterClosed().subscribe(function (result) {
              console.log(result);

              _this10.getAllProjects();
            });
          }
        }, {
          key: "getPaginatorData",
          value: function getPaginatorData(event) {
            this.lowValue = event.pageIndex * event.pageSize;
            this.highValue = this.lowValue + event.pageSize;
            return event;
          }
        }, {
          key: "getAllPrograms",
          value: function getAllPrograms() {
            var _this11 = this;

            this.programService.getAllPrograms().subscribe(function (response) {
              console.log(response);
              _this11.programArray = response;
              _this11.length = _this11.programArray.length;
              _this11.showProgramSpinner = false;
              console.log(_this11.programArray);
              response.forEach(function (program) {
                _this11.organizationNameArray.add(program.organizationName);
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getAllProgramsByManager",
          value: function getAllProgramsByManager(managerEmail) {
            var _this12 = this;

            this.programService.getProgramsByManager(managerEmail).subscribe(function (response) {
              console.log(response);
              _this12.programArray = response;
              _this12.length = _this12.programArray.length;
              _this12.showProgramSpinner = false;
              response.forEach(function (program) {
                _this12.organizationNameArray.add(program.organizationName);
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getProgramsByDateForEmployee",
          value: function getProgramsByDateForEmployee(employeeEmail, dateInMillis) {
            var _this13 = this;

            this.programService.getAllActiveProgramsOnParticularDate(employeeEmail, dateInMillis).subscribe(function (response) {
              console.log(response);
              _this13.programArray = response;
              _this13.length = _this13.programArray.length;
              _this13.showProgramSpinner = false;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "filterPrograms",
          value: function filterPrograms() {
            var _this14 = this;

            this.role = window.localStorage.getItem('role');
            var email = window.localStorage.getItem('tgt_email');

            switch (this.role) {
              case 'OPERATIONS':
                var searchProgramData = new FormData();
                searchProgramData.append('program', JSON.stringify(this.filterProgramForm.value));

                if (this.filterProgramForm.value.programDate != null) {
                  searchProgramData.append('date', JSON.stringify(this.filterProgramForm.value.programDate.getTime()));
                }

                this.programService.searchPrograms(searchProgramData).subscribe(function (result) {
                  _this14.programArray = result;
                });
                break;

              case 'MANAGER':
                var searchProgramDataManager = new FormData();
                searchProgramDataManager.append('program', JSON.stringify(this.filterProgramForm.value));
                searchProgramDataManager.append('manager', email);

                if (this.filterProgramForm.value.programDate != null) {
                  searchProgramDataManager.append('date', JSON.stringify(this.filterProgramForm.value.programDate.getTime()));
                }

                this.programService.searchProgramsManager(searchProgramDataManager).subscribe(function (result) {
                  _this14.programArray = result;
                });
                break;

              default:
                break;
            }
          }
        }, {
          key: "resetFilterProgramForm",
          value: function resetFilterProgramForm() {
            this.filterProgramForm.reset();
            this.getAllPrograms();
          }
        }, {
          key: "getAllManagers",
          value: function getAllManagers() {
            var _this15 = this;

            this.employeeService.getEmployeesByRole('MANAGER').subscribe(function (response) {
              response.forEach(function (manager) {
                console.log(manager.emailId);

                _this15.managersArray.push(manager.emailId);
              });
            });
          }
        }, {
          key: "getAllProjects",
          value: function getAllProjects() {
            var _this16 = this;

            this.programService.getAllProjects().subscribe(function (response) {
              _this16.projectArray = response;
              _this16.projectPaginatorLength = _this16.projectArray.length;
              console.log(_this16.projectArray);
              _this16.showProjectSpinner = false;
            });
          }
        }, {
          key: "getAllProjectsByManager",
          value: function getAllProjectsByManager(managerEmail) {
            var _this17 = this;

            this.programService.getProjectsByManager(managerEmail).subscribe(function (response) {
              console.log(response);
              _this17.projectArray = response;
              _this17.projectPaginatorLength = _this17.projectArray.length;
              _this17.showProjectSpinner = false;
            });
          }
        }, {
          key: "getProjectsByDateForEmployee",
          value: function getProjectsByDateForEmployee(employeeEmail, dateInMillis) {
            var _this18 = this;

            this.programService.getAllActiveProjectsOnParticularDate(employeeEmail, dateInMillis).subscribe(function (response) {
              console.log(response);
              _this18.projectArray = response;
              _this18.projectPaginatorLength = _this18.projectArray.length;
              _this18.showProjectSpinner = false;
            });
          }
        }, {
          key: "filterProjects",
          value: function filterProjects() {
            var _this19 = this;

            this.role = window.localStorage.getItem('role');
            var email = window.localStorage.getItem('tgt_email');

            switch (this.role) {
              case 'OPERATIONS':
                var searchProjectData = new FormData();
                searchProjectData.append('project', JSON.stringify(this.filterProjectForm.value));

                if (this.filterProjectForm.value.projectDate != null) {
                  searchProjectData.append('date', JSON.stringify(this.filterProjectForm.value.projectDate.getTime()));
                }

                this.programService.searchProjects(searchProjectData).subscribe(function (result) {
                  _this19.projectArray = result;
                });
                break;

              case 'MANAGER':
                var searchProjectDataManager = new FormData();
                searchProjectDataManager.append('project', JSON.stringify(this.filterProjectForm.value));
                searchProjectDataManager.append('manager', email);

                if (this.filterProjectForm.value.projectDate) {
                  searchProjectDataManager.append('date', JSON.stringify(this.filterProjectForm.value.projectDate.getTime()));
                }

                this.programService.searchProjectManager(searchProjectDataManager).subscribe(function (result) {
                  console.log(result);
                  _this19.projectArray = result;
                });
                break;

              default:
                break;
            }
          }
        }, {
          key: "resetFilterProjectForm",
          value: function resetFilterProjectForm() {
            this.filterProjectForm.reset();
            this.getAllProjects();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = window.localStorage.getItem('role');
            var email = window.localStorage.getItem('tgt_email');
            var today = new Date().getTime();
            console.log(this.role);
            console.log(email);

            switch (this.role) {
              case 'MANAGER':
                this.getAllProgramsByManager(email);
                this.getAllProjectsByManager(email);
                break;

              case 'OPERATIONS':
                this.getAllPrograms();
                this.getAllProjects();
                this.getAllManagers();
                break;

              case 'EMPLOYEE':
                this.getProgramsByDateForEmployee(email, today);
                this.getProjectsByDateForEmployee(email, today);
                break;

              default:
                break;
            }

            this.programService.getAllActivePrograms('ACTIVE').subscribe(function (response) {
              console.log(response);
            });
          }
        }]);

        return ViewProgramManagerComponent;
      }();

      ViewProgramManagerComponent.ɵfac = function ViewProgramManagerComponent_Factory(t) {
        return new (t || ViewProgramManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]));
      };

      ViewProgramManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewProgramManagerComponent,
        selectors: [["app-view-program-manager"]],
        decls: 13,
        vars: 10,
        consts: [["mat-stretch-tabs", "", 1, "example-tabs", "mat-elevation-z4"], ["label", "PROGRAMS"], ["class", "mat-elevation-z0", 3, "disabled", 4, "ngIf"], [3, "length", "pageSize", "page"], [4, "ngIf", "ngIfElse"], ["showPrograms", ""], ["label", "INTERNAL PROJECTS"], ["showProjects", ""], [1, "mat-elevation-z0", 3, "disabled"], ["mepProgram", "matExpansionPanel"], ["mat-icon-button", "", "matTooltip", "Refine Search", "color", "primary", 3, "click"], [1, "example-spacer"], ["mat-flat-button", "", "matTooltip", "Create New Program", "color", "primary", 3, "click", 4, "ngIf"], [3, "formGroup"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "2%", "fxFlex", "100%"], ["fxFlex", "50%", "appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "programName"], ["formControlName", "organizationName"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "33%", "appearance", "outline"], ["matInput", "", "formControlName", "programDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["programFilterPicker", ""], ["fxFlex", "33%", "appearance", "outline", 4, "ngIf"], ["formControlName", "programStatus"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["align", "end"], ["mat-flat-button", "", 1, "filter-buttons", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "filter-buttons", 3, "click"], ["mat-flat-button", "", "matTooltip", "Create New Program", "color", "primary", 3, "click"], [3, "value"], ["formControlName", "managerEmailId"], [1, "progress-spinner"], ["showProgramArray", ""], ["class", "program-cards", 3, "programData", 4, "ngFor", "ngForOf"], [1, "program-cards", 3, "programData"], ["mepProject", "matExpansionPanel"], ["mat-button", "", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["matInput", "", "formControlName", "projectName"], ["fxFlex", "50%", "appearance", "outline"], ["formControlName", "projectStatus"], ["matInput", "", "formControlName", "projectDate", 3, "matDatepicker"], ["projectFilterPicker", ""], ["fxFlex", "50%", "appearance", "outline", 4, "ngIf"], ["mat-button", "", "mat-flat-button", "", "color", "primary", 3, "click"], ["showProjectsArray", ""], ["class", "project-cards", 3, "projectData", 4, "ngFor", "ngForOf"], [1, "project-cards", 3, "projectData"]],
        template: function ViewProgramManagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewProgramManagerComponent_mat_expansion_panel_2_Template, 44, 7, "mat-expansion-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-paginator", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ViewProgramManagerComponent_Template_mat_paginator_page_3_listener($event) {
              return ctx.getPaginatorData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProgramManagerComponent_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewProgramManagerComponent_ng_template_5_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewProgramManagerComponent_mat_expansion_panel_8_Template, 39, 6, "mat-expansion-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-paginator", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ViewProgramManagerComponent_Template_mat_paginator_page_9_listener($event) {
              return ctx.getPaginatorData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewProgramManagerComponent_div_10_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewProgramManagerComponent_ng_template_11_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role != "EMPLOYEE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProgramSpinner)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role != "EMPLOYEE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.projectPaginatorLength)("pageSize", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProjectSpinner)("ngIfElse", _r6);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatSpinner"], _program_card_program_card_component__WEBPACK_IMPORTED_MODULE_22__["ProgramCardComponent"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_23__["ProjectCardComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"]],
        styles: ["mat-toolbar[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\nmat-tab-group[_ngcontent-%COMP%] {\r\n  background-color: #f5f7fb;\r\n  height: 92vh;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%], mat-expansion-panel[_ngcontent-%COMP%] {\r\n  background-color: #f5f7fb;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  max-width: 1500px;\r\n  height: 760px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.5%);\r\n  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);\r\n  background-color: lightgoldenrodyellow;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  font-family: \"Material Icons\";\r\n  cursor: pointer;\r\n}\r\n\r\n.prevent-click[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.program-cards[_ngcontent-%COMP%], .project-cards[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.progress-spinner[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.filter-buttons[_ngcontent-%COMP%] {\r\n  margin: 7px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcHJvZ3JhbS1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InZpZXctcHJvZ3JhbS1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZiO1xyXG4gIGhlaWdodDogOTJ2aDtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvcixcclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgaGVpZ2h0OiA3NjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjUlKTtcclxuICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByZXZlbnQtY2xpY2sge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ucHJvZ3JhbS1jYXJkcyxcclxuLnByb2plY3QtY2FyZHMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9ucyB7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProgramManagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-program-manager',
            templateUrl: './view-program-manager.component.html',
            styleUrls: ['./view-program-manager.component.css']
          }]
        }], function () {
          return [{
            type: _service_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8RW6":
    /*!****************************************************************************************!*\
      !*** ./src/app/component/monthly-tracker-details/monthly-tracker-details.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: MonthlyTrackerDetailsComponent, DialogContentExampleDialog */

    /***/
    function RW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthlyTrackerDetailsComponent", function () {
        return MonthlyTrackerDetailsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function () {
        return DialogContentExampleDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../service/monthly-tracker.service */
      "1+rk");
      /* harmony import */


      var src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/daily-tracker.service */
      "KjdE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _model_daily_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../model/daily-tracker */
      "6ORI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function MonthlyTrackerDetailsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthlyTrackerDetailsComponent_div_9_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openDialog(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getDateString(item_r1).slice(4, 7), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getDateString(item_r1).slice(8, 10), " ");
        }
      }

      function DialogContentExampleDialog_div_9_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r8.hours, " hrs");
        }
      }

      function DialogContentExampleDialog_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "web_asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogContentExampleDialog_div_9_div_6_Template, 6, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
        }
      }

      function DialogContentExampleDialog_br_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        }
      }

      function DialogContentExampleDialog_br_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        }
      }

      function DialogContentExampleDialog_div_12_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var program_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](program_r10.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", program_r10.hours, " hrs");
        }
      }

      function DialogContentExampleDialog_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cast_for_education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Programs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogContentExampleDialog_div_12_div_6_Template, 6, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.programs);
        }
      }

      function DialogContentExampleDialog_br_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        }
      }

      function DialogContentExampleDialog_br_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        }
      }

      function DialogContentExampleDialog_div_15_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selflearning_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selflearning_r12.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", selflearning_r12.hours, " hrs");
        }
      }

      function DialogContentExampleDialog_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu_book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Self Learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogContentExampleDialog_div_15_div_6_Template, 6, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.selflearnings);
        }
      }

      var MonthlyTrackerDetailsComponent = /*#__PURE__*/function () {
        function MonthlyTrackerDetailsComponent(apiService, api2, route, dialog) {
          _classCallCheck(this, MonthlyTrackerDetailsComponent);

          // for (let index = moment().add(10, 'days'); index < moment().add(30, 'days'); index=moment(index).add(1, 'days')) {
          //   this.dates.push(index.toDate().toDateString())
          // }
          this.apiService = apiService;
          this.api2 = api2;
          this.route = route;
          this.dialog = dialog;
          this.employeeName = 'Muthu';
          this.dailyTrackers = [];
        }

        _createClass(MonthlyTrackerDetailsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this20 = this;

            this.email = this.route.snapshot.params['email'];
            this.month = this.route.snapshot.params['month'];
            this.year = this.route.snapshot.params['year'];
            this.apiService.findMonthlyTrackerById(this.email + "-" + this.month + "-" + this.year).subscribe(function (response) {
              _this20.monthlyTracker = response;

              _this20.api2.getTrackersForPeriod(_this20.email, _this20.monthlyTracker.startDate, _this20.monthlyTracker.endDate).subscribe(function (response) {
                _this20.dailyTrackers = response;

                _this20.dailyTrackers.forEach(function (dailyTracker) {
                  dailyTracker.logs.forEach(function (log) {
                    return log.taskName;
                  });
                });
              });
            });
          }
        }, {
          key: "getDateString",
          value: function getDateString(item) {
            return moment__WEBPACK_IMPORTED_MODULE_2__(item.date).toDate().toDateString();
          }
        }, {
          key: "openDialog",
          value: function openDialog(dailyTracker) {
            var dialogRef = this.dialog.open(DialogContentExampleDialog, {
              data: dailyTracker
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return MonthlyTrackerDetailsComponent;
      }();

      MonthlyTrackerDetailsComponent.ɵfac = function MonthlyTrackerDetailsComponent_Factory(t) {
        return new (t || MonthlyTrackerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_3__["MonthlyTrackerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_4__["DailyTrackerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      MonthlyTrackerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MonthlyTrackerDetailsComponent,
        selectors: [["app-monthly-tracker-details"]],
        decls: 10,
        vars: 2,
        consts: [[1, "canvas"], [1, "overview"], [1, "main"], ["class", "date", 3, "click", 4, "ngFor", "ngForOf"], [1, "date", 3, "click"], [1, "number"]],
        template: function MonthlyTrackerDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Month: July");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Year : 2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MonthlyTrackerDetailsComponent_div_9_Template, 5, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Employee: ", ctx.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dailyTrackers);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\r\n.overview[_ngcontent-%COMP%]{\r\n  color: #33537f;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n}\r\n.canvas[_ngcontent-%COMP%]{\r\n  background-color: #c2cffe ;\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 50px;\r\n  text-align: left ;\r\n  height: 100vh;\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  gap: 10px;\r\n  padding: 50px;\r\n  border-radius: 10px;\r\n  height: 70vh;\r\n}\r\n.date[_ngcontent-%COMP%]{\r\n  border-radius: 60px;\r\n  text-align: center;\r\n  padding: 20px;\r\n  transition:all 0.2s;\r\n  background-color: #e3f5ff;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n.date[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.2);\r\n  background-color: #8542e7;\r\n}\r\n.number[_ngcontent-%COMP%]{\r\n  font-size: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnRobHktdHJhY2tlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GO0FBQ3BGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6Im1vbnRobHktdHJhY2tlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5vdmVydmlld3tcclxuICBjb2xvcjogIzMzNTM3ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcbi5jYW52YXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyY2ZmZSA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubWFpbntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcbi5kYXRle1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjphbGwgMC4ycztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmNWZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU0MmU3O1xyXG59XHJcblxyXG4ubnVtYmVye1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthlyTrackerDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-monthly-tracker-details',
            templateUrl: './monthly-tracker-details.component.html',
            styleUrls: ['./monthly-tracker-details.component.css']
          }]
        }], function () {
          return [{
            type: _service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_3__["MonthlyTrackerService"]
          }, {
            type: src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_4__["DailyTrackerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, null);
      })();

      var DialogContentExampleDialog = /*#__PURE__*/function () {
        function DialogContentExampleDialog(dailyTracker, dailog) {
          var _this21 = this;

          _classCallCheck(this, DialogContentExampleDialog);

          this.dailyTracker = dailyTracker;
          this.dailog = dailog;
          this.projects = [];
          this.selflearnings = [];
          this.programs = [];
          dailyTracker.logs.filter(function (log) {
            return log.logType === "PROGRAM";
          }).forEach(function (log) {
            _this21.programs.push({
              name: log.taskName,
              hours: log.logHours
            });
          });
          dailyTracker.logs.filter(function (log) {
            return log.logType === "PROJECT";
          }).forEach(function (log) {
            _this21.projects.push({
              name: log.taskName,
              hours: log.logHours
            });
          });
          dailyTracker.logs.filter(function (log) {
            return log.logType === "SELF_LEARNING";
          }).forEach(function (log) {
            _this21.selflearnings.push({
              name: log.taskName,
              hours: log.logHours
            });
          });
        }

        _createClass(DialogContentExampleDialog, [{
          key: "getDateString",
          value: function getDateString(item) {
            return moment__WEBPACK_IMPORTED_MODULE_2__(item.date).toDate().toDateString();
          }
        }, {
          key: "close",
          value: function close() {
            this.dailog.closeAll();
          }
        }]);

        return DialogContentExampleDialog;
      }();

      DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) {
        return new (t || DialogContentExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogContentExampleDialog,
        selectors: [["dialog-content-example-dialog"]],
        decls: 16,
        vars: 8,
        consts: [[1, "dialog"], [1, "close", 3, "click"], ["mat-dialog-title", ""], [1, "date"], [4, "ngIf"], [1, "mat-18"], ["class", "list", 4, "ngFor", "ngForOf"], [1, "list"], [1, "hrs"]],
        template: function DialogContentExampleDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentExampleDialog_Template_mat_icon_click_1_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daily Tracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DialogContentExampleDialog_div_9_Template, 7, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DialogContentExampleDialog_br_10_Template, 1, 0, "br", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DialogContentExampleDialog_br_11_Template, 1, 0, "br", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DialogContentExampleDialog_div_12_Template, 7, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DialogContentExampleDialog_br_13_Template, 1, 0, "br", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DialogContentExampleDialog_br_14_Template, 1, 0, "br", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DialogContentExampleDialog_div_15_Template, 7, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getDateString(ctx.dailyTracker));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programs.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programs.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programs.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selflearnings.length > 0);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: [".dialog[_ngcontent-%COMP%]{\r\n  position:relative;\r\n  width: 400px;\r\n  text-align: left;\r\n}\r\n.date[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #888;\r\n}\r\n.mat-18[_ngcontent-%COMP%]{\r\n  vertical-align: bottom;\r\n  transform: scale(1.2);\r\n}\r\n.list[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n.hrs[_ngcontent-%COMP%]{\r\n  font-size:15px;\r\n  color: #8542e7;\r\n}\r\n.close[_ngcontent-%COMP%]{\r\n  position:absolute;\r\n  top:0;\r\n  right:0;\r\n}\r\n.mat-dialog-title[_ngcontent-%COMP%]{\r\n  display: block;\r\n  border-radius: 20px;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  padding: 0px 20px;\r\n  background-color:  #7c32ec;\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsT0FBTztBQUNUO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGlhbG9ne1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5kYXRle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzg4ODtcclxufVxyXG4ubWF0LTE4e1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbi5saXN0e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaHJze1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIGNvbG9yOiAjODU0MmU3O1xyXG59XHJcbi5jbG9zZXtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICByaWdodDowO1xyXG59XHJcbi5tYXQtZGlhbG9nLXRpdGxle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjN2MzMmVjO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbn1cclxuaDN7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dialog-content-example-dialog',
            templateUrl: './dialog-content-example-dialog.html',
            styleUrls: ['./dialog.component.css']
          }]
        }], function () {
          return [{
            type: _model_daily_tracker__WEBPACK_IMPORTED_MODULE_7__["DailyTracker"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9huM":
    /*!****************************************************************************!*\
      !*** ./src/app/component/consolidated-view/consolidated-view.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ConsolidatedViewComponent */

    /***/
    function huM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsolidatedViewComponent", function () {
        return ConsolidatedViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/model/daily-tracker */
      "6ORI");
      /* harmony import */


      var src_app_model_employee_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/model/employee-data */
      "ujTg");
      /* harmony import */


      var src_app_model_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/model/log */
      "Vh5l");
      /* harmony import */


      var src_app_model_program_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/model/program-data */
      "iTbr");
      /* harmony import */


      var src_app_model_program_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/model/program-time */
      "11K9");
      /* harmony import */


      var src_app_model_project_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/model/project-data */
      "w+Dj");
      /* harmony import */


      var src_app_model_project_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/model/project-time */
      "3PO9");
      /* harmony import */


      var _consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../consolidated-analytics/consolidated-analytics.component */
      "Tlw6");
      /* harmony import */


      var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-csv/ngx-csv */
      "QAmw");
      /* harmony import */


      var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _leaves_leaves_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../leaves/leaves.component */
      "M9il");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/service/daily-tracker.service */
      "KjdE");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var ngx_avatar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-avatar */
      "UTQ3"); // import * as XLSX from 'xlsx';
      // import { XLSX$Consts } from 'xlsx';


      function ConsolidatedViewComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", month_r70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r70, " ");
        }
      }

      function ConsolidatedViewComponent_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var year_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r71, " ");
        }
      }

      function ConsolidatedViewComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_29_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
        }

        if (rf & 2) {
          var element_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", element_r72.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ConsolidatedViewComponent_td_29_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
        }
      }

      function ConsolidatedViewComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConsolidatedViewComponent_td_29_img_1_Template, 1, 1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsolidatedViewComponent_td_29_img_2_Template, 1, 0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r72 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r72.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r72.image);
        }
      }

      function ConsolidatedViewComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r76.name, " ");
        }
      }

      function ConsolidatedViewComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r77.email, " ");
        }
      }

      function ConsolidatedViewComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 Projects-Programs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_38_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var projectTime_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](projectTime_r81.project);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", projectTime_r81.time, "hrs");
        }
      }

      function ConsolidatedViewComponent_td_38_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var programTime_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](programTime_r82.program);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", programTime_r82.time, "hrs");
        }
      }

      function ConsolidatedViewComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ConsolidatedViewComponent_td_38_Template_mat_expansion_panel_opened_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r83.panelOpenState = true;
          })("closed", function ConsolidatedViewComponent_td_38_Template_mat_expansion_panel_closed_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r85.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xA0\xA0Project Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Program Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConsolidatedViewComponent_td_38_div_9_Template, 5, 2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConsolidatedViewComponent_td_38_div_11_Template, 5, 2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r78 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r78.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r78.programs);
        }
      }

      function ConsolidatedViewComponent_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r86 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r86.totalProjHrs);
        }
      }

      function ConsolidatedViewComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Program ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r87 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r87.totalProgHrs, " ");
        }
      }

      function ConsolidatedViewComponent_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Self Learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r88 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r88.self_Learning_Hrs, " ");
        }
      }

      function ConsolidatedViewComponent_th_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Leaves ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_td_50_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var element_r89 = ctx.$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r90.showLeaves(element_r89);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r89 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r89.leaves, " ");
        }
      }

      function ConsolidatedViewComponent_th_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r92 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r92.manager, " ");
        }
      }

      function ConsolidatedViewComponent_tr_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 63);
        }
      }

      function ConsolidatedViewComponent_tr_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 64);
        }
      }

      function ConsolidatedViewComponent_tr_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      }

      function ConsolidatedViewComponent_mat_option_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var year_r94 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r94, " ");
        }
      }

      function ConsolidatedViewComponent_th_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Program");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-avatar", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r95 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", element_r95.programName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("round", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r95.programName, "");
        }
      }

      function ConsolidatedViewComponent_th_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r96 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r96.programType, " ");
        }
      }

      function ConsolidatedViewComponent_th_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created On ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r97 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r97.createdOn, "dd/MM/yyyy"), "");
        }
      }

      function ConsolidatedViewComponent_th_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r98 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r98.startDate, "dd/MM/yyyy"));
        }
      }

      function ConsolidatedViewComponent_th_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " End Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r99 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r99.endDate, "dd/MM/yyyy"), " ");
        }
      }

      function ConsolidatedViewComponent_th_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Organisation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_90_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
        }

        if (rf & 2) {
          var element_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", element_r100.organizationBrandLogo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ConsolidatedViewComponent_td_90_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
        }
      }

      function ConsolidatedViewComponent_td_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConsolidatedViewComponent_td_90_img_1_Template, 1, 1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsolidatedViewComponent_td_90_img_2_Template, 1, 0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r100 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r100.organizationBrandLogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r100.organizationBrandLogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r100.organizationName, "");
        }
      }

      function ConsolidatedViewComponent_th_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Manager ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r104 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r104.managerEmailId, " ");
        }
      }

      function ConsolidatedViewComponent_th_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Working Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_96_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var memberHours_r107 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberHours_r107.member);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", memberHours_r107.hours, "hr");
        }
      }

      function ConsolidatedViewComponent_td_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ConsolidatedViewComponent_td_96_Template_mat_expansion_panel_opened_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r108.panelOpenState = true;
          })("closed", function ConsolidatedViewComponent_td_96_Template_mat_expansion_panel_closed_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r110.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " On-Program Employees ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConsolidatedViewComponent_td_96_div_7_Template, 5, 2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r105 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r105.memberList);
        }
      }

      function ConsolidatedViewComponent_th_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Hours ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r111 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r111.totalHours, " ");
        }
      }

      function ConsolidatedViewComponent_th_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r112 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r112.programStatus, " ");
        }
      }

      function ConsolidatedViewComponent_tr_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 63);
        }
      }

      function ConsolidatedViewComponent_tr_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 64);
        }
      }

      function ConsolidatedViewComponent_tr_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      }

      function ConsolidatedViewComponent_mat_option_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var year_r114 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r114, " ");
        }
      }

      function ConsolidatedViewComponent_th_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-avatar", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r115 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", element_r115.projectName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("round", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r115.projectName, "");
        }
      }

      function ConsolidatedViewComponent_th_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created On ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r116 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r116.createdOn, "dd/MM/yyyy"), "");
        }
      }

      function ConsolidatedViewComponent_th_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r117 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r117.startDate, "dd/MM/yyyy"));
        }
      }

      function ConsolidatedViewComponent_th_132_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " End Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_133_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r118 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r118.endDate, "dd/MM/yyyy"), " ");
        }
      }

      function ConsolidatedViewComponent_th_135_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Manager ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r119 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r119.managerEmailId, " ");
        }
      }

      function ConsolidatedViewComponent_th_138_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Working Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_139_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var memberHours_r122 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberHours_r122.member);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", memberHours_r122.hours, "hr");
        }
      }

      function ConsolidatedViewComponent_td_139_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ConsolidatedViewComponent_td_139_Template_mat_expansion_panel_opened_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r123.panelOpenState = true;
          })("closed", function ConsolidatedViewComponent_td_139_Template_mat_expansion_panel_closed_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

            var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r125.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " On-Project Employees ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConsolidatedViewComponent_td_139_div_7_Template, 5, 2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r120 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r120.memberList);
        }
      }

      function ConsolidatedViewComponent_th_141_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Hours ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_142_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r126 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r126.totalHours, " ");
        }
      }

      function ConsolidatedViewComponent_th_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolidatedViewComponent_td_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r127 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r127.projectStatus, " ");
        }
      }

      function ConsolidatedViewComponent_tr_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 63);
        }
      }

      function ConsolidatedViewComponent_tr_147_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 64);
        }
      }

      function ConsolidatedViewComponent_tr_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      } // import { FileSaverService } from 'ngx-filesaver';


      var ConsolidatedViewComponent = /*#__PURE__*/function () {
        function ConsolidatedViewComponent(dialog, empService, dtService, progServ) {
          _classCallCheck(this, ConsolidatedViewComponent);

          this.dialog = dialog;
          this.empService = empService;
          this.dtService = dtService;
          this.progServ = progServ; //variable to check checkbox status for yearly report

          this.yearlyReport = false;
          this.yearlyReportDownloaded = false; // array to hold each row of report(row=EmployeeData object)

          this.empData = []; //array to hold each row of Program report(row=ProgramData object)

          this.progData = [];
          this.projData = []; //array for name of columns in employee report

          this.displayedColumnsEmp = ['image', 'email', 'name', 'projectHrs', 'programHrs', 'self_Learning_Hrs', 'leaves', 'manager', 'projects-programs']; //array for name of columns in program report

          this.displayedColumnsProg = ['programName', 'programType', 'createdOn', 'startDate', 'endDate', 'organizationName', 'managerEmailId', 'memberList', 'totalHours', 'programStatus'];
          this.displayedColumnsProj = ['projectName', 'createdOn', 'startDate', 'endDate', 'managerEmailId', 'memberList', 'totalHours', 'projectStatus'];
          this.selectedValueYear = 2022;
          this.selectedValueYearProg = 2022;
          this.selectedValueYearProj = 2022;
          this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          this.years = [2018, 2019, 2020, 2021, 2022];
          this.selectedValueMonth = this.months[new Date().getMonth()];
        }

        _createClass(ConsolidatedViewComponent, [{
          key: "applyFilterEmp",
          value: function applyFilterEmp(event) {
            var filterValue = event.target.value;
            this.dataSourceEmp.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "applyFilterProg",
          value: function applyFilterProg(event) {
            var filterValue = event.target.value;
            this.dataSourceProg.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "applyFilterProj",
          value: function applyFilterProj(event) {
            var filterValue = event.target.value;
            this.dataSourceProj.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchAllDailyTrackers();
          } //get all employees from db

        }, {
          key: "fetchAllEmployees",
          value: function fetchAllEmployees() {
            var _this22 = this;

            this.empService.getAllEmployees().subscribe(function (result) {
              console.log("all Employees:", result);
              _this22.empList = result;

              _this22.createEmployeeData();
            });
          } //get all daily tracker for a month and year

        }, {
          key: "fetchAllDailyTrackers",
          value: function fetchAllDailyTrackers() {
            var _this23 = this;

            //reset all 3 main arrays
            this.empData = [];
            this.empList = [];
            this.dailyTrackers = [];
            var month = this.months.indexOf(this.selectedValueMonth);
            var year = this.selectedValueYear;

            if (this.yearlyReport) //if yearly report checkbox is checked, get trackers for the year
              {
                this.yearlyReportDownloaded = true;
                this.getDailyTrackersForYear(year);
              } else {
              this.yearlyReportDownloaded = false;
              this.dtService.getAllDailyTrackers(month, year).subscribe(function (res) {
                console.log(res);
                _this23.dailyTrackers = res;

                _this23.fetchAllEmployees();
              });
            }
          } //get daily trackers for the year

        }, {
          key: "getDailyTrackersForYear",
          value: function getDailyTrackersForYear(year) {
            var _this24 = this;

            var fromDateStr = "01/01/" + year;
            var toDateStr = "12/31/" + year;
            this.dtService.getDailyTrackersForPeriod(new Date(fromDateStr).getTime(), new Date(toDateStr).getTime()).subscribe(function (res) {
              _this24.dailyTrackers = res;

              _this24.fetchAllEmployees();
            });
          } //create Employee Data list , assigning all EmployeeData objects to Employee_List

        }, {
          key: "createEmployeeData",
          value: function createEmployeeData() {
            var _iterator = _createForOfIteratorHelper(this.empList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) //for every employee
              {
                var emp = _step.value;
                var totalProgHrs = 0;
                var totalProjHrs = 0;
                var self_Learning_Hrs = 0;
                var uniqueProgList = [];
                var uniqueProjList = [];
                var trackersOfThisEmp = [];
                var leaves = 0;
                var fullDayLeaveList = [];
                var halfDayLeaveList = []; //iterate through all trackers in dailyTrackers list to find this employee's tracker

                var _iterator2 = _createForOfIteratorHelper(this.dailyTrackers),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var tracker = _step2.value;

                    if (tracker.employeeEmail == emp.emailId) {
                      //add this tracker to list of this employee's daily tracker for future use in this loop
                      trackersOfThisEmp.push(tracker); //capture leave status and add to leave variable 1 for fullday 0.5 for halfday

                      if (tracker.leaveType == src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].FULL_DAY) {
                        var date = new Date(tracker.date);
                        console.log("FullDay Leave pushed for:", date);
                        fullDayLeaveList.push(tracker.date);
                        leaves += 1;
                      } else {
                        if (tracker.leaveType == src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].NONE) {} else {
                          console.log("HalfDay Leave pushed for:", new Date(tracker.date));
                          halfDayLeaveList.push(tracker.date);
                          leaves += 0.5;
                        }
                      }

                      var _iterator4 = _createForOfIteratorHelper(tracker.logs),
                          _step4;

                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          var log = _step4.value;

                          switch (log.logType) {
                            case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROGRAM:
                              console.log("program log for:", emp.employeeName, " Hours:", log.logHours);
                              totalProgHrs += log.logHours; //check if this program already exists in uniqueProgList, if not, add it

                              var found = false;

                              for (var _i5 = 0; _i5 < uniqueProgList.length; _i5++) {
                                if (log.taskName == uniqueProgList[_i5]) {
                                  found = true;
                                }
                              }

                              if (!found) {
                                uniqueProgList.push(log.taskName); //create unique list of programs
                              }

                              break;

                            case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROJECT:
                              console.log("project log for:", emp.employeeName, " Hours:", log.logHours);
                              totalProjHrs += log.logHours; //check if this project already exists in uniqueProgList, if not, add it

                              var found1 = false;

                              for (var _i6 = 0; _i6 < uniqueProjList.length; _i6++) {
                                if (log.taskName == uniqueProjList[_i6]) {
                                  found1 = true;
                                }
                              }

                              if (!found1) {
                                uniqueProjList.push(log.taskName); //create unique list of programs
                              }

                              break;

                            case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].SELF_LEARNING:
                              console.log("SelfLearning for:", emp.employeeName, " Hours:", log.logHours);
                              self_Learning_Hrs += log.logHours;
                              break;

                            default:
                              console.log("Wrong Log Type Found");
                          }
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                var programs = [];

                for (var _i = 0, _uniqueProgList = uniqueProgList; _i < _uniqueProgList.length; _i++) {
                  var prog = _uniqueProgList[_i];
                  programs.push(new src_app_model_program_time__WEBPACK_IMPORTED_MODULE_7__["ProgramTime"](prog, 0)); //create objects with program name and loghours=0
                }

                var projects = [];

                for (var _i2 = 0, _uniqueProjList = uniqueProjList; _i2 < _uniqueProjList.length; _i2++) {
                  var proj = _uniqueProjList[_i2];
                  projects.push(new src_app_model_project_time__WEBPACK_IMPORTED_MODULE_9__["ProjectTime"](proj, 0)); //create objects with program name and loghours=0
                } //with unique prog and proj list, iterate through the trackers again to get total hours for each prog/proj


                for (var _i3 = 0, _trackersOfThisEmp = trackersOfThisEmp; _i3 < _trackersOfThisEmp.length; _i3++) {
                  var _tracker = _trackersOfThisEmp[_i3];

                  var _iterator3 = _createForOfIteratorHelper(_tracker.logs),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var log = _step3.value;

                      switch (log.logType) {
                        case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROGRAM:
                          // if its a program log, search programtime array for prog and add to its hours
                          for (var i = 0; i < programs.length; i++) {
                            if (log.taskName == programs[i].program) {
                              programs[i].time += log.logHours;
                            }
                          }

                          break;

                        case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROJECT:
                          // if its a program log, search programtime array for prog and add to its hours
                          for (var _i4 = 0; _i4 < projects.length; _i4++) {
                            if (log.taskName == projects[_i4].project) {
                              projects[_i4].time += log.logHours;
                            }
                          }

                          break;

                        case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].SELF_LEARNING:
                        default:
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                } //create EmployeeData object and push to empData array FINAL OUTPUT IN REPORT


                this.empData.push(new src_app_model_employee_data__WEBPACK_IMPORTED_MODULE_4__["EmployeeData"](emp.profileImage, emp.emailId, emp.employeeName, projects, programs, totalProgHrs, totalProjHrs, self_Learning_Hrs, leaves, emp.managerEmailId, fullDayLeaveList, halfDayLeaveList));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            console.log("hello", this.empData);
            this.dataSourceEmp = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.empData);
            this.fetchAllPrograms();
            this.fetchAllProjects();
          } //gets all active/inactive projects from backend

        }, {
          key: "fetchAllProjects",
          value: function fetchAllProjects() {
            var _this25 = this;

            this.projList = [];
            this.dailyTrackersYear2 = [];
            this.projData = [];
            this.progServ.getAllProjects().subscribe(function (res) {
              console.log("All Projects from backend:", res);
              _this25.projList = _this25.getProjectsForTheYear(res, _this25.selectedValueYearProj);

              var _iterator5 = _createForOfIteratorHelper(_this25.projList),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var project = _step5.value;

                  _this25.projData.push(new src_app_model_project_data__WEBPACK_IMPORTED_MODULE_8__["ProjectData"](project.organizationBrandLogo, project.projectName, project.organizationName, project.createdOn, project.startDate, project.endDate, project.managerEmailId, project.projectStatus)); //member list and total hours are optional parameters and will be calculated in following code

                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              console.log("project data objects:", _this25.projData);

              _this25.createProjectData();
            });
          } //gets all active/inactive programs from backend

        }, {
          key: "fetchAllPrograms",
          value: function fetchAllPrograms() {
            var _this26 = this;

            this.progList = [];
            this.dailyTrackersYear1 = [];
            this.progData = [];
            this.progServ.getAllPrograms().subscribe(function (res) {
              console.log("All Programs from backend:", res);
              _this26.progList = _this26.getProgramsForTheYear(res, _this26.selectedValueYearProg);

              var _iterator6 = _createForOfIteratorHelper(_this26.progList),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var program = _step6.value;

                  _this26.progData.push(new src_app_model_program_data__WEBPACK_IMPORTED_MODULE_6__["ProgramData"](program.organizationBrandLogo, program.programName, program.organizationName, program.programType, program.createdOn, program.startDate, program.endDate, program.managerEmail, program.programStatus)); //member list and total hours are optional parameters and will be calculated in following code

                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              console.log("program data objects:", _this26.progData);

              _this26.createProgramData();
            });
          } //creates ProgramData object for each program in progList

        }, {
          key: "createProgramData",
          value: function createProgramData() {
            var _this27 = this;

            var yearStart = new Date("01/01/" + this.selectedValueYearProg).getTime();
            var yearEnd = new Date("12/31/" + this.selectedValueYearProg).getTime();
            this.dtService.getDailyTrackersForPeriod(yearStart, yearEnd).subscribe(function (result) {
              console.table(result);
              _this27.dailyTrackersYear1 = result;

              var _iterator7 = _createForOfIteratorHelper(_this27.dailyTrackersYear1),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var tracker = _step7.value;

                  var _iterator8 = _createForOfIteratorHelper(tracker.logs),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var log = _step8.value;

                      if (log.logType == src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROGRAM) {
                        for (var i = 0; i < _this27.progData.length; i++) {
                          if (_this27.progData[i].programName == log.taskName) {
                            _this27.progData[i].totalHours += log.logHours; //add loghours to that program's total hours
                            //check if this employee exists in member list of that program, if not add him with hours, if yes, then add hours against that employee for that program

                            var memberFound = false;

                            for (var j = 0; j < _this27.progData[i].memberList.length; j++) {
                              if (_this27.progData[i].memberList[j].member == tracker.employeeEmail) {
                                memberFound = true;
                                _this27.progData[i].memberList[j].hours += log.logHours; //if member found, add the loghours for him
                              }
                            }

                            if (!memberFound) {
                              _this27.progData[i].memberList.push(new src_app_model_program_data__WEBPACK_IMPORTED_MODULE_6__["MemberHour"](tracker.employeeEmail, log.logHours)); //push a new member hour entry to members array of that program  

                            }
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              console.log("Final ProgramData obj for report:", _this27.progData);
              _this27.dataSourceProg = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this27.progData);
            });
          }
        }, {
          key: "createProjectData",
          value: function createProjectData() {
            var _this28 = this;

            var yearStart = new Date("01/01/" + this.selectedValueYearProj).getTime();
            var yearEnd = new Date("12/31/" + this.selectedValueYearProj).getTime();
            this.dtService.getDailyTrackersForPeriod(yearStart, yearEnd).subscribe(function (result) {
              console.table(result);
              _this28.dailyTrackersYear2 = result;

              var _iterator9 = _createForOfIteratorHelper(_this28.dailyTrackersYear2),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var tracker = _step9.value;

                  var _iterator10 = _createForOfIteratorHelper(tracker.logs),
                      _step10;

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var log = _step10.value;

                      if (log.logType == src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROJECT) {
                        for (var i = 0; i < _this28.projData.length; i++) {
                          if (_this28.projData[i].projectName == log.taskName) {
                            _this28.projData[i].totalHours += log.logHours; //add loghours to that program's total hours
                            //check if this employee exists in member list of that program, if not add him with hours, if yes, then add hours against that employee for that program

                            var memberFound = false;

                            for (var j = 0; j < _this28.projData[i].memberList.length; j++) {
                              if (_this28.projData[i].memberList[j].member == tracker.employeeEmail) {
                                memberFound = true;
                                _this28.projData[i].memberList[j].hours += log.logHours; //if member found, add the loghours for him
                              }
                            }

                            if (!memberFound) {
                              _this28.projData[i].memberList.push(new src_app_model_program_data__WEBPACK_IMPORTED_MODULE_6__["MemberHour"](tracker.employeeEmail, log.logHours)); //push a new member hour entry to members array of that program  

                            }
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              console.log("Final projectData objects:", _this28.projData);
              _this28.dataSourceProj = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this28.projData);
            });
          }
        }, {
          key: "getProgramsForTheYear",
          value: function getProgramsForTheYear(list, year) {
            var result = [];
            var yearStart = new Date("01/01/" + year).getTime();
            var yearEnd = new Date("12/31/" + year).getTime();

            var _iterator11 = _createForOfIteratorHelper(list),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var prog = _step11.value;

                if (prog.createdOn >= yearStart && prog.createdOn <= yearEnd) {
                  result.push(prog);
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            console.log("inside get programsfor the year method, for year", year, "programs are", result);
            return result;
          }
        }, {
          key: "getProjectsForTheYear",
          value: function getProjectsForTheYear(list, year) {
            var result = [];
            var yearStart = new Date("01/01/" + year).getTime();
            var yearEnd = new Date("12/31/" + year).getTime();

            var _iterator12 = _createForOfIteratorHelper(list),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var proj = _step12.value;

                if (proj.createdOn >= yearStart && proj.createdOn <= yearEnd) {
                  result.push(proj);
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            console.log("inside get projects for the year method, for year", year, "programs are", result);
            return result;
          } //open analytics

        }, {
          key: "openAnalyticsProg",
          value: function openAnalyticsProg() {
            //data for barchart/pieChart
            var progName = [];
            var progHours = [];
            var employeeOnProgram = [];

            var _iterator13 = _createForOfIteratorHelper(this.progData),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var prog = _step13.value;
                progName.push(prog.programName);
                progHours.push(prog.totalHours);
                employeeOnProgram.push(prog.memberList.length);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            this.analyticsDataProg = {
              barChartLabels: progName,
              barChartData: [{
                data: progHours,
                label: "Total Billed Hours"
              }],
              barChartHeader: "Program Hour Comaprison",
              pieChartLabels: progName,
              pieChartData: [{
                data: employeeOnProgram
              }],
              pieChartHeader: "TeamSize Comparison"
            };
            var dialogConf = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConf.data = this.analyticsDataProg;
            this.dialog.open(_consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_10__["ConsolidatedAnalyticsComponent"], dialogConf);
          }
        }, {
          key: "openAnalyticsEmp",
          value: function openAnalyticsEmp() {
            //data for barchart
            var empName = [];
            var progHrs = [];
            var projHrs = [];
            var slHrs = [];

            var _iterator14 = _createForOfIteratorHelper(this.empData),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var empObj = _step14.value;
                empName.push(empObj.name);
                progHrs.push(empObj.totalProgHrs);
                projHrs.push(empObj.totalProjHrs);
                slHrs.push(empObj.self_Learning_Hrs);
              } //data for pie chart, show hour distribution of all employees of comapny among program, project, selflearning

            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            var compProgHr = 0,
                compProjHr = 0,
                compSelfLearnHr = 0;

            var _iterator15 = _createForOfIteratorHelper(this.empData),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var empObj = _step15.value;
                compProgHr += empObj.totalProgHrs;
                compProjHr += empObj.totalProjHrs;
                compSelfLearnHr += empObj.self_Learning_Hrs;
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            this.analyticsDataEmp = {
              barChartLabels: empName,
              barChartData: [{
                data: progHrs,
                label: "Program Hrs"
              }, {
                data: projHrs,
                label: "Project Hrs"
              }, {
                data: slHrs,
                label: "SelfStudy Hrs"
              }],
              pieChartLabels: ["Program Hrs", "Project Hrs", "Self Learning Hrs"],
              pieChartData: [{
                data: [compProgHr, compProjHr, compSelfLearnHr]
              }],
              barChartHeader: "Employee Hours Distribution",
              pieChartHeader: "Total Billable Hours Distr."
            };
            var dialogConf = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConf.data = this.analyticsDataEmp;
            this.dialog.open(_consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_10__["ConsolidatedAnalyticsComponent"], dialogConf);
          }
        }, {
          key: "openAnalyticsProj",
          value: function openAnalyticsProj() {
            var projName = [];
            var projHours = [];
            var employeeOnProject = [];

            var _iterator16 = _createForOfIteratorHelper(this.projData),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var proj = _step16.value;
                projName.push(proj.projectName);
                projHours.push(proj.totalHours);
                employeeOnProject.push(proj.memberList.length);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            this.analyticsDataProj = {
              barChartLabels: projName,
              barChartData: [{
                data: projHours,
                label: "Total Billed Hours"
              }],
              barChartHeader: "Project Hour Comaprison",
              pieChartLabels: projName,
              pieChartData: [{
                data: employeeOnProject
              }],
              pieChartHeader: "TeamSize Comparison"
            };
            var dialogConf = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConf.data = this.analyticsDataProj;
            this.dialog.open(_consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_10__["ConsolidatedAnalyticsComponent"], dialogConf);
          } //employee report excel download

        }, {
          key: "downloadEmpReport",
          value: function downloadEmpReport() {
            // let element=document.getElementById("employeeTable");
            var reportObj = [];

            var _iterator17 = _createForOfIteratorHelper(this.empData),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var emp = _step17.value;
                reportObj.push({
                  name: emp.name,
                  email: emp.email,
                  projectHours: emp.totalProgHrs,
                  programHrs: emp.totalProgHrs,
                  selfLearningHours: emp.self_Learning_Hrs,
                  manager: emp.manager,
                  leaves: emp.leaves
                });
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            var _title;

            if (this.yearlyReportDownloaded) {
              _title = "year" + this.selectedValueYear;
            } else {
              _title = this.selectedValueMonth;
            }

            var options = {
              fieldSeparator: ',',
              quoteStrings: '"',
              decimalseparator: '.',
              showLabels: true,
              showTitle: true,
              title: 'EmployeeReport:' + _title,
              useBom: true,
              noDownload: false,
              headers: ["Name", "Email", "Project Hours", "Program Hours", "Self Learning Hours", "Manager", "Leaves(Days)"]
            };
            console.log("reportObj:", reportObj);
            new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_11__["ngxCsv"](reportObj, 'EmployeeReport:' + _title, options);
          } //show leave details in a modal

        }, {
          key: "showLeaves",
          value: function showLeaves(empDataObj) {
            var dialogConf = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConf.data = {
              fullDayList: empDataObj.fullDayLeavesList,
              halfDayList: empDataObj.halfDayLeavesList
            };
            this.dialog.open(_leaves_leaves_component__WEBPACK_IMPORTED_MODULE_12__["LeavesComponent"], dialogConf);
            console.log("leave list for:", empDataObj.name, empDataObj.fullDayLeavesList, empDataObj.halfDayLeavesList);
          }
        }, {
          key: "downloadProjReport",
          value: function downloadProjReport() {
            // let element=document.getElementById("employeeTable");
            var reportObj = [];

            var _iterator18 = _createForOfIteratorHelper(this.projData),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var proj = _step18.value;
                reportObj.push({
                  projectName: proj.projectName,
                  createdOn: new Date(proj.createdOn),
                  startDate: new Date(proj.startDate),
                  endDate: new Date(proj.endDate),
                  managerEmailId: proj.managerEmailId,
                  totalHours: proj.totalHours,
                  projectStatus: proj.projectStatus
                });
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }

            var options = {
              fieldSeparator: ',',
              quoteStrings: '"',
              decimalseparator: '.',
              showLabels: true,
              showTitle: true,
              title: 'ProjectsReport:' + this.selectedValueYearProj,
              useBom: true,
              noDownload: false,
              headers: ["ProjectName", "CreatedOn", "StartDate", "EndDate", "Manager", "TotalBilledHours", "ProjectStatus"]
            };
            console.log("reportObj:", reportObj);
            new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_11__["ngxCsv"](reportObj, 'ProjectReport:' + this.selectedValueYearProj, options);
          }
        }, {
          key: "downloadProgReport",
          value: function downloadProgReport() {
            // let element=document.getElementById("employeeTable");
            var reportObj = [];

            var _iterator19 = _createForOfIteratorHelper(this.progData),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var prog = _step19.value;
                reportObj.push({
                  programName: prog.programName,
                  createdOn: new Date(prog.createdOn),
                  startDate: new Date(prog.startDate),
                  endDate: new Date(prog.endDate),
                  managerEmailId: prog.managerEmailId,
                  totalHours: prog.totalHours,
                  projectStatus: prog.programStatus,
                  organizationName: prog.organizationName,
                  programType: prog.programType
                });
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            var options = {
              fieldSeparator: ',',
              quoteStrings: '"',
              decimalseparator: '.',
              showLabels: true,
              showTitle: true,
              title: 'ProgramReport:' + this.selectedValueYearProg,
              useBom: true,
              noDownload: false,
              headers: ["ProjectName", "CreatedOn", "StartDate", "EndDate", "Manager", "TotalBilledHours", "ProjectStatus", "OrganizationName", "ProgramType"]
            };
            console.log("reportObj:", reportObj);
            new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_11__["ngxCsv"](reportObj, 'ProgramReport:' + this.selectedValueYearProg, options);
          }
        }]);

        return ConsolidatedViewComponent;
      }();

      ConsolidatedViewComponent.ɵfac = function ConsolidatedViewComponent_Factory(t) {
        return new (t || ConsolidatedViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_14__["DailyTrackerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_15__["ProgramService"]));
      };

      ConsolidatedViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsolidatedViewComponent,
        selectors: [["app-consolidated-view"]],
        decls: 151,
        vars: 18,
        consts: [["data-text", "CONSOLIDATED REPORTS"], ["label", "Employee"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], ["appearance", "fill", 1, "width-10per"], ["name", "month", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "year", 3, "ngModel", "ngModelChange"], ["id", "search", 3, "click"], ["color", "primary", 1, "margin-left-100px", 3, "ngModel", "ngModelChange"], ["src", "../../../assets/download_icon.png", "matTooltip", "download report", 1, "download", 3, "click"], ["src", "../../../assets/viewAnalyticsIcon.png", "id", "analytics", "matTooltip", "View Analytics", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "image"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["matColumnDef", "projects-programs"], ["matColumnDef", "projectHrs"], ["mat-cell", "", "align", "center", 4, "matCellDef"], ["matColumnDef", "programHrs"], ["mat-header-cell", "", "align", "center", 4, "matHeaderCellDef"], ["matColumnDef", "self_Learning_Hrs"], ["matColumnDef", "leaves"], ["mat-cell", "", "align", "center", "class", "leaves", "matTooltip", "Leave Details", 3, "click", 4, "matCellDef"], ["matColumnDef", "manager"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["label", "Programs"], ["name", "year", "matTooltip", "Year Of Creation", 3, "ngModel", "ngModelChange"], ["matColumnDef", "programName"], ["matColumnDef", "programType"], ["matColumnDef", "createdOn"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "organizationName"], ["matColumnDef", "managerEmailId"], ["matColumnDef", "memberList"], ["matColumnDef", "totalHours"], ["matColumnDef", "programStatus"], ["label", "Projects"], ["matColumnDef", "projectName"], ["matColumnDef", "projectStatus"], ["id", "employeeTable"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["class", "profile", "alt", "imagefound", 3, "src", 4, "ngIf"], ["class", "profile", "src", "../../../assets/noProfileImage.jpg", "alt", "imageNotFound", 4, "ngIf"], ["alt", "imagefound", 1, "profile", 3, "src"], ["src", "../../../assets/noProfileImage.jpg", "alt", "imageNotFound", 1, "profile"], [3, "opened", "closed"], ["id", "space-200px"], [1, "left"], ["class", "flex-row border", 4, "ngFor", "ngForOf"], [1, "right"], [1, "flex-row", "border"], ["mat-cell", "", "align", "center"], ["mat-header-cell", "", "align", "center"], ["mat-cell", "", "align", "center", "matTooltip", "Leave Details", 1, "leaves", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["size", "40", 3, "name", "round"], ["class", "flex-row-apart border", 4, "ngFor", "ngForOf"], [1, "flex-row-apart", "border"]],
        template: function ConsolidatedViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CONSOLIDATED REPORTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsolidatedViewComponent_Template_input_keyup_8_listener($event) {
              return ctx.applyFilterEmp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Choose Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConsolidatedViewComponent_Template_mat_select_ngModelChange_13_listener($event) {
              return ctx.selectedValueMonth = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConsolidatedViewComponent_mat_option_14_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Choose Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConsolidatedViewComponent_Template_mat_select_ngModelChange_18_listener($event) {
              return ctx.selectedValueYear = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConsolidatedViewComponent_mat_option_19_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_mat_icon_click_20_listener() {
              return ctx.fetchAllDailyTrackers();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConsolidatedViewComponent_Template_mat_checkbox_ngModelChange_22_listener($event) {
              return ctx.yearlyReport = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Yearly Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_img_click_24_listener() {
              return ctx.downloadEmpReport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_img_click_25_listener() {
              return ctx.openAnalyticsEmp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ConsolidatedViewComponent_th_28_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ConsolidatedViewComponent_td_29_Template, 3, 2, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConsolidatedViewComponent_th_31_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ConsolidatedViewComponent_td_32_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ConsolidatedViewComponent_th_34_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ConsolidatedViewComponent_td_35_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ConsolidatedViewComponent_th_37_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ConsolidatedViewComponent_td_38_Template, 12, 2, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ConsolidatedViewComponent_th_40_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ConsolidatedViewComponent_td_41_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ConsolidatedViewComponent_th_43_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ConsolidatedViewComponent_td_44_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ConsolidatedViewComponent_th_46_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ConsolidatedViewComponent_td_47_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ConsolidatedViewComponent_th_49_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ConsolidatedViewComponent_td_50_Template, 2, 1, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ConsolidatedViewComponent_th_52_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ConsolidatedViewComponent_td_53_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ConsolidatedViewComponent_tr_54_Template, 1, 0, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ConsolidatedViewComponent_tr_55_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ConsolidatedViewComponent_tr_56_Template, 3, 1, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-tab", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsolidatedViewComponent_Template_input_keyup_62_listener($event) {
              return ctx.applyFilterProg($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Choose Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConsolidatedViewComponent_Template_mat_select_ngModelChange_67_listener($event) {
              return ctx.selectedValueYearProg = $event;
            })("ngModelChange", function ConsolidatedViewComponent_Template_mat_select_ngModelChange_67_listener() {
              return ctx.fetchAllPrograms();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ConsolidatedViewComponent_mat_option_68_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_img_click_69_listener() {
              return ctx.downloadProgReport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_img_click_70_listener() {
              return ctx.openAnalyticsProg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ConsolidatedViewComponent_th_73_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ConsolidatedViewComponent_td_74_Template, 4, 3, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ConsolidatedViewComponent_th_76_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ConsolidatedViewComponent_td_77_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ConsolidatedViewComponent_th_79_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ConsolidatedViewComponent_td_80_Template, 3, 4, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](82, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ConsolidatedViewComponent_th_83_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ConsolidatedViewComponent_td_84_Template, 3, 4, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ConsolidatedViewComponent_th_86_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ConsolidatedViewComponent_td_87_Template, 3, 4, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ConsolidatedViewComponent_th_89_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ConsolidatedViewComponent_td_90_Template, 4, 3, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](91, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ConsolidatedViewComponent_th_92_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ConsolidatedViewComponent_td_93_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](94, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ConsolidatedViewComponent_th_95_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ConsolidatedViewComponent_td_96_Template, 8, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](97, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ConsolidatedViewComponent_th_98_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ConsolidatedViewComponent_td_99_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](100, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ConsolidatedViewComponent_th_101_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, ConsolidatedViewComponent_td_102_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, ConsolidatedViewComponent_tr_103_Template, 1, 0, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ConsolidatedViewComponent_tr_104_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ConsolidatedViewComponent_tr_105_Template, 3, 1, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-tab", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsolidatedViewComponent_Template_input_keyup_111_listener($event) {
              return ctx.applyFilterProj($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Choose Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConsolidatedViewComponent_Template_mat_select_ngModelChange_116_listener($event) {
              return ctx.selectedValueYearProj = $event;
            })("ngModelChange", function ConsolidatedViewComponent_Template_mat_select_ngModelChange_116_listener() {
              return ctx.fetchAllProjects();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ConsolidatedViewComponent_mat_option_117_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_img_click_118_listener() {
              return ctx.downloadProjReport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedViewComponent_Template_img_click_119_listener() {
              return ctx.openAnalyticsProj();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](121, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, ConsolidatedViewComponent_th_122_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ConsolidatedViewComponent_td_123_Template, 4, 3, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](124, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, ConsolidatedViewComponent_th_125_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ConsolidatedViewComponent_td_126_Template, 3, 4, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](128, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, ConsolidatedViewComponent_th_129_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, ConsolidatedViewComponent_td_130_Template, 3, 4, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](131, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, ConsolidatedViewComponent_th_132_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, ConsolidatedViewComponent_td_133_Template, 3, 4, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](134, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, ConsolidatedViewComponent_th_135_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, ConsolidatedViewComponent_td_136_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](137, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, ConsolidatedViewComponent_th_138_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, ConsolidatedViewComponent_td_139_Template, 8, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](140, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, ConsolidatedViewComponent_th_141_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, ConsolidatedViewComponent_td_142_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](143, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, ConsolidatedViewComponent_th_144_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, ConsolidatedViewComponent_td_145_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, ConsolidatedViewComponent_tr_146_Template, 1, 0, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, ConsolidatedViewComponent_tr_147_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, ConsolidatedViewComponent_tr_148_Template, 3, 1, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "table", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValueMonth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValueYear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yearlyReport);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValueYearProg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceProg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsProg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsProg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValueYearProj);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceProj);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsProj);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsProj);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckbox"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], ngx_avatar__WEBPACK_IMPORTED_MODULE_27__["AvatarComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 20%;\r\n    margin:0 20px;\r\n  }\r\n  \r\n  .width-100px[_ngcontent-%COMP%]{\r\n    width:150px;\r\n  }\r\n  \r\n  .width-10per[_ngcontent-%COMP%]{\r\n    width:10%;\r\n  }\r\n  \r\n  #search[_ngcontent-%COMP%]{\r\n    cursor:pointer;\r\n    transition: transform .2s;\r\n  }\r\n  \r\n  #search[_ngcontent-%COMP%]:hover{\r\n    color:green;\r\n    transform:scale(1.3);\r\n  }\r\n  \r\n  .flex-row[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    justify-content:space-between;\r\n  }\r\n  \r\n  .flex-row-apart[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    justify-content:space-around;\r\n  }\r\n  \r\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    width:40%;\r\n    margin:10px;\r\n\r\n  }\r\n  \r\n  #space-200px[_ngcontent-%COMP%]{\r\n    width:150px;\r\n  }\r\n  \r\n  .border[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 3px grey;\r\n    padding:10px;\r\n  }\r\n  \r\n  .width-100per[_ngcontent-%COMP%]{\r\n    width:200px;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%]{\r\n    color:rgb(27, 139, 243); \r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]:hover{\r\n    background:rgb(225, 252, 252);\r\n  }\r\n  \r\n  img.profile[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    height:2.5rem;\r\n    transition: ease-out .2s;\r\n  }\r\n  \r\n  img.profile[_ngcontent-%COMP%]:hover{\r\n    transform:scale(3);\r\n\r\n  }\r\n  \r\n  ngx-avatar[_ngcontent-%COMP%]{\r\n    display:inline-block;   \r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    font-family:poppins;\r\n    color:rgb(3, 11, 64);\r\n    font-size: 3em;\r\n    position:relative;\r\n    background: black;\r\n    padding:20px;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]::before{\r\n    content:attr(data-text);\r\n    position:absolute;\r\n    color:rgb(203, 234, 238);\r\n    width:510px;\r\n    overflow:hidden;\r\n    white-space: nowrap;\r\n    border-right: 4px solid rgb(0, 55, 255);\r\n    -webkit-animation: animate 20s linear;\r\n            animation: animate 20s linear;\r\n    filter:drop-shadow(0 0 20px rgb(0, 153, 255));\r\n  }\r\n  \r\n  @-webkit-keyframes animate{\r\n    0%{\r\n        width:0;\r\n    }\r\n\r\n    30%,100%{\r\n        width :510px;\r\n    }\r\n  }\r\n  \r\n  @keyframes animate{\r\n    0%{\r\n        width:0;\r\n    }\r\n\r\n    30%,100%{\r\n        width :510px;\r\n    }\r\n  }\r\n  \r\n  #analytics[_ngcontent-%COMP%]{\r\n     width: 3.8rem;\r\n     float:right;\r\n     margin-right: 100px;\r\n     margin-top: 10px;\r\n     border-radius: 50%;\r\n     cursor:pointer;\r\n     padding:10px;\r\n     -webkit-animation: animate1 3s infinite;\r\n             animation: animate1 3s infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes animate1{\r\n    0%,100%{\r\n        border-right: 3px solid rgb(225, 33, 113);\r\n    }\r\n    25%{\r\n        border-bottom: 3px solid rgb(225, 33, 113);\r\n    }\r\n    50%{\r\n        border-left: 3px solid rgb(225, 33, 113);\r\n    }\r\n    75%{\r\n        border-top: 3px solid rgb(225, 33, 113);\r\n    }\r\n  }\r\n  \r\n  @keyframes animate1{\r\n    0%,100%{\r\n        border-right: 3px solid rgb(225, 33, 113);\r\n    }\r\n    25%{\r\n        border-bottom: 3px solid rgb(225, 33, 113);\r\n    }\r\n    50%{\r\n        border-left: 3px solid rgb(225, 33, 113);\r\n    }\r\n    75%{\r\n        border-top: 3px solid rgb(225, 33, 113);\r\n    }\r\n  }\r\n  \r\n  .download[_ngcontent-%COMP%]{\r\n    width: 2rem;\r\n     float:right;\r\n     margin-top: 20px;\r\n     margin-right: 50px;\r\n     cursor:pointer;\r\n  }\r\n  \r\n  .download[_ngcontent-%COMP%]:hover{\r\n    transform:translate(0,5px)\r\n  }\r\n  \r\n  .margin-left-100px[_ngcontent-%COMP%]{\r\n    margin-left: 100px;\r\n  }\r\n  \r\n  .leaves[_ngcontent-%COMP%]{\r\n    cursor:pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGlkYXRlZC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFNBQVM7RUFDWDs7RUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7RUFDQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsU0FBUztJQUNULFdBQVc7O0VBRWI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCOztFQUNBO0lBQ0Usa0JBQWtCOztFQUVwQjs7RUFDQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLDZDQUE2QztFQUMvQzs7RUFDQTtJQUNFO1FBQ0ksT0FBTztJQUNYOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtFQUNGOztFQVJBO0lBQ0U7UUFDSSxPQUFPO0lBQ1g7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0VBQ0Y7O0VBRUE7S0FDRyxhQUFhO0tBQ2IsV0FBVztLQUNYLG1CQUFtQjtLQUNuQixnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLGNBQWM7S0FDZCxZQUFZO0tBQ1osdUNBQStCO2FBQS9CLCtCQUErQjtFQUNsQzs7RUFDQTtJQUNFO1FBQ0kseUNBQXlDO0lBQzdDO0lBQ0E7UUFDSSwwQ0FBMEM7SUFDOUM7SUFDQTtRQUNJLHdDQUF3QztJQUM1QztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0VBQ0Y7O0VBYkE7SUFDRTtRQUNJLHlDQUF5QztJQUM3QztJQUNBO1FBQ0ksMENBQTBDO0lBQzlDO0lBQ0E7UUFDSSx3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztFQUNGOztFQUNBO0lBQ0UsV0FBVztLQUNWLFdBQVc7S0FDWCxnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLGNBQWM7RUFDakI7O0VBQ0E7SUFDRTtFQUNGOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJjb25zb2xpZGF0ZWQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOjAgMjBweDtcclxuICB9XHJcbiAgLndpZHRoLTEwMHB4e1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgfVxyXG4gIC53aWR0aC0xMHBlcntcclxuICAgIHdpZHRoOjEwJTtcclxuICB9XHJcbiAgI3NlYXJjaHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICB9XHJcbiAgI3NlYXJjaDpob3ZlcntcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMyk7XHJcbiAgfVxyXG4gIC5mbGV4LXJvd3tcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuZmxleC1yb3ctYXBhcnR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQsLnJpZ2h0e1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgICBtYXJnaW46MTBweDtcclxuXHJcbiAgfVxyXG4gICNzcGFjZS0yMDBweHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gIH1cclxuICAuYm9yZGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBncmV5O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuICAud2lkdGgtMTAwcGVye1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgY29sb3I6cmdiKDI3LCAxMzksIDI0Myk7IFxyXG4gIH1cclxuICB0ZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6cmdiKDIyNSwgMjUyLCAyNTIpO1xyXG4gIH1cclxuICBpbWcucHJvZmlsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDoyLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuMnM7XHJcbiAgfVxyXG4gIGltZy5wcm9maWxlOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDMpO1xyXG5cclxuICB9XHJcbiAgbmd4LWF2YXRhcntcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOyAgIFxyXG4gIH1cclxuICBoMXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTpwb3BwaW5zO1xyXG4gICAgY29sb3I6cmdiKDMsIDExLCA2NCk7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgfVxyXG4gIGgxOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OmF0dHIoZGF0YS10ZXh0KTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgY29sb3I6cmdiKDIwMywgMjM0LCAyMzgpO1xyXG4gICAgd2lkdGg6NTEwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmdiKDAsIDU1LCAyNTUpO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDIwcyBsaW5lYXI7XHJcbiAgICBmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDIwcHggcmdiKDAsIDE1MywgMjU1KSk7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXtcclxuICAgIDAle1xyXG4gICAgICAgIHdpZHRoOjA7XHJcbiAgICB9XHJcblxyXG4gICAgMzAlLDEwMCV7XHJcbiAgICAgICAgd2lkdGggOjUxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2FuYWx5dGljc3tcclxuICAgICB3aWR0aDogMy44cmVtO1xyXG4gICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgIGFuaW1hdGlvbjogYW5pbWF0ZTEgM3MgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZTF7XHJcbiAgICAwJSwxMDAle1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigyMjUsIDMzLCAxMTMpO1xyXG4gICAgfVxyXG4gICAgMjUle1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMjI1LCAzMywgMTEzKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigyMjUsIDMzLCAxMTMpO1xyXG4gICAgfVxyXG4gICAgNzUle1xyXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCByZ2IoMjI1LCAzMywgMTEzKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmRvd25sb2Fke1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4gIC5kb3dubG9hZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMCw1cHgpXHJcbiAgfVxyXG4gIC5tYXJnaW4tbGVmdC0xMDBweHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICB9XHJcbiAgLmxlYXZlc3tcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuIFxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsolidatedViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-consolidated-view',
            templateUrl: './consolidated-view.component.html',
            styleUrls: ['./consolidated-view.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeService"]
          }, {
            type: src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_14__["DailyTrackerService"]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_15__["ProgramService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Aj0r":
    /*!******************************************************************!*\
      !*** ./src/app/component/time-tracker/time-tracker.component.ts ***!
      \******************************************************************/

    /*! exports provided: TimeTrackerComponent */

    /***/
    function Aj0r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeTrackerComponent", function () {
        return TimeTrackerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/model/daily-tracker */
      "6ORI");
      /* harmony import */


      var src_app_model_daily_tracker_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/model/daily-tracker-model */
      "QI7u");
      /* harmony import */


      var src_app_model_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/model/log */
      "Vh5l");
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../snackbar/snackbar.component */
      "HbR6");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/daily-tracker.service */
      "KjdE");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-avatar */
      "UTQ3");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function TimeTrackerComponent_mat_radio_button_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var leave_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", leave_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", leave_r6, " ");
        }
      }

      function TimeTrackerComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-avatar", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r2.projectLogArray[i_r8].taskName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("round", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.projectLogArray[i_r8].taskName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx_r2.projectLogArray[i_r8].startDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r8);
        }
      }

      function TimeTrackerComponent_tr_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-avatar", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r3.programLogArray[i_r10].taskName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.programLogArray[i_r10] == null ? null : ctx_r3.programLogArray[i_r10].taskName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx_r3.programLogArray[i_r10] == null ? null : ctx_r3.programLogArray[i_r10].startDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r10);
        }
      }

      var TimeTrackerComponent = /*#__PURE__*/function () {
        function TimeTrackerComponent(dialogRef, formBuilder, render, elem, _snackBar, _data, trackerApi, progServ) {
          _classCallCheck(this, TimeTrackerComponent);

          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.render = render;
          this.elem = elem;
          this._snackBar = _snackBar;
          this._data = _data;
          this.trackerApi = trackerApi;
          this.progServ = progServ;
          this.currentDate = new Date();
          this.date = '';
          this.hdStatus = 'NotApplied';
          this.leaves = [src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].NONE, src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].HALF_DAY, src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].FULL_DAY];
          this.programLogArray = [];
          this.projectLogArray = [];
          this.programArray = [];
          this.projectArray = [];
          this.dayLogs = [];
          this.cardArray2 = [1, 2, 3];
          this.cardArray3 = [1];
          this.totalHoursOfDay = 0;
          this.centered = false;
          this.disabled = false;
          this.unbounded = false;
          this.radius = 200;
          this.color = '';
          this.logMsg = '';
          this.snackbarDurationSec = 5;
          this.trackerCreated = false;
          var slHourInit = 0;
          var slDetailsInit = '';

          for (var i = 0; i < _data.logs.length; i++) {
            if (_data.logs[i].logType == src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].SELF_LEARNING) {
              slHourInit = _data.logs[i].logHours;
              slDetailsInit = _data.logs[i].selfStudyDetails;
            }
          }

          this.dailyTracker = this.formBuilder.group({
            progTimeLogs: this.formBuilder.array([]),
            projTimeLogs: this.formBuilder.array([]),
            slDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](slDetailsInit),
            slHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](slHourInit),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
          });
        }

        _createClass(TimeTrackerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("data rcv from calendar ui in trackerUI:", this._data); // display data recieved from CALENDAR to DIALOG on console

            if (this._data.trackerId == '') {
              this.trackerCreated = true;
              console.log('creating a new trackerObject line 217 ');
              this.createFormArray_NewTracker();
            } else {
              this.trackerCreated = false;
              this.createFormArray_TrackerExists();
            }

            this.calTotalHoursOfDay();
            this.logMsg = this.totalHoursOfDay + ' hrs. logged.';
          } // this method returns true if Logged hours for day =8, else returns false

        }, {
          key: "totalHoursValid",
          value: function totalHoursValid() {
            if (this.totalHoursOfDay == 8) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "openSnackbar",
          // method to open snackbar incase hours logged <8 and user clicks SAVE
          value: function openSnackbar() {
            this._snackBar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"], {
              duration: this.snackbarDurationSec * 1000
            });
          } // method to generate formControls in each array program, project

        }, {
          key: "createFormArray_TrackerExists",
          value: function createFormArray_TrackerExists() {
            this.leaveApplied = this._data.leaveType;
            console.log("inside createFormArray_TrackerExists. _data.logs.length=", this._data.logs.length);

            for (var i = 0; i < this._data.logs.length; i++) {
              switch (this._data.logs[i].logType) {
                case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROJECT:
                  console.log("project log created");
                  this.projectLogArray.push(this._data.logs[i]); // add this log to projectlogarray

                  this.projTimeLogsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this._data.logs[i].logHours));
                  break;

                case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROGRAM:
                  console.log("program log created");
                  this.programLogArray.push(this._data.logs[i]); // add this log to programlogarray

                  this.progTimeLogsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this._data.logs[i].logHours));
                  break;

                case src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].SELF_LEARNING:
                  break;

                default:
                  console.log('wrong log type found');
              }
            }

            console.log("project array filtered from calenderUI data:", this.projectLogArray);
            console.log("program array filtered from calenderUI data:", this.programLogArray);
          }
        }, {
          key: "createFormArray_NewTracker",
          value: function createFormArray_NewTracker() {
            this.leaveApplied = src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].NONE;
            this._data.logs = this.generateDaysLogs(this._data.date); // create log array for tracker object, by calling program/project api

            console.log("_datalogs,", this._data.logs, "data log length", this._data.logs.length); // for (let i = 0; i < this._data.logs.length; i++) {
            //   console.log("logtype126", this._data.logs[i].logType, "i=", i, "data log length", this._data.logs.length);
            //   switch (this._data.logs[i].logType) {
            //     case LogType.PROJECT: console.log("logtypeProject", this._data.logs[i].logType);
            //       this.projectLogArray.push(this._data.logs[i]); // add this log to projectlogarray
            //       this.projTimeLogsArray.push(new FormControl(this._data.logs[i].logHours));
            //       break;
            //     case LogType.PROGRAM: this.programLogArray.push(this._data.logs[i]); // add this log to programlogarray
            //       this.progTimeLogsArray.push(new FormControl(this._data.logs[i].logHours));
            //       break;
            //     case LogType.SELF_LEARNING: break;
            //     default: console.log('wrong log type found');
            //   }
            // }
            // console.log("_datalogs,", this._data);

            console.log("project array", this.projectLogArray);
          } // submit daily tracker

        }, {
          key: "submitDailyTracker",
          value: function submitDailyTracker(element1, element2) {
            this.calTotalHoursOfDay();
            console.log('total hours logged=', this.totalHoursOfDay);
            console.log(this.dailyTracker.value);
            this.updateLogData_LeaveStatus(); // update latest info from the form to send back to calendar. _data is updated

            if (this.leaveApplied == src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].FULL_DAY) {
              this._data.logs = []; // just before submission, check if FULLDAY leave is applied. If YES, send empty Log array to backend
            }

            if (this.totalHoursValid()) {
              console.log(this.dailyTracker.value);

              if (this.trackerCreated) // if a new tracker is just created, call the SAVE api
                {
                  this.generateTrackerId();
                  this.trackerApi.saveTracker(this.createDailyTrackerForBackend()).subscribe(function (response) {
                    return console.log('response from save api from backend', response);
                  }); // api call to save the Daily tracker to backend

                  this.dialogRef.close(this._data);
                } else // if its an existing tracker, call UPDATE api
                {
                  this.trackerApi.updateTracker(this.createDailyTrackerForBackend()).subscribe(function (response) {
                    return console.log('response from Update Api:', response);
                  });
                  this.dialogRef.close(this._data);
                }
            } else {
              if (this.totalHoursOfDay > 8) {
                this.render.setStyle(element1, 'box-shadow', '0 0 5px red,0 0 7px rgb(237, 180, 180)');
                this.render.setStyle(element2, 'box-shadow', '0 0 5px red,0 0 7px rgb(237, 180, 180)');
                this.logMsg = this.totalHoursOfDay + ' hrs logged. Log Exact 8hrs pls.';
              } else {
                if (this.trackerCreated) {
                  // if a new tracker is just created, call the SAVE api
                  this.generateTrackerId();
                  this.trackerApi.saveTracker(this.createDailyTrackerForBackend()).subscribe(function (response) {
                    return console.log('response from save api from backend', response);
                  });
                  this.openSnackbar();
                  this.dialogRef.close(this._data);
                } else // if its an existing tracker, call UPDATE api
                  {
                    this.trackerApi.updateTracker(this.createDailyTrackerForBackend()).subscribe(function (response) {
                      return console.log('response from Update Api:', response);
                    });
                    this.dialogRef.close(this._data);
                  }
              }
            }
          }
        }, {
          key: "calTotalHoursOfDay",
          value: function calTotalHoursOfDay() {
            var _a;

            this.totalHoursOfDay = 0;
            var leaveHours = 0;

            switch (this.leaveApplied) {
              case src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].NONE:
                leaveHours = 0;
                break;

              case src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].HALF_DAY:
                leaveHours = 4;
                break;

              case src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].FULL_DAY:
                leaveHours = 8;
                break;

              default:
                console.log('wrong leave type entered');
            }

            this.totalHoursOfDay += leaveHours;

            for (var i = 0; i < this.progTimeLogsArray.length; i++) {
              // add prog log hours
              this.totalHoursOfDay += this.progTimeLogsArray.value[i];
            }

            for (var _i7 = 0; _i7 < this.projTimeLogsArray.length; _i7++) {
              // add proj log hours
              this.totalHoursOfDay += this.projTimeLogsArray.value[_i7];
            }

            this.totalHoursOfDay += (_a = this.dailyTracker.get('slHours')) === null || _a === void 0 ? void 0 : _a.value; // add self learning hours

            console.log('at end of calculate method:', this.totalHoursOfDay);
          }
        }, {
          key: "closeDialogue",
          value: function closeDialogue() {
            this.dialogRef.close();
          } // method to create a dailytracker object that will be returned to calendar when dailyTracker is saved &closed

        }, {
          key: "updateLogData_LeaveStatus",
          value: function updateLogData_LeaveStatus() {
            var _a, _b;

            for (var i = 0; i < this.programLogArray.length; i++) {
              this.programLogArray[i].logHours = this.dailyTracker.get('progTimeLogs').value[i];
            }

            for (var _i8 = 0; _i8 < this.projectLogArray.length; _i8++) {
              this.projectLogArray[_i8].logHours = this.dailyTracker.get('projTimeLogs').value[_i8];
            }

            var selfLearningLog = new src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["Log"](src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].SELF_LEARNING, (_a = this.dailyTracker.get('slHours')) === null || _a === void 0 ? void 0 : _a.value, 'SelfLearning', 0, (_b = this.dailyTracker.get('slDetails')) === null || _b === void 0 ? void 0 : _b.value);
            this._data.logs = [];

            var _iterator20 = _createForOfIteratorHelper(this.programLogArray),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var log = _step20.value;

                this._data.logs.push(log);
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }

            var _iterator21 = _createForOfIteratorHelper(this.projectLogArray),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _log = _step21.value;

                this._data.logs.push(_log);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }

            this._data.logs.push(selfLearningLog);

            this._data.leaveType = this.leaveApplied;
            console.log('data:', this._data);
          } // generates trackerId for the current dailyTracker object to be created by combining email of user with current date in milliseconds

        }, {
          key: "generateTrackerId",
          value: function generateTrackerId() {
            this._data.trackerId = localStorage.getItem('tgt_email') + "-" + new Date().getTime();
            console.log('trackerId formed inside generateTrackerId Method', this._data.trackerId);
          }
        }, {
          key: "generateDaysLogs",
          value: function generateDaysLogs(date) {
            this.getActivePrograms(date); // api call to program service to get active programs list

            this.getActiveProjects(date); // api call to project service to get active project list

            var selfStudyLog = new src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["Log"](src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].SELF_LEARNING, 0, 'SelfLearning', 0, '');
            this.dayLogs.push(selfStudyLog);
            console.log("returning dayLogs fron generate method:", this.dayLogs);
            return this.dayLogs;
          }
        }, {
          key: "getActivePrograms",
          value: function getActivePrograms(date) {
            var _this29 = this;

            this.progServ.getAllActiveProgramsOnParticularDate(localStorage.getItem('tgt_email'), date.getTime()).subscribe(function (result) {
              console.log("inside generateDaysLogs method.Program list onAPI call is:", result);

              for (var i = 0; i < result.length; i++) {
                var tempLog = new src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["Log"](src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROGRAM, 0, result[i].programName, result[i].startDate, '');

                _this29.dayLogs.push(tempLog);

                _this29.programLogArray.push(tempLog); // add this log to projectlogarray


                _this29.progTimeLogsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](tempLog.logHours));
              }
            });
          }
        }, {
          key: "getActiveProjects",
          value: function getActiveProjects(date) {
            var _this30 = this;

            this.progServ.getAllActiveProjectsOnParticularDate(localStorage.getItem('tgt_email'), date.getTime()).subscribe(function (result) {
              console.log("inside generateDaysLogs method.Project list onAPI call is:", result);

              for (var i = 0; i < result.length; i++) {
                var tempLog = new src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["Log"](src_app_model_log__WEBPACK_IMPORTED_MODULE_5__["LogType"].PROJECT, 0, result[i].projectName, result[i].startDate, '');

                _this30.dayLogs.push(tempLog);

                _this30.projectLogArray.push(tempLog); // add this log to projectlogarray


                _this30.projTimeLogsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](tempLog.logHours));
              }
            });
          }
        }, {
          key: "isFulldayApplied",
          value: function isFulldayApplied() {
            console.log('leave status:', this.leaveApplied);

            if (this.leaveApplied == src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_3__["LeaveType"].FULL_DAY) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "createDailyTrackerForBackend",
          value: function createDailyTrackerForBackend() {
            var temp = new src_app_model_daily_tracker_model__WEBPACK_IMPORTED_MODULE_4__["DailyTrackerModel"](this._data.trackerId, this._data.date.getTime(), localStorage.getItem('tgt_email'), this._data.logs, this._data.leaveType, this._data.remarks); // date is converted to milliseconds with getTime()

            console.log("inside createDailyTrackerForBackend tracker object:", temp);
            return temp;
          }
        }, {
          key: "progTimeLogsArray",
          get: function get() {
            return this.dailyTracker.get('progTimeLogs');
          }
        }, {
          key: "projTimeLogsArray",
          get: function get() {
            return this.dailyTracker.get('projTimeLogs');
          }
        }]);

        return TimeTrackerComponent;
      }();

      TimeTrackerComponent.ɵfac = function TimeTrackerComponent_Factory(t) {
        return new (t || TimeTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_8__["DailyTrackerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"]));
      };

      TimeTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimeTrackerComponent,
        selectors: [["app-time-tracker"]],
        decls: 93,
        vars: 12,
        consts: [[1, "close", "highlightOnHover", 3, "click"], ["id", "container-box", 1, "container"], ["container", ""], ["mat-dialog-title", "", 1, "header"], [1, "flex-header"], [2, "font-size", "30px", "margin-right", "15px"], [2, "font-size", "30px"], [1, "flex-center"], ["id", "example-radio-group-label", 1, "font-verdana"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", "class", "font-verdana padding-left-20px", "color", "primary", 3, "value", 4, "ngFor", "ngForOf"], ["id", "DailyTrackerForm", 3, "formGroup"], [3, "hidden"], [1, "badge", "bg-success"], [1, "table-container"], [1, "table", "table-striped", 3, "hidden"], [1, "logrow"], ["scope", "col"], ["scope", "col", 1, "padding-left-20px"], ["formArrayName", "projTimeLogs"], [4, "ngFor", "ngForOf"], ["formArrayName", "progTimeLogs"], [1, "table", "table-striped"], ["scope", "col", 1, "padding-left-30px"], ["scope", "row"], ["name", "Self Learning", "size", "40"], ["matInput", "", "placeholder", "What did you learn", "value", "0", "type", "text", "formControlName", "slDetails", "disabled", "isFulldayApplied()", 1, "SLDetails"], ["matInput", "", "placeholder", "Log hrs", "value", "0", "type", "number", "formControlName", "slHours", "min", "0", "max", "8", 1, "loghour"], [1, "example-form-remarks"], ["appearance", "fill", 1, "example-full-width-remarks"], ["matInput", "", "maxlength", "256", "placeholder", "Any additional information for the day.", "formControlName", "remarks"], ["message", ""], ["align", "start"], ["align", "end"], ["id", "save", "mat-raised-button", "", "color", "primary", 3, "click"], ["role", "alert", 1, "alert", "alert-dark"], ["alert", ""], ["color", "primary", 1, "font-verdana", "padding-left-20px", 3, "value"], ["size", "40", 3, "name", "round"], ["matInput", "", "placeholder", "Log hrs", "type", "number", "min", "0", "max", "8", 1, "loghour", 3, "formControlName"], ["size", "40", 3, "name"]],
        template: function TimeTrackerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeTrackerComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeDialogue();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "calendar_today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Leave ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimeTrackerComponent_Template_mat_radio_group_ngModelChange_13_listener($event) {
              return ctx.leaveApplied = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TimeTrackerComponent_mat_radio_button_14_Template, 2, 2, "mat-radio-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PROJECTS\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TimeTrackerComponent_tr_34_Template, 11, 8, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Programmes\xA0\xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Program Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TimeTrackerComponent_tr_53_Template, 11, 7, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "SelfLearning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "ngx-avatar", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Self-Learning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-hint", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "*Not Mandatory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-hint", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeTrackerComponent_Template_button_click_88_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](91);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.submitDailyTracker(_r5, _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "SAVE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._data.date.toDateString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.leaveApplied);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leaves);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dailyTracker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.projectLogArray.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.projectLogArray.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projTimeLogsArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.programLogArray.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.programLogArray.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.progTimeLogsArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r4.value.length, " / 256");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.logMsg, " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], ngx_avatar__WEBPACK_IMPORTED_MODULE_13__["AvatarComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .example-small-box[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  \r\n  .example-large-box[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .example-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n    display: block;\r\n  }\r\n  \r\n  #project-tab[_ngcontent-%COMP%]{\r\n    width:95%;\r\n    \r\n  }\r\n  \r\n  #half-day[_ngcontent-%COMP%]{\r\n    width:33%;\r\n    display:block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n  \r\n  .example-card[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    flex-direction: row nowrap;\r\n    justify-content: space-around;\r\n    align-items:flex-end;\r\n    padding:0;\r\n    width: 95%;\r\n    height: 75px;\r\n    margin:4px;\r\n    background-color: transparent;\r\n    box-shadow: 2px 2px 5px grey;\r\n    transition: transform .1s;\r\n  }\r\n  \r\n  .example-card3[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    flex-direction: row nowrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 250px;\r\n    margin:10px;\r\n    background-color: transparent;\r\n    box-shadow: 2px 2px 5px grey;\r\n    transition: transform .1s;\r\n  }\r\n  \r\n  .example-card[_ngcontent-%COMP%]:hover{\r\ntransform: scale(1.05);\r\n  }\r\n  \r\n  .card-box[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-flow: column wrap;\r\n    align-items: center;\r\n    \r\n  }\r\n  \r\n  .card-box3[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]{\r\n    width:700px;\r\n    height:-webkit-fit-content;\r\n    height:-moz-fit-content;\r\n    height:fit-content;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .example-form[_ngcontent-%COMP%] {\r\n   width:170px;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n  }\r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    display:block;\r\n    width:60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  \r\n  .flex-header[_ngcontent-%COMP%]{\r\n    margin:5px;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    align-items: baseline;\r\n    justify-content:center;\r\n  }\r\n  \r\n  img.cardimage[_ngcontent-%COMP%]{\r\n    \r\n    max-width: 50px;\r\n    max-height: 50px;\r\n  }\r\n  \r\n  img.cardimageSelfLearning[_ngcontent-%COMP%]{\r\n    \r\n    max-width: 300px;\r\n    max-height: 300px;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n  }\r\n  \r\n  .example-form-remarks[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .alert[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  \r\n  }\r\n  \r\n  .example-full-width-remarks[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: rgb(210, 227, 228);\r\n  }\r\n  \r\n  .card-content-flex[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n    align-items:flex-start;\r\n    justify-content:space-around;\r\n  }\r\n  \r\n  .mat-elevation-z4[_ngcontent-%COMP%]{\r\n    height:300px;\r\n    \r\n  }\r\n  \r\n  button#save[_ngcontent-%COMP%]{\r\n    display:block;\r\n    box-shadow: 3px 3px 3px rgb(103, 103, 103);\r\n    margin-bottom:15px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    transition:transform .1s;\r\n      }\r\n  \r\n  button#save[_ngcontent-%COMP%]:hover{\r\n        transform:scale(1.1);\r\n      }\r\n  \r\n  .highlightOnHover[_ngcontent-%COMP%]:hover{\r\ncursor:pointer;\r\nbackground-color: rgb(239, 233, 233);\r\n}\r\n  \r\n  .close[_ngcontent-%COMP%]{\r\nfloat:right;\r\nmargin-right: 5px;\r\nmargin-top: 5px;\r\n}\r\n  \r\n  div#DailyTrackerForm[_ngcontent-%COMP%]{\r\n  overflow-y:scroll;\r\n  height:500px;;\r\n}\r\n  \r\n  input.loghour[_ngcontent-%COMP%]{\r\n  width:50%;\r\n  border:1px solid black;\r\n  box-shadow: 3px 3px 3px rgb(197, 191, 191);\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  padding:5px;\r\n}\r\n  \r\n  .SLDetails[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  border:1px solid black;\r\n  box-shadow: 3px 3px 3px rgb(197, 191, 191);\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  padding:5px;\r\n}\r\n  \r\n  .table-container[_ngcontent-%COMP%]{\r\n  margin-right: 20px;\r\n}\r\n  \r\n  .padding-left-20px[_ngcontent-%COMP%]{\r\n  padding-left: 20px;\r\n}\r\n  \r\n  .padding-left-30px[_ngcontent-%COMP%]{\r\n  padding-left: 25px;\r\n}\r\n  \r\n  .flex-center[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .font-verdana[_ngcontent-%COMP%]{\r\n  font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n  \r\n  #remarks[_ngcontent-%COMP%]{\r\n  background-color: red;\r\n}\r\n  \r\n  div.alert[_ngcontent-%COMP%]{\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtdHJhY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsU0FBUzs7RUFFWDs7RUFDQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0VBQzNCOztFQUNBO0FBQ0Ysc0JBQXNCO0VBQ3BCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7O0VBRXJCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtFQUNyQjs7RUFFQTtHQUNDLFdBQVc7RUFDWjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7O0VBR0E7O0lBRUUsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVzs7RUFFYjs7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFHQTtJQUNFLFdBQVc7O0VBRWI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsb0NBQW9DO0VBQ3RDOztFQUNBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCOztFQUNBO0lBQ0UsWUFBWTs7RUFFZDs7RUFDQTtJQUNFLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO01BQ3RCOztFQUNBO1FBQ0Usb0JBQW9CO01BQ3RCOztFQUNOO0FBQ0EsY0FBYztBQUNkLG9DQUFvQztBQUNwQzs7RUFDQTtBQUNBLFdBQVc7QUFDWCxpQkFBaUI7QUFDakIsZUFBZTtBQUNmOztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7RUFDQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztFQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7O0VBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0VBQ0E7RUFDRSw2RUFBNkU7RUFDN0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InRpbWUtdHJhY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc21hbGwtYm94LCAuZXhhbXBsZS1sYXJnZS1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNtYWxsLWJveCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1sYXJnZS1ib3gge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtZm9ybSBtYXQtc2xpZGUtdG9nZ2xlIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI3Byb2plY3QtdGFie1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgXHJcbiAgfVxyXG4gICNoYWxmLWRheXtcclxuICAgIHdpZHRoOjMzJTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXJnaW46NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBncmV5O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZDMge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggZ3JleTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXM7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQ6aG92ZXJ7XHJcbnRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIC5jYXJkLWJveHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5jYXJkLWJveDN7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjcwMHB4O1xyXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgd2lkdGg6MTcwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuZmxleC1oZWFkZXJ7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGltZy5jYXJkaW1hZ2V7XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIGltZy5jYXJkaW1hZ2VTZWxmTGVhcm5pbmd7XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gIH1cclxuICAuZXhhbXBsZS1mb3JtLXJlbWFya3Mge1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5hbGVydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICB9XHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aC1yZW1hcmtze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMjcsIDIyOCk7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQtZmxleHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICAubWF0LWVsZXZhdGlvbi16NHtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIFxyXG4gIH1cclxuICBidXR0b24jc2F2ZXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2IoMTAzLCAxMDMsIDEwMyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRyYW5zaXRpb246dHJhbnNmb3JtIC4xcztcclxuICAgICAgfVxyXG4gICAgICBidXR0b24jc2F2ZTpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICAgICAgfVxyXG4uaGlnaGxpZ2h0T25Ib3Zlcjpob3ZlcntcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzMywgMjMzKTtcclxufVxyXG4uY2xvc2V7XHJcbmZsb2F0OnJpZ2h0O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxubWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmRpdiNEYWlseVRyYWNrZXJGb3Jte1xyXG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIGhlaWdodDo1MDBweDs7XHJcbn1cclxuaW5wdXQubG9naG91cntcclxuICB3aWR0aDo1MCU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2IoMTk3LCAxOTEsIDE5MSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOjVweDtcclxufVxyXG4uU0xEZXRhaWxze1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2IoMTk3LCAxOTEsIDE5MSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOjVweDtcclxufVxyXG4udGFibGUtY29udGFpbmVye1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ucGFkZGluZy1sZWZ0LTIwcHh7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5wYWRkaW5nLWxlZnQtMzBweHtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuLmZsZXgtY2VudGVye1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9udC12ZXJkYW5he1xyXG4gIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNyZW1hcmtze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5kaXYuYWxlcnR7XHJcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeTrackerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-time-tracker',
            templateUrl: './time-tracker.component.html',
            styleUrls: ['./time-tracker.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_8__["DailyTrackerService"]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bslf":
    /*!******************************************************************!*\
      !*** ./src/app/component/project-card/project-card.component.ts ***!
      \******************************************************************/

    /*! exports provided: ProjectCardComponent */

    /***/
    function Bslf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function () {
        return ProjectCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _add_project_members_add_project_members_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-project-members/add-project-members.component */
      "s2lT");
      /* harmony import */


      var _view_project_card_view_project_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../view-project-card/view-project-card.component */
      "V7Cw");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function ProjectCardComponent_mat_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_mat_icon_6_Template_mat_icon_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.addProjectMembers($event, ctx_r1.projectData == null ? null : ctx_r1.projectData.projectName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " group_add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "active-project": a0,
          "inactive-project": a1
        };
      };

      var ProjectCardComponent = /*#__PURE__*/function () {
        function ProjectCardComponent(sanitizer, dialog, programService) {
          _classCallCheck(this, ProjectCardComponent);

          this.sanitizer = sanitizer;
          this.dialog = dialog;
          this.programService = programService;
          this.role = '';
        }

        _createClass(ProjectCardComponent, [{
          key: "showProjectDetails",
          value: function showProjectDetails(projectName) {
            var _this31 = this;

            console.log(projectName);
            this.programService.getProjectDetails(projectName).subscribe(function (response) {
              console.log(response);

              _this31.dialog.open(_view_project_card_view_project_card_component__WEBPACK_IMPORTED_MODULE_2__["ViewProjectCardComponent"], {
                width: '600px',
                data: response
              });
            });
          }
        }, {
          key: "addProjectMembers",
          value: function addProjectMembers(event, projectName) {
            event.stopPropagation();
            this.dialog.open(_add_project_members_add_project_members_component__WEBPACK_IMPORTED_MODULE_1__["AddProjectMembersComponent"], {
              width: '600px',
              data: projectName
            });
            console.log(projectName);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = window.localStorage.getItem('role');
            this.imageURL = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.projectData.organizationBrandLogo);
          }
        }]);

        return ProjectCardComponent;
      }();

      ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) {
        return new (t || ProjectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"]));
      };

      ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectCardComponent,
        selectors: [["app-project-card"]],
        inputs: {
          projectData: "projectData"
        },
        decls: 7,
        vars: 8,
        consts: [["projectData", "", 1, "example-card", 3, "ngClass", "click"], ["mat-card-image", "", 3, "src", "alt"], ["inline", "true", 3, "click", 4, "ngIf"], ["inline", "true", 3, "click"]],
        template: function ProjectCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_Template_mat_card_click_0_listener() {
              return ctx.showProjectDetails(ctx.projectData == null ? null : ctx.projectData.projectName);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectCardComponent_mat_icon_6_Template, 2, 0, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, (ctx.projectData == null ? null : ctx.projectData.projectStatus) === "ACTIVE", (ctx.projectData == null ? null : ctx.projectData.projectStatus) === "INACTIVE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.projectData == null ? null : ctx.projectData.organizationName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.projectData == null ? null : ctx.projectData.projectName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "MANAGER");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: ["mat-card-header[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  color: #2c3855;\r\n  letter-spacing: 1px;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%] {\r\n  letter-spacing: 2px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n  margin: 12px;\r\n  margin-left: 30px;\r\n  margin-right: 20px;\r\n  width: 270px;\r\n  height: 220px;\r\n  text-align: center;\r\n  border-radius: 10px !important;\r\n}\r\n\r\n.active-project[_ngcontent-%COMP%] {\r\n  border-top: 5px solid #118005;\r\n}\r\n\r\n.inactive-project[_ngcontent-%COMP%] {\r\n  border-top: 5px solid red;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\r\n  width: 70%;\r\n  height: 60%;\r\n  margin: 10px !important;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0rem 0.2rem 0.3rem rgba(91, 103, 131, 0.5);\r\n  cursor: pointer;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  float: right;\r\n  font-size: 25px !important;\r\n  padding: 6px 14px;\r\n  border-radius: 5px;\r\n  color: #5b6783;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background-color: #5b6783;\r\n  transition: 0.4s;\r\n  box-shadow: 0rem 0.3rem 0.4rem rgba(225, 230, 246, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBZ0I7S0FBaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHVEQUF1RDtBQUN6RCIsImZpbGUiOiJwcm9qZWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLWhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBjb2xvcjogIzJjMzg1NTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZS1wcm9qZWN0IHtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzExODAwNTtcclxufVxyXG5cclxuLmluYWN0aXZlLXByb2plY3Qge1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHJlbSAwLjJyZW0gMC4zcmVtIHJnYmEoOTEsIDEwMywgMTMxLCAwLjUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjNWI2NzgzO1xyXG59XHJcblxyXG5tYXQtaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YjY3ODM7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICBib3gtc2hhZG93OiAwcmVtIDAuM3JlbSAwLjRyZW0gcmdiYSgyMjUsIDIzMCwgMjQ2LCAwLjUpO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project-card',
            templateUrl: './project-card.component.html',
            styleUrls: ['./project-card.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"]
          }];
        }, {
          projectData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "CBvF":
    /*!**************************************************************!*\
      !*** ./src/app/component/all-charts/all-charts.component.ts ***!
      \**************************************************************/

    /*! exports provided: AllChartsComponent */

    /***/
    function CBvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllChartsComponent", function () {
        return AllChartsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AllChartsComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Distribution (Programs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllChartsComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Distribution (Projects)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AllChartsComponent = /*#__PURE__*/function () {
        function AllChartsComponent() {
          _classCallCheck(this, AllChartsComponent);
        }

        _createClass(AllChartsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = window.localStorage.getItem('role');
          }
        }]);

        return AllChartsComponent;
      }();

      AllChartsComponent.ɵfac = function AllChartsComponent_Factory(t) {
        return new (t || AllChartsComponent)();
      };

      AllChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllChartsComponent,
        selectors: [["app-all-charts"]],
        decls: 18,
        vars: 2,
        consts: [[1, "container"], [1, "secondary-container"], [1, "title"], [1, "chart-div"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/home/analytics/external-programs", 1, "nav-link"], ["routerLink", "/home/analytics/internal-projects", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/home/analytics/employee-distribution-in-external-programs", 1, "nav-link"], ["routerLink", "/home/analytics/employee-distribution-in-internal-projects", 1, "nav-link"]],
        template: function AllChartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " DASHBOARDS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "External Programs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Internal Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AllChartsComponent_li_14_Template, 3, 0, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AllChartsComponent_li_15_Template, 3, 0, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "OPERATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "OPERATIONS");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllChartsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-all-charts',
            templateUrl: './all-charts.component.html',
            styleUrls: ['./all-charts.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DUpI":
    /*!****************************************************************!*\
      !*** ./src/app/component/add-project/add-project.component.ts ***!
      \****************************************************************/

    /*! exports provided: AddProjectComponent */

    /***/
    function DUpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function () {
        return AddProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function AddProjectComponent_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manager_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", manager_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manager_r3);
        }
      }

      var AddProjectComponent = /*#__PURE__*/function () {
        function AddProjectComponent(formBuilder, programService, snackBar, employeeService) {
          _classCallCheck(this, AddProjectComponent);

          this.programService = programService;
          this.snackBar = snackBar;
          this.employeeService = employeeService;
          this.managersArray = [];
          this.addProjectForm = formBuilder.group({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            projectCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            costCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            customerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            managerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllManagers();
          }
        }, {
          key: "onFileUpload",
          value: function onFileUpload(event) {
            this.file = event.target.files[0];
          }
        }, {
          key: "saveProject",
          value: function saveProject() {
            var _this32 = this;

            this.addProjectForm.patchValue({
              startDate: this.addProjectForm.value.startDate.getTime(),
              endDate: this.addProjectForm.value.endDate.getTime()
            });
            var projectData = new FormData();
            projectData.append('image', this.file, this.file.name);
            projectData.append('project', JSON.stringify(this.addProjectForm.value));
            this.programService.addProject(projectData).subscribe(function (response) {
              _this32.snackBar.open('Project Created Successfully.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-primary']
              });

              _this32.addProjectForm.reset();

              console.log(response);
            }, function (error) {
              _this32.snackBar.open('Some error occured while adding Program.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-warn']
              });

              console.log(error);
            });
          }
        }, {
          key: "getAllManagers",
          value: function getAllManagers() {
            var _this33 = this;

            this.employeeService.getEmployeesByRole('MANAGER').subscribe(function (response) {
              // console.log(response);
              response.forEach(function (manager) {
                console.log(manager.emailId);

                _this33.managersArray.push(manager.emailId);
              });
            });
          }
        }]);

        return AddProjectComponent;
      }();

      AddProjectComponent.ɵfac = function AddProjectComponent_Factory(t) {
        return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]));
      };

      AddProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddProjectComponent,
        selectors: [["app-add-project"]],
        decls: 57,
        vars: 8,
        consts: [["mat-dialog-title", "", 1, "flex-container"], ["mat-dialog-title", ""], [1, "example-spacer"], ["matTooltip", "Close", 3, "mat-dialog-close"], [1, "mat-typography"], [1, "example-form", 3, "formGroup"], ["fxFlex", "100%", "fxLayout", "column"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "2%"], ["appearance", "outline", "fxFlex", "50%", 1, "example-full-width"], ["formControlName", "projectName", "matInput", "", "maxlength", "20", "required", ""], ["projectName", ""], ["align", "end"], ["fxFlex", "50%"], ["type", "file", "accept", "image/*", "formControlName", "image", "required", "", 3, "change"], ["formControlName", "managerEmailId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker"], ["formControlName", "startDate", "matStartDate", "", "placeholder", "Start date", "required", ""], ["formControlName", "endDate", "matEndDate", "", "placeholder", "End date", "required", ""], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", "fxFlex", "33%", 1, "example-full-width"], ["formControlName", "projectCode", "matInput", "", "required", "", "type", "number"], ["formControlName", "costCode", "matInput", "", "required", "", "type", "number"], ["formControlName", "customerId", "matInput", "", "required", "", "type", "number"], ["mat-raised-button", "", 3, "click"], ["color", "primary", "mat-raised-button", "", 3, "mat-dialog-close", "disabled", "click"], [3, "value"]],
        template: function AddProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Project Logo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProjectComponent_Template_input_change_21_listener($event) {
              return ctx.onFileUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Manager Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddProjectComponent_mat_option_27_Template, 2, 2, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Enter Date Range for Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-date-range-input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "MM/DD/YYYY \u2013 MM/DD/YYYY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-date-range-picker", null, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Project Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cost Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Customer Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-dialog-actions", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_53_listener() {
              return ctx.addProjectForm.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_55_listener() {
              return ctx.saveProject();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProjectForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.managersArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("disabled", !ctx.addProjectForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangePicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
        styles: ["button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  width: 100px;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::file-selector-button {\r\n  cursor: pointer;\r\n  color: #2c3855;\r\n  padding: 0.5em;\r\n  border: thin solid #2c3855;\r\n  border-radius: 3px;\r\n  background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekIiLCJmaWxlIjoiYWRkLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0OjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMmMzODU1O1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMmMzODU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-project',
            templateUrl: './add-project.component.html',
            styleUrls: ['./add-project.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EqVz":
    /*!*********************************************!*\
      !*** ./src/app/service/employee.service.ts ***!
      \*********************************************/

    /*! exports provided: EmployeeService */

    /***/
    function EqVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(httpClient) {
          _classCallCheck(this, EmployeeService);

          this.httpClient = httpClient;
          this.userAuthenticationBaseUrl = 'https://nouveautracker.stackroute.io/authentication-service/api/v1/account'; // for register/login in mySql

          this.userEmployeeServiceBaseUrl = 'https://nouveautracker.stackroute.io/employee-service/api/v1/employee'; // for updation of employee in mongoDB
        } // userAuthenticationBaseUrl = 'http://localhost:8080/authentication-service/api/v1/account';    // for register/login in mySql
        // userEmployeeServiceBaseUrl = 'http://localhost:8080/employee-service/api/v1/employee';       // for updation of employee in mongoDB


        _createClass(EmployeeService, [{
          key: "register",
          value: function register(registerData) {
            return this.httpClient.post(this.userAuthenticationBaseUrl + '/register', registerData);
          }
        }, {
          key: "login",
          value: function login(loginData) {
            return this.httpClient.post(this.userAuthenticationBaseUrl + '/login', loginData);
          }
        }, {
          key: "getEmployee",
          value: function getEmployee(emailId) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
            return this.httpClient.get(this.userEmployeeServiceBaseUrl + '/employee?emailid=' + emailId, {
              headers: reqHeader
            });
          }
        }, {
          key: "getEmployeesByRole",
          value: function getEmployeesByRole(role) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
            return this.httpClient.get(this.userEmployeeServiceBaseUrl + '/byrole?role=' + role, {
              headers: reqHeader
            });
          }
        }, {
          key: "getEmployeesWorkingForAParticularManager",
          value: function getEmployeesWorkingForAParticularManager(managerEmailId) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
            return this.httpClient.get(this.userEmployeeServiceBaseUrl + '/bymanageremailid?manageremailid=' + managerEmailId, {
              headers: reqHeader
            });
          }
        }, {
          key: "updateUserProfileImage",
          value: function updateUserProfileImage(formData) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
            return this.httpClient.put(this.userEmployeeServiceBaseUrl + '/profileimage', formData, {
              headers: reqHeader
            }).subscribe(function (res) {
              return console.log(res);
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getAllEmployees",
          value: function getAllEmployees() {
            return this.httpClient.get(this.userEmployeeServiceBaseUrl + "/employees");
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ɵfac = function EmployeeService_Factory(t) {
        return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EmployeeService,
        factory: EmployeeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "F1cD":
    /*!******************************************!*\
      !*** ./src/app/model/monthly-tracker.ts ***!
      \******************************************/

    /*! exports provided: MonthlyTracker */

    /***/
    function F1cD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthlyTracker", function () {
        return MonthlyTracker;
      });

      var MonthlyTracker = function MonthlyTracker(id, email, status, year, month, startDate, endDate, remarks) {
        _classCallCheck(this, MonthlyTracker);

        this.monthlyTrackerId = id;
        this.employeeEmail = email;
        this.status = status;
        this.year = year;
        this.startDate = startDate;
        this.endDate = endDate;
        this.remarks = remarks;
        this.monthName = month;
      };
      /***/

    },

    /***/
    "HbR6":
    /*!**********************************************************!*\
      !*** ./src/app/component/snackbar/snackbar.component.ts ***!
      \**********************************************************/

    /*! exports provided: SnackbarComponent */

    /***/
    function HbR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function () {
        return SnackbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      var SnackbarComponent = /*#__PURE__*/function () {
        function SnackbarComponent() {
          _classCallCheck(this, SnackbarComponent);
        }

        _createClass(SnackbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SnackbarComponent;
      }();

      SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) {
        return new (t || SnackbarComponent)();
      };

      SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SnackbarComponent,
        selectors: [["app-snackbar"]],
        decls: 6,
        vars: 0,
        consts: [[1, "alert"], [1, "container"]],
        template: function SnackbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Log Hours Incomplete. Fill 8hr log ASAP.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
        styles: [".alert[_ngcontent-%COMP%]{\r\n    color:white;\r\n    \r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n    align-items: center;\r\n    justify-content:space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztBQUVmO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Hh87":
    /*!**********************************************************************!*\
      !*** ./src/app/component/register-login/register-login.component.ts ***!
      \**********************************************************************/

    /*! exports provided: RegisterLoginComponent */

    /***/
    function Hh87(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterLoginComponent", function () {
        return RegisterLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var RegisterLoginComponent = /*#__PURE__*/function () {
        function RegisterLoginComponent(employeeService, router, snackBar, matIconRegistry, domSanitizer) {
          _classCallCheck(this, RegisterLoginComponent);

          this.employeeService = employeeService;
          this.router = router;
          this.snackBar = snackBar;
          this.matIconRegistry = matIconRegistry;
          this.domSanitizer = domSanitizer;
          this.googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
          this.hideLoginPassword = true;
          this.hideRegisterPassword = true; // definining formgroup shape to capture while logging in.

          this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,20}"))
          }); // definining formgroup shape to capture while registering.

          this.registerFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,20}"))
          });
          this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
        }

        _createClass(RegisterLoginComponent, [{
          key: "onLogin",
          value: function onLogin() {
            var _this34 = this;

            this.loginData = this.loginFormGroup.value;
            this.employeeService.login(this.loginData).subscribe(function (response) {
              console.log('User login success : ');
              console.log(response);
              window.localStorage.setItem('tgt', response.token);
              window.localStorage.setItem('tgt_email', response.emailId);

              _this34.getEmployee(window.localStorage.getItem('tgt_email')); // this.loginFormGroup.reset();

            }, function (error) {
              console.log('error message : ');
              console.log(error);

              _this34.snackBar.open('Invalid credentials. Please try again.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-warn']
              });
            });
          }
        }, {
          key: "getEmployee",
          value: function getEmployee(emailId) {
            var _this35 = this;

            this.employeeService.getEmployee(emailId).subscribe(function (response) {
              console.log('Employee data retrieved : ');
              console.log(response); // this.employee = response;

              window.localStorage.setItem('role', response.role);

              if (response.role == 'EMPLOYEE') {
                _this35.router.navigate(['/home/calendar']).then(function () {});
              } else {
                _this35.router.navigate(['/home/view-program-manager']).then(function () {});
              } // console.log("employee object : ");
              // console.log(this.employee);

            }, function (error) {
              console.log('error message : ');
              console.log(error);
            });
          }
        }, {
          key: "onRegister",
          value: function onRegister(formGroupDirective) {
            var _this36 = this;

            this.registerData = this.registerFormGroup.value;
            this.employeeService.register(this.registerData).subscribe(function (response) {
              console.log('User registration success : ');
              console.log(response);
              _this36.indexOfSelectedTab = 0; // to redirect to login tab

              formGroupDirective.resetForm(); // formdirective is used only to reset this form.

              _this36.snackBar.open('Your account has been created. Please log in.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-primary']
              });
            }, function (error) {
              console.log('error message : ');
              console.log(error);

              _this36.snackBar.open('User already exists! Please log in', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-warn']
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterLoginComponent;
      }();

      RegisterLoginComponent.ɵfac = function RegisterLoginComponent_Factory(t) {
        return new (t || RegisterLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]));
      };

      RegisterLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterLoginComponent,
        selectors: [["app-register-login"]],
        decls: 180,
        vars: 9,
        consts: [[1, "maindiv"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-around"], [1, "logo-holder"], [1, "bar", "fill2"], [1, "bar", "fill4"], [1, "bar", "fill5"], [1, "bar", "fill6"], [1, "bar"], [1, "bar", "fill1"], [1, "bar", "fill3"], [1, "mat-elevation-z5"], ["mat-stretch-tabs", "", "animationDuration", "1000ms", "dynamicHeight", "", 1, "example-stretched-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Login", "id", "logintab"], [3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "Email", "required", "", "formControlName", "emailId"], ["matSuffix", ""], ["matInput", "", "placeholder", "Password", "formControlName", "password", "required", "", "minlength", "8", 3, "type"], ["matSuffix", "", 3, "click"], [2, "margin-bottom", "35px"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "login-button", 3, "disabled"], ["label", "Register"], ["formGroupDirective", "ngForm"], ["matInput", "", "required", "", "placeholder", "Employee Name", "formControlName", "employeeName"], ["matInput", "", "required", "", "placeholder", "Email", "formControlName", "emailId"], ["matInput", "", "required", "", "placeholder", "Password", "minlength", "8", "formControlName", "password", 3, "type"], [1, "features-div"], [1, "features-head"], [1, "cards"], [1, "col"], [1, "card", "aqua"], [1, "card", "red"], [1, "card", "orange"], [1, "card", "blue"], [1, "why-nouveautracker"], [2, "color", "rgb(226, 223, 223)"], [1, "why-container"], [1, "why-features"], ["src", "../../../assets/productivity.jpg", "alt", ""], ["src", "../../../assets/billing.jpg", "alt", ""], ["src", "../../../assets/business-intelligence.jpg", "alt", ""], [1, "email-24"], [1, "leaf-body"], [1, "leaf-container"], [1, "leafs"], ["src", "https://assets.codepen.io/2621168/leaf1.png", "alt", "leaf", 1, "leaf1"], ["src", "https://assets.codepen.io/2621168/leaf2.png", "alt", "leaf", 1, "leaf2"], ["src", "https://assets.codepen.io/2621168/leaf3.png", "alt", "leaf", 1, "leaf3"], ["viewBox", "0 0 1 1", "width", "250.0px", "height", "100.0px", "overflow", "visible"], ["clipPathUnits", "objectBoundingBox", "id", "deermask"], ["d", "M303.49,371.1l-.2-.511a.145.145,0,0,0-.188-.082l-.511.2a.145.145,0,0,0-.082.188l.2.511a.145.145,0,0,0,.188.082l.511-.2A.145.145,0,0,0,303.49,371.1Zm-.547.166a.079.079,0,0,1-.1-.045l-.109-.281a.079.079,0,0,1,.045-.1l.281-.109a.079.079,0,0,1,.1.045l.109.281a.079.079,0,0,1-.045.1Z", "transform", "translate(-302.5 -370.5)", "fill", "#fff"], [1, "loop-wrapper"], [1, "mountain"], [1, "hill"], [1, "tree"], [1, "rock"], [1, "truck"], [1, "wheels"], [1, "social-icon"], ["href", "#"], ["src", "../../../assets/facebook white.ico", "alt", ""], ["src", "../../../assets/twitter white.ico", "alt", ""], ["src", "../../../assets/gmail white.ico", "alt", ""], ["src", "../../../assets/linkedin white.ico", "alt", ""], [1, "menu"], ["href", ""]],
        template: function RegisterLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NouveauTracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No more hassles!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Track time directly to Agile projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-tab-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function RegisterLoginComponent_Template_mat_tab_group_selectedIndexChange_25_listener($event) {
              return ctx.indexOfSelectedTab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterLoginComponent_Template_form_ngSubmit_28_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email must be valid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Password must contain atleast 8 characters (one uppercase, one lowercase, a digit between 0-9 and a special character) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterLoginComponent_Template_mat_icon_click_39_listener() {
              return ctx.hideLoginPassword = !ctx.hideLoginPassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-checkbox", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Remember Me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 13, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterLoginComponent_Template_form_ngSubmit_48_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

              return ctx.onRegister(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "perm_identity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " What's your name? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Email must be valid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Password must contain atleast 8 characters (one uppercase, one lowercase, a digit between 0-9 and a special character) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterLoginComponent_Template_mat_icon_click_66_listener() {
              return ctx.hideRegisterPassword = !ctx.hideRegisterPassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Time Management Features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Across Devices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Track productivity, attendance, and performance with a simple time tracker and calendar. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Time Tracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Update your daily tracker in less than 30 seconds manually");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Program/Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Operations team adds new program/project and assign it to a manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Consolidated reports, approval sheets and final reports, and export the data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Visual dashboards to see where you spend time and what your team is working on. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h1", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Why track time with NouveauTracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Boost Productivity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Track time you spend on activities, see where your time goes, and improve your time management skills. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Bill Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Track billable time, show clients how much you've worked, see how much money you've earned, and create invoices.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Business Intelligence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Measure time spent on daily activities to find opportunities for improvements, understand time spent on ad-hoc requests and workload distribution, and improve project efficiency and cost capitalisation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "svg", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "clipPath", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \xA0\xA0 \xA0\xA0 \xA0 Get emails and stay updated ! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "24/7 service for our customers \xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.indexOfSelectedTab);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideLoginPassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hideLoginPassword ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideRegisterPassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hideRegisterPassword ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerFormGroup.invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
        styles: [".maindiv[_ngcontent-%COMP%]{ \r\n  \r\n  background-color: rgb(117, 117, 153);\r\n  \r\n  background-image: url('back.jpg');\r\n  background-size:cover;\r\n  background-blend-mode:multiply; \r\n  \r\n  \r\n  padding-top: 85px;\r\n  padding-bottom: 6%;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #dce1e6;\r\n  opacity: .94;\r\n  \r\n  min-width: 118%;\r\n  border-radius: 20px;    \r\n  padding: 30px;\r\n}\r\nmat-form-field[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\r\n  width: 93%;\r\n  padding: 10px;\r\n  display: block;\r\n  margin: auto;\r\n}\r\nmat-card-content[_ngcontent-%COMP%] {\r\n  margin-top:10%;\r\n  font-size: larger;\r\n}\r\n.login-button[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 75%;\r\n  margin: 7% auto;\r\n  border-radius: 25px;\r\n  font-size: 15px;\r\n  padding: 1.3%;\r\n  transition: all 0.5s;\r\n\tbox-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)\r\n  }\r\n.login-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n  }\r\n.login-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n  }\r\n.login-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  padding-right: 25px;\r\n  \r\n  }\r\n.login-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\r\n  opacity: 1;\r\n  right: 0;\r\n  }\r\n.login-button[_ngcontent-%COMP%]:disabled {\r\n    color: rgb(20, 20, 20);\r\n    background: linear-gradient(90deg, rgb(253, 209, 217), rgb(104, 195, 251));\r\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)\r\n  }\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  \r\n  \r\n  color: whitesmoke;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: 100;\r\n  \r\n  color: rgb(196, 196, 196);\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  mat-card[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-weight: 400;\r\n  }\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 100;\r\n    color: whitesmoke;\r\n  }\r\n  \r\n}\r\n\r\n.logo-holder[_ngcontent-%COMP%] {\r\n    background: none;\r\n    position: relative;\r\n    margin: 0 auto ;\r\n    \r\n    padding-bottom: 24px;\r\n    \r\n }\r\n.bar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 1px;\r\n    background: #6a6a6a;\r\n    width:  0%;\r\n    \r\n    \r\n    margin-top: 5px;\r\n    box-shadow: 0 0 3px rgba(192,192,192,0.9);\r\n    -webkit-animation: fill 42s infinite alternate, colors 25s infinite alternate;\r\n            animation: fill 42s infinite alternate, colors 25s infinite alternate;\r\n}\r\n.bar.fill1[_ngcontent-%COMP%] {\r\n  -webkit-animation: fill-1 25s infinite alternate, colors 35s infinite alternate;\r\n          animation: fill-1 25s infinite alternate, colors 35s infinite alternate;\r\n}\r\n.bar.fill2[_ngcontent-%COMP%] {\r\n   -webkit-animation:  fill-2 35s infinite alternate, colors 20s infinite alternate;\r\n           animation:  fill-2 35s infinite alternate, colors 20s infinite alternate;\r\n}\r\n.bar.fill3[_ngcontent-%COMP%] {\r\n   -webkit-animation:  fill-3 35s infinite alternate, colors 35s infinite alternate;\r\n           animation:  fill-3 35s infinite alternate, colors 35s infinite alternate;\r\n}\r\n.bar.fill4[_ngcontent-%COMP%] {\r\n   -webkit-animation:  fill-4 35s infinite alternate, colors 30s infinite alternate;\r\n           animation:  fill-4 35s infinite alternate, colors 30s infinite alternate;\r\n}\r\n.bar.fill5[_ngcontent-%COMP%] {\r\n   -webkit-animation:  fill-5 25s infinite alternate, colors 30s infinite alternate;\r\n           animation:  fill-5 25s infinite alternate, colors 30s infinite alternate;\r\n}\r\n.bar.fill6[_ngcontent-%COMP%] {\r\n   -webkit-animation:  fill-6 25s infinite alternate, colors 30s infinite alternate;\r\n           animation:  fill-6 25s infinite alternate, colors 30s infinite alternate;\r\n}\r\n@-webkit-keyframes fill {\r\n  0%   { width: 0; }\r\n  33%  { width: 150px;}\r\n  66%  { width: 50px;}\r\n  100% { width: 150px; }\r\n}\r\n@keyframes fill {\r\n  0%   { width: 0; }\r\n  33%  { width: 150px;}\r\n  66%  { width: 50px;}\r\n  100% { width: 150px; }\r\n}\r\n@-webkit-keyframes fill-1 {\r\n  0%   { width: 0; }\r\n  33%  { width: 250px;}\r\n  66%  { width: 100px;}\r\n  100% { width: 350px; }\r\n}\r\n@keyframes fill-1 {\r\n  0%   { width: 0; }\r\n  33%  { width: 250px;}\r\n  66%  { width: 100px;}\r\n  100% { width: 350px; }\r\n}\r\n@-webkit-keyframes fill-2 {\r\n  0%   { width: 0; }\r\n  33%  { width: 370px;}\r\n  66%  { width: 90px;}\r\n  100% { width: 136px; }\r\n}\r\n@keyframes fill-2 {\r\n  0%   { width: 0; }\r\n  33%  { width: 370px;}\r\n  66%  { width: 90px;}\r\n  100% { width: 136px; }\r\n}\r\n@-webkit-keyframes fill-3 {\r\n  0%   { width: 0; }\r\n  33%  { width: 100px;}\r\n  66%  { width: 240px;}\r\n  100% { width: 209px; }\r\n}\r\n@keyframes fill-3 {\r\n  0%   { width: 0; }\r\n  33%  { width: 100px;}\r\n  66%  { width: 240px;}\r\n  100% { width: 209px; }\r\n}\r\n@-webkit-keyframes fill-4 {\r\n  0%   { width: 0; }\r\n  33%  { width: 320px;}\r\n  66%  { width: 134px;}\r\n  100% { width: 299px; }\r\n}\r\n@keyframes fill-4 {\r\n  0%   { width: 0; }\r\n  33%  { width: 320px;}\r\n  66%  { width: 134px;}\r\n  100% { width: 299px; }\r\n}\r\n@-webkit-keyframes fill-5 {\r\n  0%   { width: 0; }\r\n  33%  { width: 130px;}\r\n  66%  { width: 310px;}\r\n  100% { width: 148px; }\r\n}\r\n@keyframes fill-5 {\r\n  0%   { width: 0; }\r\n  33%  { width: 130px;}\r\n  66%  { width: 310px;}\r\n  100% { width: 148px; }\r\n}\r\n@-webkit-keyframes fill-6 {\r\n  0%   { width: 0; }\r\n  33%  { width: 148px;}\r\n  66%  { width: 220px;}\r\n  100% { width: 190px; }\r\n}\r\n@keyframes fill-6 {\r\n  0%   { width: 0; }\r\n  33%  { width: 148px;}\r\n  66%  { width: 220px;}\r\n  100% { width: 190px; }\r\n}\r\n@-webkit-keyframes colors {\r\n  0% { background-color: whitesmoke;}\r\n  50% { background-color: whitesmoke;}\r\n  100% { background-color: whitesmoke;}\r\n}\r\n@keyframes colors {\r\n  0% { background-color: whitesmoke;}\r\n  50% { background-color: whitesmoke;}\r\n  100% { background-color: whitesmoke;}\r\n}\r\n\r\n\r\n.loop-wrapper[_ngcontent-%COMP%] {\r\n  \r\n  background: rgb(45, 72, 83);\r\n  background: #2C3855;\r\n  overflow: hidden;\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  display: block;\r\n  height: 130px;\r\n  border-bottom: 3px solid #fff;\r\n  color: #fff;\r\n  width: 23rem;\r\n  border:2px solid rgb(241, 255, 244);\r\n  border-radius: 16px;\r\n  box-shadow: 1px 3px 20px rgba(0, 0, 0, 0.3);\r\n}\r\n.mountain[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -900px;\r\n  bottom: -20px;\r\n  width: 2px;\r\n  height: 2px;\r\n  box-shadow: \r\n    0 0 0 50px #4DB6AC,\r\n    60px 50px 0 70px #4DB6AC,\r\n    90px 90px 0 50px #4DB6AC,\r\n    250px 250px 0 50px #4DB6AC,\r\n    290px 320px 0 50px #4DB6AC,\r\n    320px 400px 0 50px #4DB6AC\r\n    ;\r\n  transform: rotate(130deg);\r\n  -webkit-animation: mtn 20s linear infinite;\r\n          animation: mtn 20s linear infinite;\r\n}\r\n.hill[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -900px;\r\n  bottom: -50px;\r\n  width: 400px;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  box-shadow: \r\n    0 0 0 50px #4DB6AC,\r\n    -20px 0 0 20px #4DB6AC,\r\n    -90px 0 0 50px #4DB6AC,\r\n    250px 0 0 50px #4DB6AC,\r\n    290px 0 0 50px #4DB6AC,\r\n    620px 0 0 50px #4DB6AC;\r\n  -webkit-animation: hill 4s 2s linear infinite;\r\n          animation: hill 4s 2s linear infinite;\r\n}\r\n.tree[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]:nth-child(2), .tree[_ngcontent-%COMP%]:nth-child(3) {\r\n  position: absolute;\r\n  height: 100px; \r\n  width: 35px;\r\n  bottom: 0;\r\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat;\r\n}\r\n.rock[_ngcontent-%COMP%] {\r\n  margin-top: -17%;\r\n  height: 2%; \r\n  width: 2%;\r\n  bottom: -2px;\r\n  border-radius: 20px;\r\n  position: absolute;\r\n  background: #fff;\r\n}\r\n.truck[_ngcontent-%COMP%], .wheels[_ngcontent-%COMP%] {\r\n  transition: all ease;\r\n  width: 85px;\r\n  margin-right: -60px;\r\n  bottom: 0px;\r\n  right: 50%;\r\n  position: absolute;\r\n  background: #eee;\r\n}\r\n.truck[_ngcontent-%COMP%] {\r\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;\r\n  background-size: contain;\r\n  height: 60px;\r\n}\r\n.truck[_ngcontent-%COMP%]:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  width: 25px;\r\n  box-shadow:\r\n    -30px 28px 0 1.5px #fff,\r\n     -35px 18px 0 1.5px #fff;\r\n}\r\n.wheels[_ngcontent-%COMP%] {\r\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;\r\n  height: 15px;\r\n  margin-bottom: 0;\r\n}\r\n.tree[_ngcontent-%COMP%]  { -webkit-animation: tree 3s 0.000s linear infinite; animation: tree 3s 0.000s linear infinite; }\r\n.tree[_ngcontent-%COMP%]:nth-child(2)  { -webkit-animation: tree2 2s 0.150s linear infinite; animation: tree2 2s 0.150s linear infinite; }\r\n.tree[_ngcontent-%COMP%]:nth-child(3)  { -webkit-animation: tree3 8s 0.050s linear infinite; animation: tree3 8s 0.050s linear infinite; }\r\n.rock[_ngcontent-%COMP%]  { -webkit-animation: rock 4s   -0.530s linear infinite; animation: rock 4s   -0.530s linear infinite; }\r\n.truck[_ngcontent-%COMP%]  { -webkit-animation: truck 4s   0.080s ease infinite; animation: truck 4s   0.080s ease infinite; }\r\n.wheels[_ngcontent-%COMP%]  { -webkit-animation: truck 4s   0.001s ease infinite; animation: truck 4s   0.001s ease infinite; }\r\n.truck[_ngcontent-%COMP%]:before { -webkit-animation: wind 1.5s   0.000s ease infinite; animation: wind 1.5s   0.000s ease infinite; }\r\n@-webkit-keyframes tree {\r\n  0%   { transform: translate(1350px); }\r\n  50% {}\r\n  100% { transform: translate(-50px); }\r\n}\r\n@keyframes tree {\r\n  0%   { transform: translate(1350px); }\r\n  50% {}\r\n  100% { transform: translate(-50px); }\r\n}\r\n@-webkit-keyframes tree2 {\r\n  0%   { transform: translate(650px); }\r\n  50% {}\r\n  100% { transform: translate(-50px); }\r\n}\r\n@keyframes tree2 {\r\n  0%   { transform: translate(650px); }\r\n  50% {}\r\n  100% { transform: translate(-50px); }\r\n}\r\n@-webkit-keyframes tree3 {\r\n  0%   { transform: translate(2750px); }\r\n  50% {}\r\n  100% { transform: translate(-50px); }\r\n}\r\n@keyframes tree3 {\r\n  0%   { transform: translate(2750px); }\r\n  50% {}\r\n  100% { transform: translate(-50px); }\r\n}\r\n@-webkit-keyframes rock {\r\n  0%   { right: -200px; }\r\n  100% { right: 2000px; }\r\n}\r\n@keyframes rock {\r\n  0%   { right: -200px; }\r\n  100% { right: 2000px; }\r\n}\r\n@-webkit-keyframes truck {\r\n  0%   { }\r\n  6%   { transform: translateY(0px); }\r\n  7%   { transform: translateY(-6px); }\r\n  9%   { transform: translateY(0px); }\r\n  10%   { transform: translateY(-1px); }\r\n  11%   { transform: translateY(0px); }\r\n  100%   { }\r\n}\r\n@keyframes truck {\r\n  0%   { }\r\n  6%   { transform: translateY(0px); }\r\n  7%   { transform: translateY(-6px); }\r\n  9%   { transform: translateY(0px); }\r\n  10%   { transform: translateY(-1px); }\r\n  11%   { transform: translateY(0px); }\r\n  100%   { }\r\n}\r\n@-webkit-keyframes wind {\r\n  0%   {  }\r\n  50%   { transform: translateY(3px) }\r\n  100%   { }\r\n}\r\n@keyframes wind {\r\n  0%   {  }\r\n  50%   { transform: translateY(3px) }\r\n  100%   { }\r\n}\r\n@-webkit-keyframes mtn {\r\n  100% {\r\n    transform: translateX(-2000px) rotate(130deg);\r\n  }\r\n}\r\n@keyframes mtn {\r\n  100% {\r\n    transform: translateX(-2000px) rotate(130deg);\r\n  }\r\n}\r\n@-webkit-keyframes hill {\r\n  100% {\r\n    transform: translateX(-2000px);\r\n  }\r\n}\r\n@keyframes hill {\r\n  100% {\r\n    transform: translateX(-2000px);\r\n  }\r\n}\r\n\r\n\r\n\r\n.features-div[_ngcontent-%COMP%] {\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: 15px;\r\n\tpadding: 0 7%;\r\n  \r\n}\r\n.features-head[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tpadding: 70px 0px 50px 0;\r\n}\r\n.features-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-size: 2.2rem;\r\n\tfont-weight: 200;\r\n\tcolor: hsl(234, 12%, 34%);\r\n}\r\n.features-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-weight: 700;\r\n\tfont-size: 1.7rem;\r\n\tcolor: hsl(234, 12%, 34%);\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n.features-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-weight: 400;\r\n\tfont-size: 1rem;\r\n\tcolor: hsl(229, 6%, 66%);\r\n\tmax-width: 500px;\r\n\tmargin: 0 auto;\r\n}\r\n.cards[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tmargin-bottom: 80px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n\tbox-shadow: 2px 8px 14px 0px hsla(229, 6%, 66%, 0.6);\r\n\tborder-radius: 8px;\r\n\tpadding: 30px;\r\n\tmargin: 2rem 0;\r\n\tmax-width: 400px;\r\n}\r\n.card.aqua[_ngcontent-%COMP%] {\r\n\tborder-top: 5px solid hsl(180, 62%, 55%);\r\n\tmargin: 0;\r\n}\r\n.card.red[_ngcontent-%COMP%] {\r\n\tborder-top: 5px solid hsl(0, 78%, 62%);\r\n\r\n}\r\n.card.orange[_ngcontent-%COMP%] {\r\n\tborder-top: 5px solid hsl(34, 97%, 64%);\r\n}\r\n.card.blue[_ngcontent-%COMP%] {\r\n\tborder-top: 5px solid hsl(212, 86%, 64%);\r\n\tmargin: 0;\r\n}\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-top: 30px;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tcolor: hsl(234, 12%, 34%);\r\n\tfont-size: 1.5rem;\r\n}\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 1rem;\r\n\tcolor: hsl(229, 6%, 66%);\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n\tbody[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\theader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 2em;\r\n\t}\r\n\theader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t\tfont-size: 1.1rem;\r\n\t}\r\n\t.cards[_ngcontent-%COMP%] {\r\n\t\tflex-direction: row;\r\n\t}\r\n\t.card[_ngcontent-%COMP%] {\r\n\t\tmargin: 2rem;\r\n\t}\r\n}\r\n\r\n\r\n.why-nouveautracker[_ngcontent-%COMP%] {\r\n  \r\n  background-image: url('black-office.jpg');\r\n  \r\n  background-color: rgb(197, 151, 102);\r\n  background-blend-mode: multiply;\r\n  \r\n  padding-top: 1%;\r\n  padding-bottom: 3%;\r\n  background-size: cover;\r\n  \r\n  \r\n  \r\n}\r\n.why-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: wrap;  \r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.why-features[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  max-width: 370px;\r\n  height: 485px;\r\n  \r\n  text-align: center;\r\n  padding: 50px 35px;\r\n  margin: 1.5%;\r\n  border: 1px solid rgba(255, 255, 255, 0.3);\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 16px;\r\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px);\r\n}\r\n.why-features[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n  color: rgb(242, 238, 238);\r\n}\r\n.why-features[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: black;\r\n  \r\n}\r\n.why-features[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n.email-24[_ngcontent-%COMP%]{\r\n  margin: 20px 0;\r\n}\r\n.leaf-body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 5% 0%;\r\n  \r\n  font-family: 'Poppins';\r\n  \r\n}\r\n.leaf-container[_ngcontent-%COMP%] {\r\n  \r\n  text-align: center;\r\n  \r\n  display: flex;\r\n  flex-flow: wrap;  \r\n  align-items: center;\r\n  justify-content: space-evenly;  \r\n}\r\n.leaf-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: rgb(63, 58, 58);\r\n  font-size: 35px;\r\n  font-weight: 300;\r\n\r\n}\r\n.leafs[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n}\r\n.leaf1[_ngcontent-%COMP%], .leaf2[_ngcontent-%COMP%], .leaf3[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  filter: drop-shadow(22px -12px 7px rgba(0,0,0,.5));\r\n}\r\n.leaf1[_ngcontent-%COMP%] {\r\n  top: 35%;\r\n  left: 15%;\r\n  width: 12%;\r\n  transform: rotate(100deg);\r\n  animation: leaf1 5s infinite alternate-reverse;\r\n}\r\n.leaf2[_ngcontent-%COMP%] {\r\n  top: 34%;\r\n  left: 28%;\r\n  width: 8%;\r\n  transform: rotate(110deg);\r\n  animation: leaf2 2s infinite alternate-reverse ease-in-out;\r\n}\r\n.leaf3[_ngcontent-%COMP%] {\r\n  top: 40%;\r\n  left: 55%;\r\n  width: 6%;\r\n  transform: rotate(210deg);\r\n  filter: drop-shadow(-22px -12px 7px rgba(0,0,0,0.5));\r\n  animation: leaf3 8s infinite alternate-reverse ease-in-out;\r\n}\r\n@-webkit-keyframes leaf1 {\r\n  from {\r\n      transform: translateY(20px) rotate(100deg);\r\n  }\r\n  to {\r\n      transform: translateY(0) rotate(120deg);\r\n  }\r\n}\r\n@keyframes leaf1 {\r\n  from {\r\n      transform: translateY(20px) rotate(100deg);\r\n  }\r\n  to {\r\n      transform: translateY(0) rotate(120deg);\r\n  }\r\n}\r\n@-webkit-keyframes leaf2 {\r\n  from {\r\n      transform: translateY(0) rotate(110deg);\r\n  }\r\n  to {\r\n      transform: translateY(10px) rotate(90deg);\r\n  }\r\n}\r\n@keyframes leaf2 {\r\n  from {\r\n      transform: translateY(0) rotate(110deg);\r\n  }\r\n  to {\r\n      transform: translateY(10px) rotate(90deg);\r\n  }\r\n}\r\n@-webkit-keyframes leaf3 {\r\n  from {\r\n      transform: translateY(30px) rotate(210deg);\r\n  }\r\n  to {\r\n      transform: translateY(0) rotate(240deg);\r\n  }\r\n}\r\n@keyframes leaf3 {\r\n  from {\r\n      transform: translateY(30px) rotate(210deg);\r\n  }\r\n  to {\r\n      transform: translateY(0) rotate(240deg);\r\n  }\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  \r\n  background-color:#2C3855;\r\n  min-height: 100px;\r\n  padding: 40px 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\nfooter[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n  position:relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 20px 0;\r\n  flex-wrap: wrap;\r\n}\r\nfooter[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\nfooter[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  margin: 0 20px;\r\n  display: inline-block;\r\n  transition: 0.5s;\r\n}\r\nfooter[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-10px);\r\n}\r\nfooter[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]  {\r\n  font-size: 1.2em;\r\n  color: #fff;\r\n  margin: 0 20px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  opacity: 0.75;\r\n}\r\nfooter[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsaUNBQWlEO0VBQ2pELHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCO0VBQ0M7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCO0FBRUE7RUFDQSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQjtBQUVBO0VBQ0EsbUJBQW1COztFQUVuQjtBQUVBO0VBQ0EsVUFBVTtFQUNWLFFBQVE7RUFDUjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDBFQUEwRTtJQUMxRTtFQUNGO0FBR0Y7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCO0FBR0Esa0NBQWtDO0FBRWxDO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVGO0FBRUEsd0RBQXdEO0FBRXhEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQ0FBc0M7Q0FDekM7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsNkVBQXFFO1lBQXJFLHFFQUFxRTtBQUN6RTtBQUVBO0VBQ0UsK0VBQXVFO1VBQXZFLHVFQUF1RTtBQUN6RTtBQUVBO0dBQ0csZ0ZBQXdFO1dBQXhFLHdFQUF3RTtBQUMzRTtBQUdBO0dBQ0csZ0ZBQXdFO1dBQXhFLHdFQUF3RTtBQUMzRTtBQUdBO0dBQ0csZ0ZBQXdFO1dBQXhFLHdFQUF3RTtBQUMzRTtBQUVBO0dBQ0csZ0ZBQXdFO1dBQXhFLHdFQUF3RTtBQUMzRTtBQUVBO0dBQ0csZ0ZBQXdFO1dBQXhFLHdFQUF3RTtBQUMzRTtBQUlBO0VBQ0UsT0FBTyxRQUFRLEVBQUU7RUFDakIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxXQUFXLENBQUM7RUFDbkIsT0FBTyxZQUFZLEVBQUU7QUFDdkI7QUFMQTtFQUNFLE9BQU8sUUFBUSxFQUFFO0VBQ2pCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sV0FBVyxDQUFDO0VBQ25CLE9BQU8sWUFBWSxFQUFFO0FBQ3ZCO0FBRUE7RUFDRSxPQUFPLFFBQVEsRUFBRTtFQUNqQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFlBQVksRUFBRTtBQUN2QjtBQUxBO0VBQ0UsT0FBTyxRQUFRLEVBQUU7RUFDakIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLEVBQUU7QUFDdkI7QUFFQTtFQUNFLE9BQU8sUUFBUSxFQUFFO0VBQ2pCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sV0FBVyxDQUFDO0VBQ25CLE9BQU8sWUFBWSxFQUFFO0FBQ3ZCO0FBTEE7RUFDRSxPQUFPLFFBQVEsRUFBRTtFQUNqQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFdBQVcsQ0FBQztFQUNuQixPQUFPLFlBQVksRUFBRTtBQUN2QjtBQUVBO0VBQ0UsT0FBTyxRQUFRLEVBQUU7RUFDakIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLEVBQUU7QUFDdkI7QUFMQTtFQUNFLE9BQU8sUUFBUSxFQUFFO0VBQ2pCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sWUFBWSxFQUFFO0FBQ3ZCO0FBRUE7RUFDRSxPQUFPLFFBQVEsRUFBRTtFQUNqQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFlBQVksRUFBRTtBQUN2QjtBQUxBO0VBQ0UsT0FBTyxRQUFRLEVBQUU7RUFDakIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLEVBQUU7QUFDdkI7QUFFQTtFQUNFLE9BQU8sUUFBUSxFQUFFO0VBQ2pCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sWUFBWSxFQUFFO0FBQ3ZCO0FBTEE7RUFDRSxPQUFPLFFBQVEsRUFBRTtFQUNqQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFlBQVksQ0FBQztFQUNwQixPQUFPLFlBQVksRUFBRTtBQUN2QjtBQUdBO0VBQ0UsT0FBTyxRQUFRLEVBQUU7RUFDakIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLENBQUM7RUFDcEIsT0FBTyxZQUFZLEVBQUU7QUFDdkI7QUFMQTtFQUNFLE9BQU8sUUFBUSxFQUFFO0VBQ2pCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sWUFBWSxDQUFDO0VBQ3BCLE9BQU8sWUFBWSxFQUFFO0FBQ3ZCO0FBRUE7RUFDRSxLQUFLLDRCQUE0QixDQUFDO0VBQ2xDLE1BQU0sNEJBQTRCLENBQUM7RUFDbkMsT0FBTyw0QkFBNEIsQ0FBQztBQUN0QztBQUpBO0VBQ0UsS0FBSyw0QkFBNEIsQ0FBQztFQUNsQyxNQUFNLDRCQUE0QixDQUFDO0VBQ25DLE9BQU8sNEJBQTRCLENBQUM7QUFDdEM7QUFDQSxvREFBb0Q7QUFFcEQsb0RBQW9EO0FBQ3BEO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1g7Ozs7Ozs7SUFPRTtFQUNGLHlCQUF5QjtFQUN6QiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWjs7Ozs7OzBCQU13QjtFQUN4Qiw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0VBQ1QsdUZBQXVGO0FBQ3pGO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0ZBQXdGO0VBQ3hGLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYOzs0QkFFMEI7QUFDNUI7QUFDQTtFQUNFLHlGQUF5RjtFQUN6RixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUEsU0FBUyxpREFBeUMsRUFBekMseUNBQXlDLEVBQUU7QUFDcEQsc0JBQXNCLGtEQUEwQyxFQUExQywwQ0FBMEMsRUFBRTtBQUNsRSxzQkFBc0Isa0RBQTBDLEVBQTFDLDBDQUEwQyxFQUFFO0FBQ2xFLFNBQVMsb0RBQTRDLEVBQTVDLDRDQUE0QyxFQUFFO0FBQ3ZELFVBQVUsa0RBQTBDLEVBQTFDLDBDQUEwQyxFQUFFO0FBQ3RELFdBQVcsa0RBQTBDLEVBQTFDLDBDQUEwQyxFQUFFO0FBQ3ZELGdCQUFnQixtREFBMkMsRUFBM0MsMkNBQTJDLEVBQUU7QUFHN0Q7RUFDRSxPQUFPLDRCQUE0QixFQUFFO0VBQ3JDLEtBQUs7RUFDTCxPQUFPLDJCQUEyQixFQUFFO0FBQ3RDO0FBSkE7RUFDRSxPQUFPLDRCQUE0QixFQUFFO0VBQ3JDLEtBQUs7RUFDTCxPQUFPLDJCQUEyQixFQUFFO0FBQ3RDO0FBQ0E7RUFDRSxPQUFPLDJCQUEyQixFQUFFO0VBQ3BDLEtBQUs7RUFDTCxPQUFPLDJCQUEyQixFQUFFO0FBQ3RDO0FBSkE7RUFDRSxPQUFPLDJCQUEyQixFQUFFO0VBQ3BDLEtBQUs7RUFDTCxPQUFPLDJCQUEyQixFQUFFO0FBQ3RDO0FBQ0E7RUFDRSxPQUFPLDRCQUE0QixFQUFFO0VBQ3JDLEtBQUs7RUFDTCxPQUFPLDJCQUEyQixFQUFFO0FBQ3RDO0FBSkE7RUFDRSxPQUFPLDRCQUE0QixFQUFFO0VBQ3JDLEtBQUs7RUFDTCxPQUFPLDJCQUEyQixFQUFFO0FBQ3RDO0FBRUE7RUFDRSxPQUFPLGFBQWEsRUFBRTtFQUN0QixPQUFPLGFBQWEsRUFBRTtBQUN4QjtBQUhBO0VBQ0UsT0FBTyxhQUFhLEVBQUU7RUFDdEIsT0FBTyxhQUFhLEVBQUU7QUFDeEI7QUFDQTtFQUNFLE9BQU87RUFDUCxPQUFPLDBCQUEwQixFQUFFO0VBQ25DLE9BQU8sMkJBQTJCLEVBQUU7RUFDcEMsT0FBTywwQkFBMEIsRUFBRTtFQUNuQyxRQUFRLDJCQUEyQixFQUFFO0VBQ3JDLFFBQVEsMEJBQTBCLEVBQUU7RUFDcEMsU0FBUztBQUNYO0FBUkE7RUFDRSxPQUFPO0VBQ1AsT0FBTywwQkFBMEIsRUFBRTtFQUNuQyxPQUFPLDJCQUEyQixFQUFFO0VBQ3BDLE9BQU8sMEJBQTBCLEVBQUU7RUFDbkMsUUFBUSwyQkFBMkIsRUFBRTtFQUNyQyxRQUFRLDBCQUEwQixFQUFFO0VBQ3BDLFNBQVM7QUFDWDtBQUNBO0VBQ0UsUUFBUTtFQUNSLFFBQVEsMkJBQTJCO0VBQ25DLFNBQVM7QUFDWDtBQUpBO0VBQ0UsUUFBUTtFQUNSLFFBQVEsMkJBQTJCO0VBQ25DLFNBQVM7QUFDWDtBQUNBO0VBQ0U7SUFDRSw2Q0FBNkM7RUFDL0M7QUFDRjtBQUpBO0VBQ0U7SUFDRSw2Q0FBNkM7RUFDL0M7QUFDRjtBQUNBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjtBQUpBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjtBQUVBLGtEQUFrRDtBQUVsRCw4Q0FBOEM7QUFDOUMsbUdBQW1HO0FBRW5HO0NBQ0Msa0NBQWtDO0NBQ2xDLGVBQWU7Q0FDZixhQUFhO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxvREFBb0Q7Q0FDcEQsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx3Q0FBd0M7Q0FDeEMsU0FBUztBQUNWO0FBQ0E7Q0FDQyxzQ0FBc0M7O0FBRXZDO0FBQ0E7Q0FDQyx1Q0FBdUM7QUFDeEM7QUFDQTtDQUNDLHdDQUF3QztDQUN4QyxTQUFTO0FBQ1Y7QUFFQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCO0FBRUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7Q0FDQTs7RUFFQyxjQUFjO0NBQ2Y7Q0FDQTtFQUNDLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxZQUFZO0NBQ2I7QUFDRDtBQUVBLDBEQUEwRDtBQUUxRCwyREFBMkQ7QUFDM0Q7RUFDRSx3RUFBd0U7RUFDeEUseUNBQXVEO0VBQ3ZELDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUEsNERBQTREO0FBRTVELHVDQUF1QztBQUV2QztFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsMERBQTBEO0FBQzVEO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsb0RBQW9EO0VBQ3BELDBEQUEwRDtBQUM1RDtBQUVBO0VBQ0U7TUFDSSwwQ0FBMEM7RUFDOUM7RUFDQTtNQUNJLHVDQUF1QztFQUMzQztBQUNGO0FBUEE7RUFDRTtNQUNJLDBDQUEwQztFQUM5QztFQUNBO01BQ0ksdUNBQXVDO0VBQzNDO0FBQ0Y7QUFFQTtFQUNFO01BQ0ksdUNBQXVDO0VBQzNDO0VBQ0E7TUFDSSx5Q0FBeUM7RUFDN0M7QUFDRjtBQVBBO0VBQ0U7TUFDSSx1Q0FBdUM7RUFDM0M7RUFDQTtNQUNJLHlDQUF5QztFQUM3QztBQUNGO0FBQ0E7RUFDRTtNQUNJLDBDQUEwQztFQUM5QztFQUNBO01BQ0ksdUNBQXVDO0VBQzNDO0FBQ0Y7QUFQQTtFQUNFO01BQ0ksMENBQTBDO0VBQzlDO0VBQ0E7TUFDSSx1Q0FBdUM7RUFDM0M7QUFDRjtBQUVBLG9EQUFvRDtBQUVwRCw0Q0FBNEM7QUFDNUM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBRUEsb0RBQW9EIiwiZmlsZSI6InJlZ2lzdGVyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW5kaXZ7IFxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTk0LCAyNDYpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDExNywgMTUzKTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtzbGF0ZWdyYXk7ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2suanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6bXVsdGlwbHk7IFxyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICBwYWRkaW5nLXRvcDogODVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNiU7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzOCwgMjUyKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMWU2O1xyXG4gIG9wYWNpdHk6IC45NDtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBtaW4td2lkdGg6IDExOCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgXHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZCwgbWF0LWNoZWNrYm94IHtcclxuICB3aWR0aDogOTMlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6MTAlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDclIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMS4zJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHRib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKVxyXG4gIH1cclxuICBcclxuICAubG9naW4tYnV0dG9uIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJ1dHRvbiBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiAnXFwwMGJiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyNTMsIDIwOSwgMjE3KSwgcmdiKDEwNCwgMTk1LCAyNTEpKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpXHJcbiAgfVxyXG4gIFxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC8qIGNvbG9yOiByZ2IoNDcsIDk3LCA0Nyk7ICovXHJcbiAgLyogY29sb3I6ICNmOTQ5ODQ7ICovXHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAvKiBjb2xvcjogcmdiKDEyLCA2OSwgMTIpOyAqL1xyXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XHJcbiAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXHJcbn1cclxuXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vL2dyYXBoIGFuaW1hdGlvbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubG9nby1ob2xkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAxMnB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICAvKiAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgKi9cclxuIH1cclxuXHJcblxyXG4uYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzZhNmE2YTtcclxuICAgIHdpZHRoOiAgMCU7XHJcbiAgICAvKiB0b3A6IDBweDsgKi9cclxuICAgIC8qIGxlZnQ6IDE4cHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMTkyLDE5MiwxOTIsMC45KTtcclxuICAgIGFuaW1hdGlvbjogZmlsbCA0MnMgaW5maW5pdGUgYWx0ZXJuYXRlLCBjb2xvcnMgMjVzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmJhci5maWxsMSB7XHJcbiAgYW5pbWF0aW9uOiBmaWxsLTEgMjVzIGluZmluaXRlIGFsdGVybmF0ZSwgY29sb3JzIDM1cyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5iYXIuZmlsbDIge1xyXG4gICBhbmltYXRpb246ICBmaWxsLTIgMzVzIGluZmluaXRlIGFsdGVybmF0ZSwgY29sb3JzIDIwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcblxyXG4uYmFyLmZpbGwzIHtcclxuICAgYW5pbWF0aW9uOiAgZmlsbC0zIDM1cyBpbmZpbml0ZSBhbHRlcm5hdGUsIGNvbG9ycyAzNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5cclxuLmJhci5maWxsNCB7XHJcbiAgIGFuaW1hdGlvbjogIGZpbGwtNCAzNXMgaW5maW5pdGUgYWx0ZXJuYXRlLCBjb2xvcnMgMzBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmJhci5maWxsNSB7XHJcbiAgIGFuaW1hdGlvbjogIGZpbGwtNSAyNXMgaW5maW5pdGUgYWx0ZXJuYXRlLCBjb2xvcnMgMzBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmJhci5maWxsNiB7XHJcbiAgIGFuaW1hdGlvbjogIGZpbGwtNiAyNXMgaW5maW5pdGUgYWx0ZXJuYXRlLCBjb2xvcnMgMzBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGwge1xyXG4gIDAlICAgeyB3aWR0aDogMDsgfVxyXG4gIDMzJSAgeyB3aWR0aDogMTUwcHg7fVxyXG4gIDY2JSAgeyB3aWR0aDogNTBweDt9XHJcbiAgMTAwJSB7IHdpZHRoOiAxNTBweDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGwtMSB7XHJcbiAgMCUgICB7IHdpZHRoOiAwOyB9XHJcbiAgMzMlICB7IHdpZHRoOiAyNTBweDt9XHJcbiAgNjYlICB7IHdpZHRoOiAxMDBweDt9XHJcbiAgMTAwJSB7IHdpZHRoOiAzNTBweDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGwtMiB7XHJcbiAgMCUgICB7IHdpZHRoOiAwOyB9XHJcbiAgMzMlICB7IHdpZHRoOiAzNzBweDt9XHJcbiAgNjYlICB7IHdpZHRoOiA5MHB4O31cclxuICAxMDAlIHsgd2lkdGg6IDEzNnB4OyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbC0zIHtcclxuICAwJSAgIHsgd2lkdGg6IDA7IH1cclxuICAzMyUgIHsgd2lkdGg6IDEwMHB4O31cclxuICA2NiUgIHsgd2lkdGg6IDI0MHB4O31cclxuICAxMDAlIHsgd2lkdGg6IDIwOXB4OyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbC00IHtcclxuICAwJSAgIHsgd2lkdGg6IDA7IH1cclxuICAzMyUgIHsgd2lkdGg6IDMyMHB4O31cclxuICA2NiUgIHsgd2lkdGg6IDEzNHB4O31cclxuICAxMDAlIHsgd2lkdGg6IDI5OXB4OyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbC01IHtcclxuICAwJSAgIHsgd2lkdGg6IDA7IH1cclxuICAzMyUgIHsgd2lkdGg6IDEzMHB4O31cclxuICA2NiUgIHsgd2lkdGg6IDMxMHB4O31cclxuICAxMDAlIHsgd2lkdGg6IDE0OHB4OyB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGwtNiB7XHJcbiAgMCUgICB7IHdpZHRoOiAwOyB9XHJcbiAgMzMlICB7IHdpZHRoOiAxNDhweDt9XHJcbiAgNjYlICB7IHdpZHRoOiAyMjBweDt9XHJcbiAgMTAwJSB7IHdpZHRoOiAxOTBweDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbG9ycyB7XHJcbiAgMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO31cclxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO31cclxuICAxMDAlIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTt9XHJcbn1cclxuLyogLy8vLy8vLy8vLy8vL2dyYXBoIGFuaW1hdGlvbiBlbmQvLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vL3RydWNrIGFuaW1hdGlvbi8vLy8vLy8vLy8vLy8vLyovXHJcbi5sb29wLXdyYXBwZXIge1xyXG4gIC8qIGJhY2tncm91bmQ6ICNiYWQ1Y2U7ICovXHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCA3MiwgODMpO1xyXG4gIGJhY2tncm91bmQ6ICMyQzM4NTU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDIzcmVtO1xyXG4gIGJvcmRlcjoycHggc29saWQgcmdiKDI0MSwgMjU1LCAyNDQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ubW91bnRhaW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTkwMHB4O1xyXG4gIGJvdHRvbTogLTIwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3gtc2hhZG93OiBcclxuICAgIDAgMCAwIDUwcHggIzREQjZBQyxcclxuICAgIDYwcHggNTBweCAwIDcwcHggIzREQjZBQyxcclxuICAgIDkwcHggOTBweCAwIDUwcHggIzREQjZBQyxcclxuICAgIDI1MHB4IDI1MHB4IDAgNTBweCAjNERCNkFDLFxyXG4gICAgMjkwcHggMzIwcHggMCA1MHB4ICM0REI2QUMsXHJcbiAgICAzMjBweCA0MDBweCAwIDUwcHggIzREQjZBQ1xyXG4gICAgO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XHJcbiAgYW5pbWF0aW9uOiBtdG4gMjBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4uaGlsbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtOTAwcHg7XHJcbiAgYm90dG9tOiAtNTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3gtc2hhZG93OiBcclxuICAgIDAgMCAwIDUwcHggIzREQjZBQyxcclxuICAgIC0yMHB4IDAgMCAyMHB4ICM0REI2QUMsXHJcbiAgICAtOTBweCAwIDAgNTBweCAjNERCNkFDLFxyXG4gICAgMjUwcHggMCAwIDUwcHggIzREQjZBQyxcclxuICAgIDI5MHB4IDAgMCA1MHB4ICM0REI2QUMsXHJcbiAgICA2MjBweCAwIDAgNTBweCAjNERCNkFDO1xyXG4gIGFuaW1hdGlvbjogaGlsbCA0cyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnRyZWUsIC50cmVlOm50aC1jaGlsZCgyKSwgLnRyZWU6bnRoLWNoaWxkKDMpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDsgXHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xMzAwMTUvdHJlZS5zdmcpIG5vLXJlcGVhdDtcclxufVxyXG4ucm9jayB7XHJcbiAgbWFyZ2luLXRvcDogLTE3JTtcclxuICBoZWlnaHQ6IDIlOyBcclxuICB3aWR0aDogMiU7XHJcbiAgYm90dG9tOiAtMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLnRydWNrLCAud2hlZWxzIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZTtcclxuICB3aWR0aDogODVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuLnRydWNrIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTMwMDE1L3RydWNrLnN2Zykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLnRydWNrOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAtMzBweCAyOHB4IDAgMS41cHggI2ZmZixcclxuICAgICAtMzVweCAxOHB4IDAgMS41cHggI2ZmZjtcclxufVxyXG4ud2hlZWxzIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTMwMDE1L3doZWVscy5zdmcpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRyZWUgIHsgYW5pbWF0aW9uOiB0cmVlIDNzIDAuMDAwcyBsaW5lYXIgaW5maW5pdGU7IH1cclxuLnRyZWU6bnRoLWNoaWxkKDIpICB7IGFuaW1hdGlvbjogdHJlZTIgMnMgMC4xNTBzIGxpbmVhciBpbmZpbml0ZTsgfVxyXG4udHJlZTpudGgtY2hpbGQoMykgIHsgYW5pbWF0aW9uOiB0cmVlMyA4cyAwLjA1MHMgbGluZWFyIGluZmluaXRlOyB9XHJcbi5yb2NrICB7IGFuaW1hdGlvbjogcm9jayA0cyAgIC0wLjUzMHMgbGluZWFyIGluZmluaXRlOyB9XHJcbi50cnVjayAgeyBhbmltYXRpb246IHRydWNrIDRzICAgMC4wODBzIGVhc2UgaW5maW5pdGU7IH1cclxuLndoZWVscyAgeyBhbmltYXRpb246IHRydWNrIDRzICAgMC4wMDFzIGVhc2UgaW5maW5pdGU7IH1cclxuLnRydWNrOmJlZm9yZSB7IGFuaW1hdGlvbjogd2luZCAxLjVzICAgMC4wMDBzIGVhc2UgaW5maW5pdGU7IH1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHRyZWUge1xyXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMzUwcHgpOyB9XHJcbiAgNTAlIHt9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgdHJlZTIge1xyXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2NTBweCk7IH1cclxuICA1MCUge31cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwcHgpOyB9XHJcbn1cclxuQGtleWZyYW1lcyB0cmVlMyB7XHJcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDI3NTBweCk7IH1cclxuICA1MCUge31cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwcHgpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm9jayB7XHJcbiAgMCUgICB7IHJpZ2h0OiAtMjAwcHg7IH1cclxuICAxMDAlIHsgcmlnaHQ6IDIwMDBweDsgfVxyXG59XHJcbkBrZXlmcmFtZXMgdHJ1Y2sge1xyXG4gIDAlICAgeyB9XHJcbiAgNiUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbiAgNyUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgfVxyXG4gIDklICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4gIDEwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XHJcbiAgMTElICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4gIDEwMCUgICB7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIHdpbmQge1xyXG4gIDAlICAgeyAgfVxyXG4gIDUwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCkgfVxyXG4gIDEwMCUgICB7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIG10biB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgcm90YXRlKDEzMGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaGlsbCB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy90cnVjayBhbmltYXRpb24gZW5kZWQvLy8vLy8vLy8vLy8gKi9cclxuXHJcbi8qIC8vLy8vLy8vLy8vL2ZlYXR1cmVzIHNlY3Rpb24vLy8vLy8vLy8vLy8vICovXHJcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXAnKTsgKi9cclxuXHJcbi5mZWF0dXJlcy1kaXYge1xyXG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHBhZGRpbmc6IDAgNyU7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcbi5mZWF0dXJlcy1oZWFkIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogNzBweCAwcHggNTBweCAwO1xyXG59XHJcbi5mZWF0dXJlcy1oZWFkIGgxIHtcclxuXHRmb250LXNpemU6IDIuMnJlbTtcclxuXHRmb250LXdlaWdodDogMjAwO1xyXG5cdGNvbG9yOiBoc2woMjM0LCAxMiUsIDM0JSk7XHJcbn1cclxuLmZlYXR1cmVzLWhlYWQgaDIge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiAxLjdyZW07XHJcblx0Y29sb3I6IGhzbCgyMzQsIDEyJSwgMzQlKTtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLmZlYXR1cmVzLWhlYWQgcCB7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Y29sb3I6IGhzbCgyMjksIDYlLCA2NiUpO1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNhcmRzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcbi5jYXJkIHtcclxuXHRib3gtc2hhZG93OiAycHggOHB4IDE0cHggMHB4IGhzbGEoMjI5LCA2JSwgNjYlLCAwLjYpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG5cdG1hcmdpbjogMnJlbSAwO1xyXG5cdG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuLmNhcmQuYXF1YSB7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIGhzbCgxODAsIDYyJSwgNTUlKTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLmNhcmQucmVkIHtcclxuXHRib3JkZXItdG9wOiA1cHggc29saWQgaHNsKDAsIDc4JSwgNjIlKTtcclxuXHJcbn1cclxuLmNhcmQub3JhbmdlIHtcclxuXHRib3JkZXItdG9wOiA1cHggc29saWQgaHNsKDM0LCA5NyUsIDY0JSk7XHJcbn1cclxuLmNhcmQuYmx1ZSB7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIGhzbCgyMTIsIDg2JSwgNjQlKTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY2FyZCBoMiB7XHJcblx0Y29sb3I6IGhzbCgyMzQsIDEyJSwgMzQlKTtcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uY2FyZCBwIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Y29sb3I6IGhzbCgyMjksIDYlLCA2NiUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cdGJvZHkge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHRoZWFkZXIgaDEsXHJcblx0aGVhZGVyIGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMmVtO1xyXG5cdH1cclxuXHRoZWFkZXIgcCB7XHJcblx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHR9XHJcblx0LmNhcmRzIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cdC5jYXJkIHtcclxuXHRcdG1hcmdpbjogMnJlbTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy9mZWF0dXJlcyBzZWN0aW9uIGVuZGVkLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy93aHkgbm91dmVhdXRyYWNrZXIvLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLndoeS1ub3V2ZWF1dHJhY2tlciB7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExNWRlZywjMkMzODU1IDAlLCMxNzFFMkYgMTAwJSk7ICAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmxhY2stb2ZmaWNlLmpwZyk7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpncmF5OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE1MSwgMTAyKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXHJcbiAgLyogZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgKi9cclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcbi53aHktY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogd3JhcDsgIFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLndoeS1mZWF0dXJlcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIGhlaWdodDogNDg1cHg7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHggMzVweDtcclxuICBtYXJnaW46IDEuNSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG4ud2h5LWZlYXR1cmVzIGgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogcmdiKDI0MiwgMjM4LCAyMzgpO1xyXG59XHJcbi53aHktZmVhdHVyZXMgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG59XHJcbi53aHktZmVhdHVyZXMgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vd2h5IG5vdXZlYXV0cmFja2VyIGVuZGVkLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vbGVhZi0gc2VydmljZS8vLy8vLy8vICovXHJcblxyXG4uZW1haWwtMjR7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmxlYWYtYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDUlIDAlO1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIC8qIGJhY2tncm91bmQ6ICNlM2ViZWE7ICovXHJcbn1cclxuLmxlYWYtY29udGFpbmVyIHtcclxuICAvKiBtYXJnaW46IDhlbSBhdXRvOyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogd3JhcDsgIFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICBcclxufVxyXG4ubGVhZi1jb250YWluZXIgaDIge1xyXG4gIGNvbG9yOiByZ2IoNjMsIDU4LCA1OCk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG59XHJcbi5sZWFmcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHdpZHRoOiA2MCU7ICovXHJcbn1cclxuLmxlYWYxLCAubGVhZjIsIC5sZWFmMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMjJweCAtMTJweCA3cHggcmdiYSgwLDAsMCwuNSkpO1xyXG59XHJcbi5sZWFmMSB7XHJcbiAgdG9wOiAzNSU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHdpZHRoOiAxMiU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcclxuICBhbmltYXRpb246IGxlYWYxIDVzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG59XHJcbi5sZWFmMiB7XHJcbiAgdG9wOiAzNCU7XHJcbiAgbGVmdDogMjglO1xyXG4gIHdpZHRoOiA4JTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTBkZWcpO1xyXG4gIGFuaW1hdGlvbjogbGVhZjIgMnMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxlYWYzIHtcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA1NSU7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygtMjJweCAtMTJweCA3cHggcmdiYSgwLDAsMCwwLjUpKTtcclxuICBhbmltYXRpb246IGxlYWYzIDhzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxlYWYxIHtcclxuICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHJvdGF0ZSgxMDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMTIwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGVhZjIge1xyXG4gIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDExMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbGVhZjMge1xyXG4gIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKDIxMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgyNDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogLy8vLy8vLy8vL2xlYWYtc2VydmljZSBlbmRlZC8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8gZm9vdGVyIC8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDcyLCA4Myk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMkMzODU1O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmZvb3RlciAuc29jaWFsLWljb24sIFxyXG5mb290ZXIgLm1lbnUge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuZm9vdGVyIC5zb2NpYWwtaWNvbiBsaSwgXHJcbmZvb3RlciAubWVudSBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5mb290ZXIgLnNvY2lhbC1pY29uIGxpIGEge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbmZvb3RlciAuc29jaWFsLWljb24gaW1nIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmZvb3RlciAuc29jaWFsLWljb24gbGkgYTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxufSAgXHJcbmZvb3RlciAubWVudSBsaSBhICB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbn1cclxuZm9vdGVyIC5tZW51IGxpIGE6aG92ZXIge1xyXG4gb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLyBmb290ZXIgZW5kZWQvLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register-login',
            templateUrl: './register-login.component.html',
            styleUrls: ['./register-login.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JaKv":
    /*!**********************************************************!*\
      !*** ./src/app/component/calendar/calendar.component.ts ***!
      \**********************************************************/

    /*! exports provided: CalendarComponent */

    /***/
    function JaKv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return CalendarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../time-tracker/time-tracker.component */
      "Aj0r");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/model/daily-tracker */
      "6ORI");
      /* harmony import */


      var _missing_trackers_missing_trackers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../missing-trackers/missing-trackers.component */
      "cA/2");
      /* harmony import */


      var src_app_model_monthly_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/model/monthly-tracker */
      "F1cD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/daily-tracker.service */
      "KjdE");
      /* harmony import */


      var src_app_service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/monthly-tracker.service */
      "1+rk");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5, a6, a7) {
        return {
          "zoom": a0,
          "currentDay": a1,
          "holiday": a2,
          "disable": a3,
          "bgRed": a4,
          "bgGreen": a5,
          "bgPurple": a6,
          "bgYellow": a7
        };
      };

      function CalendarComponent_mat_grid_tile_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_mat_grid_tile_46_Template_mat_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var tracker_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.openDialog(tracker_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tracker_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction8"](5, _c0, tracker_r2.state && !ctx_r1.isFutureDate(tracker_r2), tracker_r2.currentDay && tracker_r2.state, ctx_r1.isWeekend(tracker_r2), ctx_r1.isFutureDate(tracker_r2) && !ctx_r1.isWeekend(tracker_r2), ctx_r1.getTotalLoggedHours(tracker_r2) == 0 && !ctx_r1.isWeekend(tracker_r2) && !ctx_r1.isFutureDate(tracker_r2), ctx_r1.getTotalLoggedHours(tracker_r2) == 8 || ctx_r1.getTotalLoggedHours(tracker_r2) == 4 && ctx_r1.isHalfdayLeave(tracker_r2), ctx_r1.isFullDayLeave(tracker_r2), ctx_r1.isHalfdayLeave(tracker_r2) && ctx_r1.getTotalLoggedHours(tracker_r2) < 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r1.getTotalLoggedHours(tracker_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.getTotalLoggedHours(tracker_r2) == 8 || ctx_r1.isWeekend(tracker_r2) || ctx_r1.isFutureDate(tracker_r2) || ctx_r1.isFullDayLeave(tracker_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !tracker_r2.state || ctx_r1.isFutureDate(tracker_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tracker_r2.dayOfMonth);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "month-submission-open": a0
        };
      };

      var CalendarComponent = /*#__PURE__*/function () {
        function CalendarComponent(_fb, dialog, apiService, monthlyService) {
          _classCallCheck(this, CalendarComponent);

          this._fb = _fb;
          this.dialog = dialog;
          this.apiService = apiService;
          this.monthlyService = monthlyService; // all data variables

          this.trackerListMonth = []; // list of DailyTracker objects for a month displayed

          this.daysInMonth = 0; // captures total number of days in a monmth being displayed

          this.firstDay = 0; // for capturing the weekday from which month starts

          this.month = 0; // use to create tracker object array for a month

          this.year = 0; // used to create tracked object array for a month

          this.employeeEmail = '';
          this.todaysDate = moment__WEBPACK_IMPORTED_MODULE_1__(); // keeps current date throughout the program

          this.date = moment__WEBPACK_IMPORTED_MODULE_1__(); // used to navigate and show different month tracker object in calendar

          this.desiredDate = new Date(); // ngModel variable to pick date from nav calendar

          this.mSD = 21; //monthly submission date on which monthly tracker submit button gets active every month, set to 21st of every month currently

          this.monthlySubmissionActive = false;
          this.allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //array to convert an index into month name

          this.dailyTrackerForm = this._fb.group({
            calendarDays: this._fb.array([])
          });
        } // ON-INIT METHOD


        _createClass(CalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createMonthTrackers();
            this.checkIfMonthlySubmissionActive();
          } // method to load a picked month

        }, {
          key: "loadMonth",
          value: function loadMonth() {
            this.date = moment__WEBPACK_IMPORTED_MODULE_1__(this.desiredDate);
            this.createMonthTrackers();
            this.checkIfMonthlySubmissionActive();
          } // method to Create DailyTracker objects for a month

        }, {
          key: "createMonthTrackers",
          value: function createMonthTrackers() {
            var _this37 = this;

            this.trackerListMonth = [];
            this.daysInMonth = moment__WEBPACK_IMPORTED_MODULE_1__(this.date).daysInMonth();
            this.firstDay = moment__WEBPACK_IMPORTED_MODULE_1__(this.date).startOf('M').weekday(); // gives weekday for first day of month in number e.g 5 for friday

            this.month = this.date.month() + 1; // month() returns 6 for July, we need to have 7 for july

            this.year = this.date.year();

            for (var j = 0; j < this.firstDay; j++) // loop to make state=false for inserting null trackers to shift first day of month to correct weekday in calendar
            {
              var temp = new src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_4__["DailyTracker"](new Date(), false);
              this.trackerListMonth.unshift(temp);
            }

            for (var i = 1; i <= this.daysInMonth; i++) {
              var dateStr = this.year + '-' + this.month + '-' + i;

              if (i == 1) {
                this.firstDayOfMonth = new Date(dateStr); // capture first DATE of month
              }

              if (i == this.daysInMonth) {
                this.lastDayOfMonth = new Date(dateStr); // capture last DATE of month
              }

              var _temp = new src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_4__["DailyTracker"](new Date(dateStr), true);

              _temp.employeeEmail = this.employeeEmail;
              this.trackerListMonth.push(_temp);
            }

            this.showCurrentDay();
            console.table(this.trackerListMonth); //get tracker data from backend and update in frontend tracker objects of calendar

            this.getAllTrackersFromDB().subscribe(function (result) {
              console.log("tracker for whole month from backend", result);
              var trackerListFromDB = result;

              for (var _i9 = 0; _i9 < trackerListFromDB.length; _i9++) {
                for (var _j = 0; _j < _this37.trackerListMonth.length; _j++) {
                  if (trackerListFromDB[_i9].date == _this37.trackerListMonth[_j].date.getTime()) // if dates match
                    {
                      _this37.trackerListMonth[_j].leaveType = trackerListFromDB[_i9].leaveType;
                      _this37.trackerListMonth[_j].logs = trackerListFromDB[_i9].logs;
                      _this37.trackerListMonth[_j].remarks = trackerListFromDB[_i9].remarks;
                      _this37.trackerListMonth[_j].trackerId = trackerListFromDB[_i9].dailyTrackerID;
                      _this37.trackerListMonth[_j].employeeEmail = trackerListFromDB[_i9].employeeEmail;
                      break;
                    }
                }
              }
            });
          } // method for API call to get all dailyTrackers for a month

        }, {
          key: "getAllTrackersFromDB",
          value: function getAllTrackersFromDB() {
            return this.apiService.getTrackersForPeriod(localStorage.getItem('tgt_email'), this.firstDayOfMonth.getTime(), this.lastDayOfMonth.getTime());
          } // Method to open dailytracker UI for a date

        }, {
          key: "openDialog",
          value: function openDialog(tracker) {
            var _this38 = this;

            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
            dialogConfig.disableClose = true;
            console.log('data sent from calendar:', tracker);
            dialogConfig.data = tracker;
            var dialogRef = this.dialog.open(_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_2__["TimeTrackerComponent"], dialogConfig);
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('Dialog result', result); // update the dailyTracker data for this Date

              var _iterator22 = _createForOfIteratorHelper(_this38.trackerListMonth),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var _tracker2 = _step22.value;

                  if (result.logs.length > 0) {
                    console.log("copying logs back to calendar");
                    _tracker2.logs = result.logs;
                    ;
                    console.log("tracker object after copying logs", _tracker2);
                    break;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            });
          } // this Method sets attribut currentDay of a Daily Tracker object to TRUE

        }, {
          key: "showCurrentDay",
          value: function showCurrentDay() {
            var _iterator23 = _createForOfIteratorHelper(this.trackerListMonth),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var tracker = _step23.value;

                if (this.todaysDate.date() == tracker.date.getDate() && this.todaysDate.month() == tracker.date.getMonth() && this.todaysDate.year() == tracker.date.getFullYear()) {
                  tracker.currentDay = true;
                } else {
                  tracker.currentDay = false;
                }
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          } // methods to navigate and show next and previous months

        }, {
          key: "showNextMonth",
          value: function showNextMonth() {
            this.date.add(1, 'M');
            this.createMonthTrackers();
            this.checkIfMonthlySubmissionActive();
          }
        }, {
          key: "showPreviousMonth",
          value: function showPreviousMonth() {
            this.date.subtract(1, 'M');
            this.createMonthTrackers();
            this.checkIfMonthlySubmissionActive();
          } // this method identifies saturdays and sundays and sets them as holiday in calendar. this method is called through ngFor from HTML

        }, {
          key: "isWeekend",
          value: function isWeekend(tracker) {
            if (tracker.date.getDay() == 0 || tracker.date.getDay() == 6) {
              tracker.leaveType = src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_4__["LeaveType"].NONE;
              tracker.state = false;
              return true;
            } else {
              return false;
            }
          } // this method disbales all future dates for editing

        }, {
          key: "isFutureDate",
          value: function isFutureDate(tracker) {
            var trackerMomemnt = moment__WEBPACK_IMPORTED_MODULE_1__(tracker.date);
            var currentMoment = moment__WEBPACK_IMPORTED_MODULE_1__(this.todaysDate);

            if (trackerMomemnt.isSameOrBefore(currentMoment)) {
              // if tracker date is earlier than current date
              return false; // do not disable
            } else {
              return true;
            } // disable

          }
        }, {
          key: "getTotalLoggedHours",
          value: function getTotalLoggedHours(tracker) {
            var sum = 0;

            var _iterator24 = _createForOfIteratorHelper(tracker.logs),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var log = _step24.value;
                sum += log.logHours;
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return sum;
          }
        }, {
          key: "getTotalLoggedHoursModel",
          value: function getTotalLoggedHoursModel(tracker) {
            var sum = 0;

            var _iterator25 = _createForOfIteratorHelper(tracker.logs),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var log = _step25.value;
                sum += log.logHours;
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            return sum;
          }
        }, {
          key: "isFullDayLeave",
          value: function isFullDayLeave(tracker) {
            if (tracker.leaveType == src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_4__["LeaveType"].FULL_DAY) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isHalfdayLeave",
          value: function isHalfdayLeave(tracker) {
            if (tracker.leaveType == src_app_model_daily_tracker__WEBPACK_IMPORTED_MODULE_4__["LeaveType"].HALF_DAY) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "monthlySubmission",
          value: function monthlySubmission() {
            if (this.monthlySubmissionActive) //if monthlySubmission is ACTIVE i.e its true
              {
                //pass both dates as moment objects,check is all logs are present and filled for 8 hours
                this.checkTrackersLogStatus(this.mtFromDate, this.mtToDate); //returns boolean
                // console.log("boolean alltrackerscompleted:",this.allTrackersComplete);
                // if (this.allTrackersComplete)
                //  { //create a new monthly tracker ( either to save or to submit again)
                //   let newMonthlyId = localStorage.getItem('tgt_email') + "-" + this.allMonths[this.firstDayOfMonth.getMonth()] + "-" + this.firstDayOfMonth.getFullYear();
                //   var monthlyTracker = new MonthlyTracker(newMonthlyId, localStorage.getItem("tgt_email"), "SUBMITTED", this.firstDayOfMonth.getFullYear(), this.allMonths[this.firstDayOfMonth.getMonth()], this.mtFromDate.toDate().getTime(), this.mtToDate.toDate().getTime(), "");
                //   //if monthly tracker is already made, it was reverted, and now we are submitting it again
                //   if (this.monthlyTrackerMadeAlready) {
                //       console.log("ReSUBMITTING monthly tracker",monthlyTracker);
                //       this.monthlyService.SubmitMonthlyTracker(monthlyTracker).subscribe(res=>console.log("Result after Resubmitting MT:",res));
                //       this.monthlySubmissionActive=false;
                //   }
                //   else {
                //  //save fresh MT
                //  console.log("SAVING fresh monthly tracker",monthlyTracker);
                //  this.monthlyService.saveMonthlyTracker(monthlyTracker);
                //  this.monthlySubmissionActive=false;
                //   }
                // }
              }
          } //check whether 8 hour log for each day has been submitted for the month( 21st to 20th)
          //checks first if all daily trackers exist, then checks if 8 hours are logged or full day leave is logged

        }, {
          key: "checkTrackersLogStatus",
          value: function checkTrackersLogStatus(fromDate, toDate) {
            var _this39 = this;

            //get all trackers that exist between fromDate and toDate from backend
            var missingTrackerArray = [];
            var incompleteTrackerArray = [];
            this.apiService.getTrackersForPeriod(localStorage.getItem('tgt_email'), fromDate.toDate().getTime(), toDate.toDate().getTime()).subscribe(function (result) {
              console.log("trackers in given period are:", result);
              var iterator = moment__WEBPACK_IMPORTED_MODULE_1__(fromDate);

              while (iterator.isSameOrBefore(toDate)) {
                if (iterator.toDate().getDay() > 0 && iterator.toDate().getDay() < 6) //if its a weekday
                  {
                    if (!_this39.logExists(iterator.toDate().getTime(), result)) //if the date does not exists in the trackerlist
                      {
                        missingTrackerArray.push(iterator.toDate()); //push the Date into list of missing tracker dates array
                      } else //date exists in the trackerlist, then check if 8 hours have been logged(leave+log should=8)
                      {
                        if (!_this39.logHoursEquals8(iterator.toDate().getTime(), result)) {
                          incompleteTrackerArray.push(iterator.toDate());
                        }
                      }
                  }

                iterator.add(1, 'd'); //increment iterator by 1 day
              }

              var dialogConf = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
              dialogConf.data = {
                missing: missingTrackerArray,
                incomplete: incompleteTrackerArray
              }; //

              _this39.dialog.open(_missing_trackers_missing_trackers_component__WEBPACK_IMPORTED_MODULE_5__["MissingTrackersComponent"], dialogConf); //if all trackers filled and logs complete


              if (incompleteTrackerArray.length == 0 && missingTrackerArray.length == 0) {
                console.log("inside if condition to return TRUE. inctrkarray:", incompleteTrackerArray, "length:", incompleteTrackerArray.length, "missingtrkarr:", missingTrackerArray, "length:", missingTrackerArray.length);
                _this39.allTrackersComplete = true;
              } else {
                _this39.allTrackersComplete = false;
              } //


              console.log("boolean alltrackerscompleted:", _this39.allTrackersComplete);

              if (_this39.allTrackersComplete) {
                //create a new monthly tracker ( either to save or to submit again)
                var newMonthlyId = localStorage.getItem('tgt_email') + "-" + _this39.allMonths[_this39.firstDayOfMonth.getMonth()] + "-" + _this39.firstDayOfMonth.getFullYear();

                var monthlyTracker = new src_app_model_monthly_tracker__WEBPACK_IMPORTED_MODULE_6__["MonthlyTracker"](newMonthlyId, localStorage.getItem("tgt_email"), "SUBMITTED", _this39.firstDayOfMonth.getFullYear(), _this39.allMonths[_this39.firstDayOfMonth.getMonth()], _this39.mtFromDate.toDate().getTime(), _this39.mtToDate.toDate().getTime(), ""); //if monthly tracker is already made, it was reverted, and now we are submitting it again

                if (_this39.monthlyTrackerMadeAlready) {
                  console.log("ReSUBMITTING monthly tracker", monthlyTracker);

                  _this39.monthlyService.SubmitMonthlyTracker(monthlyTracker).subscribe(function (res) {
                    return console.log("Result after Resubmitting MT:", res);
                  });

                  _this39.monthlySubmissionActive = false;
                } else {
                  //save fresh MT
                  console.log("SAVING fresh monthly tracker", monthlyTracker);

                  _this39.monthlyService.saveMonthlyTracker(monthlyTracker);

                  _this39.monthlySubmissionActive = false;
                }
              }
            });
          } //method returns true if dailyTracker corresponding the date parameter exists in tracker array passed as parameter

        }, {
          key: "logExists",
          value: function logExists(date, trackerList) {
            var _iterator26 = _createForOfIteratorHelper(trackerList),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var tracker = _step26.value;

                if (tracker.date == date) {
                  return true;
                }
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            return false; //if date not found in trackerlist
          } //method takes a date and searches for dailyTracker in array for that date and return true if leave+log=8, returns false if leave+loghrs<8

        }, {
          key: "logHoursEquals8",
          value: function logHoursEquals8(date, trackerList) {
            var _iterator27 = _createForOfIteratorHelper(trackerList),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var tracker = _step27.value;

                if (tracker.date == date) {
                  if (tracker.leaveHours + this.getTotalLoggedHoursModel(tracker) == 8) {
                    console.log("Leave+log==8, actual sum:", tracker.leaveHours, this.getTotalLoggedHoursModel(tracker));
                    return true;
                  } else {
                    console.log("Leave+log!=8, actual sum:", tracker.leaveHours, this.getTotalLoggedHoursModel(tracker));
                    return false;
                  }
                }
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          } //this methods sets variable monthlySubmissionActive as TRUE or FALSE on checking 3 conitions, date of submission, if Monthly tracker exists, if it exists, its status id REVERTED or anything else

        }, {
          key: "checkIfMonthlySubmissionActive",
          value: function checkIfMonthlySubmissionActive() {
            var _this40 = this;

            //assuming monthly tracker is not made by default. condition check will make it true if its already existing in backend.
            this.monthlyTrackerMadeAlready = false; //reset to false every time a check is done

            this.monthlySubmissionActive = false; //make a date string get month & year from firstDayOfMonth(date) and date is 1day before monthly submission gets active +1 is required with getMonth() as it returns months from 0-11 jan-dec

            var toDateStr = this.firstDayOfMonth.getMonth() + 1 + "-" + (this.mSD - 1) + "-" + this.firstDayOfMonth.getFullYear();
            this.mtToDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(toDateStr));
            this.mtFromDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.mtToDate);
            this.mtFromDate.subtract(1, 'M');
            this.mtFromDate.add(1, 'd');
            console.log("from:", this.mtFromDate.toDate(), "to:", this.mtToDate.toDate()); //make a date string get month & year from firstDayOfMonth(date) and date is when monthly submission gets active , +1 is required with getMonth() as it returns months from 0-11 jan-dec

            var mSubDateStr = this.firstDayOfMonth.getMonth() + 1 + "-" + this.mSD + "-" + this.firstDayOfMonth.getFullYear();
            var subDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(mSubDateStr));

            if (this.todaysDate.isSameOrAfter(subDate)) //if todays date is equal or has passed monthly submission date
              {
                var searchId = localStorage.getItem('tgt_email') + "-" + this.allMonths[this.firstDayOfMonth.getMonth()] + "-" + this.firstDayOfMonth.getFullYear(); // create a monthly trackerId to search for in DB
                //check if monthly tracker already exists by searchin for ID of MT in DB

                this.monthlyService.findMonthlyTrackerById(searchId).subscribe(function (result) {
                  console.log("result for monthly trackerId", searchId, " search:", result.data);

                  if (result.monthlyTrackerId == searchId) //monthly tracker is found, then check its status
                    {
                      _this40.monthlyTrackerMadeAlready = true;

                      if (result.status == "REVERTED") {
                        console.log("this month tracker found with status REVERTED");
                        _this40.monthlySubmissionActive = true; //if reverted, activate button for submission again
                      } else {
                        console.log("this month tracker found with status not as REVERTED");
                        _this40.monthlySubmissionActive = false; //if any other status , deactivate button for submission
                      }
                    } // }

                }, function (error) {
                  console.log("this month Monthly tracker not found(submission date has passed) error msg is:", error);
                  _this40.monthlyTrackerMadeAlready = false;
                  _this40.monthlySubmissionActive = true; // submission date has passed and monthly tracker is not created yet
                });
              }
          }
        }]);

        return CalendarComponent;
      }();

      CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
        return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_8__["DailyTrackerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_9__["MonthlyTrackerService"]));
      };

      CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalendarComponent,
        selectors: [["app-calendar"]],
        decls: 69,
        vars: 13,
        consts: [[1, "main-container"], [1, "container1"], [1, "nav"], [1, "flexbox-row"], ["id", "logo", "src", "../../../assets/submit.png", "matTooltip", "MONTHLY SUBMISSION", 3, "ngClass", "hidden", "click"], ["id", "submitMonthReport", "data-text", "Submit Month's Report", 3, "hidden"], [1, "font-40px", 3, "hidden"], [1, "font-30px", "width-30per"], [1, "font-50px", "clickable", 3, "click"], [1, "margin-top"], ["id", "datepicker"], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "color-green", 3, "click"], ["id", "weekdays", "cols", "7", "rowHeight", "2.5:1"], [1, "font-30px", "color-header-calendar"], [3, "formGroup"], ["cols", "7", "rowHeight", "2.5:1", "formArrayName", "calendarDays"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "color-index"], ["id", "red"], ["id", "green"], ["id", "yellow"], [1, "color-index1"], ["id", "purple"], ["id", "no-fill"], [3, "ngClass"], ["matBadgeOverlap", "false", "matTooltip", "Hrs Logged", "matBadgeColor", "warn", 3, "matBadge", "hidden"], [1, "openDialogue", 3, "hidden", "click"], [1, "flexbox"], [2, "font-size", "30px"]],
        template: function CalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_img_click_4_listener() {
              return ctx.monthlySubmission();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit Month's Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CALENDAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_mat_icon_click_11_listener() {
              return ctx.showPreviousMonth();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_mat_icon_click_13_listener() {
              return ctx.showNextMonth();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalendarComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.desiredDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MM/DD/YYYY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_mat_icon_click_27_listener() {
              return ctx.loadMonth();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-grid-list", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sun");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Wed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Thu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fri");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "form", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-grid-list", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CalendarComponent_mat_grid_tile_46_Template, 7, 14, "mat-grid-tile", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " No Logs Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 8 hr Log Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Half Day with incomplete log");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Full Day Leave");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Logged Hours < 8 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.monthlySubmissionActive))("hidden", !ctx.monthlySubmissionActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.monthlySubmissionActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.monthlySubmissionActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.date.format("MMMM"), " ", ctx.date.format("YYYY"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.desiredDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dailyTrackerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trackerListMonth);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridTile"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadge"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #f5f7fb;\r\n\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  background: whitesmoke;\r\n  border-radius: 10px;\r\n\r\n  transition: transform .1s;\r\n  border: 1px solid white;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n  background-color: #f5f7fb;\r\n\r\n}\r\n\r\n.container1[_ngcontent-%COMP%] {\r\n\r\n  width: 97%;\r\n  margin: 10px;\r\n  background-color: #f5f7fb;\r\n}\r\n\r\n.flexbox[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  padding: 3px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.flexbox-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.openDialogue[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: -30px;\r\n  margin-right: 5px;\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.currentDay[_ngcontent-%COMP%] {\r\n\r\n  color: blueviolet;\r\n  font-weight: bold;\r\n}\r\n\r\n.font-30px[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.font-50px[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n}\r\n\r\n.font-40px[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\r\n\r\n.font-10px[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.holiday[_ngcontent-%COMP%] {\r\n  background-color: rgb(160, 155, 155);\r\n}\r\n\r\n.color-green[_ngcontent-%COMP%] {\r\n  color: green;\r\n  cursor: pointer;\r\n}\r\n\r\n.disable[_ngcontent-%COMP%] {\r\n  background-color: rgb(215, 210, 210);\r\n}\r\n\r\n.color-header-calendar[_ngcontent-%COMP%] {\r\n  background-color: whitesmoke;\r\n  text-shadow: 2px 2px lightblue;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.margin-bottom[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.width-30per[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.margin-top[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.bgRed[_ngcontent-%COMP%] {\r\n  \r\n  border-top: 4px solid rgb(233, 97, 97);\r\n}\r\n\r\n.bgGreen[_ngcontent-%COMP%] {\r\n  border-top: 4px solid rgb(88, 144, 48);\r\n}\r\n\r\n.bgPurple[_ngcontent-%COMP%] {\r\n  border-top: 4px solid purple;\r\n}\r\n\r\n.bgYellow[_ngcontent-%COMP%] {\r\n  border-top: 4px solid rgb(242, 255, 4);\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  left: 750px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 200px;\r\n  height: 50px;\r\n  font-size: large;\r\n  border-radius: 30px;\r\n  font-family: 'Poppins';\r\n  color: white;\r\n  background: #2C3855;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 10px rgb(255, 98, 0), 0 0 15px rgb(255, 170, 0);\r\n  transform: scale(1.1)\r\n}\r\n\r\n#red[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: red;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n\r\n#green[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: green;\r\n  border: 1px solid #000000;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n\r\n#purple[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: purple;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n\r\n#no-fill[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: transparent;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n\r\n#yellow[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: yellow;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n\r\n.color-index[_ngcontent-%COMP%] {\r\n\r\n  width:250px;\r\n  height:-webkit-fit-content;\r\n  height:-moz-fit-content;\r\n  height:fit-content;\r\n  position: fixed;\r\n  bottom: 35px;\r\n  left: 700px;\r\n\r\n}\r\n\r\n.color-index1[_ngcontent-%COMP%] {\r\n\r\n  width:250px;\r\n  height:-webkit-fit-content;\r\n  height:-moz-fit-content;\r\n  height:fit-content;\r\n  position: fixed;\r\n  bottom: 35px;\r\n  left: 950px;\r\n\r\n}\r\n\r\n.month-submission-open[_ngcontent-%COMP%]{\r\n  -webkit-animation:pulse 2s infinite;\r\n          animation:pulse 2s infinite;\r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n@-webkit-keyframes pulse{\r\n  0%{\r\n    transform:scale(0.9);\r\n    \r\n  }\r\n  70%{\r\n    transform:scale(1.1);\r\n   \r\n\r\n  }\r\n  100%{\r\n    transform:scale(0.9);\r\n   \r\n  }\r\n}\r\n\r\n@keyframes pulse{\r\n  0%{\r\n    transform:scale(0.9);\r\n    \r\n  }\r\n  70%{\r\n    transform:scale(1.1);\r\n   \r\n\r\n  }\r\n  100%{\r\n    transform:scale(0.9);\r\n   \r\n  }\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  font-family:Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\nmat-grid-list#weekdays[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n}\r\n\r\n#submitMonthReport[_ngcontent-%COMP%]{\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  \r\n  background:black;\r\n  color:rgb(65, 26, 12);\r\n}\r\n\r\n#submitMonthReport[_ngcontent-%COMP%]::before{\r\n  content:attr(data-text);\r\n  position:absolute;\r\n  background:black;\r\n  color:orangered;\r\n  width:235px ;\r\n  white-space:nowrap;\r\n  border-right: 3px solid rgb(255, 42, 0);\r\n  -webkit-animation: traverse 6s linear infinite;\r\n          animation: traverse 6s linear infinite;\r\n  filter:drop-shadow(0 0 10px orangered);\r\n  overflow: hidden;\r\n}\r\n\r\n@-webkit-keyframes traverse{\r\n  0%{\r\n    width:0;\r\n}\r\n\r\n30%,100%{\r\n    width :235px;\r\n}\r\n}\r\n\r\n@keyframes traverse{\r\n  0%{\r\n    width:0;\r\n}\r\n\r\n30%,100%{\r\n    width :235px;\r\n}\r\n}\r\n\r\n@-webkit-keyframes animate{\r\n  0%{\r\n    border-top: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  25%{\r\n    border-right: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  50%{\r\n    border-bottom: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  75%{\r\n    border-left: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  100%{\r\n    background-color: rgb(246, 144, 48);\r\n  }\r\n}\r\n\r\n@keyframes animate{\r\n  0%{\r\n    border-top: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  25%{\r\n    border-right: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  50%{\r\n    border-bottom: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  75%{\r\n    border-left: 3px solid orangered;\r\n    filter: drop-shadow(0 0  orangered);\r\n  }\r\n  100%{\r\n    background-color: rgb(246, 144, 48);\r\n  }\r\n}\r\n\r\ndiv.w-10px[_ngcontent-%COMP%]{\r\nwidth:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0Q7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVzs7QUFFYjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXOztBQUViOztBQUNBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixlQUFlOztBQUVqQjs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9COztFQUV0QjtFQUNBO0lBQ0Usb0JBQW9COzs7RUFHdEI7RUFDQTtJQUNFLG9CQUFvQjs7RUFFdEI7QUFDRjs7QUFkQTtFQUNFO0lBQ0Usb0JBQW9COztFQUV0QjtFQUNBO0lBQ0Usb0JBQW9COzs7RUFHdEI7RUFDQTtJQUNFLG9CQUFvQjs7RUFFdEI7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFO0lBQ0UsT0FBTztBQUNYOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztBQVJBO0VBQ0U7SUFDRSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7O0FBR0E7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGtDQUFrQztJQUNsQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLG1DQUFtQztFQUNyQztBQUNGOztBQXBCQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YiLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmI7XHJcblxyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi56b29tOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYjtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuXHJcbiAgd2lkdGg6IDk3JTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYjtcclxufVxyXG5cclxuLmZsZXhib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5mbGV4Ym94LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ub3BlbkRpYWxvZ3VlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3VycmVudERheSB7XHJcblxyXG4gIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9udC0zMHB4IHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5mb250LTUwcHgge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLmZvbnQtNDBweCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uZm9udC0xMHB4IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5ob2xpZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNTUsIDE1NSk7XHJcbn1cclxuXHJcbi5jb2xvci1ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxMCwgMjEwKTtcclxufVxyXG5cclxuLmNvbG9yLWhlYWRlci1jYWxlbmRhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCBsaWdodGJsdWU7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcblxyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ud2lkdGgtMzBwZXIge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLm1hcmdpbi10b3Age1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5iZ1JlZCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjAxLCAyMDEpOyAqL1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2IoMjMzLCA5NywgOTcpO1xyXG59XHJcblxyXG4uYmdHcmVlbiB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYig4OCwgMTQ0LCA0OCk7XHJcbn1cclxuXHJcbi5iZ1B1cnBsZSB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHB1cnBsZTtcclxufVxyXG5cclxuLmJnWWVsbG93IHtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiKDI0MiwgMjU1LCA0KTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBsZWZ0OiA3NTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzJDMzg1NTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigyNTUsIDk4LCAwKSwgMCAwIDE1cHggcmdiKDI1NSwgMTcwLCAwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxufVxyXG5cclxuI3JlZCB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jZ3JlZW4ge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNwdXJwbGUge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuI25vLWZpbGwge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jeWVsbG93IHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb2xvci1pbmRleCB7XHJcblxyXG4gIHdpZHRoOjI1MHB4O1xyXG4gIGhlaWdodDpmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzNXB4O1xyXG4gIGxlZnQ6IDcwMHB4O1xyXG5cclxufVxyXG4uY29sb3ItaW5kZXgxIHtcclxuXHJcbiAgd2lkdGg6MjUwcHg7XHJcbiAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDM1cHg7XHJcbiAgbGVmdDogOTUwcHg7XHJcblxyXG59XHJcbi5tb250aC1zdWJtaXNzaW9uLW9wZW57XHJcbiAgYW5pbWF0aW9uOnB1bHNlIDJzIGluZmluaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxufVxyXG5Aa2V5ZnJhbWVzIHB1bHNle1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuOSk7XHJcbiAgICBcclxuICB9XHJcbiAgNzAle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XHJcbiAgIFxyXG5cclxuICB9XHJcbiAgMTAwJXtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjkpO1xyXG4gICBcclxuICB9XHJcbn1cclxuc3BhbntcclxuICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcbm1hdC1ncmlkLWxpc3Qjd2Vla2RheXN7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4jc3VibWl0TW9udGhSZXBvcnR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIGFuaW1hdGlvbjogYW5pbWF0ZSAycyBpbmZpbml0ZTsgKi9cclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIGNvbG9yOnJnYig2NSwgMjYsIDEyKTtcclxufVxyXG4jc3VibWl0TW9udGhSZXBvcnQ6OmJlZm9yZXtcclxuICBjb250ZW50OmF0dHIoZGF0YS10ZXh0KTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIGNvbG9yOm9yYW5nZXJlZDtcclxuICB3aWR0aDoyMzVweCA7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigyNTUsIDQyLCAwKTtcclxuICBhbmltYXRpb246IHRyYXZlcnNlIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDEwcHggb3JhbmdlcmVkKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbkBrZXlmcmFtZXMgdHJhdmVyc2V7XHJcbiAgMCV7XHJcbiAgICB3aWR0aDowO1xyXG59XHJcblxyXG4zMCUsMTAwJXtcclxuICAgIHdpZHRoIDoyMzVweDtcclxufVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRle1xyXG4gIDAle1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIG9yYW5nZXJlZDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwICBvcmFuZ2VyZWQpO1xyXG4gIH1cclxuICAyNSV7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAgb3JhbmdlcmVkKTtcclxuICB9XHJcbiAgNTAle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIG9yYW5nZXJlZDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwICBvcmFuZ2VyZWQpO1xyXG4gIH1cclxuICA3NSV7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZXJlZDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwICBvcmFuZ2VyZWQpO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTQ0LCA0OCk7XHJcbiAgfVxyXG59XHJcbmRpdi53LTEwcHh7XHJcbndpZHRoOjIwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_8__["DailyTrackerService"]
          }, {
            type: src_app_service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_9__["MonthlyTrackerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KjdE":
    /*!**************************************************!*\
      !*** ./src/app/service/daily-tracker.service.ts ***!
      \**************************************************/

    /*! exports provided: DailyTrackerService */

    /***/
    function KjdE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DailyTrackerService", function () {
        return DailyTrackerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var DailyTrackerService = /*#__PURE__*/function () {
        //  baseUrl='http://localhost:8080/time-tracker-service/api/v1/';
        //  baseUrl='http://localhost:8082/api/v1/';
        function DailyTrackerService(http) {
          _classCallCheck(this, DailyTrackerService);

          this.http = http;
          this.baseUrl = 'https://nouveautracker.stackroute.io/time-tracker-service/api/v1/';
        }

        _createClass(DailyTrackerService, [{
          key: "saveTracker",
          value: function saveTracker(tracker) {
            console.log('Sending tracker to backend:', tracker);
            return this.http.post(this.baseUrl + "dailytracker", tracker);
          }
        }, {
          key: "getDailyTrackersForPeriod",
          value: function getDailyTrackersForPeriod(start, end) {
            return this.http.get(this.baseUrl + "dailytrackers/daterange?from=" + start + "&to=" + end);
          }
        }, {
          key: "getTrackersForPeriod",
          value: function getTrackersForPeriod(email, fromDate, toDate) {
            console.log('inside get trackers service:', 'email:', email, 'fromDate:', fromDate, 'toDate:', toDate);
            var paramObject = {
              employeeEmail: email,
              fromDate: fromDate,
              toDate: toDate
            };
            return this.http.get(this.baseUrl + "employee/dailytrackers/period?employeeEmail=" + email + "&fromDate=" + fromDate + "&toDate=" + toDate);
          }
        }, {
          key: "updateTracker",
          value: function updateTracker(tracker) {
            return this.http.put(this.baseUrl + "dailytracker", tracker);
          } //For Reports

        }, {
          key: "getAllPendingDailyTrackers",
          value: function getAllPendingDailyTrackers() {
            return this.http.get(this.baseUrl + 'dailytrackers/pending');
          }
        }, {
          key: "getAllProgramHoursByEmployee",
          value: function getAllProgramHoursByEmployee(employeeEmail) {
            return this.http.get(this.baseUrl + 'allprograms/hours?email=' + employeeEmail);
          }
        }, {
          key: "getAllProjectHoursByEmployee",
          value: function getAllProjectHoursByEmployee(employeeEmail) {
            return this.http.get(this.baseUrl + 'allprojects/hours?email=' + employeeEmail);
          }
        }, {
          key: "getAllProjectHours",
          value: function getAllProjectHours() {
            return this.http.get(this.baseUrl + 'project/hours');
          }
        }, {
          key: "getAllProgramHours",
          value: function getAllProgramHours() {
            return this.http.get(this.baseUrl + 'program/hours');
          }
        }, {
          key: "getAllProgramsHoursForManager",
          value: function getAllProgramsHoursForManager(managerEmail) {
            return this.http.get(this.baseUrl + 'manager/allprograms/hours?email=' + managerEmail);
          }
        }, {
          key: "getAllProjectsHoursForManager",
          value: function getAllProjectsHoursForManager(managerEmail) {
            return this.http.get(this.baseUrl + 'manager/allprojects/hours?email=' + managerEmail);
          }
        }, {
          key: "getAllDailyTrackers",
          value: function getAllDailyTrackers(month, year) {
            return this.http.get(this.baseUrl + "dailytrackers/monthly?month=" + month + "&year=" + year);
          }
        }]);

        return DailyTrackerService;
      }();

      DailyTrackerService.ɵfac = function DailyTrackerService_Factory(t) {
        return new (t || DailyTrackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      DailyTrackerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DailyTrackerService,
        factory: DailyTrackerService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyTrackerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "M9il":
    /*!******************************************************!*\
      !*** ./src/app/component/leaves/leaves.component.ts ***!
      \******************************************************/

    /*! exports provided: LeavesComponent */

    /***/
    function M9il(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavesComponent", function () {
        return LeavesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function LeavesComponent_mat_grid_tile_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, date_r2, "EEEE, MMMM d,y"));
        }
      }

      function LeavesComponent_mat_grid_tile_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, date_r3, "EEEE, MMMM d,y"));
        }
      }

      var LeavesComponent = /*#__PURE__*/function () {
        function LeavesComponent(_data) {
          _classCallCheck(this, LeavesComponent);

          this._data = _data;
        }

        _createClass(LeavesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.halfDayList = this._data.halfDayList;
            this.fullDayList = this._data.fullDayList;
            this.fullDayList.sort(function (a, b) {
              return a - b;
            });
            this.halfDayList.sort(function (a, b) {
              return a - b;
            });
            console.log("leave arrays in new comp,", this.halfDayList, this.fullDayList);
          }
        }]);

        return LeavesComponent;
      }();

      LeavesComponent.ɵfac = function LeavesComponent_Factory(t) {
        return new (t || LeavesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      LeavesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LeavesComponent,
        selectors: [["app-leaves"]],
        decls: 9,
        vars: 2,
        consts: [[1, "container"], ["cols", "12", "rowHeight", "1:1"], ["class", "fullDayLeave", 4, "ngFor", "ngForOf"], ["class", "halfDayLeave", 4, "ngFor", "ngForOf"], [1, "fullDayLeave"], [1, "halfDayLeave"]],
        template: function LeavesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Day Leaves ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeavesComponent_mat_grid_tile_4_Template, 3, 4, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Half Day Leaves");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LeavesComponent_mat_grid_tile_8_Template, 3, 4, "mat-grid-tile", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fullDayList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.halfDayList);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: [".container[_ngcontent-%COMP%]{\r\n    width:1200px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    overflow-y: scroll;\r\n\r\n}\r\nmat-grid-tile[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    filter:grayscale(0 0 10px);\r\n    \r\n}\r\n.fullDayLeave[_ngcontent-%COMP%]{\r\n    background-color: pink;\r\n    opacity: 0.5;\r\n}\r\n.halfDayLeave[_ngcontent-%COMP%]{\r\n    background-color: gold;\r\n    opacity: 0.5;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjs7QUFFOUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkVBQTZFO0lBQzdFLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsZWF2ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxufVxyXG5tYXQtZ3JpZC10aWxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZpbHRlcjpncmF5c2NhbGUoMCAwIDEwcHgpO1xyXG4gICAgXHJcbn1cclxuLmZ1bGxEYXlMZWF2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmhhbGZEYXlMZWF2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeavesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-leaves',
            templateUrl: './leaves.component.html',
            styleUrls: ['./leaves.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QI7u":
    /*!**********************************************!*\
      !*** ./src/app/model/daily-tracker-model.ts ***!
      \**********************************************/

    /*! exports provided: DailyTrackerModel */

    /***/
    function QI7u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DailyTrackerModel", function () {
        return DailyTrackerModel;
      });
      /* harmony import */


      var _daily_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./daily-tracker */
      "6ORI");

      var DailyTrackerModel = function DailyTrackerModel(id, date, email, logs, leaveType, remarks) {
        _classCallCheck(this, DailyTrackerModel);

        this.employeeName = 'not available in frontend';
        this.dailyTrackerID = id;
        this.date = date;
        this.employeeEmail = email;
        this.logs = logs;
        this.leaveType = leaveType;

        switch (this.leaveType) {
          case _daily_tracker__WEBPACK_IMPORTED_MODULE_0__["LeaveType"].NONE:
            this.leaveHours = 0;
            break;

          case _daily_tracker__WEBPACK_IMPORTED_MODULE_0__["LeaveType"].HALF_DAY:
            this.leaveHours = 4;
            break;

          case _daily_tracker__WEBPACK_IMPORTED_MODULE_0__["LeaveType"].FULL_DAY:
            this.leaveHours = 8;
            break;

          default:
            this.leaveHours = 100;
          // faulty input value
        }

        this.remarks = remarks;
      };
      /***/

    },

    /***/
    "Qv93":
    /*!********************************************************************************!*\
      !*** ./src/app/component/add-program-members/add-program-members.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AddProgramMembersComponent */

    /***/
    function Qv93(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProgramMembersComponent", function () {
        return AddProgramMembersComponent;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "Ht+U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function AddProgramMembersComponent_mat_chip_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function AddProgramMembersComponent_mat_chip_8_Template_mat_chip_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var member_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.remove(member_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r4, " ");
        }
      }

      function AddProgramMembersComponent_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", member_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r7, " ");
        }
      }

      var AddProgramMembersComponent = /*#__PURE__*/function () {
        function AddProgramMembersComponent(programName, programService, snackBar, employeeService) {
          var _this41 = this;

          _classCallCheck(this, AddProgramMembersComponent);

          this.programName = programName;
          this.programService = programService;
          this.snackBar = snackBar;
          this.employeeService = employeeService;
          this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
          this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
          this.members = new Set();
          this.allMembers = [];
          this.filteredMembers = this.memberCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (member) {
            return member ? _this41._filter(member) : _this41.allMembers.slice();
          }));
        }

        _createClass(AddProgramMembersComponent, [{
          key: "add",
          value: function add(event) {
            var value = (event.value || '').trim();
            var index = this.allMembers.indexOf(value);

            if (index >= 0) {
              this.members.add(value);
            }

            event.input.value = '';
            this.memberCtrl.setValue(null);
          }
        }, {
          key: "remove",
          value: function remove(member) {
            this.members["delete"](member);
          }
        }, {
          key: "selected",
          value: function selected(event) {
            this.members.add(event.option.viewValue);
            this.memberCtrl.setValue(null);
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.allMembers.filter(function (member) {
              return member.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "addMembersToProgram",
          value: function addMembersToProgram() {
            var _this42 = this;

            console.log(this.members);
            var membersArray = Array.from(this.members);
            console.log(membersArray);
            this.programService.addMembersToProgram(membersArray, this.programName).subscribe(function (response) {
              console.log(response);

              _this42.snackBar.open('Members Added Successfully.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-primary']
              });
            }, function (error) {
              console.log(error);

              _this42.snackBar.open('Some problem occured.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-warn']
              });
            });
          }
        }, {
          key: "getAllEmployees",
          value: function getAllEmployees(managerEmail) {
            var _this43 = this;

            this.employeeService.getEmployeesWorkingForAParticularManager(managerEmail).subscribe(function (response) {
              console.log(response);
              response.forEach(function (employee) {
                _this43.allMembers.push(employee.emailId);
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var email = window.localStorage.getItem('tgt_email');
            this.getAllEmployees(email);
          }
        }]);

        return AddProgramMembersComponent;
      }();

      AddProgramMembersComponent.ɵfac = function AddProgramMembersComponent_Factory(t) {
        return new (t || AddProgramMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]));
      };

      AddProgramMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddProgramMembersComponent,
        selectors: [["app-add-program-members"]],
        decls: 19,
        vars: 10,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["appearance", "outline", 1, "example-chip-list"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New Member...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "color", "primary", "mat-flat-button", "", 3, "mat-dialog-close", "click"], [3, "removed"], ["matChipRemove", ""], [3, "value"]],
        template: function AddProgramMembersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip-list", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddProgramMembersComponent_mat_chip_8_Template, 4, 1, "mat-chip", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function AddProgramMembersComponent_Template_input_matChipInputTokenEnd_9_listener($event) {
              return ctx.add($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-autocomplete", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function AddProgramMembersComponent_Template_mat_autocomplete_optionSelected_10_listener($event) {
              return ctx.selected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddProgramMembersComponent_mat_option_12_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProgramMembersComponent_Template_button_click_17_listener() {
              return ctx.addMembersToProgram();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Add Members for ", ctx.programName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.members);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.memberCtrl)("matAutocomplete", _r2)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, ctx.filteredMembers));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [".example-chip-list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9ncmFtLW1lbWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhZGQtcHJvZ3JhbS1tZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddProgramMembersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-program-members',
            templateUrl: './add-program-members.component.html',
            styleUrls: ['./add-program-members.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'NouveauTracker';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Tlw6":
    /*!**************************************************************************************!*\
      !*** ./src/app/component/consolidated-analytics/consolidated-analytics.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ConsolidatedAnalyticsComponent */

    /***/
    function Tlw6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsolidatedAnalyticsComponent", function () {
        return ConsolidatedAnalyticsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");

      var ConsolidatedAnalyticsComponent = /*#__PURE__*/function () {
        function ConsolidatedAnalyticsComponent(_data) {
          _classCallCheck(this, ConsolidatedAnalyticsComponent);

          this._data = _data;
          this.pieChartHeader = "dummyPieChart";
          this.barChartHeader = "dummyBarChart";
          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
          };
          this.pieChartLabels = ["nitin", "akhil", "manan", "yogesh"];
          this.pieChartData = [{
            data: [10, 20, 30, 40]
          }];
          this.pieChartLegend = true;
          this.pieChartType = "pie";
          this.barChartLabels = ["nitin", "akhil", "manan", "yogesh"];
          this.barChartLegend = true;
          this.barChartData = [{
            data: [10, 20, 30, 40],
            label: "maths"
          }, {
            data: [40, 20, 100, 50],
            label: "science"
          }];
          this.barChartType = "bar";
        }

        _createClass(ConsolidatedAnalyticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("bar graph data recieved", this._data);
            this.barChartData = this._data.barChartData;
            this.barChartLabels = this._data.barChartLabels;
            this.pieChartLabels = this._data.pieChartLabels;
            this.pieChartData = this._data.pieChartData;
            this.barChartHeader = this._data.barChartHeader;
            this.pieChartHeader = this._data.pieChartHeader;
          }
        }]);

        return ConsolidatedAnalyticsComponent;
      }();

      ConsolidatedAnalyticsComponent.ɵfac = function ConsolidatedAnalyticsComponent_Factory(t) {
        return new (t || ConsolidatedAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ConsolidatedAnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsolidatedAnalyticsComponent,
        selectors: [["app-consolidated-analytics"]],
        decls: 8,
        vars: 11,
        consts: [["id", "barchart"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], ["id", "piechart"], ["baseChart", "", 3, "datasets", "labels", "legend", "chartType"]],
        template: function ConsolidatedAnalyticsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.barChartHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pieChartHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.pieChartData)("labels", ctx.pieChartLabels)("legend", ctx.pieChartLegend)("chartType", ctx.pieChartType);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
        styles: ["#barchart[_ngcontent-%COMP%]{\r\n    width:500px;\r\n    \r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGlkYXRlZC1hbmFseXRpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjb25zb2xpZGF0ZWQtYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFyY2hhcnR7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIFxyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsolidatedAnalyticsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-consolidated-analytics',
            templateUrl: './consolidated-analytics.component.html',
            styleUrls: ['./consolidated-analytics.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "V7Cw":
    /*!****************************************************************************!*\
      !*** ./src/app/component/view-project-card/view-project-card.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ViewProjectCardComponent */

    /***/
    function V7Cw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewProjectCardComponent", function () {
        return ViewProjectCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");

      function ViewProjectCardComponent_h1_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Members to show.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewProjectCardComponent_mat_chip_list_27_mat_chip_2_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      }

      function ViewProjectCardComponent_mat_chip_list_27_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ViewProjectCardComponent_mat_chip_list_27_mat_chip_2_Template_mat_chip_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var member_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.remove(ctx_r6.projectDetails == null ? null : ctx_r6.projectDetails.projectName, member_r4.memberEmailId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewProjectCardComponent_mat_chip_list_27_mat_chip_2_mat_icon_2_Template, 2, 1, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r4.memberEmailId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.role === "MANAGER");
        }
      }

      function ViewProjectCardComponent_mat_chip_list_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewProjectCardComponent_mat_chip_list_27_mat_chip_2_Template, 3, 2, "mat-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.projectDetails == null ? null : ctx_r1.projectDetails.membersList);
        }
      }

      var ViewProjectCardComponent = /*#__PURE__*/function () {
        function ViewProjectCardComponent(data, programService, snackBar) {
          _classCallCheck(this, ViewProjectCardComponent);

          this.data = data;
          this.programService = programService;
          this.snackBar = snackBar;
        }

        _createClass(ViewProjectCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.projectDetails = this.data;
            this.role = window.localStorage.getItem('role');
          }
        }, {
          key: "remove",
          value: function remove(projectName, memberEmail) {
            var _this44 = this;

            this.programService.removeMembersFromProject(projectName, memberEmail).subscribe(function (response) {
              console.log(response);

              _this44.snackBar.open('Member Removed Successfully.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-primary']
              });
            }, function (error) {
              console.log(error);

              _this44.snackBar.open('Some problem occured.', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'mat-warn']
              });
            });
          }
        }]);

        return ViewProjectCardComponent;
      }();

      ViewProjectCardComponent.ɵfac = function ViewProjectCardComponent_Factory(t) {
        return new (t || ViewProjectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      ViewProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewProjectCardComponent,
        selectors: [["app-view-project-card"]],
        decls: 28,
        vars: 13,
        consts: [["projectDetails", ""], ["mat-dialog-title", "", 1, "flex-container"], ["mat-dialog-title", ""], [1, "example-spacer"], ["matTooltip", "Close", 3, "mat-dialog-close"], [1, "mat-typography"], ["fxLayout", "row", "fxLayoutGap", "2%", "fxLayout.xs", "column"], ["fxFlex", "50%", "matTooltip", "Project Duration"], ["fxFlex", "50%", "matTooltip", "Manager's Email Id"], ["fxLayout", "column"], ["appearance", "outline", 1, "example-chip-list"], [4, "ngIf"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], [3, "removed"], ["matTooltip", "Remove member", "matChipRemove", "", 3, "mat-dialog-close", 4, "ngIf"], ["matTooltip", "Remove member", "matChipRemove", "", 3, "mat-dialog-close"]],
        template: function ViewProjectCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "calendar_today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewProjectCardComponent_h1_26_Template, 2, 0, "h1", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewProjectCardComponent_mat_chip_list_27_Template, 3, 1, "mat-chip-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.projectName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, ctx.projectDetails == null ? null : ctx.projectDetails.startDate, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, ctx.projectDetails == null ? null : ctx.projectDetails.endDate, "dd/MM/yyyy"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectDetails == null ? null : ctx.projectDetails.managerEmailId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.membersList) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.membersList.length) > 0);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipRemove"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    color: #5b6783;\r\n  }\r\n  \r\n  mat-icon[_ngcontent-%COMP%] {\r\n    color: #5b6783;\r\n  }\r\n  \r\n  .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n  \r\n  .example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcHJvamVjdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUY7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InZpZXctcHJvamVjdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1YjY3ODM7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAjNWI2NzgzO1xyXG4gIH1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProjectCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-project-card',
            templateUrl: './view-project-card.component.html',
            styleUrls: ['./view-project-card.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Vh5l":
    /*!******************************!*\
      !*** ./src/app/model/log.ts ***!
      \******************************/

    /*! exports provided: LogType, Log */

    /***/
    function Vh5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogType", function () {
        return LogType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Log", function () {
        return Log;
      });

      var LogType;

      (function (LogType) {
        LogType["PROGRAM"] = "PROGRAM";
        LogType["PROJECT"] = "PROJECT";
        LogType["SELF_LEARNING"] = "SELF_LEARNING";
      })(LogType || (LogType = {}));

      var Log = function Log(logType, logHours, taskName, startDate, selfStudyDetails) {
        _classCallCheck(this, Log);

        this.logType = logType;
        this.logHours = logHours;
        this.taskName = taskName;
        this.startDate = startDate;
        this.selfStudyDetails = selfStudyDetails;
      };
      /***/

    },

    /***/
    "WejM":
    /*!****************************************************************************!*\
      !*** ./src/app/component/charts-folder/bar-chart2/bar-chart2.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BarChart2Component */

    /***/
    function WejM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChart2Component", function () {
        return BarChart2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");
      /* harmony import */


      var src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/daily-tracker.service */
      "KjdE");

      var BarChart2Component = /*#__PURE__*/function () {
        function BarChart2Component(projectService, dailyTrackerService) {
          _classCallCheck(this, BarChart2Component);

          this.projectService = projectService;
          this.dailyTrackerService = dailyTrackerService;
          this.projectsArray = [];
          this.projectChartData = [];
        }

        _createClass(BarChart2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = window.localStorage.getItem('role');
            this.loggedEmail = window.localStorage.getItem('tgt_email');

            switch (this.role) {
              case 'OPERATIONS':
                {
                  this.getAllprojectHours();
                  break;
                }

              case 'MANAGER':
                {
                  this.getAllProjectsHoursForManager();
                  break;
                }

              case 'EMPLOYEE':
                {
                  this.getAllProjectHoursByEmployee();
                  break;
                }
            }
          }
        }, {
          key: "myChart",
          value: function myChart() {
            var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__('myChart', {
              type: 'bar',
              data: {
                labels: this.projectChartLabel,
                datasets: [{
                  label: 'Number of employees',
                  data: this.projectChartData,
                  backgroundColor: 'lightpink',
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 1,
                  hoverBorderColor: '#000'
                }, {
                  label: 'Total working hours',
                  // data: this.projectChartData,
                  data: this.projectChartDataHours,
                  backgroundColor: 'cornflowerblue',
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 1,
                  hoverBorderColor: '#000'
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                },
                // scaleShowVerticalLines: false,
                responsive: true,
                title: {
                  display: true,
                  text: 'External projects (active)',
                  padding: 20,
                  fontSize: 22
                },
                legend: {
                  position: 'top',
                  labels: {
                    fontColor: '#777',
                    fontSize: 13
                  }
                },
                layout: {
                  padding: {
                    left: 50
                  }
                },
                tooltips: {
                  displayColors: false
                }
              }
            });
          }
        }, {
          key: "getAllActiveprojects",
          value: function getAllActiveprojects() {
            var _this45 = this;

            this.projectService.getAllActiveProjects('ACTIVE').subscribe(function (response) {
              console.log(response);
              _this45.projectsArray = response;

              _this45.projectChartLabel.forEach(function (labelName) {
                _this45.projectsArray.forEach(function (project) {
                  if (labelName === project.projectName) {
                    _this45.projectChartData.push(project.membersList.length);
                  }
                });
              });

              _this45.myChart();
            }, function (error) {
              console.log(error);
            });
          } ///////////////////////////////////////////

        }, {
          key: "getAllprojectHours",
          value: function getAllprojectHours() {
            var _this46 = this;

            this.dailyTrackerService.getAllProjectHours().subscribe(function (response) {
              console.log("All project with hours");
              console.log(response);
              _this46.projectChartLabel = Object.keys(response);
              _this46.projectChartDataHours = Object.values(response);

              _this46.getAllActiveprojects(); // this.myChart();

            }, function (error) {
              console.log(error);
            });
          } //////////////////////////////////////////////

        }, {
          key: "getAllProjectHoursByEmployee",
          value: function getAllProjectHoursByEmployee() {
            var _this47 = this;

            this.dailyTrackerService.getAllProjectHoursByEmployee(this.loggedEmail).subscribe(function (response) {
              console.log("All program with hours");
              console.log(response);
              _this47.projectChartLabel = Object.keys(response);
              _this47.projectChartDataHours = Object.values(response);

              _this47.getAllActiveprojects(); // this.myChart();

            }, function (error) {
              console.log(error);
            });
          } //////////////////////////////////////////////

        }, {
          key: "getAllProjectsHoursForManager",
          value: function getAllProjectsHoursForManager() {
            var _this48 = this;

            this.dailyTrackerService.getAllProjectsHoursForManager(this.loggedEmail).subscribe(function (response) {
              console.log("All projects with hours");
              console.log(response);
              _this48.projectChartLabel = Object.keys(response);
              _this48.projectChartDataHours = Object.values(response);

              _this48.getAllActiveprojects(); // this.myChart();

            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return BarChart2Component;
      }();

      BarChart2Component.ɵfac = function BarChart2Component_Factory(t) {
        return new (t || BarChart2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_3__["DailyTrackerService"]));
      };

      BarChart2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarChart2Component,
        selectors: [["app-bar-chart2"]],
        decls: 3,
        vars: 0,
        consts: [[2, "display", "block"], ["id", "divChart"], ["id", "myChart"]],
        template: function BarChart2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItY2hhcnQyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChart2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bar-chart2',
            templateUrl: './bar-chart2.component.html',
            styleUrls: ['./bar-chart2.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }, {
            type: src_app_service_daily_tracker_service__WEBPACK_IMPORTED_MODULE_3__["DailyTrackerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var generic_list_filter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! generic-list-filter */
      "PXhJ");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-pagination */
      "xkgV");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _component_add_program_add_program_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./component/add-program/add-program.component */
      "0guk");
      /* harmony import */


      var _component_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./component/add-project/add-project.component */
      "DUpI");
      /* harmony import */


      var _component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./component/nav-bar/nav-bar.component */
      "ldvO");
      /* harmony import */


      var _component_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./component/time-tracker/time-tracker.component */
      "Aj0r");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _component_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./component/snackbar/snackbar.component */
      "HbR6");
      /* harmony import */


      var _component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./component/calendar/calendar.component */
      "JaKv");
      /* harmony import */


      var ngx_avatar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ngx-avatar */
      "UTQ3");
      /* harmony import */


      var _component_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./component/program-card/program-card.component */
      "s+jY");
      /* harmony import */


      var _component_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./component/project-card/project-card.component */
      "Bslf");
      /* harmony import */


      var _component_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./component/register-login/register-login.component */
      "Hh87");
      /* harmony import */


      var _component_view_program_card_view_program_card_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./component/view-program-card/view-program-card.component */
      "wIXF");
      /* harmony import */


      var _component_view_program_manager_view_program_manager_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./component/view-program-manager/view-program-manager.component */
      "8GX+");
      /* harmony import */


      var _service_program_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./service/program.service */
      "0x4Q");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _component_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./component/side-nav/side-nav.component */
      "cLyX");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _component_monthly_tracker_monthly_tracker_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./component/monthly-tracker/monthly-tracker.component */
      "rNNt");
      /* harmony import */


      var _component_add_program_members_add_program_members_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./component/add-program-members/add-program-members.component */
      "Qv93");
      /* harmony import */


      var _component_add_project_members_add_project_members_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./component/add-project-members/add-project-members.component */
      "s2lT");
      /* harmony import */


      var _component_view_project_card_view_project_card_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./component/view-project-card/view-project-card.component */
      "V7Cw");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _component_monthly_tracker_details_monthly_tracker_details_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./component/monthly-tracker-details/monthly-tracker-details.component */
      "8RW6");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _component_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./component/all-charts/all-charts.component */
      "CBvF");
      /* harmony import */


      var _component_charts_folder_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./component/charts-folder/bar-chart/bar-chart.component */
      "3pHJ");
      /* harmony import */


      var _component_charts_folder_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./component/charts-folder/doughnut-chart/doughnut-chart.component */
      "qgn1");
      /* harmony import */


      var _component_charts_folder_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./component/charts-folder/pie-chart/pie-chart.component */
      "kleN");
      /* harmony import */


      var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./component/profile/profile.component */
      "rID0");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _component_monthly_tracker_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ./component/monthly-tracker/dialog/dialog.component */
      "wZ4+");
      /* harmony import */


      var _component_missing_trackers_missing_trackers_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ./component/missing-trackers/missing-trackers.component */
      "cA/2");
      /* harmony import */


      var _component_charts_folder_doughnut_chart2_doughnut_chart2_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ./component/charts-folder/doughnut-chart2/doughnut-chart2.component */
      "3qMO");
      /* harmony import */


      var _component_charts_folder_bar_chart2_bar_chart2_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ./component/charts-folder/bar-chart2/bar-chart2.component */
      "WejM");
      /* harmony import */


      var _component_consolidated_view_consolidated_view_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ./component/consolidated-view/consolidated-view.component */
      "9huM");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _component_consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ./component/consolidated-analytics/consolidated-analytics.component */
      "Tlw6");
      /* harmony import */


      var _component_leaves_leaves_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ./component/leaves/leaves.component */
      "M9il");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_service_program_service__WEBPACK_IMPORTED_MODULE_44__["ProgramService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], generic_list_filter__WEBPACK_IMPORTED_MODULE_27__["GenericListFilterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_38__["AvatarModule"], generic_list_filter__WEBPACK_IMPORTED_MODULE_27__["GenericListFilterModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_52__["MatListModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_55__["ChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _component_view_program_manager_view_program_manager_component__WEBPACK_IMPORTED_MODULE_43__["ViewProgramManagerComponent"], _component_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_41__["RegisterLoginComponent"], _component_view_program_card_view_program_card_component__WEBPACK_IMPORTED_MODULE_42__["ViewProgramCardComponent"], _component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_33__["NavBarComponent"], _component_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_41__["RegisterLoginComponent"], _component_add_program_add_program_component__WEBPACK_IMPORTED_MODULE_31__["AddProgramComponent"], _component_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_32__["AddProjectComponent"], _component_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_39__["ProgramCardComponent"], _component_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_40__["ProjectCardComponent"], _component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_37__["CalendarComponent"], _component_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_36__["SnackbarComponent"], _component_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_34__["TimeTrackerComponent"], _component_monthly_tracker_monthly_tracker_component__WEBPACK_IMPORTED_MODULE_48__["MonthlyTrackerComponent"], _component_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_46__["SideNavComponent"], _component_add_program_members_add_program_members_component__WEBPACK_IMPORTED_MODULE_49__["AddProgramMembersComponent"], _component_add_project_members_add_project_members_component__WEBPACK_IMPORTED_MODULE_50__["AddProjectMembersComponent"], _component_view_project_card_view_project_card_component__WEBPACK_IMPORTED_MODULE_51__["ViewProjectCardComponent"], _component_monthly_tracker_details_monthly_tracker_details_component__WEBPACK_IMPORTED_MODULE_53__["MonthlyTrackerDetailsComponent"], _component_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_56__["AllChartsComponent"], _component_charts_folder_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_57__["BarChartComponent"], _component_charts_folder_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_58__["DoughnutChartComponent"], _component_charts_folder_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_59__["PieChartComponent"], _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_60__["ProfileComponent"], _component_monthly_tracker_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_62__["DialogComponent"], _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_60__["ProfileComponent"], _component_missing_trackers_missing_trackers_component__WEBPACK_IMPORTED_MODULE_63__["MissingTrackersComponent"], _component_charts_folder_doughnut_chart2_doughnut_chart2_component__WEBPACK_IMPORTED_MODULE_64__["DoughnutChart2Component"], _component_consolidated_view_consolidated_view_component__WEBPACK_IMPORTED_MODULE_66__["ConsolidatedViewComponent"], _component_charts_folder_bar_chart2_bar_chart2_component__WEBPACK_IMPORTED_MODULE_65__["BarChart2Component"], _component_consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_68__["ConsolidatedAnalyticsComponent"], _component_leaves_leaves_component__WEBPACK_IMPORTED_MODULE_69__["LeavesComponent"], _component_monthly_tracker_details_monthly_tracker_details_component__WEBPACK_IMPORTED_MODULE_53__["DialogContentExampleDialog"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], generic_list_filter__WEBPACK_IMPORTED_MODULE_27__["GenericListFilterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_38__["AvatarModule"], generic_list_filter__WEBPACK_IMPORTED_MODULE_27__["GenericListFilterModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_52__["MatListModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_55__["ChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _component_view_program_manager_view_program_manager_component__WEBPACK_IMPORTED_MODULE_43__["ViewProgramManagerComponent"], _component_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_41__["RegisterLoginComponent"], _component_view_program_card_view_program_card_component__WEBPACK_IMPORTED_MODULE_42__["ViewProgramCardComponent"], _component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_33__["NavBarComponent"], _component_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_41__["RegisterLoginComponent"], _component_add_program_add_program_component__WEBPACK_IMPORTED_MODULE_31__["AddProgramComponent"], _component_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_32__["AddProjectComponent"], _component_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_39__["ProgramCardComponent"], _component_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_40__["ProjectCardComponent"], _component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_37__["CalendarComponent"], _component_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_36__["SnackbarComponent"], _component_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_34__["TimeTrackerComponent"], _component_monthly_tracker_monthly_tracker_component__WEBPACK_IMPORTED_MODULE_48__["MonthlyTrackerComponent"], _component_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_46__["SideNavComponent"], _component_add_program_members_add_program_members_component__WEBPACK_IMPORTED_MODULE_49__["AddProgramMembersComponent"], _component_add_project_members_add_project_members_component__WEBPACK_IMPORTED_MODULE_50__["AddProjectMembersComponent"], _component_view_project_card_view_project_card_component__WEBPACK_IMPORTED_MODULE_51__["ViewProjectCardComponent"], _component_monthly_tracker_details_monthly_tracker_details_component__WEBPACK_IMPORTED_MODULE_53__["MonthlyTrackerDetailsComponent"], _component_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_56__["AllChartsComponent"], _component_charts_folder_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_57__["BarChartComponent"], _component_charts_folder_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_58__["DoughnutChartComponent"], _component_charts_folder_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_59__["PieChartComponent"], _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_60__["ProfileComponent"], _component_monthly_tracker_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_62__["DialogComponent"], _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_60__["ProfileComponent"], _component_missing_trackers_missing_trackers_component__WEBPACK_IMPORTED_MODULE_63__["MissingTrackersComponent"], _component_charts_folder_doughnut_chart2_doughnut_chart2_component__WEBPACK_IMPORTED_MODULE_64__["DoughnutChart2Component"], _component_consolidated_view_consolidated_view_component__WEBPACK_IMPORTED_MODULE_66__["ConsolidatedViewComponent"], _component_charts_folder_bar_chart2_bar_chart2_component__WEBPACK_IMPORTED_MODULE_65__["BarChart2Component"], _component_consolidated_analytics_consolidated_analytics_component__WEBPACK_IMPORTED_MODULE_68__["ConsolidatedAnalyticsComponent"], _component_leaves_leaves_component__WEBPACK_IMPORTED_MODULE_69__["LeavesComponent"], _component_monthly_tracker_details_monthly_tracker_details_component__WEBPACK_IMPORTED_MODULE_53__["DialogContentExampleDialog"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], generic_list_filter__WEBPACK_IMPORTED_MODULE_27__["GenericListFilterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_38__["AvatarModule"], generic_list_filter__WEBPACK_IMPORTED_MODULE_27__["GenericListFilterModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_52__["MatListModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_55__["ChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"]],
            providers: [_service_program_service__WEBPACK_IMPORTED_MODULE_44__["ProgramService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_component_view_program_card_view_program_card_component__WEBPACK_IMPORTED_MODULE_42__["ViewProgramCardComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cA/2":
    /*!**************************************************************************!*\
      !*** ./src/app/component/missing-trackers/missing-trackers.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MissingTrackersComponent */

    /***/
    function cA2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MissingTrackersComponent", function () {
        return MissingTrackersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function MissingTrackersComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r2);
        }
      }

      function MissingTrackersComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3);
        }
      }

      var MissingTrackersComponent = /*#__PURE__*/function () {
        function MissingTrackersComponent(_data) {
          _classCallCheck(this, MissingTrackersComponent);

          this._data = _data;
          this.missingDayList = _data.missing;
          this.incompleteDayList = _data.incomplete;
          this.missingCount = _data.missing.length;
          this.incompleteCount = _data.incomplete.length;
        }

        _createClass(MissingTrackersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("DATA", this._data);
          }
        }]);

        return MissingTrackersComponent;
      }();

      MissingTrackersComponent.ɵfac = function MissingTrackersComponent_Factory(t) {
        return new (t || MissingTrackersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      MissingTrackersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MissingTrackersComponent,
        selectors: [["app-missing-trackers"]],
        decls: 28,
        vars: 14,
        consts: [[1, "container"], ["id", "inner-container"], ["id", "first"], [3, "hidden"], ["id", "head"], ["id", "count", 3, "hidden"], [1, "table", "table-danger", "table-striped", "table-hover", 3, "hidden"], [4, "ngFor", "ngForOf"], ["id", "second"], [1, "table", "table-warning", "table-striped", "table-hover", 3, "hidden"]],
        template: function MissingTrackersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Missing Daily Trackers!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Daily Trackers Not Filled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MissingTrackersComponent_tr_12_Template, 3, 1, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Incomplete Daily Trackers!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Daily Tracker Hours Incomplete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MissingTrackersComponent_tr_23_Template, 3, 1, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "All Logs Complete!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Monthly Tracker Submitted!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.missingCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.missingCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.missingCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.missingCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.missingCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.missingDayList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.incompleteCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.incompleteCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.incompleteCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.incompleteCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.incompleteCount < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.incompleteDayList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.incompleteCount > 0 || ctx.missingCount > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.incompleteCount > 0 || ctx.missingCount > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\nh4#count[_ngcontent-%COMP%]{\r\n    color:red;\r\n    font-weight: bold;\r\n    font-size: large;\r\n\r\n}\r\nh4[_ngcontent-%COMP%]{\r\nmargin-left: 10px;\r\n    \r\n}\r\ndiv#head[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    height: auto;\r\n    border: 1px solid rgb(187, 97, 97);\r\n    box-shadow: 0 0 5px pink;\r\n    border-radius: 10px;\r\n    overflow: scroll    ;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding:20px;\r\n}\r\n#inner-container[_ngcontent-%COMP%]{\r\n    \r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n}\r\n#first[_ngcontent-%COMP%], #second[_ngcontent-%COMP%]{\r\n    margin:10px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmctdHJhY2tlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJtaXNzaW5nLXRyYWNrZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oNCNjb3VudHtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbn1cclxuaDR7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgXHJcbn1cclxuZGl2I2hlYWR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg3LCA5NywgOTcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBwaW5rO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGwgICAgO1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG59XHJcbiNpbm5lci1jb250YWluZXJ7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxufVxyXG4jZmlyc3QsI3NlY29uZHtcclxuICAgIG1hcmdpbjoxMHB4XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MissingTrackersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-missing-trackers',
            templateUrl: './missing-trackers.component.html',
            styleUrls: ['./missing-trackers.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cLyX":
    /*!**********************************************************!*\
      !*** ./src/app/component/side-nav/side-nav.component.ts ***!
      \**********************************************************/

    /*! exports provided: SideNavComponent */

    /***/
    function cLyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
        return SideNavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function SideNavComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Monthly Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SideNavComponent_li_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SideNavComponent = /*#__PURE__*/function () {
        function SideNavComponent(employeeService) {
          _classCallCheck(this, SideNavComponent);

          this.employeeService = employeeService;
        }

        _createClass(SideNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEmployee(window.localStorage.getItem('tgt_email'));
          }
        }, {
          key: "getEmployee",
          value: function getEmployee(emailId) {
            var _this49 = this;

            this.employeeService.getEmployee(emailId).subscribe(function (response) {
              // console.log('Employee data retrieved : ');
              // console.log(response);
              _this49.employee = response;
              window.localStorage.setItem('role', _this49.employee.role); // console.log("employee object : ");
              // console.log(this.employee);
            }, function (error) {
              console.log('error message : ');
              console.log(error);
            });
          }
        }]);

        return SideNavComponent;
      }();

      SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
        return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]));
      };

      SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideNavComponent,
        selectors: [["app-side-nav"]],
        decls: 24,
        vars: 2,
        consts: [[1, "sidenav"], [1, "logo"], [2, "color", "white"], [1, "simple-text", "logo-mini"], [1, "logo-img"], ["src", "../../../assets/trackerNewLogo.png", "alt", ""], [1, "simple-text", "logo-normal"], [1, "nav"], ["routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active"], ["routerLink", "view-program-manager"], [1, "fa", "fa-thumb-tack"], ["routerLink", "calendar"], [1, "fa", "fa-calendar-check-o"], ["routerLink", "analytics"], [1, "fa", "fa-file-text-o"], ["routerLink", "monthly-tracker"], [1, "fa", "fa-clock-o"], ["routerLink", "cv"]],
        template: function SideNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SideNavComponent_li_10_Template, 4, 0, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All Programs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SideNavComponent_li_19_Template, 4, 0, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.role) === "OPERATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.role) === "OPERATIONS");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".sidenav[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(115deg,#2C3855 100%,#171E2F 100%); \r\n    height: 100%;\r\n    width: 230px; \r\n    display: block;\r\n    box-shadow: 0 0 45px 0 #2C3855(0, 0, 0, .6);\r\n    margin-right: 0px;\r\n    border-radius: 0px;\r\n    transition: .5x, cubic-bezier(.685,.0473,.346,1);\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 1rem 0.6rem;  \r\n    z-index: 4;\r\n}\r\n.logo[_ngcontent-%COMP%]   a.logo-mini[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    float: left;\r\n    width: 34px;\r\n    text-align: center;\r\n    margin-left: 10px;\r\n    margin-right: 12px;\r\n}\r\n.logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\r\n    display: block;\r\n    opacity: 1;\r\n    transform:  translate3d(0px, 0, 0);\r\n}\r\n.logo[_ngcontent-%COMP%]::after {\r\n    content:'';\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 15px;\r\n    height: 1px;\r\n    width: calc(100% -30%);\r\n    background:rgb(255,255,255,0.5);\r\n}\r\n.logo[_ngcontent-%COMP%]   .simple-text[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    -webkit-padding-start: 0.5rem 0;\r\n            padding-inline-start: 0.5rem 0;\r\n    display: block;\r\n    white-space: nowrap;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n    font-size: larger;\r\n    line-height: 30px;\r\n    \r\n}\r\n.logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 38px;\r\n    margin-left: 200%;\r\n    \r\n}\r\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    margin: 10px 15px 0;\r\n    border-radius: 30px;\r\n    color: rgb(255,255,255,0.8);\r\n    width: 200px;\r\n    display: block;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    font-weight: 300;\r\n    padding: 10px 15px;\r\n    line-height: 1.5rem;\r\n    transition: all .3s ease 0s;\r\n}\r\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    margin-right: 10px;\r\n    font-size: 1.125rem;\r\n}\r\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 2);\r\n    transition: all .3s ease 0s;\r\n    background-color: #3a496b;\r\n}\r\n.nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    height: 5px;\r\n    width: 5px;\r\n    top: 17px;\r\n    left: -2px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtRUFBbUU7SUFDbkUsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBS1Ysa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNpZGUtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCMyQzM4NTUgMTAwJSwjMTcxRTJGIDEwMCUpOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyMzBweDsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0NXB4IDAgIzJDMzg1NSgwLCAwLCAwLCAuNik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHRyYW5zaXRpb246IC41eCwgY3ViaWMtYmV6aWVyKC42ODUsLjA0NzMsLjM0NiwxKTtcclxufVxyXG4ubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNnJlbTsgIFxyXG4gICAgei1pbmRleDogNDtcclxufVxyXG4ubG9nbyBhLmxvZ28tbWluaSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi5sb2dvIGEubG9nby1ub3JtYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogIHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAtby10cmFuc2Zvcm06ICB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogIHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG59XHJcblxyXG4ubG9nbzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDonJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0zMCUpO1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjU1LDI1NSwyNTUsMC41KTtcclxufVxyXG4ubG9nbyAuc2ltcGxlLXRleHQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW0gMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcbi5sb2dvLWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwJTtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwJTsgKi9cclxufVxyXG4ubmF2IGxpPmEge1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xyXG59XHJcbi5uYXYgbGk+YSBpIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxufSBcclxuLm5hdiBsaT5hOmhvdmVyLCAubmF2IGxpPmE6aG92ZXIgaSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAyKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAwcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTQ5NmI7XHJcbn1cclxuLm5hdiBsaS5hY3RpdmU+YTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICB0b3A6IDE3cHg7XHJcbiAgICBsZWZ0OiAtMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-side-nav',
            templateUrl: './side-nav.component.html',
            styleUrls: ['./side-nav.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cT6d":
    /*!*************************************!*\
      !*** ./src/app/guard/auth.guard.ts ***!
      \*************************************/

    /*! exports provided: AuthGuard */

    /***/
    function cT6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd"); // import { SecurityService } from '../service/security.service';


      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.isLoggedInWithJwt()) {
              console.log('jwt token is there');
              return true;
            }

            this.router.navigate(['']);
            return false;
          }
        }, {
          key: "isLoggedInWithJwt",
          value: function isLoggedInWithJwt() {
            var token = window.localStorage.getItem('tgt');
            return token != null;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iTbr":
    /*!***************************************!*\
      !*** ./src/app/model/program-data.ts ***!
      \***************************************/

    /*! exports provided: ProgramData, MemberHour */

    /***/
    function iTbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramData", function () {
        return ProgramData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberHour", function () {
        return MemberHour;
      });

      var ProgramData = function ProgramData(organizationBrandLogo, programName, organizationName, programType, createdOn, startDate, endDate, managerEmailId, programStatus) {
        _classCallCheck(this, ProgramData);

        this.organizationBrandLogo = organizationBrandLogo;
        this.programName = programName;
        this.organizationName = organizationName;
        this.programType = programType;
        this.createdOn = createdOn;
        this.startDate = startDate;
        this.endDate = endDate;
        this.managerEmailId = managerEmailId;
        this.programStatus = programStatus;
        this.memberList = [];
        this.totalHours = 0;
      };

      var MemberHour = function MemberHour(member, hours) {
        _classCallCheck(this, MemberHour);

        this.member = member;
        this.hours = hours;
      };
      /***/

    },

    /***/
    "kleN":
    /*!**************************************************************************!*\
      !*** ./src/app/component/charts-folder/pie-chart/pie-chart.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PieChartComponent */

    /***/
    function kleN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
        return PieChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");

      var PieChartComponent = /*#__PURE__*/function () {
        function PieChartComponent() {
          _classCallCheck(this, PieChartComponent);

          this.pieChartLabels = ['Google Wave 2', 'IBM X1', 'Wipro B5', 'Infosys M2'];
          this.pieChartData = [120, 150, 180, 90];
          this.pieChartType = 'pie';
        }

        _createClass(PieChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PieChartComponent;
      }();

      PieChartComponent.ɵfac = function PieChartComponent_Factory(t) {
        return new (t || PieChartComponent)();
      };

      PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PieChartComponent,
        selectors: [["app-pie-chart"]],
        decls: 2,
        vars: 3,
        consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"]],
        template: function PieChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pie-chart',
            templateUrl: './pie-chart.component.html',
            styleUrls: ['./pie-chart.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ldvO":
    /*!********************************************************!*\
      !*** ./src/app/component/nav-bar/nav-bar.component.ts ***!
      \********************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function ldvO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../side-nav/side-nav.component */
      "cLyX");

      function NavBarComponent_a_11_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
        }
      }

      function NavBarComponent_a_11_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r4.employee.profileImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NavBarComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_a_11_img_2_Template, 1, 0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarComponent_a_11_img_3_Template, 1, 1, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.employee == null ? null : ctx_r0.employee.profileImage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.employee == null ? null : ctx_r0.employee.profileImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee == null ? null : ctx_r0.employee.employeeName, " ");
        }
      }

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(employeeService, snackBar, http) {
          _classCallCheck(this, NavBarComponent);

          this.employeeService = employeeService;
          this.snackBar = snackBar;
          this.http = http;
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEmployee(window.localStorage.getItem('tgt_email')); // this.getUserInfo().subscribe(data => this.name = data.name);
          } // getUserInfo(): Observable<any> {
          //   return this.http.get('http://localhost:8084/api/v1/home');
          // }

        }, {
          key: "getEmployee",
          value: function getEmployee(emailId) {
            var _this50 = this;

            this.employeeService.getEmployee(emailId).subscribe(function (response) {
              console.log('Employee data retrieved : ');
              console.log(response);
              _this50.employee = response; // window.localStorage.setItem('role', this.employee.role);
              // console.log("employee object : ");
              // console.log(this.employee);
            }, function (error) {
              console.log('error message : ');
              console.log(error);
            });
          } // onUpdateProfileImage() {
          // }

        }, {
          key: "logout",
          value: function logout() {
            window.localStorage.clear();
            this.snackBar.open('You have been successfully logged out.', '', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['mat-toolbar', 'mat-primary']
            });
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 24,
        vars: 2,
        consts: [[1, "container-fluid", "main"], [1, "navbar", "navbar-expand-lg", "navbar-dark"], [1, "sidenav-button"], ["aria-hidden", "true", 1, "fas", "fa-bars", "fa-xls", 3, "click"], [1, "navbar-brand"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle username", "id", "navbarDropdownMenuLink", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/home/profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], ["opened", "", "mode", "side", 3, "fixedInViewport"], ["sideNav", ""], ["id", "navbarDropdownMenuLink", 1, "nav-link", "dropdown-toggle", "username", 3, "matMenuTriggerFor"], [1, "photo"], ["src", "../../../assets/noProfileImage.jpg", "alt", "Profile photo", 4, "ngIf"], ["alt", "Profile photo", 3, "src", 4, "ngIf"], ["src", "../../../assets/noProfileImage.jpg", "alt", "Profile photo"], ["alt", "Profile photo", 3, "src"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_i_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NouveauTracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavBarComponent_a_11_Template, 5, 4, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_16_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-side-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedInViewport", true);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["SideNavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"]],
        styles: ["@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 5px 25px;\r\n    \r\n    position:fixed;\r\n    height: 56px;\r\n    width: 100%;\r\n    z-index:2;\r\n    background-image: linear-gradient(115deg,#171E2F 0%,#2C3855 0%); \r\n}\r\n\r\na.sidenav-button[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: rgba(255, 255, 255, .5);\r\n    margin-right: 20px;\r\n    transition: all .3s ease 0s;\r\n}\r\n\r\na.sidenav-button[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, .8);\r\n    transition: all .3s ease 0s;\r\n}\r\n\r\na.navbar-brand[_ngcontent-%COMP%] {\r\n    font: 1.2em sans-serif;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 30px;\r\n    width: 30px;\r\n    margin: 0 7px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    overflow: hidden;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n    margin-top: 56px;\r\n}\r\n\r\nmat-sidenav-content[_ngcontent-%COMP%] {\r\n    margin-top: 56px;\r\n}\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    color: rgb(255,255,255,0.8);\r\n    \r\n    display: block;\r\n    text-decoration: none;\r\n    \r\n    position: relative;\r\n    cursor: pointer;\r\n    font-size: 0.95rem;\r\n    font-weight: 400;\r\n    padding: 10px 12px;\r\n    line-height: 1.5rem;\r\n    transition: all .3s ease 0s;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    font-size: 1.125rem;\r\n    padding-top: 7px;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 2);\r\n    transition: all .3s ease 0s;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkFBbUY7O0FBRW5GO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULCtEQUErRDtBQUNuRTs7QUFDQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBSUEsK0JBQStCOztBQUUvQjtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLCtCQUErQjtBQUNuQyIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi4xLjEvY3NzL2FsbC5taW4uY3NzJztcclxuXHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xyXG4gICAgLyogaGVpZ2h0OiA1NnB4OyAqL1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6MjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIzE3MUUyRiAwJSwjMkMzODU1IDAlKTsgXHJcbn1cclxuYS5zaWRlbmF2LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XHJcbn1cclxuYS5zaWRlbmF2LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XHJcbn1cclxuYS5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udDogMS4yZW0gc2Fucy1zZXJpZjtcclxufVxyXG4ubmF2YmFyIC5waG90byB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubmF2YmFyIC5waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubmF2YmFyLW5hdiBsaT5hIHtcclxuICAgIC8qIG1hcmdpbjogMTBweCAxNXB4IDA7ICovXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAzMHB4OyAqL1xyXG4gICAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XHJcbn1cclxuLm5hdmJhci1uYXYgbGk+YSBpIHtcclxuICAgIC8qIHdpZHRoOiAyMHB4OyAqL1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn0gXHJcbi5uYXZiYXItbmF2IGxpPmE6aG92ZXIsIC5uYXYgbGk+YTpob3ZlciBpIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzNhNDk2YjsgKi9cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qgn1":
    /*!************************************************************************************!*\
      !*** ./src/app/component/charts-folder/doughnut-chart/doughnut-chart.component.ts ***!
      \************************************************************************************/

    /*! exports provided: DoughnutChartComponent */

    /***/
    function qgn1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function () {
        return DoughnutChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../node_modules/chart.js */
      "MO+k");
      /* harmony import */


      var _node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/program.service */
      "0x4Q");

      var DoughnutChartComponent = /*#__PURE__*/function () {
        function DoughnutChartComponent(programService) {
          _classCallCheck(this, DoughnutChartComponent);

          this.programService = programService;
          this.programsArray = [];
          this.doughnutChartLabel = [];
          this.doughnutChartData = [];
        }

        _createClass(DoughnutChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = window.localStorage.getItem('role');
            this.getAllActivePrograms();
          }
        }, {
          key: "myChart",
          value: function myChart() {
            var myChart = new _node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('myChart', {
              type: 'doughnut',
              data: {
                labels: this.doughnutChartLabel,
                datasets: [{
                  label: 'No. of employees',
                  data: this.doughnutChartData,
                  backgroundColor: ['cornflowerblue', 'olivedrab', 'orange', 'tomato', 'crimson', 'purple', 'turquoise', 'forestgreen', 'navy', '#455a64', 'rgba(255, 220, 129, 0.2)', 'rgba(200, 181, 199, 0.2)', 'rgba(193, 226, 206, 0.2)', 'rgba(201, 193, 226, 0.2)', 'rgba(175, 201, 195, 0.2)', 'rgba(253, 222, 166, 0.2)', 'rgba(216, 156, 218, 0.2)', 'rgba(154, 215, 209, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(216, 181, 173, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(154, 198, 215, 0.2)', 'rgba(208, 232, 191, 0.2)'],
                  // hoverOffset: 4,
                  borderWidth: 1,
                  borderColor: '#fff',
                  hoverBorderWidth: 2,
                  hoverBorderColor: '#fff'
                }]
              },
              options: {
                title: {
                  display: true,
                  text: 'Employee Distribution (Active Programs)',
                  padding: 20,
                  fontSize: 25
                },
                legend: {
                  position: 'right',
                  labels: {
                    fontColor: '#000'
                  }
                },
                layout: {
                  padding: {
                    left: 100
                  }
                },
                tooltips: {
                  displayColors: false
                }
              }
            });
          }
        }, {
          key: "getAllActivePrograms",
          value: function getAllActivePrograms() {
            var _this51 = this;

            this.programService.getAllActivePrograms('ACTIVE').subscribe(function (response) {
              _this51.programsArray = response;
              console.log(response);

              _this51.programsArray.forEach(function (program) {
                _this51.doughnutChartLabel.push(program.programName);

                _this51.doughnutChartData.push(program.membersList.length);
              });

              _this51.myChart();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return DoughnutChartComponent;
      }();

      DoughnutChartComponent.ɵfac = function DoughnutChartComponent_Factory(t) {
        return new (t || DoughnutChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]));
      };

      DoughnutChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DoughnutChartComponent,
        selectors: [["app-doughnut-chart"]],
        decls: 3,
        vars: 0,
        consts: [[2, "display", "block"], ["id", "divChart"], ["id", "myChart"]],
        template: function DoughnutChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3VnaG51dC1jaGFydC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoughnutChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-doughnut-chart',
            templateUrl: './doughnut-chart.component.html',
            styleUrls: ['./doughnut-chart.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rID0":
    /*!********************************************************!*\
      !*** ./src/app/component/profile/profile.component.ts ***!
      \********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function rID0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/employee.service */
      "EqVz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function ProfileComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manager's Email-id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.managerEmailId);
        }
      }

      function ProfileComponent_img_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
        }
      }

      function ProfileComponent_img_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r2.employee.profileImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(formBuilder, employeeService, router) {
          _classCallCheck(this, ProfileComponent);

          this.formBuilder = formBuilder;
          this.employeeService = employeeService;
          this.router = router;
        }

        _createClass(ProfileComponent, [{
          key: "getEmployee",
          value: function getEmployee(emailId) {
            var _this52 = this;

            this.employeeService.getEmployee(emailId).subscribe(function (response) {
              console.log('Employee data retrieved : ');
              console.log(response);
              _this52.employee = response;
              window.localStorage.setItem('role', _this52.employee.role); // console.log("employee object : ");
              // console.log(this.employee);
            }, function (error) {
              console.log('error message : ');
              console.log(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.employee = this.getEmployee(window.localStorage.getItem('tgt_email'));
            this.uploadForm = this.formBuilder.group({
              emailid: '',
              file: ['']
            });
          }
        }, {
          key: "onFileSelect",
          value: function onFileSelect(event) {
            if (event.target.files.length > 0) {
              var file = event.target.files[0];
              this.uploadForm.get('file').setValue(file);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var formData = new FormData();
            this.uploadForm.get('emailid').setValue(this.employee.emailId);
            formData.append('emailid', this.uploadForm.get('emailid').value);
            formData.append('file', this.uploadForm.get('file').value);
            this.employeeService.updateUserProfileImage(formData); // window.location.href = 'http://localhost:4200/#/home/profile';

            window.location.reload(); // this.router.navigateByUrl('home/calendar');
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 44,
        vars: 7,
        consts: [[1, "main-container", 2, "display", "flex"], [1, "profile-head"], ["width", "50%", "cellspacing", "0", 1, "table-class"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["type", "file", "accept", "image/*", "name", "file", 3, "change"], ["type", "submit", 1, "btn", "btn-primary"], [1, "profile-card"], ["src", "../../../assets/noProfileImage.jpg", "class", "hoverZoomLink", 4, "ngIf"], ["class", "hoverZoomLink", 3, "src", 4, "ngIf"], [1, "profile-bio"], ["src", "../../../assets/noProfileImage.jpg", 1, "hoverZoomLink"], [1, "hoverZoomLink", 3, "src"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Employee Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email-id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileComponent_tr_20_Template, 5, 1, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Upload Profile Photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_26_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_28_listener($event) {
              return ctx.onFileSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "aside", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileComponent_img_35_Template, 1, 0, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileComponent_img_36_Template, 1, 1, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Thank you!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Clients do not come first. Employees come first. If you take care of your employees, they will take care of the clients.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.employeeName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.emailId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee.managerEmailId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.employee.profileImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee.profileImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.employeeName);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
        styles: [".main-container[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 7%;\r\n    height: calc(100vh - 56px);\r\n    overflow: auto;\r\n    background-color: #f5f7fb;\r\n}\r\n\r\n.profile-head[_ngcontent-%COMP%] {\r\n    \r\n    font-weight: 500;\r\n    color: #444;\r\n    font-size: 40px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\nfont-size: 15px;\r\npadding:  4% 0;\r\nfont-weight: 500;\r\nfont-size: 1rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 2em 0;\r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    margin: 0px 0px 5px 0px;\r\n  }\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    color: #465578;\r\n    letter-spacing: 1px;\r\n    font-size: 14px;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%] {\r\n    background: #2C3855;\r\n    width: 56px;\r\n    height: 56px;\r\n    position: absolute;\r\n    left: 70%;\r\n    top: 50%;\r\n    z-index: 2;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n    margin-top: 70px;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 50%;\r\n    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);\r\n    -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;\r\n    animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n    width: 179px;\r\n    height: 280px;\r\n    padding: 40px 20px 30px 20px;\r\n    display: inline-block;\r\n    float: left;\r\n    border-right: 2px dashed #EEEEEE;\r\n    background: #2C3855;\r\n    color: #000000;\r\n    margin-top: 50px;\r\n    opacity: 0;\r\n    text-align: center;\r\n    -webkit-animation: moveIn 1s 3.1s ease forwards;\r\n    animation: moveIn 1s 3.1s ease forwards;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #FFC107;\r\n    letter-spacing: 2px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: center;\r\n    position: relative;\r\n    margin: 25px 30px;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    bottom: 3px;\r\n    right: 3px;\r\n    \r\n    \r\n    \r\n    transform: scale(0);\r\n    background: linear-gradient(#2196F3 0%, green 100%);\r\n    border-radius: 50%;\r\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n    -webkit-animation: scaleIn 0.3s 3.5s ease forwards;\r\n    animation: scaleIn 0.3s 3.5s ease forwards;\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    max-width: 100%;\r\n    border-radius: 50%;\r\n    transition: box-shadow 0.3s ease;\r\n    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 0px 0px 12px rgba(255, 255, 255, 0.1);\r\n  }\r\n\r\n.profile-card[_ngcontent-%COMP%]   .profile-bio[_ngcontent-%COMP%] {\r\n    width: 175px;\r\n    height: 180px;\r\n    display: inline-block;\r\n    \r\n    padding: 50px 20px 30px 20px;\r\n    background: #FFFFFF;\r\n  \r\n    margin-top: 50px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    -webkit-animation: moveIn 1s 3.1s ease forwards;\r\n    animation: moveIn 1s 3.1s ease forwards;\r\n  }\r\n\r\n@-webkit-keyframes init {\r\n    0% {\r\n      width: 0px;\r\n      height: 0px;\r\n    }\r\n    100% {\r\n      width: 56px;\r\n      height: 56px;\r\n      margin-top: 0px;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes init {\r\n    0% {\r\n      width: 0px;\r\n      height: 0px;\r\n    }\r\n    100% {\r\n      width: 56px;\r\n      height: 56px;\r\n      margin-top: 0px;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes puff {\r\n    0% {\r\n      top: 100%;\r\n      height: 0px;\r\n      padding: 0px;\r\n    }\r\n    100% {\r\n      top: 50%;\r\n      height: 100%;\r\n      padding: 0px 100%;\r\n    }\r\n  }\r\n\r\n@keyframes puff {\r\n    0% {\r\n      top: 100%;\r\n      height: 0px;\r\n      padding: 0px;\r\n    }\r\n    100% {\r\n      top: 50%;\r\n      height: 100%;\r\n      padding: 0px 100%;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes borderRadius {\r\n    0% {\r\n      -webkit-border-radius: 50%;\r\n    }\r\n    100% {\r\n      -webkit-border-radius: 0px;\r\n    }\r\n  }\r\n\r\n@keyframes borderRadius {\r\n    0% {\r\n      -webkit-border-radius: 50%;\r\n    }\r\n    100% {\r\n      border-radius: 0px;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes moveDown {\r\n    0% {\r\n      top: 50%;\r\n    }\r\n    50% {\r\n      top: 40%;\r\n    }\r\n    100% {\r\n      top: 100%;\r\n    }\r\n  }\r\n\r\n@keyframes moveDown {\r\n    0% {\r\n      top: 50%;\r\n    }\r\n    50% {\r\n      top: 40%;\r\n    }\r\n    100% {\r\n      top: 100%;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes moveUp {\r\n    0% {\r\n      background: #FFB300;\r\n      top: 100%;\r\n    }\r\n    50% {\r\n      top: 40%;\r\n    }\r\n    100% {\r\n      top: 50%;\r\n      background: #E0E0E0;\r\n    }\r\n  }\r\n\r\n@keyframes moveUp {\r\n    0% {\r\n      background: #2C3855;\r\n      top: 100%;\r\n    }\r\n    50% {\r\n      top: 40%;\r\n    }\r\n    100% {\r\n      top: 50%;\r\n      background: #E0E0E0;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes materia {\r\n    0% {\r\n      background: #E0E0E0;\r\n    }\r\n    50% {\r\n      -webkit-border-radius: 4px;\r\n    }\r\n    100% {\r\n      width: 440px;\r\n      height: 280px;\r\n      background: #FFFFFF;\r\n      -webkit-border-radius: 4px;\r\n    }\r\n  }\r\n\r\n@keyframes materia {\r\n    0% {\r\n      background: #E0E0E0;\r\n    }\r\n    50% {\r\n      border-radius: 4px;\r\n    }\r\n    100% {\r\n      width: 440px;\r\n      height: 280px;\r\n      background: #FFFFFF;\r\n      border-radius: 4px;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes moveIn {\r\n    0% {\r\n      margin-top: 50px;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      margin-top: -20px;\r\n    }\r\n  }\r\n\r\n@keyframes moveIn {\r\n    0% {\r\n      margin-top: 50px;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      margin-top: -20px;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes scaleIn {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes scaleIn {\r\n    0% {\r\n      transform: scale(0);\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes ripple {\r\n    0% {\r\n      transform: scale3d(0, 0, 0);\r\n    }\r\n    50%,\r\n    100% {\r\n      -webkit-transform: scale3d(1, 1, 1);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@keyframes ripple {\r\n    0% {\r\n      transform: scale3d(0, 0, 0);\r\n    }\r\n    50%,\r\n    100% {\r\n      transform: scale3d(1, 1, 1);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@media screen and (min-aspect-ratio: 4/3) {\r\n    body[_ngcontent-%COMP%] {\r\n      background-size: cover;\r\n    }\r\n    body[_ngcontent-%COMP%]:before {\r\n      width: 0px;\r\n    }\r\n \r\n  @media screen and (min-height: 480px) {\r\n    .profile-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      height: auto;\r\n      padding: 30px 20px;\r\n      display: block;\r\n      float: none;\r\n      border-right: none;\r\n    }\r\n    .profile-card[_ngcontent-%COMP%]   .profile-bio[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      height: auto;\r\n      padding: 15px 20px 30px 20px;\r\n      display: block;\r\n      float: none;\r\n    }\r\n    .profile-social-links[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      display: block;\r\n      float: none;\r\n    }\r\n    }\r\n    @-webkit-keyframes materia {\r\n      0% {\r\n        background: #E0E0E0;\r\n      }\r\n      50% {\r\n        border-radius: 4px;\r\n      }\r\n      100% {\r\n        width: 280px;\r\n        height: 440px;\r\n        background: #FFFFFF;\r\n        border-radius: 4px;\r\n      }\r\n    }\r\n    @keyframes materia {\r\n      0% {\r\n        background: #E0E0E0;\r\n      }\r\n      50% {\r\n        border-radius: 4px;\r\n      }\r\n      100% {\r\n        width: 280px;\r\n        height: 440px;\r\n        background: #FFFFFF;\r\n        border-radius: 4px;\r\n      }\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSx1Q0FBdUM7O0FBQ3JDO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUVoQixnQ0FBZ0M7SUFFaEMsa0JBQWtCO0lBRWxCLDRFQUE0RTtJQUM1RSwrUUFBK1E7SUFDL1EsdVFBQXVRO0VBQ3pROztBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsdUNBQXVDO0VBQ3pDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBRS9CLG1CQUFtQjtJQUVuQixtREFBbUQ7SUFFbkQsa0JBQWtCO0lBRWxCLDBDQUEwQztJQUMxQyxrREFBa0Q7SUFDbEQsMENBQTBDO0VBQzVDOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFFZixrQkFBa0I7SUFFbEIsZ0NBQWdDO0lBRWhDLCtDQUErQztFQUNqRDs7QUFFQTtJQUVFLHFEQUFxRDtFQUN2RDs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MsdUNBQXVDO0VBQ3pDOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixVQUFVO0lBQ1o7RUFDRjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsVUFBVTtJQUNaO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFNBQVM7TUFDVCxXQUFXO01BQ1gsWUFBWTtJQUNkO0lBQ0E7TUFDRSxRQUFRO01BQ1IsWUFBWTtNQUNaLGlCQUFpQjtJQUNuQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0UsUUFBUTtNQUNSLFlBQVk7TUFDWixpQkFBaUI7SUFDbkI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsUUFBUTtJQUNWO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFNBQVM7SUFDWDtFQUNGOztBQUVBO0lBQ0U7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsU0FBUztJQUNYO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixTQUFTO0lBQ1g7SUFDQTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsUUFBUTtNQUNSLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFFBQVE7TUFDUixtQkFBbUI7SUFDckI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLFlBQVk7TUFDWixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDBCQUEwQjtJQUM1QjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQixVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsZ0JBQWdCO01BQ2hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtJQUNuQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTs7TUFFRSxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztBQUVBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTs7TUFFRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLFVBQVU7SUFDWjs7RUFFRjtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osNEJBQTRCO01BQzVCLGNBQWM7TUFDZCxXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2QsV0FBVztJQUNiO0lBQ0E7SUFDQTtNQUNFO1FBQ0UsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxrQkFBa0I7TUFDcEI7TUFDQTtRQUNFLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtNQUNwQjtJQUNGO0lBYkE7TUFDRTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7TUFDcEI7SUFDRjtFQUNGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA3JTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZiO1xyXG59XHJcblxyXG4ucHJvZmlsZS1oZWFkIHtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG50YWJsZSB0aCwgdGFibGUgdGR7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxucGFkZGluZzogIDQlIDA7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbmZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuICBoMSwgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBjb2xvcjogIzQ2NTU3ODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogIzJDMzg1NTtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGluaXQgMC41cyAwLjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIGZvcndhcmRzLCBtb3ZlRG93biAxcyAwLjhzIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpIGZvcndhcmRzLCBtb3ZlVXAgMXMgMS44cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHMsIG1hdGVyaWEgMC41cyAyLjdzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogaW5pdCAwLjVzIDAuMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSkgZm9yd2FyZHMsIG1vdmVEb3duIDFzIDAuOHMgY3ViaWMtYmV6aWVyKDAuNiwgLTAuMjgsIDAuNzM1LCAwLjA0NSkgZm9yd2FyZHMsIG1vdmVVcCAxcyAxLjhzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcywgbWF0ZXJpYSAwLjVzIDIuN3MgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1jYXJkIGhlYWRlciB7XHJcbiAgICB3aWR0aDogMTc5cHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDMwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkICNFRUVFRUU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkMzODU1O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlSW4gMXMgMy4xcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlSW4gMXMgMy4xcyBlYXNlIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1jYXJkIGhlYWRlciBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLnByb2ZpbGUtY2FyZCBoZWFkZXIgaDIge1xyXG4gICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWNhcmQgaGVhZGVyIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyNXB4IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWNhcmQgaGVhZGVyIGE6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIC8qIHdpZHRoOiAyMHB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiAyMHB4OyAqL1xyXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgI0ZGRkZGRjsgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyMTk2RjMgMCUsICMyMTk2RjMgNTAlLCAjRkZDMTA3IDUwJSwgI0ZGQzEwNyAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjE5NkYzIDAlLCBncmVlbiAxMDAlKTsgIFxyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZUluIDAuM3MgMy41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZUluIDAuM3MgMy41cyBlYXNlIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1jYXJkIGhlYWRlciBhID4gaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWNhcmQgaGVhZGVyIGE6aG92ZXIgPiBpbWcge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1jYXJkIC5wcm9maWxlLWJpbyB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgcGFkZGluZzogNTBweCAyMHB4IDMwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlSW4gMXMgMy4xcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlSW4gMXMgMy4xcyBlYXNlIGZvcndhcmRzO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGluaXQge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNTZweDtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgaW5pdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHB1ZmYge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMHB4IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcHVmZiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJvcmRlclJhZGl1cyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJvcmRlclJhZGl1cyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVEb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDQwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbW92ZURvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVVcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkIzMDA7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG1vdmVVcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyQzM4NTU7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbWF0ZXJpYSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG1hdGVyaWEge1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBtb3ZlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2NhbGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDUwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDUwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDQvMykge1xyXG4gICAgYm9keSB7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICBib2R5OmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICB9XHJcbiBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDgwcHgpIHtcclxuICAgIC5wcm9maWxlLWNhcmQgaGVhZGVyIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIH1cclxuICAgIC5wcm9maWxlLWNhcmQgLnByb2ZpbGUtYmlvIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4IDMwcHggMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtc29jaWFsLWxpbmtzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbWF0ZXJpYSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rNNt":
    /*!************************************************************************!*\
      !*** ./src/app/component/monthly-tracker/monthly-tracker.component.ts ***!
      \************************************************************************/

    /*! exports provided: MonthlyTrackerComponent */

    /***/
    function rNNt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthlyTrackerComponent", function () {
        return MonthlyTrackerComponent;
      });
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      "wZ4+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../service/monthly-tracker.service */
      "1+rk");
      /* harmony import */


      var _service_email_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../service/email.service */
      "+NcZ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");

      var _c0 = ["tabGroup"];

      function MonthlyTrackerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", "indeterminate");
        }
      }

      function MonthlyTrackerComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Start Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r1.startDate, "dd MMM yyyy"));
        }
      }

      function MonthlyTrackerComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " End Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r2.endDate, "dd MMM yyyy"));
        }
      }

      function MonthlyTrackerComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", month_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", month_r22, " ");
        }
      }

      function MonthlyTrackerComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\"Enter a Valid Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MonthlyTrackerComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " All \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "all_inclusive");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MonthlyTrackerComponent_div_53_mat_card_11_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \xA0 \xA0 \xA0 \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MonthlyTrackerComponent_div_53_mat_card_11_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_53_mat_card_11_button_13_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var tracker_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r29.approve(tracker_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "done_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#8cc73c");
        }
      }

      function MonthlyTrackerComponent_div_53_mat_card_11_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_53_mat_card_11_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var tracker_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r32.revert(tracker_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "north_east");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#f66178");
        }
      }

      function MonthlyTrackerComponent_div_53_mat_card_11_button_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Action Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#55557b");
        }
      }

      function MonthlyTrackerComponent_div_53_mat_card_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fiber_manual_record");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MonthlyTrackerComponent_div_53_mat_card_11_span_12_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MonthlyTrackerComponent_div_53_mat_card_11_button_13_Template, 3, 2, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MonthlyTrackerComponent_div_53_mat_card_11_button_15_Template, 3, 2, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MonthlyTrackerComponent_div_53_mat_card_11_button_16_Template, 3, 2, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_53_mat_card_11_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var tracker_r24 = ctx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r35.viewDetails(tracker_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " View Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tracker_r24 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#d27a4f");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r24.employeeEmail, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", tracker_r24.status == "COMPLETED" ? "#8cc73c" : tracker_r24.status == "REVERTED" ? "#f66178" : "#f2b551");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r24.status.toUpperCase(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tracker_r24.remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r23.left);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r24.status == "SUBMITTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r24.status == "SUBMITTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r24.status == "SUBMITTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r24.status == "COMPLETED" || tracker_r24.status == "REVERTED");
        }
      }

      function MonthlyTrackerComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "EMPLOYEE EMAIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "STATUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "REMARKS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ACTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MonthlyTrackerComponent_div_53_mat_card_11_Template, 20, 13, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.allTrackers);
        }
      }

      function MonthlyTrackerComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Oops! No Available Trackers as of Now! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MonthlyTrackerComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " SUBMITTED \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "checklist");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#f2b551");
        }
      }

      function MonthlyTrackerComponent_div_58_mat_card_11_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
        }
      }

      function MonthlyTrackerComponent_div_58_mat_card_11_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_58_mat_card_11_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var tracker_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r42.approve(tracker_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "done_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#8cc73c");
        }
      }

      function MonthlyTrackerComponent_div_58_mat_card_11_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_58_mat_card_11_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var tracker_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r45.revert(tracker_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "north_east");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#f66178");
        }
      }

      function MonthlyTrackerComponent_div_58_mat_card_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fiber_manual_record");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MonthlyTrackerComponent_div_58_mat_card_11_span_12_Template, 1, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MonthlyTrackerComponent_div_58_mat_card_11_button_13_Template, 3, 2, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MonthlyTrackerComponent_div_58_mat_card_11_button_15_Template, 3, 2, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_58_mat_card_11_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

            var tracker_r38 = ctx.$implicit;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r48.viewDetails(tracker_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " View Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tracker_r38 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#d27a4f");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r38.employeeEmail, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", tracker_r38.status == "COMPLETED" ? "#8cc73c" : tracker_r38.status == "REVERTED" ? "#f66178" : "#f2b551");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r38.status.toUpperCase(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tracker_r38.remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r37.left);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r38.status == "SUBMITTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r38.status == "SUBMITTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tracker_r38.status == "SUBMITTED");
        }
      }

      function MonthlyTrackerComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "EMPLOYEE EMAIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "STATUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "REMARKS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ACTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MonthlyTrackerComponent_div_58_mat_card_11_Template, 19, 12, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.submittedTrackers);
        }
      }

      function MonthlyTrackerComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Oops! No Available Trackers as of Now! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MonthlyTrackerComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Approved \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "done_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#8cc73c");
        }
      }

      function MonthlyTrackerComponent_div_63_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fiber_manual_record");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_63_mat_card_9_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);

            var tracker_r51 = ctx.$implicit;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r52.viewDetails(tracker_r51);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " View Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tracker_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#d27a4f");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r51.employeeEmail, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", tracker_r51.status == "COMPLETED" ? "#8cc73c" : tracker_r51.status == "REVERTED" ? "#f66178" : "#f2b551");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r51.status.toUpperCase(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tracker_r51.remarks);
        }
      }

      function MonthlyTrackerComponent_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "EMPLOYEE EMAIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "STATUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "REMARKS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MonthlyTrackerComponent_div_63_mat_card_9_Template, 14, 7, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.approvedTrackers);
        }
      }

      function MonthlyTrackerComponent_ng_template_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Oops! No Available Trackers as of Now! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MonthlyTrackerComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Reverted \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "north_east");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#f66178");
        }
      }

      function MonthlyTrackerComponent_div_68_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fiber_manual_record");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthlyTrackerComponent_div_68_mat_card_9_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

            var tracker_r55 = ctx.$implicit;

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r56.viewDetails(tracker_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " View Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tracker_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#d27a4f");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r55.employeeEmail, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", tracker_r55.status == "COMPLETED" ? "#8cc73c" : tracker_r55.status == "REVERTED" ? "#f66178" : "#f2b551");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tracker_r55.status.toUpperCase(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tracker_r55.remarks);
        }
      }

      function MonthlyTrackerComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "EMPLOYEE EMAIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "STATUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "REMARKS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MonthlyTrackerComponent_div_68_mat_card_9_Template, 14, 7, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.revertedTrackers);
        }
      }

      function MonthlyTrackerComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Oops! No Available Trackers as of Now! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var MonthlyTrackerComponent = /*#__PURE__*/function () {
        function MonthlyTrackerComponent(router, monthlyTrackerService, emailService, dialog) {
          _classCallCheck(this, MonthlyTrackerComponent);

          this.router = router;
          this.monthlyTrackerService = monthlyTrackerService;
          this.emailService = emailService;
          this.dialog = dialog;
          this.showSpinner = false;
          this.allmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          this.thisMonth = this.allmonths[new Date().getMonth() - 1];
          this.thisYear = new Date().getFullYear();
          this.yearFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().getFullYear(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(new Date().getFullYear())]);
          this.monthFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.allmonths[new Date().getMonth() - 1]); // ALL RECORDS

          this.allTrackers = []; // SUBMITTED RECORDS

          this.submittedTrackers = []; // APPROVED RECORDS

          this.approvedTrackers = []; // REVERTED RECORDS

          this.revertedTrackers = [];
        } // Overview Populate on View Initialization


        _createClass(MonthlyTrackerComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
            // Add 'implements AfterViewInit' to the class.
            this.updateRecords();
          } // Tab Change Event Handler

        }, {
          key: "tabChanged",
          value: function tabChanged(tabChangeEvent) {
            if (tabChangeEvent.index === 0) {
              this.updateOverview(this.allTrackers);
            } else if (tabChangeEvent.index === 1) {
              this.updateOverview(this.submittedTrackers);
            } else if (tabChangeEvent.index === 2) {
              this.updateOverview(this.approvedTrackers);
            } else if (tabChangeEvent.index === 3) {
              this.updateOverview(this.revertedTrackers);
            }
          } // Long to Date String Convertor

        }, {
          key: "date",
          value: function date(milliseconds) {
            return new Date(milliseconds).toDateString();
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(monthlyTracker) {
            console.log("email:", monthlyTracker.employeeEmail, "month:", this.allmonths.indexOf(this.monthFilter.value) + 1, "year:", this.yearFilter.value);
            this.router.navigate(['/home/mtd', monthlyTracker.employeeEmail, this.allmonths.indexOf(this.monthFilter.value) + 1, this.yearFilter.value]);
          }
        }, {
          key: "approve",
          value: function approve(monthlyTracker) {
            var _this53 = this;

            this.monthlyTrackerService.ApproveMonthlyTracker(monthlyTracker).subscribe(function (Response) {
              _this53.updateRecords();
            });
          }
        }, {
          key: "revert",
          value: function revert(monthlyTracker) {
            var _this54 = this;

            this.openDialog(monthlyTracker);
            this.dialog.afterAllClosed.subscribe(function () {
              _this54.updateRecords();
            });
            this.updateRecords();
          }
        }, {
          key: "updateRecords",
          value: function updateRecords() {
            var _this55 = this;

            this.thisMonth = this.allmonths[new Date().getMonth()];
            this.thisYear = new Date().getFullYear();
            this.showSpinner = true;
            this.monthlyTrackerService.getAllMonthlyTrackers(this.monthFilter.value, this.yearFilter.value).subscribe(function (response) {
              _this55.allTrackers = response;
              _this55.showSpinner = false;
              _this55.submittedTrackers = _this55.allTrackers.filter(function (s) {
                return s.status === 'SUBMITTED';
              });
              _this55.approvedTrackers = _this55.allTrackers.filter(function (s) {
                return s.status === 'COMPLETED';
              });
              _this55.revertedTrackers = _this55.allTrackers.filter(function (s) {
                return s.status === 'REVERTED';
              });

              if (_this55.tabGroup.selectedIndex === 0) {
                _this55.updateOverview(_this55.allTrackers);
              } else if (_this55.tabGroup.selectedIndex === 1) {
                _this55.updateOverview(_this55.submittedTrackers);
              } else if (_this55.tabGroup.selectedIndex === 2) {
                _this55.updateOverview(_this55.approvedTrackers);
              } else if (_this55.tabGroup.selectedIndex === 3) {
                _this55.updateOverview(_this55.revertedTrackers);
              } else {
                _this55.updateOverview(_this55.allTrackers);
              }
            }, function (error) {
              _this55.showSpinner = false;
            });
          }
        }, {
          key: "updateOverview",
          value: function updateOverview(monthlyTrackers) {
            this.records = monthlyTrackers.length;

            if (this.records === 0 && this.allTrackers.length === 0) {
              this.month = this.monthFilter.value;
              this.year = this.yearFilter.value;
              this.startDate = null;
              this.endDate = null;
            } else {
              this.month = monthlyTrackers.reduce(function (s) {
                return s;
              }).monthName.toLowerCase();
              this.year = monthlyTrackers.reduce(function (s) {
                return s;
              }).year;
              this.startDate = monthlyTrackers[0].startDate;
              this.endDate = monthlyTrackers[0].endDate;
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog(monthlyTracker) {
            this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__["DialogComponent"], {
              data: monthlyTracker
            });
          }
        }]);

        return MonthlyTrackerComponent;
      }();

      MonthlyTrackerComponent.ɵfac = function MonthlyTrackerComponent_Factory(t) {
        return new (t || MonthlyTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_4__["MonthlyTrackerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_email_service__WEBPACK_IMPORTED_MODULE_5__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      MonthlyTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MonthlyTrackerComponent,
        selectors: [["app-monthly-tracker"]],
        viewQuery: function MonthlyTrackerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabGroup = _t.first);
          }
        },
        decls: 71,
        vars: 20,
        consts: [["class", "spinner", 4, "ngIf"], [1, "background"], [1, "overview"], [1, "side-header"], [1, "side-info"], ["class", "side-sub-info", 4, "ngIf"], [1, "title"], [1, "filter"], ["appearance", "outline"], [3, "value", "formControl", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "placeholder", "Year", "min", "2000", 3, "formControl", "max", "input"], [4, "ngIf"], ["animationDuration", "0ms", 3, "selectedTabChange"], ["tabGroup", ""], ["mat-tab-label", ""], ["class", "list", 4, "ngIf", "ngIfElse"], ["noAllTrackers", ""], ["noSubmittedTrackers", ""], ["noApprovedTrackers", ""], ["noRevertedTrackers", ""], [1, "spinner"], [3, "mode"], [1, "side-sub-info"], [3, "value"], ["mat-mini-fab", "", "color", "primary"], [1, "mat-18"], [1, "list"], [1, "heading"], ["class", "data", 4, "ngFor", "ngForOf"], [1, "data"], [1, "record"], ["mat-mini-fab", "", "matTooltip", "Approve", 3, "backgroundColor", 4, "ngIf"], ["mat-mini-fab", "", "matTooltip", "Revert", 3, "backgroundColor", "click", 4, "ngIf"], ["mat-flat-button", "", "disabled", "", "class", "no-action", 3, "color", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "view-details", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Approve"], [1, "mat-18", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Revert", 3, "click"], ["mat-flat-button", "", "disabled", "", 1, "no-action"], [1, "not-available"], ["src", "assets/images/minion-oops.png", "alt", "", "srcset", "", 1, "oops"], ["mat-mini-fab", ""], ["mat-mini-fab", "", "matTooltip", "Approve", 3, "backgroundColor", "click", 4, "ngIf"], ["mat-mini-fab", "", "matTooltip", "Approve", 3, "click"]],
        template: function MonthlyTrackerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MonthlyTrackerComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "OVERVIEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " No.of Monthly Trackers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Year ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MonthlyTrackerComponent_div_25_Template, 6, 4, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MonthlyTrackerComponent_div_27_Template, 6, 4, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\xA0 \xA0 MONTHLY TRACKER");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MonthlyTrackerComponent_Template_mat_select_valueChange_39_listener($event) {
              return ctx.thisMonth = $event;
            })("selectionChange", function MonthlyTrackerComponent_Template_mat_select_selectionChange_39_listener() {
              return ctx.updateRecords();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "None");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, MonthlyTrackerComponent_mat_option_42_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MonthlyTrackerComponent_Template_input_input_47_listener() {
              return ctx.updateRecords();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, MonthlyTrackerComponent_mat_error_48_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-tab-group", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function MonthlyTrackerComponent_Template_mat_tab_group_selectedTabChange_49_listener($event) {
              return ctx.tabChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, MonthlyTrackerComponent_ng_template_52_Template, 4, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, MonthlyTrackerComponent_div_53_Template, 12, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, MonthlyTrackerComponent_ng_template_54_Template, 3, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, MonthlyTrackerComponent_ng_template_57_Template, 4, 2, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, MonthlyTrackerComponent_div_58_Template, 12, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, MonthlyTrackerComponent_ng_template_59_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, MonthlyTrackerComponent_ng_template_62_Template, 4, 2, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, MonthlyTrackerComponent_div_63_Template, 10, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, MonthlyTrackerComponent_ng_template_64_Template, 3, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, MonthlyTrackerComponent_ng_template_67_Template, 4, 2, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, MonthlyTrackerComponent_div_68_Template, 10, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, MonthlyTrackerComponent_ng_template_69_Template, 3, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSpinner);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.records);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.month);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startDate !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endDate !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.thisMonth)("formControl", ctx.monthFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allmonths);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.yearFilter)("max", ctx.thisYear);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.yearFilter.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allTrackers.length > 0 || ctx.showSpinner)("ngIfElse", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submittedTrackers.length > 0 || ctx.showSpinner)("ngIfElse", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.approvedTrackers.length > 0 || ctx.showSpinner)("ngIfElse", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.revertedTrackers.length > 0 || ctx.showSpinner)("ngIfElse", _r20);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [".background[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 50px;\r\n  width: 100%;\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n  background-color: #f5f7fb;\r\n}\r\nmat-tab-group[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n  min-height: 600px;\r\n  border-radius: 10px;\r\n  transform: scale(0.95);\r\n  margin-top:100px;\r\n}\r\n.list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  row-gap: 10px;\r\n  height: 100%;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  background-color: transparent;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.heading[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  display: flex;\r\n  flex-direction: row;\r\n  box-shadow: none;\r\n  justify-content: space-between;\r\n  color: #55557b;\r\n}\r\n.heading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n.data[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1 0 80px;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n.data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.mat-icon[_ngcontent-%COMP%] {\r\n  vertical-align: -28%;\r\n}\r\n.mat-mini-fab[_ngcontent-%COMP%] {\r\n  vertical-align: 38%;\r\n  transform: scale(0.8);\r\n}\r\n.overview[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  right: 50px;\r\n  top:0px;\r\n  float: right;\r\n  background: rgb(135, 206, 235, 0.5);\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  transform: scale(0.8);\r\n}\r\n.side-header[_ngcontent-%COMP%] {\r\n  color: #7972de;\r\n  font-size: 18px;\r\n  vertical-align: middle;\r\n}\r\n.side-info[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #55557b;\r\n  text-transform: capitalize;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    float: left;\r\n  font-weight: 500;\r\n  color: #444;\r\n  font-size: 40px;\r\n}\r\n.side-sub-info[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  color: #55557b;\r\n}\r\n.view-details[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    border:1px solid;\r\n}\r\n.filter[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  left: 350px;\r\n  top:60px;\r\n  float: right;\r\n  background: transparent;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  transform: scale(0.8);\r\n}\r\n.not-available[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  height:400px;\r\n    display:flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n  font-size:50px;\r\n}\r\n.oops[_ngcontent-%COMP%]{\r\n  width:200px;\r\n}\r\n.spinner[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 50%;\r\n  top:50%;\r\n  transform:scale(1.2);\r\n  z-index: 10;\r\n}\r\n.record[_ngcontent-%COMP%]{\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnRobHktdHJhY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7SUFDVixZQUFZO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7QUFDQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im1vbnRobHktdHJhY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYjtcclxufVxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICBtYXJnaW4tdG9wOjEwMHB4O1xyXG59XHJcbi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcm93LWdhcDogMTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29sb3I6ICM1NTU1N2I7XHJcbn1cclxuLmhlYWRpbmcgZGl2IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleDogMSAwIDgwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRhdGEgZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5tYXQtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IC0yOCU7XHJcbn1cclxuLm1hdC1taW5pLWZhYiB7XHJcbiAgdmVydGljYWwtYWxpZ246IDM4JTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuLm92ZXJ2aWV3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogbGVmdDo3NTBweDsgKi9cclxuICByaWdodDogNTBweDtcclxuICB0b3A6MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTM1LCAyMDYsIDIzNSwgMC41KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuLnNpZGUtaGVhZGVyIHtcclxuICBjb2xvcjogIzc5NzJkZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc2lkZS1pbmZvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICM1NTU1N2I7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5zaWRlLXN1Yi1pbmZvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNTU1NTdiO1xyXG59XHJcbi52aWV3LWRldGFpbHN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZDtcclxufVxyXG4uZmlsdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogbGVmdDo3NTBweDsgKi9cclxuICBsZWZ0OiAzNTBweDtcclxuICB0b3A6NjBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcbi5ub3QtYXZhaWxhYmxle1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGZvbnQtc2l6ZTo1MHB4O1xyXG59XHJcbi5vb3Bze1xyXG4gIHdpZHRoOjIwMHB4O1xyXG59XHJcbi5zcGlubmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOjUwJTtcclxuICB0cmFuc2Zvcm06c2NhbGUoMS4yKTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ucmVjb3Jke1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MonthlyTrackerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-monthly-tracker',
            templateUrl: './monthly-tracker.component.html',
            styleUrls: ['./monthly-tracker.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_monthly_tracker_service__WEBPACK_IMPORTED_MODULE_4__["MonthlyTrackerService"]
          }, {
            type: _service_email_service__WEBPACK_IMPORTED_MODULE_5__["EmailService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }];
        }, {
          tabGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tabGroup']
          }]
        });
      })();
      /***/

    },

    /***/
    "s+jY":
    /*!******************************************************************!*\
      !*** ./src/app/component/program-card/program-card.component.ts ***!
      \******************************************************************/
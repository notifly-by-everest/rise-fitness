webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routeComponents_select_trainer_select_trainer_component__ = __webpack_require__("../../../../../src/app/routeComponents/select-trainer/select-trainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routeComponents_select_date_select_date_component__ = __webpack_require__("../../../../../src/app/routeComponents/select-date/select-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_scheduleHelper_service__ = __webpack_require__("../../../../../src/app/services/scheduleHelper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routeComponents_select_time_select_time_component__ = __webpack_require__("../../../../../src/app/routeComponents/select-time/select-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routeComponents_input_details_input_details_component__ = __webpack_require__("../../../../../src/app/routeComponents/input-details/input-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routeComponents_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/routeComponents/confirmation/confirmation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__routeComponents_select_trainer_select_trainer_component__["a" /* SelectTrainerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__routeComponents_select_date_select_date_component__["a" /* SelectDateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__routeComponents_select_time_select_time_component__["a" /* SelectTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__routeComponents_input_details_input_details_component__["a" /* InputDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__routeComponents_confirmation_confirmation_component__["a" /* ConfirmationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_web_service__["a" /* WebService */],
            __WEBPACK_IMPORTED_MODULE_9__services_scheduleHelper_service__["a" /* ScheduleHelperService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routeComponents_select_trainer_select_trainer_component__ = __webpack_require__("../../../../../src/app/routeComponents/select-trainer/select-trainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routeComponents_select_date_select_date_component__ = __webpack_require__("../../../../../src/app/routeComponents/select-date/select-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routeComponents_select_time_select_time_component__ = __webpack_require__("../../../../../src/app/routeComponents/select-time/select-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routeComponents_input_details_input_details_component__ = __webpack_require__("../../../../../src/app/routeComponents/input-details/input-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routeComponents_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/routeComponents/confirmation/confirmation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '',
        redirectTo: '/select-a-trainer',
        pathMatch: 'full' },
    { path: 'select-a-trainer', component: __WEBPACK_IMPORTED_MODULE_2__routeComponents_select_trainer_select_trainer_component__["a" /* SelectTrainerComponent */] },
    { path: 'select-date', component: __WEBPACK_IMPORTED_MODULE_3__routeComponents_select_date_select_date_component__["a" /* SelectDateComponent */] },
    { path: 'select-time', component: __WEBPACK_IMPORTED_MODULE_4__routeComponents_select_time_select_time_component__["a" /* SelectTimeComponent */] },
    { path: 'input-details', component: __WEBPACK_IMPORTED_MODULE_5__routeComponents_input_details_input_details_component__["a" /* InputDetailsComponent */] },
    { path: 'confirmation', component: __WEBPACK_IMPORTED_MODULE_6__routeComponents_confirmation_confirmation_component__["a" /* ConfirmationComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/routeComponents/confirmation/confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n  margin-top: 7em; }\n  .bg .confirmation_details {\n    background: #d6d6d6;\n    height: 21em;\n    padding-left: 2em;\n    padding-top: 1em;\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px; }\n    .bg .confirmation_details .confirmation_h4 {\n      font-weight: 300;\n      font-size: 36px; }\n    .bg .confirmation_details .confirmation_p {\n      padding-bottom: 1em;\n      font-size: 19px;\n      font-weight: 300; }\n    .bg .confirmation_details label {\n      margin-bottom: 0;\n      font-weight: 400;\n      font-size: 12px; }\n    .bg .confirmation_details .partner_name {\n      font-size: 25px;\n      font-weight: 300;\n      padding-bottom: 10px; }\n    .bg .confirmation_details .trainer_name {\n      font-size: 16px; }\n  .bg .booking_date {\n    background: #d6d6d6;\n    height: 21em;\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px; }\n    .bg .booking_date .date_container {\n      margin-top: 4em; }\n      .bg .booking_date .date_container p {\n        background: white;\n        width: 60%;\n        margin-left: 20%;\n        margin-bottom: 0; }\n      .bg .booking_date .date_container .date {\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px;\n        font-weight: 300;\n        font-size: 60px; }\n      .bg .booking_date .date_container .month {\n        font-size: 19px;\n        font-weight: 300; }\n      .bg .booking_date .date_container .time {\n        border-bottom-left-radius: 8px;\n        border-bottom-right-radius: 8px;\n        padding-bottom: 10px;\n        padding-top: 5px;\n        font-size: 18px;\n        font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routeComponents/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg\">\n  <div class=\"row main\">\n    <div class=\"col-sm-5 col-sm-offset-2 confirmation_details\">\n      <h4 class=\"confirmation_h4\">Booking Confirmation</h4>\n      <p class=\"confirmation_p\">{{user_name}}, your booking has been confirmed.</p>\n\n      <label for=\"\">GYM</label>\n      <p class=\"partner_name\">{{org_name}}</p>\n      <label for=\"\">TRAINER</label>\n      <p class=\"trainer_name\">{{trainer_name}}</p>\n    </div>\n\n    <div class=\"col-sm-3 booking_date text-center\">\n      <div class=\"date_container\">\n        <p class=\"date\">{{appointment_date}}</p>\n        <p class=\"month\">{{appointment_month}}, {{appointment_year}}</p>\n        <p class=\"time\">{{appointment_time}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routeComponents/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmationComponent = (function () {
    function ConfirmationComponent(_webSrv, _router) {
        this._webSrv = _webSrv;
        this._router = _router;
        this.appointment_call_response = null;
        this.trainer_name = null;
        this.user_name = null;
        this.appointment_date = null;
        this.appointment_month = null;
        this.appointment_year = null;
        this.appointment_time = null;
        this.org_name = null;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        if (this._webSrv.submissionResponse == null) {
            this._router.navigate(['select-a-trainer']);
        }
        else {
            this.appointment_call_response = this._webSrv.submissionResponse;
            console.log(this.appointment_call_response);
            this.user_name = this.appointment_call_response['userName'];
            this.trainer_name = this._webSrv.selected_trainer_name;
            this.appointment_date = this._webSrv.selected_date;
            this.appointment_month = this._webSrv.selected_month;
            this.appointment_year = this._webSrv.selected_year;
            this.appointment_time = this._webSrv.selected_slot['startTimeHuman'];
            // Set copy
            this.org_name = this._webSrv.environment_object['org_name'];
        }
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-confirmation',
        template: __webpack_require__("../../../../../src/app/routeComponents/confirmation/confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routeComponents/confirmation/confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ConfirmationComponent);

var _a, _b;
//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/routeComponents/input-details/input-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n  margin-top: 4em; }\n  .form label {\n    display: block;\n    font-weight: 400; }\n  .form input {\n    width: 100%; }\n\n.schedule_btn {\n  border-radius: 30px;\n  font-size: 21px;\n  font-weight: 300;\n  margin: auto;\n  display: block;\n  margin-top: 1.67em;\n  padding: 7px 25px; }\n\n.preloader .preload {\n  position: absolute;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin: -42px 0 0 -12px;\n  margin-top: 1em;\n  background: #b7adad;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear; }\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n@media (max-width: 500px) {\n  .form-group input {\n    border: none;\n    border-bottom: #797979 solid 0.5px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routeComponents/input-details/input-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-offset-1 \">\n    <div class=\"text-center\">\n      <h3>Input Details</h3>\n      \n      <h5>{{selected_month}} {{selected_date}}, {{selected_year}} || {{selected_time_slot_human_time}}</h5>\n\n    </div>\n    <div class=\"row\"></div>\n    <div class=\"form col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1\">\n      <div class=\"form-group\">\n        <label for=\"\">First Name</label>\n        <input type=\"text\" [(ngModel)]=\"userFname\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Last Name</label>\n        <input type=\"text\" [(ngModel)]=\"userLname\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Email</label>\n        <input type=\"text\" [(ngModel)]=\"userEmail\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Phone</label>\n        <input type=\"text\" [(ngModel)]=\"userPhone\">\n      </div>\n\n      <div class=\"preloaderConditional\">\n        <div class=\"preloader\" *ngIf=\"showPreloader\">\n          <div class=\"preload\"></div>\n        </div>\n\n        <button *ngIf=\"!showPreloader\" (click)=\"submitAppointment()\" class=\"text-center btn schedule_btn\">Schedule Appointment</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routeComponents/input-details/input-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputDetailsComponent = (function () {
    function InputDetailsComponent(_webSrv, _router) {
        this._webSrv = _webSrv;
        this._router = _router;
        this.selected_date = '';
        this.selected_month = null;
        this.selected_month_index = null;
        this.selected_year = null;
        this.showPreloader = false;
        this.selected_time_slot = '';
        this.selected_time_slot_human_time = '';
        this.selected_trainer_key = '';
        this.selected_trainer_name = '';
        this.userFname = '';
        this.userLname = '';
        this.userEmail = '';
        this.userPhone = '';
    }
    InputDetailsComponent.prototype.ngOnInit = function () {
        if (this._webSrv.selected_slot == null) {
            this._router.navigate(['select-a-trainer']);
        }
        else {
            this.selected_trainer_key = this._webSrv.selected_trainer_key;
            this.selected_date = this._webSrv.selected_date;
            this.selected_month = this._webSrv.selected_month;
            this.selected_month_index = this._webSrv.selected_month_index;
            this.selected_year = this._webSrv.selected_year;
            this.selected_time_slot = this._webSrv.selected_slot;
            this.selected_time_slot_human_time = this._webSrv.selected_slot['startTimeHuman'];
            console.log(this.selected_time_slot);
        }
    };
    InputDetailsComponent.prototype.submitAppointment = function () {
        var _this = this;
        this.showPreloader = true;
        var appointmentObj = {
            startTime: parseInt(this.selected_time_slot['startTimeMs']),
            start: parseInt(this.selected_time_slot['startTimeMs']),
            endTime: parseInt(this.selected_time_slot['startTimeMs']) + 3600,
            end: parseInt(this.selected_time_slot['startTimeMs']) + 3600,
            date: this._webSrv.selected_date,
            month: this._webSrv.selected_month,
            month_index: this._webSrv.selected_month_index + 1,
            year: this._webSrv.selected_year,
            humanTime: this.selected_time_slot['startTimeHuman'],
            userPhone: this.userPhone,
            userEmail: this.userEmail,
            userName: this.userFname + ' ' + this.userLname,
            trainerKey: this.selected_trainer_key,
            trainerName: this._webSrv.selected_trainer_name,
            organization: this._webSrv.environment_object['org_name']
        };
        console.log(appointmentObj);
        this._webSrv.submitAnAppointment(appointmentObj).subscribe(function (res) {
            console.log(res);
            _this._webSrv.submissionResponse = JSON.parse(res['_body']);
            _this._router.navigate(['confirmation']);
        });
        // this.cleanForm();
    };
    InputDetailsComponent.prototype.cleanForm = function () {
        this.userFname = '';
        this.userLname = '';
        this.userEmail = '';
        this.userPhone = '';
    };
    return InputDetailsComponent;
}());
InputDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-details',
        template: __webpack_require__("../../../../../src/app/routeComponents/input-details/input-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routeComponents/input-details/input-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], InputDetailsComponent);

var _a, _b;
//# sourceMappingURL=input-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-date/select-date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  width: 70%;\n  margin-left: 15%; }\n\n.schedule_head th {\n  text-align: center; }\n\n.next {\n  margin-top: 40px;\n  height: 60px;\n  cursor: pointer; }\n\n.next_left .next {\n  display: block;\n  margin-left: auto; }\n\n.schedule td {\n  padding-top: 10px; }\n.schedule .date {\n  color: grey;\n  font-weight: 100; }\n.schedule .date_available {\n  color: #4065ce;\n  cursor: pointer;\n  font-weight: 400; }\n.schedule .isToday span {\n  border: grey 1px solid;\n  padding: 4px;\n  border-radius: 20px; }\n\n@media (max-width: 500px) {\n  table {\n    width: 100%;\n    margin-left: 0%; }\n\n  .top_title {\n    margin-top: 1em; }\n\n  .sub_title {\n    margin-bottom: 2em; }\n\n  .next_left img {\n    float: left;\n    margin-top: 5em; }\n\n  .next_right {\n    padding-right: 0; }\n    .next_right img {\n      float: right;\n      margin-top: 5em; }\n\n  p.day_title {\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    margin-top: 40px;\n    margin-bottom: 25px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-date/select-date.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n    <h3 class=\"top_title\">Choose A Date</h3>\n    \n    <h5 class=\"sub_title\">{{month}} {{year}}</h5>\n\n    <br>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n    <table>\n        <thead class=\"schedule_head\">\n          <tr class=\"text-center\">\n\n            <th>\n              <p class=\"day_title\">Sunday</p>\n            </th>\n\n            <th>\n              <p class=\"day_title\">Monday</p>\n            </th>\n\n            <th>\n              <p class=\"day_title\">Tuesday</p>\n            </th>\n\n            <th>\n              <p class=\"day_title\">Wednesday</p>\n            </th>\n            \n            <th>\n              <p class=\"day_title\">Thursday</p>\n            </th>\n            \n            <th>\n              <p class=\"day_title\">Friday</p>\n            </th>\n            \n            <th>\n              <p class=\"day_title\">Saturday</p>\n            </th>\n            \n          </tr>\n        </thead>\n\n        <tbody class=\"schedule\">\n          <tr>\n            <td class=\"date\" *ngFor=\"let day of week1\" (click)=\"dateSelect(day.available, day.date)\" [ngClass]=\"{ 'date_available': day.available, 'isToday' : day.isToday }\"><span *ngIf=\"day.show\">{{day.date}}</span></td>\n          </tr>\n          \n          <tr>\n            <td class=\"date\" *ngFor=\"let day of week2\" (click)=\"dateSelect(day.available, day.date)\" [ngClass]=\"{ 'date_available': day.available, 'isToday' : day.isToday }\"><span *ngIf=\"day.show\">{{day.date}}</span></td>\n          </tr>\n          \n          <tr>\n            <td class=\"date\" *ngFor=\"let day of week3\" (click)=\"dateSelect(day.available, day.date)\" [ngClass]=\"{ 'date_available': day.available, 'isToday' : day.isToday }\"><span *ngIf=\"day.show\" [ngClass]=\"{ 'date_available': day.available }\">{{day.date}}</span></td>\n          </tr>\n          \n          <tr>\n            <td class=\"date\" *ngFor=\"let day of week4\" (click)=\"dateSelect(day.available, day.date)\" [ngClass]=\"{ 'date_available': day.available, 'isToday' : day.isToday }\"><span *ngIf=\"day.show\">{{day.date}}</span></td>\n          </tr>\n\n          <tr>\n            <td class=\"date\" *ngFor=\"let day of week5\" (click)=\"dateSelect(day.available, day.date)\" [ngClass]=\"{ 'date_available': day.available, 'isToday' : day.isToday }\"><span *ngIf=\"day.show\">{{day.date}}</span></td>\n          </tr>\n\n          <tr>\n            <td class=\"date\" *ngFor=\"let day of week6\" (click)=\"dateSelect(day.available, day.date)\" [ngClass]=\"{ 'date_available': day.available, 'isToday' : day.isToday }\"><span *ngIf=\"day.show\">{{day.date}}</span></td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showMonthsBtns\">\n  <div class=\"col-sm-4 col-sm-offset-2 next_left\">\n    <img src=\"./assets/images/next1.png\" alt=\"\" class=\"next\" (click)=\"changeMonth('prev')\">\n  </div>\n  \n  <div class=\"col-sm-4 next_right\">\n      <img src=\"./assets/images/next.png\" alt=\"\" class=\"next\" (click)=\"changeMonth('next')\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-date/select-date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_scheduleHelper_service__ = __webpack_require__("../../../../../src/app/services/scheduleHelper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectDateComponent = (function () {
    function SelectDateComponent(_activeRoute, _router, _webSrv, _schedSrv) {
        this._activeRoute = _activeRoute;
        this._router = _router;
        this._webSrv = _webSrv;
        this._schedSrv = _schedSrv;
        this.monthIndex = 0;
        this.showIsToday = true;
        this.showMonthsBtns = true;
        this.ticks = 0;
        this.month = 'September';
        this.year = 2017;
        this.week1 = [];
        this.week2 = [];
        this.week3 = [];
        this.week4 = [];
        this.week5 = [];
        this.week6 = [];
    }
    SelectDateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the query params (trainer_key & trainer_name)
        this._activeRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.trainer_key = params['trainer_key'];
            _this._webSrv.selected_trainer_key = _this.trainer_key;
            _this.trainer_name = params['trainer_name'];
            _this._webSrv.selected_trainer_name = _this.trainer_name;
            if (_this.trainer_key == undefined) {
                _this._router.navigate(['select-a-trainer']);
            }
            else {
                _this._webSrv.getTrainerScheduleTillEOM(_this.trainer_key, _this.monthIndex)
                    .subscribe(function (response) {
                    _this.updateSchedule(JSON.parse(response['_body']));
                });
            }
        });
        // Get the current month
        var date = new Date();
        this.monthIndex = date.getMonth();
        this.month = this._schedSrv.getMonthFromMonthIndex(this.monthIndex);
    };
    SelectDateComponent.prototype.updateSchedule = function (trainer_schedule) {
        console.log(trainer_schedule);
        this._webSrv.trainer_schedule = trainer_schedule;
        var today = new Date();
        var todayDate = today.getDate();
        console.log(todayDate);
        var startDateIndex = trainer_schedule['first_day'];
        var endDateIndex = trainer_schedule['last_day'];
        var scheduleArray = [];
        var date = 1;
        // create an array w/ 42 elems
        var updateDateObj = new Date();
        for (var i = 0; i < 42; i++) {
            var start = false;
            if (i >= startDateIndex) {
                start = true;
            }
            else {
                scheduleArray.push({
                    date: "N/A",
                    show: false,
                    available: false
                });
            }
            if (start && date <= endDateIndex) {
                var tempObj = {
                    date: date,
                    show: true,
                    available: false,
                    isToday: false
                };
                if (trainer_schedule[date] && trainer_schedule[date]['availability'] != false) {
                    tempObj.available = true;
                }
                if (date == todayDate) {
                    var selected_month_indexA = (this.monthIndex - updateDateObj.getMonth());
                    if (selected_month_indexA == 0) {
                        tempObj.isToday = true;
                    }
                }
                scheduleArray.push(tempObj);
                date++;
            }
        }
        for (var i = 0; i < 7; i++) {
            this.week1.push(scheduleArray[i]);
        }
        console.log(this.week1);
        for (var i = 7; i < 14; i++) {
            if (scheduleArray[i]['show']) {
                this.week2.push(scheduleArray[i]);
            }
        }
        console.log(this.week2);
        for (var i = 14; i < 21; i++) {
            if (scheduleArray[i]['show']) {
                this.week3.push(scheduleArray[i]);
            }
        }
        console.log(this.week3);
        for (var i = 21; i < 28; i++) {
            if (scheduleArray[i]['show']) {
                this.week4.push(scheduleArray[i]);
            }
        }
        console.log(this.week4);
        for (var i = 28; i < 35; i++) {
            if (scheduleArray[i] && scheduleArray[i]['show']) {
                this.week5.push(scheduleArray[i]);
            }
        }
        console.log(this.week5);
        for (var i = 35; i < 42; i++) {
            if (scheduleArray[i] && scheduleArray[i]['show']) {
                this.week6.push(scheduleArray[i]);
            }
        }
        console.log(this.week6);
        // console.log(scheduleArray);
    };
    SelectDateComponent.prototype.dateSelect = function (available_boolean, selected_date) {
        if (available_boolean) {
            this._webSrv.selected_month = this.month;
            this._webSrv.selected_year = this.year;
            this._webSrv.selected_date = selected_date;
            this._webSrv.selected_month_index = this.monthIndex;
            this._router.navigate(['select-time']);
        }
        else {
            alert("This date is not available");
        }
    };
    SelectDateComponent.prototype.changeMonth = function (direction) {
        var _this = this;
        this.disableChange();
        if (direction == "next") {
            if (this.monthIndex < 11) {
                // Increase month index and change month name
                this.monthIndex++;
                this.month = this._schedSrv.getMonthFromMonthIndex(this.monthIndex);
                // clear weeks' arrays
                this.clearWeeks();
                // Update the calendar
                var date2 = new Date();
                var selected_month_index = (this.monthIndex - date2.getMonth());
                console.log("now requested this month index: ", selected_month_index);
                this._webSrv.getTrainerScheduleTillEOM(this.trainer_key, selected_month_index)
                    .subscribe(function (response) {
                    _this.updateSchedule(JSON.parse(response['_body']));
                });
            }
            else {
                // Increase month index and change month name
                this.monthIndex = 0;
                this.month = this._schedSrv.getMonthFromMonthIndex(this.monthIndex);
                this.year++;
                // clear weeks' arrays
                this.clearWeeks();
                // Update the calendar
                var date3 = new Date();
                var selected_month_index2 = (this.monthIndex - date3.getMonth());
                console.log("now requested this month index: ", selected_month_index2);
                this._webSrv.getTrainerScheduleTillEOM(this.trainer_key, selected_month_index2)
                    .subscribe(function (response) {
                    _this.updateSchedule(JSON.parse(response['_body']));
                });
            }
        }
        else {
            var date = new Date();
            if (this.monthIndex == date.getMonth()) {
                alert("Can't go back any further");
            }
            else {
                if (this.monthIndex == 1) {
                    this.monthIndex = 12;
                    this.month = this._schedSrv.getMonthFromMonthIndex(this.monthIndex);
                    this.year--;
                    // clear weeks' arrays
                    this.clearWeeks();
                    // Update the calendar
                    var date4 = new Date();
                    var selected_month_index3 = (this.monthIndex - date4.getMonth());
                    console.log("now requested this month index: ", selected_month_index3);
                    this._webSrv.getTrainerScheduleTillEOM(this.trainer_key, selected_month_index3)
                        .subscribe(function (response) {
                        _this.updateSchedule(JSON.parse(response['_body']));
                    });
                }
                else {
                    this.monthIndex--;
                    this.month = this._schedSrv.getMonthFromMonthIndex(this.monthIndex);
                    // clear weeks' arrays
                    this.clearWeeks();
                    // Update the calendar
                    var date5 = new Date();
                    var selected_month_index4 = (this.monthIndex - date5.getMonth());
                    console.log("now requested this month index: ", selected_month_index4);
                    this._webSrv.getTrainerScheduleTillEOM(this.trainer_key, selected_month_index4)
                        .subscribe(function (response) {
                        _this.updateSchedule(JSON.parse(response['_body']));
                    });
                }
            }
        }
    };
    SelectDateComponent.prototype.disableChange = function () {
        var _this = this;
        this.showMonthsBtns = false;
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].timer(2000);
        timer.subscribe(function (t) {
            _this.showMonthsBtns = true;
        });
    };
    SelectDateComponent.prototype.clearWeeks = function () {
        this.week1 = [];
        this.week2 = [];
        this.week3 = [];
        this.week4 = [];
        this.week5 = [];
        this.week6 = [];
    };
    return SelectDateComponent;
}());
SelectDateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-schedule',
        template: __webpack_require__("../../../../../src/app/routeComponents/select-date/select-date.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routeComponents/select-date/select-date.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_scheduleHelper_service__["a" /* ScheduleHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_scheduleHelper_service__["a" /* ScheduleHelperService */]) === "function" && _d || Object])
], SelectDateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=select-date.component.js.map

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-time/select-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".available_times {\n  width: 50%;\n  margin-left: 25%; }\n  .available_times .slot {\n    padding-top: 20px;\n    font-size: 17px;\n    cursor: pointer; }\n    .available_times .slot span {\n      color: #2c81a9;\n      background: #ececec;\n      padding: 5px 10px;\n      border-radius: 5px; }\n\n@media (max-width: 500px) {\n  .available_times {\n    width: 80%;\n    margin-left: 10%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-time/select-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n      <h3>Choose A Time</h3>\n      \n      <h5>{{selected_month}} {{selected_date}}, {{selected_year}}</h5>\n\n      <br>\n\n      <table class=\"available_times\">\n        <tbody>\n          <tr class=\"time_slots_row\" *ngFor=\"let slots_row of avail_slots_html\">\n            <td class=\"slot\" *ngFor=\"let slot of slots_row\" (click)=\"selectTimeSlot(slot)\"><span>{{slot.startTimeHuman}}</span></td>\n          </tr>\n\n        </tbody>\n      </table>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-time/select-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectTimeComponent = (function () {
    function SelectTimeComponent(_router, _webSrv) {
        this._router = _router;
        this._webSrv = _webSrv;
        this.selected_date = 12;
        this.selected_month = 'Sept';
        this.selected_year = 2017;
        this.trainer_availability_arr = [];
        this.trainer_availability_obj = {};
        this.trainer_appointments_arr = [];
        this.trainer_appointments_obj = {};
        this.available_slots = [];
        this.avail_slots_html = [];
        this.avail_slots_row = [];
    }
    SelectTimeComponent.prototype.ngOnInit = function () {
        this.selected_date = this._webSrv.selected_date;
        this.selected_month = this._webSrv.selected_month;
        this.selected_year = this._webSrv.selected_year;
        this.trainer_schedule = this._webSrv.trainer_schedule;
        if (this.selected_date == null) {
            this._router.navigate(['select-a-trainer']);
        }
        else {
            // Get availability blocks (30 min)
            this.trainer_availability_raw = this.trainer_schedule[this.selected_date]['availability'];
            for (var availability_block_raw in this.trainer_availability_raw) {
                var numOfBlocks = (this.trainer_availability_raw[availability_block_raw]['end'] - this.trainer_availability_raw[availability_block_raw]['start']) / 1800;
                for (var i = 0; i < numOfBlocks; i++) {
                    this.trainer_availability_arr.push(this.trainer_availability_raw[availability_block_raw]['start'] + (1800 * i));
                    this.trainer_availability_obj[this.trainer_availability_raw[availability_block_raw]['start'] + (1800 * i)] = true;
                }
            }
            // Get appointment blocks
            this.trainer_appointments_raw = this.trainer_schedule[this.selected_date]['apointments'];
            for (var appointment_block_raw in this.trainer_appointments_raw) {
                var numDeBlocks = ((this.trainer_appointments_raw[appointment_block_raw]['end'] - this.trainer_appointments_raw[appointment_block_raw]['start']) / 1800);
                for (var i = 0; i < numDeBlocks; i++) {
                    this.trainer_appointments_arr.push(this.trainer_appointments_raw[appointment_block_raw]['start'] + (1800 * i));
                    this.trainer_appointments_obj[this.trainer_appointments_raw[appointment_block_raw]['start'] + (1800 * i)] = true;
                }
            }
            // Create an array of available appointment time slot objects
            console.log(this.trainer_availability_obj);
            console.log(this.trainer_appointments_obj);
            console.log(Object.keys(this.trainer_availability_obj));
            var trainer_avail_obj_KEYS = Object.keys(this.trainer_availability_obj);
            for (var i = 0; i < trainer_avail_obj_KEYS.length; i++) {
                // CHECK if there is no appointment during slot being checked AND if there's not apt in the slot right after
                if (this.trainer_appointments_obj[parseInt(trainer_avail_obj_KEYS[i])] == null && this.trainer_appointments_obj[parseInt(trainer_avail_obj_KEYS[i + 1])] == null) {
                    // CHECK if the slot right after actually exists as open
                    if ((parseInt(trainer_avail_obj_KEYS[i + 1]) - parseInt(trainer_avail_obj_KEYS[i])) < 1801) {
                        var startHumanTime = parseInt(trainer_avail_obj_KEYS[i]) / 1800;
                        var availSlotObj = {
                            startTimeMs: trainer_avail_obj_KEYS[i],
                            startTimeHuman: this.getHumanTime(trainer_avail_obj_KEYS[i])
                        };
                        this.available_slots.push(availSlotObj);
                    }
                }
            }
            console.log(this.available_slots);
            var slots_added_counter = 0;
            for (var slot in this.available_slots) {
                if (this.avail_slots_row.length < 3) {
                    this.avail_slots_row.push(this.available_slots[slot]);
                    slots_added_counter++;
                }
                else {
                    this.avail_slots_html.push(this.avail_slots_row);
                    this.avail_slots_row = [];
                    this.avail_slots_row.push(this.available_slots[slot]);
                    slots_added_counter++;
                }
                if (slots_added_counter == this.available_slots.length) {
                    this.avail_slots_html.push(this.avail_slots_row);
                }
            }
        }
    };
    SelectTimeComponent.prototype.selectTimeSlot = function (slot) {
        console.log(slot);
        this._webSrv.selected_slot = slot;
        this._router.navigate(['input-details']);
    };
    // HELPERs
    SelectTimeComponent.prototype.getHumanTime = function (time) {
        var hours, min, period;
        hours = Math.floor(parseInt(time) / 3600);
        if (parseInt(time) / 3600 > hours) {
            min = ':30 ';
        }
        else {
            min = ':00 ';
        }
        if (hours > 12) {
            hours = hours - 12;
            period = 'pm';
        }
        else {
            period = 'am';
        }
        return (hours + min + period);
    };
    return SelectTimeComponent;
}());
SelectTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-select-time',
        template: __webpack_require__("../../../../../src/app/routeComponents/select-time/select-time.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routeComponents/select-time/select-time.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */]) === "function" && _b || Object])
], SelectTimeComponent);

var _a, _b;
//# sourceMappingURL=select-time.component.js.map

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-trainer/select-trainer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\n    max-width: 240px;\n}\n\nh3 {\n    margin-top: 1em;\n}\n\n.trainer {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.logo {\n    width: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-trainer/select-trainer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n  - Header w/ name of biz\n  - Img of biz logo\n  - List of trainers (as buttons)\n -->\n<div class=\"container\">\n  <div class=\"row header text-center\">\n    <div class=\"col-sm-10 col-sm-offset-1\">\n      <img class=\"logo\" src=\"{{env.org_logo_url}}\" alt=\"\">\n      <h3 class=\"partner_name\">{{env.org_name}}</h3>\n      <h5 class=\"partner_city\">{{env.org_city}}, {{env.org_region}}</h5>\n      <p  class=\"partner_descrip\">{{env.org_tagline}}</p>\n      <br>\n\n      <div class=\"trainers\">\n        <button class=\"btn trainer\" *ngFor=\"let trainer of trainers_arr\" routerLink=\"/select-date\" [queryParams]=\"{ trainer_key: trainer.userKey, trainer_name: trainer.firstName }\">\n          {{trainer.firstName}} {{trainer.lastName}}\n        </button>\n      </div> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routeComponents/select-trainer/select-trainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectTrainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectTrainerComponent = (function () {
    function SelectTrainerComponent(_webSrv, _router) {
        this._webSrv = _webSrv;
        this._router = _router;
        this.trainers_arr = [];
    }
    SelectTrainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get & set copy
        this.env = this._webSrv.environment_object;
        this.trainers = this._webSrv.getTrainers();
        this.trainers.subscribe(function (trainers) {
            var trainserObj = JSON.parse(trainers['_body']);
            _this.trainers_arr = [];
            for (var key in trainserObj) {
                _this.trainers_arr.push(trainserObj[key]);
            }
            console.log(_this.trainers_arr);
            _this._webSrv.trainers_arr = _this.trainers_arr;
        });
    };
    return SelectTrainerComponent;
}());
SelectTrainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-select-trainer',
        template: __webpack_require__("../../../../../src/app/routeComponents/select-trainer/select-trainer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routeComponents/select-trainer/select-trainer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SelectTrainerComponent);

var _a, _b;
//# sourceMappingURL=select-trainer.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/scheduleHelper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleHelperService = (function () {
    function ScheduleHelperService(_http) {
        this._http = _http;
    }
    ScheduleHelperService.prototype.getMonthFromMonthIndex = function (month_index) {
        switch (month_index) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
            default:
                return false;
        }
    };
    ScheduleHelperService.prototype.getDayFromDayIndex = function (day_index) {
        switch (day_index) {
            case 0:
                return 'sunday';
            case 1:
                return 'monday';
            case 2:
                return 'tuesday';
            case 3:
                return 'wednesday';
            case 4:
                return 'thursday';
            case 5:
                return 'friday';
            case 6:
                return 'saturday';
            default:
                return false;
        }
    };
    return ScheduleHelperService;
}());
ScheduleHelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ScheduleHelperService);

var _a;
//# sourceMappingURL=scheduleHelper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebService = (function () {
    function WebService(_http) {
        this._http = _http;
        this.trainers_arr = null;
        this.selected_date = null;
        this.selected_month = null;
        this.selected_month_index = null;
        this.selected_year = null;
        this.selected_trainer_key = null;
        this.selected_trainer_name = null;
        this.trainer_schedule = null;
        this.selected_slot = null;
        this.baseURL = '';
        this.environment_object = null;
        this.submissionResponse = null;
        this.environment_object = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
        this.baseURL = this.environment_object['base_url'];
    }
    WebService.prototype.selectTrainerCall = function (trainer) {
        return "Saved trainer " + trainer;
    };
    WebService.prototype.getTrainers = function () {
        return this._http.get(this.baseURL + '/getTrainers')
            .map(function (res) { return res; });
    };
    WebService.prototype.getTrainerScheduleTillEOM = function (trainer_key, month) {
        return this._http.get(this.baseURL + '/get_schedule_till_end_of_month2?trainer_key=' + trainer_key + '&month=' + month)
            .map(function (res) { return res; });
    };
    WebService.prototype.submitAnAppointment = function (appointmentObj) {
        return this._http.post(this.baseURL + '/submitAppointment', appointmentObj)
            .map(function (res) { return res; });
    };
    return WebService;
}());
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebService);

var _a;
//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    org_name: 'Rise Fitness',
    org_tagline: 'Toronto based fitness and performance training.',
    org_city: 'Toronto',
    org_region: 'ON',
    org_logo_url: './assets/images/rise_logo.png',
    base_url: 'https://us-central1-rise-fitness.cloudfunctions.net'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
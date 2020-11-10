(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/tGE":
/*!**********************************!*\
  !*** ./src/app/models/client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
class Client {
    constructor() {
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fernando\Documents\Angular 9\ProyectoGym\gym\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class HomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 388, vars: 0, consts: [["lang", "en"], ["id", "content-wrapper"], [1, "header", "header--bg"], [1, "container"], [1, "row"], [1, "col-lg-6"], ["src", "../../../assets/images/running-man.png", "alt", "", 1, "img-responsive"], [1, "col-lg-6", "header__content"], [1, "title"], [1, "title-style"], ["target", "_blank", "href", "https://saludextrema.org/2016/01/23/el-mejor-ejercicio-que-existe/", 1, "header__button"], [1, "steps"], [1, "page-section", "text-center"], [1, "page-section__title"], [1, "page-section__title-style"], [1, "first-line"], [1, "second-line"], [1, "page-section__subtitle"], [1, "col-md-4"], [1, "text-center", "steps__single", "steps__single-first"], ["src", "../../../assets/images/step1.png", "alt", ""], [1, "text-center", "steps__single"], ["src", "../../../assets/images/step2.png", "alt", ""], [1, "text-center", "steps__single", "steps__single-last"], ["src", "../../../assets/images/step3.png", "alt", ""], ["href", "#", 1, "button"], [1, "video", "video--bg"], [1, "page-section"], [1, "col-md-7", "video__left"], ["data-toggle", "modal", "data-target", "#myModal", "href", "#"], [1, "material-icons"], [1, "col-md-5"], [1, "video__right", "text-center"], [1, "video__title"], [1, "video__title-style"], ["href", "#", 1, "button", "button--white"], ["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/wKtPBOb80II?autoplay=0", "frameborder", "0", "allowfullscreen", "", "id", "video", "allowscriptaccess", "always", 1, "embed-responsive-item"], [1, "sponsors", "sponsors--bg"], [1, "col-lg-2", "sponsors__single"], ["src", "../../../assets/images/sponsors1.png", "alt", ""], ["src", "../../../assets/images/sponsors2.png", "alt", ""], ["src", "../../../assets/images/sponsors3.png", "alt", ""], ["src", "../../../assets/images/sponsors4.png", "alt", ""], ["src", "../../../assets/images/sponsors5.png", "alt", ""], ["src", "../../../assets/images/sponsors6.png", "alt", ""], [1, "testimonial"], [1, "text-center"], [1, "testimonial__title-style"], ["href", "#"], [1, "col-md-8"], [1, "accordion-group"], ["id", "one", 1, "collapse", "in", "indent"], [1, "collapse__wrapper"], [1, "bio", "bio-1"], [1, "star"], [1, "paragraph"], ["id", "two", 1, "collapse"], [1, "bio", "bio-2"], ["id", "three", 1, "collapse"], [1, "bio", "bio-3"], ["id", "four", 1, "collapse"], [1, "bio", "bio-4"], [1, "col-md-4", "testimonial-right", "open-default"], ["data-toggle", "collapse", "data-target", "#one", 1, "button-testimonial", "button-testimonial-1"], [1, "bio"], ["data-toggle", "collapse", "data-target", "#two", 1, "button-testimonial", "button-testimonial-2"], ["data-toggle", "collapse", "data-target", "#three", 1, "button-testimonial", "button-testimonial-3"], ["data-toggle", "collapse", "data-target", "#four", 1, "button-testimonial", "button-testimonial-4"], [1, "team", "team--bg"], [1, "team__title-style"], [1, "row", "gutters-80"], [1, "thumbnail", "team__single"], [1, "bio", "text-center"], ["src", "../../../assets/images/team1.png", "alt", ""], [1, "caption"], [1, "social-icons"], [1, "flaticon-facebook-letter-logo"], [1, "flaticon-twitter-logo-silhouette"], [1, "flaticon-google-plus"], [1, "flaticon-pinterest-logo"], ["src", "../../../assets/images/team2.png", "alt", ""], ["src", "../../../assets/images/team3.png", "alt", ""], [1, "form", "form--bg"], [1, "page-section__title", "page-section__title--white"], [1, "form__title-style"], [1, "page-section__subtitle", "page-section__subtitle--white"], ["action", "#"], [1, "form-group"], ["type", "text", "placeholder", "Name", 1, "form-control"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["rows", "5", "placeholder", "Message", 1, "form-control"], [1, "col-md-6", "checkbox"], ["type", "checkbox", "id", "checkbox-1"], ["for", "checkbox-1"], [1, "col-md-6", "form-button"], ["type", "submit", "value", "SEND", 1, "button--form"], [1, "footer", "footer--bg"], [1, "col-md-4", "footer__left"], [1, "navbar-brand"], [1, "col-md-2", "footer__link"], [1, "col-md-4", "footer__social-icons"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Esfuerzo Vital ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "El mejor ejercicio es el que haces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Three simple steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Explora programas de entrenamiento, deporte o ejercicio que, ante todo, faciliten estas tres cosas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ganar inercia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Convertirlo en un h\u00E1bito sostenible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Modificar tu autoconcepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "TRY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "play_circle_filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Watch the video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "TRY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "iframe", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Lorem ipsum dolor sit amet, consectetur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " adipisicing elit, sed do eiusmod tempor incididunt ut labore et ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Tyrion Lannister");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sansa Stark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Khal Drogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Jon Snow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Tyrion Lannister");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Sansa Stark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Khal Drogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Jon Snow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "section", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Our team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Kabbo Liate, Bangladesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "UX/UI Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "John Doe, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "UX/UI Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Johnny Depp, Singapoor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "UX/UI Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 86);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "section", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "form", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "textarea", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Subscribe to newslatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "footer", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "\u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " Moya Fernando 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Link goes here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Another Link Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Your Text Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "lorem ipsum dolor amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Link goes here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Another Link Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Your Text Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "lorem ipsum dolor amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["@font-face {\n  font-family: \"Geometria\";\n  src: url('Geometria.ttf');\n}\n@font-face {\n  font-family: \"Geometria-Bold\";\n  src: url('Geometria-Bold.ttf');\n}\n@font-face {\n  font-family: \"Geometria-Medium\";\n  src: url('geometria-medium.ttf');\n}\n@media (min-width: 1400px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1370px;\n    margin: 0 auto;\n  }\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: 0;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\ninput[type=submit][_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.ttf');\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  font-family: \"Geometria\";\n  line-height: 1.8;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-family: \"Geometria-Bold\";\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Geometria\";\n  font-weight: bold;\n}\n.navbar-toggle[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background: transparent;\n}\n.gutters-80.row[_ngcontent-%COMP%] {\n  margin-right: -40px;\n  margin-left: -40px;\n}\n@media (max-width: 1199px) {\n  .gutters-80.row[_ngcontent-%COMP%] {\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n}\n.gutters-80[_ngcontent-%COMP%]    > [class^=col-][_ngcontent-%COMP%] {\n  padding-right: 40px;\n  padding-left: 40px;\n}\n@media (max-width: 1199px) {\n  .gutters-80[_ngcontent-%COMP%]    > [class^=col-][_ngcontent-%COMP%] {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n}\n.header--bg[_ngcontent-%COMP%] {\n  background: url('header-background.png') left center no-repeat;\n  background-size: 100% 100%;\n}\n@media (max-width: 1399px) {\n  .header--bg[_ngcontent-%COMP%] {\n    background-size: cover;\n  }\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  background: transparent;\n}\n@media (min-width: 1000px) {\n  .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n\n  .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-right: 0;\n  }\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Geometria-Medium\";\n  font-size: 15px;\n  color: #b0bec5;\n}\n@media (min-width: 1390px) {\n  .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #0f81f8;\n  }\n}\n@media (max-width: 900px) {\n  .navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n}\n.header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 120px;\n}\n.header__content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 55px;\n  background: -webkit-linear-gradient(#2086f7, #2ba8f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  line-height: 1.3;\n  padding-top: 25px;\n  margin-bottom: 30px;\n}\n.header__content[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%] {\n  background: url('title-shape.png') left center no-repeat;\n  padding: 0px 135px;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.header__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #08294c;\n  font-weight: bold;\n  line-height: 2;\n  margin-bottom: 50px;\n}\n.header__button[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: \"Geometria-Medium\";\n  font-size: 16px;\n  color: #0f81f8;\n  padding: 13px 50px;\n  border: 1px solid #1a82f8;\n  border-radius: 30px;\n  position: relative;\n  background-color: transparent;\n  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.3);\n  margin-right: 20px;\n}\n@media (max-width: 1199px) {\n  .header__button[_ngcontent-%COMP%] {\n    border-color: gray;\n    color: #fff;\n    margin-bottom: 20px;\n  }\n}\n.header__button[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: inherit;\n  border: inherit;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n}\n.header__button[_ngcontent-%COMP%]:hover {\n  background-color: #0f81f8;\n  color: #fff;\n  text-shadow: none;\n  border: 0;\n  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  background: url('logo.png') left center no-repeat;\n  padding: 0px 90px;\n}\n.page-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 120px;\n}\n.page-section__title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #1680f8;\n  margin-bottom: 5px;\n}\n.page-section__title--white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.page-section__subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #08294c;\n  margin-bottom: 80px;\n}\n.page-section__subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Geometria-Medium\";\n  color: #1780f8;\n}\n.page-section__subtitle--white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.page-section__title-style[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.page-section__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #1680f8;\n  border-bottom: 3px solid #1680f8;\n  padding: 0px 120px;\n  border-radius: 5px;\n  position: relative;\n}\n.page-section__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  right: -17px;\n  top: -4px;\n  background-color: #1680f8;\n}\n.page-section__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #1680f8;\n  border-bottom: 3px solid #1680f8;\n  padding: 0px 40px;\n  border-radius: 5px;\n  position: relative;\n  margin-left: 38px;\n}\n.page-section__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  left: -15px;\n  top: -4px;\n  background-color: #1680f8;\n}\n.steps__single[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.steps__single[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.steps__single[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 170px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.steps__single-first[_ngcontent-%COMP%] {\n  float: left;\n}\n@media (max-width: 991px) {\n  .steps__single-first[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n.steps__single-last[_ngcontent-%COMP%] {\n  float: right;\n}\n@media (max-width: 991px) {\n  .steps__single-last[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n.button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 55px;\n  font-family: \"Geometria-Medium\";\n  font-size: 16px;\n  color: #fff;\n  border-radius: 30px;\n  background-color: #1680f8;\n  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);\n}\n.button--white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #0f81f8;\n}\n.button--form[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 70px;\n  border-radius: 30px;\n  border: 0;\n  font-family: \"Geometria-Medium\";\n  background-color: #fff;\n  font-size: 16px;\n  color: #0f81f8;\n  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);\n}\n.video--bg[_ngcontent-%COMP%] {\n  background-color: #187ded;\n}\n.video__left[_ngcontent-%COMP%] {\n  background: url('video-player-bg.png') left center no-repeat;\n  height: 450px;\n  background-size: cover;\n}\n.video__left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #0f81f8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.video__title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #ffffff;\n}\n.video__title-style[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.video__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  padding: 0px 100px;\n  border-radius: 5px;\n  position: relative;\n}\n.video__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  right: -17px;\n  top: -4px;\n  background-color: #fff;\n}\n.video__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  padding: 0px 40px;\n  border-radius: 5px;\n  position: relative;\n  margin-left: 38px;\n}\n.video__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  left: -15px;\n  top: -4px;\n  background-color: #fff;\n}\n.video__right[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.video__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #fff;\n  max-width: 350px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 40px;\n}\n#myModal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.8);\n}\n#myModal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  background: #ff4086 !important;\n  z-index: 890;\n  color: #fff;\n  font-size: 24px;\n  margin: 0;\n  outline: none;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  text-shadow: none;\n  top: 0;\n  width: 28px;\n  height: 28px;\n}\n#myModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#myModal[_ngcontent-%COMP%]   .embed-responsive[_ngcontent-%COMP%] {\n  height: 489px;\n  padding: 0;\n  overflow: hidden;\n}\n.sponsors--bg[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.sponsors__single[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 1199px) {\n  .sponsors__single[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.testimonial__title-style[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.testimonial__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #1680f8;\n  border-bottom: 3px solid #1680f8;\n  padding: 0px 70px;\n  border-radius: 5px;\n  position: relative;\n}\n.testimonial__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  right: -17px;\n  top: -4px;\n  background-color: #1680f8;\n}\n.testimonial__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #1680f8;\n  border-bottom: 3px solid #1680f8;\n  padding: 0px 25px;\n  border-radius: 5px;\n  position: relative;\n  margin-left: 38px;\n}\n.testimonial__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  left: -15px;\n  top: -4px;\n  background-color: #1680f8;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0;\n  text-align: left;\n  display: block;\n  padding-left: 90px;\n  margin-top: 25px;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #08294c;\n  margin-bottom: 5px;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #08294c;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial-1[_ngcontent-%COMP%] {\n  background: url('testimonial1.png') left center no-repeat;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial-2[_ngcontent-%COMP%] {\n  background: url('testimonial2.png') left center no-repeat;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial-3[_ngcontent-%COMP%] {\n  background: url('testimonial3.png') left center no-repeat;\n}\n.testimonial[_ngcontent-%COMP%]   .button-testimonial-4[_ngcontent-%COMP%] {\n  background: url('testimonial4.png') left center no-repeat;\n}\n.testimonial[_ngcontent-%COMP%]   .collapsed[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.09);\n  border-radius: 7px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #08294c;\n  line-height: 2;\n  padding-bottom: 90px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #08294c;\n  margin-bottom: 5px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #08294c;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .bio-1[_ngcontent-%COMP%] {\n  background: url('testimonial1.png') left center no-repeat;\n  padding: 5px 100px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .bio-2[_ngcontent-%COMP%] {\n  background: url('testimonial2.png') left center no-repeat;\n  padding: 5px 100px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .bio-3[_ngcontent-%COMP%] {\n  background: url('testimonial3.png') left center no-repeat;\n  padding: 5px 100px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .bio-4[_ngcontent-%COMP%] {\n  background: url('testimonial4.png') left center no-repeat;\n  padding: 5px 100px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.testimonial[_ngcontent-%COMP%]   .collapse__wrapper[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #0f81f8;\n  margin-right: 5px;\n}\n.testimonial-right[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  max-height: 470px;\n  overflow-y: scroll;\n}\n@media (max-width: 991px) {\n  .testimonial-right[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n.collapse.in[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n  border-left: 25px solid #fff;\n  position: absolute;\n  top: 40px;\n  right: -10px;\n  filter: drop-shadow(3px 0px 2px rgba(0, 0, 0, 0.07));\n}\n@media (max-width: 991px) {\n  .collapse.in[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n.team--bg[_ngcontent-%COMP%] {\n  background-color: #fcfcfc;\n}\n.team__title-style[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.team__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #1680f8;\n  border-bottom: 3px solid #1680f8;\n  padding: 0px 50px;\n  border-radius: 5px;\n  position: relative;\n}\n.team__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  right: -17px;\n  top: -4px;\n  background-color: #1680f8;\n}\n.team__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #1680f8;\n  border-bottom: 3px solid #1680f8;\n  padding: 0px 18px;\n  border-radius: 5px;\n  position: relative;\n  margin-left: 38px;\n}\n.team__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  left: -15px;\n  top: -4px;\n  background-color: #1680f8;\n}\n.team__single[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 0;\n  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);\n  padding: 30px 25px;\n}\n@media (max-width: 991px) {\n  .team__single[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.team__single[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n}\n.team__single[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #08294c;\n}\n.team__single[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #08294c;\n}\n.team__single[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #08294c;\n  line-height: 1.8;\n  margin-bottom: 25px;\n}\n.team__single[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n  vertical-align: middle;\n}\n.team__single[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.team__single[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [class^=flaticon-][_ngcontent-%COMP%]:before, .team__single[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [class*=\" flaticon-\"][_ngcontent-%COMP%]:before {\n  margin: 0;\n  width: 22px;\n  height: 22px;\n  display: block;\n  border-radius: 50%;\n  font-size: 12px;\n  padding-top: 2px;\n  text-align: center;\n  background-color: #dbe4e8;\n  color: #fff;\n}\n.form--bg[_ngcontent-%COMP%] {\n  background: url('form-background.png') left center no-repeat;\n  background-size: cover;\n}\n.form__title-style[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.form__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  padding: 0px 58px;\n  border-radius: 5px;\n  position: relative;\n}\n.form__title-style[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  right: -17px;\n  top: -4px;\n  background-color: #fff;\n}\n.form__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  padding: 0px 20px;\n  border-radius: 5px;\n  position: relative;\n  margin-left: 38px;\n}\n.form__title-style[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  left: -15px;\n  top: -4px;\n  background-color: #fff;\n}\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 540px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: transparent;\n  outline-style: none;\n  outline-offset: 0;\n  box-shadow: none;\n  border-bottom: 1px solid #c1defd;\n  border-radius: 0;\n  color: #fff;\n  padding: 0px 10px;\n}\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #fff;\n  padding-left: 5px;\n  position: relative;\n  bottom: 2px;\n}\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 991px) {\n  .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-top: 20px;\n  }\n}\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  font-size: 16px;\n  color: #fff;\n}\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  font-size: 16px;\n  color: #fff;\n}\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  \n  font-size: 16px;\n  color: #fff;\n}\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  font-size: 16px;\n  color: #fff;\n}\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  font-size: 16px;\n  color: #fff;\n}\n.footer--bg[_ngcontent-%COMP%] {\n  background-color: #102f4f;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.footer__left[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  display: block;\n  float: none;\n  margin-top: 10px;\n}\n.footer__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n}\n.footer__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8392a4;\n}\n.footer__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.footer__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Geometria-Medium\";\n  font-size: 16px;\n  color: #254b74;\n}\n.footer__social-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 60px;\n}\n.footer__social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n}\n.footer__social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.footer__social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [class^=flaticon-][_ngcontent-%COMP%]:before, .footer__social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [class*=\" flaticon-\"][_ngcontent-%COMP%]:before {\n  margin: 0;\n  width: 22px;\n  height: 22px;\n  display: block;\n  border-radius: 50%;\n  font-size: 12px;\n  text-align: center;\n  background-color: #4c627a;\n  color: #102f4f;\n}\n.footer__social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBRUE7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FBQUY7QUFHQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQUZGO0FBQ0Y7QUFLQTs7RUFFRSxxQkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSEY7QUFNQTs7RUFFRSxxQkFBQTtFQUNBLFVBQUE7QUFIRjtBQU1BO0VBQ0UscUJBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtBQUhGO0FBTUE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUhGO0FBTUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BOztFQUVFLDZCQUFBO0FBSkY7QUFPQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQU9BO0VBQ0Usc0JBQUE7QUFKRjtBQU9BO0VBQ0Usc0JBQUE7QUFKRjtBQU9BOztFQUVFLHVCQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUxGO0FBUUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRSw4REFBQTtFQUVBLDBCQUFBO0FBUEY7QUFVQTtFQUNFO0lBQ0Usc0JBQUE7RUFQRjtBQUNGO0FBVUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBUkY7QUFVQTtFQUNFO0lBQ0UsbUJBQUE7RUFQRjs7RUFTQTtJQUNFLGdCQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVBGO0FBVUE7RUFDRTtJQUNFLGNBQUE7RUFQRjtBQUNGO0FBVUE7RUFDRTtJQUNFLHNCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQVRGO0FBWUE7RUFDRSxlQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVEY7QUFZQTtFQUNFLHdEQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBVkY7QUFhQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFWRjtBQWFBO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQWFBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQVZGO0FBQ0Y7QUFhQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxtREFBQTtBQVhGO0FBY0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFFQSwyQ0FBQTtBQVhGO0FBY0E7RUFDRSxpREFBQTtFQUNBLGlCQUFBO0FBWEY7QUFjQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFYRjtBQWNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVhGO0FBY0E7RUFDRSxXQUFBO0FBWEY7QUFjQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0FBWEY7QUFjQTtFQUNFLFdBQUE7QUFYRjtBQWNBO0VBQ0UsbUJBQUE7QUFYRjtBQWNBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWEY7QUFjQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFYRjtBQWNBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFYRjtBQWNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQVhGO0FBY0E7RUFDRSxtQkFBQTtBQVhGO0FBY0E7RUFDRSxtQkFBQTtBQVhGO0FBY0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFYRjtBQWNBO0VBQ0UsV0FBQTtBQVhGO0FBY0E7RUFDRTtJQUNFLFdBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRSxZQUFBO0FBWkY7QUFlQTtFQUNFO0lBQ0UsV0FBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLDJDQUFBO0FBYkY7QUFnQkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUFiRjtBQWdCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSwyQ0FBQTtBQWJGO0FBZ0JBO0VBQ0UseUJBQUE7QUFiRjtBQWdCQTtFQUNFLDREQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBZEY7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSxnQ0FBQTtBQWRGO0FBaUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFkRjtBQWlCQTtFQUNFLG1CQUFBO0FBZEY7QUFpQkE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFkRjtBQWlCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFkRjtBQWlCQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBZEY7QUFpQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBZEY7QUFpQkE7RUFDRSxlQUFBO0FBZEY7QUFpQkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWlCQTtFQUNFLDhCQUFBO0FBZEY7QUFpQkE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZEY7QUFpQkE7RUFDRSxVQUFBO0FBZEY7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBZEY7QUFpQkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFkRjtBQWlCQTtFQUNFLGtCQUFBO0FBZEY7QUFpQkE7RUFDRTtJQUNFLG1CQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFLG1CQUFBO0FBZkY7QUFrQkE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFmRjtBQWtCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFmRjtBQWtCQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBZkY7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBZkY7QUFrQkE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZkY7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZkY7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWZGO0FBa0JBO0VBQ0UseURBQUE7QUFmRjtBQW1CQTtFQUNFLHlEQUFBO0FBaEJGO0FBb0JBO0VBQ0UseURBQUE7QUFqQkY7QUFxQkE7RUFDRSx5REFBQTtBQWxCRjtBQXNCQTtFQUNFLFlBQUE7QUFuQkY7QUFzQkE7RUFDRSxrQkFBQTtFQUVBLGdEQUFBO0VBQ0Esa0JBQUE7QUFuQkY7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQW5CRjtBQXNCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFuQkY7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQW5CRjtBQXNCQTtFQUNFLHlEQUFBO0VBRUEsa0JBQUE7QUFwQkY7QUF1QkE7RUFDRSx5REFBQTtFQUVBLGtCQUFBO0FBckJGO0FBd0JBO0VBQ0UseURBQUE7RUFFQSxrQkFBQTtBQXRCRjtBQXlCQTtFQUNFLHlEQUFBO0VBRUEsa0JBQUE7QUF2QkY7QUEwQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBdkJGO0FBMEJBO0VBQ0UscUJBQUE7QUF2QkY7QUEwQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBdkJGO0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdkJGO0FBMEJBO0VBQ0U7SUFDRSxnQkFBQTtFQXZCRjtBQUNGO0FBMEJBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLG9EQUFBO0FBeEJGO0FBMkJBO0VBQ0U7SUFDRSxhQUFBO0VBeEJGO0FBQ0Y7QUEyQkE7RUFDRSx5QkFBQTtBQXpCRjtBQTRCQTtFQUNFLG1CQUFBO0FBekJGO0FBNEJBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBekJGO0FBNEJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQXpCRjtBQTRCQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBekJGO0FBNEJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQXpCRjtBQTRCQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLCtDQUFBO0VBQ0Esa0JBQUE7QUF6QkY7QUE0QkE7RUFDRTtJQUNFLG1CQUFBO0VBekJGO0FBQ0Y7QUE0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBMUJGO0FBNkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUExQkY7QUE2QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTFCRjtBQTZCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTFCRjtBQTZCQTtFQUNFLGNBQUE7QUExQkY7QUE2QkE7O0VBRUUsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUExQkY7QUE2QkE7RUFDRSw0REFBQTtFQUVBLHNCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsbUJBQUE7QUEzQkY7QUE4QkE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEzQkY7QUE4QkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBM0JGO0FBOEJBO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEzQkY7QUE4QkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsbUJBQUE7QUEzQkY7QUE4QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTNCRjtBQThCQTtFQUNFLGtCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTNCRjtBQThCQTtFQUNFLGlCQUFBO0FBM0JGO0FBOEJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBM0JGO0FBQ0Y7QUE4QkE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBNUJGO0FBK0JBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQTVCRjtBQStCQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUE1QkY7QUErQkE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBNUJGO0FBK0JBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQTVCRjtBQStCQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTVCRjtBQStCQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTVCRjtBQStCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBNUJGO0FBK0JBO0VBQ0UsY0FBQTtBQTVCRjtBQStCQTtFQUNFLG1CQUFBO0FBNUJGO0FBK0JBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTVCRjtBQStCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUE1QkY7QUErQkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBNUJGO0FBK0JBO0VBQ0UsZUFBQTtBQTVCRjtBQStCQTs7RUFFRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE1QkY7QUErQkE7RUFDRSxjQUFBO0FBNUJGO0FBK0JBO0VBQ0U7SUFDRSxtQkFBQTtFQTVCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2VvbWV0cmlhXCI7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvR2VvbWV0cmlhLnR0ZlwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2VvbWV0cmlhLUJvbGRcIjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9HZW9tZXRyaWEtQm9sZC50dGZcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYS1NZWRpdW1cIjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9nZW9tZXRyaWEtbWVkaXVtLnR0ZlwiKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEzNzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxudWwgbGksXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0Zik7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiR2VvbWV0cmlhXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxufVxyXG5cclxuaDEsXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogXCJHZW9tZXRyaWEtQm9sZFwiO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogXCJHZW9tZXRyaWFcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdiBsaSBhOmhvdmVyLFxyXG4ubmF2IGxpIGE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZ3V0dGVycy04MC5yb3cge1xyXG4gIG1hcmdpbi1yaWdodDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmd1dHRlcnMtODAucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3V0dGVycy04MCA+IFtjbGFzc149XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5ndXR0ZXJzLTgwID4gW2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItLWJnIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1iYWNrZ3JvdW5kLnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTM5OXB4KSB7XHJcbiAgLmhlYWRlci0tYmcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXIgLm5hdmJhciB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5oZWFkZXIgLm5hdiBsaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuaGVhZGVyIC5uYXYgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciAubmF2IGxpIGEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYS1NZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNiMGJlYzU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMzkwcHgpIHtcclxuICAuaGVhZGVyIC5uYXYgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBmODFmODtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5uYXZiYXIgLm5hdiB7XHJcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciAucm93IHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2NvbnRlbnQgLnRpdGxlIHtcclxuICBmb250LXNpemU6IDU1cHg7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzIwODZmNywgIzJiYThmNyk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmhlYWRlcl9fY29udGVudCAudGl0bGUtc3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGl0bGUtc2hhcGUucG5nXCIpIGxlZnQgY2VudGVyXHJcbiAgICBuby1yZXBlYXQ7XHJcbiAgcGFkZGluZzogMHB4IDEzNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2NvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMDgyOTRjO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYS1NZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwZjgxZjg7XHJcbiAgcGFkZGluZzogMTNweCA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYTgyZjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuaGVhZGVyX19idXR0b24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlcl9fYnV0dG9uOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBib3JkZXI6IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KSk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xyXG59XHJcblxyXG4uaGVhZGVyX19idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjgxZjg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIpIGxlZnQgY2VudGVyIG5vLXJlcGVhdDtcclxuICBwYWRkaW5nOiAwcHggOTBweDtcclxufVxyXG5cclxuLnBhZ2Utc2VjdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxufVxyXG5cclxuLnBhZ2Utc2VjdGlvbl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogIzE2ODBmODtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5wYWdlLXNlY3Rpb25fX3RpdGxlLS13aGl0ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wYWdlLXNlY3Rpb25fX3N1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwODI5NGM7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLnBhZ2Utc2VjdGlvbl9fc3VidGl0bGUgYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2VvbWV0cmlhLU1lZGl1bVwiO1xyXG4gIGNvbG9yOiAjMTc4MGY4O1xyXG59XHJcblxyXG4ucGFnZS1zZWN0aW9uX19zdWJ0aXRsZS0td2hpdGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucGFnZS1zZWN0aW9uX190aXRsZS1zdHlsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnBhZ2Utc2VjdGlvbl9fdGl0bGUtc3R5bGUgLmZpcnN0LWxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzE2ODBmODtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE2ODBmODtcclxuICBwYWRkaW5nOiAwcHggMTIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBhZ2Utc2VjdGlvbl9fdGl0bGUtc3R5bGUgLmZpcnN0LWxpbmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTE3cHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjgwZjg7XHJcbn1cclxuXHJcbi5wYWdlLXNlY3Rpb25fX3RpdGxlLXN0eWxlIC5zZWNvbmQtbGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMTY4MGY4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTY4MGY4O1xyXG4gIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XHJcbn1cclxuXHJcbi5wYWdlLXNlY3Rpb25fX3RpdGxlLXN0eWxlIC5zZWNvbmQtbGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTVweDtcclxuICB0b3A6IC00cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2ODBmODtcclxufVxyXG5cclxuLnN0ZXBzX19zaW5nbGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5zdGVwc19fc2luZ2xlIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnN0ZXBzX19zaW5nbGUgcCB7XHJcbiAgbWF4LXdpZHRoOiAxNzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdGVwc19fc2luZ2xlLWZpcnN0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnN0ZXBzX19zaW5nbGUtZmlyc3Qge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHNfX3NpbmdsZS1sYXN0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5zdGVwc19fc2luZ2xlLWxhc3Qge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTJweCA1NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYS1NZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY4MGY4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xyXG59XHJcblxyXG4uYnV0dG9uLS13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzBmODFmODtcclxufVxyXG5cclxuLmJ1dHRvbi0tZm9ybSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEycHggNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LWZhbWlseTogXCJHZW9tZXRyaWEtTWVkaXVtXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwZjgxZjg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XHJcbn1cclxuXHJcbi52aWRlby0tYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODdkZWQ7XHJcbn1cclxuXHJcbi52aWRlb19fbGVmdCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy92aWRlby1wbGF5ZXItYmcucG5nXCIpIGxlZnQgY2VudGVyXHJcbiAgICBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udmlkZW9fX2xlZnQgLm1hdGVyaWFsLWljb25zIHtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgY29sb3I6ICMwZjgxZjg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4udmlkZW9fX3RpdGxlIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi52aWRlb19fdGl0bGUtc3R5bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi52aWRlb19fdGl0bGUtc3R5bGUgLmZpcnN0LWxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnZpZGVvX190aXRsZS1zdHlsZSAuZmlyc3QtbGluZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTdweDtcclxuICB0b3A6IC00cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnZpZGVvX190aXRsZS1zdHlsZSAuc2Vjb25kLWxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzOHB4O1xyXG59XHJcblxyXG4udmlkZW9fX3RpdGxlLXN0eWxlIC5zZWNvbmQtbGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTVweDtcclxuICB0b3A6IC00cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnZpZGVvX19yaWdodCB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4udmlkZW9fX3JpZ2h0IHAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4jbXlNb2RhbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4jbXlNb2RhbCAuY2xvc2Uge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA2NCwgMTM0LCAxKSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDg5MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuI215TW9kYWwgLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNteU1vZGFsIC5lbWJlZC1yZXNwb25zaXZlIHtcclxuICBoZWlnaHQ6IDQ4OXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNwb25zb3JzLS1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNwb25zb3JzX19zaW5nbGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5zcG9uc29yc19fc2luZ2xlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGVzdGltb25pYWxfX3RpdGxlLXN0eWxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWxfX3RpdGxlLXN0eWxlIC5maXJzdC1saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMxNjgwZjg7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxNjgwZjg7XHJcbiAgcGFkZGluZzogMHB4IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsX190aXRsZS1zdHlsZSAuZmlyc3QtbGluZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTdweDtcclxuICB0b3A6IC00cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2ODBmODtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsX190aXRsZS1zdHlsZSAuc2Vjb25kLWxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzE2ODBmODtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE2ODBmODtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzOHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWxfX3RpdGxlLXN0eWxlIC5zZWNvbmQtbGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTVweDtcclxuICB0b3A6IC00cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2ODBmODtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5idXR0b24tdGVzdGltb25pYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuYnV0dG9uLXRlc3RpbW9uaWFsIGgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMwODI5NGM7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmJ1dHRvbi10ZXN0aW1vbmlhbCBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICMwODI5NGM7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuYnV0dG9uLXRlc3RpbW9uaWFsLTEge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwxLnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmJ1dHRvbi10ZXN0aW1vbmlhbC0yIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Rlc3RpbW9uaWFsMi5wbmdcIikgbGVmdCBjZW50ZXJcclxuICAgIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5idXR0b24tdGVzdGltb25pYWwtMyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXN0aW1vbmlhbDMucG5nXCIpIGxlZnQgY2VudGVyXHJcbiAgICBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuYnV0dG9uLXRlc3RpbW9uaWFsLTQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWw0LnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNvbGxhcHNlZCB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNvbGxhcHNlX193cmFwcGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAucGFyYWdyYXBoIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwODI5NGM7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgcGFkZGluZy1ib3R0b206IDkwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuY29sbGFwc2VfX3dyYXBwZXIgLmJpbyBoMiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMDgyOTRjO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAuYmlvIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzA4Mjk0YztcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAuYmlvLTEge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwxLnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDVweCAxMDBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAuYmlvLTIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwyLnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDVweCAxMDBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAuYmlvLTMge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwzLnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDVweCAxMDBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAuYmlvLTQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWw0LnBuZ1wiKSBsZWZ0IGNlbnRlclxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDVweCAxMDBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jb2xsYXBzZV9fd3JhcHBlciAuc3RhciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNvbGxhcHNlX193cmFwcGVyIC5zdGFyIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuY29sbGFwc2VfX3dyYXBwZXIgLnN0YXIgbGkgLm1hdGVyaWFsLWljb25zIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY29sb3I6ICMwZjgxZjg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1yaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ3MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnRlc3RpbW9uaWFsLXJpZ2h0IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sbGFwc2UuaW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMjVweCBzb2xpZCAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDcpKTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNykpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY29sbGFwc2UuaW46YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50ZWFtLS1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxufVxyXG5cclxuLnRlYW1fX3RpdGxlLXN0eWxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGVhbV9fdGl0bGUtc3R5bGUgLmZpcnN0LWxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzE2ODBmODtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE2ODBmODtcclxuICBwYWRkaW5nOiAwcHggNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGVhbV9fdGl0bGUtc3R5bGUgLmZpcnN0LWxpbmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTE3cHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjgwZjg7XHJcbn1cclxuXHJcbi50ZWFtX190aXRsZS1zdHlsZSAuc2Vjb25kLWxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzE2ODBmODtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE2ODBmODtcclxuICBwYWRkaW5nOiAwcHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzOHB4O1xyXG59XHJcblxyXG4udGVhbV9fdGl0bGUtc3R5bGUgLnNlY29uZC1saW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xNXB4O1xyXG4gIHRvcDogLTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY4MGY4O1xyXG59XHJcblxyXG4udGVhbV9fc2luZ2xlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDMwcHggMjVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnRlYW1fX3NpbmdsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRlYW1fX3NpbmdsZSAuYmlvIGltZyB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRlYW1fX3NpbmdsZSAuYmlvIGgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMwODI5NGM7XHJcbn1cclxuXHJcbi50ZWFtX19zaW5nbGUgLmJpbyBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwODI5NGM7XHJcbn1cclxuXHJcbi50ZWFtX19zaW5nbGUgLmNhcHRpb24gcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMDgyOTRjO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnRlYW1fX3NpbmdsZSAuY2FwdGlvbiAuc29jaWFsLWljb25zIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50ZWFtX19zaW5nbGUgLmNhcHRpb24gLnNvY2lhbC1pY29ucyBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRlYW1fX3NpbmdsZSAuY2FwdGlvbiAuc29jaWFsLWljb25zIGxpIFtjbGFzc149XCJmbGF0aWNvbi1cIl06YmVmb3JlLFxyXG4udGVhbV9fc2luZ2xlIC5jYXB0aW9uIC5zb2NpYWwtaWNvbnMgbGkgW2NsYXNzKj1cIiBmbGF0aWNvbi1cIl06YmVmb3JlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZTRlODtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvcm0tLWJnIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm0tYmFja2dyb3VuZC5wbmdcIikgbGVmdCBjZW50ZXJcclxuICAgIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9ybV9fdGl0bGUtc3R5bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtX190aXRsZS1zdHlsZSAuZmlyc3QtbGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCA1OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3JtX190aXRsZS1zdHlsZSAuZmlyc3QtbGluZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTdweDtcclxuICB0b3A6IC00cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvcm1fX3RpdGxlLXN0eWxlIC5zZWNvbmQtbGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XHJcbn1cclxuXHJcbi5mb3JtX190aXRsZS1zdHlsZSAuc2Vjb25kLWxpbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTE1cHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtIGZvcm0ge1xyXG4gIG1heC13aWR0aDogNTQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9ybSBmb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWRlZmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuLmZvcm0gZm9ybSAuY2hlY2tib3gge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLmZvcm0gZm9ybSAuY2hlY2tib3ggbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5mb3JtIGZvcm0gLmZvcm0tYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmZvcm0gZm9ybSAuZm9ybS1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0gOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBXZWJLaXQsIEJsaW5rLCBFZGdlICovXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9ybSA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvcm0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvb3Rlci0tYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDJmNGY7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJfX2xlZnQgLm5hdmJhci1icmFuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19sZWZ0IHAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fbGVmdCBwIHNwYW4ge1xyXG4gIGNvbG9yOiAjODM5MmE0O1xyXG59XHJcblxyXG4uZm9vdGVyX19saW5rIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19saW5rIGxpIGEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYS1NZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyNTRiNzQ7XHJcbn1cclxuXHJcbi5mb290ZXJfX3NvY2lhbC1pY29ucyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fc29jaWFsLWljb25zIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19zb2NpYWwtaWNvbnMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZm9vdGVyX19zb2NpYWwtaWNvbnMgbGkgW2NsYXNzXj1cImZsYXRpY29uLVwiXTpiZWZvcmUsXHJcbi5mb290ZXJfX3NvY2lhbC1pY29ucyBsaSBbY2xhc3MqPVwiIGZsYXRpY29uLVwiXTpiZWZvcmUge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjI3YTtcclxuICBjb2xvcjogIzEwMmY0ZjtcclxufVxyXG5cclxuLmZvb3Rlcl9fc29jaWFsLWljb25zIGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuZm9vdGVyIC5yb3cgPiBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "60Ss":
/*!************************************************************************!*\
  !*** ./src/app/pages/list-inscriptions/list-inscriptions.component.ts ***!
  \************************************************************************/
/*! exports provided: ListInscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInscriptionsComponent", function() { return ListInscriptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ListInscriptionsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inscripcion_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", inscripcion_r1.clienteObtenido.nombre, " ", inscripcion_r1.clienteObtenido.apellido, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, inscripcion_r1.fecha));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, inscripcion_r1.fechaFinal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inscripcion_r1.clienteObtenido.dni);
} }
class ListInscriptionsComponent {
    constructor(db) {
        this.db = db;
        this.inscripciones = [];
    }
    ngOnInit() {
        this.inscripciones.length = 0;
        this.db.collection('inscripciones').get().subscribe((res) => {
            res.forEach((inscripcion) => {
                let inscripcionObtenida = inscripcion.data();
                inscripcionObtenida.id = inscripcion.id;
                this.db.doc(inscripcion.data().cliente.path).get().subscribe((cliente) => {
                    inscripcionObtenida.clienteObtenido = cliente.data();
                    inscripcionObtenida.fecha = new Date(inscripcionObtenida.fecha.seconds * 1000);
                    inscripcionObtenida.fechaFinal = new Date(inscripcionObtenida.fechaFinal.seconds * 1000);
                    this.inscripciones.push(inscripcionObtenida);
                });
            });
        });
    }
}
ListInscriptionsComponent.ɵfac = function ListInscriptionsComponent_Factory(t) { return new (t || ListInscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ListInscriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListInscriptionsComponent, selectors: [["app-list-inscriptions"]], decls: 14, vars: 1, consts: [[1, "container", "mt-5"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function ListInscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fecha de Incio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fecha Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListInscriptionsComponent_tr_13_Template, 11, 9, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inscripciones);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtaW5zY3JpcHRpb25zL2xpc3QtaW5zY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListInscriptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-inscriptions',
                templateUrl: './list-inscriptions.component.html',
                styleUrls: ['./list-inscriptions.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "7EJP":
/*!*********************************!*\
  !*** ./src/app/models/price.ts ***!
  \*********************************/
/*! exports provided: Price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
class Price {
}


/***/ }),

/***/ "8+c0":
/*!************************************************************!*\
  !*** ./src/app/pages/list-client/list-client.component.ts ***!
  \************************************************************/
/*! exports provided: ListClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientComponent", function() { return ListClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1) { return ["/agregar-cliente/", a1]; };
function ListClientComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Desactivar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cliente_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dni: ", cliente_r1.dni, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, cliente_r1.id));
} }
class ListClientComponent {
    constructor(db) {
        this.db = db;
        this.clientes = new Array();
    }
    ngOnInit() {
        // this.db.collection('clientes').valueChanges().subscribe((user) => {
        //   this.clientes = user;
        //   console.log(this.clientes);
        // });
        try {
            this.clientes.length = 0;
            this.db.collection('clientes').get().subscribe((user) => {
                user.docs.forEach((client) => {
                    let cliente = client.data();
                    cliente.id = client.id;
                    cliente.ref = client.ref;
                    this.clientes.push(cliente);
                });
            });
        }
        catch (error) {
            console.error('Ocurrio un error al traer los clientes');
        }
    }
}
ListClientComponent.ɵfac = function ListClientComponent_Factory(t) { return new (t || ListClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ListClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListClientComponent, selectors: [["app-list-client"]], decls: 8, vars: 1, consts: [[1, "container", "mt-4"], ["action", ""], [1, "form-group"], ["type", "text", "placeholder", "Buscar cliente....", 1, "form-control-file"], [1, "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], [1, "card"], ["src", "https://vistapointe.net/images/client-wallpaper-4.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-link", 3, "routerLink"], ["href", "#", 1, "card-link", "text-danger"]], template: function ListClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Listado de clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListClientComponent_div_7_Template, 12, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtY2xpZW50L2xpc3QtY2xpZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-client',
                templateUrl: './list-client.component.html',
                styleUrls: ['./list-client.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "8A2T":
/*!**********************************************************!*\
  !*** ./src/app/pages/add-client/add-client.component.ts ***!
  \**********************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddClientComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientComponent_div_8_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formClient.controls["nombre"].errors.required);
} }
function AddClientComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El apellido es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientComponent_div_14_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formClient.controls["apellido"].errors.required);
} }
function AddClientComponent_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientComponent_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientComponent_div_20_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddClientComponent_div_20_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formClient.controls["email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formClient.controls["email"].errors.email);
} }
function AddClientComponent_div_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El Dni es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientComponent_div_26_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formClient.controls["dni"].errors.required);
} }
function AddClientComponent_div_37_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El telefono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientComponent_div_37_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formClient.controls["telefono"].errors.required);
} }
function AddClientComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddClientComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.agregar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.formClient.invalid);
} }
function AddClientComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddClientComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.editar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.formClient.invalid);
} }
class AddClientComponent {
    constructor(fb, db, activeRoute, alertMsj) {
        this.fb = fb;
        this.db = db;
        this.activeRoute = activeRoute;
        this.alertMsj = alertMsj;
        this.esEditable = false;
    }
    ngOnInit() {
        this.formClient = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaNacimiento: [''],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.id = this.activeRoute.snapshot.params.clientId;
        if (this.id != undefined) {
            this.esEditable = true;
            this.db.doc('clientes' + '/' + this.id).valueChanges().subscribe((cliente) => {
                // console.log(cliente);
                this.formClient.setValue({
                    nombre: cliente.nombre,
                    apellido: cliente.apellido,
                    email: cliente.email,
                    dni: cliente.dni,
                    fechaNacimiento: cliente.fechaNacimiento,
                    telefono: cliente.telefono,
                });
            });
        }
    }
    agregar() {
        console.log(this.formClient.value);
        this.db.collection('clientes').add(this.formClient.value).then(() => {
            this.alertMsj.alertOk('Agregado!', 'Se agrego correctamente');
        }).catch(() => {
            this.alertMsj.alertError('Error!', 'No se agrego el cliente');
        });
    }
    editar() {
        this.db.doc('clientes/' + this.id).update(this.formClient.value).then(() => {
            this.alertMsj.alertOk('Editado!', 'Se edito correctamente');
        }).catch(() => {
            this.alertMsj.alertError('Error!', 'No se edito el cliente');
        });
    }
}
AddClientComponent.ɵfac = function AddClientComponent_Factory(t) { return new (t || AddClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
AddClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddClientComponent, selectors: [["app-add-client"]], decls: 40, vars: 8, consts: [[1, "container", "mt-5"], [3, "formGroup"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "Agregar nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "text", "placeholder", "Agregar apellido", "formControlName", "apellido", 1, "form-control"], ["type", "text", "placeholder", "Agregar email", "formControlName", "email", 1, "form-control"], ["type", "text", "placeholder", "Agregar dni", "formControlName", "dni", 1, "form-control"], ["type", "date", "placeholder", "Agregar fecha de nacimiento", "formControlName", "fechaNacimiento", 1, "form-control"], ["type", "tel", "placeholder", "Agregar numero de telefono", "formControlName", "telefono", 1, "form-control"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function AddClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddClientComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddClientComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddClientComponent_div_20_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Dni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddClientComponent_div_26_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fecha Nacimientp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddClientComponent_div_37_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddClientComponent_button_38_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddClientComponent_button_39_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formClient.controls["nombre"].invalid && ctx.formClient.controls["nombre"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formClient.controls["apellido"].invalid && ctx.formClient.controls["apellido"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formClient.controls["email"].invalid && ctx.formClient.controls["email"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formClient.controls["dni"].invalid && ctx.formClient.controls["dni"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formClient.controls["telefono"].invalid && ctx.formClient.controls["telefono"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.esEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esEditable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jbGllbnQvYWRkLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-client',
                templateUrl: './add-client.component.html',
                styleUrls: ['./add-client.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBsc60mTLKRJxgR0KnajoZViW9PyCdlmiI",
        authDomain: "mastergym-559b3.firebaseapp.com",
        databaseURL: "https://mastergym-559b3.firebaseio.com",
        projectId: "mastergym-559b3",
        storageBucket: "mastergym-559b3.appspot.com",
        messagingSenderId: "861930501433",
        appId: "1:861930501433:web:2620fb8672b73944ffa4e8",
        measurementId: "G-THQL2DS2L2"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");





function NavbarComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ver clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.signOut();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 0, consts: [[1, "navbar", "navbar-expand-lg"], ["routerLink", "/home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/inscription", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/listado-inscripciones", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "nav-link", "dropdown-toggle"], ["class", "dropdown-menu", "aria-labelledby", "navbarDropdown", 4, "dropdownMenu"], ["routerLink", "/precios", 1, "nav-link"], [1, "btn", "btn-primary", 3, "click"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/agregar-cliente", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/listado-clientes", 1, "dropdown-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Esfuerzo Vital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inscripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ver inscripciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Clientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_div_19_Template, 6, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Precios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_24_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownMenuDirective"]], styles: [".navbar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  background-color: transparent;\n  color: #46484a;\n}\n\na[_ngcontent-%COMP%] {\n  color: #0f81f8;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.navbar-trans[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\na.navbar-brand[_ngcontent-%COMP%], a.logo[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #0f81f8 !important;\n  font-size: 2rem;\n  font-weight: bold;\n  margin-top: 0;\n}\n\na.logo[_ngcontent-%COMP%]:hover, a.logo[_ngcontent-%COMP%]:active, a.logo[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\nli.nav-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  margin-left: 0.4rem;\n}\n\nli.nav-item[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  color: #46484a;\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-outline-primary[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  border-radius: 0.3rem;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%], .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-width: 0.15rem;\n}\n\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1.1rem 2.5rem;\n  font-size: 0.9rem;\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active {\n  background-color: #59a0d7;\n  border-color: #59a0d7;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active {\n  background-color: #4089c1;\n  border-color: #4089c1;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%], .btn-outline-primary[_ngcontent-%COMP%]:visited {\n  color: #59a0d7;\n  border-color: #59a0d7;\n  background: none;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary[_ngcontent-%COMP%]:active {\n  background-color: #59a0d7;\n  border-color: #59a0d7;\n  color: #fff;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  border-color: #696b6e;\n  background-color: #696b6e;\n  color: #fff;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:focus, .btn-secondary[_ngcontent-%COMP%]:active {\n  border-color: #46484a;\n  background-color: #46484a;\n  color: #fff;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%], .btn-outline-secondary[_ngcontent-%COMP%]:visited {\n  color: #696b6e;\n  border-color: #696b6e;\n  background: none;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover, .btn-outline-secondary[_ngcontent-%COMP%]:focus, .btn-outline-secondary[_ngcontent-%COMP%]:active {\n  border-color: #696b6e;\n  background: #696b6e;\n  color: #fff;\n}\n\n.btn-white[_ngcontent-%COMP%] {\n  border-color: #fff;\n  background-color: #fff;\n  color: #46484a;\n}\n\n.btn-white[_ngcontent-%COMP%]:hover, .btn-white[_ngcontent-%COMP%]:focus, .btn-white[_ngcontent-%COMP%]:active {\n  border-color: #dfe1e5;\n  background-color: #dfe1e5;\n  color: #46484a;\n}\n\n.btn-outline-white[_ngcontent-%COMP%], .btn-outline-white[_ngcontent-%COMP%]:visited {\n  background: none;\n  color: #fff;\n  border-color: #fff;\n}\n\n.btn-outline-white[_ngcontent-%COMP%]:hover, .btn-outline-white[_ngcontent-%COMP%]:focus, .btn-outline-white[_ngcontent-%COMP%]:active {\n  color: #46484a;\n  background: #fff;\n}\n\n.link-white[_ngcontent-%COMP%], link-white[_ngcontent-%COMP%]:visited {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  border-radius: 0.3rem;\n  border: 0;\n  color: #fff;\n}\n\n.link-white[_ngcontent-%COMP%]:hover, .link-white[_ngcontent-%COMP%]:focus, .link-white[_ngcontent-%COMP%]:active {\n  color: #dfe1e5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UseUVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQVNBO0VBQ0UsdUJBQUE7QUFORjs7QUFTQTs7RUFFRSx5RUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVNBOzs7RUFHRSxxQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBOztFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7O0VBRUUscUJBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRQTs7OztFQUlFLHlCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTs7O0VBR0UseUJBQUE7RUFDQSxxQkFBQTtBQUxGOztBQVFBOztFQUVFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7OztFQUdFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBOzs7RUFHRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBOztFQUVFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7OztFQUdFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBOzs7RUFHRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7OztFQUdFLGNBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBOztFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTs7O0VBR0UseUJBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzQ2NDg0YTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMwZjgxZjg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLmRpdmlkZXIge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHdpZHRoOiA2cmVtO1xyXG4vLyAgIGhlaWdodDogMC4zcmVtO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRlZWI7XHJcbi8vICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbi8vIH1cclxuXHJcbi5uYXZiYXItdHJhbnMge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5hLm5hdmJhci1icmFuZCxcclxuYS5sb2dvIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzBmODFmOCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5hLmxvZ286aG92ZXIsXHJcbmEubG9nbzphY3RpdmUsXHJcbmEubG9nbzpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saS5uYXYtaXRlbSAuYnRuIHtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcclxufVxyXG5saS5uYXYtaXRlbSAuYnRuLXdoaXRlIHtcclxuICBjb2xvcjogIzQ2NDg0YTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5LFxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICBib3JkZXItd2lkdGg6IDAuMTVyZW07XHJcbn1cclxuXHJcbi5idG4tbGcge1xyXG4gIHBhZGRpbmc6IDEuMXJlbSAyLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OWEwZDc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTlhMGQ3O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwODljMTtcclxuICBib3JkZXItY29sb3I6ICM0MDg5YzE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5LFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTp2aXNpdGVkIHtcclxuICBjb2xvcjogIzU5YTBkNztcclxuICBib3JkZXItY29sb3I6ICM1OWEwZDc7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OWEwZDc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTlhMGQ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjk2YjZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTZiNmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxyXG4uYnRuLXNlY29uZGFyeTpmb2N1cyxcclxuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlIHtcclxuICBib3JkZXItY29sb3I6ICM0NjQ4NGE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDg0YTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSxcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTp2aXNpdGVkIHtcclxuICBjb2xvcjogIzY5NmI2ZTtcclxuICBib3JkZXItY29sb3I6ICM2OTZiNmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlcixcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTphY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzY5NmI2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNjk2YjZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuLXdoaXRlIHtcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzQ2NDg0YTtcclxufVxyXG5cclxuLmJ0bi13aGl0ZTpob3ZlcixcclxuLmJ0bi13aGl0ZTpmb2N1cyxcclxuLmJ0bi13aGl0ZTphY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2RmZTFlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWU1O1xyXG4gIGNvbG9yOiAjNDY0ODRhO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtd2hpdGUsXHJcbi5idG4tb3V0bGluZS13aGl0ZTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXdoaXRlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtd2hpdGU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS13aGl0ZTphY3RpdmUge1xyXG4gIGNvbG9yOiAjNDY0ODRhO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5saW5rLXdoaXRlLFxyXG5saW5rLXdoaXRlOnZpc2l0ZWQge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxpbmstd2hpdGU6aG92ZXIsXHJcbi5saW5rLXdoaXRlOmZvY3VzLFxyXG4ubGluay13aGl0ZTphY3RpdmUge1xyXG4gIGNvbG9yOiAjZGZlMWU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "HDBd":
/*!**************************************************!*\
  !*** ./src/app/pages/prices/prices.component.ts ***!
  \**************************************************/
/*! exports provided: PricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesComponent", function() { return PricesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PricesComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricesComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const price_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editPrice(price_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const price_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r3.nombre);
} }
function PricesComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricesComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.formPrice.valid);
} }
function PricesComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricesComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.formPrice.valid);
} }
class PricesComponent {
    constructor(fb, db, alertMsj) {
        this.fb = fb;
        this.db = db;
        this.alertMsj = alertMsj;
        this.prices = new Array();
        this.esEditar = false;
    }
    ngOnInit() {
        this.createForm();
        this.showPrices();
    }
    showPrices() {
        this.db.collection('prices').get().subscribe((res) => {
            this.prices.length = 0;
            res.docs.forEach((dato) => {
                let price = dato.data(); //para que lo parsee a precio
                price.id = dato.id;
                price.ref = dato.ref;
                this.prices.push(price);
            });
        });
    }
    createForm() {
        this.formPrice = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            costo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            duracion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoDuracion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    add() {
        this.db.collection('prices').add(this.formPrice.value).then(() => {
            this.alertMsj.alertOk('Agregado!', 'Precio agregado correctamente');
            this.formPrice.reset();
            this.showPrices();
        }).catch(() => {
            this.alertMsj.alertError('Error!', 'Precio no pudo ser agregado');
        });
    }
    editPrice(price) {
        this.esEditar = true;
        this.formPrice.setValue({
            nombre: price.nombre,
            costo: price.costo,
            duracion: price.duracion,
            tipoDuracion: price.tipoDuracion
        });
        this.id = price.id;
    }
    edit() {
        this.db.doc('prices/' + this.id).update(this.formPrice.value).then(() => {
            this.alertMsj.alertOk('Editado!', 'El precio se edito correctamente');
            this.formPrice.reset();
            this.esEditar = false;
            this.showPrices();
        }).catch(() => {
            this.alertMsj.alertError('Error!', 'Error al editar el precio');
        });
    }
}
PricesComponent.ɵfac = function PricesComponent_Factory(t) { return new (t || PricesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
PricesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricesComponent, selectors: [["app-prices"]], decls: 39, vars: 4, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-sm-8"], [3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [3, "formGroup"], [1, "form-group"], ["for", "nombre"], ["type", "text", "placeholder", "Ingrese nombre", "formControlName", "nombre", 1, "form-control"], ["for", "costo"], ["type", "number", "placeholder", "Ingrese costo", "formControlName", "costo", 1, "form-control"], ["for", "duracion"], ["type", "number", "placeholder", "Ingrese duracion", "formControlName", "duracion", 1, "form-control"], ["for", "tiempo"], ["formControlName", "tipoDuracion", "name", "", "id", "", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function PricesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PricesComponent_li_6_Template, 3, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Agregar/ Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tiempo de duracion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Semana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "15 Dias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PricesComponent_button_37_Template, 2, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PricesComponent_button_38_Template, 2, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.esEditar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esEditar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaWNlcy9wcmljZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prices',
                templateUrl: './prices.component.html',
                styleUrls: ['./prices.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "LAKG":
/*!****************************************************************!*\
  !*** ./src/app/pages/select-client/select-client.component.ts ***!
  \****************************************************************/
/*! exports provided: SelectClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectClientComponent", function() { return SelectClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function SelectClientComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SelectClientComponent_div_1_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.buscarClientes($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectClientComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectClientComponent_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectClientComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancelarCliente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.nombre);
} }
function SelectClientComponent_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectClientComponent_div_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const client_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectClient(client_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r8.nombre, " ");
} }
function SelectClientComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectClientComponent_div_4_a_1_Template, 2, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r8.visible);
} }
class SelectClientComponent {
    constructor(db) {
        this.db = db;
        this.seleccionoCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.canceloCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clients = new Array();
    }
    ngOnInit() {
        //me traigo los clientes
        this.db.collection('clientes').get().subscribe((res) => {
            this.clients.length = 0;
            res.docs.forEach((dato) => {
                let cliente = dato.data();
                cliente.id = dato.id;
                cliente.ref = dato.ref;
                cliente.visible = false;
                this.clients.push(cliente);
            });
        });
    }
    buscarClientes(nombre) {
        this.clients.forEach((client) => {
            if (client.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())) {
                client.visible = true;
            }
            else {
                client.visible = false;
            }
        });
    }
    selectClient(client) {
        this.nombre = client.nombre + ' ' + client.apellido;
        this.clients.forEach((cliente) => {
            cliente.visible = false;
        });
        //envio el cliente seleccionado a inscripcion
        this.seleccionoCliente.emit(client);
    }
    cancelarCliente() {
        this.nombre = undefined;
        this.canceloCliente.emit();
    }
}
SelectClientComponent.ɵfac = function SelectClientComponent_Factory(t) { return new (t || SelectClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
SelectClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectClientComponent, selectors: [["app-select-client"]], inputs: { nombre: "nombre" }, outputs: { seleccionoCliente: "seleccionoCliente", canceloCliente: "canceloCliente" }, decls: 5, vars: 3, consts: [[1, "clientes"], ["class", "form-group", 4, "ngIf"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "form-group"], ["for", ""], ["type", "text", "name", "", "id", "", "placeholder", "Buscar cliente...", 1, "form-control", 3, "input"], [1, "row"], [1, "col-sm-10"], ["disabled", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-2"], [1, "btn", "btn-danger", 3, "click"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "click"]], template: function SelectClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectClientComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectClientComponent_div_2_Template, 9, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectClientComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clients);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjdC1jbGllbnQvc2VsZWN0LWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-client',
                templateUrl: './select-client.component.html',
                styleUrls: ['./select-client.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, { nombre: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nombre']
        }], seleccionoCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['seleccionoCliente']
        }], canceloCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['canceloCliente']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_app_login_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_1_div_0_Template, 6, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_app_login_1_Template, 1, 0, "app-login", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cargando);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.cargando);
} }
class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'gym';
        this.cargando = true;
        this.auth.user.subscribe((usuario) => {
            this.cargando = false;
            this.usuario = usuario;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["showLogin", ""], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "lds-ring"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario && !ctx.cargando)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/alert/alert.service */ "kyzu");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _pages_list_client_list_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/list-client/list-client.component */ "8+c0");
/* harmony import */ var _pages_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/add-client/add-client.component */ "8A2T");
/* harmony import */ var _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/prices/prices.component */ "HDBd");
/* harmony import */ var _pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/inscription/inscription.component */ "en5d");
/* harmony import */ var _pages_select_client_select_client_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/select-client/select-client.component */ "LAKG");
/* harmony import */ var _pages_list_inscriptions_list_inscriptions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/list-inscriptions/list-inscriptions.component */ "60Ss");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _pages_list_client_list_client_component__WEBPACK_IMPORTED_MODULE_16__["ListClientComponent"],
        _pages_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_17__["AddClientComponent"],
        _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_18__["PricesComponent"],
        _pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_19__["InscriptionComponent"],
        _pages_select_client_select_client_component__WEBPACK_IMPORTED_MODULE_20__["SelectClientComponent"],
        _pages_list_inscriptions_list_inscriptions_component__WEBPACK_IMPORTED_MODULE_21__["ListInscriptionsComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _pages_list_client_list_client_component__WEBPACK_IMPORTED_MODULE_16__["ListClientComponent"],
                    _pages_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_17__["AddClientComponent"],
                    _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_18__["PricesComponent"],
                    _pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_19__["InscriptionComponent"],
                    _pages_select_client_select_client_component__WEBPACK_IMPORTED_MODULE_20__["SelectClientComponent"],
                    _pages_list_inscriptions_list_inscriptions_component__WEBPACK_IMPORTED_MODULE_21__["ListInscriptionsComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot()
                ],
                providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "en5d":
/*!************************************************************!*\
  !*** ./src/app/pages/inscription/inscription.component.ts ***!
  \************************************************************/
/*! exports provided: InscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function() { return InscriptionComponent; });
/* harmony import */ var _models_price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/price */ "7EJP");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/client */ "/tGE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_inscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/inscription */ "gS64");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _select_client_select_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select-client/select-client.component */ "LAKG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function InscriptionComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const price_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", price_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", price_r2.nombre, " ");
} }
function InscriptionComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.clienteSeleccionado.nombre, " ", ctx_r1.clienteSeleccionado.apellido, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Dni: ", ctx_r1.clienteSeleccionado.dni, "");
} }
class InscriptionComponent {
    constructor(db, alertMsj) {
        this.db = db;
        this.alertMsj = alertMsj;
        this.inscription = new src_app_models_inscription__WEBPACK_IMPORTED_MODULE_3__["Inscription"]();
        this.clienteSeleccionado = new _models_client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        this.precios = new Array();
        this.precioSeleccionado = new _models_price__WEBPACK_IMPORTED_MODULE_0__["Price"]();
        this.idPrecio = 'null';
    }
    ngOnInit() {
        this.db.collection('prices').get().subscribe((res) => {
            res.docs.forEach((item) => {
                let price = item.data();
                price.id = item.id;
                price.ref = item.ref;
                this.precios.push(price);
            });
        });
    }
    asignarCliente(client) {
        this.inscription.cliente = client.ref;
        this.clienteSeleccionado = client;
    }
    eliminarCliente() {
        this.clienteSeleccionado = new _models_client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        this.inscription.cliente = undefined;
    }
    guardar() {
        if (this.inscription.validar().esValido) {
            let inscripcionAgregar = {
                fecha: this.inscription.fecha,
                fechaFinal: this.inscription.fechaFinal,
                cliente: this.inscription.cliente,
                precios: this.inscription.precios,
                total: this.inscription.total
            };
            this.db.collection('inscripciones').add(inscripcionAgregar).then((res) => {
                this.inscription = new src_app_models_inscription__WEBPACK_IMPORTED_MODULE_3__["Inscription"]();
                this.clienteSeleccionado = new _models_client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
                this.precioSeleccionado = new _models_price__WEBPACK_IMPORTED_MODULE_0__["Price"]();
                this.idPrecio = 'null';
                this.alertMsj.alertOk('Agregado!', 'Inscripcion agregada');
            });
        }
        else {
            this.alertMsj.alertError('Error!', this.inscription.validar().mensaje);
        }
    }
    seleccionarPrecio(id) {
        if (id != "null") {
            this.precioSeleccionado = this.precios.find(x => x.id == id);
            this.inscription.precios = this.precioSeleccionado.ref;
            this.inscription.total = this.precioSeleccionado.costo;
            this.inscription.fecha = new Date();
            if (this.precioSeleccionado.tipoDuracion == 1) {
                let dias = this.precioSeleccionado.duracion;
                let fechaFinal = new Date(this.inscription.fecha.getFullYear(), this.inscription.fecha.getMonth(), this.inscription.fecha.getDate() + dias);
                this.inscription.fechaFinal = fechaFinal;
            }
            if (this.precioSeleccionado.tipoDuracion == 2) {
                let dias = this.precioSeleccionado.duracion * 7;
                let fechaFinal = new Date(this.inscription.fecha.getFullYear(), this.inscription.fecha.getMonth(), this.inscription.fecha.getDate() + dias);
                this.inscription.fechaFinal = fechaFinal;
            }
            if (this.precioSeleccionado.tipoDuracion == 3) {
                let dias = this.precioSeleccionado.duracion * 15;
                let fechaFinal = new Date(this.inscription.fecha.getFullYear(), this.inscription.fecha.getMonth(), this.inscription.fecha.getDate() + dias);
                this.inscription.fechaFinal = fechaFinal;
            }
            if (this.precioSeleccionado.tipoDuracion == 4) {
                let anio = this.inscription.fecha.getFullYear();
                let meses = this.precioSeleccionado.duracion + this.inscription.fecha.getMonth();
                let dia = this.inscription.fecha.getDate();
                let fechaFinal = new Date(anio, meses, dia);
                this.inscription.fechaFinal = fechaFinal;
            }
            if (this.precioSeleccionado.tipoDuracion == 5) {
                let anio = this.inscription.fecha.getFullYear() + this.precioSeleccionado.duracion;
                let meses = this.precioSeleccionado.duracion + this.inscription.fecha.getMonth();
                let dia = this.inscription.fecha.getDate();
                let fechaFinal = new Date(anio, meses, dia);
                this.inscription.fechaFinal = fechaFinal;
            }
        }
        else {
            this.precioSeleccionado = new _models_price__WEBPACK_IMPORTED_MODULE_0__["Price"]();
            this.inscription.fecha = null;
            this.inscription.fechaFinal = null;
            this.inscription.precios = null;
            this.inscription.total = 0;
        }
    }
}
InscriptionComponent.ɵfac = function InscriptionComponent_Factory(t) { return new (t || InscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
InscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InscriptionComponent, selectors: [["app-inscription"]], decls: 29, vars: 12, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-sm-6"], [3, "nombre", "seleccionoCliente", "canceloCliente"], ["for", ""], ["name", "", "id", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["type", "number", "disabled", "", 1, "form-control", 3, "value"], [1, "btn", "btn-primary", 3, "click"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "card-title"]], template: function InscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-select-client", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("seleccionoCliente", function InscriptionComponent_Template_app_select_client_seleccionoCliente_3_listener($event) { return ctx.asignarCliente($event); })("canceloCliente", function InscriptionComponent_Template_app_select_client_canceloCliente_3_listener() { return ctx.eliminarCliente(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InscriptionComponent_Template_select_ngModelChange_7_listener($event) { return ctx.idPrecio = $event; })("change", function InscriptionComponent_Template_select_change_7_listener($event) { return ctx.seleccionarPrecio($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Seleccione un precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, InscriptionComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Fecha Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Fecha Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InscriptionComponent_Template_button_click_25_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, InscriptionComponent_div_28_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nombre", ctx.clienteSeleccionado.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.idPrecio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.precios);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 8, ctx.inscription.fecha));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 10, ctx.inscription.fechaFinal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.inscription.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clienteSeleccionado.dni);
    } }, directives: [_select_client_select_client_component__WEBPACK_IMPORTED_MODULE_6__["SelectClientComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-inscription',
                templateUrl: './inscription.component.html',
                styleUrls: ['./inscription.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "gS64":
/*!***************************************!*\
  !*** ./src/app/models/inscription.ts ***!
  \***************************************/
/*! exports provided: Inscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inscription", function() { return Inscription; });
class Inscription {
    constructor() {
        this.fecha = null;
        this.fechaFinal = null;
        this.cliente = this.cliente;
        this.precios = this.precios;
        this.total = this.total;
    }
    validar() {
        let respuesta = {
            esValido: false,
            mensaje: ''
        };
        if (this.cliente === null || this.cliente === undefined) {
            respuesta.esValido = false;
            respuesta.mensaje = 'Por favor seleccione un cliente';
            return respuesta;
        }
        if (this.precios === null || this.precios === undefined) {
            respuesta.esValido = false;
            respuesta.mensaje = 'No selecciono un precio';
            return respuesta;
        }
        if (this.fecha === null || this.fecha === undefined) {
            respuesta.esValido = false;
            respuesta.mensaje = 'No hay una fecha de inicio';
            return respuesta;
        }
        if (this.fechaFinal === null || this.fechaFinal === undefined) {
            respuesta.esValido = false;
            respuesta.mensaje = 'No hay una fecha final';
            return respuesta;
        }
        if (this.total <= 0 || this.total === undefined) {
            respuesta.esValido = false;
            respuesta.mensaje = 'No se puede calcular el total';
            return respuesta;
        }
        respuesta.esValido = true;
        return respuesta;
    }
}


/***/ }),

/***/ "kyzu":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class AlertService {
    constructor() { }
    alertError(titleParams, textParams) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: titleParams,
            text: textParams,
            icon: 'error'
        });
    }
    alertOk(titleParams, textParams) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: titleParams,
            text: textParams,
            icon: 'success'
        });
    }
    alertWarn(titleParams, textParams) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: titleParams,
            text: textParams,
            icon: 'warning'
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_list_inscriptions_list_inscriptions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/list-inscriptions/list-inscriptions.component */ "60Ss");
/* harmony import */ var _pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/inscription/inscription.component */ "en5d");
/* harmony import */ var _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/prices/prices.component */ "HDBd");
/* harmony import */ var _pages_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-client/add-client.component */ "8A2T");
/* harmony import */ var _pages_list_client_list_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/list-client/list-client.component */ "8+c0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










const routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'inscription', component: _pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionComponent"]
    },
    {
        path: 'listado-clientes', component: _pages_list_client_list_client_component__WEBPACK_IMPORTED_MODULE_5__["ListClientComponent"]
    },
    {
        path: 'agregar-cliente', component: _pages_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__["AddClientComponent"]
    },
    {
        path: 'agregar-cliente/:clientId', component: _pages_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__["AddClientComponent"]
    },
    {
        path: 'precios', component: _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_3__["PricesComponent"]
    },
    {
        path: 'listado-inscripciones', component: _pages_list_inscriptions_list_inscriptions_component__WEBPACK_IMPORTED_MODULE_1__["ListInscriptionsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_10_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_10_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formularioLogin.controls["email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formularioLogin.controls["email"].errors.email);
} }
function LoginComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_15_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formularioLogin.controls["password"].errors.required);
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.textoError, " ");
} }
class LoginComponent {
    constructor(fb, serviceAuth, spinner) {
        this.fb = fb;
        this.serviceAuth = serviceAuth;
        this.spinner = spinner;
        this.datosCorrectos = true;
        this.textoError = '';
    }
    ngOnInit() {
        this.formularioLogin = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ingresar() {
        if (this.formularioLogin.valid) {
            this.datosCorrectos = true;
            this.spinner.show();
            this.serviceAuth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password).then((user) => {
                // console.log(user);
                this.spinner.hide();
            }).catch((error) => {
                //cuando el usuario no existe
                this.datosCorrectos = false;
                this.textoError = error.message;
                this.spinner.hide();
            });
        }
        else {
            this.datosCorrectos = false;
            this.textoError = 'Revisar que los datos esten correctos';
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 6, consts: [[1, "container"], [1, "text-center"], ["src", "../../assets/img/pngtree-gym-logo-png-image_1824195.jpg", "alt", ""], [3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "aria-describedby", "emailHelp", "placeholder", "Ingrese su correo", "formControlName", "email", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Ingrese su contrase\u00F1a", "formControlName", "password", 1, "form-control", 3, "keyUp.enter"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "large", "color", "#fff", "type", "line-scale-pulse-out-rapid", 3, "fullScreen"], [2, "color", "white"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bienvenido, ingrese sus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyUp.enter", function LoginComponent_Template_input_keyUp_enter_14_listener() { return ctx.ingresar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Check me out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() { return ctx.ingresar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ingresando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formularioLogin.controls["email"].invalid && ctx.formularioLogin.controls["email"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formularioLogin.controls["password"].invalid && ctx.formularioLogin.controls["password"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formularioLogin.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.datosCorrectos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
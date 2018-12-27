(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/__data/texts.ts":
/*!*********************************!*\
  !*** ./src/app/__data/texts.ts ***!
  \*********************************/
/*! exports provided: texts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "texts", function() { return texts; });
/* harmony import */ var _models_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__models/text */ "./src/app/__models/text.ts");

var texts = [
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.", "from www.lipsum.com"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", "from www.lipsum.com"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "from 'The Extremes of Good and Evil' by Cicero"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("He who fights with monsters should look to it that he himself does not become a monster. And when you gaze long into an abyss the abyss also gazes into you.", "from 'Beyond Good and Evil' by Friedrich Nietzsche"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Physiologists should think twice before positioning the drive for self-preservation as the cardinal drive of an organic being. Above all, a living thing wants to discharge its strength - life itself is will to power - self-preservation is only one of the indirect and most frequent consequences of this.", "from 'Beyond Good and Evil' by Friedrich Nietzsche"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("How can we satisfy ourselves without going on in infinitum? And, after all, what satisfaction is there in that infinite progression? Let us remember the story of the Indian philosopher and his elephant. It was never more applicable than to the present subject. If the material world rests upon a similar ideal world, this ideal world must rest upon some other; and so on, without end. It were better, therefore, never to look beyond the present material world.", "from 'Dialogues Concerning Natural Religion' by David Hume"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("All that belongs to human understanding, in this deep ignorance and obscurity, is to be sceptical, or at least cautious, and not to admit of any hypothesis whatever, much less of any which is supported by no appearance of probability.", "from 'Dialogues Concerning Natural Religion' by David Hume"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Let the errors and deceits of our very senses be set before us; the insuperable difficulties which attend first principles in all systems; the contradictions which adhere to the very ideas of matter, cause and effect, extension, space, time, motion; and, in a word, quantity of all kinds, the object of the only science that can fairly pretend to any certainty or evidence.", "from 'Dialogues Concerning Natural Religion' by David Hume"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Then before we began to see or hear or otherwise perceive, we must have possessed knowledge of the Equal itself if we were about to refer our sense perceptions of equal objects to it, and realized that all of them were eager to be like it, but were inferior.", "Socrates in Plato's Phaedo"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("I believe, as perhaps you do, that precise knowledge on that subject is impossible or extremely difficult in our present life, but that it surely shows a very poor spirit not to examine thoroughly what is said about it, and to desist before one is exhausted by an all-round investigation.", "Simmias in Plato's Phaedo"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.", "from 'The Meditations' by Marcus Aurelius"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Remember how long thou hast been putting off these things, and how often thou hast received an opportunity from the gods, and yet dost not use it. Thou must now at last perceive of what universe thou art a part, and of what administrator of the universe thy existence is an efflux, and that a limit of time is fixed for thee, which if thou dost not use for clearing away the clouds from thy mind, it will go and thou wilt go, and it will never return.", "from 'The Meditations' by Marcus Aurelius"),
    Object(_models_text__WEBPACK_IMPORTED_MODULE_0__["fromString"])("Through not observing what is in the mind of another a man has seldom been seen to be unhappy; but those who do not observe the movements of their own minds must of necessity be unhappy.", "from 'The Meditations' by Marcus Aurelius"),
];


/***/ }),

/***/ "./src/app/__models/text.ts":
/*!**********************************!*\
  !*** ./src/app/__models/text.ts ***!
  \**********************************/
/*! exports provided: asString, fromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asString", function() { return asString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
function asString(text) {
    return text.letters.map(function (letter) { return letter.value; }).join('');
}
var toLetter = function (char) { return { value: char, isMistyped: false, isReached: false }; };
function fromString(value, description) {
    return {
        letters: value.split('').map(toLetter),
        description: description
    };
}


/***/ }),

/***/ "./src/app/__services/challenge/challenge.ts":
/*!***************************************************!*\
  !*** ./src/app/__services/challenge/challenge.ts ***!
  \***************************************************/
/*! exports provided: Challenge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Challenge", function() { return Challenge; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.prototype.start = function (challengeInfo) {
        this.challengeInfo = challengeInfo;
        this.startTime = window.performance.now();
    };
    Challenge.prototype.finish = function () {
        var finishTime = window.performance.now();
        var result = {
            miliseconds: finishTime - this.startTime,
            typedCharacters: this.challengeInfo.charactersToType,
            typedWords: this.challengeInfo.wordsToType,
        };
        return result;
    };
    Challenge = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Challenge);
    return Challenge;
}());



/***/ }),

/***/ "./src/app/__services/text/text.service.ts":
/*!*************************************************!*\
  !*** ./src/app/__services/text/text.service.ts ***!
  \*************************************************/
/*! exports provided: TextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return TextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/__models/text */ "./src/app/__models/text.ts");
/* harmony import */ var src_app_data_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__data/texts */ "./src/app/__data/texts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var deepCopy = function (obj) { return JSON.parse(JSON.stringify(obj)); };
var TextService = /** @class */ (function () {
    function TextService() {
        this.loadText();
    }
    TextService.prototype.loadText = function () {
        var randomIndex = Math.floor(Math.random() * Math.floor(src_app_data_texts__WEBPACK_IMPORTED_MODULE_2__["texts"].length));
        var randomText = src_app_data_texts__WEBPACK_IMPORTED_MODULE_2__["texts"][randomIndex];
        this.current = deepCopy(randomText);
    };
    TextService.prototype.refresh = function () {
        this.loadText();
    };
    TextService.prototype.typed = function (typedText) {
        this.checkTypedLetters(typedText.split(''));
        this.unreachRemainingText(typedText);
    };
    TextService.prototype.matches = function (typedText) {
        return typedText === Object(src_app_models_text__WEBPACK_IMPORTED_MODULE_1__["asString"])(this.current);
    };
    TextService.prototype.checkTypedLetters = function (textArr) {
        for (var i = 0; i < textArr.length; i++) {
            var originalLetter = this.current.letters[i];
            originalLetter.isReached = true;
            originalLetter.isMistyped = originalLetter.value != textArr[i];
        }
    };
    TextService.prototype.unreachRemainingText = function (typedText) {
        this.current.letters.slice(typedText.length).forEach(function (letter) { return letter.isReached = false; });
    };
    TextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TextService);
    return TextService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_3__["ResultsComponent"] },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'typing-challenge';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _text_display_text_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-display/text-display.component */ "./src/app/text-display/text-display.component.ts");
/* harmony import */ var _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-input/text-input.component */ "./src/app/text-input/text-input.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _text_display_text_display_component__WEBPACK_IMPORTED_MODULE_6__["TextDisplayComponent"],
                _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>typinG-challenge</h1>\n  <div id=\"gh-icon\">\n    <a href=\"https://github.com/kamil-s-solecki/typing-challenge\">\n      <fa-icon [icon]=\"faGithub\"></fa-icon>\n    </a>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  margin: 0;\n  font-family: 'Major Mono Display', monospace;\n  color: #FFFFFF;\n  background-color: #673AB7;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  header * {\n    margin: 0; }\n  header h1 {\n    padding: 15px;\n    cursor: default; }\n  header div#gh-icon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 15px;\n    font-size: 1.9em; }\n  header div#gh-icon a {\n      color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9zdHlsZXMvY29sb3ItcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsVUFBUztFQUNULDZDQUE0QztFQUM1QyxlQ0o0QjtFREs1QiwwQkNQNEI7RURTNUIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEIsRUF3Qi9CO0VBaENEO0lBV0ksVUFBUyxFQUNWO0VBWkg7SUFlSSxjQWpCVTtJQWtCVixnQkFBZSxFQUNoQjtFQWpCSDtJQW9CSSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLHdCQUF1QjtJQUV2QixjQTFCVTtJQTRCVixpQkFBZ0IsRUFLakI7RUEvQkg7TUE2Qk0sZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29sb3ItcGFsZXR0ZS5zY3NzXCI7XG5cbiRwYWRkaW5nOiAxNXB4O1xuXG5oZWFkZXIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xuICBjb2xvcjogJHByaW1hcnktY29sb3ItdGV4dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGgxIHtcbiAgICBwYWRkaW5nOiAkcGFkZGluZztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICBkaXYjZ2gtaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XG5cbiAgICBmb250LXNpemU6IDEuOWVtO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cbiIsIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzUxMkRBODtcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgIzY3M0FCNztcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0QxQzRFOTtcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcbiRhY2NlbnQtY29sb3I6ICAgICAgICAgIzAwOTY4ODtcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcbiRkaXZpZGVyLWNvbG9yOiAgICAgICAgI0JEQkRCRDsiXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <app-text-display></app-text-display>\n  <app-text-input></app-text-input>\n</main>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  margin: 2em auto;\n  width: 70%; }\n\nmain * {\n  margin-top: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCO0VBQ2hCLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHdpZHRoOiA3MCU7XG59XG5cbm1haW4gKiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section>\n    <h1>nice</h1>\n    <span></span>\n    <p>\n      You've typed {{ result.typedCharacters }} characters <br>\n      in {{ result.miliseconds / 1000 | number: '1.0-1' }} seconds <br>\n      which makes {{ result.typedCharacters / (result.miliseconds / 1000) | number: '1.0-0' }} chars per second <br>\n      and {{ result.typedWords / (result.miliseconds / 60000) | number: '1.0-0' }} words per minute \n    </p>\n    <a [routerLink]=\"['/']\">try again</a>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 60%; }\n  .container section {\n    color: #212121;\n    text-align: center; }\n  .container section h1 {\n      font-family: 'Major Mono Display', monospace;\n      font-size: 4em;\n      font-weight: 400;\n      margin-bottom: 0.2em;\n      padding: 0; }\n  .container section span {\n      border-bottom: 3px solid #BDBDBD;\n      display: inline-block;\n      margin: 0;\n      padding: 0;\n      width: 4em; }\n  .container section p {\n      font-family: 'Roboto Slab', serif;\n      margin: 0;\n      padding: 0;\n      margin-top: 0.8em;\n      font-size: 1.4em;\n      line-height: 1.5; }\n  .container section a {\n      display: inline-block;\n      font-family: 'Roboto Mono', monospace;\n      font-family: 'Major Mono Display', monospace;\n      margin-top: 2em;\n      padding: .3em 1em;\n      text-decoration: none;\n      font-size: 1.5em;\n      color: #FFFFFF;\n      background-color: #009688;\n      border-radius: 5px;\n      font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2FtaWwvY29kZS9hbmd1bGFyL3R5cGluZy1jaGFsbGVuZ2Uvc3JjL3N0eWxlcy9jb2xvci1wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixZQUFXLEVBNENaO0VBaEREO0lBT0ksZUNOMEI7SURPMUIsbUJBQWtCLEVBdUNuQjtFQS9DSDtNQVdNLDZDQUE0QztNQUM1QyxlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLHFCQWhCTTtNQWlCTixXQUFVLEVBQ1g7RUFoQkw7TUFtQk0saUNDaEJ3QjtNRGlCeEIsc0JBQXFCO01BQ3JCLFVBQVM7TUFBRSxXQUFVO01BQ3JCLFdBQVUsRUFDWDtFQXZCTDtNQTBCTSxrQ0FBaUM7TUFDakMsVUFBUztNQUFFLFdBQVU7TUFDckIsa0JBQXVCO01BQ3ZCLGlCQUFnQjtNQUNoQixpQkFBZ0IsRUFDakI7RUEvQkw7TUFrQ00sc0JBQXFCO01BQ3JCLHNDQUFxQztNQUNyQyw2Q0FBNEM7TUFDNUMsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsc0JBQXFCO01BQ3JCLGlCQUFnQjtNQUNoQixlQzFDd0I7TUQyQ3hCLDBCQzFDd0I7TUQyQ3hCLG1CQUFrQjtNQUNsQixpQkFBZ0IsRUFFakIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29sb3ItcGFsZXR0ZS5zY3NzJztcblxuJGRpc3Q6IDAuMmVtO1xuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjAlO1xuXG4gIHNlY3Rpb24ge1xuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBoMSB7XG4gICAgICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRkaXN0O1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZGl2aWRlci1jb2xvcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiA0ZW07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAxZW0gLSAkZGlzdDtcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xuICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgcGFkZGluZzogLjNlbSAxZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLXRleHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG59XG4iLCIkcHJpbWFyeS1jb2xvci1kYXJrOiAgICM1MTJEQTg7XG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2NzNBQjc7XG4kcHJpbWFyeS1jb2xvci1saWdodDogICNEMUM0RTk7XG4kcHJpbWFyeS1jb2xvci10ZXh0OiAgICNGRkZGRkY7XG4kYWNjZW50LWNvbG9yOiAgICAgICAgICMwMDk2ODg7XG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM3NTc1NzU7XG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7Il19 */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(route) {
        this.route = route;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.result = this.route.snapshot.queryParams;
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/text-display/text-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/text-display/text-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <p class=\"user-select-none\">\n    <span *ngFor=\"let letter of text.letters\"\n      [ngClass]=\"{\n        valid: letter.isReached && !letter.isMistyped,\n        wrong: letter.isReached && letter.isMistyped\n      }\">{{ letter.value }}</span>\n  </p>\n  <div id=\"description\">{{ text.description }}</div>\n</section>\n"

/***/ }),

/***/ "./src/app/text-display/text-display.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/text-display/text-display.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  font-family: 'Roboto Slab', serif; }\n  section p {\n    padding: 15px;\n    font-size: 1.3em;\n    border-left: 5px solid #BDBDBD;\n    color: #212121;\n    width: 100%;\n    margin-bottom: 0; }\n  section div#description {\n    margin-top: 0;\n    margin-bottom: 0.8em;\n    font-size: 0.8em;\n    color: #757575;\n    display: block;\n    text-align: right; }\n  .valid {\n  color: green; }\n  .wrong {\n  color: red; }\n  .user-select-none {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9hcHAvdGV4dC1kaXNwbGF5L3RleHQtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9zdHlsZXMvY29sb3ItcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0NBQWlDLEVBa0JsQztFQW5CRDtJQUdJLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsK0JDQTBCO0lEQzFCLGVDSDBCO0lESTFCLFlBQVc7SUFDWCxpQkFBZ0IsRUFDakI7RUFUSDtJQVdJLGNBQWE7SUFFYixxQkFEZ0I7SUFFaEIsaUJBRmdCO0lBR2hCLGVDWDBCO0lEWTFCLGVBQWM7SUFDZCxrQkFBaUIsRUFDbEI7RUFHSDtFQUNFLGFBQVksRUFDYjtFQUVEO0VBQ0UsV0FBVSxFQUNYO0VBRUQ7RUFDRSwwQkFBeUI7RUFBRyw2QkFBNkI7RUFDekQsdUJBQXNCO0VBQU0saUJBQWlCO0VBQzdDLHNCQUFxQjtFQUFPLFlBQVksRUFDekMiLCJmaWxlIjoic3JjL2FwcC90ZXh0LWRpc3BsYXkvdGV4dC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbG9yLXBhbGV0dGUuc2Nzcyc7XG5cbnNlY3Rpb24ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gIHAge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRkaXZpZGVyLWNvbG9yO1xuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgZGl2I2Rlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgICRkZXNjLXNpemU6IC44ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogJGRlc2Mtc2l6ZTtcbiAgICBmb250LXNpemU6ICRkZXNjLXNpemU7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4udmFsaWQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi53cm9uZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi51c2VyLXNlbGVjdC1ub25lIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSBhbGwgLyBTYWZhcmkgYWxsICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogSUUgMTArICovXG59IiwiJHByaW1hcnktY29sb3ItZGFyazogICAjNTEyREE4O1xuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjczQUI3O1xuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjRDFDNEU5O1xuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xuJGFjY2VudC1jb2xvcjogICAgICAgICAjMDA5Njg4O1xuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEOyJdfQ== */"

/***/ }),

/***/ "./src/app/text-display/text-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/text-display/text-display.component.ts ***!
  \********************************************************/
/*! exports provided: TextDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDisplayComponent", function() { return TextDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_text_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__services/text/text.service */ "./src/app/__services/text/text.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextDisplayComponent = /** @class */ (function () {
    function TextDisplayComponent(textService) {
        this.textService = textService;
    }
    TextDisplayComponent.prototype.ngOnInit = function () {
        this.textService.refresh();
        this.text = this.textService.current;
    };
    TextDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-display',
            template: __webpack_require__(/*! ./text-display.component.html */ "./src/app/text-display/text-display.component.html"),
            styles: [__webpack_require__(/*! ./text-display.component.scss */ "./src/app/text-display/text-display.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_text_text_service__WEBPACK_IMPORTED_MODULE_1__["TextService"]])
    ], TextDisplayComponent);
    return TextDisplayComponent;
}());



/***/ }),

/***/ "./src/app/text-input/text-input.component.html":
/*!******************************************************!*\
  !*** ./src/app/text-input/text-input.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <textarea [(ngModel)]=\"typedText\" (ngModelChange)=\"onChange()\" rows=\"10\" placeholder=\"Start typing...\"></textarea>\n</section>\n"

/***/ }),

/***/ "./src/app/text-input/text-input.component.scss":
/*!******************************************************!*\
  !*** ./src/app/text-input/text-input.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section textarea {\n  font-family: 'Roboto Mono', monospace;\n  font-size: 1.1em;\n  border: 2px solid #BDBDBD;\n  border-radius: 5px;\n  padding: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  resize: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL2NvZGUvYW5ndWxhci90eXBpbmctY2hhbGxlbmdlL3NyYy9hcHAvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2FtaWwvY29kZS9hbmd1bGFyL3R5cGluZy1jaGFsbGVuZ2Uvc3JjL3N0eWxlcy9jb2xvci1wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxzQ0FBcUM7RUFDckMsaUJBQWdCO0VBQ2hCLDBCQ0MwQjtFREExQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbG9yLXBhbGV0dGUuc2Nzcyc7XG5cbnNlY3Rpb24ge1xuICB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRkaXZpZGVyLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG59IiwiJHByaW1hcnktY29sb3ItZGFyazogICAjNTEyREE4O1xuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjczQUI3O1xuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjRDFDNEU5O1xuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xuJGFjY2VudC1jb2xvcjogICAgICAgICAjMDA5Njg4O1xuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEOyJdfQ== */"

/***/ }),

/***/ "./src/app/text-input/text-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/text-input/text-input.component.ts ***!
  \****************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_text_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__services/text/text.service */ "./src/app/__services/text/text.service.ts");
/* harmony import */ var _services_challenge_challenge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__services/challenge/challenge */ "./src/app/__services/challenge/challenge.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__models/text */ "./src/app/__models/text.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TextInputComponent = /** @class */ (function () {
    function TextInputComponent(textService, challenge, router) {
        this.textService = textService;
        this.challenge = challenge;
        this.router = router;
    }
    TextInputComponent.prototype.ngOnInit = function () {
        this.challengeStarted = false;
    };
    TextInputComponent.prototype.onChange = function () {
        this.startChallengeIfNotStarted();
        this.textService.typed(this.typedText);
        this.finishChallengeIfTypedTextMatches();
    };
    TextInputComponent.prototype.startChallengeIfNotStarted = function () {
        if (!this.challengeStarted) {
            this.challengeStarted = true;
            this.challenge.start({
                charactersToType: this.textService.current.letters.length,
                wordsToType: Object(_models_text__WEBPACK_IMPORTED_MODULE_4__["asString"])(this.textService.current).split(' ').length,
            });
        }
    };
    TextInputComponent.prototype.finishChallengeIfTypedTextMatches = function () {
        if (this.textService.matches(this.typedText)) {
            var result = this.challenge.finish();
            this.router.navigate(['/results'], { queryParams: result });
        }
    };
    TextInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-input',
            template: __webpack_require__(/*! ./text-input.component.html */ "./src/app/text-input/text-input.component.html"),
            styles: [__webpack_require__(/*! ./text-input.component.scss */ "./src/app/text-input/text-input.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_text_text_service__WEBPACK_IMPORTED_MODULE_1__["TextService"],
            _services_challenge_challenge__WEBPACK_IMPORTED_MODULE_2__["Challenge"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TextInputComponent);
    return TextInputComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kamil/code/angular/typing-challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
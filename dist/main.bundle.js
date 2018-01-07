webpackJsonp([1,5],{

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.data = [
            {
                id: 4,
                name: 'Patricia Lebsack',
                email: 'Julianne.OConner@kory.org',
                passed: 'Yes',
            }
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Select...',
                            list: [
                                { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                                { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                                { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
                            ],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    filter: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'email',
                                titleField: 'email',
                            },
                        },
                    },
                },
                passed: {
                    title: 'Passed',
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                            resetText: 'clear',
                        },
                    },
                },
            },
        };
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'advanced-example-filters',
        template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// GLOBAL IMPORT


// SERVICES IMPORT

var SignInComponent = (function () {
    function SignInComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.signinData = {
            username: '',
            password: ''
        };
        if (authService.isAuthenticate) {
            router.navigate(['']);
        }
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.signinData.username) {
            this.error = "Username is needed!";
        }
        else if (!this.signinData.password) {
            this.error = "Password is needed!";
        }
        else {
            this.authService.signin(this.signinData.username, this.signinData.password)
                .subscribe(function (data) {
                _this.router.navigate(['']);
            }, function (error) {
                console.log(error);
                _this.error = error._body.split("<pre>")[1].split("</pre>")[0];
            });
        }
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'my-signin',
        template: __webpack_require__(464)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// GLOBAL IMPORT



var SignUpComponent = (function () {
    function SignUpComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.signupData = {
            username: '',
            password: '',
            email: '',
            name: ''
        };
        if (authService.isAuthenticate) {
            router.navigate(['']);
        }
    }
    // signin the new user if signup successfully
    SignUpComponent.prototype.signin = function (username, password) {
        var _this = this;
        this.authService.signin(username, password)
            .subscribe(function (data) {
            location.reload();
        }, function (error) {
            console.log(error);
            _this.error = error._body.split("<pre>")[1].split("</pre>")[0];
        });
    };
    // create the new user
    SignUpComponent.prototype.signup = function () {
        var _this = this;
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (this.signupData.name.length > 10 || this.signupData.name.length <= 0) {
            this.error = "Name is needed or it is too long!";
        }
        else if (!re.test(this.signupData.email)) {
            this.error = "Email is not correct!";
        }
        else if (!this.signupData.username) {
            this.error = "Username is needed!";
        }
        else if (this.password_confirm !== this.signupData.password) {
            this.error = "Password are not matched!";
        }
        else {
            this.authService.signup(this.signupData)
                .subscribe(function (data) {
                _this.signin(_this.signupData.username, _this.signupData.password);
            }, function (error) {
                console.log(error.text());
                _this.error = error._body.split("<pre>")[1].split("</pre>")[0];
            });
        }
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'my-signup',
        template: __webpack_require__(465)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Create metadata with the `@Component` decorator
var ChatComponent = (function () {
    function ChatComponent(router, chatService, toast) {
        var _this = this;
        this.router = router;
        this.chatService = chatService;
        this.toast = toast;
        // Initialize our `chatData.text` to an empty `string`
        this.chatData = {
            text: '',
            name: '',
            date: ''
        };
        this.mes = {
            text: '',
            name: '',
            date: ''
        };
        this.chats = [];
        this.check_chat = 0;
        this.submit_name = 0;
        this.length_check = 0;
        this.user = [];
        console.log('Chat constructor go!');
        if (localStorage.getItem('token')) {
            this.chatData.name = JSON.parse(localStorage.getItem('token')).local.name;
            chatService.getAll()
                .subscribe(function (res) {
                // Populate our `todo` array with the `response` data
                _this.chats = res;
                _this.length_check = _this.chats.length;
                // Reset `todo` input
                _this.chatData.text = '';
            });
        }
        else {
            this.chatData.name = "";
            router.navigate(['']);
        }
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token')) {
            this.connection = this.chatService.getMessages().subscribe(function (message) {
                if (message["type"] == 'userlist') {
                    _this.user = message["text"].split(',');
                    _this.toast.setMessage(message["event"], 'info');
                    console.log(message["event"]);
                }
                else {
                    _this.mes.name = message["text"].split(",")[0];
                    _this.mes.date = message["text"].split(",")[1];
                    _this.mes.text = message["text"].split(",")[2];
                    _this.chats.push(_this.mes);
                }
            });
            this.chatService.sendMessage(JSON.parse(localStorage.getItem('token')).local.name + " added!!!");
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (localStorage.getItem('token')) {
            this.connection.unsubscribe();
        }
    };
    ChatComponent.prototype.createChat = function () {
        var _this = this;
        this.chatData.date = (new Date()).toString().split('G')[0];
        this.message = this.chatData.name + "," + this.chatData.date + "," + this.chatData.text;
        this.chatService.sendMessage(this.message);
        this.message = '';
        this.chatService.createChat(this.chatData)
            .subscribe(function (res) {
            // Populate our `chat` array with the `response` data
            _this.chats = res;
            // Reset `chat` input
            _this.chatData.text = '';
        });
    };
    ChatComponent.prototype.deleteChat = function (id) {
        var _this = this;
        this.chatService.deleteChat(id)
            .subscribe(function (res) {
            // Populate our `chat` array with the `response` data
            _this.chats = res;
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        // HTML tag for specifying this component
        selector: 'chat',
        template: __webpack_require__(466)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
        this.url = 'us.richardyych.cc:80';
    }
    ChatService.prototype.getAll = function () {
        return this.http.get('/api/chat').map(function (res) { return res.json(); });
    };
    ChatService.prototype.createChat = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/chat', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    ChatService.prototype.deleteChat = function (id) {
        return this.http.delete("/api/chat/" + id).map(function (res) { return res.json(); });
    };
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chuku_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChukuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import NgFor directive


// Create metadata with the `@Component` decorator
var ChukuComponent = (function () {
    function ChukuComponent(router, chukuService, toast, authService) {
        var _this = this;
        this.router = router;
        this.chukuService = chukuService;
        this.toast = toast;
        this.authService = authService;
        // Initialize our `chukuData.text` to an empty `string`
        this.p = 1;
        this.chukuData = {
            user: '',
            name: '',
            price: null,
            number: 0,
            kuaidi: '',
            date: '',
            text: ''
        };
        this.shows = 5;
        this.selected = 3;
        this.chukus = [];
        this.origins = [];
        this.items = [];
        this.array = [];
        this.count = 0;
        this.a = 0;
        this.filter = '';
        this.isLoading = true;
        if (authService.isAuthenticate) {
            chukuService.getAll().subscribe(function (res) {
                // Populate our `chuku` array with the `response` data
                _this.chukus = res;
                _this.origins = res;
                _this.applyFilter();
                _this.a = 0;
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var chuku = res_1[_i];
                    _this.a += chuku.price * chuku.number - ((chuku.kuaidi === "") ? 0 : parseInt(chuku.kuaidi));
                }
                _this.isLoading = false;
            });
            chukuService.getAllitem().subscribe(function (res) {
                // Populate our `chuku` array with the `response` data
                _this.items = res;
            });
        }
        else {
            router.navigate(['']);
        }
    }
    ChukuComponent.prototype.applyFilter = function () {
        var _this = this;
        this.chukus = this.origins.filter(function (chuku) { return (chuku.name.toLowerCase().indexOf(_this.filter.toLowerCase()) >= 0) || (chuku.user.toLowerCase().indexOf(_this.filter.toLowerCase()) >= 0); });
    };
    ChukuComponent.prototype.createChuku = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.chukuData.name = this.chukuData.name.split('+')[1];
            this.chukuService.createChuku(this.chukuData)
                .subscribe(function (res) {
                // Populate our `chuku` array with the `response` data
                _this.chukus = res;
                _this.origins = res;
                _this.a = 0;
                for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                    var chuku = res_2[_i];
                    _this.a += chuku.price * chuku.number - ((chuku.kuaidi === "") ? 0 : parseInt(chuku.kuaidi));
                }
                _this.applyFilter();
                _this.toast.setMessage('Stock Out is added successfully.', 'success');
                _this.chukuData.name = '';
                _this.chukuData.price = null;
                _this.chukuData.number = 0;
                _this.chukuData.kuaidi = '';
            });
        }
    };
    ChukuComponent.prototype.deleteChuku = function (id) {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.chukuService.deleteChuku(id)
                .subscribe(function (res) {
                // Populate our `chuku` array with the `response` data
                _this.chukus = res;
                _this.origins = res;
                _this.applyFilter();
                _this.a = 0;
                for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                    var chuku = res_3[_i];
                    _this.a += chuku.price * chuku.number - ((chuku.kuaidi === "") ? 0 : parseInt(chuku.kuaidi));
                }
                _this.toast.setMessage('Stock Out is deleted successfully.', 'success');
            });
        }
    };
    ChukuComponent.prototype.isadmin = function () {
        if (localStorage.getItem('token')) {
            return (JSON.parse(localStorage.getItem('token')).role === "admin");
        }
        else {
            return false;
        }
    };
    ChukuComponent.prototype.updateChuku = function (chuku) {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.chukuData.name = this.chukuData.name.split('+')[1];
            this.chukuService.updateChuku(chuku._id, this.chukuData)
                .subscribe(function (res) {
                _this.origins[_this.origins.indexOf(chuku)] = res;
                _this.chukus = _this.origins;
                _this.a = 0;
                for (var _i = 0, _a = _this.origins; _i < _a.length; _i++) {
                    var chuku_1 = _a[_i];
                    _this.a += chuku_1.price * chuku_1.number - ((chuku_1.kuaidi === "") ? 0 : parseInt(chuku_1.kuaidi));
                }
                _this.applyFilter();
                _this.toast.setMessage('Stock Out is edited successfully.', 'success');
            });
        }
    };
    ChukuComponent.prototype.updateForm = function (chuku) {
        this.chukuData.text = chuku.text;
        this.chukuData.name = this.getItemPrice(chuku.name) + '+' + chuku.name;
        this.chukuData.price = chuku.price;
        this.chukuData.number = chuku.number;
        this.chukuData.kuaidi = chuku.kuaidi;
        this.chukuData.date = chuku.date;
        this.chukuData.user = chuku.user;
    };
    ChukuComponent.prototype.getItemPrice = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name == name) {
                return item.price;
            }
        }
    };
    return ChukuComponent;
}());
ChukuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        // HTML tag for specifying this component
        selector: 'chuku',
        template: __webpack_require__(467)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chuku_service__["a" /* ChukuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chuku_service__["a" /* ChukuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ChukuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chuku.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChukuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// `Injectable` is usually used with `Dart` metadata
// generation; it has no special meaning within `TypeScript`
// This makes sure `TypeScript` emits the needed metadata
// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
var ChukuService = (function () {
    function ChukuService(http) {
        this.http = http;
        if (localStorage.getItem('token')) {
            this.user = JSON.parse(localStorage.getItem('token'))._id;
        }
    }
    ChukuService.prototype.getAll = function () {
        return this.http.get("/api/chuku/" + this.user)
            .map(function (res) { return res.json(); });
    };
    ChukuService.prototype.createChuku = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/chuku/" + this.user, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ChukuService.prototype.deleteChuku = function (id) {
        return this.http.delete("/api/chuku/" + this.user + "/" + id)
            .map(function (res) { return res.json(); });
    };
    ChukuService.prototype.getAllitem = function () {
        return this.http.get("/api/item/" + this.user)
            .map(function (res) { return res.json(); });
    };
    ChukuService.prototype.getItem = function (name) {
        return this.http.get("/api/item/" + this.user + "/" + name)
            .map(function (res) { return res.json(); });
    };
    ChukuService.prototype.updateChuku = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("/api/chuku/" + this.user + "/" + id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ChukuService;
}());
ChukuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ChukuService);

var _a;
//# sourceMappingURL=chuku.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(toast, authService) {
        this.toast = toast;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(468)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Create metadata with the `@Component` decorator
var ItemComponent = (function () {
    function ItemComponent(router, itemService, toast, authService) {
        this.router = router;
        this.itemService = itemService;
        this.toast = toast;
        this.authService = authService;
        // Initialize our `itemData.text` to an empty `string`
        this.p = 1;
        this.itemData = {
            name: '',
            price: 0,
            saleprice: 0,
            number: 0,
            text: ''
        };
        this.filter = '';
        this.shows = 5;
        this.items = [];
        this.origins = [];
        this.rukus = [];
        this.chukus = [];
        this.arrays = [];
        this.clicked = false;
        this.isLoading = true;
        if (authService.isAuthenticate) {
            this.getAll();
        }
        else {
            router.navigate(['']);
        }
    }
    ItemComponent.prototype.getAll = function () {
        var _this = this;
        this.itemService.getAll().subscribe(function (res) {
            _this.items = res;
            _this.origins = res;
            _this.isLoading = false;
            _this.itemData.text = '';
            _this.itemData.name = '';
            _this.itemData.price = 0;
            _this.itemData.number = 0;
            _this.itemData.saleprice = 0;
        });
    };
    ItemComponent.prototype.applyFilter = function () {
        var _this = this;
        this.items = this.origins.filter(function (item) { return item.name.toLowerCase().indexOf(_this.filter.toLowerCase()) >= 0; });
    };
    ItemComponent.prototype.createItem = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.itemService.createItem(this.itemData)
                .subscribe(function (res) {
                // Populate our `item` array with the `response` data
                _this.items = res;
                _this.origins = res;
                _this.applyFilter();
                _this.toast.setMessage('Product is added successfully.', 'success');
                // Reset `item` input
                _this.itemData.text = '';
                _this.itemData.name = '';
                _this.itemData.price = 0;
                _this.itemData.number = 0;
                _this.itemData.saleprice = 0;
            }, function (error) { return _this.toast.setMessage(error._body + '', 'danger'); });
        }
    };
    ItemComponent.prototype.deleteItem = function (id) {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.itemService.deleteItem(id)
                .subscribe(function (res) {
                // Populate our `item` array with the `response` data
                _this.items = res;
                _this.origins = res;
                _this.applyFilter();
                _this.toast.setMessage('Product is deleted successfully.', 'success');
            }, function (error) { return console.log(error._body); });
        }
    };
    ItemComponent.prototype.updateItem = function (item) {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            console.log(this.itemData);
            this.itemService.updateItem(item._id, this.itemData)
                .subscribe(function (res) {
                _this.origins[_this.origins.indexOf(item)] = res;
                _this.items = _this.origins;
                _this.applyFilter();
                _this.toast.setMessage('Product is edited successfully.', 'success');
            });
        }
    };
    ItemComponent.prototype.updateItems = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.itemService.getAllruku()
                .subscribe(function (res) {
                // Populate our `item` array with the `response` data
                _this.rukus = res;
                for (var _i = 0, _a = _this.rukus; _i < _a.length; _i++) {
                    var ruku = _a[_i];
                    console.log(ruku.number);
                    if (isNaN(_this.arrays[ruku.name])) {
                        _this.arrays[ruku.name] = 0;
                    }
                    _this.arrays[ruku.name] = _this.arrays[ruku.name] + ruku.number;
                }
                console.log(_this.arrays);
                _this.itemService.getAllchuku()
                    .subscribe(function (res) {
                    // Populate our `item` array with the `response` data
                    _this.chukus = res;
                    console.log(_this.chukus);
                    for (var _i = 0, _a = _this.chukus; _i < _a.length; _i++) {
                        var chuku = _a[_i];
                        console.log(chuku.number);
                        if (isNaN(_this.arrays[chuku.name])) {
                            _this.arrays[chuku.name] = 0;
                        }
                        _this.arrays[chuku.name] = _this.arrays[chuku.name] - chuku.number;
                    }
                    console.log(_this.arrays);
                    for (var array in _this.arrays) {
                        console.log(array);
                        console.log(_this.arrays[array]);
                        _this.itemService.updateItem(array, { number: _this.arrays[array] })
                            .subscribe(function (res) {
                        });
                    }
                    _this.clicked = true;
                    _this.arrays = [];
                });
            });
        }
    };
    ItemComponent.prototype.isadmin = function () {
        if (localStorage.getItem('token')) {
            return (JSON.parse(localStorage.getItem('token')).role === "admin");
        }
        else {
            return false;
        }
    };
    ItemComponent.prototype.updateForm = function (item) {
        this.itemData.text = item.text;
        this.itemData.name = item.name;
        this.itemData.price = item.price;
        this.itemData.saleprice = item.saleprice;
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        // HTML tag for specifying this component
        selector: 'item',
        // Let Angular 2 know about `Http` and `ItemService`
        template: __webpack_require__(469)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__item_service__["a" /* ItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        if (localStorage.getItem('token')) {
            this.user = JSON.parse(localStorage.getItem('token'))._id;
        }
    }
    ItemService.prototype.getAll = function () {
        return this.http.get("/api/item/" + this.user).map(function (res) { return res.json(); });
    };
    ItemService.prototype.createItem = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/item/" + this.user, JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    ItemService.prototype.deleteItem = function (id) {
        return this.http.delete("/api/item/" + this.user + "/" + id).map(function (res) { return res.json(); });
    };
    ItemService.prototype.getAllruku = function () {
        return this.http.get('/api/ruku').map(function (res) { return res.json(); });
    };
    ItemService.prototype.getAllchuku = function () {
        return this.http.get('/api/chuku').map(function (res) { return res.json(); });
    };
    ItemService.prototype.updateItem = function (name, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("/api/item/" + this.user + "/" + name, JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    return ItemService;
}());
ItemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ruku_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RukuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import NgFor directive


// Create metadata with the `@Component` decorator
var RukuComponent = (function () {
    function RukuComponent(router, rukuService, authService, toast) {
        var _this = this;
        this.router = router;
        this.rukuService = rukuService;
        this.authService = authService;
        this.toast = toast;
        // Initialize our `rukuData.text` to an empty `string`
        this.p = 1;
        this.rukuData = {
            user: '',
            name: '',
            price: null,
            number: 0,
            location: '',
            date: '',
            text: ''
        };
        this.shows = 5;
        this.selected = 3;
        this.rukus = [];
        this.items = [];
        this.origins = [];
        this.array = [];
        this.count = 0;
        this.a = 0;
        this.filter = '';
        this.isLoading = true;
        if (authService.isAuthenticate) {
            rukuService.getAll().subscribe(function (res) {
                // Populate our `ruku` array with the `response` data
                _this.rukus = res;
                _this.origins = res;
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var ruku = res_1[_i];
                    _this.a += ruku.price * ruku.number;
                }
                _this.isLoading = false;
            });
            rukuService.getAllitem().subscribe(function (res) {
                // Populate our `ruku` array with the `response` data
                _this.items = res;
                // Reset `ruku` input
            });
        }
        else {
            router.navigate(['']);
        }
    }
    RukuComponent.prototype.createRuku = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.rukuData.name = this.rukuData.name.split('+')[1];
            this.rukuService.createRuku(this.rukuData)
                .subscribe(function (res) {
                // Populate our `ruku` array with the `response` data
                _this.rukus = res;
                _this.origins = res;
                _this.applyFilter();
                _this.a = 0;
                for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                    var ruku = res_2[_i];
                    _this.a += ruku.price * ruku.number;
                }
                // Reset `ruku` input
                _this.rukuData.text = '';
                _this.rukuData.name = '';
                _this.rukuData.price = null;
                _this.rukuData.number = 0;
                _this.toast.setMessage('Stock In is added successfully.', 'success');
            });
            // this.rukuService.updateItem(this.rukuData.number)
            //   .subscribe((res) => {
            //       // Populate our `ruku` array with the `response` data
            //       this.rukus = res;
            //       // Reset `ruku` input
            //  });
        }
    };
    RukuComponent.prototype.applyFilter = function () {
        var _this = this;
        this.rukus = this.origins.filter(function (ruku) { return ruku.name.toLowerCase().indexOf(_this.filter.toLowerCase()) >= 0; });
    };
    RukuComponent.prototype.deleteRuku = function (id) {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.rukuService.deleteRuku(id)
                .subscribe(function (res) {
                // Populate our `ruku` array with the `response` data
                _this.rukus = res;
                _this.a = 0;
                for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                    var ruku = res_3[_i];
                    _this.a += ruku.price * ruku.number;
                }
                _this.origins = res;
                _this.applyFilter();
                _this.toast.setMessage('Stock In is deleted successfully.', 'success');
            });
        }
    };
    RukuComponent.prototype.isadmin = function () {
        if (localStorage.getItem('token')) {
            return (JSON.parse(localStorage.getItem('token')).role === "admin");
        }
        else {
            return false;
        }
    };
    RukuComponent.prototype.updateRuku = function (ruku) {
        var _this = this;
        if (JSON.parse(localStorage.getItem('token')).role === "admin") {
            this.rukuData.name = this.rukuData.name.split('+')[1];
            this.rukuService.updateRuku(ruku._id, this.rukuData)
                .subscribe(function (res) {
                _this.origins[_this.origins.indexOf(ruku)] = res;
                _this.a = 0;
                for (var _i = 0, _a = _this.origins; _i < _a.length; _i++) {
                    var ruku_1 = _a[_i];
                    _this.a += ruku_1.price * ruku_1.number;
                }
                _this.rukus = _this.origins;
                _this.applyFilter();
                _this.toast.setMessage('Stock In is edited successfully.', 'success');
            });
        }
    };
    RukuComponent.prototype.updateForm = function (ruku) {
        this.rukuData.text = ruku.text;
        this.rukuData.name = this.getItemPrice(ruku.name) + '+' + ruku.name;
        ;
        this.rukuData.price = ruku.price;
        this.rukuData.number = ruku.number;
        this.rukuData.location = ruku.location;
        this.rukuData.date = ruku.date;
        this.rukuData.user = ruku.user;
    };
    RukuComponent.prototype.getItemPrice = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name == name) {
                return item.price;
            }
        }
    };
    return RukuComponent;
}());
RukuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        // HTML tag for specifying this component
        selector: 'ruku',
        template: __webpack_require__(470)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ruku_service__["a" /* RukuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ruku_service__["a" /* RukuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], RukuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ruku.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RukuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// `Injectable` is usually used with `Dart` metadata
// generation; it has no special meaning within `TypeScript`
// This makes sure `TypeScript` emits the needed metadata
// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
var RukuService = (function () {
    function RukuService(http) {
        this.http = http;
        if (localStorage.getItem('token')) {
            this.user = JSON.parse(localStorage.getItem('token'))._id;
        }
    }
    RukuService.prototype.getAll = function () {
        return this.http.get("/api/ruku/" + this.user)
            .map(function (res) { return res.json(); });
    };
    RukuService.prototype.createRuku = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/ruku/" + this.user, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RukuService.prototype.deleteRuku = function (id) {
        return this.http.delete("/api/ruku/" + this.user + "/" + id)
            .map(function (res) { return res.json(); });
    };
    RukuService.prototype.getAllitem = function () {
        return this.http.get("/api/item/" + this.user)
            .map(function (res) { return res.json(); });
    };
    RukuService.prototype.getItem = function (name) {
        return this.http.get("/api/item/" + this.user + "/" + name)
            .map(function (res) { return res.json(); });
    };
    RukuService.prototype.updateRuku = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("/api/ruku/" + this.user + "/" + id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return RukuService;
}());
RukuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RukuService);

var _a;
//# sourceMappingURL=ruku.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import NgFor directive
// Create metadata with the `@Component` decorator
var StockComponent = (function () {
    function StockComponent(router, stockService) {
        this.router = router;
        this.stockService = stockService;
        // Initialize our `stockData.text` to an empty `string`
        this.stockData = {
            name: '',
            price: null,
            saleprice: null,
            number: 0,
            text: ''
        };
        this.stocks = [];
        console.log('Stock constructor go!');
        if (localStorage.getItem('token')) {
        }
        else {
            router.navigate(['']);
        }
    }
    StockComponent.prototype.submit = function () {
        var _this = this;
        this.stockService.getStockById(this.id).subscribe(function (res) {
            _this.stocks = res[0].hq;
            console.log(_this.stocks);
        });
    };
    return StockComponent;
}());
StockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        // HTML tag for specifying this component
        selector: 'stock',
        template: __webpack_require__(472)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */]) === "function" && _b || Object])
], StockComponent);

var _a, _b;
//# sourceMappingURL=stock.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// `Injectable` is usually used with `Dart` metadata
// generation; it has no special meaning within `TypeScript`
// This makes sure `TypeScript` emits the needed metadata
// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
var StockService = (function () {
    function StockService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        if (localStorage.getItem('token')) {
            this.user = JSON.parse(localStorage.getItem('token'))._id;
        }
    }
    StockService.prototype.getStockById = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('code', 'cn_' + id);
        params.append('start', '20170522');
        params.append('end', '20170526');
        params.append('stat', '1');
        params.append('order', 'D');
        params.append('period', 'd');
        params.append('callback', 'JSONP_CALLBACK');
        params.append('rt', 'jsonp');
        return this.jsonp.get('http://q.stock.sohu.com/hisHq', { params: params }).map(function (res) { return res.json(); });
    };
    return StockService;
}());
StockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _b || Object])
], StockService);

var _a, _b;
//# sourceMappingURL=stock.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Import NgFor directive
// Create metadata with the `@Component` decorator
var SummaryComponent = (function () {
    function SummaryComponent(router, summaryService, authService) {
        var _this = this;
        this.router = router;
        this.summaryService = summaryService;
        this.authService = authService;
        // Initialize our `summaryData.text` to an empty `string`
        this.summaryData = {
            name: '',
            price: null,
            saleprice: null,
            number: 0,
            text: ''
        };
        this.filter = '';
        this.summarys = [];
        this.rukus = [];
        this.chukus = [];
        this.arrays = [];
        this.outcome = 0;
        this.income = 0;
        console.log('Summary constructor go!');
        if (authService.isAuthenticate) {
            summaryService.getAllruku().subscribe(function (res) {
                // Populate our `summary` array with the `response` data
                _this.rukus = res;
                for (var _i = 0, _a = _this.rukus; _i < _a.length; _i++) {
                    var ruku = _a[_i];
                    if (isNaN(_this.arrays[ruku.name])) {
                        _this.arrays[ruku.name] = 0;
                    }
                    _this.arrays[ruku.name] = _this.arrays[ruku.name] + ruku.number;
                    _this.outcome += ruku.number * ruku.price;
                }
                summaryService.getAllchuku().subscribe(function (res) {
                    // Populate our `summary` array with the `response` data
                    _this.chukus = res;
                    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                        var chuku = res_1[_i];
                        if (isNaN(_this.arrays[chuku.name])) {
                            _this.arrays[chuku.name] = 0;
                        }
                        _this.arrays[chuku.name] = _this.arrays[chuku.name] - chuku.number;
                        _this.income += chuku.number * chuku.price - chuku.kuaidi;
                    }
                    for (var i in _this.arrays) {
                        _this.summarys.push({ name: i, number: _this.arrays[i] });
                    }
                });
            });
        }
        else {
            router.navigate(['']);
        }
    }
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        // HTML tag for specifying this component
        selector: 'summary',
        template: __webpack_require__(473)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__summary_service__["a" /* SummaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__summary_service__["a" /* SummaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], SummaryComponent);

var _a, _b, _c;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// `Injectable` is usually used with `Dart` metadata
// generation; it has no special meaning within `TypeScript`
// This makes sure `TypeScript` emits the needed metadata
// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
var SummaryService = (function () {
    function SummaryService(http) {
        this.http = http;
        if (localStorage.getItem('token')) {
            this.user = JSON.parse(localStorage.getItem('token'))._id;
        }
    }
    SummaryService.prototype.getAllruku = function () {
        return this.http.get("/api/ruku/" + this.user).map(function (res) { return res.json(); });
    };
    SummaryService.prototype.getAllchuku = function () {
        return this.http.get("/api/chuku/" + this.user).map(function (res) { return res.json(); });
    };
    return SummaryService;
}());
SummaryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SummaryService);

var _a;
//# sourceMappingURL=summary.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = (function () {
    function TableComponent() {
        this.data = [
            {
                id: 4,
                name: 'Patricia Lebsack',
                email: 'Julianne.OConner@kory.org',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                email: 'Lucio_Hettinger@annie.ca',
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                email: 'Karley_Dach@jasper.info',
                passed: 'Yes',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                email: 'Telly.Hoeger@billy.biz',
                passed: 'No',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                email: 'Sherwood@rosamond.me',
                passed: 'Yes',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                email: 'Chaim_McDermott@dana.io',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                email: 'Rey.Padberg@karina.biz',
                passed: 'No',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                email: 'Rey.Padberg@rosamond.biz',
                passed: 'Yes',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Select...',
                            list: [
                                { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                                { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                                { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
                            ],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    filter: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'email',
                                titleField: 'email',
                            },
                        },
                    },
                },
                passed: {
                    title: 'Passed',
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                            resetText: 'clear',
                        },
                    },
                },
            },
        };
    }
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'advanced-example-filters',
        template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
    })
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// GLOBAL IMPORT




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])();
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // for change the navbar state between online and offline
        this.authenticate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.authenticateState$ = this.authenticate.asObservable();
        if (localStorage.getItem('token')) {
            this.isAuthenticate = true;
        }
    }
    AuthService.prototype.signup = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/auth/signup', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res; });
    };
    AuthService.prototype.signin = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/auth/login', JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                delete user["local"]["password"];
                delete user["local"]["username"];
                _this.isAuthenticate = true;
                console.log(_this.isAuthenticate);
                _this.saveToken(JSON.stringify(user));
            }
        });
    };
    // delete the token in localStorage and change the navbar state
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.authenticate.next(false);
        this.isAuthenticate = false;
    };
    // save the token in localStorage and change the navbar state
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
        this.authenticate.next(true);
    };
    return AuthService;
}());
AuthService = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(336);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tables_table_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_item_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ruku_ruku_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chuku_chuku_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_chat_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stock_stock_component__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_4__tables_table_component__["a" /* TableComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SignInComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__["a" /* SignUpComponent */] },
    { path: 'item', component: __WEBPACK_IMPORTED_MODULE_7__items_item_component__["a" /* ItemComponent */] },
    { path: 'ruku', component: __WEBPACK_IMPORTED_MODULE_8__ruku_ruku_component__["a" /* RukuComponent */] },
    { path: 'chuku', component: __WEBPACK_IMPORTED_MODULE_9__chuku_chuku_component__["a" /* ChukuComponent */] },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["a" /* SummaryComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_11__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_12__stock_stock_component__["a" /* StockComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, translate, authService) {
        this.router = router;
        this.translate = translate;
        this.navbutton = false;
        translate.addLangs(["en", "cn"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');
        this.authService = authService;
    }
    AppComponent.prototype.isChat = function () {
        return window.location.pathname === '/chat';
    };
    AppComponent.prototype.logout = function () {
        this.router.navigate(['']);
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
        selector: 'app-root',
        template: __webpack_require__(463),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tables_table_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_signin_signin_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_signup_signup_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__items_item_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ruku_ruku_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chuku_chuku_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__summary_summary_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chat_chat_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stock_stock_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_services_data_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__items_item_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ruku_ruku_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chuku_chuku_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__summary_summary_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__chat_chat_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__stock_stock_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__chat_chat_directive__ = __webpack_require__(333);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//component












//service








//directive

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "../assets/i18n/", ".json");
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tables_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_signin_signin_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_14__auth_signup_signup_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_15__items_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_16__ruku_ruku_component__["a" /* RukuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__chuku_chuku_component__["a" /* ChukuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__summary_summary_component__["a" /* SummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_29__chat_chat_directive__["a" /* ChatDirective */],
            __WEBPACK_IMPORTED_MODULE_20__stock_stock_component__["a" /* StockComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Http */]]
                }
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__home_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_22__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_23__items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_24__ruku_ruku_service__["a" /* RukuService */],
            __WEBPACK_IMPORTED_MODULE_25__chuku_chuku_service__["a" /* ChukuService */],
            __WEBPACK_IMPORTED_MODULE_26__summary_summary_service__["a" /* SummaryService */],
            __WEBPACK_IMPORTED_MODULE_27__chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_28__stock_stock_service__["a" /* StockService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatDirective = (function () {
    function ChatDirective(el) {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#chatlist').outerHeight(__WEBPACK_IMPORTED_MODULE_1_jquery__(window).outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#todo-form').outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#chat-header').outerHeight() - 10);
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.userlist').outerHeight(__WEBPACK_IMPORTED_MODULE_1_jquery__(window).outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#todo-form').outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#chat-header').outerHeight() - 10);
        }, 0);
        __WEBPACK_IMPORTED_MODULE_1_jquery__(window).resize(function () {
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#chatlist').outerHeight(__WEBPACK_IMPORTED_MODULE_1_jquery__(window).outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#todo-form').outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#chat-header').outerHeight() - 10);
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.userlist').outerHeight(__WEBPACK_IMPORTED_MODULE_1_jquery__(window).outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#todo-form').outerHeight() - __WEBPACK_IMPORTED_MODULE_1_jquery__('#chat-header').outerHeight() - 10);
            }, 0);
        });
        //el.nativeElement.style.backgroundColor = 'yellow';
    }
    return ChatDirective;
}());
ChatDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({ selector: '[chat-body]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object])
], ChatDirective);

var _a;
//# sourceMappingURL=chat.directive.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: this.headers });
    }
    DataService.prototype.getCats = function () {
        return this.http.get('/api/item').map(function (res) { return res.json(); });
    };
    DataService.prototype.countCats = function () {
        return this.http.get('/api/item/count').map(function (res) { return res.json(); });
    };
    DataService.prototype.addCat = function (cat) {
        return this.http.post('/api/item', JSON.stringify(cat), this.options);
    };
    DataService.prototype.getCat = function (cat) {
        return this.http.get("/api/item/" + cat._id, this.options);
    };
    DataService.prototype.editCat = function (cat) {
        return this.http.put("/api/item/" + cat._id, JSON.stringify(cat), this.options);
    };
    DataService.prototype.deleteCat = function (cat) {
        return this.http.delete("/api/item/" + cat._id, this.options);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast_component__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        exports: [
            // Shared Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            // Shared Components
            __WEBPACK_IMPORTED_MODULE_5__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__toast_toast_component__["a" /* ToastComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__toast_toast_component__["a" /* ToastComponent */]],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-toast',
        template: __webpack_require__(471),
        styles: [__webpack_require__(406)]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, ".alert {\n  z-index: 999;\n  position: fixed;\n  top: 80px;\n  left: 30%;\n  width: 40%;\n  opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/**\r\n * Set up a decent box model on the root element\r\n */\nhtml {\n  box-sizing: border-box; }\n\n/**\r\n * Make all elements from the DOM inherit from the parent box-sizing\r\n * Since `*` has a specificity of 0, it does not override the `html` value\r\n * making all elements inheriting from the root box-sizing value\r\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\r\n */\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n/**\r\n * Basic styles for links\r\n */\na {\n  color: #e50050;\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    color: #222222;\n    text-decoration: underline; }\n\n/**\r\n * Basic typography style for copy text\r\n */\nbody {\n  color: #222222;\n  font: normal 125%/1.4 \"Open Sans\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\n/**\r\n * Clear inner floats\r\n */\n.clearfix::after {\n  clear: both;\n  content: '';\n  display: table; }\n\n/**\r\n * Main content containers\r\n * 1. Make the container full-width with a maximum width\r\n * 2. Center it in the viewport\r\n * 3. Leave some space on the edges, especially valuable on small screens\r\n */\n.container {\n  max-width: 1180px;\n  /* 1 */\n  margin-left: auto;\n  /* 2 */\n  margin-right: auto;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  padding-right: 20px;\n  /* 3 */\n  width: 100%;\n  /* 1 */ }\n\n/**\r\n * Hide text while making it readable for screen readers\r\n * 1. Needed in WebKit-based browsers because of an implementation bug;\r\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\r\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0;\n  /* 1 */\n  text-indent: 101%;\n  white-space: nowrap; }\n\n/**\r\n * Hide element while making it readable for screen readers\r\n * Shamelessly borrowed from HTML5Boilerplate:\r\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\r\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.icon-bg i {\n  color: white !important;\n  margin-bottom: 13px;\n  margin-top: 12px !important;\n  float: left; }\n\n.slide {\n  margin-top: -9px; }\n  .slide .slide-part {\n    padding-right: 0px; }\n\n.login-form input {\n  height: 37px; }\n\n.filter {\n  width: 150px;\n  float: right; }\n\n.display-lable {\n  float: right;\n  padding-top: 9px;\n  padding-bottom: 6px;\n  padding-right: 8px; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  height: 50px; }\n\n.myNav {\n  padding: 0px;\n  margin: 0px; }\n\nheader a {\n  font-size: 16px; }\n\n.navbar-brand {\n  padding-top: 14px;\n  font-size: 20px; }\n\n.language-title {\n  color: #9d9d9d;\n  font-size: 18px;\n  display: table !important; }\n  .language-title a, .language-title select {\n    display: table-cell !important; }\n  .language-title a:hover, .language-title a:active, .language-title a:visited, .language-title a:focus {\n    color: #9d9d9d !important; }\n\nbody {\n  overflow-x: hidden; }\n\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 0; }\n  #wrapper.toggled {\n    padding-left: 250px; }\n  #sidebar-wrapper {\n    width: 0; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 250px; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.navbar-fixed-bottom {\n  background: lightgrey;\n  height: 50px; }\n\n.chatbox {\n  display: table;\n  height: auto;\n  margin-bottom: 5px; }\n  .chatbox .time {\n    display: table-cell;\n    word-wrap: break-word; }\n  .chatbox p {\n    overflow: auto;\n    background: #7bb32e;\n    border-radius: 20px;\n    padding: 10px 20px;\n    width: 500px; }\n    @media screen and (max-width: 800px) and (min-width: 700px) {\n      .chatbox p {\n        width: 350px; } }\n    @media screen and (max-width: 600px) and (min-width: 330px) {\n      .chatbox p {\n        width: 200px; } }\n    @media screen and (max-width: 329px) {\n      .chatbox p {\n        width: 150px; } }\n  .chatbox .content {\n    display: inline; }\n\n#chatlist::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5; }\n\n#chatlist::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n\n#chatlist::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555; }\n\n#chatlist {\n  overflow-y: scroll;\n  height: 300px;\n  max-width: 100%;\n  overflow-x: hidden; }\n\n.chat-add {\n  display: table; }\n  .chat-add .chat-content {\n    display: table-cell;\n    border-bottom-right-radius: 0px !important;\n    border-top-right-radius: 0px !important; }\n  .chat-add span {\n    display: table-cell; }\n\n#chatlist .chat {\n  padding-left: 0px !important;\n  list-style-type: none; }\n\n.chat-body {\n  word-wrap: break-word;\n  display: table; }\n  .chat-body strong {\n    color: black;\n    padding: 0px 5px; }\n\n.hide-header {\n  display: none; }\n\n#todo-form {\n  position: fixed;\n  bottom: 0px;\n  z-index: 999; }\n\n#chat-header {\n  position: fixed;\n  top: 0px;\n  background: #7bb32e;\n  width: 100%;\n  right: 15px;\n  z-index: 999; }\n\n#todo-list {\n  padding: 0px 10px;\n  margin: 60px 0px;\n  margin-top: 45px; }\n\n.filter-input {\n  display: table;\n  margin-bottom: 10px; }\n  .filter-input p {\n    display: table-cell; }\n  .filter-input input {\n    display: table-cell; }\n\n.active-link {\n  background: black; }\n\n.homepage a {\n  text-decoration: none; }\n\n.mainstyle {\n  margin-top: 60px;\n  margin-bottom: 80px; }\n\n.chat-home {\n  color: white; }\n\n.online-user {\n  padding-right: 10px; }\n  .online-user a {\n    text-decoration: none; }\n  .online-user a:hover {\n    color: white !important; }\n\n#todo-form {\n  width: 100%;\n  right: 15px; }\n\n.userlist {\n  height: 100%;\n  overflow-y: scroll; }\n\n.userlist::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5; }\n\n.userlist::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n\n.userlist::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555; }\n\n.login-form .form-group {\n  margin: auto;\n  margin-bottom: 10px;\n  width: 350px; }\n  @media screen and (max-width: 600px) and (min-width: 330px) {\n    .login-form .form-group {\n      width: 250px; } }\n  .login-form .form-group button {\n    margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!isChat()\">\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top myNav\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <!--<a class=\"icon-bg\" (click)=\"press()\"><i class=\"fa fa-fw fa-bars fa-2x\"></i></a>-->\r\n                <a class=\"navbar-brand\" routerLink=\"/\">{{ 'HOME.TITLE' | translate }}</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/\" >{{ 'MENU.HOME' | translate }}</a>\r\n                    </li>\r\n                    <li *ngIf=\"authService.isAuthenticate\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/item\" >{{ 'MENU.ITEM' | translate }}</a>\r\n                    </li>\r\n                    <li *ngIf=\"authService.isAuthenticate\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/ruku\" >{{ 'MENU.RUKU' | translate }}</a>\r\n                    </li>\r\n                    <li *ngIf=\"authService.isAuthenticate\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/chuku\" >{{ 'MENU.CHUKU' | translate }}</a>\r\n                    </li>\r\n                    <li *ngIf=\"authService.isAuthenticate\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/summary\" >{{ 'MENU.SUMMARY' | translate }}</a>\r\n                    </li>\r\n                    <li *ngIf=\"authService.isAuthenticate\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/chat\" >{{ 'MENU.CHAT' | translate }}</a>\r\n                    </li>\r\n                    <!-- <li *ngIf=\"authService.isAuthenticate\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a routerLink=\"/stock\" >{{ 'MENU.STOCK' | translate }}</a>\r\n                    </li> -->\r\n                </ul>\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"language-title\">\r\n                       <a> {{ 'HOME.SELECT' | translate }}</a>\r\n                        <select #langSelect (change)=\"translate.use(langSelect.value)\" class=\"form-control\">\r\n                          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\r\n                        </select>\r\n                    </li>\r\n                    <li *ngIf=\"!authService.isAuthenticate\"><a routerLink=\"/signup\"><span class=\"glyphicon glyphicon-user\"></span> {{ 'MENU.SIGNUP' | translate }}</a></li>\r\n                    <li *ngIf=\"!authService.isAuthenticate\"><a routerLink=\"/signin\"><span class=\"glyphicon glyphicon-log-in\"></span> {{ 'MENU.LOGIN' | translate }}</a></li>\r\n                    <li *ngIf=\"authService.isAuthenticate\"><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> {{ 'MENU.LOGOUT' | translate }}</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n\r\n<main [ngClass]=\"{'mainstyle': !isChat()}\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n\r\n<footer *ngIf=\"!isChat()\" class=\"navbar-fixed-bottom\">\r\n    Angular 2 by<a [href]=\"url\">@richardyych</a>\r\n\r\n</footer>\r\n\r\n\r\n"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"row main\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"panel-title text-center\">\r\n                <h1 class=\"title\">Sign In</h1>\r\n                <hr />\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n            <strong>{{error}}</strong>\r\n        </div>\r\n        <div class=\"main-login main-center login-form\">\r\n            <form class=\"form-horizontal\" method=\"post\" action=\"#\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"signinData.username\" id=\"username\"  placeholder=\"Enter your Username\"  required/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"signinData.password\" name=\"password\" id=\"password\"  placeholder=\"Enter your Password\" required/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group \">\r\n                    <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-primary btn-lg btn-block login-button\">Login</button>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row main\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"panel-title text-center\">\r\n                <h1 class=\"title\">Sign Up</h1>\r\n                <hr />\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n            <strong>{{error}}</strong>\r\n        </div>\r\n        <!--<form>-->\r\n\t<!--<div class=\"form-group\">-->\r\n\t\t<!--<label>Username</label>-->\r\n        <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"signupData.username\" required>-->\r\n    <!--</div>-->\r\n\r\n    <!--<div class=\"form-group\">-->\r\n\t\t<!--<label>Password</label>-->\r\n        <!--<input type=\"password\" class=\"form-control\" [(ngModel)]=\"signupData.password\" required>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"form-group\">-->\r\n        <!--<label>Email</label>-->\r\n        <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"signupData.email\" required>-->\r\n    <!--</div>-->\r\n\r\n    <!--<button type=\"submit\" (click)=\"signup()\" class=\"btn btn-default\">Submit</button>-->\r\n<!--</form>-->\r\n\r\n        <div class=\"main-login main-center login-form\">\r\n            <form class=\"form-horizontal\" method=\"post\" action=\"#\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\" class=\"cols-sm-2 control-label\">Your Name</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"signupData.name\" id=\"name\"  placeholder=\"Enter your Name\" required />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"signupData.email\" id=\"email\"  placeholder=\"Enter your Email\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"signupData.username\" id=\"username\"  placeholder=\"Enter your Username\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"signupData.password\" name=\"password\" id=\"password\"  placeholder=\"Enter your Password\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>\r\n                    <div class=\"cols-sm-10\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password_confirm\" name=\"confirm\" id=\"confirm\"  placeholder=\"Confirm your Password\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group \">\r\n                    <button type=\"submit\" (click)=\"signup()\" class=\"btn btn-primary btn-lg btn-block login-button\">Register</button>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container chat-total\">\r\n        <app-toast [message]=\"toast.message\"></app-toast>\r\n <ul *ngFor=\"let u of user\">\r\n    <li>{{u}}</li>\r\n </ul>-->\r\n  <app-toast [message]=\"toast.message\"></app-toast>\r\n  <header id=\"chat-header\" class=\"row panel-heading\">\r\n      Chat Web\r\n      <a class=\"chat-home\" routerLink=\"/\"><i class=\"fa fa-home pull-right\"></i></a>\r\n      <div class=\"dropdown pull-right online-user visible-xs\">\r\n        <a class=\"dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" href=\"#\">\r\n        Online {{user.length}}<span class=\"caret\"></span></a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li *ngFor=\"let client of user\"><a>{{client}}</a></li>\r\n        </ul>\r\n      </div>\r\n  </header>\r\n  <!-- TODO LIST -->\r\n  <div id=\"todo-list\"  chat-body class=\"row panel-body\">\r\n      <ul class=\"col-sm-2 hidden-xs userlist\">\r\n          <li class=\"row\" *ngFor=\"let client of user; let i = index\"> <img class=\"col-sm-6\" src=\"http://bootdey.com/img/Content/user_{{i+1}}.jpg\" alt=\"\"><p class=\"col-sm-6\">{{client}}<br>admin</p></li>\r\n\r\n      </ul>\r\n      <div class=\"col-sm-10 col-xs-12\" *ngIf=\"chatData.name != ''\"  #scrollMe id=\"chatlist\"  angular2-auto-scroll  lock-y-offset=\"10\" observe-attributes>\r\n\r\n          <!-- LOOP OVER THE chats IN $scope.chats -->\r\n          <ul class=\"chat\">\r\n          <div class=\"chatbox col-sm-12\" [ngClass]=\"{'pull-right': chatData.name == chat.name, 'pull-left' : chatData.name != chat.name }\" *ngFor=\"let chat of (chats.slice(chats.length - 100,chats.length) )\">\r\n                  <!--<p class=\"time col-sm-3 col-xs-12\">{{chat.date.slice(4,chat.date.length)}}</p>-->\r\n              <!--<div class=\"col-sm-9 col-xs-12\"><p class=\"content\"><strong>{{ chat.name}}: </strong><span>{{ chat.text }}</span></p></div>-->\r\n              <li class=\"clearfix\" [ngClass]=\"{'pull-right': chatData.name == chat.name, 'pull-left' : chatData.name != chat.name }\">\r\n                  <span class=\"chat-img\" [ngClass]=\"{'pull-right': chatData.name == chat.name, 'pull-left' : chatData.name != chat.name }\">\r\n                            <img src=\"http://placehold.it/50/{{ chatData.name == chat.name ?  '55C1E7' :'FA6F57'}}/fff&text={{chat.name.substr(0,3)}}\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                   </span>\r\n                  <div class=\"chat-body clearfix \">\r\n\r\n                      <div class=\"header\">\r\n                          <small class=\"text-muted\" [ngClass]=\"{'pull-right': chatData.name == chat.name, 'pull-left' : chatData.name != chat.name }\"><strong>{{chat.name}}</strong><span class=\"glyphicon glyphicon-time\"></span>{{chat.date}}</small>\r\n                      </div>\r\n                      <p >\r\n                          {{chat.text}}\r\n                      </p>\r\n                  </div>\r\n              </li>\r\n          </div>\r\n          </ul>\r\n\r\n      </div>\r\n  </div>\r\n\r\n  <!-- FORM TO CREATE chats -->\r\n\r\n   <footer id=\"todo-form\" class=\"row panel-footer\">\r\n      <div class=\" text-center\">\r\n          <form>\r\n              <div class=\"form-group chat-add\">\r\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\r\n                  <input name=\"chat\" type=\"text\" class=\"form-control input-md text-center chat-content\" placeholder=\"I am a developer\" [(ngModel)]=\"chatData.text\" [disabled]=\"chatData.name==''\" required>\r\n\r\n              <!-- createToDo() WILL CREATE NEW chats -->\r\n              <span class=\"input-group-btn\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-md\"\r\n                    (click)=\"createChat()\" [disabled]=\"chatData.text==''\">Send</button>\r\n              </span>\r\n              </div>\r\n          </form>\r\n      </div>\r\n  </footer>\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <h4>Stock Out</h4>\r\n      <app-toast [message]=\"toast.message\"></app-toast>\r\n<!-- data-bind to the input element; store value in yourName -->\r\n                          <select  class=\"filter form-control col-sm-4\" [(ngModel)]=\"shows\">\r\n                            <option>5</option>\r\n                            <option>10</option>\r\n                            <option>20</option>\r\n                            <option>50</option>\r\n                            <option [attr.value]=\"chukus.length\">All</option>\r\n                          </select>\r\n                                                <label class=\"display-lable\">Display:</label>\r\n                          \r\n\r\n\r\n      <div class=\"table table-responsive\" mychuku>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add\">\r\n                  <button class=\"btn btn-primary btn-sm\" [disabled]=\"!isadmin()\" data-title=\"Add\" data-toggle=\"modal\" data-target=\"#add\">Add</button>\r\n                </p>\r\n        <p>Total: {{a}}</p>\r\n<!--filter-->\r\n        <div class=\"filter-input\"><p> Filter by Product Name or Client:</p> <input name=\"filter\" (change)=\"applyFilter()\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"filter\"></div>\r\n<!--loading-->\r\n     \r\n        <div class=\"card text-center\" *ngIf=\"isLoading\">\r\n          <h4 class=\"card-header\">Loading...</h4>\r\n          <div class=\"card-block text-xs-center\">\r\n            <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\r\n          </div>\r\n        </div>\r\n        <table *ngIf=\"!isLoading\" id=\"mytable\" class=\"table table-bordered table-hover table-striped\">\r\n\r\n          <thead>\r\n            <th>Date</th>\r\n            <th>Client</th>\r\n            <th>Product Name</th>\r\n            <th>Price</th>\r\n            <th>Amount</th>\r\n            <th>Ship￥</th>\r\n            <th>Subtotal</th>\r\n            <th>Note</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n          </thead>\r\n          <tbody *ngFor=\"let chuku of chukus.reverse() | paginate: { itemsPerPage: shows, currentPage: p }\">\r\n\r\n            <tr>\r\n              <td>{{chuku.date}}</td>\r\n              <td>{{chuku.user}}</td>\r\n              <td>{{chuku.name}}</td>\r\n              <td>{{chuku.price}}</td>\r\n              <td>{{chuku.number}}</td>\r\n              <td>{{chuku.kuaidi}}</td>\r\n              <td>{{chuku.number*chuku.price - chuku.kuaidi}}</td>\r\n              <td>{{chuku.text}}</td>\r\n              <td>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\r\n                  <button (click)=\"updateForm(chuku)\" class=\"btn btn-primary btn-sm\" data-title=\"Edit\" [disabled]=\"!isadmin()\" data-toggle=\"modal\" [attr.data-target]=\"'#edit-' + chuku._id\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\r\n                </p>\r\n              </td>\r\n              <td>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\">\r\n                  <button class=\"btn btn-danger btn-sm\" data-title=\"Delete\" [disabled]=\"!isadmin()\" data-toggle=\"modal\" [attr.data-target]=\"'#delete-' + chuku._id\"><span class=\"glyphicon glyphicon-trash\"></span></button>\r\n                </p>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n            <!--for delete-->\r\n            <div [attr.id]=\"'delete-' + chuku._id\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Delete this entry</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n\r\n                    <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record {{chuku.name}}?</div>\r\n\r\n                  </div>\r\n                  <div class=\"modal-footer \">\r\n                    <button type=\"button\" (click)=\"deleteChuku(chuku._id)\" data-dismiss=\"modal\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n\r\n            <!--for edit-->\r\n            <div class=\"modal fade\" [attr.id]=\"'edit-' + chuku._id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit this entry</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <form class=\"form-horizontal\" >\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Date \">Date</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Date \" name=\"Date \" type=\"Date\" placeholder=\"Date \" class=\"form-control input-md\" [(ngModel)]=\"chukuData.date\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Client\">Client</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Client\" name=\"Client\" type=\"text\" placeholder=\"Client\" class=\"form-control input-md\" [(ngModel)]=\"chukuData.user\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Product Name\">Product Name</label>\r\n                        <div class=\"col-md-6\">\r\n                          <select #t class=\"form-control\" name=\"select-1\"\r\n                                  (change)=\"chukuData.price = t.value.split('+')[0];\" [(ngModel)]=\"chukuData.name\">\r\n                            <option *ngFor=\"let item of items;\" value=\"{{item.price}}+{{item.name}}\">\r\n                              {{item.name}}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Price\">Price</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Price\" name=\"Price\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"chukuData.price\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Amount\">Amount</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Amount\" name=\"Amount\" type=\"text\" placeholder=\"Amount\" class=\"form-control input-md\" [(ngModel)]=\"chukuData.number\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Kuaidi \">Kuaidi</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Kuaidi \" name=\"Kuaidi \" type=\"text\" placeholder=\"Kuaidi \" class=\"form-control input-md\" [(ngModel)]=\"chukuData.kuaidi\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Notes \">Notes</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Notes \" name=\"Notes \" type=\"text\" placeholder=\"Notes \" class=\"form-control input-md\" [(ngModel)]=\"chukuData.text\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n                        <div class=\"col-md-4\">\r\n                          <button type=\"submit\" data-dismiss=\"modal\" name=\"\" (click)=\"updateChuku(chuku)\" class=\"btn btn-success\">Update</button>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n            <!--done-->\r\n          </tbody>\r\n\r\n        </table>\r\n        <div class=\"text-center\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n                  <div class=\"modal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\">\r\n                      <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                          <h4 class=\"modal-title custom_align\" id=\"Heading\">Add this entry</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                              <form class=\"form-horizontal\" >\r\n\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Date \">Date</label>\r\n                                <div class=\"col-md-6\">\r\n                                <input id=\"Date \" name=\"Date \" type=\"Date\" placeholder=\"Date \" class=\"form-control input-md\" [(ngModel)]=\"chukuData.date\" required=\"\">\r\n\r\n                                </div>\r\n                              </div>\r\n                              \r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Client\">Client</label>\r\n                                <div class=\"col-md-6\">\r\n                                <input id=\"Client\" name=\"Client\" type=\"text\" placeholder=\"Client\" class=\"form-control input-md\" [(ngModel)]=\"chukuData.user\" required=\"\">\r\n\r\n                                </div>\r\n                              </div>\r\n                              <!-- Text input-->\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Product Name\">Product Name</label>\r\n                                <div class=\"col-md-6\">\r\n                                  <select #t class=\"form-control\" name=\"select-2\"\r\n                                      (change)=\"chukuData.price = t.value.split('+')[0];\" [(ngModel)]=\"chukuData.name\">\r\n                                    <option *ngFor=\"let item of items;\" value=\"{{item.saleprice}}+{{item.name}}\">\r\n                                      {{item.name}}\r\n                                    </option>\r\n                                  </select>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <!-- Text input-->\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Price\">Price</label>\r\n                                <div class=\"col-md-6\">\r\n                                <input id=\"Price\" name=\"Price\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"chukuData.price\" required=\"\">\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <!-- Text input-->\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Amount\">Amount</label>\r\n                                <div class=\"col-md-6\">\r\n                                <input id=\"Amount\" name=\"Amount\" type=\"text\" placeholder=\"Amount\" class=\"form-control input-md\" [(ngModel)]=\"chukuData.number\" required=\"\">\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Kuaidi \">Kuaidi</label>\r\n                                <div class=\"col-md-6\">\r\n                                <input id=\"Kuaidi \" name=\"Kuaidi \" type=\"text\" placeholder=\"Kuaidi \" class=\"form-control input-md\" [(ngModel)]=\"chukuData.kuaidi\" required=\"\">\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"Notes \">Notes</label>\r\n                                <div class=\"col-md-6\">\r\n                                <input id=\"Notes \" name=\"Notes \" type=\"text\" placeholder=\"Notes \" class=\"form-control input-md\" [(ngModel)]=\"chukuData.text\" required=\"\">\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <!-- Text input-->\r\n\r\n\r\n\r\n                              <!-- Button -->\r\n                              <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n                                <div class=\"col-md-4\">\r\n                                  <button type=\"submit\" data-dismiss=\"modal\" name=\"\" (click)=\"createChuku()\" class=\"btn btn-success\">Add</button>\r\n                                </div>\r\n                              </div>\r\n\r\n\r\n                              </form>\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- /.modal-content -->\r\n                    </div>\r\n                    <!-- /.modal-dialog -->\r\n                  </div>\r\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Warehouse App</h3>\r\n<div class=\"row\">\r\n<div class=\"col-sm-4 col-sm-offset-4 alert alert-warning text-center\" role=\"alert\" *ngIf=\"!authService.isAuthenticate\" >\r\n  <strong>Warning!</strong> You have to log in to see contents!\r\n</div>\r\n<div class=\"col-sm-4\"></div>\r\n</div>\r\n<br>\r\n  <div class=\"container homepage\" *ngIf=\"authService.isAuthenticate\">\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\"> </div>\r\n    <div class=\"col-sm-4 text-center\"><a routerLink=\"/item\"><img src=\"../../assets/img/items_final.jpg\"><h5 class=\"text-center\">{{ 'MENU.ITEM' | translate }}</h5></a></div>\r\n    <div class=\"col-sm-4\"> </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\"><a class=\"pull-right\" routerLink=\"/ruku\"><img src=\"../../assets/img/ruku_final.jpg\"><h5 class=\"text-center\">{{ 'MENU.RUKU' | translate }}</h5></a></div>\r\n    <div class=\"col-sm-2\"> </div>\r\n    <div class=\"col-sm-5\"><a class=\"pull-left\" routerLink=\"/chuku\"><img src=\"../../assets/img/chuku_final.jpg\"><h5 class=\"text-center\">{{ 'MENU.CHUKU' | translate }}</h5></a></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\"> </div>\r\n    <div class=\"col-sm-4 text-center\"><a routerLink=\"/summary\"><img src=\"../../assets/img/summary_final.jpg\"><h5 class=\"text-center\">{{ 'MENU.SUMMARY' | translate }}</h5></a></div>\r\n    <div class=\"col-sm-4\"> </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<div class=\"text-center\">\r\n  This is the app for the warehouse database.\r\n  <br>Using Angular 4.0 + TypeScript 2.x + passport.js + mongodb + node.js + express + sass\r\n  <br>My Email: Richardyych@gmail.com\r\n  <br>Demo User: admin ; Password: password\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n</div>"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <h4>{{ 'ITEM.TITLE' | translate }}</h4>\r\n      <app-toast [message]=\"toast.message\"></app-toast>\r\n      <!-- data-bind to the input element; store value in yourName -->\r\n      <select class=\"filter form-control col-sm-4\" [(ngModel)]=\"shows\">\r\n        <option>5</option>\r\n        <option>10</option>\r\n        <option>20</option>\r\n        <option>50</option>\r\n        <option [attr.value]=\"items.length\">All</option>\r\n      </select>\r\n      <label class=\"display-lable\">{{ 'ITEM.DISPLAY' | translate }}:</label>\r\n\r\n\r\n\r\n\r\n      <div class=\"table table-responsive\">\r\n        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add\">\r\n          <button class=\"btn btn-primary btn-sm\" [disabled]=\"!isadmin()\" data-title=\"Add\" data-toggle=\"modal\" data-target=\"#add\">{{ 'ITEM.ADD' | translate }}</button>\r\n        </p>\r\n        <div class=\"filter-input\">\r\n          <p>{{ 'ITEM.FILTER' | translate }}:</p>\r\n          <input name=\"filter\" (change)=\"applyFilter()\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"filter\">\r\n        </div>\r\n<!--loading-->\r\n        <div class=\"card text-center\" *ngIf=\"isLoading\">\r\n          <h4 class=\"card-header\">Loading...</h4>\r\n          <div class=\"card-block text-xs-center\">\r\n            <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\r\n          </div>\r\n        </div>\r\n        <table *ngIf=\"!isLoading\" id=\"mytable\" class=\"table table-bordered table-hover table-striped\">\r\n\r\n          <thead>\r\n            <th>{{ 'ITEM.NAME' | translate  }}</th>\r\n            <th>{{ 'ITEM.PRICE' | translate  }}</th>\r\n            <th>{{ 'ITEM.SALEPRICE' | translate  }}</th>\r\n            <th>{{ 'ITEM.NOTE' | translate  }}</th>\r\n            <th>{{ 'ITEM.EDIT' | translate  }}</th>\r\n            <th>{{ 'ITEM.DELETE' | translate  }}</th>\r\n          </thead>\r\n          <tbody *ngFor=\"let item of items.reverse() | paginate: { itemsPerPage: shows, currentPage: p }\">\r\n\r\n            <!--<tr *ngIf=\"item.name.indexOf(filter)>=0\">-->\r\n            <tr>\r\n              <td>{{item.name}}</td>\r\n              <td>{{item.price}}</td>\r\n              <td>{{item.saleprice}}</td>\r\n              <td>{{item.text}}</td>\r\n              <td>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\r\n                  <button (click)=\"updateForm(item)\" class=\"btn btn-primary btn-sm\" data-title=\"Edit\" [disabled]=\"!isadmin()\" data-toggle=\"modal\" [attr.data-target]=\"'#edit-' + item._id\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\r\n                </p>\r\n              </td>\r\n              <td>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\">\r\n                  <button class=\"btn btn-danger btn-sm\" data-title=\"Delete\" [disabled]=\"!isadmin()\" data-toggle=\"modal\" [attr.data-target]=\"'#delete-' + item._id\"><span class=\"glyphicon glyphicon-trash\"></span></button>\r\n                </p>\r\n              </td>\r\n            </tr>\r\n\r\n            <!--for delete-->\r\n            <div [attr.id]=\"'delete-' + item._id\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Delete this Product</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n\r\n                    <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record {{item.name}}?</div>\r\n\r\n                  </div>\r\n                  <div class=\"modal-footer \">\r\n                    <button type=\"button\" (click)=\"deleteItem(item._id)\" data-dismiss=\"modal\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n\r\n            <!--for edit-->\r\n            <div class=\"modal fade\" [attr.id]=\"'edit-' + item._id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit this Product</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <form class=\"form-horizontal\">\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Product Name\">{{ 'ITEM.NAME' | translate  }}</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Product Name\" name=\"Product Name\" type=\"text\" placeholder=\"Product Name\" class=\"form-control input-md\" [(ngModel)]=\"itemData.name\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Price\">{{ 'ITEM.PRICE' | translate  }}</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Price\" name=\"Price\" type=\"text\" placeholder=\"Price\" class=\"form-control input-md\" [(ngModel)]=\"itemData.price\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Sale Price\">{{ 'ITEM.SALEPRICE' | translate  }}</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Sale Price\" name=\"Sale Price\" type=\"text\" placeholder=\"Sale Price\" class=\"form-control input-md\" [(ngModel)]=\"itemData.saleprice\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Notes \">{{ 'ITEM.NOTE' | translate  }}</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Notes \" name=\"Notes \" type=\"text\" placeholder=\"Notes \" class=\"form-control input-md\" [(ngModel)]=\"itemData.text\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Button -->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n                        <div class=\"col-md-4\">\r\n                          <button id=\"\" name=\"\" (click)=\"updateItem(item)\" data-dismiss=\"modal\" class=\"btn btn-success\">Update</button>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n            <!--done-->\r\n          </tbody>\r\n\r\n        </table>\r\n        <div class=\"text-center\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">{{ 'ITEM.ADD' | translate }}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\">\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Product Name\">{{ 'ITEM.NAME' | translate  }}</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Product Name\" name=\"Product Name\" type=\"text\" placeholder=\"Product Name\" class=\"form-control input-md\" [(ngModel)]=\"itemData.name\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Price\">{{ 'ITEM.PRICE' | translate  }}</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Price\" name=\"Price\" type=\"text\" placeholder=\"Price\" class=\"form-control input-md\" [(ngModel)]=\"itemData.price\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Sale Price\">{{ 'ITEM.SALEPRICE' | translate  }}</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Sale Price\" name=\"Sale Price\" type=\"text\" placeholder=\"Sale Price\" class=\"form-control input-md\" [(ngModel)]=\"itemData.saleprice\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Notes \">{{ 'ITEM.NOTE' | translate  }}</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Notes \" name=\"Notes \" type=\"text\" placeholder=\"Notes \" class=\"form-control input-md\" [(ngModel)]=\"itemData.text\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Button -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n            <div class=\"col-md-4\">\r\n              <button id=\"\" name=\"\" data-dismiss=\"modal\" (click)=\"createItem()\" class=\"btn btn-success\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <h4>Stock In</h4>\r\n      <app-toast [message]=\"toast.message\"></app-toast>\r\n\r\n      <!-- data-bind to the input element; store value in yourName -->\r\n      <select class=\"filter form-control col-sm-4\" [(ngModel)]=\"shows\">\r\n        <option>5</option>\r\n        <option>10</option>\r\n        <option>20</option>\r\n        <option>50</option>\r\n        <option [attr.value]=\"rukus.length\">All</option>\r\n      </select>\r\n      <label class=\"display-lable\">Display:</label>\r\n\r\n\r\n\r\n      <div class=\"table table-responsive\" myruku>\r\n        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add\">\r\n          <button class=\"btn btn-primary btn-sm\" [disabled]=\"!isadmin()\" data-title=\"Add\" data-toggle=\"modal\" data-target=\"#add\">Add</button>\r\n        </p>\r\n        <p>Total: {{a}}</p>\r\n        <div class=\"filter-input\">\r\n          <p> Filter by Product Name:</p>\r\n          <input name=\"filter\" (change)=\"applyFilter()\"type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"filter\">\r\n        </div>\r\n\r\n<!--loading-->\r\n     \r\n        <div class=\"card text-center\" *ngIf=\"isLoading\">\r\n          <h4 class=\"card-header\">Loading...</h4>\r\n          <div class=\"card-block text-xs-center\">\r\n            <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\r\n          </div>\r\n        </div>\r\n        <table *ngIf=\"!isLoading\" id=\"mytable\" class=\"table table-bordered table-hover table-striped\">\r\n\r\n          <thead>\r\n            <th>Date</th>\r\n            <th>Importer Person</th>\r\n            <th>Product Name</th>\r\n            <th>Price</th>\r\n            <th>Amount</th>\r\n            <th>Subtotal</th>\r\n            <th>Location</th>\r\n            <th>Note</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n          </thead>\r\n          <tbody *ngFor=\"let ruku of rukus.reverse() | paginate: { itemsPerPage: shows, currentPage: p }; let i = index \" id=\"datas\">\r\n            <tr>\r\n              <td>{{ruku.date}}</td>\r\n              <td>{{ruku.user}}</td>\r\n              <td>{{ruku.name}}</td>\r\n              <td>{{ruku.price}}</td>\r\n              <td>{{ruku.number}}</td>\r\n              <td>{{ruku.number*ruku.price}}</td>\r\n              <td>{{ruku.location}}</td>\r\n              <td>{{ruku.text}}</td>\r\n              <td>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\r\n                  <button (click)=\"updateForm(ruku)\" class=\"btn btn-primary btn-sm\" data-title=\"Edit\" [disabled]=\"!isadmin()\" data-toggle=\"modal\" [attr.data-target]=\"'#edit-' + ruku._id\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\r\n                </p>\r\n              </td>\r\n              <td>\r\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\">\r\n                  <button class=\"btn btn-danger btn-sm\" data-title=\"Delete\" [disabled]=\"!isadmin()\" data-toggle=\"modal\" [attr.data-target]=\"'#delete-' + ruku._id\"><span class=\"glyphicon glyphicon-trash\"></span></button>\r\n                </p>\r\n              </td>\r\n            </tr>\r\n\r\n            <!--for delete-->\r\n            <div class=\"modal fade\" [attr.id]=\"'delete-' + ruku._id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Delete this entry</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n\r\n                    <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record {{ruku.name}}?</div>\r\n\r\n                  </div>\r\n                  <div class=\"modal-footer \">\r\n                    <button type=\"button\" (click)=\"deleteRuku(ruku._id)\" data-dismiss=\"modal\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n            <div class=\"modal fade\" [attr.id]=\"'edit-' + ruku._id\" tabindex=\" -1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit this entry</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <form class=\"form-horizontal\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Date \">Date</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Date \" name=\"Date \" type=\"Date\" placeholder=\"Date \" class=\"form-control input-md\" [(ngModel)]=\"rukuData.date\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Importer Person\">Importer Person</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Importer Person\" name=\"Importer Person\" type=\"text\" placeholder=\"Importer Person\" class=\"form-control input-md\" [(ngModel)]=\"rukuData.user\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Product Name\">Product Name</label>\r\n                        <div class=\"col-md-6\">\r\n                          <select #t class=\"form-control\" name=\"select-name\" (change)=\"rukuData.price = t.value.split('+')[0];\" [(ngModel)]=\"rukuData.name\">\r\n                            <option *ngFor=\"let item of items;\" value=\"{{item.price}}+{{item.name}}\">\r\n                              {{item.name}}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Price\">Price</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Price\" name=\"Price\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"rukuData.price\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Amount\">Amount</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Amount\" name=\"Amount\" type=\"text\" placeholder=\"Amount\" class=\"form-control input-md\" [(ngModel)]=\"rukuData.number\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"From where \">From where</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"From where \" name=\"From where \" type=\"text\" placeholder=\"From where \" class=\"form-control input-md\" [(ngModel)]=\"rukuData.location\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Notes \">Notes</label>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Notes \" name=\"Notes \" type=\"text\" placeholder=\"Notes \" class=\"form-control input-md\" [(ngModel)]=\"rukuData.text\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- Button -->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n                        <div class=\"col-md-4\">\r\n                          <button type=\"submit\" data-dismiss=\"modal\" name=\"\" (click)=\"updateRuku(ruku)\" class=\"btn btn-success\">Update</button>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n            <!--done-->\r\n          </tbody>\r\n\r\n        </table>\r\n        <div class=\"text-center\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Add this entry</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\">\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Date \">Date</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Date \" name=\"Date \" type=\"Date\" placeholder=\"Date \" class=\"form-control input-md\" [(ngModel)]=\"rukuData.date\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Importer Person\">Importer Person</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Importer Person\" name=\"Importer Person\" type=\"text\" placeholder=\"Importer Person\" class=\"form-control input-md\" [(ngModel)]=\"rukuData.user\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Product Name\">Product Name</label>\r\n            <div class=\"col-md-6\">\r\n              <select #t class=\"form-control\" name=\"select-2\" (change)=\"rukuData.price = t.value.split('+')[0];\" [(ngModel)]=\"rukuData.name\">\r\n                <option *ngFor=\"let item of items;\" value=\"{{item.price}}+{{item.name}}\">\r\n                  {{item.name}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Price\">Price</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Price\" name=\"Price\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"rukuData.price\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Amount\">Amount</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Amount\" name=\"Amount\" type=\"text\" placeholder=\"Amount\" class=\"form-control input-md\" [(ngModel)]=\"rukuData.number\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"From where \">From where</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"From where \" name=\"From where \" type=\"text\" placeholder=\"From where \" class=\"form-control input-md\" [(ngModel)]=\"rukuData.location\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Notes \">Notes</label>\r\n            <div class=\"col-md-6\">\r\n              <input id=\"Notes \" name=\"Notes \" type=\"text\" placeholder=\"Notes \" class=\"form-control input-md\" [(ngModel)]=\"rukuData.text\" required=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n\r\n\r\n\r\n          <!-- Button -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n            <div class=\"col-md-4\">\r\n              <button type=\"submit\" data-dismiss=\"modal\" name=\"\" (click)=\"createRuku()\" class=\"btn btn-success\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  <strong>Message:</strong> {{message.body}}\r\n  <audio *ngIf=\"message.body.indexOf('join') >= 0\" style=\"display:none\" controls autoplay>\r\n    <source src=\"../../../assets/audio/login.wav\" type=\"audio/mpeg\">\r\n    Your browser does not support the audio element.\r\n  </audio>\r\n  <audio *ngIf=\"message.body.indexOf('left') >= 0\" style=\"display:none\" controls autoplay>\r\n    <source src=\"../../../assets/audio/leave.wav\" type=\"audio/mpeg\">\r\n    Your browser does not support the audio element.\r\n  </audio>\r\n</div>"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n            <input name=\"filter\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"id\">\r\n            <button (click)=\"submit()\">submit</button>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n          <table id=\"mytable\" class=\"table table-bordered table-hover table-striped\">\r\n\r\n          <thead>\r\n            <th>Name</th>\r\n          </thead>\r\n          <thead>\r\n            <th colspan=\"2\"></th>\r\n          </thead>\r\n          <tbody *ngFor=\"let item of stocks\">\r\n            <tr>\r\n              <td>{{item}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <h4>Summary</h4>\r\n      <div class=\"table table-responsive\">\r\n\r\n        <table id=\"mytable\" class=\"table table-bordered table-hover table-striped\">\r\n\r\n          <thead>\r\n            <th>Title</th>\r\n            <th><i class=\"fa fa-usd\" aria-hidden=\"true\"></i><i class=\"fa fa-usd\" aria-hidden=\"true\"></i><i class=\"fa fa-usd\" aria-hidden=\"true\"></i></th>\r\n          </thead>\r\n            <tr>\r\n              <td>Income</td>\r\n              <td>{{income |number : '1.2-2'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Outcome</td>\r\n              <td>{{outcome |number : '1.2-2'}}</td>\r\n            </tr>\r\n             <tr>\r\n              <td>Net Income</td>\r\n              <td>{{(income-outcome) |number : '1.2-2'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"clearfix\"></div>\r\n\r\n      </div>\r\n\r\n  <div class=\"filter-input\"><p> Filter by Name:</p> <input name=\"filter\" type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"filter\"></div>\r\n      <div class=\"table table-responsive\">\r\n\r\n        <table id=\"mytable\" class=\"table table-bordered table-hover table-striped\">\r\n\r\n          <thead>\r\n            <th>Name</th>\r\n            <th>Number</th>\r\n          </thead>\r\n          <thead>\r\n            <th colspan=\"2\"></th>\r\n          </thead>\r\n          <tbody *ngFor=\"let item of summarys\">\r\n            <tr *ngIf=\"item.name.indexOf(filter) >= 0\">\r\n              <td>{{item.name}}</td>\r\n              <td>{{item.number}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"clearfix\"></div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(323);


/***/ })

},[753]);
//# sourceMappingURL=main.bundle.js.map
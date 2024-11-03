/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const cache_manager_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(7);
const axios_1 = __webpack_require__(8);
const star_wars_controller_1 = __webpack_require__(9);
const star_wars_service_1 = __webpack_require__(10);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.registerAsync({
                isGlobal: true,
                useFactory: () => ({
                    ttl: 5,
                }),
            }),
            axios_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            }),
        ],
        controllers: [app_controller_1.AppController, star_wars_controller_1.StarWarsController],
        providers: [app_service_1.AppService, star_wars_service_1.StarWarsService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(7);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    constructor() { }
    getData() {
        return { message: "Hello API" };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], AppService);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarWarsController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const star_wars_service_1 = __webpack_require__(10);
const cache_manager_1 = __webpack_require__(5);
let StarWarsController = class StarWarsController {
    constructor(starWarsService) {
        this.starWarsService = starWarsService;
    }
    getPeople(query) {
        const search = query["search"] ?? "";
        const page = parseInt(query["page"]) ?? 0;
        return this.starWarsService.getPeople(search, page);
    }
    getPerson(id) {
        return this.starWarsService.getPerson(id);
    }
    getPlanet(id) {
        return this.starWarsService.getPlanet(id);
    }
};
exports.StarWarsController = StarWarsController;
tslib_1.__decorate([
    (0, common_1.Get)("people"),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StarWarsController.prototype, "getPeople", null);
tslib_1.__decorate([
    (0, common_1.Get)("person/:id"),
    tslib_1.__param(0, (0, common_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StarWarsController.prototype, "getPerson", null);
tslib_1.__decorate([
    (0, common_1.Get)("planet/:id"),
    tslib_1.__param(0, (0, common_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StarWarsController.prototype, "getPlanet", null);
exports.StarWarsController = StarWarsController = tslib_1.__decorate([
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    (0, common_1.Controller)("star-wars"),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof star_wars_service_1.StarWarsService !== "undefined" && star_wars_service_1.StarWarsService) === "function" ? _a : Object])
], StarWarsController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarWarsService = void 0;
const tslib_1 = __webpack_require__(4);
const axios_1 = __webpack_require__(8);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(11);
let StarWarsService = class StarWarsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.baseUrl = "https://www.swapi.tech/api";
        this.limit = 10;
        this.l = "https://www.swapi.tech/api/people?page=2&limit=10";
    }
    getData() {
        return { message: "Hello API" };
    }
    async getPeople(search, page) {
        const searchQuery = search.length > 0 ? `name=${search}` : "";
        const pageQuery = page > 0 ? `page=${page}&limit=${this.limit}` : "";
        let query = "/";
        if (search.length > 0) {
            query = `/?${searchQuery}&${pageQuery}`;
        }
        if (search.length === 0) {
            query = `?${pageQuery}`;
        }
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.baseUrl}/people${query}`).pipe((0, rxjs_1.take)(1)));
        return data;
    }
    async getPerson(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.baseUrl}/people/${id}`).pipe((0, rxjs_1.take)(1)));
        return data;
    }
    async getPlanet(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.baseUrl}/planets/${id}`).pipe((0, rxjs_1.take)(1)));
        return data;
    }
};
exports.StarWarsService = StarWarsService;
exports.StarWarsService = StarWarsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], StarWarsService);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = "api";
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
"use strict";
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_module_ngfactory_1 = require("../aot/app/app.module.ngfactory");
core_1.enableProdMode();
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);

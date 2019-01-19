"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, HostListener, Output, EventEmitter } from "@angular/core";
var core_1 = require("@angular/core");
var repository_model_1 = require("../model/repository.model");
var FirstComponent = (function () {
    function FirstComponent(repository) {
        this.repository = repository;
        this.category = "Soccer";
        this.highlighted = false;
    }
    // @Output("pa-highlight")
    // change = new EventEmitter<boolean>();
    // getProducts(): Product[] {
    //     return this.repository.getProducts()
    //         .filter(p => p.category == this.category);
    // }
    FirstComponent.prototype.getProducts = function () {
        var _this = this;
        return this.model == null ? [] : this.model.getProducts()
            .filter(function (p) { return p.category == _this.category; });
    };
    FirstComponent.prototype.setHighlight = function (type) {
        this.highlighted = type == "mouseenter";
        this.change.emit(this.highlighted);
    };
    __decorate([
        core_1.Input("pa-model"), 
        __metadata('design:type', repository_model_1.Model)
    ], FirstComponent.prototype, "model", void 0);
    __decorate([
        core_1.HostListener("mouseenter", ["$event.type"]),
        core_1.HostListener("mouseleave", ["$event.type"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], FirstComponent.prototype, "setHighlight", null);
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            // template: `<div class="bg-primary p-a-1">First Component</div>`
            // template: `<div class="bg-primary p-a-1">
            //                 There are
            //                     <span class="strong"> {{getProducts().length}} </span>
            //                 products
            //             </div>`
            moduleId: module.id,
            templateUrl: "first.component.html"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;

// import { Component, HostListener, Output, EventEmitter } from "@angular/core";
import { Component, HostListener, Input } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { RestDataSource } from "../model/rest.datasource";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "first",
    // template: `<div class="bg-primary p-a-1">First Component</div>`
    // template: `<div class="bg-primary p-a-1">
    //                 There are
    //                     <span class="strong"> {{getProducts().length}} </span>
    //                 products
    //             </div>`
    moduleId: module.id,
    templateUrl: "first.component.html"
})
export class FirstComponent {

    constructor(private repository: Model) { }

    category: string = "Soccer";
    highlighted: boolean = false;

    // @Output("pa-highlight")
    // change = new EventEmitter<boolean>();

    // getProducts(): Product[] {
    //     return this.repository.getProducts()
    //         .filter(p => p.category == this.category);
    // }

    getProducts(): Product[] {
        return this.model == null ? [] : this.model.getProducts()
            .filter(p => p.category == this.category);
    }

    @Input("pa-model")
    model: Model;

    @HostListener("mouseenter", ["$event.type"])
    @HostListener("mouseleave", ["$event.type"])
    setHighlight(type: string) {
        this.highlighted = type == "mouseenter";
        this.change.emit(this.highlighted);
    }
}
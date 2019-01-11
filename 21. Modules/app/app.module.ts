import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
// import { LOCALE_ID } from "@angular/core";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
// import { LogService } from "./log.service";
// import { LogService, LOG_SERVICE, SpecialLogService } from "./log.service";

// import { LogService, LOG_SERVICE, SpecialLogService, LogLevel } from "./log.service";

import {
    LogService, LOG_SERVICE, SpecialLogService,
    LogLevel, LOG_LEVEL
} from "./log.service";

import { VALUE_SERVICE, PaDisplayValueDirective} from "./valueDisplay.directive";

// let logger = new LogService();
// logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaModel,
        PaStructureDirective, PaIteratorDirective,
        PaCellColor, PaCellColorSwitcher,
        ProductTableComponent, ProductFormComponent, PaToggleView,
        PaAddTaxPipe, PaCategoryFilterPipe,
        PaDiscountDisplayComponent, PaDiscountEditorComponent,
        PaDiscountPipe, PaDiscountAmountDirective, PaDisplayValueDirective],
    // providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
    providers: [DiscountService, SimpleDataSource, Model, LogService,
        // LogService
        // { provide: "logger", useClass: LogService }
        // { provide: LOG_SERVICE, useClass: LogService }
        // { provide: LOG_SERVICE, useClass: LogService, multi: true },
        // { provide: LOG_SERVICE, useClass: SpecialLogService, multi: true }

        // { provide: LogService, useValue: logger }

        // {
        //     provide: LogService, useFactory: () => {
        //         let logger = new LogService();
        //         logger.minimumLevel = LogLevel.DEBUG;
        //         return logger;
        //     }
        /*
        { provide: LOG_LEVEL, useValue: LogLevel.ERROR },
        {
            provide: LogService,
            deps: [LOG_LEVEL],
            useFactory: (level) => {
                let logger = new LogService();
                logger.minimumLevel = level;
                return logger;
            }
            */
            { provide: VALUE_SERVICE, useValue: "Apples" }
            ],
    bootstrap: [ProductComponent]
})
export class AppModule { }
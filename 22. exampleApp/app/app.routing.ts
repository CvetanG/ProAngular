import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { ModelResolver } from "./model/model.resolver";
import { TermsGuard } from "./terms.guard";
import { UnsavedGuard } from "./core/unsaved.guard";
import { LoadGuard } from "./load.guard";

// const childRoutes: Routes = [
// 	// { path: "products", component: ProductCountComponent },
// 	// { path: "categories", component: CategoryCountComponent },
// 	// { path: "", component: ProductCountComponent }
// 	{
// 		path: "",
// 		canActivateChild: [TermsGuard],
// 		children: [{ path: "products", component: ProductCountComponent },
// 					{ path: "categories", component: CategoryCountComponent },
// 					{ path: "", component: ProductCountComponent }],
// 		resolve: { model: ModelResolver }
// 	}
// ];

// const routes: Routes = [
// 	{
// 		path: "ondemand",
// 		loadChildren: "app/ondemand/ondemand.module#OndemandModule",
// 		canLoad: [LoadGuard]
// 	},
// 	{
// 		path: "form/:mode/:id", component: FormComponent,
// 		resolve: { model: ModelResolver },
// 		canDeactivate: [UnsavedGuard]
// 	},
// 	// {
// 	// 	path: "form/:mode", component: FormComponent,
// 	// 	resolve: { model: ModelResolver }
// 	// },

// 	{
// 		path: "form/:mode", component: FormComponent,
// 		resolve: { model: ModelResolver },
// 		canActivate: [TermsGuard]

// 	},

// 	// { path: "form/:mode/:id", component: FormComponent },
// 	// { path: "form/:mode", component: FormComponent },
// 	{ path: "table", component: TableComponent, children: childRoutes },
// 	{ path: "table/:category", component: TableComponent, children: childRoutes },
// 	{ path: "", redirectTo: "/table", pathMatch: "full" },
// 	{ path: "**", component: NotFoundComponent }
// ]

// const routes: Routes = [
//     {
//         path: "form/:mode/:id", component: FormComponent,
//         canDeactivate: [UnsavedGuard]
//     },
//     { path: "form/:mode", component: FormComponent, canActivate: [TermsGuard] },
//     { path: "table", component: TableComponent },
//     { path: "table/:category", component: TableComponent },
//     { path: "", redirectTo: "/table", pathMatch: "full" },
//     { path: "**", component: NotFoundComponent }
// ]

const routes: Routes = [
    {
        path: "ondemand",
        loadChildren: "app/ondemand/ondemand.module#OndemandModule"
    },
    { path: "", redirectTo: "/ondemand", pathMatch: "full" }
]

export const routing = RouterModule.forRoot(routes);
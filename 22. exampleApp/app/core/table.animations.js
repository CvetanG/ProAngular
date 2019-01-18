// import { trigger, style, state, transition, animate, group } from "@angular/core";
"use strict";
// export const HighlightTrigger = trigger("rowHighlight", [
// 	state("selected", style({
// 		backgroundColor: "lightgreen",
// 		fontSize: "20px"
// 	})),
// 	state("notselected", style({
// 		backgroundColor: "lightsalmon",
// 		fontSize: "12px"
// 	})),
// 	// state("*", style({
// 	// 	border: "solid black 2px"
// 	// })),
// 	state("void", style({
// 		opacity: 0
// 	})),
// 	// transition("selected => notselected", animate("200ms")),
// 	// transition("notselected => selected", animate("400ms")),
// 	transition("* => notselected", animate("200ms")),
// 	// transition("* => selected", animate("400ms 200ms ease-in")),
// 	// transition("* => selected",
// 	// 	[animate("400ms 200ms ease-in",
// 	// 		style({
// 	// 			backgroundColor: "lightblue",
// 	// 			fontSize: "25px"
// 	// 		})),
// 	// 	animate("250ms", style({
// 	// 		backgroundColor: "lightcoral",
// 	// 		fontSize: "30px"
// 	// 	})),
// 	// 	animate("200ms")]
// 	// ),
// 	transition("* => selected",
// 		[animate("400ms 200ms ease-in",
// 			style({
// 				backgroundColor: "lightblue",
// 				fontSize: "25px"
// 			})),
// 		group([
// 			animate("250ms", style({
// 				backgroundColor: "lightcoral",
// 			})),
// 			animate("450ms", style({
// 				fontSize: "30px"
// 			})),
// 		]),
// 		animate("200ms")]
// 	),
// 	transition("void => *", animate("500ms"))
// ]);
// // Defining Common Styles in Reusable Groups
// import { trigger, style, state, transition, animate, group } from "@angular/core";
// const commonStyles = {
// 	// border: "black solid 4px",
// 	color: "white"
// };
// export const HighlightTrigger = trigger("rowHighlight", [
// 	state("selected", style([commonStyles, {
// 		backgroundColor: "lightgreen",
// 		fontSize: "20px"
// 	}])),
// 	state("notselected", style([commonStyles, {
// 		backgroundColor: "lightsalmon",
// 		fontSize: "12px",
// 		color: "black"
// 	}])),
// 	state("void", style({
// 		transform: "translateX(-50%)"
// 	})),
// 	transition("* => notselected", animate("200ms")),
// 	transition("* => selected", animate("400ms 200ms ease-in")),
// 	transition("void => *", animate("500ms"))
// ]);
// Applying CSS Framework Styles
var core_1 = require("@angular/core");
var animationUtils_1 = require("./animationUtils");
exports.HighlightTrigger = core_1.trigger("rowHighlight", [
    core_1.state("selected", core_1.style(animationUtils_1.getStylesFromClasses(["bg-success", "h2"]))),
    core_1.state("notselected", core_1.style(animationUtils_1.getStylesFromClasses("bg-info"))),
    core_1.state("void", core_1.style({
        transform: "translateX(-50%)"
    })),
    core_1.transition("* => notselected", core_1.animate("200ms")),
    core_1.transition("* => selected", core_1.animate("400ms 200ms ease-in")),
    core_1.transition("void => *", core_1.animate("500ms"))
]);

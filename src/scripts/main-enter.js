"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
		game.scaleCanvasToFitRectangle(1920, 1080);
		var manHole1 = game.instantiatePrefab("manhole");
		game.entities.set(manHole1, "position", {
				"x": 1400,
				"y": 730
			});
		var manHole2 = game.instantiatePrefab("manhole");
		game.entities.set(manHole2, "position", {
				"x": 3500,
				"y": 480
			});

		var bush1 = game.instantiatePrefab("bush");
		game.entities.set(bush1, "position", {
				"x": 800,
				"y": 830
			});
		var bush2 = game.instantiatePrefab("bush");
		game.entities.set(bush2, "position", {
				"x": 2500,
				"y": 630
			});
};

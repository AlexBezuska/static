"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("scaleSearch", ["size", "scale"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var size = game.entities.get(entity, "size");
		var scale = game.entities.get(entity, "scale");

		if (!scale.scaled) {
			size.width = (size.width / 100) * scale.percent;
			size.height = (size.height / 100) * scale.percent;
			game.entities.set(entity, "scale", {
				"percent": scale.percent,
				"scaled": true
			});
		}
	}, "scaleSearch");
};

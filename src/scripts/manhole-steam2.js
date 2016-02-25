"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("make steam 2");
	var manholePosition = game.entities.get(entity, "position");

	var steam2 = game.instantiatePrefab("manhole-steam2");
	var steam2Position = game.entities.get(steam2, "position");

	steam2Position.x = manholePosition.x;
	steam2Position.y = manholePosition.y - 90;

	var manholeZindex = game.entities.get(entity, "zindex");
	game.entities.get(steam2, "zindex", {
		"zindex": manholeZindex.zindex + 1
	})
	game.entities.get(entity, "timers").steam2.running = true;
};

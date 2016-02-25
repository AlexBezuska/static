"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("make steam 1");
	var manholePosition = game.entities.get(entity, "position");

	var steam1 = game.instantiatePrefab("manhole-steam1");
	var steam1Position = game.entities.get(steam1, "position");

	steam1Position.x = manholePosition.x + 90;
	steam1Position.y = manholePosition.y - 90;

	var manholeZindex = game.entities.get(entity, "zindex");
	game.entities.get(steam1, "zindex", {
		"zindex": manholeZindex.zindex + 1
	})
	game.entities.get(entity, "timers").steam1.running = true;
};

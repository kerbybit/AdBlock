register("chat", function(name, message, event) {
    if (adBlockSettings.getSetting("Private Messages", "Reformat messages")) {
		
		var _message = new Message(event);
		for (var i = 0; i < _message.getMessageParts().length; i++) {
			_message.getMessageParts()[i].chat()
		}
		
        //cancel(event)
        ChatLib.chat("&dPM &5> " + name + "&7: " + message);
    }
}).setCriteria("&dTo &r${name}&r&7: ${message}")

register("chat", function(name, message, event) {
    if (adBlockSettings.getSetting("Private Messages", "Reformat messages")) {
        cancel(event)
	    ChatLib.chat("&dPM &5< " + name + "&7: " + message);
    }
    
    if (adBlockSettings.getSetting("Private Messages", "Play sound")) {
        World.playSound("random.orb", 1000, 1);
    }
}).setCriteria("&dFrom &r${name}&r&7: ${message}")
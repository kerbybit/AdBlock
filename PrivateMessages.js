register("chat", function(name, message, event) {
    if (adBlockSettings.getSetting("Private Messages", "Reformat messages")) {
		new Message(event).addTextComponent(0, "&dPM &5> ").chat()
        cancel(event)
    }
}).setCriteria("&dTo &r${name}&r&7: ${message}")

register("chat", function(name, message, event) {
    if (adBlockSettings.getSetting("Private Messages", "Reformat messages")) {
        new Message(event).addTextComponent(0, "&dPM &5< ").chat()
        cancel(event)
    }
    
    if (adBlockSettings.getSetting("Private Messages", "Play sound")) {
        World.playSound("random.orb", 1000, 1)
    }
}).setCriteria("&dFrom &r${name}&r&7: ${message}")
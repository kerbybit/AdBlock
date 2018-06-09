register("chat", function(name, event) {
    cancel(event)
    var message = ChatLib.getChatMessage(event, true)

    if (adBlockSettings.getSetting("Join/Leave", "Delete duplicate messages")) {
        if (ChatLib.getChatLines()[1] == message) return
    }

    if (adBlockSettings.getSetting("Join/Leave", "Reformat messages")) {
        message = "&2+ &7" + name
    }

    if (adBlockSettings.getSetting("Join/Leave", "Show messages in notifications")) {
        notify(message)
    } else {
        ChatLib.chat(message)
    }
}).setCriteria("&e${name} joined.&r")

register("chat", function(name, event) {
    cancel(event)
    var message = ChatLib.getChatMessage(event, true)

    if (adBlockSettings.getSetting("Join/Leave", "Delete duplicate messages")) {
        if (ChatLib.getChatLines()[1] == message) return
    }

    if (adBlockSettings.getSetting("Join/Leave", "Reformat messages")) {
        message = "&c- &7" + name
    }

    if (adBlockSettings.getSetting("Join/Leave", "Show messages in notifications")) {
        notify(message)
    } else {
        ChatLib.chat(message)
    }
}).setCriteria("&e${name} left.&r")
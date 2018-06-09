register("chat", adBlockDuplicates).setCriteria("&r&4You are not permitted to leave this area.&r")
register("chat", adBlockDuplicates).setCriteria("&r&cYou can't activate Gadgets in this area!&r")
register("chat", adBlockDuplicates).setCriteria("&r&cYou cannot use gadgets right now!&r")
register("chat", adBlockDuplicates).setCriteria("&r&cYou must wait another ${*} &r&cbefore using this!&r")

function adBlockDuplicates(event) {
    if (adBlockSettings.getSetting("Lobby", "Replace repeated messages")) {
        cancel(event)
        new Message(ChatLib.getChatMessage(event, true)).setChatLineId(46215).chat()
    }
}

register("chat", adBlockJoinedLobby).setCriteria("&r&b${*} joined the lobby!&r")
register("chat", adBlockJoinedLobby).setCriteria("&r &b>&c>&a>&r &r&6${*} joined the lobby!&r &a<&c<&b<&r")

function adBlockJoinedLobby(event) {
    if (adBlockSettings.getSetting("Lobby", "Delete lobby join messages")) {
        cancel(event)
    }
}

register("chat", adBlockDeleteAds).setCriteria("&r&f&l➔").setParameter("start")
register("chat", adBlockDeleteAds).setCriteria("&r&bMystery Box&r&r&f!&r").setParameter("end")
register("chat", adBlockDeleteAds).setCriteria("&r&r&b[Mystery Box]&r&r").setParameter("start")
register("chat", adBlockDeleteAds).setCriteria("&4[WATCHDOG ANNOUNCEMENT]&r")
register("chat", adBlockDeleteAds).setCriteria("&fWatchdog has banned ${*} players in the last 7 days.&r")
register("chat", adBlockDeleteAds).setCriteria("&fStaff have banned an additional ${*} in the last 7 days.&r")
register("chat", adBlockDeleteAds).setCriteria("&cBlacklisted modifications are a bannable offense!&r")

function adBlockDeleteAds(event) {
    if (adBlockSettings.getSetting("Lobby", "Delete random ads")) {
        cancel(event)
    }
}
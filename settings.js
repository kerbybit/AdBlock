var adBlockSettings = new SettingsObject("AdBlock", [
    {
        name: "Join/Leave",
        settings: [
            new Setting.Toggle("Delete duplicate messages", true),
            new Setting.Toggle("Reformat messages", true),
            new Setting.Toggle("Show messages in notifications", true)
        ]
    }, {
        name: "Private Messages",
        settings: [
            new Setting.Toggle("Reformat messages", true),
            new Setting.Toggle("Play sound", true)
        ]
    }, {
        name: "Lobby",
        settings: [
            new Setting.Toggle("Delete lobby join messages", true),
            new Setting.Toggle("Replace repeated messages", true),
            new Setting.Toggle("Delete random ads", true)
        ]
    }
]);

adBlockSettings.setCommand("ab").setSize(250, 75);

Setting.register(adBlockSettings);
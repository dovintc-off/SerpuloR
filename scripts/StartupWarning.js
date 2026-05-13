Events.on(ClientLoadEvent, () => {   
    Vars.ui.showText(
        Core.bundle.get("mod.warning.title"), 
        Core.bundle.get("mod.warning.text")
    );
});
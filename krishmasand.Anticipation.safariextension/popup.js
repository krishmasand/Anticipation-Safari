document.addEventListener('DOMContentLoaded', function() {
	if(safari.extension.settings.enabled == 'f'){
		setIconDisabled();
	}
    else{
		setIconEnabled();
    }
})

safari.application.addEventListener("message", handleMessage, false);
function handleMessage(){
	if(safari.extension.settings.enabled == 'f'){
		safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("enabled", "f");	
	}
    else{
		safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("enabled", "t");
    }
}

safari.application.addEventListener("popover", popoverHandler, true);
function popoverHandler(){
	var text;
	if(safari.extension.settings.enabled == 'f'){
		safari.extension.settings.enabled = 't';
		setIconEnabled();
    	text = "Anticipation is enabled, YouTube time will be hidden.";
	}
    else{
		safari.extension.settings.enabled = 'f';
		setIconDisabled();
		text = "Anticipation is disabled, YouTube time will be shown. Refresh your tab if you are already on YouTube.";
    }
    $('#message').html(text);
}

function setIconEnabled(){
	var iconUri = safari.extension.baseURI + 'Icon-128-active.png';
	safari.extension.toolbarItems[0].image = iconUri;
}

function setIconDisabled(){
	var iconUri = safari.extension.baseURI + 'Icon-128.png';
	safari.extension.toolbarItems[0].image = iconUri;
}

var enabled = false;
safari.self.tab.dispatchMessage('checkEnabled');


if(enabled){
	hideTimes();
}

safari.self.addEventListener("message", handleMessage, false);
function handleMessage(msgEvent){
	if(msgEvent.message == "f"){
		enabled = false;
	}
	else{
		enabled = true;
		hideTimes();
	}	
}

document.addEventListener('DOMContentLoaded', function() {
	if(enabled){
		hideTimes();
	}
});

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
    	window.onload = function () { afterNavigate(); }
    	if(enabled){
        	hideTimes();
    	}
    }
}, true);

function hideTimes(){

	
		var times = document.getElementsByClassName("video-time")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden";
		}
		times = document.getElementsByClassName("ytp-time-display html5-control")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode.removeChild(vidTime);
			i--;
		}
		times = document.getElementsByClassName("ytp-time-display")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode.removeChild(vidTime);
			i--;
		}
		times = document.getElementsByClassName("ytp-progress-bar-container")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode.removeChild(vidTime);
			i--;
		}
}
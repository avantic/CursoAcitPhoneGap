
$(document).bind("mobileinit", function(){
		$('#pageGeolocation').live('pagebeforeshow',function(event){
			getPosition();
		});
});

function getPosition() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
	
	function onSuccess(position) {
	    document.getElementById("accuracy").innerHTML = position.coords.accuracy;
	    document.getElementById("timestamp").innerHTML = new Date(position.timestamp);
	    document.getElementById("infoGeolocation").style.display = "";
	    
	    document.getElementById("mapGeolocation").src =
	    	"http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," +
	    	position.coords.longitude + "&zoom=14&size=300x400&markers=color:blue|label:S|" +
	    	position.coords.latitude + ',' + position.coords.longitude;
	};
	
	function onError(error) {
	    alert('Error: ' + error.message);
	}
}

$(document).bind("mobileinit", function(){
		$('#pagePhoto').live('pagebeforeshow',function(event){
			capturePhoto();
		});
});

function capturePhoto() {
	navigator.device.capture.captureImage(onPhotoDataSuccess, onFail);
		
	function onPhotoDataSuccess(mediaFiles) {
		document.getElementById('photo').src = mediaFiles[0].fullPath;
	}
	
	function onFail(message) {
		if (message != "Canceled.") {
			alert('Error al capturar la foto: ' + message);
		}
	}
}
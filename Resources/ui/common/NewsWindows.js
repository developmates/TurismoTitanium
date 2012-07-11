function ApplicationWindow(title) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
		barImage:titleBg,
		url: "tweets.js"
	});
	
	//traerDatosNoticias();
	
	return self;
};



module.exports = ApplicationWindow;

function ApplicationWindow(title) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
				//barImage:titleBg,
		barColor: '#84bb00',
		url: "tweets.js"
	});
	
	//traerDatosNoticias();
	
	return self;
};



module.exports = ApplicationWindow;

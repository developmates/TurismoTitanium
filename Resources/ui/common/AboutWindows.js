function ApplicationWindow(title) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
		barImage: titleBg
	});
	
	var topImageBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/swipe-controls.png')
	var topViewImage = Ti.UI.createImageView({
		//backgroundImage: topImageBg,
		image:topImageBg,
		height:50,
		width:320,
		top:0,
		left:0
	});
	
	var webView2 = Titanium.UI.createWebView({
		url:'/vr5Iphone/iphone1.html',
		top:50,
		left:0
	});
	
	
	self.add(topViewImage);
	//self.add(webView2);
	
	return self;
};
module.exports = ApplicationWindow;

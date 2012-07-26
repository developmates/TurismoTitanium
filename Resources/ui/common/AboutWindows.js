function ApplicationWindow(title) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
		barImage: titleBg
	});
	
	var topImageBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/swipe-controls.png')
	var topViewImage = Ti.UI.createImageView({
		//backgroundImage: topImageBg,
		image:topImageBg,
		height:'auto',
		width:'auto',
	});
	var topView = Ti.UI.createView({
		top:0,
		left:0,
		height:50,
		width:'auto'
	});
	topView.add(topViewImage);
	
	var webView2 = Titanium.UI.createWebView({
		url:'/vr5Iphone/iphone1.html',
		top:50,
		left:0
	});
	
	
	self.add(topView);
	self.add(webView2);
	
	return self;
};
module.exports = ApplicationWindow;

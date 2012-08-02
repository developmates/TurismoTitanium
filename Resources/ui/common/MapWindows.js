function ApplicationWindow(title) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
		//barImage:titleBg,
		navBarHidden:true,
		barColor: '#84bb00'
	});
	
	var plano = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/PlanoSMTuc.jpg');
	var imagen = Titanium.UI.createImageView({
		image:plano,
		height:898,
		width:1500
	});
	
	var scrollViewTramH = Titanium.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		top : 0,
		scrollType : 'horizontal',
		showHorizontalScrollIndicator : true,
		zoomScale : 1,
		maxZoomScale : 2,
		minZoomScale : 1
	});
	scrollViewTramH.add(imagen);
 
	var scrollViewTramV = Titanium.UI.createScrollView({
	    contentWidth : 'auto',
	    contentHeight : 'auto',
	    top : 0,
	    scrollType : 'vertical',
	    showVerticalScrollIndicator : true,
	    zoomScale : 1,
	    maxZoomScale : 1,
	    minZoomScale : 1
	});
	scrollViewTramV.add(scrollViewTramH);
	

	self.add(scrollViewTramV);
	
	return self;
};
module.exports = ApplicationWindow;

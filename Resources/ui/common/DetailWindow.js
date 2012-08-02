function ApplicationWindow(title) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		barImage:titleBg
		
	});
	var scrollView = Ti.UI.createScrollView({
      contentWidth: 'auto',
      contentHeight: 'auto',
      scrollType : 'vertical',
      showVerticalScrollIndicator: true,
      layout:'vertical'
    });
    
    var view1 = Titanium.UI.createView({backgroundColor:'#123'});
	var view2 = Titanium.UI.createView({backgroundColor:'#234'});
	var view3 = Titanium.UI.createView({backgroundColor:'#345'});
	var imagenes = Titanium.UI.createScrollableView({
    views:[view1,view2,view3],
	showPagingControl: false,
	width: 'auto', 
	height: '150',
	opacity:0.8,
	pagingControlColor:'transparent'
	});
	var PagingControl = require('ui/common/PagingControl');
	var pgcontrol = new PagingControl(imagenes);
	imagenes.add(pgcontrol);
	scrollView.add(imagenes);
	
	var tituloBG = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/FICHA_titulo.png');
	var tituloImgView=Ti.UI.createImageView({image:tituloBG,height:'auto',width:'auto'});
	var tituloView = Ti.UI.createView({height:'87',width:'auto'});
	tituloView.add(tituloImgView);
	var tituloLabel = Ti.UI.createLabel({
      color: 'black',
      font: { fontSize:38,fontWeight:'bold' },
      shadowColor: 'gray',
      shadowOffset: {x:2, y:2},
      text: 'HOTEL CONRAD',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      width: 'auto', height: 'auto'
    });
   // tituloView.add(tituloLabel);
    scrollView.add(tituloImgView);
    
    var label2 = Ti.UI.createLabel({
      color:'blue',
      text: 'A long label with a few line breaks and unicode (UTF8) symbols such as a white chess piece \u2655 and the euro symbol \u20ac looks like this!\n',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      width: 'auto', height: 'auto'
    });
    scrollView.add(label2);
    
	self.add(scrollView);
	return self;
};
module.exports = ApplicationWindow;
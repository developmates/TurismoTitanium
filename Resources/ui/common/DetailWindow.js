function ApplicationWindow(title,model) {
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		//barImage:titleBg,
		barColor: '#84bb00'
	});
	
	var scrollView = Ti.UI.createScrollView({
	  backgroundColor:'#c6c5c1',
      contentWidth: 'auto',
      contentHeight: 'auto',
      scrollType : 'vertical',
      showVerticalScrollIndicator: true,
      layout:'vertical'
    });
    
    /*IMAGENES***************************************************/
   
	var imagenes = Titanium.UI.createScrollableView({
	    views:model.imagenes,
		showPagingControl: (Ti.Platform.osname==='android')?true:false,
		width: 'auto', 
		height: '150',
		opacity:0.8,
		pagingControlColor:'transparent'
	});
	
	var PagingControl = require('ui/common/PagingControl');
	var pgcontrol = new PagingControl(imagenes);
	imagenes.add(pgcontrol);
	scrollView.add(imagenes);
	
	 /*TITULO CON FONDO***************************************************/
	var tituloBG = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/FICHA_titulo.png');
	var tituloImgView=Ti.UI.createImageView({
		image:tituloBG,
		height:'auto',
		width:'auto'
	});
	var tituloView = Ti.UI.createView({
		height:'87',
		width:'auto'
	});
	tituloView.add(tituloImgView);
	
	var tituloLabel = Ti.UI.createLabel({
      color: '#373634',
      top:25,
      font: { fontSize:Titanium.Platform.displayCaps.platformWidth/17,fontWeight:'bold' },
      // shadowColor: '#91918c',
      shadowColor: 'white',
      shadowOffset: {x:0, y:1},
      text: model.titulo,
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      width: 'auto', height: 'auto'
    });
    
    tituloView.add(tituloLabel);
    scrollView.add(tituloView);
    
     /*DESCRIPCIONES***************************************************/
    var descripciones = Ti.UI.createLabel({
      top:15,
      left:25,
      right:25,
      bottom:15,
      color:'black',
      font: { fontSize: Titanium.Platform.displayCaps.platformWidth/25 },
      text: model.descripcion,
      shadowColor: 'white',
      shadowOffset: {x:0, y:1},
      textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
      width: 'auto', 
      height: 'auto'
    });
    scrollView.add(descripciones);
    
     /*BOTONES***************************************************/
    var bLlamar = Ti.UI.createButton({
    	title:'Tel: '+model.telefonos,
    	color:'black',
    	width: Titanium.Platform.displayCaps.platformWidth - 30,
    	number:model.telefonos,
    	font: { fontSize: Titanium.Platform.displayCaps.platformWidth/23, fontWeight:'bold'  },
    	bottom:15
    });
    bLlamar.addEventListener('click', function(e){
  		Ti.Platform.openURL('tel:'+e.source.number);
	});
	
	var bDireccion = Ti.UI.createButton({
    	title:'Dir: '+model.direcciones,
    	color:'black',
    	width: Titanium.Platform.displayCaps.platformWidth - 30,
    	direction: model.direcciones+','+model.localidad,
    	font: { fontSize:Titanium.Platform.displayCaps.platformWidth/23, fontWeight:'bold'  },
    	bottom:15
    });
    bDireccion.addEventListener('click', function(e){
  		Ti.Platform.openURL('http://maps.google.com/maps?q='+e.source.direction);
  	});
    
    var bMail = Ti.UI.createButton({
    	title:'Mail: '+model.mail,
    	color:'black',
    	width:Titanium.Platform.displayCaps.platformWidth - 30,
    	mail:model.mail,
    	font: { fontSize:Titanium.Platform.displayCaps.platformWidth/23, fontWeight:'bold'  },
    	bottom:15
    });
    bMail.addEventListener('click', function(e){
  		Ti.Platform.openURL('mailto:'+e.source.mail);
  	});
    
    
    var bWeb = Ti.UI.createButton({
    	title:'Web: '+model.web,
    	color:'black',
    	width:Titanium.Platform.displayCaps.platformWidth - 30,
    	web:model.web,
    	font: { fontSize:Titanium.Platform.displayCaps.platformWidth/23, fontWeight:'bold'  },
    	bottom:15
    });
    bWeb.addEventListener('click', function(e){
  		Ti.Platform.openURL(e.source.web);
  	});
    
    scrollView.add(bLlamar);
    scrollView.add(bDireccion);
    scrollView.add(bMail);
    scrollView.add(bWeb);
	self.add(scrollView);
	return self;
};

module.exports = ApplicationWindow;
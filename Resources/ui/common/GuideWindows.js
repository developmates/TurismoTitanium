
/*
//Reference prior, cached database
var dbOLD = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
//Destroy it
dbOLD.remove();
*/
//Install new database
var db;

    //if (Ti.Platform.name === 'android' && Ti.Filesystem.isExternalStoragePresent()) {
	 var dbOLD = Ti.Database.install('/PuntaCana.sqlite', 'PuntaCana');
		//Destroy it
		if(dbOLD){
			Ti.API.info('remove');
			dbOLD.close();
			dbOLD.remove();
		}
	 
	 db = Titanium.Database.install('/PuntaCana.sqlite','PuntaCana.sqlite');
	 //db.execute('CREATE TABLE "Categorias" ("id" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , "nombre" TEXT NOT NULL  UNIQUE )');
	 //db.execute('INSERT INTO Categorias (id,nombre) VALUES (?,?)',1,'Comidas');
	 db = Ti.Database.open('PuntaCana.sqlite');
   /* }else{
    	var dbOLD = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
		//Destroy it
		if(dbOLD){
			Ti.API.info('remove');
			dbOLD.close();
			dbOLD.remove();
		}
      db = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
    }
	*/


/*
db.execute('CREATE TABLE "Categorias" ("id" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , "nombre" TEXT NOT NULL  UNIQUE )');
db.execute('INSERT INTO Categorias (id,nombre) VALUES (?,?)',1,'Comidas');
*/
function ApplicationWindow(title,id) {
	
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
		//barImage:titleBg,
		barColor: '#84bb00'
	});

	
	var table = Ti.UI.createTableView({
		data:generarTabla(id)
	});
	
	table.addEventListener('click', function(e){
		/*
		 	For example, some of the key properties of that event object include:
			 *index 	– the ordinal index number of the row that received the event
			 *row 		– the object representing the row that received the event
			 *rowData 	– the properties of the row that received the event
			 *source 	– the object that received the original event
			 *section 	– the table section that received the event
		 */
		//alert('You clicked row '+e.index+' with id:'+e.row.id);
		if(e.row.hijo ===0){
		var GuideWindows = require('ui/common/GuideWindows');
		var win = new GuideWindows(L('tabName1'),e.row.id)
		win.containingTab = self.containingTab;
		self.containingTab.open(win);
		}else{
			var DetailWindow = require('ui/common/DetailWindow');
			var win = new DetailWindow('ficha');
			self.containingTab.open(win);
		}
		
	});

	self.add(table);
	
	return self;
};


module.exports = ApplicationWindow;

	
function generarTabla(id){
	
	dataBD = db.execute('SELECT * FROM Categorias WHERE padre='+id);
	
	var tbl_data = crearFilasTabla(dataBD);
	
	dataBD.close();
	
	return tbl_data;
}

function crearFilasTabla(dataBD){
	Ti.API.info('datos');
	
	var tbl_data = [];
	var tbl_sections = [];
	var fieldCount;
	var row = {
		id:null,
		nombre:null,
		subtitulo:null,
		icon:null,
		seccion:null,
		hijo:null
	}
	
	// fieldCount is a property on Android.
	if (Ti.Platform.name === 'android') {
	    fieldCount = dataBD.fieldCount;
	} else {
	    fieldCount = dataBD.fieldCount();
	}
	Ti.API.info('Field count: ' + fieldCount);
	
	
	
	while (dataBD.isValidRow())
	{
	
	  var cellBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/cell-bg.png');
	  var fila = Ti.UI.createTableViewRow({
	  	hasChild:true,
	//  	backgroundImage:cellBg,
	  	height:60,
	  	backgroundColor: 'white'
	  });
	  
	  for(i=0;i<fieldCount;i++){
	  	//nombre del campo
		var name =  dataBD.fieldName(i);
		switch(name){
			case 'id':
				row.id = dataBD.fieldByName(name);
				fila.id = row.id;
				break;
			case 'icono':
				row.icon = dataBD.fieldByName(name);
				var icono = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/KS_nav_ui.png');//row.icon);
				
	  			var imagen = Ti.UI.createImageView({
					image: icono,
					height:40,
					width:40,
					top:10,
					left:5
				});
	  			fila.add(imagen);
				break;
			case 'nombre':
				row.nombre = dataBD.fieldByName(name);
				var nombre = Ti.UI.createLabel({
					top:2,
	  				left: 45,
					text:row.nombre,
					font: { fontSize:15 },
					height:40,
  					shadowColor: '#aaa',
  					shadowOffset: {x:0.4, y:0.4},
	  			});
	  			fila.add(nombre);
				break;
			case 'hijo':
				row.hijo = dataBD.fieldByName(name);
				fila.hijo = row.hijo;
				break;
			case 'subtitulo':
				row.subtitulo = dataBD.fieldByName(name);
				var subtitulo = Ti.UI.createLabel({
					top:25,
	  				left: 45,
					text: row.subtitulo,
					height:30,
					color: 'gray',
					font: { fontSize:12 }
	  			});
	  			fila.add(subtitulo);
				break;
			case 'seccion':
				//creo las secciones si no existen
				row.seccion = dataBD.fieldByName(name);
				break;
			default:
				break;
		}
	  }
	  
	  
	  if(row.seccion === null){
	  	  //Si esta vacio no hay secciones y agrego una seccion vacia con las filas a los datos de la tabla
	  	 var seccionActual = null;
	  	 var totalSecciones = tbl_sections.length;
		 var seccionExistente = Ti.UI.createTableViewSection({});
		 
		 //Obtengo la seccion
		 for(var r = 0; r<totalSecciones; r++){
		 	seccionExistente = tbl_sections[r];
		 	if(seccionExistente.headerTitle === ""){
		  		seccionActual = seccionExistente;
		  	}
		  }
	  	 
	  	 if(seccionActual === null){
	  	 	//Si no encuentra la sección la creo
	  	 	//creo la seccion
		  	var seccionNueva = Ti.UI.createTableViewSection({
				headerTitle: ""
		  	});
		  	//Agrego la seccion nueva
		  	tbl_sections.push(seccionNueva);
		  	//La pongo en la variable actual para agregarle la fila
		  	seccionActual = seccionNueva;
	  	 }
	  	 //Agrego la fila a la sección
	  	 seccionActual.add(fila);


		//Enguille seccion para Android
		tbl_data.push(fila);
	  }else{
	  	 //Si no esta vacio hay secciones y debo agregar la sección a los datos de la tabla
	  	 
	  	 var seccionActual = null;
	  	 var totalSecciones = tbl_sections.length;
		 var seccionExistente = Ti.UI.createTableViewSection({});
		 //Obtengo la seccion
		 for(var r = 0; r<totalSecciones; r++){
		 	seccionExistente = tbl_sections[r];
		 	if(seccionExistente.headerTitle === row.seccion){
		  		seccionActual = seccionExistente;
		  	}
		  }
	  	 
	  	 if(seccionActual === null){
	  	 	//Si no encuentra la sección la creo
	  	 	//creo la seccion
		  	var seccionNueva = Ti.UI.createTableViewSection({
				headerTitle: row.seccion
		  	});
		  	//Agrego la seccion nueva
		  	tbl_sections.push(seccionNueva);
		  	//La pongo en la variable actual para agregarle la fila
		  	seccionActual = seccionNueva;
	  	 }
	  	 //Agrego la fila a la sección
	  	 seccionActual.add(fila);
	  	 
	  	
	  }
	 // tbl_data.push(tbl_sections);
	  dataBD.next();
	}
	
	dataBD.close();
	
	var seccionVacia = Ti.UI.createTableViewSection({});
	seccionVacia = tbl_sections[0];
	if(tbl_sections.length === 1 && seccionVacia.headerTitle === ""){
		return tbl_data
	}else{
		return tbl_sections;
	}
}

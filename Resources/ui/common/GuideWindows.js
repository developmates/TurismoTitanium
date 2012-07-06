
/*
//Reference prior, cached database
var dbOLD = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
//Destroy it
dbOLD.remove();
*/
//Install new database
var db;

    if (Ti.Platform.name === 'android' && Ti.Filesystem.isExternalStoragePresent()) {
	 
	 //db = Ti.Database.install('PuntaCana.sqlite','PuntaCana.sqlite');
	 //db.execute('CREATE TABLE "Categorias" ("id" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , "nombre" TEXT NOT NULL  UNIQUE )');
	 //db.execute('INSERT INTO Categorias (id,nombre) VALUES (?,?)',1,'Comidas');
	 db = Ti.Database.open('PuntaCana.sqlite');
    }else{
    	var dbOLD = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
		//Destroy it
		if(dbOLD){
			Ti.API.info('remove');
			dbOLD.close();
			dbOLD.remove();
		}
      db = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
    }



/*
db.execute('CREATE TABLE "Categorias" ("id" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , "nombre" TEXT NOT NULL  UNIQUE )');
db.execute('INSERT INTO Categorias (id,nombre) VALUES (?,?)',1,'Comidas');
*/
function ApplicationWindow(title) {
	
	var titleBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/top-bar-bg.png');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'black',
		barImage:titleBg
	});

	
	var table = Ti.UI.createTableView({
		data:generarTabla('Categorias')
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
		alert('You clicked row '+e.index+' with id:'+e.row.id);
	});

	self.add(table);
	
	return self;
};


module.exports = ApplicationWindow;

	
function generarTabla(tableName){
	
	dataBD = db.execute('SELECT * FROM '+tableName);
	
	var tbl_data = crearFilasTabla(dataBD);
	
	dataBD.close();
	
	return tbl_data;
}

function crearFilasTabla(dataBD){
	Ti.API.info('datos');
	
	var tbl_data = [];
	var fieldCount;
	var row = {
		id:undefined,
		nombre:undefined,
		icon:undefined
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
	  	backgroundImage:cellBg,
	  	height:60
	  	//backgroundColor: 'red'
	  });
	  
	  for(i=0;i<fieldCount;i++){
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
			default:
				break;
		}
	  }
	  var subtitulo = Ti.UI.createLabel({
					top:25,
	  				left: 45,
					text: 'Subtitulo con las estrellas del hotel',
					height:30,
					color: 'gray',
					font: { fontSize:12 }
	  			});
	  			fila.add(subtitulo);

	  tbl_data.push(fila);
	  dataBD.next();
	}
	//dataBD.close();
	return tbl_data;
}

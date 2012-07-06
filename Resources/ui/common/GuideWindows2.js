
/*
//Reference prior, cached database
var dbOLD = Ti.Database.install('PuntaCana.sqlite', 'PuntaCana');
//Destroy it
dbOLD.remove();
*/
//Install new database
var db;

    if (Ti.Platform.name === 'android' && Ti.Filesystem.isExternalStoragePresent()) {
      db = Ti.Database.install('PuntaCana.sqlite', Ti.Filesystem.externalStorageDirectory + 'PuntaCana');
    }else{
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
		data:crearFilasTabla()
	});
	
	self.add(table);
	
	return self;
};


module.exports = ApplicationWindow;

	
	
function crearFilasTabla(){
	Ti.API.info('datos');
	
	var tbl_data = [];
		
	var dataBD = db.execute('SELECT nombre FROM Categorias');
	
	while (dataBD.isValidRow())
	{
	
	  //var id = dataBD.fieldByName('id');
	  var nombre = dataBD.fieldByName('nombre');
	  
	  var cellBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/cell-bg.png');
	  var row = Ti.UI.createTableViewRow({
	  	hasChild:true,
	  	backgroundImage:cellBg,
	  	height:58
	  });
	  
	  var icon = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/KS_nav_ui.png');

	  var image = Ti.UI.createImageView({
		image: icon,
		height:30,
		width:30,
		top:14,
		left:5
		});
		
	  var label = Ti.UI.createLabel({
	  	left: 40,
		text:nombre,
		height:30
	  });
	  	
	  row.add(label);
	  row.add(image);
	  
	  tbl_data.push(row);
	  dataBD.next();
	}
	dataBD.close();
	return tbl_data;
}

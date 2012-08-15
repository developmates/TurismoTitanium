module.exports.DetailModel = function(){
	this.imagenes = [];
	this.titulo=null;
	this.subtitulo=null;
	this.icono=null;
	this.descripcion=null;	
	this.telefonos=null;
	this.direcciones=null;
	this.mail=null;
	this.web=null;
	this.localidad=null;
	this.sucursales = null;
	
	this.imprimir = function(){
		Ti.API.info(
			//this.imagenes + "\n"
			this.titulo + "\n" +
			this.subtitulo + "\n" +
			this.icono + "\n" +
			this.descripcion + "\n" +	
			this.telefonos + "\n" +
			this.direcciones + "\n" +
			this.mail + "\n" +
			this.web 
		);
	};
	
};

exports.DetailModel.prototype.getTitulo = function(){
	return this.titulo;
};

exports.DetailModel.prototype.inicializar = function(id){
		var ConnectionsDB = require('ui/common/ConnectionsDB').ConnectionsDB;
		var conexion = new ConnectionsDB('/PuntaCana.sqlite', 'PuntaCana');
		var db = conexion.inicializar();
		
		dataBD = db.execute('SELECT * FROM Fichas WHERE id='+id);
		while (dataBD.isValidRow())
		{
			var view1 = Titanium.UI.createView({backgroundColor:'#123'});
		 	var view2 = Titanium.UI.createView({backgroundColor:'#234'});
			var view3 = Titanium.UI.createView({backgroundColor:'#345'});			
			this.imagenes = [view1,view2,view3];
			this.titulo=dataBD.fieldByName("nombre");	
			this.subtitulo=dataBD.fieldByName("subtitulo");
			this.icono=dataBD.fieldByName("logo");
			this.descripcion=dataBD.fieldByName("descripcion");	
			this.telefonos=dataBD.fieldByName("telefono");
			this.direcciones=dataBD.fieldByName("direccion");
			this.mail=dataBD.fieldByName("mail");
			this.web=dataBD.fieldByName("website");
			this.localidad = dataBD.fieldByName("localidad");
			
			dataBD.next();
		}
		
		dataBD.close();
		
		this.sucursales = creaSucursales(id);
};

var creaSucursales = function (id){
		var ConnectionsDB = require('ui/common/ConnectionsDB').ConnectionsDB;
		var conexion = new ConnectionsDB('/PuntaCana.sqlite', 'PuntaCana');
		var db = conexion.inicializar();
		
		dataBD = db.execute('SELECT * FROM Sucursales WHERE id='+id);
		
		var sucursales  = [];
		while (dataBD.isValidRow())
		{
			var DetailModelSucursal = require('ui/common/DetailModelSucursal').DetailModelSucursal;
			var sucursal = new DetailModelSucursal();	
			
			sucursal.direccion=dataBD.fieldByName("direccion");	
			sucursal.localidad=dataBD.fieldByName("localidad");	
			
			var cadena = dataBD.fieldByName("telefono");
			sucursal.telefonos= cadena.split("/");
			
			sucursales.push(sucursal);
			
			dataBD.next();
		}
		
		dataBD.close();
		
		return sucursales;
};


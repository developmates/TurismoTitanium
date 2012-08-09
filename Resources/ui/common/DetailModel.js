module.exports.DetailModel = function(titulo){
	this.imagenes = [];
	this.titulo=titulo;
	this.subtitulo=null;
	this.icono=null;
	this.descripcion=null;	
	this.telefonos=null;
	this.direcciones=null;
	this.mail=null;
	this.web=null;
	
	
	this.getWeb = function(){
		return this.web;
	}
};

exports.DetailModel.prototype.getTitulo = function(){
	return this.titulo;
}


/*
 * Se encarga de revisar si hay Datos nuevos en el servidor para que el usuario decida si los descarga
 * y actualiza la aplicación
 */
exports.chequearUpdate = function(){
	var alert;
	//listen for any network changes
	if(Ti.Network.online){
		//HAY CONEXION
		Ti.API.info('Conectado...');
		if(existeVersionNueva()){
			//TRUE debo trabajar para obtener los datos
			alert = Titanium.UI.createAlertDialog({ 
				title: 'Actualización', 
				message: 'Se descargará una actualización ¿Desea continuar?', 
				buttonNames: ['Si', 'No'], 
				cancel: 1 
			});
			
			alert.addEventListener('click', function(e) { 
   			//Clicked cancel, first check is for iphone, second for android
   				if (e.cancel === e.index || e.cancel === true) {
      				return;
   				}else if(e.index === 0) {
   					obtenerDatos();
					actualizarBD();
  				}
  			}); //Cierre Function EventListener
			
			alert.show();
		}else{
			//FALSE no existe una versión más actualizada
			alert = Titanium.UI.createAlertDialog({ 
				title: 'Actualización', 
				message: 'Sus datos están actualizados a la última versión', 
				buttonNames: ['Aceptar'], 
				cancel: 0
			});
			alert.show();
		}
		
		
	}else{
		//NO HAY CONEXION
		Ti.API.info('No hay conexión...');
		alert = Titanium.UI.createAlertDialog({ 
			title: 'Error de Conexión', 
			message: 'Por favor, verifique su conexión a Internet', 
			buttonNames: ['Ok'], 
			cancel: 0 
			});
		alert.show();
	}
};
/**
 * comprobar mi versión para ver si es necesario actualizar
 */
function existeVersionNueva(){
	Ti.API.info('Chequeando versión...');
	return (Ti.App.Properties.getInt('versionDatos') < ultimaVersionDatosServidor()) ? true : false;
};

/**
 * Devuelve la ultima versión de Datos en el servidor
 */
function ultimaVersionDatosServidor(){
	return 3
};

/**
 * Trae el archivo con los datos que hay que borrar, modificar y agregar
 */
function obtenerDatos(){
	Ti.API.info('Chequeando datos...');	
};
/**
 * Se encarga de realizar los llamados a las funciones de insert, delete, update según corresponda
 */
function actualizarBD(){
	Ti.API.info('Actualizando datos...');
	insertarDatos();
	modificarDatos();
	borrarDatos();
};
/**
 * Realiza un insert en la tabla indicada
 */
function insertarDatos(){
	Ti.API.info('Dato Insertado...');
	
};
/**
 * Realiza un update en la tabla indicada
 */
function modificarDatos(){
	Ti.API.info('Dato Modificado...');
	
};
/**
 * Realiza un delete en la tabla indicada
 */
function borrarDatos(){
	Ti.API.info('Dato Borrado...');
	
};

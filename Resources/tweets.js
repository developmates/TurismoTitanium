var win = Titanium.UI.currentWindow;

traerDatosNoticias("50");

function traerDatosNoticias(count){
	var url = "http://developmates.com/turismotuc/twitter.php?count=" + count;
	var tbl_data;
	var json;
	
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	    	//var win = Titanium.UI.currentWindow;
	    	
	    	json = JSON.parse(this.responseText);
	    	tbl_data = crearFilasTablaNoticias(json);
	    	var tabla = Ti.UI.createTableView({
				data: tbl_data
			});
			
			win.add(tabla);
			//return tbl_data;
	    },
	    onerror: function(e) {
			// this function is called when an error occurs, including a timeout
	        Ti.API.debug(e.error);
	        alert('error');
	    },
	    timeout:5000  /* in milliseconds */
	});
	xhr.open("GET", url);
	xhr.send();  // request is actually sent with this statement
}

function crearFilasTablaNoticias(objetoJson){
	
	var tbl_data = [];
	var row = {
		texto:undefined,
		fecha:undefined
	};
	
	var longitudObjetoJson = objetoJson.length;

	for(var i = 0; i < longitudObjetoJson; i++){
		
		var cellBg = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'images/cell-bg.png');
  		var fila = Ti.UI.createTableViewRow({
  			hasChild:false,
  			backgroundImage:cellBg,
  			height:80
  			  			//backgroundColor: 'red'
  		});
  		row.texto = objetoJson[i].text;
		//Ti.API.info(row.texto);
		var texto = Ti.UI.createLabel({
			text:row.texto,
		    left: 0,
		    top: 20,
		    bottom: 2,
		    height: 'auto',
		    width: "auto",
		    textAlign: 'left',
		    font:{ fontSize:14 }
		});

		fila.add(texto);
		
  		row.fecha = objetoJson[i].created_at;
		var fecha = Ti.UI.createLabel({
			text: row.fecha,
		    left:0,
		    width:"auto",
		    top:0,
		    bottom:2,
		    height:16,
		    textAlign:'left',
		    color:'#444444',
		    font:{
		        fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'
		    }
		});
		fila.add(fecha);
		
		tbl_data.push(fila);
	}
	//Ti.API.info(objetoJson);
	return tbl_data;
	
}
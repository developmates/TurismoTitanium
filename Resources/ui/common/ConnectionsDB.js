exports.ConnectionsDB = function (localPath,devicePath){
		this.localPath = localPath;
		this.devicePath = devicePath;
		this.db = null;
		
		this.inicializar = function(){
			var dbOLD = Ti.Database.install(this.localPath, this.devicePath);
			//Destroy it
			if(dbOLD){ 
				dbOLD.close();
				dbOLD.remove();
			}
			 
			var db = Ti.Database.install(this.localPath,this.devicePath);
			this.db = Ti.Database.open(this.devicePath);
	
			return this.db;
		};
		
		this.cerrar = function(){
			this.db.close();
		};
};
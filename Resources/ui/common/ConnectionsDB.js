function ConnectionsDB(localPath,devicePath){
		var dbOLD = Ti.Database.install(localPath, devicePath);
		//Destroy it
		if(dbOLD){
			Ti.API.info('remove');
			dbOLD.close();
			dbOLD.remove();
		}
		 
		var db = Ti.Database.install(localPath,devicePath);
		db = Ti.Database.open(devicePath);

		return db;
};
module.exports = ConnectionsDB;

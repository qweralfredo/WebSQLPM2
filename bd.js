function initDb(db){
	 db.transaction( function (tx) {
		tx.executeSql(
		   'CREATE TABLE IF NOT EXISTS contacts (id, name)',
		   [],
		   function ()
		   {
			//getRows(db);
			 // tx.executeSql('INSERT INTO contacts (id, name) VALUES (1, "Elemar")');
			//  tx.executeSql('INSERT INTO contacts (id, name) VALUES (2, "Bill Gates")');
		   }
	   );
	 }); 
 }
 
 function insert(db){
	db.transaction( function (tx) { 
		tx.executeSql('INSERT INTO contacts (id, name) VALUES (1, "Elemar")');
		tx.executeSql('INSERT INTO contacts (id, name) VALUES (2, "Bill Gates")');
		getRows(db);
	}); 
 }
 
function getRows(db){ 
	 db.transaction( function (tx) {
		tx.executeSql(
		  'SELECT * FROM contacts',
		   [],
		   function (tx, results)
		   { 
			  var len = results.rows.length;
			  alert('Existem ' + len + ' registros!');
			  for (var i = 0; i < len; i++)
			  {
				 var row = results.rows.item(i);
				 alert(row.id + ': ' + row.name);
			  }
		  },
		  function (tx, error)
		   {
		   
			  alert('ooops ' + error.message);
		   }
	   );
	 });
 } 
 
var db = openDatabase(
	 'meuBanco', 
	 '1.0', 
	 'My database',
	 2 * 1024 * 1024
 ); 
 
function teste(){	
	 initDb(db);
	if(db){
		getRows(db);
	} 
}
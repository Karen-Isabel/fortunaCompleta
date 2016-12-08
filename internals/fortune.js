var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports = {
    "getFortune": function (cb) {
        //mensajes aleatorios guardados de la base de datos
        //se ingresa el nombre de la base de datos  y el nombre que le dimos a la collecion
        mongoClient.connect("mongodb://karenareli:karen12345@ds117348.mlab.com:17348/fortuneapps",
        function(err, db){
            var frases = db.collection("frases");

            var consulta = frases.find({});

            consulta.toArray(function(err, data){
//confirmacion de el dato que agregamos
                var selector = Math.round(Math.random(0)* data.length);
                console.log("Tu amigo de intercmbio es:: " + selector);
                //  Respuesta
                // Convertir en cadena escrita el Objeto Json
                var fortunePaperObj = JSON.stringify(data[selector]);
                // Cerra la base de datos
                db.close();
                //Ejecutp el callback pasandole el parametro fortunePaper
                console.log("Tu amigo es: " + fortunePaperObj);
                cb(fortunePaperObj);
            });
        });
    }
};
// var fortuna = function(){
//     swal(`si tu felicidad quieres encontrar a tu admirador debes amar`)
// };
var fortuna = function(){
    swal({
    title: "FELIZ NAVIDAD!",
    imageUrl: "../img/nav1.jpg",
    text: "Si tu felicidad quieres encontrar a tu admirador debes amar"    
    });
};

// var getFortuneFromServer = function(){
//     //Realizando la peticion con AJAX
//     //function(data, status).....cb recibe 2 parametros, la infromacion que obtuvo, estatus
//     $.get("/getacookie", "", function(data, status){
//         console.log("> Estatus de respuesta " + status);
//         if(status == "success"){
//             // swal(data.message);
//             swal({
//                 title: "FELIZ NAVIDAD!...",
//                 imageUrl: "../img/nav1.jpg",
//                 text: data.message
//             });
//         }else{
//             console.log("Error en la fortuna");
//             fortuna();
//         } 
//     }, "json");
// };
var getFortuneFromServer = function getFortuneFromServer(){
            //realizando una peticion de asincrona con ajax y asistida en jquery
            $.get("/getacookie","",function(data, status){
                //contenido del colback
                console.log('> status ' + status);
                //presentar el mensaje 
                swal(
                    data.mensaje);
            },"json");
        }
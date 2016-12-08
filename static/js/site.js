var getFortuneFromServer = function getFortuneFromServer(){
            //realizando una peticion de asincrona con ajax y asistida en jquery
            $.get("/getacookie","",function(data, status){
                //contenido del colback
                console.log('> status ' + status);
                //presentar el mensaje 
                swal(
                    data.papers);
            },"json");
        }
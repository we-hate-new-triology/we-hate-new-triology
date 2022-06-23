function reproducir(imagen)
{
    var ruta="./public/sonidos/";
    var snd=new Audio(ruta+imagen+".mp3");
    snd.play();
          
}
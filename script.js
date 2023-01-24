try {

    function onClickFuction(){
        document.getElementById("quote").style.transition = "all 0.7s";
        
        let number = Math.floor(Math.random() * 7);

        let quotes = [
        "Sessiz insanlar en gürültülü zihinlere sahiptir. - Stephan Hawking",
        "Denemeyi bilene imkansız yoktur. - Büyük İskender",
        "İmkanın sınırını görmek için imkansızı denemek lazım. - Fatih Sultan Mehmet",
        "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır. - Mustafa Kemal Atatürk",
        "Ön yargıları yok etmek, atom çekirdeğini parçalamaktan daha zordur. - Albert Einstein",
        "Neyi bilmediğiniz hakkında hiçbir fikriniz yok. - Elon Musk",
        "Nefretiniz elektriğe dönüştürülebilseydi bütün dünyayı aydınlatırdı. - Nikola Tesla"]

        if(number == 0){
            document.getElementById("quote").innerHTML = quotes[0]
        }
        else if(number == 1){
            document.getElementById("quote").innerHTML = quotes[1]
        }
        else if(number == 2){
            document.getElementById("quote").innerHTML = quotes[2]
        }
        else if(number == 3){
            document.getElementById("quote").innerHTML = quotes[3]
        }
        else if(number == 4){
            document.getElementById("quote").innerHTML = quotes[4]
        }
        else if(number == 5){
            document.getElementById("quote").innerHTML = quotes[5]
        }
        else if(number == 6){
            document.getElementById("quote").innerHTML = quotes[6]
        }
        else if(number == 7){
            document.getElementById("quote").innerHTML = quotes[7]
        }
    }

    function onMouseOutFunction(){
        document.getElementById("button").style.transition = "all 0.9s";
        document.getElementById("button").innerHTML = "Tıkla";
        //document.getElementById("button").style.backgroundColor = red;
    }

}
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
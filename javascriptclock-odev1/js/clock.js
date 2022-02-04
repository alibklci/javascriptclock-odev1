var isim = prompt("Adınızı giriniz")
var div = document.querySelector("#myName")
div.innerHTML = isim

var div = document.querySelector("#myClock");
function time(){
    const d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var day = d.getDay();
    // Switch getDay() methodu günü sayı olarak veriyor. Bunu Switch kullanarak String güne çevirdim
    //switch begin -->
    switch (day){
        case 0:
            day="Pazar";
            break;
        case 1:
            day="Pazartesi";
            break;
        case 2:
            day="Salı";
            break;
        case 3:
            day="Çarşamba";
            break;
        case 4:
            day="Perşembe";
            break;
        case 5:
            day="Cuma";
            break;
        case 6:
            day="Cumartesi";
            break;
    } // switch end
    // hour, minute, second tek hane olduğunda yanında 0 olması için substr uyguladım -->
    //  --> 0 ekledim yanına ve substr ile son iki letter ı çektim.
    div.innerHTML = `${("0"+h).substr(-2)}:${("0"+m).substr(-2)}:${("0"+s).substr(-2)} ${day}`
}
setInterval(time,1000)


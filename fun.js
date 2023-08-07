var ekstrasaat = Number(0)
var now = new Date()

var aylar = { "01": "Ocak", "02": "Şubat", "03": "Mart", "04": "Nisan", "05": "Mayıs", "06": "Haziran", "07": "Temmuz", "08": "Ağustos", "09": "Eylül", "10": "Ekim", "11": "Kasım", "12": "Aralık" }
var gunler = { "Monday": "Pazartesi", "Tuesday": "Salı", "Wednesday": "Çarşamba", "Thursday": "Perşembe", "Friday": "Cuma", "Saturday": "Cumartesi", "Sunday": "Pazar" }
var gunler2 = { "0": "Pazar", "1": "Pazartesi", "2": "Salı", "3": "Çarşamba", "4": "Perşembe", "5": "Cuma", "6": "Cumartesi" }

// * Sabitler (YUKARISI)

function seslendir(ses) {
    let utterance = new SpeechSynthesisUtterance(ses);
    utterance.lang = "tr";
    speechSynthesis.speak(utterance);
    let cevaplar = document.getElementById("cevaplar")
    cevaplar.style.display = "block"
    cevaplar.innerHTML = ses.replace("ayıb","ayıp")
}


  function tarih(datenow) {
    if(!datenow) datenow = `${`${now.getDay()}`.replace("0","Pazar")}, ${now.getDate()} ${aylar["0"+(now.getMonth()+1)]} ${now.getFullYear()} ${String(now.getHours()).length!=1?now.getHours():"0"+now.getHours()}:${String(now.getMinutes()).length!=1?now.getMinutes():"0"+now.getMinutes()}`
    return datenow
  }
  function saatkac() {
    return `${String(now.getHours()).length!=1?now.getHours():"0"+now.getHours()}:${String(now.getMinutes()).length!=1?now.getMinutes():"0"+now.getMinutes()}`
  }
  function gunkac(zaman) {
    if(!zaman) return `${gunler2[now.getDay()]}`
  }


function topla(veri) {
    let sayilar = veri.replace("topla ","")+":"
    return Number(parseFloat(sayilar)) + Number(sayilar.slice(sayilar.indexOf("ve")+3, sayilar.indexOf(":")))
} // topla 5 ve 3


// ! 🔽 +,-,/,x İŞLEMLERİ
function islem(veri) {
    veri = veri.trim()+":"
    let ilksayi = Number(parseFloat(veri))
    let operator = veri.slice(veri.indexOf(" ")+1,veri.indexOf(" ")+2)
    let sonsayi = Number(veri.slice(veri.indexOf(operator)+2, veri.indexOf(":")))

    if(["+"].some(a => veri.includes(a))) {
        operator = "+"
        sonsayi =  Number(veri.slice(veri.indexOf(operator)+1, veri.indexOf(":")))
        let sonsonuc = ilksayi+sonsayi
        return sonsonuc
    }

    if(operator == "+") return ilksayi+sonsayi
    if(operator == "-") return ilksayi-sonsayi
    if(operator == "x") return ilksayi*sonsayi

    if(["/"].some(a => veri.includes(a))) {
        operator = "/"
        sonsayi =  Number(veri.slice(veri.indexOf(operator)+1, veri.indexOf(":")))
        let sonsonuc = ilksayi/sonsayi
        return sonsonuc
    }
}
// ! 🔼 +,-,/,x İŞLEMLERİ

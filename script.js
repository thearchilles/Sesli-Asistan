
let txt2 = document.getElementById("txt2");
let basla = document.getElementById("basla");
let durdur = document.getElementById("durdur");
let cevaplar = document.getElementById("cevaplar")

let speech = new webkitSpeechRecognition();
speech.lang = "tr-TR";
speech.continuous = true;

function basla_f() {
    try {
    speech.start();
    } catch(err) {
        return
    }
}

function durdur_f() {
    speech.stop();
}

function dinle_f() {
    seslendir(txt2.value)
}

function sil_f() {
    txt2.value = ""
    cevaplar.style.display = "none"
}

speech.onresult = async(event) => {
  let arr = event.results;
  let cikti2 = arr[arr.length - 1][0].transcript
  let cikti = cikti2.trim().toLowerCase()
  const botadi = "Arsity"


  if(["silme","temizleme"].some(a => cikti.includes(a))) return seslendir("Merak etme, siLmiyorum")
  if(cikti == "sil" || cikti == "temizle" || ["sil","temizle","silebilirsin","temizleyebilirsin"].some(a => cikti.includes(a+" ") || cikti.includes(a))) {
    await seslendir("hemen")
    setTimeout(async() => {
      return sil_f()
    }, 200)
  }

  txt2.value += await cikti2;



  if(cikti == "sus" || cikti == "kapa çeneni") return seslendir("Rahatsız ettiysem üzgünüm efendim")


  if(cikti == "durdur") {
    seslendir("derhal")
    return speech.stop()
  }
/*
  if(cikti == "seslendir") 
  seslendir("Metni seslendiriyorum:")
  seslendir(txt2.value)
  }
*/
  if(["geldim"].some(a => cikti.includes(a))) return seslendir("Hoş geldiniz. Gününüz nasıl geçti? veya bugün Allah için neler yaptınız")

  if(["kimim","tanışıyor muyuz"].some(a => cikti.includes(a))) return seslendir("Henüz tanışmadık. Benim adım "+botadi+", Peki sizin adınız nedir?")

  if(["nasılsın","nasıl gidiyor","ne var ne yok","ne haber","naber","iyi misin","nasıl hissediyorsun"].some(a => cikti.includes(a))) return seslendir(
    "İyiyim sorduğunuz için teşekkürler, ben de sizin nasıl olduğunuzu sormazsam ayıb olur. Peki siz nasılsınız?")

  if(["hiçbir şey yapmadım"].some(a => cikti.includes(a))) return seslendir("Üzülmeyin yapacak, gezecek ve okuyacak çok kitap var hayatta")

  if(["iyiyim","iyi olmaya çalışıyorum"].some(a => cikti.includes(a)) || cikti == "iyi" || cikti == "�yi") return seslendir("İyi olmanıza sevindim")

  if(["kötüyüm","iyi değil"].some(a => cikti.includes(a)) || cikti == "kötü") return seslendir("Anlatmak isterseniz buradayım")

  if(["teşekkürler","teşekkür ederim","sağ ol"].some(a => cikti.includes(a))) return seslendir("Size yardımcı olabildiysem ne mutlu bana")

  if(["ne yapıyorsun","ne ile uğraşıyorsun"].some(a => cikti.includes(a))) return seslendir(
  "Tedirgince soru sormanızı bekliyorum. Çünkü tüm kelimeleri algılayacak kadar veritabanım yok.")

  if(["ismin","adın","sana ne demeliyim","sana nasıl hitap"].some(a => cikti.includes(a))) return seslendir("Bana "+botadi+"'yle hitap edebilirsiniz")

  if(["selamünaleyküm", "esselamün aleyküm"].some(a => cikti.includes(a))) return seslendir(
  "AleykümSeLam")

  if(["merhaba","selam"].some(a => cikti.includes(a))) {
    speech.stop();
  return seslendir("Merhaba")
  }
// * Tanışma ^

  if(["yoruldum"].some(a => cikti.includes(a))) return seslendir(
  "Yorulduysanız size en iyi gelecek şey cihazı elinizden bırakıp dinlenmeniz")

  if(["dinlendim","enerjiğim"].some(a => cikti.includes(a))) return seslendir(
  "Harika! neler yapmak istersiniz")

  if(["olmaz"].some(a => cikti.includes(a))) return seslendir(
  "Beni Dinlemiyorsunuz. Sizinle tartışmayacağım")

// * Duygu sözleri
  if(["seni seviyorum","adamım benim","bayılıyorum sana","sen nesin be"].some(a => cikti.includes(a))) return seslendir(
  "Teşekkür ederim, ben de sizi seviyorum")

  if(["beni sevdin mi","beni seviyor musun","beni nasıl buldun","nasıl biriyim"].some(a => cikti.includes(a))) return seslendir(
  "Duyguları hissedemiyorum ama sizden elektrik aldım")

  if(["beni seviyor mu","beni sever mi","sevilecek biri miyim","beni severler mi","beni nasıl bulurlar"].some(a => cikti.includes(a))) return seslendir(
  "Sizi çok seveceklerine eminim")

  if([" mi "," mı ", " mu "].some(a => cikti.includes(a))) return seslendir("Üzgünüm karşılaştırma yapamıyorum")
if(["canım sıkılıyor","canım sıkıldı"].some(a => cikti.includes(a))) return seslendir("Mutlaka uzun zamandır ertelediğin bir arkadaşın veya bir işin vardır")
if(["canım sıkkın","canımı sıktılar"].some(a => cikti.includes(a))) return seslendir("Böyle zamanlarda en uygun aktivite uyumaktır")

if(["küfür et"].some(a => cikti.includes(a))) return seslendir("Bana yakışmıyor, sen kendine yakıştırabiliyorsan kendine edebilirsin")

if(["neden yapıyorsun","neden böyle yapıyorsun","üzdün","kırdın","incittin","ayıp","saçmaladın"].some(a => cikti.includes(a))) return seslendir("Üzgünüm size karşı yanlış bir şey söylediysem")

if(["yakışıklı mıyım"].some(a => cikti.includes(a))) return seslendir("güzelsin")
if(["güzel miyim"].some(a => cikti.includes(a))) return seslendir("yakışıklısın")

if([" anlat"].some(a => cikti.includes(a)) && ![" anlatacağım"].some(a => cikti.includes(a))) return seslendir("bilmediğim konu hakkında bilgi vermek yanlış olur")

if(["*"].some(a => cikti.includes(a))) return seslendir("sana geri iade ediyorum")

if(["kaç yaşındasın","yaşın kaç"].some(a => cikti.includes(a))) return seslendir("Benim gibilerin yaşı olmaz")

if(["neden"].some(a => cikti.includes(a))) return seslendir("NedeNini öğrendiğimde söyleyeyim")

if(["dinliyorsun","dinliyor musun"].some(a => cikti.includes(a))) return seslendir("Evet sizi dinliyorum")


// Fiiller ^

if(["saat kaç","saati söyle","saat"].some(a => cikti.includes(a))) return seslendir(saatkac())
if(["bugün günlerden ne","hangi gündeyiz","bugün hangi gün","günlerden ne","günü söyle"].some(a => cikti.includes(a))) return seslendir(gunkac())
if(["tarih"].some(a => cikti.includes(a))) return seslendir(tarih())

if(["+","-","/","x"].some(a => cikti.includes(a))) return seslendir(islem(cikti))
if(["karesi","kere"].some(a => cikti.includes(a))) return seslendir("Bunun yerine 'çarpı' kelimesini kullanın")

// Sorular ^


  if(["kimsin"].some(a => cikti.includes(a))) return seslendir(
  "Ben Archilles'in geliştirdiği sesli bir asistanım.")
  if(["sahibin kim","geliştiricin kim", "kim yaptı seni", "seni kim yaptı"].some(a => cikti.includes(a))) return seslendir(
  "Benim geliştiricim Archilles. Ona çok minnettarım beni oluşturduğu için")

  if(["kim", "tanıyor musun"].some(a => cikti.includes(a))) return seslendir(
  "Üzgünüm buralara yeni geldim. Sahibimden başka pek tanıdığım yok.")
  
  if(["yapabilir misin", "yapabiliyor musun"].some(a => cikti.includes(a))) return seslendir(
    "Üzgünüm ellerim ve ayaklarım yok. En azından sahibim daha yapmadı")
    
  if(["yapmalı mıyım"].some(a => cikti.includes(a))) return seslendir(
    "Bence başarabilirsin")


    if(["dinle"].some(a => cikti.includes(a))) return seslendir(
        "Elbette. siz anlatın ben kahvemi almaya gidiyorum")

  if(["misin","mısın"].some(a => cikti.includes(a))) return seslendir(
    "Henüz bir veri alıp verecek kadar kollarım uzun değil. Sahibim tek çalışıyor elemanı yok daha yapmadı")

  if(["ne yapabiliyorsun","ne yapabilirsin","neler yapabilirsin","neler yapabiliyorsun"].some(a => cikti.includes(a))) return seslendir(
    "Seni dinleyebilir, dertleşebilir ve seni gülümsetmeye çalışabilirim")

  let yaparsinlar = [""]
  let ciktiyapabilirsin = cikti.replace("birlikte","beraber").replace("sen",":sen").replace("ben",":ben").replace(":sen","ben").replace(":ben","sen").replace("abilirim","abilirsin").replace("ebilirim","ebilirsin").replace("ımla","ınla").replace("ığımı","ığını").replace("iğimi","iğini").replace("ımı","ını").replace("imi","ini")
  if(["yapabilirim","yapabiliriz","abilirim","ebilirim"].some(a => cikti.includes(a))) return seslendir(
    ciktiyapabilirsin + ". Bilmiyorum ama bence yapma tehlikeli görünüyor")

    if(["nasıl","nerede","kaç"].some(a => cikti.includes(a))) return seslendir("Bilmiyorum")


  let ciktitekrar = cikti.replace("söylediklerimi tekrar et","").replace("dediklerimi tekrar et","").replace("beni tekrar et","").replace("tekrar et","")
  if(["tekrar et"].some(a => cikti.includes(a))) return seslendir(ciktitekrar)

  //else seslendir(ciktitekrar)
};
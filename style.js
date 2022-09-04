/*
AA / 90-100 / 4.0 / Başarılı
BA / 80-89 / 3.5 / Başarılı
BB / 75-79 / 3.0 / Başarılı
CB / 70-74 / 2.5 / Başarılı
CC / 60-69 / 2.0 / Başarılı
DC / 50-59 / 1.5 / Koşullu Başarılı - Başarısız
DD / 40-49 / 1.0 / Başarısız
FD / 30-39 / 0.5/ Başarısız
*/
window.onload = function () {
let vize= document.getElementById("vize");
let kisaSinav = document.getElementById("kisaSinav");
let final = document.getElementById("final");
let ortalama = document.getElementById("ortalama");
let harfNotu = document.getElementById("harfNotu");
let btnHesapla = document.getElementById("hesapla");

btnHesapla.addEventListener("click", () => {
    let vizeTxt= vize.value;
    let finalTxt= final.value;
    let kisaSinavTxt= kisaSinav.value;

    let sonuc = Math.round((vizeTxt * 0.25) + (kisaSinavTxt * 0.25) + (finalTxt * 0.50));

    if (sonuc >= 90 && sonuc<= 100){
        ortalama.innerText ="Ortalamanız : ${sonuc}";
        harfNotu.innerText="AA";
        harfNotu.style.backgroundColor="lightgreen";
    }
    if (sonuc >= 80 && sonuc <= 89) {
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "BA";
        harfNotu.style.backgroundColor = "lightgreen";
    }
    else if (sonuc >= 75 && sonuc <= 79) {
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "BB";
        harfNotu.style.backgroundColor = "lightgreen";
    }
    else if (sonuc >= 70 && sonuc <= 74) {
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "CB";
        harfNotu.style.backgroundColor = "lightgreen";
    }
    else if (sonuc >= 60 && sonuc <= 69) {
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "CC";
        harfNotu.style.backgroundColor = "lightgreen";
    }
    else if (sonuc >= 50 && sonuc <= 59) {
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "DC";
        harfNotu.style.backgroundColor = "red";
    }
    else if (sonuc >= 40 && sonuc <= 49) {
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "DD";
        harfNotu.style.backgroundColor = "crimson";
    }
    else{
        ortalama.innerText = "Ortalamanız : ${sonuc}";
        harfNotu.innerText = "FD";
        harfNotu.style.backgroundColor = "crimson";
    }


})
}

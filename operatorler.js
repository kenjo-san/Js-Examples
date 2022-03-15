/*
//Matematiksel Operatörler
var x= 10;
var y= 20;
var z= 10;

console.log(x + y);;
console.log(x - y);
console.log(y / x);
console.log(x * y);
console.log(x*y+z);
console.log(x*(y+z));

console.log(x);

//Karşılaştırma Operatörleri
var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
console.log(x>=z);
console.log(x==z);
console.log(x=="10");
console.log(x === "10");
console.log(x!=z);

//Mantıksal Operatörler
console.log((x>y)&&(x>z));

//UYGULAMA: Kullanıcıdan alınan 3 sayının en büyüğünü bulalım.
var a = prompt("sayı giriniz: ");
var b = prompt("sayı giriniz:" );
var c = prompt("sayı giriniz: ");

console.log("a sayısı en büyük mü? :", (a>b) && (a>c));
console.log("b sayısı en büyük mü? :", (b > a) && (b > c));
console.log("b sayısı en büyük mü? :", (c > a) && (c > b));
*/

//if else statement//

/*
var otomatik = prompt("araç otomatik mi?");

if (otomatik == 'yes') {
    console.log('araç otomatiktir');
} else {
    console.log('araç otomatik değildir.');
}
otomatik= true;
if(otomatik)
{
    console.log(marka+' '+model+' otomatik'  );
}
if(otomatik=='true'){
    console.log("true");
} */

/*
//1: manuel
//2: otomatik
var vites='1';
if(vites=='1'){
    console.log('araç manuel');
}
else if (vites == '2') {
    console.log('araç otomatik');
}
else{
    console.log('yanlış bir değer ');
}
vites='3';
switch(vites){
    case'1':
    console.log('araç manuel');
    break;
    case'2':
console.log('araç otomatiktir');
break;
default:
    console.log('yanlış değer');
}

//switch statement//
*/

/*
UYGULAMA 1:
girilen doğum yılına göre ehliyet alınıp alınmayacağını hesaplayınız. Eğer 18 yaşından küçükse kaç senesi kalmıştır?

UYGULAMA 2:
Girilen ay bilgisine göre mevsim bilgisini yazınız.
(1: Ocak, 2: Şubat)
*/
/*
var dogum= prompt('Doğum yılınızı giriniz: ');
var yil= 2021;
var yas= yil-dogum;
console.log(yas);
if(yas<18){
    console.log('ehliyet alamazsınız');
    console.log("ehliyet alabilmek için " +(18-yas)+ "sene beklemelisiniz");
}
else if(yas>=18){
    console.log("ehliyet alabilirsiniz");
}
else{
    console.log("yanlış bir değer girdiniz");
}
*/


/*
var aylar=prompt("Mevsim bilgisini öğrenmek için ay bilgisini sayı olarak giriniz.");
switch(aylar){
    case '1':
        case '2':
            case '12':
    console.log('Şu an kış mevsimindesiniz.');
    break;
    case '3':
        case '4':
            case '5':
                console.log("Şu an İlkbahar mevsimindesiniz");
                break;
                case '6':
    case '7':
    case '8':
        console.log("Şu an Yaz mevsimindesiniz.");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Şu an Sonbahar mevsimindesiniz.");
        break;
}
*/





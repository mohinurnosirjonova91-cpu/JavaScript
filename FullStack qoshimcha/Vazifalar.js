//// Homework task1

// //1-vazifa: Siz ism va tugulgan yildan maxfiy kod yasab berishingiz kerak.

// const name="Asadbek";
// const birthYear=2005;
//
// //Ismdagi 1-harfni olish.
// const firstLetter=name[0];
//
// //Qolgan qismi
// const restOFName=name.slice(1);
//
// //Tugulgan yilni srtingga aylantirish.
// const yearString = String(birthYear);
//
// //Birlashtirish
// const secretCode = firstLetter + yearString+ restOFName;
//
// console.log("Maxfiy kod: "+ secretCode);


// //2-vazifa: Toshkentdagi hayvonot bogiga necha yoshli insonlar kirishini tekshirish kerak.

// const age = 10;
// const hasTicket = true;
// const isVip = false;
//
// console.log(age > 12 && hasTicket) || isVip;


// //3-vazifa: Online dokon uchun savatcha qilyapsiz. Xaridorga chegirma berish yoki bermaslikni mantiqiy aniqlang.

// const totalSum = 50; // Xaridning umumiy summasi
// const isPremiumMember = false; // Mijoz premiummi yoki yo'q
// const hasPromoCode = true; // Mijozda promo-kod borligi
//
// const getDiscount=( totalSum > 100 && isPremiumMember ) || hasPromoCode;
//
// console.log(getDiscount);


// //Homework task2

// //1-vazifa: Taksichi bosib otgan masofani (km) parametr sifadida qabul qilinsin va umumiy summani hisoblab bersin.

// //DECLARATION usulida:
// function yolHaqiHisoblash(km){
//     const narxKm= km * 3000;
//     return km * narxKm;
// }
// console.log(`Sizning yol xaqqingiz: ${yolHaqiHisoblash(10)} so'm`);

// //EXPRESSION usulida:
// const yolHaqiHisoblash = function (km) {
//     const narxKm= km * 3000;
//     return km * narxKm;
// }
// console.log(`Sizning yol xaqqingiz: ${yolHaqiHisoblash(10)} so'm`);

// //ARROW usulida:
// const yolHaqiHisoblash = km => km + (km * 3000);
// console.log(`Sizning yol xaqqingiz: ${yolHaqiHisoblash(10)} so'm`);

// //2-vazifa: Ozbek somidagi mablagni (sum) qabul qilib, uni AQSH dollorlariga (USD) aylantiradigan funksiya tuzing.

// //DECLERATION usulida:
// function somdanDollorga(sum) {
//     const kurs =12800; //eslatma uchun 1 USD = 12800 som
//     return sum / kurs;
// }
// console.log(`Sizning hisobingizda ${somdanDollorga(30000)}`);

// //EXPRESSION usulida:
// const somdanDollorga = function (sum) {
//     const kurs =12800; //eslatma uchun 1 USD = 12800 som
//     return sum / kurs;
// }
// console.log(`Sizning hisobingizda ${somdanDollorga(40000)}`);

// //ARROW usulida:
// const somdanDollorga = sum => sum + (sum / 12800);
// console.log(`Sizning hisobingizda ${somdanDollorga(50000)}`);

// //3-vazifa: Avtomobil 100 km masofaga necha litr benzin sarflashini (yuzKmUchun) paramert va bosib otilgan masofani (masofa) parametr sifatida olib, umumiy sarflangan benzinni hisoblaydigan funksiya yozilar.

// //DECLORATION usulida:
// function benzinSarflash (yuzKmUchun, masofa) {
//     const Umumiy = (masofa/100) * yuzKmUchun;
//     return Umumiy;
// }
// console.log(`100 km ga 8 litr sarflaydigan mashina 500 km masofada ${benzinSarflash(8, 500)} litr ishlatadi.`);

// //EXPERSSION usulida:
// const benzinSarflash = function (yuzKmUchun, masofa) {
//     const Umumiy = (masofa/100) * yuzKmUchun;
//     return Umumiy;
// }
// console.log(`100 km ga 8 litr sarflaydigan mashina 500 km masofada ${benzinSarflash(8, 500)} litr ishlatadi.`);

// //ARROW usulida:
// const  benzinSarflash = (yuzKmUchun, masofa ) => (yuzKmUchun, masofa) + (masofa/1000);
// console.log(`100 km ga 8 litr sarflaydigan mashina 500 km masofada ${benzinSarflash(8, 500)} litr ishlatadi.`);



// // Sinf ishi
// 1-misol

// const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
// let deletedPlayers = players.shift()
// players[1]= 'Vinicius'
// players.push ('Haaland')
// console.log(players.length);
// console.log(players);


// 2-misol

// let navbat=  ["Muhammadali", "Mohinur", "Husan"];
// navbat.unshift('Hokim aka');
// const deletedNavbat = navbat.shift()
// console.log(navbat)
// console.log(deletedNavbat)
// console.log(`Hozir xonaga ${deletedNavbat} kirdi. U passportini olib bo'ldi.`);
// navbat.pop();
// console.log(navbat);


// // Homework task3
// // 1-vazifa: Kinolar

// let kinolarToplami=['Afsungar', 'Titanik','Qasoskorlar']
// kinolarToplami.push('New life', 'Tiger')
// console.log(kinolarToplami)
// kinolarToplami.unshift('Qasos')
// console.log(kinolarToplami)
// console.log(`Menda jami ${kinolarToplami.length} ta kino bor`)
// console.log(kinolarToplami)
// console.log("Birinchi kino:", kinolarToplami[0]);
// console.log(kinolarToplami)


// // 2-vazifa:Oborxona

// let omborxona=['komputer','monitor','notebook','klaviatura']
// omborxona.push('sichqoncha')
// const deletedOmborxona = omborxona.shift()
// console.log(deletedOmborxona)
// console.log(`Bugun dokonda ${deletedOmborxona} sotildi`)
// omborxona[2] ='TV'
// console.log(omborxona)


// // 3-vazifa: Ranglarni tartiblash

// ranglar = ["Qizil", "Yashil", "Ko'k"];
// console.log(ranglar);
// ranglar.push('sariq')
// console.log(ranglar);
// const deletedRanglar1 = ranglar.shift()
// console.log(ranglar);
// console.log(deletedRanglar1)
// const deletedRanglar2 = ranglar.pop()
// console.log(ranglar);
// console.log(deletedRanglar2)
// ranglar.unshift('sariq')
// console.log(ranglar)
// ranglar[1] ='oq'
// console.log(ranglar)







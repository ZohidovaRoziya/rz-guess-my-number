let random1 = Math.floor(Math.random() * 10 ) + 1; 
console.log(random1);


let enter = confirm("Salom Biz bilan o'yin o'ynashga tayyormisiz!")
let gameRule = confirm("O'yin shart : Biz 1 sonni o'ylaymiz Siz 3 marta ixtiyori son kiritasiz!")
let userName = prompt("Iltimos ismingizni kiriting :")
let userNameTrue = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
let numberFirst = prompt(`${userNameTrue} sizda Birinchi imkonyat :`);
let numberTwo = prompt(`${userNameTrue} sizda Ikkinchi imkonyat :`);
let numberLast = prompt(`${userNameTrue} sizda Uchunchi imkonyat :`);



let gameNum1 = ( ( random1 == numberFirst) && (random1 == numberTwo) && (random1 == numberLast) )

let gameNumF1 = ( (random1 != numberFirst) && (random1 == numberTwo) && (random1 == numberLast) )
let gameNumF2 = ( (random1 != numberFirst) && (random1 != numberTwo) && (random1 == numberLast) )
let gameNumF3 = ( (random1 != numberFirst) && (random1 == numberTwo) && (random1 != numberLast) )

let gameNumT1 = ( (random1 == numberFirst) && (random1 != numberTwo) && (random1 == numberLast) )
let gameNumT2 = ( (random1 == numberFirst) && (random1 != numberTwo) && (random1 != numberLast) )

let gameNumL = ( (random1 == numberFirst)  && (random1 == numberTwo) && (random1 != numberLast) )




if (gameNum1){
    alert(`Tabriklaymiz ${userNameTrue} siz Kiritgan Barcha Sonlari Men O'ylagan Sonlarga Teng!` )
} else if (gameNumF1){
    alert(` ${userNameTrue} Siz Birinchi Kiritgan ${numberFirst} Soni Xato Qiymat edi!` )
} else if (gameNumF2){
    alert(` ${userNameTrue} Siz Birinchi va Ikkinchi Kiritgan ${numberFirst} va  ${numberTwo} Sonlari Xato Qiymat edi!` )
} else if (gameNumF3){
    alert(` ${userNameTrue} Siz Birinchi va uchunchi kiritgan ${numberFirst} va  ${numberLast} Sonlari Xato Qiymat edi!` )
} else if (gameNumT1){
    alert(` ${userNameTrue} Siz Ikkinchida Kiritgan ${numberTwo} Soni Xato Qiymat edi!` )
}  else if (gameNumT2){
    alert(` ${userNameTrue} Siz Ikkinchi va Uchunchi Kiritgan ${numberTwo} va  ${numberLast} Sonlari Xato Qiymat edi!` )
}  else if (gameNumL){
    alert(` ${userNameTrue} Siz Uchunchi Kiritgan ${numberLast} Soni Xato Qiymat edi!` )
} else {
    alert(`Kechirasiz  ${userNameTrue} Siz Kirtagan Barcha ${numberFirst} , ${numberTwo} va ${numberLast} Sonlari Xato Qiymatlar edi!`)
}

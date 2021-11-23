let random1 = Math.floor(Math.random() * 10 ) + 1; 
console.log(random1);

let numberFirst = prompt("Birinchi imkonyat :");
let numberTwo = prompt("ikkinchi imkonyat :");
let numberLast = prompt("uchinchi imkonyat :");


let gameNum1 = ( ( random1 == numberFirst) && (random1 == numberTwo) && (random1 == numberLast) )

let gameNumF1 = ( (random1 != numberFirst) && (random1 == numberTwo) && (random1 == numberLast) )
let gameNumF2 = ( (random1 != numberFirst) && (random1 != numberTwo) && (random1 == numberLast) )
let gameNumF3 = ( (random1 != numberFirst) && (random1 == numberTwo) && (random1 != numberLast) )

let gameNumT1 = ( (random1 == numberFirst) && (random1 != numberTwo) && (random1 == numberLast) )
let gameNumT2 = ( (random1 == numberFirst) && (random1 != numberTwo) && (random1 != numberLast) )

let gameNumL = ( (random1 == numberFirst)  && (random1 == numberTwo) && (random1 != numberLast) )



if (gameNum1){
    alert(`Tabriklaymiz Siz Kiritgan Barcha Sonlari Men O'ylagan Sonlarga Teng!` )
} else if (gameNumF1){
    alert(`Siz Birinchi Kiritgan ${numberFirst} Soni Xato Qiymat!` )
} else if (gameNumF2){
    alert(`Siz Birinchi va Ikkinchi Kiritgan ${numberFirst} va  ${numberTwo} Sonlari Xato Qiymat!` )
} else if (gameNumF3){
    alert(`Siz Birinchi va uchunchi kiritgan ${numberFirst} va  ${numberLast} Sonlari Xato Qiymat!` )
} else if (gameNumT1){
    alert(`Siz Ikkinchida Kiritgan ${numberTwo} Soni Xato Qiymat!` )
}  else if (gameNumT2){
    alert(`Siz Ikkinchi va Uchunchi Kiritgan ${numberTwo} va  ${numberLast} Sonlari Xato Qiymat!` )
}  else if (gameNumL){
    alert(`Siz Uchunchi Kiritgan ${numberLast} Soni Xato Qiymat!` )
} else {
    alert(`Kechirasiz Barcha Siz Kirtagan  ${numberFirst} , ${numberTwo} va ${numberLast} Sonlari Xato Qiymatlar edi!`)
}


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
    alert(`Tabriklaymiz SiZ kiritgan Barcha sonlari MeN o'ylagan sonlarga teng!` )
} else if (gameNumF1){
    alert(`Siz birinchi kiritgan ${numberFirst} soni xato qiymat!` )
} else if (gameNumF2){
    alert(`Siz birinchi va ikkinchi kiritgan ${numberFirst} va  ${numberTwo} sonlari xato qiymat!` )
} else if (gameNumF3){
    alert(`Siz birinchi va uchunchi kiritgan ${numberFirst} va  ${numberLast} sonlari xato qiymat!` )
} else if (gameNumT1){
    alert(`Siz ikkinchida kiritgan ${numberTwo} soni xato qiymat!` )
}  else if (gameNumT2){
    alert(`Siz ikkinchi va uchunchi kiritgan ${numberTwo} va  ${numberLast} sonlari xato qiymat!` )
}  else if (gameNumL){
    alert(`Siz uchunchi kiritgan ${numberLast} soni xato qiymat!` )
} else {
    alert(`Kechirasiz barcha siz kirtagan  ${numberFirst} , ${numberTwo} va ${numberLast} sonlari Xato qiymatlar edi!`)
}


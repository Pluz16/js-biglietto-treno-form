// PREZZO AL KM
const PREZZO_PER_KM = 0.21

// inserire in un input il numero di km da percorrere
const kmDaPercorrere = document.getElementById('km').value;
console.log(kmDaPercorrere);


// clik
const buttonEl = document.getElementById('btn_calc')
console.dir(kmDaPercorrere)
let km


buttonEl.addEventListener('click', function(){
    console.log('click su btn')

    km = kmDaPercorrere.value
    let kmNum = parseFloat(km)
    console.log(kmNum, typeof kmNum)

    let sconto = 0
    let prezzoBase = 100 * PREZZO_PER_KM




    const prezzoFinale = prezzoBase - sconto
})











// switch (color) {
//     case '1':
//         b
//         break
//     case '2':
        
//         break
//     case '3':

// }

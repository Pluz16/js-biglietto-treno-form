// PREZZO AL KM
const PREZZO_PER_KM = 0.21

// inserire in un input il numero di km da percorrere
const kmDaPercorrere = document.getElementById('km').value;
console.log(kmDaPercorrere);


// clik
const buttonEl = document.getElementById('btn_calc')
console.dir(kmDaPercorrere)

const selectEl = getElementById('sconto')
console.log(selectEl.value)

let km


buttonEl.addEventListener('click', function(){
    console.log('click su btn')
// Calcolo del prezzo base
    km = kmDaPercorrere.value
    let kmNum = parseFloat(km)
    console.log(kmNum, typeof kmNum)

    let prezzoBase = 100 * PREZZO_PER_KM

    console.log('prezzo base', prezzoBase)
// Gestiamo lo sconto
    let sconto = 0
    const scontoSelezionato = selectEl.value
    console.log(scontoSelezionato, typeof scontoSelezionato)

    if(scontoSelezionato === '1'){
        sconto = prezzoBase * 0.2
    }
    else if (scontoSelezionato === '3'){
        sconto = prezzoBase * 0.4
    }


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


// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
const justFood = (pocetLidi) => {
    return ` <p> catering Just Food pro ${pocetLidi} lidí za ${pocetLidi * 300} Kč.`
} 

// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
const yourMama = (pocetLidi) => {
    return ` <p> catering Your Mama pro ${pocetLidi} lidí za ${pocetLidi * 800} Kč.`
} 


// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.
const flavourHaven = (pocetLidi) => {
    return ` <p> catering Flavour Haven pro ${pocetLidi} lidí za ${pocetLidi * 2000} Kč.`
} 

// Udalost s cateringem
const udalost = prompt("O jakou událost se jedná událost?")
const pocetLidi = Number(prompt("Pro kolik lidí?"))
const catering = prompt("Jakou cateringovou společnost jste si vybrali? \n 1. Just Food: Dodává levně. \n 2. Your Mama: Dodává středně drahé jídlo z lepších surovin. \n 3. Flavour Haven: Dodává exkluzivní jídlo z nejkvalitnějších surovin. \n (Zadejte čislo nebo název společnosti) ")

const creatEvent = (udalost, pocetLidi, catering) => {
    if (catering.toLowerCase() === "just food" || catering === "1") {
       return ` <p> Na událost ${udalost} dodá jídlo: ${justFood(pocetLidi)}`
    } else if (catering.toLowerCase() === "your mama" || catering === "2") {
       return ` <p> Na událost ${udalost} dodá jídlo: ${yourMama(pocetLidi)}`
    } else if ( catering.toLowerCase() === "flavour haven" || catering === "3") {
      return  ` <p> Na událost ${udalost} dodá jídlo: ${flavourHaven(pocetLidi)}`
} else {return "Něco se pokazilo, zkuste to prosím znovu."}
} 

document.body.innerHTML = creatEvent (udalost, pocetLidi, catering)

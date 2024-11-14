
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
const udalost = prompt("O jakou se jedná událost?")
const pocetLidi = Number(prompt("Pro kolik lidí?"))
const catering = prompt("Jakou cateringovou společnost jste si vybrali?")

const creatEvent = (udalost, pocetLidi, catering) => {
    if (catering === "Just Food") {
       return ` <p> Na událost ${udalost} dodá jídlo: ${justFood(pocetLidi)}`
    } else if ( catering === "Your Mama") {
       return ` <p> Na událost ${udalost} dodá jídlo: ${yourMama(pocetLidi)}`
    } else if ( catering === "Flavour Haven") {
      return  ` <p> Na událost ${udalost} dodá jídlo: ${flavourHaven(pocetLidi)}`
} else {return "Něco se pokazilo, zkuste to prosím znovu."}
} 

document.body.innerHTML = creatEvent (udalost, pocetLidi, catering)

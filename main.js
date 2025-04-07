let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
 calculateResults()
 }

function receiveNumberOfPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
 calculateResults()
}

function receiveTipPercentageValue (value){
    tipPercentage =  value  / 100

removeClassButtonSelected()


document.querySelector("#custom-tip").value = ""
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
     calculateResults()
 }


function receiveCustomTipPercentageValue() {
  tipPercentage = document.querySelector ("#custom-tip").valueAsNumber / 100 

  removeClassButtonSelected()
  calculateResults()
}


 function removeClassButtonSelected(){
    if(buttonSelected !== null)
        buttonSelected.classList.remove("button-selected") 
    buttonSelected = null
 }

 function calculateResults() {
    if( bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0 ) {
 
let tipAmountPerson = calculateTipAmountPerson()
calculateTotalPerson(tipAmountPerson)


    }

    }

    function calculateTipAmountPerson(){
        let tipAmountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = bill * tipPercentage / numberOfPeople
        tipAmountStrong.textContent = `$${tipAmountPerson.toFixed(2)} `
        return tipAmountPerson

    }

    function calculateTotalPerson(tipAmountPerson) {
        let totalStrong = document.querySelector(".total strong")
        let totalAmountPerson = bill / numberOfPeople + tipAmountPerson 
        totalStrong.textContent = `$${totalAmountPerson.toFixed(2)}`
    }

    function reset() {
        bill = 0
        document.querySelector("#bill").value = ""

        tipPercentage = 0
        removeClassButtonSelected()
        document.querySelector("#custom-tip").value = ""


        numberOfPeople = 0
        document.querySelector("#people").value = ""

        document.querySelector(".total strong").textContent = "$0.00"
        document.querySelector(".amount strong").textContent = "$0.00"  
    }
 
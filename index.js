const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);
function showTip(e) {
  e.preventDefault();
  tip.style.display = "block"
}



//Ставим e и e.preventDefault() для того чтобы не было глюка
//при подсчитываний суммы компьютером
function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "" || people < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter your information!',
       
      });
    }

   // Сколько заплатит один человек
    let amountPerPerson = bill / people;
   
  // Сколько чаевых заплатит 1 человек 
  // Дополнительно ставим в html там где option значение value="0.30" и.т.д
    let tipPerPerson = (bill * tip) / people;
   
    //Сумма счета и чаевых
    let totalSum = amountPerPerson +  tipPerPerson;
    //toFixed()
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson =  tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);
   
    //Показываем в приложении сумму счета! Там где totalTip billSplit totalAmount
    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent =  totalSum;




  }
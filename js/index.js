// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const myElement = document.querySelector('.sauce');
  if(state.whiteSauce){
    myElement.classList.add('sauce-white');
  }else{
    myElement.classList.remove('sauce-white');
   
  }
 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const myElement = document.querySelector('.crust');
  if(state.glutenFreeCrust){
    myElement.classList.add('crust-gluten-free');
  }else{
    myElement.classList.remove('crust-gluten-free');
   
  }
}

//this method convert the string name of key object into the classe name
//i made this to avoid switch
function switchString(myTopping){
    if(myTopping==='whiteSauce')return myTopping='sauce';
    if(myTopping=='glutenFreeCrust')return myTopping='crust';
    if(myTopping==='greenPeppers')return myTopping='green-peppers';
    if(myTopping==='sauce')return myTopping='whiteSauce';
    if(myTopping==='crust')return myTopping='glutenFreeCrust';
    if(myTopping==='green-peppers')return myTopping='greenPeppers';

    return myTopping;
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  for(topping in ingredients){
    //convert to get classes
    topping=switchString(topping);
    let myBtn = document.querySelector(`.btn.btn-${topping}`);
    //convert to compare with state value
    topping=switchString(topping);
    if(state[`${topping}`]){
      //convert to modify the classes
      topping=switchString(topping);
      myBtn.classList.add('active');
     }else{
      //convert to modify the classes
      topping=switchString(topping);
      myBtn.classList.remove('active');
     }
    
    }
    
  }



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
const aside = document.querySelector('.panel.price>ul');
aside.innerHTML='';

let myPizzaPrice=basePrice;

//check all ingredient via state
for( ing in state){

  if(state[`${ing}`]){
    // creating variable to store info about element
    const priceTemp=ingredients[`${ing}`].price;
    const nameTemp=ingredients[`${ing}`].name;
    //updating price
    myPizzaPrice+=priceTemp;
    aside.innerHTML+=`<li>$${priceTemp} ${nameTemp}</li>`
  }
}
  document.querySelector('strong').innerHTML=`$ ${myPizzaPrice}`;
}
 


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
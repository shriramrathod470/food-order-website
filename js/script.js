// fetching data from API
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

// 	data from api
console.log('before')
let finaldata   
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then((data) =>
  {
	return data.json()
  })
.then((Objectdata) =>{

	finaldata = Objectdata.meals;
	let mealdata = '';
	 finaldata.map((value) =>{
	//  console.log(value)	
	mealdata += 
		`
		   <div class="box">
				<div class="box-content">
	  				<div class="box-img">
		 				<img src="${value.strMealThumb}">
		 			</div>
	
		 				<div class="box-text">
		 					<h4>${value.strMeal}</h4>
		 					<p>Whales and darkness moving form cattle</p>
		 					<h6>$32</h6>
		 				</div>
		 		</div>
			</div>
		
		`
	})
	document.getElementById("menu-card").
    innerHTML =  mealdata
 })
 
.catch((error) =>{
	alert('did not fetched data from API there is something missing')
})

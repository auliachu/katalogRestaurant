import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import DATA from "../public/data/DATA.json";

// Request data 

console.log(DATA.restaurants)

const getDataRestaurant = (data)=>{
    data.restaurants.forEach(restaurant=>{
        const restaurantDataItem = document.querySelector('.container')
        restaurantDataItem.innerHTML+=`
        <div class="content">
            <img
            class="content-item"
            src="${restaurant.pictureId}" 
            alt="ini adalah gambar ${restaurant.name}"
            />
            <h4 class="content-item_title">${restaurant.name}</h4>
            <div class="content-item_details">
            <p class="content-item_city">${restaurant.city}</p>
            <p class="content-item_rating">${restaurant.rating}</p>
            </div>
            <p class="content-item_description">${restaurant.description}</p>
        </div>
        `;
    })
}

getDataRestaurant(DATA);

// Off Canvas Menu
const hamburgerButton = document.getElementById('hamburger');
const listLinkElement = document.getElementById('list')
//console.log(listLinkElement);


hamburgerButton.addEventListener('click', function(){
    listLinkElement.classList.toggle('open');
})

const main = document.querySelector('.hero')
//console.log(main);

main.addEventListener('click', function(){
    listLinkElement.classList.remove('open');
})


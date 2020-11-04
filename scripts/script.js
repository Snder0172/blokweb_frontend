// JavaScript Document

// Ophalen search button in de header
var searchBtn  = document.querySelector('button');

// Ophalen search button in de overlay (naast het inputveld)
var search     = document.querySelector('.search');

// Ophalen overlay
var overlay    = document.querySelector('.overlay');


// Functie controleert of waarde display gelijkstaat aan "block"
// Als de waarde gelijk is aan "block", word de waarde veranderd naar "none"
// als waarde niet gelijk is aan "block", wordt deze veranderd naar "block"
function showSearchBar(){
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
      } else {
        overlay.style.display = "block";
      }
}

searchBtn.addEventListener('click', showSearchBar);
search.addEventListener('click', showSearchBar);

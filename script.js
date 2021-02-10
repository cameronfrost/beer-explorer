// variables
const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
    // fetch
    const beerPromise = await fetch(urlBase);
    const beers = await beerPromise.json();
    
    // render data
    const beersDiv = document.querySelector('.beers');
    
    let beerHtml = "";
    
    // Add the rest of the beer data to the HTML template.
    
    console.log(beers[0]);
    
    beers.forEach(beer => {
       beerHtml += `
        <div class='beer-wrapper card'>
            <div class='beer'>
                <img class='beer__img' src="">
                <h3>${beer.name}</h3>
                <span class='beer__info'>
                    <span>ABV: %</span>
                    <span>IBU: </span>
                </span>
            </div>
        </div>
       `; 
    });
    
    beersDiv.innerHTML = beerHtml;
}

// initial get
getBeers();
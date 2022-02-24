const searchSports = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    document.getElementById('spinner').style.display = 'block';
    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?s=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayResult(data.countrys);
}

const displayResult = countrys => {
    document.getElementById('spinner').style.display = 'none';
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    countrys.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick = "loadSportDetails(${country.idLeague})" class="card">
                <img src="${country.strBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.strLeague}</h5>
                    <p class="card-text">${country.strDescriptionEN.slice(0,200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
        console.log(country)
    });
}

const loadSportDetails = sportId => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/eventresults.php?id=${sportId}`;
    fetch(url)
     .then(res => res.json())
     .then(data => displayDetailResult(data.countrys));
}

const displayDetailResult = country => {
    const sportDetails = document.getElementById('sports-details');
    sportDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${country.strBadge}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${country.strLeague}</h5>
            <p class="card-text">${country.strDescriptionEN.slice(0,200)}</p>
        </div>
    `;
    sportDetails.appendChild(div);
}

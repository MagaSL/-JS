const url = 'https://gist.githubusercontent.com/VasilyMur/43ef6df83bba694f871f11a16ed7556d/raw/b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json';

const searchInput = document.querySelector('.search');
const searchList = document.querySelector('.list');

const arrayStations = [];

fetch(url)
    .then(res => res.json())
    .then(data =>  {
            data.forEach(elemLine => {
            arrayStations.push(...elemLine.stations);
        })  
    });


function getList(word, arrayStations) {
    return arrayStations.filter(station => {
        const reg = new RegExp(word, 'gi');
        return station.name.match(reg);
    });
}

function displayList() {
    
    const list = getList(this.value, arrayStations);
    const HTML = list.map( station => {
        
        const regex = new RegExp(this.value, 'gi');
        const nameStation = station.name.replace(regex, `<span class="color">${this.value}</span>`)
        return `<li><span>${nameStation}</span></li>`;
        
    }).slice(0, 5).join('');
    
    searchList.innerHTML = this.value ? HTML : null;
}

searchInput.addEventListener('change', displayList);
searchInput.addEventListener('keyup', displayList);
















































































































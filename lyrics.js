// Lyrics

const formTwo = document.getElementById('form-two')
const search = document.getElementById('search')
const result = document.getElementById('result')



const apiURL = ""

formTwo.addEventListener('submit', e => {
    e.preventDefault();
    searchValue = search.value.trim();

    if (!searchValue) {
        alert("There is nothing to search")
    } else {
        searchSong(searchValue)
    }
})


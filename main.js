const inputField = document.querySelector('input');
const message = document.querySelector('#message');


const addMovie = (e) => {
    e.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie);
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (e) => {
    let movie = e.target.parentNode.firstChild.textContent;
    console.log(movie)
    e.target.parentNode.remove()
    message.textContent = `${movie} deleted!`;
    revealMessage()
}

const crossOffMovie = (e) => {
    let movie =e.target.textContent;
    e.target.classList.toggle('checked')
    e.target.classList.contains('checked') ? message.textContent = `${movie} watched!` : message.textContent = `${movie} added back!`;
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(()=> {
        message.classList.add('hide')
    }, 1000)
}
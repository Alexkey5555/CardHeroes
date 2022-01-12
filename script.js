const cards = document.querySelector('#cards')
const films = document.querySelectorAll('#films')
let arr = [];

fetch('dbHeroes.json')
    .then(res => res.json())
    .then(data => {
        data.forEach((elem, index) => {
            let div = document.createElement('div');
            const noFilms = (e) => {
                let mes
                if (!elem.movies) {
                    mes = 'no films'
                }
                else {
                    mes = e.movies
                    arr = arr.concat(elem.movies)
                }
                return mesq
            }
            div.id = 'cards'
            div.innerHTML = `
        <div class='card'>
        <img src='${elem.photo}' width='120px' height='160px'>
        <ul class='description'>
            <li class='name'><b>Name:</b> ${elem.name} </li>
            <li class='species'><b>Species:</b> ${elem.species}</li>
            <li class='gender'><b>Gender:</b> ${elem.gender}</li>
            <li class='birthDay'><b>Birthday:</b>${elem.birthDay} </li>
            <li class='deathDay'><b>Deathday:</b> ${elem.deathDay}</li>
            <li class='status'><b>Status:</b> ${elem.status}</li>
            <li class='actors'><b>Actors:</b> ${elem.actors}</li>
            <li class='movies'><b>Films:</b> ${noFilms(elem)}</li>
        </ul>
    </div>
        `;
            cards.append(div)
        })
        const card = document.querySelectorAll('.card')
        function unique(arr) {
            let result = [];
            for (let str of arr) {
                if (!result.includes(str)) {
                    result.push(str);
                }
            }
            return result;
        }
        let listFilms = unique(arr)
        listFilms.forEach((elem, index) => {
            let opt = document.createElement('option')
            opt.value = index
            opt.textContent = elem
            films[0].append(opt)
        })
        films[0].addEventListener('change', () => {
            films.forEach(elem => {
                const select = elem.options[elem.selectedIndex];
                const reg = new RegExp(select.textContent)

                card.forEach(e => {
                    const liText = e.querySelector('ul>li[class="movies"]').textContent;
                    if (select.value === '') {
                        e.style.display = 'block';
                        return
                    }
                    if (!reg.test(liText)) {
                        e.style.display = 'none';
                    }

                    else {
                        e.style.display = 'block';
                    }
                })
            })
        })
    })
const IMAGE_URL = 'http://reactmarathon-api.herokuapp.com/assets';
let createImgUrl = (name) => `${IMAGE_URL}/${name}.gif`; 

let heroesPool = [
    {
        name: 'Sonya',
        hp: 100,
        weapon: ['knife'],
        attack: () => {
            return console.log(`${this.name} + fight`);
        },
    },
    {
        name: 'Scorpion',
        hp: 80,
        weapon: ['knife'],
        attack: () => {
            return console.log(`${this.name} + fight`);
        },
    }
];

let arena = document.getElementsByClassName('arenas')[0];

let createPlayer = (playerClass, player) => {
    let curPlayer = {...player};

    curPlayer.element = document.createElement('div');
    curPlayer.element.classList.add(playerClass);

    curPlayer.progressbar = document.createElement('div');
    curPlayer.progressbar.classList.add('progressbar');

    curPlayer.life = document.createElement('div');
    curPlayer.life.classList.add('life');
    curPlayer.life.setAttribute('style', `width: ${curPlayer.hp}%`);

    curPlayer.name = document.createElement('div');
    curPlayer.name.classList.add('name');
    curPlayer.name.innerHTML = player.name;

    curPlayer.character = document.createElement('div');
    curPlayer.character.classList.add('character');

    curPlayer.image = document.createElement('img');
    curPlayer.image.setAttribute('src', `${createImgUrl(player.name.toLowerCase())}`);

    curPlayer.progressbar.appendChild(curPlayer.life);
    curPlayer.progressbar.appendChild(curPlayer.name);
    curPlayer.character.appendChild(curPlayer.image);

    curPlayer.element.appendChild(curPlayer.progressbar);
    curPlayer.element.appendChild(curPlayer.character);

    return curPlayer.element;
}

let players = heroesPool.map((item, id) => {
    let player = createPlayer(`player${id+1}`, item);
    arena.appendChild(player);

    return player;
});

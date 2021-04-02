const icons = [
    "fa-gavel",
    "a-paint-brush",
    "fa-bath",
    "fa-star",
    "fa-microchip",
    "fa-key",
    "fa-bomb",
    "fa-bell-o",
    "fa-diamond",
    "fa-eye",
    "fa-hourglass-star",
    "fa-truck",
    "fa-university",
    "fa-genderless",
    "fa-mars",
    "fa-fighter-jet",
    "fa-venus",
    "fa-ambulance",
    "fa-subway",
    "fa-thumbs-up",
    "fa-repeat",
    "fa-chevron-left",
    "fa-chevron-right",
    "fa-github",
    "fa-rebel",
    "fa-heart",
    "fa-flask",
    "fa-bed",
    "fa-rocket",
    "fa-life-ring",
]

const row = document.querySelector('.row');


const buildColumn = () => {
    const num = 30;
    for (let i = 0; i <= num; i++) {
        const div = document.createElement('div');
        div.classList.add("column");
        row.appendChild(div);
    }
}

const addIcons = () => {
    const columns = document.getElementsByClassName('column');
    console.log(columns);

    Array.prototype.forEach.call(columns, col => {
        for (let id = 0; id <= icons.length - 1; id++) {
            const i = document.createElement('i');

            i.classList.add('fa');
            i.classList.add(icons[id]);
            i.setAttribute("aria-hidden", "true")
            col.appendChild(i);
        }
    });
}

buildColumn();
addIcons();

console.log('sejuani');

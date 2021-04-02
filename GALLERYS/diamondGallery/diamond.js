const gallery = document.querySelector('.gallery');
const GAL = 11; 
const columns = 4 ;
const {floor} = Math;
const ddd = [
    {col:1 ,row: 1},
    {col:3 ,row: 1},
    {col:5 ,row:1},
    {col:7 ,row:1},
    {col:2 ,row: 2},
    {col: 4,row:2},
    {col:6 ,row:2},
    {col: 3,row:3},
    {col: 1,row:3},
    {col: 5,row:3},
    {col: 7,row:3},
]

for (let i = 0; i < GAL; i++) {
    console.log(floor(i/columns) +1);
    const item = document.createElement('div');
    item.style.setProperty('--row',`${ddd[i].row}`);
    item.style.setProperty('--col',`${ddd[i].col}`);
   /*  item.style.setProperty('--row',`${floor(i/columns) + 1 }`);
    item.style.setProperty('--col',`${(i)%10+1}`); */
    item.classList.add('item');
    gallery.appendChild(item); 
}

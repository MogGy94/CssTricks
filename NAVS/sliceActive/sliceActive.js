const nav =  document.querySelector('ul');
const navItems = nav.children;
/* console.log(navItems); */

for(let navItem of navItems){
    /* console.log(navItem) */
    navItem.addEventListener("click",(e) =>{

        quitActive();
        navItem.classList.add("active")
       /*  console.log(e.target.innerHTML);
        console.log("click"); */
    })
}

const quitActive = () => {
    for(let navItem of navItems){
        navItem.classList.remove("active");
    }
}


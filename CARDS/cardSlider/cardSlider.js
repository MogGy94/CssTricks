/* const swiper = new Swiper(); */
const swiper = document.querySelector('.swiper-wrapper');

const card = (config) =>{
    const{image, name , role} = config;
    return `
            <div class="swiper-slide">
                <div class="card">
                    <div class="layer"></div>
                    <div class="content">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias tenetur. Dolor, perspiciatis maiores consequuntur ipsum.</p>
                        <div class="imgBx">
                            <img src="${image}" alt=""> 
                        </div>
                        <div class="details">
                            <h2> ${name} <br> 
                                <span>${role}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            `
}
/** */

const data = [
    {image:"assets/002.jpg", name:"Cocoli" , role:"Fixx"},
    {image:"assets/003.jpg", name:"Tatioto" , role:"Tesoli"},
    {image:"assets/004.jpg", name:"Tona" , role:"Jhoni"},
    {image:"assets/005.jpg", name:"Pepito" , role:"Yoli"},
    {image:"assets/006.jpg", name:"Fafra" , role:"holi"},
    {image:"assets/007.png", name:"Folii" , role:"Lifers"},
    {image:"assets/008.webp", name:"hJhan", role:"Ther"}
]

for (obj of data ){
    swiper.innerHTML = swiper.innerHTML + card(obj)
}


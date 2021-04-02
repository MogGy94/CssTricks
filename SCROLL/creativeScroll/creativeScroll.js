const progress = document.querySelector("#progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function (){
    let progressHeight = (window.pageYOffset / totalHeight) *100;
    console.log(progressHeight);
    progress.style.height = `${progressHeight}%`;
}

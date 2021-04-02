const loader = document.querySelector('.loader');
const Text = "Esta_es_mi_cansion_de_despedidad :___";
const size = Text.length;

for (let i = 0; i < size; i++) {
    let letterSpan = document.createElement("span");
    letterSpan.innerText= Text[i];
    letterSpan.style = `--i:${i}`;
    loader.appendChild(letterSpan);
}


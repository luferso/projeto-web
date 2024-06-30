const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text"),
    select_Img = optionMenu.querySelector("selectImg");

const listImg = document.querySelectorAll('.options .option');
const mainImg = document.querySelector('.select-menu .image');
const title = document.querySelector('.select-menu .option-text');


selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.toggle("active");
        listImg.forEach(image =>{
            image.onclick = () =>{
                listImg.forEach(img => img.classList.remove('active'));
                image.classList.add('active');
                if(image.classList.contains('active')){
                    let src = image.children[0].getAttribute('src');
                    mainImg.src = src;
                    let text = image.children[1].innerHTML;
                    title.innerHTML = text;
                };
            };
        });
    })
    
});
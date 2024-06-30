
    let listVideo = document.querySelectorAll('.video-list .vid');
    let mainVideo = document.querySelector('.main-video video');
    let title = document.querySelector('.main-video .title');

    listVideo.forEach(video =>{
        video.onclick = () =>{
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if(video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
                let text = video.children[1].innerHTML;
                title.innerHTML = text;
            };
        };
    });

    const dropdown = document.querySelector('.drop-down');
    const list = document.querySelector('.list');
    const selected = document.querySelector('.selected');
    const selectedImg = document.querySelector('.selectedImg');

    dropdown.addEventListener('click', ()=>{
        list.classList.toggle('show')
    })

    list.addEventListener('click', (e)=>{
        const img = e.target.querySelector('img');
        const text = e.target.querySelector('.text');

        selectedImg.src = img.src;
        selected.innerHTML = text.innerHTML;
    })


var slide_index = 1;
show_slides(slide_index);

function current_slides(n){
    show_slides(slide_index = n);
}

function show_slides(n){

    var slides = document.getElementsByClassName("video-list");
    var item = document.getElementsByClassName("item");
    var i;

for(i=0; i<slides.length;i++){
    slides[i].style.display = "none";

}



slides[slide_index-1].style.display = "block";
}
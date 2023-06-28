const carousel = document.querySelector(".carousel"); 
firstImg = carousel.querySelectorAll("img")[0]; 
arrowIcons = document.querySelectorAll(".wrapper i"); 

// let isDragStart = false, prevPageX, prevScrollLeft; 



const showHideIcons = () => {
    // showign and hiding prev/next icons according to carousel scoll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //gettign max scrollabel width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; 
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // gettign first img width & adding 14 margin value
        //if clicked icon is left, reduce with value fro,mm tehc arousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

// const dragStart = (e) => {
//     // upodating global variables value on mouse down event 
//     isDragStart = true; 
//     prevPageX = e.pageX; 
//     prevScrollLeft = carousel.scrollLeft; 
// }

// const dragging = (e) => {
//     // scrolling images/carousel to lefta ccroding to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("dragging"); 
//     let positionDiff = e.pageX - prevPageX; 
//     carousel.scrollLeft = prevScrollLeft - positionDiff; 
// }


// const dragStop = () => {
//     isDragStart = false; 
//     carousel.classList.remove("dragging"); 
// }

// carousel.addEventListener("mousedown", dragStart); 
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseuup", dragStop);
// carousel.addEventListener("mouseleave", dragStop);
const hamburgerMunu = document.querySelector('.hamburgerMenu');
const hamburgerLineOne = document.querySelector('.line1');
const hamburgerLineTwo = document.querySelector('.line2');
const hamburgerLineThree = document.querySelector('.line3');
const overLayMenu = document.querySelector('.overlayMenu');
const listItem = document.getElementsByTagName("li")


hamburgerMunu.addEventListener('click', () => {
    if(hamburgerMunu.classList.contains("isOpened")) {
        overLayMenu.classList.remove("showOverLayMenu");
        hamburgerLineTwo.classList.remove("hideLineTwo");
        hamburgerLineOne.classList.remove("lineOneRotate");
        hamburgerLineThree.classList.remove("lineThreeRotate");
        hamburgerMunu.classList.remove("isOpened");
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.remove("moveLiUp");      
        }
    }else {
        overLayMenu.classList.add("showOverLayMenu");
        hamburgerLineTwo.classList.add("hideLineTwo");
        hamburgerLineOne.classList.add("lineOneRotate");
        hamburgerLineThree.classList.add("lineThreeRotate");
        hamburgerMunu.classList.add("isOpened");
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.add("moveLiUp");     
            }
    }
});
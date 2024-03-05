const starBtn = document.querySelector('.star-btn');
const popupInfo  = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizsection = document.querySelector('.quiz-section');

starBtn.onclick = ()=>{
    popupInfo.classList.add( 'active' );
    main.classList.add("active");
}

exitBtn.onclick = ()=>{
    popupInfo.classList.remove( 'active' );
    main.classList.remove("active");
}

continueBtn.onclick = ()=>{
    quizsection.classList.add("active");
}
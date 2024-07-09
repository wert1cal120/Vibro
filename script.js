let tg = window.Telegram.WebApp;
tg.expand();



let counter = document.getElementById("counter");
counter.innerHTML = 0


let button = document.getElementById("main-button");
button.addEventListener("click", function(){
    counter.innerHTML = parseInt(counter.innerHTML)+1;
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
}); 

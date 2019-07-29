//получила клаыиши
const pianokeys = document.getElementsByClassName("pianoKey");
//повесила событие
let pianokeysArray = [...pianokeys];
pianokeysArray.forEach(element => {
    let treck = element.getAttribute('data-item');
    element.addEventListener('click', function() {
        //console.log(element);
        element.style.width = "28px";
        element.style.height = "95px";
        setTimeout(() => {
            element.style.width = "30px";
            element.style.height = "100px";
        }, 100);
        let sound = document.getElementById(treck);
        sound.play();
    });
})
let keyCLickEvent = new Event("click");
document.addEventListener("keypress", function(myKey) {
    //console.log(myKey);
    switch (myKey.code) {
        case "KeyA":
            pianokeysArray[0].dispatchEvent(keyCLickEvent);
            document.getElementById("audio1").play();
            break;
        case "KeyS":
            pianokeysArray[1].dispatchEvent(keyCLickEvent);
            document.getElementById("audio2").play();
            break;
        case "KeyD":
            pianokeysArray[2].dispatchEvent(keyCLickEvent);
            document.getElementById("audio3").play();
            break;
        case "KeyF":
            pianokeysArray[3].dispatchEvent(keyCLickEvent);
            document.getElementById("audio4").play();
            break;
        case "KeyG":
            pianokeysArray[4].dispatchEvent(keyCLickEvent);
            document.getElementById("audio5").play();
            break;
        case "KeyH":
            pianokeysArray[5].dispatchEvent(keyCLickEvent);
            document.getElementById("audio6").play();
            break;
        case "KeyJ":
            pianokeysArray[6].dispatchEvent(keyCLickEvent);
            document.getElementById("audio7").play();
            break;
        case "KeyK":
            pianokeysArray[7].dispatchEvent(keyCLickEvent);
            document.getElementById("audio8").play();
            break;
    }
});


document.addEventListener('keypress',function,(e)=>{
    // console.log(e.key) 
    switch(e.key){
        case "a":
        var sound = new Audio('./pianoSound/key01.mp3');
        sound.play();
        console.log(e.key)
        break
            alert('a is presed')
            break;

            default:
                alert('please press A key')

    }

})


const text = 'Get ready to dive into a whole new world of web development and experience the most exited frameworks and workspaces, this is where you build your career the right way and head towards the future.';

var i = 0;
var n = 0;

const desc = document.querySelector('p#showcase-desc');
desc.textContent = '';


function onTick(){
    
    if (text[i-1] == ',' && n++ < 30) {
        
        return;
    }

    desc.textContent += text[i];

    if (++i >= text.length) {

        clearInterval(timer);
    }

}


const interval = 5;

/*const timer = setInterval(onTick, interval);*/ desc.textContent = text;

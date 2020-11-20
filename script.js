const randomizeButton = document.getElementById('randomizeButton')

function randomizeText(idElement){
    if(idElement==1){
        document.getElementById('element'+idElement).innerHTML ='<a href="http://www.google.com">Google</a>';
    } else if(idElement==2){
        document.getElementById('element'+idElement).innerHTML ='<a href="http://woork.blogspot.com">Woork</a>';
    }
}

// randomizeButton.addEventListener('')
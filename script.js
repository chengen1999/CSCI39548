"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'red'){
		document.body.style.color = 'orange';
	}
    else if(color === 'orange'){
        document.body.style.color = 'yellow';
    }
    else if(color === 'yellow'){
        document.body.style.color = 'green';
    }
    else if(color === 'green'){
        document.body.style.color = 'blue';
    }
    else if(color === 'blue'){
        document.body.style.color = 'purple';
    }
    else if(color === 'purple'){
        document.body.style.color = 'black';
    }
    else if(color === 'black'){
        document.body.style.color = 'white';
    }
    else if(color === 'white'){
        document.body.style.color = 'hotpink';
    }
   
    else{
       document.body.style.color = 'red';
   }
    
}





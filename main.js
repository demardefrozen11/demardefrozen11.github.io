onload = () =>{
        document.body.classList.remove("container");
};


var button = document.getElementById("myButton");
button.onclick = playAudio;

var x = document.getElementById("myAudio"); 

function playAudio() { 
        x.play();
        button.disabled = true;
        const temp = document.createElement("button");
        const temp2 = document.createElement("a");
        temp2.setAttribute("href", "flower.html");
        temp2.innerHTML="OK CLICK HERE NOW!";
        temp.appendChild(temp2);

        document.querySelector(".button").appendChild(temp);

} 
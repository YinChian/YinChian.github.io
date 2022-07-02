var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/flask-logo.png') {
        myImage.setAttribute ('src','images/sonic.png');
    } else {
        myImage.setAttribute ('src','images/flask-logo.png');
    }
}

var myButt = document.querySelector('button');
var myHead = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name,');
    if(!myName || myName == null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHead.innerHTML = 'Log in as ' + myName;
    }
}

myButt.onclick = function() {
    setUserName();
}
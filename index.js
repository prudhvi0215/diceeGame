var random1 = Math.random();
var store = (random1*6);
var i = Math.floor(store)+1;




function gameStart(){


if(i==1){

document.querySelector("#challenge .imask1").setAttribute("src" , "images/dice1.png");

}else if(i==2){

  document.querySelector("#challenge .imask1").setAttribute("src" , "images/dice2.png");
}else if(i==3){

  document.querySelector("#challenge .imask1").setAttribute("src" , "images/dice3.png");
}else if(i==4){

  document.querySelector("#challenge .imask1").setAttribute("src" , "images/dice4.png");
}else if(i==5){

  document.querySelector("#challenge .imask1").setAttribute("src" , "images/dice5.png");
}else{

  document.querySelector("#challenge .imask1").setAttribute("src" , "images/dice6.png");
}


if(i==5){

document.querySelector("#challenge .imask2").setAttribute("src" , "images/dice1.png");

}else if(i==4){

  document.querySelector("#challenge .imask2").setAttribute("src" , "images/dice2.png");
}else if(i==2){

  document.querySelector("#challenge .imask2").setAttribute("src" , "images/dice3.png");
}else if(i==3){

  document.querySelector("#challenge .imask2").setAttribute("src" , "images/dice4.png");
}else if(i==1){

  document.querySelector("#challenge .imask2").setAttribute("src" , "images/dice5.png");
}else{

  document.querySelector("#challenge .imask2").setAttribute("src" , "images/dice6.png");
}


if(i==1){

  document.querySelector("h1").innerHTML="Player 2 Wins";
}else if(i==2){

  document.querySelector("h1").innerHTML="Player 2 Wins";
}else if(i==3){

    document.querySelector("h1").innerHTML="Player 2 Wins";
}else if(i==4){

    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(i==5){

    document.querySelector("h1").innerHTML="Player 1 Wins";
}else{

    document.querySelector("h1").innerHTML="Draw";
}

}


  gameStart();

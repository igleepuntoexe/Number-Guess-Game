/*Welcome to the Guess the Number Game. Made by @Igleepuntoexe on GitHub. 
If you have any questions, you can consult me through my gmail: adriiglesias2016@gmail.com 
or you can talk to me through discord, my username is: igle.exe # 8778. Thanks for reading this little snippet <3*/

//Declaration of variables for the name and options
alert("Welcome to the Game of Guess the Number gentleman, before continuing tell me your name")
let name = prompt("Tell me your name")
alert("Choose an option")
let opt = Number(prompt("1) Easy level / 2) Medium level / 3) Hard level / 4) AI vs Human / 5) Exit"))

//Now we make an if which is where the whole process is going to take place
if (opt == 1){
    //We declare the variable "random" so that it gives us a random number that we can work with
    let random = Math.floor(Math.random(1,10)*11);
    alert("Welcome to the Easy Level")
    /*We declare the variable "random" so that it gives us a random number that we can work with and we put the Math.floor on it 
    to give us a number without decimals.*/
    while(true){
        let num = Number(prompt("Tell me a number between 1 and 10:"))
        if (num < 11){
            if (num < random){
                alert("The number is higher");
            }else if(num > random){
                alert("The number is lower");
            }else if(num == random){
                alert("You got it!")
                alert("Congratulations " + name + ". You are the best <3")
                //We add the break so that when we guess the number it does not continue executing
                break;
            }
        //We do 2 more Else If in case the entered number exceeds the limit
        }else if (num > 10 && num <= 50){
            alert("That number is not valid for this level. Better go to the Middle Level")
        }else if (num > 50){
            alert("That number is not valid for this level. Better go to the Hard Level")
        }
    }
}else if(opt == 2){
    let random = Math.floor(Math.random(1,50)*50);
    alert("Welcome to the Middle Level")
    while(true){
        let num = Number(prompt("Tell me a number between 1 and 50:"))
        if (num <= 50){
            if (num < random){
                alert("The number is higher:");
            }else if(num > random){
                alert("The number is lower");
            }else if(num == random){
                alert("You got it!")
                alert("Congratulations " + name + ". You are the best <3")
                //We add the break so that when we guess the number it does not continue executing
                break;
            }
        //We do 1 more Else If in case the entered number exceeds the limit
        }else if (num > 50){
            alert("That number is not valid for this level. Better go to the Hard Level")
        }
    }
}else if(opt == 3){
    alert("Welcome to the Hard Level")
    let random = Math.floor(Math.random(1,100)*100);
    while(true){
        let num = Number(prompt("Tell me a number between 1 and 100:"))
        if (num < 100){ 
            if (num < random){
                alert("The number is higher");
            }else if(num > random){
                alert("The number is lower");
            }else if(num == random){
                alert("You got it!")
                alert("Congratulations " + name + ". You are the best <3")
                //We add the break so that when we guess the number it does not continue executing
                break;
            }
        //We do 1 more Else If in case the entered number exceeds the limit
        }else if(num > 100){
            alert("The number exceeds the limit")
        }
    }
}else if(opt == 4){
    alert("Welcome to IA vs Human")
    alert("You have to think of a number and the AI will put random numbers until it finds it to indicate that it has found" + 
    "it put an = to indicate that the number is less put a < and to indicate that the number is greater put a >")
    while(true){
        let random = Math.floor(Math.random(1,10)*10);
        let caracter = prompt("Is this your number? " + random)
        //To indicate to the AI that the number it has chosen randomly is the correct one, we put an "="
        if(caracter == "="){
            alert("The IA guessed the message")
            //We add the break so that when we guess the number it does not continue executing
            break;
            //To tell the AI that the number it has chosen randomly is the lowest we think we put a "<"
        }else if(caracter == "<"){
            alert("The number is lower")
            //To indicate to the AI that the number it has chosen randomly is the highest we think we put a ">"
        }else if(caracter == ">"){
            alert("The number is higher")
        }
    }
}else if(opt == 5){
    alert("Bye Bye")
}
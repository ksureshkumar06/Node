

// var test = true;
//  console.log('test')

//  alert("Don't click ok button")
//  var age = prompt("What was the age?")
//  console.log('age')

// var markMass = 100
// var markHeight = 50 
// var johnMass = 56 
// var johnheight = 45

// var markBmi = markMass/(markHeight*markHeight)

// var johnBMI  = johnMass/(johnheight*johnheight)

// console.log(markMass > 100 && markHeight > 30)




// function test (tets) {
//     var game  = tets >=100 ? console.log('true') : console.log('false');

//  }


//  function retrimentage (age , name){
//      console.log(age,name)
//  }

// var name = ['John' ,'Suresh','Test']
// // for (i = 0; i < name.length; i++) {
// //  console.log(name[i])

// name[name.length] = 'Name'

// console.log(name);


// var name = {
//     first: 'Suresh',
//     Last : 'Kalanithi',
//     List : ['Test , Test 1 , Test 2'],
//     birthDate: '1992',
//     calAge : function (){
//         this.age =  2019-this.birthDate;
//     }
// }
//  name.calAge
//  console.log(name);


// var name = new Object();
// name = 'test'
// console.log(name)

//  // }

    // var ScorePlayer1 = 0;
    // var ScreenPlayer2 = 0;

    // var roundScorePlayer1 = 0; var roundScorePlayer2 = 0;

    // for (i = 0; i < 100; i++) {

    //     ScorePlayer1 = Math.round(Math.random() * 10);
    //     roundScorePlayer1 += ScorePlayer1;
    //     console.log("Before roundScorePlayer1: " + roundScorePlayer1)

    //     ScorePlayer2 = Math.round(Math.random() * 10);
    //     roundScorePlayer2 += ScorePlayer2;
    //     console.log("Before roundScorePlayer2: " + roundScorePlayer2)

    //     if (roundScorePlayer1 > 100 || roundScorePlayer2 > 100) {
    //         console.log("roundScorePlayer1 : " + roundScorePlayer1)
    //         console.log("roundScorePlayer2 : " + roundScorePlayer2)
    //         if (roundScorePlayer1 > 100) {
    //             console.log("roundScorePlayer1 Won")
    //             break;
    //         }
    //         if (roundScorePlayer2 > 100) {
    //             console.log("roundScorePlayer2 Won")
    //             break;
    //         }

    //     }

    // }

    // document.querySelector('#player_1').textContent() = '10'

    // document.querySelector('.roll').addEventListener('click', function(){
    //     // document.getElementById("dice-1").style.display = 'block';
    //     document.getElementById("dice-1").src = 'dice-2.png'
    // })

    document.addEventListener("click", function(){
        document.getElementById("dice").src ='dice-'+1+'.png'
      });

    









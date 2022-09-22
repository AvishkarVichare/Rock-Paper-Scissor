const choice = document.querySelectorAll('.choice');
let userScoreVal = 0;
let compScoreVal = 0;
let userStatEl = document.querySelector('#result-user-stat');
let compStatEl = document.querySelector('#result-comp-stat');
let resStatEl = document.querySelector('#result-final-stat');

let waiTime = 5;



let waitEl = document.createElement('div');
waitEl.style.fontSize = '4rem';
waitEl.style.fontWeight = 'bolder';
waitEl.style.textAlign = 'center';

// creating element for stats 
let element1 = document.createElement('span');
let element2 = document.createElement('span');
let element3 = document.createElement('span');
let elemetns = [element1, element2, element3];
// styling both elemetns
elemetns.forEach(e => {
    e.style.paddingLeft = '10px';
    e.style.fontWeight = 'bolder';

})

// adding Element inside user and comp stat 
compStatEl.append(element1);
userStatEl.append(element2);
resStatEl.append(element3);

const moves = ['Rock', 'Paper', 'Scissor'];

// getting move of computer 
const getComputerMove = () => {
    let i = Math.floor(Math.random() * 3);
    return moves[i];
}

// declaring winner
const declareWinner = () => {
    userScoreVal = 0;
    compScoreVal = 0;
    if (userScoreVal > compScoreVal){
        resStatEl.querySelector('span').innerText  = "You Won !";
    }
    else{
        resStatEl.querySelector('span').innerText  = "Computer Won !"
    }
    
}

choice.forEach(e => {
    e.addEventListener('click', () => {
        let userMove = e.id;
        let compMove = getComputerMove()
        compStatEl.querySelector('span').innerText = compMove;

        // console.log(compMove)

        if (userMove == 'r') {
            userStatEl.querySelector('span').innerText = 'Rock';
            if (compMove == 'Scissor') {
                userScoreVal++;
                document.querySelector('#userScoreVal').innerText = userScoreVal;
                resStatEl.querySelector('span').innerText = 'User'

            }
            else if (compMove == 'Paper') {
                compScoreVal++;
                document.querySelector('#compScoreVal').innerText = compScoreVal;
                resStatEl.querySelector('span').innerText = 'Computer'
            }
            else {
                userStatEl.querySelector('span').innerText = 'Same';
                compStatEl.querySelector('span').innerText = 'Same';
                resStatEl.querySelector('span').innerText = 'Draw'

            }
        }

        // paper
        if (userMove == 'p') {
            userStatEl.querySelector('span').innerText = 'Paper';
            if (compMove == 'Rock') {
                userScoreVal++;
                document.querySelector('#userScoreVal').innerText = userScoreVal;
                resStatEl.querySelector('span').innerText = 'User'

            }
            else if (compMove == 'Scissor') {
                compScoreVal++;
                document.querySelector('#compScoreVal').innerText = compScoreVal;
                resStatEl.querySelector('span').innerText = 'Computer'
            }
            else {
                userStatEl.querySelector('span').innerText = 'Same';
                compStatEl.querySelector('span').innerText = 'Same';
                resStatEl.querySelector('span').innerText = 'Draw'

            }
        }

        // Scissor
        if (userMove == 's') {
            userStatEl.querySelector('span').innerText = 'Scissor';
            if (compMove == 'Paper') {
                userScoreVal++;
                document.querySelector('#userScoreVal').innerText = userScoreVal;
                resStatEl.querySelector('span').innerText = 'User'

            }
            else if (compMove == 'Rock') {
                compScoreVal++;
                document.querySelector('#compScoreVal').innerText = compScoreVal;
                resStatEl.querySelector('span').innerText = 'Computer'
            }
            else {
                userStatEl.querySelector('span').innerText = 'Same';
                compStatEl.querySelector('span').innerText = 'Same';
                resStatEl.querySelector('span').innerText = 'Draw'

            }
        }

      

        // checking for winner 
        if(userScoreVal==3 || compScoreVal ===3){
            declareWinner()
            // setting display none of choices for 5 sec 
            document.querySelector('.choices').style.display = 'none';
            document.body.append(waitEl);
            waitEl.innerText = 'wait for 5 seconds...';

           let timer =  setInterval(()=>{
                
                waitEl.innerText = waiTime -1;
                waiTime --;
                if(waiTime <= 0){
                    clearInterval(timer);
                  }
            },1000)
         //  setting all stats to empty again after 5 sec 

        setTimeout(() => {

            userStatEl.querySelector('span').innerText = '';
            compStatEl.querySelector('span').innerText = '';
            resStatEl.querySelector('span').innerText = ''
            
            document.querySelector('#userScoreVal').innerText = '0';
            document.querySelector('#compScoreVal').innerText = '0';
            document.querySelector('.choices').style.display = 'block'
            document.body.removeChild(waitEl);
            waiTime = 5;


        }, 5000)                                                                                                                                                                
        }

    })
})




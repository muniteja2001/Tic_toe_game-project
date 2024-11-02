n = 0;
let turn = document.getElementsByClassName('turn')[0];
let s =1;
for (let i = 1; i <= 9; i++) {
    let box = document.getElementById(`box${i}`).addEventListener('click', function () {
        if (document.getElementById(`box${i}`).innerHTML === '') {
            if (s === 1) {
                if (n % 2 === 0) {
                    let x = document.getElementById(`box${i}`).innerHTML = 'X';
                }
                else if (n % 2 !== 0) {
                    let o = document.getElementById(`box${i}`).innerHTML = 'O';
                }
            }
            n++;
        }
        let box1 = document.getElementsByClassName('items')[0].textContent;
        let box2 = document.getElementsByClassName('items')[1].textContent;
        let box3 = document.getElementsByClassName('items')[2].textContent;
        let box4 = document.getElementsByClassName('items')[3].textContent;
        let box5 = document.getElementsByClassName('items')[4].textContent;
        let box6 = document.getElementsByClassName('items')[5].textContent;
        let box7 = document.getElementsByClassName('items')[6].textContent;
        let box8 = document.getElementsByClassName('items')[7].textContent;
        let box9 = document.getElementsByClassName('items')[8].textContent;
        console.log(turn);
        if ((box1 !== '') && (box1 == box2) && (box2 == box3)) {
            turn.innerHTML = box1 + "wins";
            s=0;
            
        } else if ((box4 !== '') && (box4 == box5) && (box5 == box6)) {
            turn.innerHTML = box4 + "wins";
            s=0;
        } else if ((box7 !== '') && (box7 == box8) && (box8 == box9)) {
            s=0;
            turn.innerHTML = box7 + "wins";
        } else if ((box2 !== "") && (box2 == box5) && (box5 == box8)) {
            s=0;
            turn.innerHTML = box2 + "wins";
        } else if ((box3 !== "") && (box6 == box3) && (box3 == box9)) {
            s=0;
            turn.innerHTML = box3 + "wins";
        } else if ((box1 !== "") && (box1 == box4) && (box4 == box7)) {
            s=0;
            turn.innerHTML = box1 + "wins";
        } else if ((box3 !== "") && (box5 == box3) && (box3 == box7)) {
            turn.innerHTML = box3 + "wins";
            s=0;
        } else if ((box1 !== "") && (box1 == box5) && (box5 == box9)) {
            s=0;
            turn.innerHTML = box1 + "wins";
            
        } else if (box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !== '' && box6 !== '' && box7 !== '' && box8 !== '' && box9 !== '') {
            turn.innerHTML = 'Match Draw';
            s=0;
        }
    })
}


document.getElementsByClassName('reset')[0].addEventListener('click', function () {
    turn.innerHTML = "X's turn";
    for (let j = 1; j <= 9; j++) {
        document.getElementById(`box${j}`).innerHTML = '';

    }
    s =1;

})
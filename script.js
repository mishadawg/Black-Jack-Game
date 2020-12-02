function getRandomInt(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
function getCard(){
    let cards = [6,7,8,9,10,'J','Q','K','A'];
    return cards[getRandomInt(0,cards.length - 1)];
}
function getSum(arr){
    let summ = 0;
    for(i=0;i<arr.length;i++){
        switch(arr[i]){
            case 'J':
                arr[i] = 10;
                break;
            case 'Q':
                arr[i] = 10;
                break;
            case 'K':
                arr[i] = 10;
                break;
            case 'A':
                if(summ > 10){
                    arr[i] = 1;
                }
                else{
                    arr[i] = 11;
                }
                break
        }
        summ += arr[i];
    }     
    return summ;
}
function getStatus(){
    alert(`Дилер: ${dealer.join(' ')} Игрок: ${player.join(' ')}`);
}
function getScore(){
    alert(`Текущая сумма карт у игрока: ${getSum(player)} Текущая сумма карт у дилера: ${getSum(dealer)}`);
}
function checkAnswer(test){
        if (test == 'Да' || test == 'да'){
            return true;
        }else if (test == 'Нет'|| test == 'нет'){
            return false;
        }else{
            return ("Введите заново число")
        }
}
// Data
let session = true;
let gameIsOn = true;
let dealer,player;
let answer = '';
// Start game
while(gameIsOn){
    session = true;
    dealer = [];
    player = [];

    dealer = [getCard()];
    player = [getCard(),getCard()];
    getStatus();
    getScore();

    if(getSum(player) === 21){
        alert(`Вы выиграли,у вас ${getSum(player)} !`)
    }
    else{
        while(session){
            answer = prompt(`Хотите еще карту?(да)(нет)`)
            if (checkAnswer(answer) == true){
                player.push(getCard());
                getStatus();
                getScore();
            }else if (checkAnswer(answer) == false){
                while(getSum(dealer)<17){
                    dealer.push(getCard());
                };
                getStatus();
                getScore();
                if(getSum(dealer) == 21){
                    alert(`У дилера Black Jack!`);
                    session = false;
                }else if (getSum(dealer) > 21){
                    alert(`У дилера Перебор!`);
                    session = false;
                }else if (getSum(dealer) == getSum(player)){
                    alert(`Ничья!`);
                    session = false;
                }else if (getSum(player) > getSum(dealer)){
                    alert(`Вы выиграли!`);
                    session = false;
                }else{
                    alert(`Вы проиграли!`);
                    session = false;
                }
            }
        }
    }
    // Again?
    gameIsOn = confirm (`Начать заново?`);
}
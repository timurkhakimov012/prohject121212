let money = prompt('Ваш бюджет на месяц?', ''); 
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget:  money,    
    timeData: time,
    expenses:{} ,
    optionalExpenses: {}, 
    income: [],
    savings: false
}

for(let i = 0; i < 2; i++) {
    let question1 = prompt('Введите обязательную статью расходов в этом месяце', '')
    let questions = prompt("Во сколько обойдется?", '')

    if((typeof(question1)) === 'string' && (typeof(questions) != null)
        && question1 != '' && questions != '' && question1.length < 50){
            console.log('done');
        appData.expenses[question1] = questions;
    }else{
        console.log('Результат');
        i--;
    }
};
appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
}else if(appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
}else {
    console.log('Произошла ошибка');
}


//Цикл while 
//  let i = 0;
// while (i < 2) {
//     let question1 = prompt('Введите обязательную статью расходов в этом месяце', '')
//     let questions = prompt("Во сколько обойдется?", '');
//     if((typeof(question1)) === 'string' && (typeof(questions) != null)
//         && question1 != '' && questions != '' && question1.length < 50){
//             console.log('done');
//         appData.expenses[question1] = questions;
//     }else{
//         console.log('Результат');
//         i--;
//     }
//     i++;
// };


//Цикл do
// let i = 0;
// do {
//     let question1 = prompt('Введите обязательную статью расходов в этом месяце', '')
//         let questions = prompt("Во сколько обойдется?", '');
//         if((typeof(question1)) === 'string' && (typeof(questions) != null)
//             && question1 != '' && questions != '' && question1.length < 50){
//                 console.log('done');
//             appData.expenses[question1] = questions;
//         }else{
//             console.log('Результат');
//             i--;
//         }
//         i++;
//     }
//     while(i < 2);
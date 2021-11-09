let houses = [
    {house:"Старк", points: 0, emblem:"./assets/images/gerb3.png", addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "Ланнистер", points: 0, emblem:"./assets/images/gerb1.png", addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "Тирелл", points: 0, emblem:"./assets/images/gerb4.png", addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "Баратеон", points: 0, emblem:"./assets/images/gerb2.png",  addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "остальные", points: 0, emblem:"", addPoints: function(){this.points += 1; questionCount += 1;}},
]
let otherHouses = [
    {house:"Битли", emblem: "./assets/images/emblems/beetle.png"},
    {house: "Таргариен", emblem: "./assets/images/emblems/targaryen.png"},
    {house: "Вестерлинг", emblem: "./assets/images/emblems/westerling.png"},
    {house: "Клиган", emblem: "./assets/images/emblems/clegane.png"},
    {house: "Гринфилд", emblem: "./assets/images/emblems/greenfield.png"},
    {house: "Свифт", emblem: "./assets/images/emblems/swyft.png"}, 
    {house: "Байуотэр", emblem: "./assets/images/emblems/bywater.png" },
    {house: "Блаунт", emblem: "./assets/images/emblems/blount.png"},
    {house: "Гонт", emblem: "./assets/images/emblems/gaunt.png"}, 
    {house: "Берч", emblem: "./assets/images/emblems/byrch.png"},
    {house: "Амбер", emblem: "./assets/images/emblems/umber.png"},
    {house: "Болтон", emblem: "./assets/images/emblems/bolton.png"},
    {house: "Карстарк", emblem: "./assets/images/emblems/karstark.png"},
    {house: "Лиддл", emblem: "./assets/images/emblems/liddle.png"},
    {house: "Рид", emblem: "./assets/images/emblems/reed.png"},
    {house: "Блэктайд", emblem: "./assets/images/emblems/blacktyde.png"},
    {house: "Гудбразер", emblem: "./assets/images/emblems/goodbrother.png"},
    {house: "Майр", emblem: "./assets/images/emblems/myre.png"},
    {house: "Кеннинг", emblem: "./assets/images/emblems/cunnings.png"},
    {house: "Драмм", emblem: "./assets/images/emblems/drumm.png"},
    {house: "Баттэрвелл", emblem: "./assets/images/emblems/butterwell.png"}, 
    {house: "Блэквуд", emblem: "./assets/images/emblems/blackwood.png"},
    {house: "Фрей", emblem: "./assets/images/emblems/frey.png"},
    {house: "Смоллвуд", emblem: "./assets/images/emblems/smallwood.png"},
    {house: "Кит", emblem: "./assets/images/emblems/keath.png"},
    {house: "Бейлиш", emblem: "./assets/images/emblems/baelish.png"},
    {house: "Белмор", emblem: "./assets/images/emblems/belmore.png"},
    {house: "Сандэрлэнд", emblem: "./assets/images/emblems/sunderland.png"},
    {house: "Мур", emblem: "./assets/images/emblems/moore.png"},
    {house: "Тэмплтон", emblem: "./assets/images/emblems/templeton.png"}
]
let containerQuestion = document.getElementById('container-questions');
let question = document.getElementById('question');

var questionCount = 0;
let result = document.getElementById('result');
let resultMessage = document.getElementById('result-message');

let sumPoints = Math.max(houses);

//add emblem
let emblem = document.getElementById('emblem');
//add button
let resultButton = document.getElementById('result-button');

containerQuestion.onclick = function(event) {
    //declare cursor 
    let cursor = event.target;
    //declare target div contains question that we will need to delete
    let target = event.target.closest('#question');
    if(cursor.tagName == "BUTTON") {
        target.style.display = "none";
    } else {
       console.log('miss');
    }    
}

function calculateResult() {
    var maxPoints = houses.reduce((prev, cur) => {
        if(prev.points > cur.points) {
            return prev;
        } else {
            return cur;
        }       
    })
    if (maxPoints.house === "остальные") {
        let randomHouse = otherHouses[Math.floor(Math.random() * otherHouses.length)];
        containerQuestion.style.display = "flex";
        result.style.display = "flex";
        resultMessage.innerHTML = "Вы " + randomHouse.house + "!";
        emblem.src = randomHouse.emblem;
        resultButton.style.display = "none";
        containerQuestion.style.display = "none";
        document.getElementById("line").style.marginBottom = "500px";
    } else  {
    console.log(maxPoints);
    containerQuestion.style.display = "flex";
    result.style.display = "flex";
    resultMessage.innerHTML = "Вы " + maxPoints.house + "!";
    emblem.src = maxPoints.emblem;
    resultButton.style.display = "none";
    containerQuestion.style.display = "none";
    document.getElementById("line").style.marginBottom = "500px";
    }
}


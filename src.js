/* צרו פונקציה בנאית לאובייקט מכונית המקבלת שם, צבע ונפח מנוע. לכל מכונית יש מספר
זיהוי ייחודי המורכב מחיבור של דגם, צבע ונפח מנוע. למשל, אם שם היצרן של המכונית הוא
opel , הצבע הוא white ונפ ח המנוע הוא 1,200 , מספר הזיהוי שלה יהיה
opelwhite1200 . צרו לאובייקט מכונית פונקציה המחזירה את מספר הזיהוי. הדגם, הצבע
ונפח המנוע הם נתונים שחשופים החוצה . */

const Car = function(name, color, engineCapacity) {
    this.name = name;
    this.color = color;
    this.engineCapacity = engineCapacity;
    const id = name + color + engineCapacity;
    let modelNumber;

    this.getId = function() {
        return id;
    }
    this.setModelNumber = function(inputModelNumber) {
        modelNumber = inputModelNumber;
    }
    this.getModelNumber = function() {
        return modelNumber;
    }
}

const myCar = new Car('honda', 'black', 1400);
myCar.setModelNumber(1234);
console.log(myCar.getId());
console.log(myCar.getModelNumber());

/*
צרו פונקציה שמקבלת מספר ומערך ומחזירה אך ורק מערך משתמשים שהגיל שלהם שווה
למספר הזה או גדול ממנו.
*/

let users = [ 
    { userName: 'Moshe', age: 20, }, 
    { userName: 'Yaakov', age: 25, }, 
    { userName: 'Ran', age: 40, }, 
];

const filterUsersByAge = function(requestedAge, users) {
    const filteredUsers = users.filter((user) => {
        if (user.age >= requestedAge){
            return true;
        } else {
            return false;
        }
    })
    return filteredUsers;
}

console.log(filterUsersByAge(25, users));

function getRandom() {
    return Math.floor(Math.random() * 100)
}

function getRandomByNum(num) {
    return Math.round(Math.random() * num)
}
console.log(getRandom());
console.log(getRandomByNum(11))

/*
צרו שירות, באמצעות
 setTimeout ,
שמחזיר לאחר שתי שניות תגובה עם המילים
 Two seconds passed . 
 הכניסו אותו להבטחה והכניסו את ההבטחה לתוך פונקציה שתחזיר אותה.
בדקו שהפונקציה עובדת באמצעות האזנה עם
 then 
 לקיום ההבטחה .
*/

function getService() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('service return');
        }, 1000)
    })
}

getService().then((result) => {
    console.log(result);
})

console.log('waiting for service...')

/*
צרו פונקציה 
checkIfNumberOK 
שמקבלת מספר ומחזירה הבטחה. אם המספר גדול מ-
10 , 
תחזור הבטחה מקוימת עם מחרוזת הטקסט
 Number OK . 
 אם המספר קטן מ- 10 או שווה לו, תחזור הבטחה מופרת עם מחרוזת הטקסט 
 Number bad
*/

function checkIfNumberOK(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve('Number OK');
            } else {
                reject('Number bad');
            }
        }, 5000)
    })
}

checkIfNumberOK(11).then(
    (result) => {
        console.log(result);
    }, 
    (error) => {
        console.log(error);
    }
);

/*
בדיוק כמו בפרק הקודם , צרו פונקציה 
checkIfNumberOK 
שמקבלת מספר ומחזירה הבטחה. אם המספר גדול מ- 10 , תחזור הבטחה מקוימת עם מחרוזת הטקסט 
Number is OK . אם המספר קטן מ- 10 , תחזור הבטחה מופרת עם מחרוזת הטקסט 
Bad Number .
התרגיל האמיתי הוא לממש את הקריאות עם 
async . צרו פונקציית 
async 
שמשתמשת בשירות, וקראו לה פעם אחת באופן כזה שהיא תדפיס בקונסולה את מה שהשירות מחזיר אם
הוא מצליח ופעם אחת באופן כזה שהיא תדפיס בקונסולה את מה שהשירות מחזיר אם הוא
נכשל.
*/

async function checkIfNumberOK2(num) {
    try {
        const res = await checkIfNumberOK(num);
        console.log(`Promise fullfilled: ${res}`);
    } catch (error) {
        console.log(`Promise rejected: ${error}`);
    }
};

checkIfNumberOK2(33);
checkIfNumberOK2(4);
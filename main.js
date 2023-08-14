// 1.
// Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

//forof
const friendsForof = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let stringForof = '';
for (const friendForof of friendsForof) {
    if (stringForof += friendForof) {
        stringForof += ','
    }
}
console.log(stringForof);

//for
const friendsFor = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let stringFor = '';
for (let index = 0; index < friendsFor.length; index++) {
    const friendFor = friendsFor[index];
        if (stringFor += friendFor) {
            stringFor += ','
}}
console.log(stringFor);

//join
const friendsJoin = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let stringJoin = friendsJoin.join(",")
console.log(stringJoin);

// 2.
// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = ['Карточка-1', 'Карточка-2','Карточка-3','Карточка-4','Карточка-5'];

// 3.
// Видалити
const cardToRemove = "Карточка-3";
const indexCardToRemove = cards.indexOf("Карточка-3");
const removeCard = cards.splice(indexCardToRemove, 1)
console.log(cards);

// 4.
// Додати
const cardToInsert = "Карточка-6";
const InsertCard = cards.splice(4, 0, cardToInsert)
console.log(cards);

// 5.
// Оновити
const cardToUpdateOne = "Карточка-2";
const cardToUpdateTwo = "Карточка-1";
const indexCardToUpdateOne = cards.indexOf("Карточка-2");
const indexCardToUpdateTwo = cards.indexOf("Карточка-1");
const UpdateCard = cards.splice(indexCardToUpdateOne, 1, cardToUpdateTwo)
console.log(cards);
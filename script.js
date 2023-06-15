const yourName = prompt("Как Вас зовут? ");
/**
 * greeting принимает введенное пользователем имя и выводит приветствие, 
 * используя переданное имя, в консоль
 * @param {string} 
 * @returns {string}
 */
function greeting(yourName) {
    const message = "Здравствуйте, " + yourName + "!";
    console.log(message);
}
greeting(yourName);

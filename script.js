let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (value === 'secret') {
            window.location = "https://youtu.be/dQw4w9WgXcQ?feature=shared";
        } else if (value === 'AKAL') {
            window.location = "https://youtu.be/dTnH0Imbx2U?feature=shared";
        } else {
            if (['+', '-', '*', '/', '.'].includes(value) && ['+', '-', '*', '/', '.'].includes(string.slice(-1))) {

            } else {
                string += value;
                input.value = string;
            }
        }
    });
});
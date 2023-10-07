const toggle = document.getElementById('toggle_mode');
const cal = document.querySelector('.calculator');
const key = document.querySelector('.keypad');
const dis = document.querySelector('#display');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    if(toggle.className == 'dark')
    {
        toggle.className = 'light';
        toggle.innerHTML = 'Light Mode';
        toggle.style.background = 'black';
        toggle.style.color = 'white';
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        cal.style.background = 'black';
        dis.style.background = 'black';
        dis.style.color = 'white';
        dis.style.border = '1px solid black';
        key.style.background = 'rgb(24, 24, 24)';
    }
    else if(toggle.className == 'light')
    {
        toggle.className = 'dark';
        toggle.innerHTML = 'Dark Mode';
        toggle.style.background = 'white';
        toggle.style.color = 'black';
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        cal.style.background = 'silver';
        dis.style.background = 'silver';
        dis.style.color = 'black';
        dis.style.border = '1px solid silver';
        key.style.background = 'silver';
    }
});

display.value = "0";
let x = document.getElementById('display');
let buttons = document.querySelectorAll('.b');
let number = "";
let result = "";
for (item of buttons)
{
    item.addEventListener('click', (e) => {
        number = e.target.innerText;
        if (number == 'x')
        {
            number = '*';
            result += number;
            display.value = result;
        }
        else if (number == 'DE')
        {
            result = result.slice(0, -1);
            display.value = result;
        }
        else if (number == 'AC')
        {
            result = "";
            display.value = result;
        }
        else if (number == '=')
        {
            display.value = eval(result);
            result = display.value;
        }
        else
        {
            result += number;
            display.value = result;
        }

    })
}
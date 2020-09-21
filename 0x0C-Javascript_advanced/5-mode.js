function changeMode(size, weight, transform, background, color)
{
    element.style.fontSize = size;
    element.style.fontWeight = weight;
    element.style.textTransform = transform;
    element.style.backgroundColor = background;
    element.style.color = color;
}

function main()
{
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');


    let paragraph = document.createElement('p');
    let spookyBtn = document.createElement('button');
    let darkBtn = document.createElement('button');
    let screamBtn = document.createElement('button');

    paragraph.textContent = "Welcome Holberton!";
    spookyBtn.textContent = "Spooky";
    darkBtn.textContent = "Dark mode";
    screamBtn.textContent = "Scream mode";

    document.body.appendChild(paragraph);
    document.body.appendChild(spookyBtn);
    document.body.appendChild(darkBtn);
    document.body.appendChild(screamBtn);
}

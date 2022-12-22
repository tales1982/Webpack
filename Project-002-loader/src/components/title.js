class Title {

    create(title){

        const h1 = document.createElement('h1');

        h1.innerText = title;

        h1.classList.add('main-title');

        document.querySelector('body').appendChild(h1)
    }
}


//Tenho que exporta para poder ussar  em outro arquivo

export default Title;
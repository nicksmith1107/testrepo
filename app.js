const memeForm = document.querySelector('#memeform');
const memeUrl = document.querySelector('#memeimg');
const topText = document.querySelector('#memetoptext');
const bottomText = document.querySelector('#memebottomtext');
const placeSection = document.querySelector('#memeplacesection');


const memeSubmit = (e) => {
    e.preventDefault();
    let vals = [memeUrl.value, topText.value, bottomText.value];
    console.log([memeUrl.value, topText.value, bottomText.value]);

    memeUrl.value = null;
    topText.value = null;
    bottomText.value = null;

    let memeDiv = prepareMeme(vals);
    placeSection.append(memeDiv);
}

const prepareMeme = ([url, top, bottom]) => {
    let div = document.createElement('div');
    let removeDiv = document.createElement('div');
    let img = document.createElement('img');
    let topParagraph = document.createElement('p');
    let bottomParagraph = document.createElement('p');

    img.setAttribute('src', url);
    div.classList.add('memecontainer');
    // div.style.backgroundImage = `url(${url})`;
    div.append(img);


    topParagraph.classList.add('toptext');
    topParagraph.innerHTML = top;
    div.append(topParagraph);

    bottomParagraph.classList.add('bottomtext');
    bottomParagraph.innerHTML = bottom;
    div.append(bottomParagraph);

    removeDiv.classList.add('removememe');
    removeDiv.innerText = 'X';
    div.append(removeDiv);

    return div;
}

const eraseMeme = (e) => {
    let $this = e.target;

    if ($this.classList.contains('removememe')) {
        let parent = $this.parentElement;

        parent.remove();
    }
}
memeForm.addEventListener('submit', memeSubmit);
placeSection.addEventListener('click', eraseMeme);
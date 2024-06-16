import agapanthus from "./agapanthus.jpg";
import strawberry from "./strawberry.jpg";
import peony from "./peony.jpg";
import easterLily from "./easterLily.jpg";
import lupine from "./lupine.jpg";

const flowers = {
    agapanthus: {
        title: "Agapanthus",
        img: agapanthus,
    },
    strawberry: {
        title: "Strawberry",
        img: strawberry,
    },
    peony: {
        title: "Peony",
        img: peony,
    },
    easterLily: {
        title: "Easter Lily",
        img: easterLily,
    },
    lupine: {
        title: "Lupine",
        img: lupine,
    },
}

const content = document.querySelector("#content");

const loadPage = () => {
    console.log("2");

    for (let name in flowers) {
        const card = document.createElement("div");
        card.classList = "card";

        const image = document.createElement("img");
        image.src = flowers[name].img;
        image.alt = flowers[name].title;
        card.appendChild(image);

        const spacer = document.createElement("div");
        spacer.classList = "card-spacer";
        card.appendChild(spacer);

        const textSection = document.createElement("div");
        textSection.classList = "text-section";
        card.appendChild(textSection);

        const cardTitle = document.createElement("h1");
        cardTitle.classList = "card-title";
        cardTitle.innerText = flowers[name].title;
        textSection.appendChild(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList = "card-text";
        cardText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti tempore autem ea quibusdam quas cupiditate eum deserunt, quam optio repudiandae dolorum modi amet facere illo. Non mollitia quod sunt.";
        textSection.appendChild(cardText);

        const readMore = document.createElement("p");
        readMore.classList = "read-more";
        readMore.innerText = "read more...";
        textSection.appendChild(readMore);

        content.appendChild(card);
    }
}

export default loadPage;

// import Img from './img.jpg';

// function component() {
//     const element = document.createElement('div');

//     // Add the image to our existing div.
//     const myImg = new Image();
//     myImg.src = Img;

//     element.appendChild(myImg);

//     return element;
// }

// document.body.appendChild(component());
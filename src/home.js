const content = document.querySelector("#content");

const loadPage = () => {
    const title = document.createElement("h1");
    title.innerHTML = "What is this?";
    content.appendChild(title);

    const text = document.createElement("p");
    text.innerHTML = "Just a collection of some flowers I like.<br/\>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dicta culpa doloribus exercitationem molestiae quam officiis amet optio illum nesciunt? Eligendi quo accusantium, a veniam eius in culpa modi voluptatum!";
    content.appendChild(text);
}

export default loadPage;
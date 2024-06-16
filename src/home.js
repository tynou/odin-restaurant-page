const content = document.querySelector("#content");

const loadPage = () => {
    console.log("1");
    const title = document.createElement("h1");
    title.innerHTML = "What is this?";
    content.appendChild(title);

    const text = document.createElement("p");
    text.innerHTML = "Just a collection of some flowers I like.<br/\>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dicta culpa doloribus exercitationem molestiae quam officiis amet optio illum nesciunt? Eligendi quo accusantium, a veniam eius in culpa modi voluptatum!";
    content.appendChild(text);
}

export default loadPage;

{/* <h1>What is this?</h1>
                <p>
                    Just a collection of some flowers I like.<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dicta culpa doloribus exercitationem molestiae quam officiis amet optio illum nesciunt? Eligendi quo accusantium, a veniam eius in culpa modi voluptatum!
                </p> */}
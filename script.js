const heading=React.createElement("h1",{},"Learn Web Development");

const p1=React.createElement("div",{},React.createElement("p",{},"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites"));

const p2=React.createElement("div",{},React.createElement("p",{},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the ',
    React.createElement("a",{href: "https://developer.mozilla.org/"},"rest of MDN"),
    ', and other intermediate to advanced resources that assume a lot of previous knowledge.'));

const lastp=React.createElement("div",{},React.createElement("p",{},"If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."));

const container = React.createElement("div", {id:"parent"}, heading, p1, p2, lastp);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


//---Learnings-------
// 1.The root.render() function only accepts a single React element.
// 2.you need to wrap them inside a parent element, like a <div> which we use as  container.
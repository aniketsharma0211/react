const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to Visit Google"
}
const maincontainer = document.getElementById("root");


function customrender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
   for (const [key, value] of Object.entries(element.props)) {
        domElement.setAttribute(key, value);
  }
    container.appendChild(domElement);
}

customrender(reactElement, maincontainer);
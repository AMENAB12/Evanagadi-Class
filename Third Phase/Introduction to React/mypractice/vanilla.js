const container = document.querySelector("#formjs");
const itemList  = ["abebe", "kebede", "almaz"];


const ulElement = document.createElement("ul");

itemList.forEach((item) => {const listElement = document.createElement("li");
listElement.innerText = item;
ulElement.appendChild(listElement);


} );
container.appendChild( ulElement );


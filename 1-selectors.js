//! SELECTORS //


//?  ElementsByID   //

// const myHeader = document.getElementById("header");

// myHeader.style.color = "red";
// myHeader.style.backgroundColor = "blue"

// const button = document.getElementById("btn");
// button.style.backgroundColor = "black";
// button.style.color = "white";
// button.style.padding = "10px";


//?   TAGS  //

// const list = document.getElementsByTagName("li");
// const itemList = document.getElementsByClassName("list");



// console.log(list);

// list[0].style.color = "red";
// list[list.length - 1].style.color = "orange";

// list[3].innerHTML = "Sezer"

// console.log(list[2].textContent);
// console.log(list[2].innerHTML);

// list[4].innerHTML += "<li>sezeeerrr</li>" ;


//? Convert Array with Array From//


// const itemList = document.getElementsByClassName("list");

// const itemListArr = Array.from(itemList);

// itemListArr.forEach((item) => console.log(item));


//? Convert Array with spread Operator //

// const itemList = document.getElementsByClassName("list")

// const itemListSpread = [...itemList];

// itemListSpread.map( (item) => console.log(item.style.color = "red"));

//? querySelector //

// document.querySelector("h1");
// document.querySelector(".add-item");
// document.querySelector("#header");

//? querySelectorAll //

// const lists = document.querySelectorAll("ul li");

// lists.forEach((li) => console.log(li.innerText));


//! TRAVERSING //

//* 1 - Yukari Yönde Traverse 

// const list = document.querySelector("li");
// console.log(list.parentElement.parentElement.parentElement.parentElement.parentElement);

// console.log(list.closest("section")); //? listin en yakını section olan parent


//* 2 - Asaği Yönde Traverse

// const addItem = document.querySelector(".add-item");

// console.log(addItem.children)

// addItem.children[0].style.color = "red";
// addItem.children[1].style.backgroundColor = "blue";
// addItem.children[2].style.backgroundColor = "purple";

// addItem.firstElementChild.style.color = "orange";
// addItem.lastElementChild.style.color = "yellowgreen"

//* 3 - Yatay Yönde Traverse

// const ul = document.querySelector("ul");
 
// const lists = ul.children ;
// console.log(lists);

// const js = lists[2];
// console.log(js);


// const previousElement = js.previousElementSibling;

// console.log(previousElement.innerText);

// const nextElement = js.nextElementSibling;

// console.log(nextElement.innerText);
























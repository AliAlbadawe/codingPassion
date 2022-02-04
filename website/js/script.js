/* 
    Defining Object
    [1] Object Literal

*/

let user = {
  //Properties
  firstName: "Ali",
  lastName: "Badawy",
  age: 33,
  addresses: {
    eg: "Bilqas",
    sa: "Riyadh",
    getMainAddress: () => {
      return `Main Address:${user.addresses.eg}`;
    },
  },

  //Methods
  getFullName: () => {
    return `${user.firstName} ${user.lastName}`;
  },
  getWholeInfo: () => {
    return `Full Name:${user.firstName} ${user.lastName}
      Age in Days: ${user.age * 365} `;
  },
};

//Accessing Object props
console.log(user.addresses.sa); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

//Accessing Object Methods
console.log(user.getWholeInfo());
console.log(user.addresses.getMainAddress());

//Lesson 5 Dot VS Bracket notaion
//Using bracket when the identifier name starts with num or using special characters
//Nice and strange ex
let myName = "name";
let nameObj = {
  name: "ALIIII",
};
console.log(nameObj[myName]);

// Lesson 6
let user2 = new Object();

user2.firstName = "Boo";
user2.lastName = "Foo";
user2["age"] = 37;
console.log(user2["lastName"], user2["age"]);

let newDiscount = {
  hasDiscount: false,

  showMsg: () => {
    return `You${this.hasDiscount ? "" : " Don't"} have a discount`;
  },
};
console.log(newDiscount.hasDiscount);

console.log(newDiscount.showMsg());

let otherDis = Object.create(newDiscount);
otherDis.hasDiscount = false;
console.log(otherDis.showMsg());

console.log(Object.is(newDiscount.hasDiscount, otherDis.hasDiscount));
console.log("#".repeat(30));
//IMPORTANT LESSON
let koo = {};
// for (let ele in user) {
//   koo += `<div> The ${ele} is ${user[ele]}</div>`;
// }

user.firstName = "Zozo";
Object.assign(koo, user, { familyName: "noo" });
console.log(koo);

//Constructor
class Items {
  constructor(title, body, age, email, showEmails) {
    this.title = title;
    this.body = body;
    this.age = age;
    this.ageInDays = () => {
      return `Age in dyas: ${this.age * 365} `;
    };
    this.email = email;
    this.showEmails = () => {
      if (showEmails === true) {
        return `Email is ${this.email}`;
      } else {
        return `Email is Unvalid`;
      }
    };
  }
}

let noo1 = new Items("Ali", "Bodybuilding BRO", 33, "a@a", true);
let noo2 = new Items("zoza", "Lovely", 28, "z@z");

console.log(noo1.showEmails(), noo2.showEmails());
// for (let jo in noo1) {
//   console.log(noo1[jo]);
// }
console.log(noo1.ageInDays(), noo2.ageInDays());
console.log("#".repeat(30));

String.prototype.zFill = function (width) {
  let theResult = this;
  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }
  return theResult.toString();
};

Object.prototype.addTitle = function () {
  return `Mr. ${this.body}`;
};

class Names {
  static counter = 0;
  constructor(x, xi) {
    this.x = x;
    this.xi = xi;
    Names.counter++;
  }
  xii() {
    return `${this.x} - ${this.xi}`;
  }
  static calcNames() {
    return `${this.counter} Objects Created.`;
  }
}

let name1 = new Names("Ali", "Ahmed");
let name2 = new Names("ZOZO", "Ahmed");
let name3 = new Names("Mona", "Ahmed");
console.log(name1);
console.log(name1.xii());
console.log(Names.calcNames());

class SubNames extends Names {
  constructor(x, xi) {
    super(x, xi);
  }
}
let joo = new SubNames("joo", "voo");

Object.defineProperty(name1, "v", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: "Ohs",
});
console.log("#".repeat(20));
//-----------------------------------------
//Testing End
//Slider Start
//Get Slider imags
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

//Get no of Slides
let slidersNum = sliderImages.length;

//Set Current Slide
let currentSlide = 1;
//Get Next and Prev Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

function nextb() {
  if (nextButton.classList.contains("disabled")) {
  } else {
    currentSlide++;
    checker();
  }
}

function prevb() {
  if (prevButton.classList.contains("disabled")) {
  } else {
    currentSlide--;
    checker();
  }
}

nextButton.onclick = nextb;
prevButton.onclick = prevb;

//Slide Num Element
let slideNumberElement = document.getElementById("slide-number");

//Create the main ul element
let uList = document.getElementById("ul");

for (i = 1; i <= slidersNum; i++) {
  let listItem = document.createElement("li");
  listItem.setAttribute("data-index", i);
  listItem.innerHTML = `${i}`;
  uList.appendChild(listItem);
}

//Create UL li array
let uListLi = Array.from(uList.children);

uListLi[0].classList.add("active");
if (uListLi[0].classList.contains("active")) {
  prevButton.classList.add("disabled");
}
for (i = 0; i < uListLi.length; i++) {
  uListLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}
//Adding New Content after document load to increase performance
// document.addEventListener("DOMContentLoaded", addPagination);
//checker Func
function checker() {
  //set the slide number
  slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidersNum}`;

  //Remove Active Classes
  removeActive();
  removeActiveList();
  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  uList.children[currentSlide - 1].classList.add("active");

  //Check for current slide is 1st or 5th
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slidersNum) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

//removing Active Functions

function removeActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
}

function removeActiveList() {
  uListLi.forEach((ele) => {
    ele.classList.remove("active");
  });
}

//To DO List app
let newIcon = document.querySelector(".add-task span");
document.onclick = (e) => {
  if (e.target.classList.contains("add-icon")) {
    e.target.style.cssText =
      "animation-name: action;animation-duration: 1s;animation-timing-function: linear;";
  }
};

//Input Field
let input = document.querySelector(".todo-container input");
let inputBtn = document.querySelector(".add-icon");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let noTasksMessage = document.querySelector(".no-tasks-message");
let tasksContainer = document.querySelector(".tasks-content");

(function () {
  //IIFE Immediate Invoked Function Expression
  input.focus();
})();
//If input is empty
inputBtn.addEventListener("click", () => {
  if (input.value === "") {
    console.log("Nah man it is Empty");
    //we should add sweet Alert Here
  } else {
    //Here we Will add the CONTENT
    noTasksMessage.remove();

    //create span element
    let mainSpan = document.createElement("span");

    //Create Delete btn
    let deleteBtn = document.createElement("span");

    //Create Text to mainspan
    let text = document.createTextNode(input.value);

    //Create Text to Delete BTN
    let deleteText = document.createTextNode("Delete");

    //Add TExt to coreesponding elements
    mainSpan.appendChild(text);
    mainSpan.className = "task-box";
    deleteBtn.appendChild(deleteText);
    deleteBtn.className = "delete";

    //Add Delete btn to Span
    mainSpan.appendChild(deleteBtn);

    //Add Tasks to cintainer
    tasksContainer.appendChild(mainSpan);

    //Empty Input Field
    input.value = "";
  }
});

//Event listner for Delete Btn
document.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
});

//------------------
const books2 = "HI ALL";

const books = [
  "Don Quixote",
  "The Hobbit",
  "Alice in Wonderland",
  "Tale of Two Cities",
];
console.log(...books);
// document.taskContent.innerHTML = books;
0 ? console.log("ok") : console.log("no");

//------------Destructuring Array with rest Parameter
let [boob, moob, ...noob] = books;

//-----------Destructuring Object

const gemstone = {
  type: "quartz",
  color: "rose",
  carat: 21.29,
};

const { type, ...carat } = gemstone;

console.log(type, carat);

let reg = /Hi/gim;

let practice = "AaBbcdefG123!234%^&*";

let practiceRegEx = /[a-z]/g;

console.log(practice.match(practiceRegEx));

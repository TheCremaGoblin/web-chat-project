const data = [
    {
        "Hotel Name": "Uptown",
        "City": "Bali",
        "Continent": "Asia",
        "Country": "Indonesia",
        "Category": "active",
        "Star Rating": 3,
        "Temperature": "mild",
        "Location": "mountain",
        "PPPN": 120
      },
      {   
        "Hotel Name": "Relaxamax",
        "City": "New Orleans",
        "Continent": "North America",
        "Country": "USA",
        "Category": "lazy",
        "Star Rating": 4,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 28
      },
      {
        "Hotel Name": "WindyBeach",
        "City": "Ventry",
        "Continent": "Europe",
        "Country": "Ireland",
        "Category": "active",
        "Star Rating": 3,
        "Temperature": "mild",
        "Location": "sea",
        "PPPN": 42
      },
      {
        "Hotel Name": "Twighlight",
        "City": "Marrakech",
        "Continent": "Africa",
        "Country": "Morocco",
        "Category": "lazy",
        "Star Rating": 5,
        "Temperature": "cold",
        "Location": "mountain",
        "PPPN": 50
      },
      {
        "Hotel Name": "TooHot",
        "City": "Sydney",
        "Continent": "Australia",
        "Country": "Australia",
        "Category": "lazy",
        "Star Rating": 5,
        "Temperature": "warm",
        "Location": "sea",
        "PPPN": 67
      },
      {
        "Hotel Name": "Castaway",
        "City": "",
        "Continent": "Africa",
        "Country": "The Maldives",
        "Category": "lazy",
        "Star Rating": 3,
        "Temperature": "mild",
        "Location": "sea",
        "PPPN": 120
      },
      {
        "Hotel Name": "Eiffel Park",
        "City": "Paris",
        "Continent": "Europe",
        "Country": "France",
        "Category": "active",
        "Star Rating": 4,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 45
      },
      {
        "Hotel Name": "The Cape",
        "City": "Cape Town",
        "Continent": "Africa",
        "Country": "South Africa",
        "Category": "active",
        "Star Rating": 4,
        "Temperature": "mild",
        "Location": "sea",
        "PPPN": 78
      },
      {
        "Hotel Name": "Desert Dreams",
        "City": "Dubai",
        "Continent": "Asia",
        "Country": "U.A.E",
        "Category": "active",
        "Star Rating": 4,
        "Temperature": "warm",
        "Location": "mountain",
        "PPPN": 67
      },
      {
        "Hotel Name": "SeaViews",
        "City": "Bora Bora",
        "Continent": "Australia",
        "Country": "French Polynesia",
        "Category": "active",
        "StarRating": 3,
        "Temperature": "mild",
        "Location": "sea",
        "PPPN": 54
      },
      {
        "Hotel Name": "AppleCity",
        "City": "New York",
        "Continent": "North America",
        "Country": "USA",
        "Category": "active",
        "Star Rating": 3,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 27
      },
      {
        "Hotel Name": "IslandHopper",
        "City": "Dubrovnik",
        "Continent": "Europe",
        "Country": "Croatia",
        "Category": "active",
        "StarRating": 5,
        "Temperature": "mild",
        "Location": "sea",
        "PPPN": 78
      },
      {
        "Hotel Name": "CastleTown",
        "City": "Edinburgh",
        "Continent": "Europe",
        "Country": "Scotland",
        "Category": "lazy",
        "StarRating": 3,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 53
      },
      {
        "Hotel Name": "WineValley",
        "City": "Rome",
        "Continent": "Europe",
        "Country": "Italy",
        "Category": "lazy",
        "Star Rating": 5,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 25
      },
      {
        "Hotel Name": "WearyTraveller",
        "City": "Paro Valley",
        "Continent": "Asia",
        "Country": "Bhutan",
        "Category": "active",
        "Star Rating": 5,
        "Temperature": "mild",
        "Location": "mountain",
        "PPPN": 54
      },
      {
        "Hotel Name": "HotTimes",
        "City": "Jaipur",
        "Continent": "Asia",
        "Country": "India",
        "Category": "lazy",
        "Star Rating": 4,
        "Temperature": "warm",
        "Location": "sea",
        "PPPN": 67
      },
      {
        "Hotel Name": "ForestRetreat",
        "City": "Waikato",
        "Continent": "Australia",
        "Country": "New Zealand",
        "Category": "active",
        "Star Rating": 4,
        "Temperature": "mild",
        "Location": "mountain",
        "PPPN": 89
      },
      {
        "Hotel Name": "Casablanca",
        "City": "Havana",
        "Continent": "North America",
        "Country": "Cuba",
        "Category": "lazy",
        "Star Rating": 5,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 29
      },
      {
        "Hotel Name": "TechCity",
        "City": "Tokyo",
        "Continent": "Asia",
        "Country": "Japan",
        "Category": "active",
        "Star Rating": 3,
        "Temperature": "mild",
        "Location": "city",
        "PPPN": 71
      },
      {
        "Hotel Name": "IceHotel",
        "City": "Base Marambio",
        "Continent": "Antarctica",
        "Country": "Antartica",
        "Category": "active",
        "Star Rating": 5,
        "Temperature": "cold",
        "Location": "mountain",
        "PPPN": 270
      },
      {
        "Hotel Name": "NorthStar",
        "City": "",
        "Continent": "Arctic",
        "Country": "Greenland",
        "Category": "active",
        "Star Rating": 5,
        "Temperature": "cold",
        "Location": "mountain",
        "PPPN": 250
      }
];

const nameContainer = document.getElementById("name-container");
const nameInput = document.getElementById("name-input");
const submitButton = document.getElementById("submit-button");
const validatedName = document.getElementById("validated-name");
const hiddenElements = document.getElementById("hidden-element")

submitButton.addEventListener("click", function() {
  const name = nameInput.value;
  if(validateName(name)) {
    validatedName.innerHTML = `Hello, ${name}, it's nice to meet you!`;
    validatedName.classList.remove("hidden");
    nameContainer.remove();
    hiddenElements.classList.remove("hiddenElement")
  } else {
    alert("Please enter an appropriate user name")

  }
});

function validateName(name) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

let filteredData = [];
let filteredDataTwo = [];
let filteredDataThree = [];
let filteredDataFour = [];
let prevButtonsClicked = 0;


// Create the "Filter" button and add an event listener to it
const button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button2.setAttribute("disabled", true);
    button2.classList.add("greyed-out");
    button3.setAttribute("disabled", true);
    button3.classList.add("greyed-out");
    button4.setAttribute("disabled", true);
    button4.classList.add("greyed-out");
    button1.classList.add("green");
    filteredData = data.filter(function(item) {
        return item.Continent === "Europe";
    });
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button1.setAttribute("disabled", true);
    button1.classList.add("greyed-out");
    button3.setAttribute("disabled", true);
    button3.classList.add("greyed-out");
    button4.setAttribute("disabled", true);
    button4.classList.add("greyed-out");
    button2.classList.add("green");
    filteredData = data.filter(function(item) {
        return item.Continent === "North America";
    });
});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button2.setAttribute("disabled", true);
    button2.classList.add("greyed-out");
    button1.setAttribute("disabled", true);
    button1.classList.add("greyed-out");
    button4.setAttribute("disabled", true);
    button4.classList.add("greyed-out");
    button3.classList.add("green");
    filteredData = data.filter(function(item) {
        return item.Continent === "Asia";
    });
});

const button4 = document.getElementById("button4");
button4.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button2.setAttribute("disabled", true);
    button2.classList.add("greyed-out");
    button3.setAttribute("disabled", true);
    button3.classList.add("greyed-out");
    button1.setAttribute("disabled", true);
    button1.classList.add("greyed-out");
    button4.classList.add("green");
    filteredData = data.filter(function(item) {
        return item.Continent === "Africa";
    });
});

const button5 = document.getElementById("button5");
button5.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button6.setAttribute("disabled", true);
    button6.classList.add("greyed-out");
    button5.classList.add("green");
    filteredDataTwo = filteredData.filter(function(item) {
        return item.Category === "active";
    });
});

const button6 = document.getElementById("button6");
button6.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button5.setAttribute("disabled", true);
    button5.classList.add("greyed-out");
    button6.classList.add("green");
    filteredDataTwo = filteredData.filter(function(item) {
        return item.Category === "lazy";
    });
});

const button7 = document.getElementById("button7");
button7.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button9.setAttribute("disabled", true);
    button9.classList.add("greyed-out");
    button7.classList.add("green");
    filteredDataThree = filteredDataTwo.filter(function(item) {
        return item.Temperature === "cold" || item.Temperature === "mild";
    });
});

const button9 = document.getElementById("button9");
button9.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button7.setAttribute("disabled", true);
    button7.classList.add("greyed-out");
    button9.classList.add("green");
    filteredDataThree = filteredDataTwo.filter(function(item) {
        return item.Temperature === "warm";
    });
});

const button10 = document.getElementById("button10");
button10.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button11.setAttribute("disabled", true);
    button11.classList.add("greyed-out");
    button12.setAttribute("disabled", true);
    button12.classList.add("greyed-out");
    button10.classList.add("green");
    filteredDataFour = filteredDataThree.filter(function(item) {
        return item.PPPN <= 70;
    });
});

const button11 = document.getElementById("button11");
button11.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button10.setAttribute("disabled", true);
    button10.classList.add("greyed-out");
    button12.setAttribute("disabled", true);
    button12.classList.add("greyed-out");
    button11.classList.add("green");
    filteredDataFour = filteredDataThree.filter(function(item) {
        return item.PPPN > 71 && item.PPPN < 150;
    });
});

const button12 = document.getElementById("button12");
button12.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    prevButtonsClicked++;
    checkPrevButtons()
    button10.setAttribute("disabled", true);
    button10.classList.add("greyed-out");
    button11.setAttribute("disabled", true);
    button11.classList.add("greyed-out");
    button12.classList.add("green");
    filteredDataFour = filteredDataThree.filter(function(item) {
        return item.PPPN > 151;
    });
});

// filter all x holidays into filteredData
//second button - grab filteredData and filter all Y holidays
//third button - grab FilteredData and filter all the cold holidays


// Create the "Display" button and add an event listener to it



const button13 = document.getElementById("button13");
button13.addEventListener("click", function() {
    checkPrevButtons()
    button13.classList.add("green");
    let mergedArray =  [...filteredDataFour]  //[...new Set([...filteredData, ...filteredDataTwo, ...filteredDataThree, ...filteredDataFour])];
    if (mergedArray.length === 0){
      alert("No holidays found, please search again!")
      location.reload();
    }
    console.log(mergedArray);

    let htmlString = "";

  // Iterate through the array of objects
  for (let i = 0; i < mergedArray.length; i++) {
    // Get the current object
    const obj = mergedArray[i];

    // Add a heading for the current object
    // htmlString += "<h3>Holiday " + (i+1) + '!'+ "</h3>";
    // Add an unordered list for the object's properties
    htmlString += "<ul>";

    // Iterate through the object's properties
    for (let key in obj) {
      // Add each property and its value to the HTML string
      htmlString += "<li><strong>" + key + "</strong>: " + obj[key] + "</li>";
    }

    // Close the unordered list
    htmlString += "</ul>";
  }

  // Get a reference to the element on the page where the data should be displayed
  const container = document.getElementById("output");
  
  // Set the inner HTML of the container to the generated HTML string
  container.innerHTML = htmlString;
});

function checkPrevButtons() {
  if (prevButtonsClicked === 4) {
    button13.removeAttribute("disabled");
    button13.classList.remove("greyed-out");
  }
}

// const button10 = document.getElementById("button10");
// button10.addEventListener("click", function() {
//     // Loop through the filtered data and display it
//     filteredDataTwo.forEach(function(item) {
//         console.log(item)
//     })
// });


//instead of displaying each button click - store the value in a variable
//the final function displayData can then display variable 1, 2 and 3 together?
//by taking away the displayData call in each button, you are no longer displaying each result as you click it
//the final function needs a button, when clicked, displays each variable

// const button1 = document.getElementById("button1");
// button1.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.Continent === 'Europe');
//     // displayData(filteredData);
// });

// const button2 = document.getElementById("button2");
// button2.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.Continent === 'North America');
//     // displayData(filteredData);
// });

// const button3 = document.getElementById("button3");
// button3.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.Continent === 'Asia');
//     // displayData(filteredData);
// });

// const button4 = document.getElementById("button4");
// button4.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.Category === 'active');
//     displayData(filteredData);
// });

// const button5 = document.getElementById("button5");
// button5.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.Category === 'lazy');
//     displayData(filteredData);
// });

// const button6 = document.getElementById("button6");
// button6.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.TempRating === 'cold');
//     displayData(filteredData);
// });

// const button7 = document.getElementById("button7");
// button7.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.TempRating === 'mild');
//     displayData(filteredData);
// });

// const button8 = document.getElementById("button8");
// button8.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.TempRating === 'hot');
//     displayData(filteredData);
// });

// const button9 = document.getElementById("button9");
// button8.addEventListener("click", () => {
//     const filteredData = data.filter(item => item.TempRating === 'hot');
//     displayData(filteredData);
// });

// function displayData(data) {
//     const output = document.getElementById("output");
//     output.innerHTML = JSON.stringify(data);
// }



























// const btn = document.querySelector('#btn')
// const main = document.querySelector('.container')
// const url = 'data.json'

// btn.addEventListener('click', holidayGrab);

// function holidayGrab(){
//     fetch(url)
//     .then(res => res.json())
//     .then(data => filteredHolidays(data))
//     .catch((error) => {
//         console.error(error);
//     })
// }

// // function adder(data){
// //     const ul = document.createElement('ul')
// //     main.append(ul)
// //     data.filter((ele, ind) => {
// //         console.log(ele);
// //         const li = document.createElement('li');
// //         li.textContent = `${ind + 1}. ${ele.TempRating === "warm"}`;
// //         ul.append(li)
// //     })
// // }

// const filteredHolidays = data.filter(holiday => holiday.TempRating === 'hot');
// for (holiday of filteredHolidays) {
//     const ul = document.createElement('ul')
//     main.append(ul)
//     const li = document.createElement('li');
//     ul.append(li)
// }
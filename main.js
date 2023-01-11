const data = [
    {
        "HolidayReference": 1,
        "HotelName": "Uptown",
        "City": "Bali",
        "Continent": "Asia",
        "Country": "Indonesia",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "mountain",
        "PricePerPerNight": `£120`
      },
      {
        "HolidayReference": 2,
        "HotelName": "Relaxamax",
        "City": "New Orleans",
        "Continent": "North America",
        "Country": "USA",
        "Category": "lazy",
        "StarRating": 4,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 28
      },
      {
        "HolidayReference": 3,
        "HotelName": "WindyBeach",
        "City": "Ventry",
        "Continent": "Europe",
        "Country": "Ireland",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 42
      },
      {
        "HolidayReference": 4,
        "HotelName": "Twighlight",
        "City": "Marrakech",
        "Continent": "Africa",
        "Country": "Morocco",
        "Category": "lazy",
        "StarRating": 5,
        "TempRating": "cold",
        "Location": "mountain",
        "PricePerPerNight": 50
      },
      {
        "HolidayReference": 5,
        "HotelName": "TooHot",
        "City": "Sydney",
        "Continent": "Australia",
        "Country": "Australia",
        "Category": "lazy",
        "StarRating": 5,
        "TempRating": "hot",
        "Location": "sea",
        "PricePerPerNight": 67
      },
      {
        "HolidayReference": 6,
        "HotelName": "Castaway",
        "City": "",
        "Continent": "Africa",
        "Country": "The Maldives",
        "Category": "lazy",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 120
      }
];

// let data = [
//     { id: 1, name: "John", age: 28 },
//     { id: 2, name: "Mary", age: 33 },
//     { id: 3, name: "Mike", age: 41 },
//     { id: 4, name: "Sarah", age: 18 }
// ];

let filteredData = [];
let filteredDataTwo = [];

// Create the "Filter" button and add an event listener to it
const button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    filteredData = data.filter(function(item) {
        return item.Continent === "Europe";
    });
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    filteredData = data.filter(function(item) {
        return item.Continent === "North America";
    });
});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    filteredData = data.filter(function(item) {
        return item.Continent === "Asia";
    });
});

const button4 = document.getElementById("button4");
button4.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    filteredData = data.filter(function(item) {
        return item.Continent === "Africa";
    });
});

const button5 = document.getElementById("button5");
button5.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    filteredDataTwo = data.filter(function(item) {
        return item.Category === "active";
    });
});

const button6 = document.getElementById("button6");
button6.addEventListener("click", function() {
    // Filter the data and store it in the "filteredData" variable
    filteredDataTwo = data.filter(function(item) {
        return item.Category === "lazy";
    });
});

// Create the "Display" button and add an event listener to it
const button9 = document.getElementById("button9");
button9.addEventListener("click", function() {
    // Loop through the filtered data and display it
    let mergedArray = [...new Set([...filteredData, ...filteredDataTwo])];
    console.log(mergedArray);

    let htmlString = "";

  // Iterate through the array of objects
  for (let i = 0; i < mergedArray.length; i++) {
    // Get the current object
    const obj = mergedArray[i];

    // Add a heading for the current object
    htmlString += "<h3>Holiday " + (i+1) + '!'+ "</h3>";
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
// //         li.textContent = `${ind + 1}. ${ele.TempRating === "hot"}`;
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
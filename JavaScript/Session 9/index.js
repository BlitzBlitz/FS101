let properties = [
    {
        id: 1,
        imageUrl: './imgs/cardimg1.png',
        datePosted: new Date(),
        propertyName: 'Post One',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, minus fuga laudantium neque eos?',
        counters: {
            views: 4,
            coments: 1234,
            likes: 12,
        }
    },
    {
        id: 2,
        imageUrl: './imgs/cardimg1.png',
        datePosted: new Date(),
        propertyName: 'Post 2',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, minus fuga laudantium neque eos?',
        counters: {
            views: 4,
            coments: 1234,
            likes: 12,
        }
    },
    {
        id: 3,
        imageUrl: './imgs/cardimg1.png',
        datePosted: new Date(),
        propertyName: 'Post 3',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, minus fuga laudantium neque eos?',
        counters: {
            views: 4,
            coments: 1234,
            likes: 12,
        }
    },
    {
        id: 4,
        imageUrl: './imgs/cardimg1.png',
        datePosted: new Date(),
        propertyName: 'Post 4',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, minus fuga laudantium neque eos?',
        counters: {
            views: 4,
            coments: 1234,
            likes: 12,
        }
    },
    {
        id: 5,
        imageUrl: './imgs/cardimg1.png',
        datePosted: new Date(),
        propertyName: 'Post 5',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, minus fuga laudantium neque eos?',
        counters: {
            views: 4,
            coments: 1234,
            likes: 12,
        }
    }

]

const cardContainerElement = document.getElementById('cardContainer');  // Step a: Select the container that you want to add the data to

function displayCard () {
    cardContainerElement.innerHTML = "";            

    for (let i = 0; i < properties.length; i++) {
        let property = properties[i];
        let cardElement = document.createElement('div');    // Step b: craeting the element card div
        cardElement.classList.add('card');                 // added the class for the created div
        cardElement.innerHTML = `
            <img src="${property.imageUrl}" alt="property image">
            <span class="date-posted">${property.datePosted.getDate()}</span>
            <h3>${property.propertyName.toUpperCase()}</h3>
            <p>${property.desc}</p>
            <div class="counters">
                <div>
                    <span>${property.counters.views}</span>
                    <span>Views</span>
                </div>
                <div>
                    <span>${property.counters.likes}</span>
                    <span>Likes</span>
                </div>
                <div>
                    <span>${property.counters.coments}</span>
                    <span>Comments</span>
                </div>
            </div>
        `                                                   // used string literals to create all html elements
                                                            // Step c: Using the appendChild, Add the created elements to the container element.
        
        cardContainerElement.appendChild(cardElement);
    }           
    
}

displayCard(); 
// Form submit handler

function takeInput() {
   let propertyNameElement = document.getElementById("propertyName");
   let propertyDescElement = document.getElementById("propertyDesc");

    let propertyName = propertyNameElement.value;
    let propertyDesc = propertyDescElement.value;

    console.log(propertyName + propertyDesc); // create a property object with a unique Id, and random counters.
                                            // generate aunique Id using properties.length (hint).
                                            // Add the object to the array, and display the properties again. 
    let newProperty = {                     // CREATE step 2
        id: properties.length + 1,              
        imageUrl: './imgs/cardimg1.png',
        datePosted: new Date(),
        propertyName: propertyName,  // RHS from the user  
        desc: propertyDesc,
        counters: {
            views: 4,
            coments: 1234,
            likes: 12,
        }
    }

    properties.push(newProperty);               // CREATE step 3

    // CREATE step 4
    displayCard();
    const popUpElement = document.getElementById('pop-up');
    popUpElement.remove();
    

};


function displayPopUp() {
    // Making the pop-up by adding new html.

const bodyElement = document.getElementsByTagName('body')[0];
// const bodyElement = document.body;

let popUpElement = document.createElement('div');
popUpElement.classList.add('pop-up-bg');
popUpElement.id = "pop-up"
popUpElement.innerHTML = `
    <form onsubmit="takeInput()">
        <input id="propertyName" type="text" placeholder="Property Name">
        <textarea name="" id="propertyDesc" cols="30" rows="10" placeholder="Property Description" ></textarea>
        <button type="submit">Submit</button>
    </form>
`
bodyElement.appendChild(popUpElement);
}

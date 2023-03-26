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
        cardElement.id = property.id;                        //set id to data id

        cardElement.addEventListener('click' , onUpdate);
        
        cardElement.innerHTML = `
            <button class="delete-btn">X</button>
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



function takeInput(id) {
   let propertyNameElement = document.getElementById("propertyName");
   let propertyDescElement = document.getElementById("propertyDesc");

    let propertyName = propertyNameElement.value;
    let propertyDesc = propertyDescElement.value;

    console.log(propertyName + propertyDesc); // create a property object with a unique Id, and random counters.
                                            // generate aunique Id using properties.length (hint).
                                            // Add the object to the array, and display the properties again. 
    if (editMode == false) {
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
    }
    else {
        for (let index = 0; index < properties.length; index++) {
            const currentElement = properties[index];

            if (currentElement.id == id) {
                currentElement.propertyName = propertyName;
                currentElement.desc = propertyDesc;
                editMode = false;
                break;
            }            
        }
    }


    // CREATE step 4
    displayCard();
    const popUpElement = document.getElementById('pop-up');
    popUpElement.remove();
    

};


function displayPopUp(name, desc, id) {
    // Making the pop-up by adding new html.
    
    const bodyElement = document.getElementsByTagName('body')[0];
    // const bodyElement = document.body;

    let popUpElement = document.createElement('div');
    popUpElement.classList.add('pop-up-bg');
    popUpElement.id = "pop-up"
    popUpElement.innerHTML = `
        <form onsubmit="takeInput(${id})">
            <input id="propertyName" type="text" placeholder="Property Name" value="${name}">
            <textarea name="" id="propertyDesc" cols="30" rows="10" placeholder="Property Description" >${desc}</textarea>
            <button type="submit">Submit</button>
        </form>
    `
    bodyElement.appendChild(popUpElement);
}


// Update a card.

let editMode = false;

function onUpdate(event) {
    
    const target = event.target;
    const cardId = +target.parentElement.id;

    if (target.classList.contains("delete-btn")) {
       deleteElement(cardId);
       return;
    }
    editMode = true;

    for (let index = 0; index < properties.length; index++) {
        const currentElement = properties[index];
        if (currentElement.id == cardId) {

            console.log(currentElement);
            displayPopUp(currentElement.propertyName, currentElement.desc, cardId);
            break;
        }
        
    }

}

function deleteElement(id) {
    for (let index = 0; index < properties.length; index++) {
        const currentElement = properties[index];

        if (currentElement.id == id) {
            properties.splice(index, 1);
            break;
        }
    }

    displayCard()
    
}

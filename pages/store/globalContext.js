// Lets do all database stuff here and just share this global context with the rest of the App
// - so no database code anywhere else in our App
// - every CRUD function the App needs to do is in here, in one place
// - makes debugging etc so much easier
// - all external connections still have to go through /api routes 

import { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({ aString: 'init val', count: 0, hideHamMenu: true, meetings: [], dataLoaded: false ,basket: []})

    useEffect(() => {
        getAllMeetings()
    }, []);

    async function getAllMeetings() {
        const response = await fetch('/api/get-meetings', {
            method: 'POST',
            body: JSON.stringify({ meetups: 'all' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setGlobals((previousGlobals) => {
             const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.meetings = data.meetings;
                let i = data.meetings.length
                newGlobals.dataLoaded = true;
                newGlobals.basket = new Array(i)
                newGlobals.basket.fill(false)
                console.log(newGlobals.meetings)
                console.log(newGlobals.basket)
                return newGlobals
             })
    }

    async function editGlobalData(command) { // {cmd: someCommand, newVal: 'new text'}
        if (command.cmd == 'hideHamMenu') { // {cmd: 'hideHamMenu', newVal: false} 
            //  WRONG (globals object reference doesn't change) and react only looks at its 'value' aka the reference, so nothing re-renders:
            //    setGlobals((previousGlobals) => { let newGlobals = previousGlobals; newGlobals.hideHamMenu = command.newVal; return newGlobals })
            // Correct, we create a whole new object and this forces a re-render:
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideHamMenu = command.newVal; return newGlobals
            })
        }
        if (command.cmd == 'addMeeting') {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json(); // Should check here that it worked OK
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
                newGlobals.meetings.push(command.newVal); return newGlobals
            })
        }
    }
    function addToBasket(index){
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
            newGlobals.basket[index] = true
            console.log(newGlobals.basket)
            return newGlobals
        })
    }
    function incrementQuantity(index){
        setGlobals(({
            ...globals,
            meetings: [
              ...globals.meetings.slice(0, index),
              {
                ...globals.meetings[index],
                quantity: Number(globals.meetings[index].quantity ) + 1 
              },
              ...globals.meetings.slice(index+1)
            ]
          }))
    }
    function checkout(){
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
            newGlobals.basket.fill(false)
            return newGlobals
        })
    }
    
    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals,
        addToBasket : addToBasket,
        checkout:checkout,
        incrementQuantity:incrementQuantity
    }

    return <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
}


export default GlobalContext

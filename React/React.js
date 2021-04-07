//javascipt don't have to go back to the server

import { useEffect, useState } from "react"

//mvc had lots of views

//breaks down components - component driven design

//components return null for visibility

//children pass children as a prop it will take whats in app

//usiing state

onclick={()=> console.log}

//using this is important as it takes an fucntion or a handler and odnt intiatate the method

//usig state 

//decide what to render using 

//told using props

export const Couunter = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <p> you clicked {count} times</p>
            <button onclick={() => setCount(count +1)}>clcik</button>
        </div>
    )
}


//get rid of inline return

//instead of props use state sometime when you don't know to 

setisExplanded(!isexpanded) //flipping it opem to close

//helpful libary called classnames

// this is the same as this but not hardcoded:

export const App = ()=> (

    <div>

    <ExplanableWidget itemCount={15} title='tasks' filter="today"/>
    <ExplanableWidget itemCount={15} title='tasks' filter="today"/>

    </div>
)

const widgets = [{id: 'tast',  itemCount = 15, title: 'tasks', filter: 'tday'},
                {id: 'asda' , itemCount = 15, title: 'tasks', filter: 'tday'}]

export const App = ()=> (

    <div>

    {widgets.map((widget) => <ExpandadableWidget {...widget}/>)}

    //or

    {widgets.map(({itemCount, title, filter, id}) => (
        <ExpandadableWidget 
        key={id} i
        temCount={title} 
        filter={filter} 
        itemCount={itemCount} 
        />))}


    </div>
)

//hooks
import { useEffect } from ' react'
//useefftect asyc stuff need tto affect the state 
//for async side affects
export const useWidgets = () => {
    const [loadedWidgets, setWidgets] = useState<null |  {id: string}[]>(null)
    //set the state of widget don't have knowledge of it yet
    //run setWidgets method at the end
    useEffect(() => {
        fetch('https//www.').then((res) =>
            res.json().then(({widgets}) => {
                setWidgets(widgets)
            })
        )
    })
    //this uses state to then reutrn 
    return loadedWidgets
}   
//use this method and its a custom hook
export const App = () => {
    useWidgets()
    return <div>...</div>
}

//hooks are starting with use
//you have to wrap them in jest for testing 

//use memo means it doesn't calulate object everythime


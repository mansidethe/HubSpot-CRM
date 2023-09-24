import React, { useState } from "react";
import "./App.css"
import {phonebook} from "./../../data/phonebook.json"

function App(){
    const[contacts, setContacts] = useState(phonebook);
    return(
        <h1 className="text-center">Contact App</h1>
    )
}

export default App
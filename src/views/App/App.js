import React, { useState, useEffect } from "react";
import "./App.css"
import phonebook from "./../../data/phonebook.json"
import ContactCard from "./../../components/ContactCard/ContactCard"

function App() {
    const [contacts, setContacts] = useState(phonebook);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filteredContacts = phonebook.filter((contact) => {
            const name = contact.name.toLowerCase();
            const mobile = contact.mobile.toString();

            const query = searchTerm.toLowerCase();

            return (name.includes(query) || mobile.includes(query))
        })

        setContacts(filteredContacts);

    }, [searchTerm])

    return (
        <div>
            
            <h1 className="text-center">Contact App</h1>
            <div className="search-bar-container">
<div className="search-bar">
            <input type="text"
                placeholder="Search"
                className="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            </div>

            <div>
                {contacts.map((contact, index) => {
                    const { name, mobile } = contact;

                    return <ContactCard key={index} name={name} mobile={mobile} />
                })}
            </div>
        </div>
    )
}

export default App
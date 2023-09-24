import React from "react";
import "./ContactCard.css"
// import  phonebook  from "../../data/phonebook.json";


function ContactCard({name,mobile})
{
    return(
        <div className="container">
        <div className="contact-card">

<span className="name">{name}</span>
<span className="mobile">{mobile}</span>

        </div>
        </div>
    )
}

export default ContactCard
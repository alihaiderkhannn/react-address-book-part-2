import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../App";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
    
    const { contacts } = useContext(ContactContext);
    const [contact, setContact] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log(contacts)

        if (contacts && id) {

            const foundedcontact = contacts.find((contact) => contact.id === Number(id))

            if (foundedcontact) {
            setContact(foundedcontact)

        }

    }
    

},  [contacts, id]);

if (!contact) return <p>Loading...</p>

return (
    <div className="contactdetail-container">
        <h3>Name: {contact.firstName} {contact.lastName}</h3>
        <p>Street: {contact.street}</p>
        <p>City: {contact.city}</p>
    </div>
)

}
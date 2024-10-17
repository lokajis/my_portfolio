import { useState } from "react";
import "./styles.scss";


const ReadMessages = () => {
    const [messages, setMessages] = useState([])
    fetch('https://server-personal-portfolio-2.onrender.com/get_messages')
        .then(response => response.json())
        .then(data => { setMessages(data) });

    return (
        <ul className="list" >
            {messages.map((m) => (
                <li className="messages">
                    {m.date_time}
                    <br />
                    {m.description}
                    <br />
                    {m.email}
                    <br />
                    {m.name}</li>
            ))}
        </ul>
    )
}

export default ReadMessages;
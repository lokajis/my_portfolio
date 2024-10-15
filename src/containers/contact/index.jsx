import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
    const [description, setDescription] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5000/send_message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                setFormData({
                    name: '',
                    email: '',
                    description: `${data.message} Thank you for your email <3`
                }) // Success message from the backend
                setDescription(true);
            })
            .catch(error => {
                console.error("Error sending message:", error);
            });
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact Me"
                icon={<FaEnvelopeOpenText size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <form className="contact__content__form" onSubmit={handleSubmit}>
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type={"text"}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="name" className="nameLabel">
                                    Name
                                </label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type={"email"}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="email" className="emailLabel">
                                    Email
                                </label>
                            </div>
                            <div>
                                <textarea
                                    required
                                    name="description"
                                    className="inputDescription"
                                    rows="5"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="description" className="descriptionLabel">
                                    {description === true ? '' : "Description"}                                </label>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;

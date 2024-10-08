import React from "react";
import { BsFillInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiPython, DiJavascript } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';


const JobSummary = '“I’m a software developer with a focus on web development and a passion for problem-solving, particularly through Python and JavaScript. I enjoy building intuitive and efficient web applications while exploring the potential of data analysis using Python. My combined interest in development and data-driven solutions enables me to approach challenges with a versatile and analytical mindset, always aiming to create impactful and scalable results."';
const personalDetails = [

    {
        label: "Email :",
        value: "alexandros.economides.ch@gmail.com",
    },
    {
        label: "Name :",
        value: "Alexandros Economides",
    },
    {
        label: "Address :",
        value: "Zurich",
    },
    {
        label: "Age :",
        value: "25",
    },


    // {
    //     label: "Contact No",
    //     value: "+11 3456789056",
    // },
];

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="AboutMe"
                icon={<BsFillInfoCircleFill size={40} />}
            />
            <div className="about__content">

                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3>Frond and Back End Developer</h3>
                        <p>{JobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiJavascript size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiPython size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};
export default About; 
import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsWalletFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpeg";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image1.jpg";
import ImageFive from "../../images/image1.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
    {
        id: 2,
        name: "Taskify",
        image: ImageOne,
        link: "https://github.com/lokajis/Taskify",
    },
    {
        id: 3,
        name: "Nutrilog",
        link: "https://github.com/lokajis/nutrilog",
        image: ImageTwo,
    },
    {
        id: 2,
        name: "Client's Restaurant",
        image: ImageThree,
        link: "https://tostekkitoumarinou.com/",
    },


];

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);


    function handleHover(index) {
        setHoveredValue(index);
    }


    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsWalletFill size={40} />}
            />
            <div className="portfolio__content">

                <div className="portfolio__content__cards">
                    {portfolioData.map((item, index) => (
                        <div

                            className="portfolio__content__cards__item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__img-wrapper" >
                                <a>
                                    <img alt="dummy data" src={item.image} style={{ borderRadius: '15px' }} />
                                </a>
                            </div>
                            <div className="overlay" >
                                {index === hoveredValue && (
                                    <div>
                                        <p className='lists'>{item.name}</p>
                                        <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                                            <button>Visit</button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};
export default Portfolio;
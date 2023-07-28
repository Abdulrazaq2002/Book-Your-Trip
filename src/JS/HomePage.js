import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import Json from "../Data/Deals.json";
import Flight from "./Flight";
import Bus from "./Bus";
import Hotel from "./Hotel";
import Train from "./Train";
import WhyUs from "./WhyUs";
import Contact from "./Contact";

const HomePage = ({ activeSection }) => {
  const [additionalDeals, setAdditionalDeals] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isLoadingFlight, setIsLoadingFlight] = useState(false);
  const [isLoadingBus, setIsLoadingBus] = useState(false);
  const [isLoadingHotel, setIsLoadingHotel] = useState(false);
  const [isLoadingTrain, setIsLoadingTrain] = useState(false);

  useEffect(() => {
    setAdditionalDeals(Json);
  }, []);

  useEffect(() => {
    handleSectionChange(activeSection);
  }, [activeSection]);

  const handleSectionChange = (section) => {
    setIsLoadingFlight(true);
    setIsLoadingBus(true);
    setIsLoadingHotel(true);
    setIsLoadingTrain(true);

    setTimeout(() => {
      if (section === "flight") {
        setIsLoadingFlight(false);
      } else if (section === "bus") {
        setIsLoadingBus(false);
      } else if (section === "hotel") {
        setIsLoadingHotel(false);
      } else if (section === "train") {
        setIsLoadingTrain(false);
      }
    }, 2000);
  };

  const handleDealCardClick = (dealId) => {
    console.log("Clicked on deal card with ID:", dealId);
  };

  const renderAdditionalDealCards = () => {
    return additionalDeals.map((deal) => (
      <div
        className='deal-card'
        key={deal.id}
        onClick={() => handleDealCardClick(deal.id)}>
        <img src={deal.image} alt={deal.title} />
        <h4>{deal.title}</h4>
        <p>{deal.description}</p>
      </div>
    ));
  };

  return (
    <>
      <div className='container'>
        {activeSection === "flight" && (
          <>
            {isLoadingFlight ? (
              <div className='loading-animation'>
                <div className='spinner'></div>
                <span>Loading Flight...</span>
              </div>
            ) : (
              <Flight />
            )}
          </>
        )}
        {activeSection === "bus" && (
          <>
            {isLoadingBus ? (
              <div className='loading-animation'>
                <div className='spinner'></div>
                <span>Loading Bus...</span>
              </div>
            ) : (
              <Bus />
            )}
          </>
        )}
        {activeSection === "hotel" && (
          <>
            {isLoadingHotel ? (
              <div className='loading-animation'>
                <div className='spinner'></div>
                <span>Loading Hotel...</span>
              </div>
            ) : (
              <Hotel />
            )}
          </>
        )}
        {activeSection === "train" && (
          <>
            {isLoadingTrain ? (
              <div className='loading-animation'>
                <div className='spinner'></div>
                <span>Loading Train...</span>
              </div>
            ) : (
              <Train />
            )}
          </>
        )}
        <hr />
        <section className='deals'>
          <h3>Hot Places To Visit</h3>
          <div className='deal-cards'>
            <div className='horizontal-scroll'>
              {renderAdditionalDealCards()}
            </div>
          </div>
        </section>
      </div>
      <hr />
      <div className='Whyus'>
        <WhyUs />
      </div>
      <hr />
      <Contact />
      <hr />
    </>
  );
};

export default HomePage;

import React from "react";
import styles from "../page.module.css";

const OurCrew = () => {
  const description =
    "Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.";
  const crewMembers = [
    "Captain Sarah Vega",
    "Dr. Leo Redding",
    "Chief Engineer Hana Lee",
    "Mission Specialist Alex Santos",
    "Crew Member Maya Patel",
  ];
  const crewExperience = [
    "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  ];
  const crewImages = [
    "/crew/image-anousheh-ansari.png",
    "/crew/image-douglas-hurley.png",
    "/crew/image-mark-shuttleworth.png",
    "/crew/image-victor-glover.png",
    "/crew/background-crew-desktop.png",
  ];
  return (
    <>
      <div>
        <p>{description}</p>
        <div className={styles.crewContainer}>
          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={crewImages[0]} alt="members" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[0]}</h3>
              <p className={styles.paragraph}>{crewExperience[0]}</p>
            </div>
          </div>

          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={crewImages[1]} alt="members" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[1]}</h3>
              <p className={styles.paragraph}>{crewExperience[1]}</p>
            </div>
          </div>

          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={crewImages[2]} alt="members" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[2]}</h3>
              <p className={styles.paragraph}>{crewExperience[2]}</p>
            </div>
          </div>

          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={crewImages[3]} alt="members" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[3]}</h3>
              <p className={styles.paragraph}>{crewExperience[3]}</p>
            </div>
          </div>

          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={crewImages[4]} alt="members" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[4]}</h3>
              <p className={styles.paragraph}>{crewExperience[4]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCrew;
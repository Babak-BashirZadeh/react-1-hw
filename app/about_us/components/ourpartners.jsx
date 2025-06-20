import styles from "../page.module.css";
const OurPartners = () => {
  const description =
    "We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.";

  const picturesPartners = [
    "/business_partners/alphabet-logo.png",
    "/business_partners/amazon_logo.png",
    "/business_partners/CBC_logo_White.png",
    "/business_partners/Microsoft-Logo-White.png",
    "/business_partners/nyu-logo.png",
    "/business_partners/QueensLogo_White.png",
    "/business_partners/samsung-logo.png",
    "/business_partners/sodexo-logo.png",
  ];

  return (
    <>
      <div className={styles.partnersContainer}>
        <p className={styles.description}>{description}</p>
        <div className={styles.partners}>
          {picturesPartners.map((partner, index) => {
            return (
              <div key={index} className={styles.partnersCard}>
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className={styles.partnersImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurPartners;
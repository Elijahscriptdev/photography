import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.porfolio_container}>
      <div className={styles.first_grid}>
        <div className={styles.portfolio_Heading_container}>
          <h2>With my camera, I capture daily life</h2>
        </div>
        <div className={styles.portfolio_body_container}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursu.
          </p>
        </div>
      </div>

      <div className={styles.second_grid}>
        <div className={styles.portfolio_second_one}>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608803090/clem-onojeghuo-eOe81Ux2DUw-unsplash_hgax6f.jpg'
            alt='image'
          />
        </div>
        <div className={styles.portfolio_second_two}>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608803086/dmitry-dreyer-kIkFptIak8I-unsplash_n7t33w.jpg'
            alt='image'
          />
        </div>
        <div className={styles.portfolio_second_three}>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608803058/gemma-that-s-her-business-7RWjlGWQ7S8-unsplash_mwy0ll.jpg'
            alt='image'
          />
        </div>
        <div className={styles.portfolio_second_four}>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608803053/farhan-shaikh-uk2iuNP-BzM-unsplash_iqszde.jpg'
            alt='image'
          />
        </div>
        <div className={styles.portfolio_second_five}>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608803052/laura-chouette-5qRgJ8ISEpA-unsplash_fmrf9c.jpg'
            alt='image'
          />
        </div>
        <div className={styles.portfolio_second_six}>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608803080/ishan-seefromthesky-EOAnV_C1a4w-unsplash_ffb9gm.jpg'
            alt='image'
          />
        </div>
      </div>
      <div className={styles.portfolio_btn}>
        <button type='submit'>View more Portfolio</button>
      </div>
    </div>
  );
};

export default Portfolio;

// import Link from "next/link";
import styles from "./Hero.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Hero = () => {
  return (
    <div className={styles.hero_image}>
      <div className={styles.container}>
        <div>
            <h3>welcome to snapshots</h3>
          <h1 className={styles.hero_title}>We can tell your 
          <br />story through <br /> images...</h1>
        </div>

        <div className={styles.social_icons}>
          <a
            className='social-icon-link facebook'
            href='https://web.facebook.com/tvwithbenefits?_rdc=1&_rdr'
            target='_blank'
            aria-label='Facebook'
          >
            <FacebookIcon />
          </a>
          <a
            className='social-icon-link facebook'
            href='https://web.facebook.com/tvwithbenefits?_rdc=1&_rdr'
            target='_blank'
            aria-label='Facebook'
          >
            <GitHubIcon />
          </a>
          <a
            className='social-icon-link facebook'
            href='https://web.facebook.com/tvwithbenefits?_rdc=1&_rdr'
            target='_blank'
            aria-label='Facebook'
          >
            <LinkedInIcon />
          </a>
          <a
            className='social-icon-link facebook'
            href='https://web.facebook.com/tvwithbenefits?_rdc=1&_rdr'
            target='_blank'
            aria-label='Facebook'
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

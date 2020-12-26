import styles from "./Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className={styles.footer_overall} id="links">
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_head}>
            <h6>About</h6>
            <p className={styles.footer}>
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>

          <div className={styles.footer_links}>
            <div className={styles.footer_link}>
              <h6>Built With</h6>
              <ul className={styles.footer}>
                <li>
                  <a href='http://scanfcode.com/category/c-language/'>
                    Next.js
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/category/front-end-development/'>
                    React.js
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/category/back-end-development/'>
                    Html
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/category/java-programming-language/'>
                    CSS
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/category/android/'>
                    Responsive Design
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/category/templates/'>
                    Javascript
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.footer_link}>
              <h6>Quick Links</h6>
              <ul className={styles.footer}>
                <li>
                  <a href='http://scanfcode.com/about/'>About Us</a>
                </li>
                <li>
                  <a href='http://scanfcode.com/contact/'>Contact Us</a>
                </li>
                <li>
                  <a href='http://scanfcode.com/contribute-at-scanfcode/'>
                    Contribute
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/privacy-policy/'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='http://scanfcode.com/sitemap/'>Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footer_container2}>
          <div className={styles.footer}>
            <p className={styles.footer}>
              Copyright &copy; 2020 All Rights Reserved by
              <a href='#'> Elijah-dev</a>.
            </p>
          </div>

          <div className={styles.footer_social}>
            <ul className={styles.footer}>
              <li>
                <a className={styles.footer} href='#'>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a className={styles.footer} href='#'>
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a className={styles.footer} href='#'>
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a className={styles.footer} href='#'>
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

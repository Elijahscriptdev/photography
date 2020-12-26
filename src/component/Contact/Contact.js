import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contact_container}>
        <h3 className={styles.contact_title}>
          Want to Know More?? Drop Us a Mail
        </h3>
        <form>
          <div className={styles.container_input}>
            <input className='col2 first' type='text' placeholder='FirstName' />
            <input className='col2 last' type='text' placeholder='LastName' />
          </div>
          <div className={styles.container_input}>
            <input className='col2 first' type='Email' placeholder='Email' />
            <input
              className='col2 last'
              type='text'
              placeholder='Contact Number'
            />
          </div>
          <div className={styles.container_textarea}>
            <textarea name='textarea' id='' cols='30' rows='7'>
              Your message here...
            </textarea>
          </div>
          <div className={styles.contact_btn}>
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

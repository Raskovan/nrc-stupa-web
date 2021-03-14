import React from 'react'
import classes from '../styles/Intro.module.css'
import classesSub from '../styles/Newsletter.module.css'

function NewsletterSubscribe() {
  return (
    <div className={classes.container} style={{ marginBottom: '1rem' }}>
      <div className={classesSub.formContainer}>
        <p className={classesSub.subText}>
          Subscribe to our newsletter to receive updates on our progress
        </p>
        <div className={classesSub.subscribeForm}>
          <form
            className="js-cm-form"
            id="subForm"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="30FEA77E7D0A9B8D7616376B90063231E874B691C1B93C9C61386F5EAFD3CB7A8560147D9A0356D84A6C2B6BC8013FCCFB4930947F70F4779591D47F44C8E5BD"
          >
            <input
              aria-label="Email"
              className="js-cm-email-input qa-input-email"
              id="fieldEmail"
              maxLength="200"
              name="cm-yhhjjdd-yhhjjdd"
              required=""
              placeholder="Your email"
              type="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSubscribe

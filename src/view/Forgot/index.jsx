import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from './styles/styles.module.css'
import SP from './styles/spinner.module.css'


import Logo from '../Assets/logo.png';
import Mail from '../Assets/mail.png';

const Forgot = ({ email, error = { server: null, email: null }, loading, onForgot, setEmail }) => {
  const [emailF, setEmailF] = useState(false)
  const onConfirm = () => {
    console.log('Well Done', email)
    onForgot()
  }

  const onChange = (e) => {
    const { target: { value, name } } = e;
    if (name === 'email') setEmail(value);
  }
console.log(error)
  return (
    <main className={SEO.background}>
      <HeaderRemember className="p-5" error={error} />
      <div className={SEO.loginContainer}>
        <header className={SEO.head}>
          <span className={SEO.logo}>
            <img src={Logo} alt="logo-image" />
          </span>
          <h2 className={SEO.textPulse}>Sign in to continue.</h2>
        </header>
        <section className={SEO.loginTemplate}>
          <form onSubmit={e => e.preventDefault()}>
            <section className={SEO.emailDiv}>
              <label htmlFor="email-label">Email:</label><br />
              <div className={SEO.greyBorder}>
                <img src={Mail} alt="mail symbol" />
                <input name="email" className={emailF ? `${SEO.focus}` : ``} type='email'
                  onBlur={({ target }) => target.value === '' ? setEmailF(false) : null}
                  onFocus={() => setEmailF(true)}
                  onChange={onChange}
                  required
                />
              </div>
              <h3>We'll never share your emal with anyone else</h3>
            </section>
          </form>
          <button type="submit" className={`${SEO.btnSubmit} ${loading ? SEO.btnLoad : null}`} onClick={() => onConfirm()}>
            {loading ? <Spinner /> : 'Send me a new email'}
          </button>
        </section>
      </div>
    </main>
  )
}

const HeaderRemember = ({ error }) => {
  /** Hook State */
  const [errorEfect, setErrorEfect] = useState('d-none')
  useEffect(() => {
    if (error !== null && error !== undefined && error !== false && error.length !== 0)
      setErrorEfect('d-flex');
  }, [error, errorEfect]);
  return (
    <small>
      {error}
    </small>
  )
}

const Spinner = () => (
  <Fragment>
    <div className={SP.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </Fragment>
);

export default Forgot;
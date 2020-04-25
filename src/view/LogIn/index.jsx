import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import SEO from './styles/styles.module.css'
import SP from './styles/spinner.module.css'
import Logo from '../Assets/logo.png';
import Mail from '../Assets/mail.png';
import Password from '../Assets/password.png';
import Show from '../Assets/show.png';

/** Hook Component */
const LogIn = ({ error = { server: null, email: null, password: null }, loading, setEmail, setPassword, onLogIn }) => {
  /** Hook States */
  const [show, setShow] = useState(false);
  const [emailF, setEmailF] = useState(false)
  const [passwordF, setPasswordF] = useState(false)
  const [rememberCheck, setRememberCheck] = useState(false)

  const onChange = (e) => {
    const { target: { value, name, checked } } = e;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value)
    else if (name === "rmb") setRememberCheck(checked)
  }

  return (
    <main className={SEO.background}>
      <HeaderLogin className="p-5" error={error.server} />
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
                <input
                  type="email"
                  name="email"
                  id="email-label"
                  placeholder="Email address"
                  error={error.email}
                  className={emailF ? `${SEO.focus}` : ``}
                  onBlur={({ target }) => target.value === '' ? setEmailF(false) : null}
                  onFocus={() => setEmailF(true)}
                  onChange={onChange}
                />
              </div>
              <h3>We'll never share your emal with anyone else</h3>
            </section>
            <section className="passwordDiv">
              <label>Password:</label><br />
              <div className={SEO.greyBorder}>
                <img src={Password} alt="password symbol" />
                <input
                  className={passwordF ? `${SEO.focus}` : ``}
                  type={show ? 'text' : "password"}
                  name="password"
                  id="password-label"
                  placeholder="Choose a Password"
                  error={error.password}
                  onFocus={() => setPasswordF(true)}
                  autoComplete={rememberCheck ? 'on' : 'new-password'}
                  onChange={onChange}
                />
                <button onClick={() => setShow(!show)}>
                  <img src={Show} alt="show-password symbol" />
                </button>
              </div>
              <input type="checkbox" name="rmb" id="rmb" className={SEO.check} onChange={onChange} />
              <label htmlFor="rmb" className={SEO.checkLabel}>Remember password?</label>
            </section>
            <section className={SEO.submit}>
              <button type="submit" onClick={() => onLogIn()}>
                {loading ? <Spinner /> : 'SIGN IN'}
              </button>
            </section>
          </form>

          <section className={SEO.accountHelper}>
            <Link to='/inscribete'>Create Account</Link>
            <Link to='/recuperar'>Forgot Password?</Link>
          </section>
        </section>
      </div>
    </main>
  )
}

/** Hook  */
const HeaderLogin = ({ error }) => {

  return (
    <small>
      {error !== undefined && error !== false && error.length !== 0 && error}
    </small>
  );
}

const Spinner = () => (
  <Fragment>
    <div className={SP.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </Fragment>
);

export default LogIn;
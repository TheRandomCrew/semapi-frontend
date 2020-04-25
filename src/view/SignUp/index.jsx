import React, { Fragment, useState, useEffect } from 'react';

import Logo from '../Assets/logo.png';
import Mail from '../Assets/mail.png';
import Password from '../Assets/password.png';
import Show from '../Assets/show.png';

import Img24_7 from '../Assets/features/24_7.png';
import Corner from '../Assets/features/corner.png';
import Location from '../Assets/features/location.png';
import Results from '../Assets/features/results.png';
import Speed from '../Assets/features/speed.png';

import SEO from './styles/styles.module.css';
import SP from './styles/spinner.module.css';

const SignUp = ({ error, onLogIn, loading, layer, setEmail, setPassword, setPasswordConfirm, setLayer, data }) => {
    const [show, setShow] = useState(false);
    const [emailF, setEmailF] = useState(false)
    const [passwordF, setPasswordF] = useState(false)
    const [cPasswordF, setCPasswordF] = useState(false)

    const onChange = (e) => {
        const { target: { value, name } } = e;
        if (name === 'email') setEmail(value)
        else if (name === 'password') setPassword(value)
        else if (name === 'cPassword') setPasswordConfirm(value)
    }

    return (
        <main className={SEO.background}>
            <HeaderSignup error={error} layer={layer} />
            <main className={SEO.mainContainer}>
                <header className={SEO.head}>
                    <span className={SEO.logo}>
                        <img src={Logo} alt="logo-image" />
                    </span>
                    <h2>Register and get 1,000 FREE searches per month</h2>
                </header>

                <section className={SEO.midContainer}>
                    <section className={SEO.regTemplate}>
                        <form onSubmit={e => e.preventDefault()} className={SEO.regForm}>
                            <section className={SEO.emailDiv}>
                                <div className={SEO.wrapper}>
                                    <img src={Mail} alt="mail symbol" className={SEO.symbols} />
                                    <input name="email" id="email" className={emailF ? `${SEO.focus}` : ``} type='email'
                                        onBlur={({ target }) => target.value === '' ? setEmailF(false) : null}
                                        onFocus={() => setEmailF(true)}
                                        onChange={onChange}
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>
                            </section>

                            <section className={`${SEO.passwordDiv} ${SEO.firstInput}`}>
                                <div className={SEO.wrapper}>
                                    <img
                                        src={Password}
                                        alt="password symbol"
                                        className={SEO.symbols}
                                    />
                                    <input name="password" className={passwordF ? `${SEO.focus}` : ``}
                                        type={show ? 'text' : "password"}
                                        onBlur={({ target }) => target.value === '' ? setPasswordF(false) : null}
                                        onFocus={() => setPasswordF(true)}
                                        onChange={onChange}
                                        id="password"
                                        placeholder="Enter Your Password"
                                        required
                                    />

                                    <button onClick={() => setShow(!show)}>
                                        <img
                                            src={Show}
                                            alt="show-password symbol"
                                            className={SEO.eyeSymbol}
                                        />
                                    </button>

                                </div>
                            </section>

                            <section className={`${SEO.passwordDiv} ${SEO.confirmInput}`}>
                                <div className={SEO.wrapper}>
                                    <img
                                        src={Password}
                                        alt="password symbol"
                                        className={SEO.symbols}
                                    />
                                    <input name="cPassword" className={cPasswordF ? `${SEO.focus}` : ``}
                                        type={show ? 'text' : "password"}
                                        onBlur={({ target }) => target.value === '' ? setCPasswordF(false) : null}
                                        onFocus={() => setCPasswordF(true)}
                                        onChange={onChange}
                                        placeholder="Confirm Your Password"
                                        id="password-confirm"
                                        required
                                    />
                                    <button onClick={() => setShow(!show)}>
                                        <img
                                            src={Show}
                                            alt="show-password symbol"
                                            className={SEO.eyeSymbol}
                                        />
                                    </button>
                                </div>
                            </section>

                            <section className={SEO.regTemplateEnd}>
                                <p>
                                    I understand that SeoSemApi may use my data as described in the
                                    <span>Privacy Policy</span> and
                                    <span>Terms and Conditions</span>
                                </p>
                                <button type="submit" className={`${SEO.btnSubmit} ${loading ? SEO.btnLoad : null}`} onClick={() => onLogIn()}>
                                    {loading ? <Spinner /> : 'START MY FREE TRIAL'}
                                </button>
                                <p>
                                    By creating account you agree to our
                                    <span>Terms and Conditions</span> and
                                    <span>Privacy Policy</span>
                                </p>

                                {/* <div className={SEO.linkTo}>
                                    Do you have an account ? <Link to="./entra">Log In</Link>
                                </div> */}
                            </section>
                        </form>
                    </section>

                    <section className={SEO.moreInfo}>
                        <p style={{ color: 'rgb(83, 86, 90)', fontSize: '1.2em' }}>
                            Lorem ipsum dolor sit amet, consuctetur adipiscing elit, se do
                            eiusmod tempor incididunt ut labore et dolore et dolore magna aliqua
                        </p>
                        <section className={SEO.asideInfo}>
                            <img src={Img24_7} alt="time-interval" className={SEO.infoPics} />
                            <div className={SEO.asideInfoWrapper}>
                                <p>
                                    <b>Availability</b> <br />
                                    SEO SEM API has a robust infrastructure to deliver data 24/7
                                    without interruptions
                                </p>
                            </div>
                            <img
                                src={Corner}
                                alt="side-design"
                                className={SEO.cornerPics}
                            />
                        </section>
                        <section className={SEO.asideInfo}>
                            <img
                                src={Results}
                                alt="real-results"
                                className={SEO.infoPics}
                            />
                            <div className={SEO.asideInfoWrapper}>
                                <p>
                                    <b>Real Results</b><br />
                                    We use our own technology that provides the same results thet a
                                    human being would see.
              </p>
                            </div>
                            <img
                                src={Corner}
                                alt="side-design"
                                className={SEO.cornerPics}
                            />
                        </section>
                        <section className={SEO.asideInfo}>
                            <img src={Speed} alt="high-speed" className={SEO.infoPics} />
                            <div className={SEO.asideInfoWrapper}>
                                <p>
                                    <b>High Speed</b><br />
                                    We perform periodic performance tests to maintain the best speed
                                    in the industry.
              </p>
                            </div>
                            <img
                                src={Corner}
                                alt="side-design"
                                className={SEO.cornerPics}
                            />
                        </section>
                        <section className={SEO.asideInfo}>
                            <img src={Location} alt="high-speed" className={SEO.infoPics} />
                            <div className={SEO.asideInfoWrapper}>
                                <p>
                                    <b>Accurate Locations</b><br />
                                    Geolocated residentials IPs to provide maximum accuracy
              </p>
                            </div>
                            <img
                                src={Corner}
                                alt="side-design"
                                className={SEO.cornerPics}
                            />
                        </section>
                    </section>
                </section>
            </main>
        </main>
    )
}

const HeaderSignup = ({ error, layer }) => {
    /** Hook State */
    const [errorEfect, setErrorEfect] = useState('d-none')

    useEffect(() => {
        if (error !== undefined && error !== false && error.length !== 0)
            setErrorEfect('d-flex');
    }, [error, errorEfect]);
    return (
        <small>
            {error !== undefined && error !== false && error.length !== 0 && error}
        </small>
    )
}

const Spinner = () => (
    <Fragment>
        <div className={SP.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Fragment>
);

export default SignUp;
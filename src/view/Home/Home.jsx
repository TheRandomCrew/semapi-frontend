import React, { Fragment } from 'react';

import { history } from '../../router/router'

import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple, irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import example from '../../data/util/example';
import { Tabs, Tab, Box } from 'grommet';
/** Import styles */
import Icon from '../Assets/icon.png';
import Logo from '../Assets/logo.png';
import SEO from './styles/home.module.css'
import NAV from './styles/nav.module.css'

import ExampleWeb from '../Assets/home/exampleWeb.png';

import Img24_7 from '../Assets/features/24_7.png';
import Corner from '../Assets/features/corner.png';
import LocationImg from '../Assets/features/location.png';
import Results from '../Assets/features/results.png';
import Speed from '../Assets/features/speed.png';
import Switch from '../Assets/home/switch.png';

import Location from '../TypeAhead/components/Location';
const Home = ({ data, loading, query, location, device, setQuery, setLocation, setDevice, setStart }) => {

  console.log(loading, query, location, device)
  return (
    <Fragment>
      <Nav />
      <main className={SEO.mainContainer}>
        <CTA />
        <TryIt
          loading={loading}
          location={location}
          setQuery={setQuery}
          setLocation={setLocation}
          setDevice={setDevice}
          startFetch={setStart}
        />
        <GetData data={data} />
        <Integration />
        <Features />
        <Free />
        <Prices />
        <FAQ />
        <Info />
      </main>
      <Footer />
    </Fragment>
  );
}

const Nav = () => (
  <nav className={SEO.nav}>
    <ul className={NAV.navbar}>
      <li><a href='/'><img src={Logo} /></a></li>
      <li><a href='#prices'><span>Pricing</span></a></li>
      <li><a href='#features'><span>Features</span></a></li>
      <li><a href='#'><span>Documentation</span></a></li>
      <li><a href='#faq'><span>FAQ</span></a></li>
    </ul>
    <ul className={NAV.navbar}>
      <li><Link to="/entra">Login</Link></li>
      <li><Link to="/inscribete"><button className={`${SEO.pillButton} ${SEO.ripple} userButton`}>Free Signup</button></Link></li>
    </ul>
  </nav>
);

const CTA = () => (
  <section className={SEO.cta}>
    <h1>
      Easily Scrape Google Search API
      </h1>
    <p>
      Scraper API handles proxies, browsers and CAPTCHAS so you can get the
      HTML from any web page with a simple API call!!
      </p>
    <ul className={SEO.ctaFeatures}>
      <li>99.99% Availability</li>
      <li>Any Worldwide Location</li>
      <li>Tech Support</li>
      <li>High Speed</li>
      <li>No Proxies or Captchas</li>
      <li>Accurate SEO-SEM results</li>
    </ul>
    <form className={SEO.getApi}>
      <input placeholder="Your email address" type="email" name="email" />
      <button className={`${SEO.pillButton} ${SEO.ripple}`} type="submit"><span>Get API key for FREE!</span></button>
    </form>
    <h3>
      Start with 1000 FREE-searchs per month. No credit card required!
      </h3>
  </section>
);

const TryIt = ({ loading, location, setQuery, setLocation, setDevice, startFetch }) => (

  <section className={SEO.tryIt}>
    <h1>
      TRY THE LIVE DEMO NOW!
      </h1>
    <p>
      Scrape Google with SeoSemApi, "the real-time search results API"
      </p>
    <div>
      <form className={SEO.tryItForm} onSubmit={e => e.preventDefault()}>
        <div className={SEO.fieldset}>
          <div className="col-md-3">
            <label>Search Query<abbr title="required">*</abbr>
              <input
                placeholder="Hello World"
                id="query"
                onChange={event => setQuery(event.target.value)}
              />
            </label>
          </div>
          <div className="col-md-3">
            <label htmlFor="device">Device
                <select
                id="device"
                defaultValue="PC"
                onChange={event => console.log(event.target.value)}
              >
                <option value="PC">Desktop</option>
                <option value="Tablet">Tablet</option>
                <option value="Mobile" >Mobile</option>
              </select>
            </label>
          </div>
          <div >
            <label htmlFor="location">Location
            <Location
                id="location"
                value={location}
                onChange={o => setLocation(o)}//setLocation}
                placeholder="Enter Location"
              />
            </label>
          </div>
          <div className="col-md-3">
            <button
              className={`${SEO.pillButton} ${SEO.ripple}`}
              onClick={startFetch}
            >
              {loading ? 'loading' : 'TestSearch'}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
);

const GetData = ({ data }) => {
  console.log(data)
  return (
    <section className={SEO.getData}>
      <h1 className="get-data-heading">
        Get data as JSON and HTML
      </h1>
      <div className={SEO.getDataContainer}>
        <div className="get-data-browser">
          <img src={ExampleWeb} alt="" srcset="" />
        </div>
        <div className={SEO.getDataCode}>
          <SyntaxHighlighter language="javascript" style={irBlack}
            wrapLines={true}>
            {data ? `${JSON.stringify(data, null, ' ')}` : `${example}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  )
};

const Integration = () => (
  <section className={SEO.integration}>
    <h1>
      EASY INTEGRATION!
    </h1>
    <input value="https://api.serpwow.com/live/search?api_key=demo?engine=google" />

    <Tabs className={SEO.code}>
      <Tab title="cURL">
        <Box pad="medium">
          <SyntaxHighlighter language="bash" style={shadesOfPurple}
            wrapLines={true}>
            {CODE}
          </SyntaxHighlighter>
        </Box>
      </Tab>
      <Tab title="NodeJS">
        <Box pad="medium" >
          <SyntaxHighlighter language="javascript" style={shadesOfPurple}
            wrapLines={true}>
            {`const GSR = require('google-search-results-nodejs')
let client = new GSR.GoogleSearchResults("secret_api_key")

var parameter = {
    q: "Coffee",
    location: "Austin, Texas, United States",
    hl: "en",
    gl: "us",
    google_domain: "google.com",
};

var callback = function(data) {
  console.log(data)
}

// Show result as JSON
client.json(parameter, callback)`}
          </SyntaxHighlighter>
        </Box>
      </Tab>
      <Tab title="Python">
        <Box pad="medium">
          <SyntaxHighlighter language="python" style={shadesOfPurple}
            wrapLines={true}>
            {`from lib.google_search_results import GoogleSearchResults

params = {
    "q": "Coffee",
    "location": "Austin, Texas, United States",
    "hl": "en",
    "gl": "us",
    "google_domain": "google.com",
    "api_key": "secret_api_key"
}

client = GoogleSearchResults(params)
results = client.get_dict()
`}
          </SyntaxHighlighter>
        </Box>
      </Tab>
      <Tab title="PHP">
        <Box pad="medium">
          <SyntaxHighlighter language="php" style={shadesOfPurple}
            wrapLines={true}>
            {`require 'path/to/google_search_results';
$query = [
    "q" => "Coffee",
    "location" => "Austin, Texas, United States",
    "hl" => "en",
    "gl" => "us",
    "google_domain" => "google.com",
    "api_key" => "secret_api_key"
];

$client = new GoogleSearchResults();
$results = $client->json($query);

`}
          </SyntaxHighlighter>
        </Box>
      </Tab>
      <Tab title="Java">
        <Box pad="medium">
          <SyntaxHighlighter language="java" style={shadesOfPurple}
            wrapLines={true}>
            {`Map<String, String> parameter = new HashMap<>();

parameter.put("q", "Coffee");
parameter.put("location", "Austin, Texas, United States");
parameter.put("hl", "en");
parameter.put("gl", "us");
parameter.put("google_domain", "google.com");
parameter.put("api_key", "secret_api_key");

GoogleSearchResults client = new GoogleSearchResults(parameter);
JsonObject results = client.getJson();`}
          </SyntaxHighlighter>
        </Box>
      </Tab>
      <Tab title="GO">
        <Box pad="medium">
          <SyntaxHighlighter language="javascript" style={shadesOfPurple}
            wrapLines={true}>
            {`package main
import (
  g "github.com/serpapi/google-search-results-golang"
)

parameter := map[string]string{
    "q": "Coffee",
    "location": "Austin, Texas, United States",
    "hl": "en",
    "gl": "us",
    "google_domain": "google.com",
    "api_key": "secret_api_key",
}

client := newGoogleSearch(parameter)
results, err := client.GetJSON()
`}
          </SyntaxHighlighter>
        </Box>
      </Tab>
    </Tabs>
  </section>
);

const Features = () => (
  <section className={SEO.features} id='features'>
    <h1>
      FEATURES
      </h1>
    <section className={SEO.moreInfo}>
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
        <img src={LocationImg} alt="high-speed" className={SEO.infoPics} />
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
);

const Free = () => (
  <section className={SEO.free}>
    <div className="free-transparent"></div>
    <div className={SEO.freeExplain}>
      <h2>
        WHOOPING 1 000
        </h2>
      <h1 className={SEO.textOrange}>
        FREE
        </h1>
      <h2>
        MONTHLY CALLS
        </h2>
      <p>
        That's right! We're so confident once you try it you'll
        love our service that we'll give you not 1, not 10, but
          <b>a whooping 1 000 FREE API CALLS!</b> No credit card
needed, no strings attached!
        </p>
      <button className={`${SEO.pillButton} ${SEO.ripple}`}>Start scraping Google FOR FREE!</button>
    </div>
  </section>
);

const Prices = () => (
  <section className={SEO.prices} id='prices'>
    <h1>
      PRICES
      </h1>
    <div>
      <div className={SEO.mostPopularContainer}>
        <div className={SEO.empty1}></div>
        <div className={SEO.empty2}></div>
        <div className={SEO.mostPopular}>
          <div>
            MOST POPULAR!
          </div>
        </div>
        <div className={SEO.empty3}></div>

        <div className={SEO.empty4}></div>
      </div>

      <div className={SEO.tablePrices}>
        <div className={SEO.headerPrices}>
          <h1>
            SAVE 20%
          </h1>
          <img src={Switch} alt="switch" classname={SEO.headerPriceImage} />
          <p>
            Save with your Anual Plan
          </p>
        </div>
        <div className={SEO.monthly}>
          <p>
            Monthly searches
          </p>
        </div>
        <div className={SEO.price}>
          Price per search
        </div>
        <div className={SEO.apiCalls}>
          Api calls per minute
        </div>
        <div className={SEO.simultaneous}>
          Simultaneous searches
        </div>
        <div className={SEO.support}>
          Technical support
        </div>
        <div className={SEO.footerPrices}></div>
        <div className={SEO.basicHeader}>
          <h3>
            SeoSemApi
            </h3>
          <h2>
            Basic
            </h2>
          <h1>
            $50
            </h1>
          <small>
            p/month
            </small>
          <p>
            <b>save $120 per year</b><br />
            $600 billed upon purchase
            </p>
        </div>
        <div className={SEO.b1}>
          10,000
          </div>
        <div className={SEO.b2}>
          $0.005
          </div>
        <div className={SEO.b3}>
          70
          </div>
        <div className={SEO.b4}>
          20
          </div>
        <div className={SEO.b5}>
          basic technical support
          </div>
        <div className={SEO.b6}>
          <button 
            onClick={() => { history.push("/plan/basic") }}
          className={`${SEO.pillButton}`} 
          style={{ backgroundColor: '#2b4f86', padding: '10px 15px' }}
          >
            GO BASIC!
            </button>
        </div>

        <div className={SEO.developerHeader}>
          <h3>
            SeoSemApi
            </h3>
          <h2>
            Developer
            </h2>
          <h1>
            $130
            </h1>
          <small>
            p/month
            </small>
          <p>
            <b>save $312 per year</b><br />
            $1560 billed upon purchase
            </p>
        </div>
        <div className={SEO.d1}>
          30.000
          </div>
        <div className={SEO.d2}>
          $0.0043
          </div>
        <div className={SEO.d3}>
          Unlimited
          </div>
        <div className={SEO.d4}>
          70
          </div>
        <div className={SEO.d5}>
          premium technical support
          </div>
        <div className={SEO.d6}>
          <button
            onClick={() => { history.push("/plan/developer") }}
            className={`${SEO.pillButton}`}
            style={{ backgroundColor: 'orangered', padding: '10px 15px' }}
          >
            GO PRO!
            </button>
        </div>
        <div className={SEO.agencyHeader}>
          <h3>
            SeoSemApi
            </h3>
          <h2>
            Agency
            </h2>
          <h1>
            $240
            </h1>
          <small>
            p/month
            </small>
          <p>
            <b>save $576 per year</b><br />
            $2.880 billed upon purchase
            </p>
        </div>
        <div className={SEO.a1}>
          60.000
          </div>
        <div className={SEO.a2}>
          $0.0040
          </div>
        <div className={SEO.a3}>
          unlimited
          </div>
        <div className={SEO.a4}>
          120
          </div>
        <div className={SEO.a5}>
          premium technical support
          </div>
        <div className={SEO.a6}>
          <button
            onClick={() => { history.push("/plan/agency") }}
            className={`${SEO.pillButton}`}
            style={{ backgroundColor: '#2963b9', padding: '10px 15px' }}
          >
            GO MEGA!
          </button>
        </div>
        <div className={SEO.freeHeader}>
          <h3>
            SeoSemApi
            </h3>
          <h2>
            Free
            </h2>
          <h1>
            FREE
            </h1>
          <small>
            forever
          </small>
          <p>
            <b>1.000 free cosultations
          per month</b>
          </p>
        </div>
        <div className={SEO.f1}>
          1.000
          </div>
        <div className={SEO.f2}>
          no credit card required
          </div>
        <div className={SEO.f3}>
          10
          </div>
        <div className={SEO.f4}>
          none
          </div>
        <div className={SEO.f5}>
          basic technical support
          </div>
        <div className={SEO.f6}>
          <button
            onClick={() => { history.push("/plan/basic") }}
            className={`${SEO.pillButton}`}
            style={{ backgroundColor: '#5c645c', padding: '10px 15px' }}
          >
            FREE TRIAL!
          </button>
        </div>
      </div>
    </div>
    <p>
      Need higher limits and aditional customization? contact us <a href="#">here</a>
    </p>
  </section>
);

const FAQ = () => (
  <section className={SEO.faq} id='faq'>
    <h1>
      FAQ
    </h1>
    <div className={SEO.columns}>
      <div >
        <h3>
          Do you offer service guarantee?
      </h3>
        <p>
          If the service guarantee is 99.95%. If your plan fails we will refund the money in full that month.
      </p>
      </div>
      <div>
        <h3>
          How searches are counted?
      </h3>
        <p>
          Only successful searches are considered a search. Failed searches are not taken.
      </p>
      </div>
      <div>
        <h3>
          Is the data in real time?
      </h3>
        <p>
          At the same time the request of the api is made, the result is delivered in real time, the client obtains the search as if he were doing it in the search engine at the same time.
      </p>
      </div>
      <div>
        <h3>
          Do you follow all the changes introduced by the google search engine?
      </h3>
        <p>
          Yes, we follow all the updates that Google makes to obtain the most accurate data possible.
      </p>
      </div>
    </div>
  </section>
);

const Info = () => (
  <section className={SEO.info}>
    <div class={SEO.bottom}>
      <div class={SEO.bottomLeft}>
        <div class={SEO.realTime}>
          <div class={SEO.botLeftLogo}>
            <img src={Icon} alt="logo" />
            <p>Seo<br />Sem<br /><b>API</b></p>
          </div>
          <b>The real-time search result API.</b>
        </div>
        <p class={SEO.bottomLeftInfo}>
          Easily scrape Google search API. Scraper API handles
          proxies, browsers and Captchas, so you can het the HTML
          from any webpage with a simple API call.
          </p>
      </div>
      <div class={SEO.bottomRight}>
        <div class={SEO.companyInfo}>
          <a>
            Pricing
            </a>
          <a>
            Features
            </a>
          <a>
            Documentation
            </a>
          <a>
            FAQ
            </a>
          <a>
            Contact Sales
            </a><br />
          <section class={SEO.compInfoMid}>
            <b>SeoSemApi.com</b>
            <p class={SEO.address}>
              29 newbridge Avenue Dublin 4 D04 V5T3 - Ireland
              Gran Via Marquez del Tuna 46005 - Valencia- Spain
            </p>
            <p>
              <b>Company number</b> ESB98407471
            </p>
          </section>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className={SEO.footer}>
    &copy; Copyright 2019 SEO SEM API LLC.
  </footer>
);
export default Home;

const CODE = `$ curl --get https://serpapi.com/search \\
-d q="Coffee", \\
-d location="Austin%2C+Texas%2C+United+States", \\
-d hl="en", \\
-d gl="us", \\
-d google_domain="google.com", \\
-d api_key="secret_api_key"
`;

const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'AndorrA', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cape Verde', code: 'CV' },
  { name: 'Cayman Islands', code: 'KY' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Christmas Island', code: 'CX' },
  { name: 'Cocos (Keeling) Islands', code: 'CC' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Congo', code: 'CG' },
  { name: 'Congo, The Democratic Republic of the', code: 'CD' },
  { name: 'Cook Islands', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Cote D\'Ivoire', code: 'CI' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Falkland Islands (Malvinas)', code: 'FK' },
  { name: 'Faroe Islands', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Guiana', code: 'GF' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'French Southern Territories', code: 'TF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
  { name: 'Holy See (Vatican City State)', code: 'VA' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran, Islamic Republic Of', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
  { name: 'Korea, Republic of', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Lao People\'S Democratic Republic', code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libyan Arab Jamahiriya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macao', code: 'MO' },
  { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Martinique', code: 'MQ' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia, Federated States of', code: 'FM' },
  { name: 'Moldova, Republic of', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montserrat', code: 'MS' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Netherlands Antilles', code: 'AN' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Niue', code: 'NU' },
  { name: 'Norfolk Island', code: 'NF' },
  { name: 'Northern Mariana Islands', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Palestinian Territory, Occupied', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Pitcairn', code: 'PN' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Reunion', code: 'RE' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation', code: 'RU' },
  { name: 'RWANDA', code: 'RW' },
  { name: 'Saint Helena', code: 'SH' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia and Montenegro', code: 'CS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Svalbard and Jan Mayen', code: 'SJ' },
  { name: 'Swaziland', code: 'SZ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Taiwan, Province of China', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania, United Republic of', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tokelau', code: 'TK' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' },
  { name: 'United States Minor Outlying Islands', code: 'UM' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Viet Nam', code: 'VN' },
  { name: 'Virgin Islands, British', code: 'VG' },
  { name: 'Virgin Islands, U.S.', code: 'VI' },
  { name: 'Wallis and Futuna', code: 'WF' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' }
]
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import jason from '../assets/images/jason.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import SEO from '../components/SEO'

/**
 * util function for formatting the ABV % string from Netlify
 */
const formatABV = (abvString) => {
  const trimmed = abvString.trim();
  if (!trimmed) {
    return '';
  }

  let noSymbol;
  // strip out the percentage sign, if any
  if (abvString.indexOf('%') > -1) {
    noSymbol = abvString.substr(0,abvString.indexOf('%'));
  } else {
    noSymbol = abvString;
  }

  const asNumber = Number(noSymbol);
  if (Number.isNaN(asNumber)) {
    return noSymbol + '%';
  } else {
    return asNumber.toFixed(1) + '%';
  }
}

const Index = ({ data }) => {
  const [stickyNav, setStickyNav] = useState(false);
  const beers = data && data.allMarkdownRemark && data.allMarkdownRemark.nodes || [];

  const handleWaypointEnter = () => {
    setStickyNav(false);
  }

  const handleWaypointLeave = () => {
    setStickyNav(true);
  }

  return (
    <Layout>
      <SEO />

      <Header />

      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      ></Waypoint>
      <Nav sticky={stickyNav} />

      <div id="main">
        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>About Funhouse Brews</h2>
              </header>
              <p>
                A North Portland home-based Nanobrewery, Funhouse operates a 2 bbl. system and self-distributing 1/4 and 1/6 barrels. Brewmaster Jason Rizos began brewing in 2001, obtained BJCP Certification in 2006, and has won medals at the Best Florida Beer Competition, Oregon Fall Classic, and Oregon State Fair. Funhouse Styles are handcrafted, unorthodox, “chimerical” crossbreeds of classic styles, with a focus on processes and ingredients impractical or impossible on a scale larger than 2 bbls.
                <br/>
                In addition to brewing, Jason Rizos is an author of <a href="https://www.amazon.com/-/e/B006FO3LSS" target="blank">fiction and nonfiction</a>, and a writing teacher at Portland Community College. He enjoys exploring the wonders of Pacific Northwest outdoors with his wife and two whippets, Supernova and Delilah. Here he is pictured at Horsetail Falls with Dee.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </div>
            <span className="image">
              <img src={jason} alt="" />
            </span>
          </div>
        </section>

        <section id="first" className="main special">
          <header className="major">
            <h2>Our Beer</h2>
          </header>
          <ul className="features">
            {
              beers.map((beer) => {
                const description = beer.rawMarkdownBody || '';
                const frontmatter = beer.frontmatter || {};
                const image = frontmatter.image;
                const title = frontmatter.title;
                const abv = frontmatter.abv;
                const ibu = frontmatter.ibu;

                return (
                  <li>
                    <div className="beer-image-container">
                      {
                        image && (
                          <img 
                            src={image} 
                            className="beer-image"
                            alt='' />
                        )
                      }
                    </div>
                    <h2 className="beer-title">
                      {title}
                    </h2>
                    <p className="beer-description">
                      {description}
                    </p>
                    <span className="ibu-label">
                      {
                        `${ibu} IBU`
                      }
                    </span>
                    <span className="abv-label">
                      {
                        `${formatABV(abv)} ABV`
                      }
                    </span>
                  </li>
                );
              })
            }
          </ul>
        </section>

        <section id="second" className="main special">
          <header className="major">
            <h2>Growler Fill Thursdays!</h2>
            <p className="line-breaks">
              Opening for Winter on January 9th. <br/>
              (We will usually be closed in the event of rain during the winter) <br/>
              $10 fill! <br/>
              6-8 p.m. at the Funhouse Brewery on Thursdays <br/>
              7717 N Emerald Ave <br/>
              Portland, OR 97217 <br/>
              Drop by or send an email to <a href="mailto:funhousebrews@gmail.com">funhousebrews@gmail.com</a> <br/>
              ​
              Occasional Music featuring John White
            </p>
          </header>
        </section>

        <section id="cta" className="main special">
          <header className="major">
            <h2>Instagram</h2>
            <p>
              Preview coming soon! In the meantime, check out our instagram <a href="https://www.instagram.com/funhousebrews/" target="blank">here</a>.
            </p>
          </header>
          {/* <footer className="major">
            <ul className="actions">
              <li>
                <Link to="/generic" className="button special">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </footer> */}
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        abv
        ibu
        image
        title
      }
      rawMarkdownBody
    }
  }
}
`

export default Index

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import jason from '../assets/images/jason.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import noImage from '../assets/images/no-image.png';

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

const getInstaURI = (id) => {
  return id ? `https://www.instagram.com/p/${id}/` : 'https://www.instagram.com/funhousebrews/';
}

const Index = ({ data }) => {
  const [stickyNav, setStickyNav] = useState(false);
  const beers = data && data.allMarkdownRemark && data.allMarkdownRemark.nodes || [];
  const instas = data && data.allInstaNode && data.allInstaNode.nodes || [];

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
                        ) || (
                          <img 
                            src={noImage} 
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
            <h3>Growler Fill Thursdays!</h3>
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

            {/* 
            const node = {
                likes: 13,
                comments: 1,
                caption: 'Work of art',
                timestamp: 1580438759,
                localFile: {
                  publicURL: '/static/81958005_614438082674970_2320960499291329274_n-0900f286240907962dee5c0d2bdd3112.jpg'
              }
            */}

        <section id="cta" className="main special">
          <header className="major">
            <h2>Instagram</h2>
            <ul className="statistics">
              {
                instas.map((insta, i) => (
                  <li className={`style${i}`}>
                    <a href={getInstaURI(insta.id)} target="blank">
                      <div className="insta-container">
                        <img src={insta.localFile.publicURL} className="insta"/>
                      </div>
                    </a>
                  </li>
                ))
              }
              {/*
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              */}
            </ul>
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
  allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 5) {
    nodes {
      caption
      comments
      id
      likes
      localFile {
        publicURL
      }
      timestamp
    }
  }
}
`

export default Index

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
    noSymbol = abvString.substr(0, abvString.indexOf('%'));
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
                <h2>Open for the Summer! - New hours 5 - 8 p.m. Thursdays! Trivia on July 28 at 7:30 pm. Terra Farma returns on July 29 along with Nehalim River Ranch! Pick up your order here at Funhouse</h2>
               <p>Check  out our partners: <a href="https://www.nehalemriverranch.com/products" target="blank">at
                Nehalem River Ranch</a><img src="https://images.squarespace-cdn.com/content/5cfa9c7aeb4639000180098d/1560181363290-V5374X44EI6L5WJOVU7K/logo.png"></img></p>
                <p className="line-breaks"> </p>
                  <h2>Terra Farma</h2> <a href="https://terrafarmers.net" target="blank">
                  <img src="https://terrafarmers.net/wp-content/uploads/2014/07/cropped-terrafarmabanner1.png"></img> </a>
                  
                              
   <p>
                A North Portland home-based Nanobrewery, Funhouse operates a 2 bbl. system and self-distributing 1/4 and 1/6 barrels. Brewmaster Jason Rizos began brewing in 2001, obtained BJCP Certification in 2006, and has won medals at the Best Florida Beer Competition, Oregon Fall Classic, and Oregon State Fair. Funhouse Styles are handcrafted, unorthodox, “chimerical” crossbreeds of classic styles, with a focus on processes and ingredients impractical or impossible on a scale larger than 2 bbls.
                <br />
                In addition to brewing, Jason Rizos is an author of <a href="https://www.amazon.com/-/e/B006FO3LSS" target="blank">fiction and nonfiction</a>, and a writing teacher at Portland Community College. He enjoys exploring the wonders of Pacific Northwest outdoors with his wife and two whippets, Supernova and Delilah. Here he is pictured at Horsetail Falls with Dee.
              </p>
              </header>
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
            <h2>Growler Fill Thursdays!</h2>
            <p className="line-breaks">
              (COVID social distancing and sanitization measures in effect).
              Please Note, we accept Venmo as payment (funhousebrews).
Sign up for Venmo prior to arrival and we can process payment on site. <br />
              (We will usually be closed in the event of rain.) <br />
              $10 fill! <br />
              6-8 p.m. at the Funhouse Brewery on Thursdays after daylight savings, 5-7 p.m. during daylight savings <br />
              7717 N Emerald Ave <br />
              Portland, OR 97217 <br />
              Drop by or send an email to <a href="mailto:funhousebrews@gmail.com">funhousebrews@gmail.com</a> <br />

              Occasional Music featuring John White
            </p>
          </header>
        </section>

        {/* 
          -----------------------
          start insta stuff
          -----------------------
        */}

        {/* <section id="cta" className="main special">
          <header className="major">
            <h2>Instagram</h2>
            <ul className="statistics">
              {
                instas.map((insta, i) => (
                  <li className={`style${i}`}>
                    <a href={getInstaURI(insta.id)} target="blank">
                      <div className="insta-container">
                        <img src={insta.localFile.publicURL} className="insta" />
                      </div>
                    </a>
                  </li>
                ))
              }
            </ul>
          </header>
        </section> */}

        {/* 
          -----------------------
          end insta stuff
          -----------------------
        */}


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

// export const pageQuery = graphql`
// query MyQuery {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         abv
//         ibu
//         image
//         title
//       }
//       rawMarkdownBody
//     }
//   }
//   allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 5) {
//     nodes {
//       caption
//       comments
//       id
//       likes
//       localFile {
//         publicURL
//       }
//       timestamp
//     }
//   }
// }
// `

export default Index

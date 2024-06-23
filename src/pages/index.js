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
                <h2>Open for 2024! - New Summer hours 5 - 8:30 p.m. Thursdays! Closed for July 4! Go America! Celebrate without blowing anything up. Closure dates will be listed here and on Google Business listing. Terra Farma pick-ups on site! Pick up your order here at Funhouse (confirm pick-up date in advance) </h2>
               <p>Check  out our partner: at
                </p>
                <p className="line-breaks"> </p>
                  <h2>Terra Farma</h2> <a href="https://terrafarmers.net" target="blank">
                  <img src="https://terrafarmers.net/wp-content/uploads/2014/07/cropped-terrafarmabanner1.png"/> </a>
             
                              
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
             Please Note, we accept Venmo as payment (funhousebrews).
Sign up for Venmo prior to arrival and we can process payment on site. <br />
              (We will are open in the event of rain.) <br />
              $14 fill! <br />
              6-8 p.m. at the Funhouse Brewery on Thursdays after daylight savings, 5-7 p.m. during daylight savings <br />
              7717 N Emerald Ave <br />
              Portland, OR 97217 <br />
              Drop by or send an email to <a href="mailto:funhousebrews@gmail.com">funhousebrews@gmail.com</a> <br />
            <div><link rel="stylesheet" href="https://cdn6.localdatacdn.com/badges/restaurantji/css/badge-1.css?v=32816"><div id="circle_v2" class="v5 v5_1" tabindex="0"><img class="animated_logo" src="https://cdn6.localdatacdn.com/badges/restaurantji/img/rj-short.gif" width="105" height="105"/>
            <div class="rb_flex rb_top"><div class="arc-heading "><svg height="160px" viewBox="0 0 160 160" width="160px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M 30 80 a 50 50 0 1 1 110 0" id="heading-arc">
            </path></defs><text class="arc-heading__heading " fill="#000" text-anchor="middle"><textPath startOffset="50%" xlink:href="#heading-arc"><a href="https://www.restaurantji.com/or/portland/funhouse-brews-/" target="_blank">Recommended</a></textPath></text></svg>
            </div><div class="arc-heading arc-heading__bottom"><svg height="140px" viewBox="0 0 140 140" width="140px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
          <path d="M 12 60 a 55 55 0 0 0 140 0" id="subheading-arc" stroke="red">
          </path></defs><text class="arc-heading__subheading" fill="#000" text-anchor="middle"><textPath startOffset="50%" xlink:href="#subheading-arc"><a target="_blank" href="https://www.restaurantji.com">Restaurantji</a></textPath></text></svg></div></div></div></div>

            
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

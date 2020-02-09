import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    {/* <section>
      <h2>Aliquam sed mauris</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
    </section> */}
    <section>
      <h2>Come Say Hi</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>7717 N Emerald Ave &bull; Portland OR 97217 &bull; USA</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:funhousebrews@gmail.com">funhousebrews@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li> */}
        <li>
          <a href="https://www.facebook.com/Funhouse-Brews-265153227253566/" target="blank" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/funhousebrews/" target="blank" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        {/* <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
    <p className="copyright">
      {/* todo year */}
      &copy; 2020 Funhouse Brews
    </p>
  </footer>
)

export default Footer

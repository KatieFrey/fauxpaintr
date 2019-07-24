import React from "react";
import styles from "./Footer.modules.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className={styles.footer}>
          <h2>
            A Neural Algorithm of Artistic Style [Leon A. Gatys, Alexander S.
            Ecker, Matthias Bethge]
          </h2>
          <br />
          <h2>Tensorflow.js</h2>
          <h3>https://js.tensorflow.org/</h3>
          <br />
          <h2>ML5.js Library</h2>
          <h3>https://ml5js.org</h3>
          <br />
          <h2>Yining Shi</h2>
          <h3>http://1023.io/fast-style-transfer/</h3>
          <br />
          <h2>Style Transfer using Spell with Yining Shi</h2>
          <h3>Live Stream on The Coding Train w/ Daniel Shiffman</h3>
          <h3>https://www.youtube.com/watch?v=gye9hSIrRWI</h3>
        </footer>
      </div>
    );
  }
}

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Copyright &copy; {new Date().getFullYear()} AiFy. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Section 1: Brand */}
        <div style={styles.section}>
          <h2 style={styles.brand}>YourBrand</h2>
          <p style={styles.description}>
            Building a better future with quality and innovation.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <a href="/" style={styles.link}>
                Home
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/about" style={styles.link}>
                About Us
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/products" style={styles.link}>
                Products
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Icons */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon} aria-label="Facebook">
              🌐
            </a>
            <a href="https://twitter.com" style={styles.icon} aria-label="Twitter">
              🐦
            </a>
            <a href="https://instagram.com" style={styles.icon} aria-label="Instagram">
              📸
            </a>
            <a href="https://linkedin.com" style={styles.icon} aria-label="LinkedIn">
              🔗
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div style={styles.copyright}>
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 20px',
    fontSize: '14px',
    marginTop: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1 1 30%',
    marginBottom: '20px',
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#ccc',
  },
  heading: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#007bff',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  iconHover: {
    transform: 'scale(1.2)',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    fontSize: '12px',
    color: '#aaa',
  },
};

export default Footer;

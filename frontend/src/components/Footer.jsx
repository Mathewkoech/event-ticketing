import "../styles/Footer.css"; // Import footer styles

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Event Platform. All Rights Reserved.</p>
      <p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;

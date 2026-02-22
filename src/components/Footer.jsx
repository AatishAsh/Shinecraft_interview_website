// I have not used the Footer component in the App.jsx file, but I have created it as a separate component for better modularity and maintainability. You can easily import and use it in the App.jsx file or any other component where you want to display the footer.
function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2026 AMPAXIS . All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "2rem",
};

export default Footer;

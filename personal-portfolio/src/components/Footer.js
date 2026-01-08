export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer"><div className="container"><p>&copy; {currentYear} Manar Marchoube. All rights reserved.</p></div></footer>
  );
};

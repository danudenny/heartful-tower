export const FooterMenu = () => {
  const navItems = [
    "Home",
    "Insight",
    "Facilities",
    "News",
    "Contact Us",
    "Login",
  ];

  return (
    <div className="footer-menu">
      {navItems.map((item, index) => (
        <span
          key={index}
          className="mx-10 text-gray-600 cursor-pointer text-md hover:text-green-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

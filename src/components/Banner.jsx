import "../styles/Banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  const title = "la maison jungle";
  return (
    <div className="banner">
      <img src={logo} alt="logo la maison jungle" className="banner-logo" />
      <h1 className="banner-title">{title}</h1>
    </div>
  );
};

export default Banner;

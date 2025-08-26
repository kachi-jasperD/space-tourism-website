import backgroundDesktop from "/assets/home/background-home-desktop.jpg";
import backgroundMobile from "/assets/home/background-home-mobile.jpg";
import backgroundTablet from "/assets/home/background-home-tablet.jpg";

/* I made the background image fixed to allow text be displayed on it */

const Home = () => {
  return (
    <>
      {/* Mobile background Page */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundMobile})` }}
      ></div>

      {/* Tablet background Page */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundTablet})` }}
      ></div>

      {/* Desktop background Page */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundDesktop})` }}
      ></div>
    </>
  );
};
export default Home;

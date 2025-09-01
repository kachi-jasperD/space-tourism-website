import technologyBackgroundDesktop from "/assets/technology/background-technology-desktop.jpg";
import technologyBackgroundMobile from "/assets/technology/background-technology-mobile.jpg";
import technologyBackgroundTablet from "/assets/technology/background-technology-tablet.jpg";

const TechnologyBackground = () => {
  return (
    <>
      {/* Mobile background Page */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${technologyBackgroundTablet})` }}
      ></div>

      {/* Tablet background Page */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${technologyBackgroundMobile})` }}
      ></div>

      {/* Desktop background Page */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${technologyBackgroundDesktop})` }}
      ></div>
    </>
  );
};
export default TechnologyBackground;

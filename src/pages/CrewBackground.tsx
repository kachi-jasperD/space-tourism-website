import crewBackgroundDesktop from "/assets/crew/background-crew-desktop.jpg";
import crewBackgroundMobile from "/assets/crew/background-crew-mobile.jpg";
import crewBackgroundTablet from "/assets/crew/background-crew-tablet.jpg";



const CrewBackground = () => {
  return (
    <>
      {/* Mobile background Page */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${crewBackgroundTablet})` }}
      ></div>

      {/* Tablet background Page */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${crewBackgroundMobile})` }}
      ></div>

      {/* Desktop background Page */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${crewBackgroundDesktop})` }}
      ></div>
    </>
  );
};
export default CrewBackground;

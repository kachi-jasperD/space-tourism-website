import destinationBackgroundDesktop from "/assets/destination/background-destination-desktop.jpg";
import destinationBackgroundMobile from "/assets/destination/background-destination-mobile.jpg";
import destinationBackgroundTablet from "/assets/destination/background-destination-tablet.jpg";

const DestinationBackground = () => {
  return (
    <>
      {/* Mobile background Page */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${destinationBackgroundMobile})` }}
      ></div>

      {/* Tablet background Page */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${destinationBackgroundTablet})` }}
      ></div>

      {/* Desktop background Page */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${destinationBackgroundDesktop})` }}
      ></div>
    </>
  );
};
export default DestinationBackground;

import sharedBackgroundDesktop from "/assets/destination/background-destination-desktop.jpg";
import sharedBackgroundMobile from "/assets/destination/background-destination-mobile.jpg";
import sharedBackgroundTablet from "/assets/destination/background-destination-tablet.jpg";

const SharedBackground = () => {
  return (
    <>
      {/* Mobile background Page */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${sharedBackgroundMobile})` }}
      ></div>

      {/* Tablet background Page */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${sharedBackgroundTablet})` }}
      ></div>

      {/* Desktop background Page */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${sharedBackgroundDesktop})` }}
      ></div>
    </>
  );
};
export default SharedBackground;

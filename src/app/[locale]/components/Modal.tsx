import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

4;
const Modal = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = React.useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = React.useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = React.useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = React.useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = React.useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] =
    React.useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] =
    React.useState(100);
  const [scrollToZoom, setScrollToZoom] = React.useState(false);

  const modalImage = [
    {
      src: "https://res.cloudinary.com/killtdj/image/upload/c_limit,w_600/f_auto/q_80/v1698314968/popup_banner_g4dmu4.png?_a=BAVAnIIB0",
      alt: "banner",
    },
  ];

  return (
    <>
      <Lightbox
        className="hero__modal"
        open={isOpen}
        slides={modalImage}
        close={() => setIsOpen(false)}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        zoom={{
          maxZoomPixelRatio,
          zoomInMultiplier,
          doubleTapDelay,
          doubleClickDelay,
          doubleClickMaxStops,
          keyboardMoveDistance,
          wheelZoomDistanceFactor,
          pinchZoomDistanceFactor,
          scrollToZoom,
        }}
      />
    </>
  );
};

export default Modal;

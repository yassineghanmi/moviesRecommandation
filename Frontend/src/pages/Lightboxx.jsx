import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Lightboxx() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "../public/assets/images/404.jpg" },
          { src: "../public/assets/images/pexels-ron-lach-9808003.jpg" },
          { src: "../public/assets/images/pexels-cottonbro-8273643.jpg" },
        ]}
      />
    </>
  );
}

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const MetaPixelTracker = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (typeof fbq === "function") {
//       fbq("track", "PageView");
//       console.log("📈 PageView tracciato", location.pathname);
//     }
//   }, [location.pathname]);

//   return null;
// };

// export default MetaPixelTracker;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof fbq === "function") {
      fbq("track", "PageView");
      console.log("📈 Meta Pixel PageView tracciato per:", location.pathname);
    } else {
      console.warn("⚠️ fbq non disponibile");
    }
  }, [location]);

  return null;
}

export default MetaPixelTracker;

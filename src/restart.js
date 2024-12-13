import request from "./request";
import loadResultPage from "./result-page";
import loadErrorPage from "./error-page";
import loadSearchPage from "./start-page";
import loadLoadingPage from "./loading-page";

export default function restart() {
    loadSearchPage()
      .then((query) => {
        return Promise.allSettled([request(query), loadLoadingPage()]);
      })
      .then((values) => {
        // Check if the loader exists and has a stop method
        if (values[1].status === "fulfilled" && values[1].value && typeof values[1].value.stop === "function") {
          values[1].value.stop();  // Stop the loader
        }
        
        if (values[0].status == "rejected") {
          loadErrorPage(values[0].reason);
        } else {
          loadResultPage(values[0].value);
        }
      });
  }
  
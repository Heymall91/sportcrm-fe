import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n.ts";
// import { Provider } from "react-redux";
// import  store  from "./redux-app/store.ts";


createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
      </BrowserRouter>
)

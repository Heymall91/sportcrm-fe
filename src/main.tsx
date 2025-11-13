import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./common/utils/i18n/i18n.ts";
import { Provider } from "react-redux";
import { store } from "./redux-app/store.ts";
import { Auth0Provider } from "@auth0/auth0-react";

import { ThemeContextProvider } from "../src/themes/themeContext.tsx";
import { CssBaseline } from "@mui/material";
import {config} from './configs/config.ts'

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
      <ThemeContextProvider>
        <CssBaseline/>
          <Auth0Provider
            domain={config.configAuth0.domain!} 
            clientId={config.configAuth0.clientId!} 
            authorizationParams={{
              redirect_uri: config.configAuth0.redirectUri,
              audience: config.configAuth0.audience
            }}
            cacheLocation="localstorage">
            <Provider store={store}>
              <App />
            </Provider>
          </Auth0Provider>
      </ThemeContextProvider>
      </BrowserRouter>
)

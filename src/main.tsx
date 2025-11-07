import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./common/utils/i18n/i18n.ts";
import { Provider } from "react-redux";
import { store } from "./redux-app/store.ts";
import { Auth0Provider } from "@auth0/auth0-react";

import {theme} from "./themes/themes.ts";
import {ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { configAuth0 } from "./configs/configAuth0.ts";

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Auth0Provider 
            domain={configAuth0.domain!} 
            clientId={configAuth0.clientId!} 
            authorizationParams={{
              redirect_uri: configAuth0.redirectUri
            }}
            cacheLocation="localstorage">
            <Provider store={store}>
              <App />
            </Provider>
          </Auth0Provider>
      </ThemeProvider>
      </BrowserRouter>
)

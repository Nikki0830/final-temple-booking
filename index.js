/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {I18nextProvider} from 'react-i18next';
import i18n from './Components/i18nn/Translation/i18n';
import React from "react"

import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

i18n.init({
  interpolation: {escapeValue: false}, // React already does escaping
});
// const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

AppRegistry.registerComponent(appName, () => Root);

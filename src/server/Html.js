// Libraries
import React, { Component } from "react";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import helmet from "react-helmet";

// Redux
import { Provider } from "react-redux";

class Html extends Component {
  /*static propTypes = {
    url: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object
  }*/

  render() {
    const PROD = process.env.NODE_ENV === "production";

    const { title, store, assets, url, context } = this.props;

    const { manifest, app, vendor } = assets || {};

    let state = store.getState();

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
    const Layout = PROD ? require("../../build/prerender.js") : () => {};

    const root =
      PROD &&
      renderToString(
        <Provider store={store}>
          <StaticRouter location={url} context={context}>
            <Layout />
          </StaticRouter>
        </Provider>
      );
    const helmetData = helmet.renderStatic();
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          {helmetData.title.toComponent()}
          {helmetData.meta.toComponent()}
          {helmetData.link.toComponent()}

          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          {PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}
        </head>
        <body>
          {PROD ? <div id="root" dangerouslySetInnerHTML={{ __html: root }} /> : <div id="root" />}
          {PROD && <script dangerouslySetInnerHTML={{ __html: manifest.text }} />}
          {PROD && <script src={vendor.js} />}
          <script src={PROD ? app.js : "/static/app.js"} />
        </body>
      </html>
    );
  }
}

export default Html;

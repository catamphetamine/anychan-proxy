// var corsProxy = require('../cors-proxy-node')
var corsProxy = require('cors-proxy-node')

corsProxy({
  "host": "0.0.0.0",
  "port": 8080,
  "cookies": true,
  "shareCookiesBetweenOriginsInFromOriginWhitelist": true,
  // "toOriginWhitelist": [
  //   // 4chan CAPTCHA frame URL gets proxied in order to remove `Content-Security-Policy` HTTP response header.
  //   // Proxying CAPTCHA frame URL results in `fromOrigin` being the origin of the proxy server itself.
  //   // In order to not add the origin of the proxy server itself to `fromOriginWhitelist`,
  //   // the CAPTCHA frame URL origin is added to `toOriginWhitelist` instead.
  //   "https://sys.4chan.org"
  // ],
  "fromOriginWhitelist": [
    "https://anychans.github.io",
    "https://catamphetamine.github.io",
    "https://captchan.surge.sh",
    "http://localhost:1234",
    // When proxying an `<iframe/>`, the Proxy domain itself should be added to `fromOriginWhitelist`.
    // The reason is that when loading an `<iframe/>`, web browser will set `Origin` HTTP request header
    // to the "origin" part of the URL specified in the `src` attribute of the `<iframe/>`
    // which is a proxied URL so the domain of it will be the Proxy domain.
    "https://anychan-proxy.vercel.app",
    // Testing `<iframe/>` `transforms` on local proxy:
    "http://localhost:8080"
  ]
})

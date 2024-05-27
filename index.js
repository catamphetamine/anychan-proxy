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
    "http://localhost:1234"
  ]
})

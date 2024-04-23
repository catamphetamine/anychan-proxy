var corsProxy = require('cors-proxy-node')

corsProxy({
  "host": "0.0.0.0",
  "port": 8080,
  "cookies": true,
  "shareCookiesBetweenAllowedRequestOrigins": true,
  "allowedRequestOrigins": [
    "https://anychans.github.io",
    "https://catamphetamine.github.io",
    "https://captchan.surge.sh",
    "http://localhost:1234"
  ]
})

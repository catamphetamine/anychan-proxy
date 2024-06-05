# CORS Proxy

This is a simple CORS proxy used for [anychan](https://gitlab.com/catamphetamine/anychan) demo.

It runs on [`cors-proxy-node`](https://gitlab.com/catamphetamine/cors-proxy-node).

## Use

```
npm install
npm start
```

It will output something like:

```
CORS proxy is running at http(s)://<this-host>:8080
```

Append `?url={urlEncoded}` to it and paste it in `anychan` configuration/settings.

Example: `http://localhost:8080?url={urlEncoded}`.

Options:
* To run the proxy on a specific host, set `HOST` environment variable.
* To run the proxy at a specific port, set `PORT` environment variable.

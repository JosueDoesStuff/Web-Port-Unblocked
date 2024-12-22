// burnedpopcorn is not cool /j
// but Roblox is still mid ngl
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://html-classic.itch.zone/html/2876359-1104083/index.html?v=1732313800';
// just adding betterrunner.html doesn't work, so it has to be added into the Proxy's Future URL

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'autistici.org') {
      req.headers['X-Forwarded-For'] = ''; 
      req.headers['X-Real-IP'] = '';
      req.headers['Via'] = '';
    }
    return nggUrl;
  }
});

app.use('/', proxy);

const port = process.env.PORT || 443;
app.listen(port, () => {
  console.log(`Proxy is running on port ${port}`);
});

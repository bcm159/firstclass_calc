const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/korea', {
      target: 'https://www.koreaexim.go.kr',
      pathRewrite: {
        '^/korea':''
      },
      changeOrigin: true
    })
  )
  app.use(
    createProxyMiddleware("/api", {
        target: 'http://localhost:3001/',
        changeOrigin: true,
    })

)
}
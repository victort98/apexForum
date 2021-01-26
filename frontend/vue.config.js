module.exports = {
    devServer: {
      proxy:
      {
        "^/api/": { target: "http://localhost:7000", ws: true, changeOrigin: true }
      }
    }
  }
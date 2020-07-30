module.exports = {
  "css": {
    "loaderOptions": {
      "sass": {
        "prependData": "@import \"@/style/global.scss\";"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
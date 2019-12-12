const autoprefixer = require('autoprefixer')

// 优化 css 代码
module.exports = {
  plugins: [
    // 处理需要加浏览器前缀的 css
    autoprefixer()
  ]
}
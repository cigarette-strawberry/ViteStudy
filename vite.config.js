import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // 若要使用一个插件，需要将它添加到项目的 devDependencies 并在 vite.config.js 配置文件中的 plugins 数组中引入它。
import image from '@rollup/plugin-image'
import typescript2 from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    {
      /**
       * 强制插件排序
       * 为了与某些 Rollup 插件兼容，可能需要强制修改插件的执行顺序，或者只在构建时使用。这应该是 Vite 插件的实现细节。可以使用 enforce 修饰符来强制插件的位置
       * pre：在 Vite 核心插件之前调用该插件
       * 默认：在 Vite 核心插件之后调用该插件
       * post：在 Vite 构建插件之后调用该插件
       */
      ...image(),
      enforce: 'pre'
    },
    {
      /**
       * 按需应用
       * 默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。如果插件在服务或构建期间按需使用，请使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用
       */
      ...typescript2(),
      apply: 'build'
    }
  ]
})

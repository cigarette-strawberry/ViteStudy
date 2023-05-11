<script setup>
import { a } from '../utils/my-dep' // NPM 依赖解析和预构建

import '../styles/index.css' // 导入 .css 文件将会把内容插入到 <style> 标签中，同时也带有 HMR 支持。也能够以字符串的形式检索处理后的、作为其模块默认导出的 CSS。

import aa from '../styles/foo.css?inline' // 禁用 CSS 注入页面 自动注入 CSS 内容的行为可以通过 ?inline 参数来关闭。在关闭时，被处理过的 CSS 字符串将会作为该模块的默认导出，但样式并没有被注入到页面中。

/* import text from '../styles/index.module.css' // CSS Modules   任何以 .module.css 为后缀名的 CSS 文件都被认为是一个 CSS modules 文件。导入这样的文件会返回一个相应的模块对象
document.getElementsByTagName('h2').class = text.h2 */

import imgUrl from '../assets/vue.svg' // 导入一个静态资源会返回解析后的 URL    // /src/assets/vue.svg

import qq from '../utils/example.json' // 导入整个对象
import { q } from '../utils/example.json' // JSON 可以被直接导入 —— 同样支持具名导入 // 对一个根字段使用具名导入 —— 有效帮助 treeshaking！
console.log(qq, q)

console.log(import.meta.env, import.meta.env.VITE_SOME_KEY)

defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ a }}</h2>
  <img :src="imgUrl" alt="" />
</template>

<style scoped></style>

/*
 * @Author: Marshall
 * @Date: 2023-07-12 10:20:39
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-12 10:47:49
 * @Description: 
 * @FilePath: /wangminhua-fe.github.io/docs/.vitepress/config.ts
 */
import { defineConfig } from "vitepress";

export default defineConfig({
  appearance: true, // 夜间模式切换
  title: "Marshall的学习笔记",
  description: "记录和分享",
  lang: "zh-CN",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favico.png" }]],
  themeConfig: {
    siteTitle: "Marshall的学习笔记",
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "Vue3", link: "/vue3/index" },
      { text: "React", link: "/react" },
      { text: "可视化", link: "/datav" },
    ],
  },
});
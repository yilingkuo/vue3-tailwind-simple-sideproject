# ⚡ Vite ✔ Vue 3 🌻 Tailwind CSS

## 策略
- 先熟悉所有工具
- 根據wireframe勾勒出大致版型(page/views & component)與設定router
- 完成所有功能條件
- 美化精進使用者體驗

## 步驟
- 安裝Vite官網上提及的template 已包含vue3, tailwindcss
    ```sh
    npx degit web2033/vite-vue3-tailwind-starter vvt-app
    cd vvt-app
    ```
    並執行
    ```sh
    npm install
    npm run dev
    ```
    確認專案可正常執行
- 補上其他所需package (pug, firebase)
    ```sh
    npm i vite-plugin-pug
    npm i firebase
    ```
- 在firebase創建專案
- 初步建立好repo以後 使用Netlify deploy live demo

## 困難點
- 初次接觸Vue3 Tailwind Pug Firebase 使用上花了很多心力熟悉
    尤其為求效率使用html2pug 快速轉換成pug 才發現快速不等於正確，
    1. 會與tailwind的RWD設計(md:xxx,lg:xxx)衝突,需要將html tag寫出來並補上括號(div(class='xxxx'))
    2. 為了正確是別component alias 也要補上括號(ComponentName(class='xxxx'))
<!-- ![Vite, Vue, Tailwind CSS](https://user-images.githubusercontent.com/11320080/111277027-a9384c00-8640-11eb-8323-21889bd7c609.png) -->

This starter template includes:

- [Vite](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Vue Router v4](https://github.com/vuejs/router)
- [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
  by the makers of Tailwind CSS
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

```sh
npm i
npm run dev
npm run build
npm run serve
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/web2033/vite-vue3-tailwind-starter)

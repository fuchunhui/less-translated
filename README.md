# less-translated

鉴于Less官方中文文档的更新不及时，目前无人持续维护的现状，推出对齐中文版本的翻译工作。

[Chinese doc 讨论](https://github.com/less/less-docs/issues/571)

## 初步想法

1. 基于 Nuxt.js 搭建服务。
2. 中英文位于 `contents` 目录下，支持新增其他语言内容。
3. 需要有同步英文文档内容到当前目录的脚本，按月更新，然后再同步更新翻译。

# Nuxt 3 Minimal Starter
Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

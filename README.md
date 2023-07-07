<h1>Nuxt JS + Tailwind CSS + ESLint
  <a
    href="https://nestjs.com/"
    target="blank"
  >
<br/>
    <img
      src="https://github.com/nuxt/nuxt.js/raw/dev/.github/nuxt.png"
      width="50"
      alt="Nest Logo"
    />
<img
      src="https://camo.githubusercontent.com/53b9876cd8e38928387c6824043b0e2772b15b1bfdb7f42d0864216abbf3dfe8/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
      width="200"
      alt="Nest Logo"
    />
<img
      src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg"
      width="50"
      alt="Nest Logo"
    />
  </a>
</h1>

## Features

This is a Nuxt JS + Tailwind CSS boilerplate code with preconfigured libraries and packages with the following features:

- Preconfigured [VueTailwind](https://www.vue-tailwind.com/) with highly customizable tailwind module
- Integrated [nuxt/axios](https://axios.nuxtjs.org/) for promise based HTTP client
- Integrated [nuxt/auth](https://auth.nuxtjs.org/) for authentication
- Integrated [nuxt-img](https://image.nuxtjs.org/components/nuxt-img/) to replace vanilla `<img>` HTML tag for better image optimization
- Smooth configurable page, layout transition at `@/assets/css/main`
- Built-in awesome content loader using [vue-content-loader](https://www.npmjs.com/package/vue-content-loader)
- Integrated [@babel/eslint-parser, prettier](https://www.npmjs.com/package/@babel/eslint-parser) for codes' rules & styles checking and formatting
- Integrated [vuex-map-fields](https://www.npmjs.com/package/vuex-map-fields) for form data binding
- https://www.npmjs.com/package/nuxt-lazysizes
- https://www.npmjs.com/package/nuxt-svg-loader
- https://nuxtjs.org/docs/configuration-glossary/configuration-components/

## Setup Guide

**Be aware that** you might have to add **BASE_URL** to your environment variable in case you build for production.

### Installation

For a confortable use during the coding, please install the Tailwind CSS IntelliSense plugin on VSC

```bash

$ nvm list
$ nvm use v16.14.0
$ git clone https://github.com/anthony-roux/vroom-back-office
$ cd vroom-back-office
$ yarn install
$ yarn dev
```

Visit http://localhost:3000/

### Production Guide

```bash
# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

### With Docker

Comming Soon!

### Nice to have in the pocket

Tailwind CSS Cheat Sheet:
https://nerdcave.com/tailwind-cheat-sheet

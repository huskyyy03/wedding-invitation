// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tsconfigPaths(), tailwindcss()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('.', import.meta.url)),
        '@': fileURLToPath(new URL('.', import.meta.url))
      }
    }
  },
  app: {
    baseURL: '/wedding-invitation/',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "지언 ♥ 은지 결혼식 초대",
      meta: [{ name: "description", content: "HAPPY WEDDING" }],
    },
  },
  image: {
    quality: 80,
    format: ["webp"],
  },
  nitro: {
    preset: "static",
  },
  typescript: {
    typeCheck: true,
  },
});

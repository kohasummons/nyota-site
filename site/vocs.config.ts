import { defineConfig } from "vocs";
import { sidebar } from "./sidebar";

export default defineConfig({
  title: "nyota",
  description:
    "fast, modular, extensible crypto-native AI agent platform written in Rust",
  titleTemplate: "%s · nyota",
  rootDir: ".",
  sidebar,
  theme: {
    accentColor: {
      light: "#1b1c16",
      dark: "#e9f450",
    },
    variables: {
      color: {
        background: { light: "#ffffff", dark: "#121211" },
      },
    },
  },
  iconUrl: {
    light: "/favicons/icon-nyota.png",
    dark: "/favicons/icon-nyota.png",
  },
  logoUrl: { light: "/logo-nyota-light.svg", dark: "/logo-nyota-light.svg" },
  ogImageUrl: {
    "/": "/og-image.png",
    "/docs":
      "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  },
  topNav: [
    { text: "Docs", link: "/docs/getting-started", match: "/docs" },
    {
      text: "Plugins",
      link: "/docs/plugins",
      match: "/plugins",
    },
  ],
});

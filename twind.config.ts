import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      }
    },
  }
} as Options;

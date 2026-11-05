// @ts-check
import { defineConfig } from "astro/config";
import { webcore } from "webcoreui/integration";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), webcore()],
});

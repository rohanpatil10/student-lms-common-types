const { defineConfig } = require("tsup");

module.exports = defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  target: "es2022",
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: false,
  external: ["esbuild"],
  treeshake: true
});
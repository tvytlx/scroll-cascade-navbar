import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import babel from "@rollup/plugin-babel"; // Transpile/polyfill with reasonable browser support
import PostCSS from "rollup-plugin-postcss";
import scss from "rollup-plugin-scss";
export default {
  input: "src/index.js", // Path relative to package.json
  output: {
    name: "CascadeNavbar",
    exports: "named",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    resolve(),
    vue({
      preprocessStyles: true,
      cssModulesOptions: {
        generateScopedName: "[local]___[hash:base64:5]",
      },
    }),
    PostCSS(),
    commonjs(),
    // scss(),
    babel({ babelHelpers: "bundled" }),
  ],
};

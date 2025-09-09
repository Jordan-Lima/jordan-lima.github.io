module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/jordan-lima.github.io/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/8d790_52b1f064._.js",
  "build/chunks/[root-of-the-server]__6dd1e1f0._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/jordan-lima.github.io/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];
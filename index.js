const compiler = require("vue-template-compiler");
const { compileTemplate } = require("@vue/component-compiler-utils");
const loaderUtils = require("loader-utils");

module.exports = function(source, map) {
  const options = loaderUtils.getOptions(this) || {};
  const isProduction =
    options.productionMode ||
    this.minimize ||
    process.env.NODE_ENV === "production";
  const isServer = this.target === "node";

  const query = loaderUtils.parseQuery(this.resourceQuery);
  const slotName = query.name || "default";

  // for vue-component-compiler
  const compilerOptions = {
    source,
    filename: this.resourcePath,
    compiler,
    compilerOptions: {
      outputSourceRange: true
    },
    // allow customizing behavior of vue-template-es2015-compiler
    transpileOptions: options.transpileOptions,
    transformAssetUrls: options.transformAssetUrls || true,
    isProduction,
    isFunctional: false,
    optimizeSSR: isServer && options.optimizeSSR !== false,
    prettify: options.prettify
  };

  const compiled = compileTemplate(compilerOptions);

  const condition = query["v-if"]
    ? `(() => {
        return ${query["v-if"]}
    })()`
    : "true";

  this.callback(
    null,
    `import bind from 'vue-slot-loader/bindSlot.js'
      
        export default function (Component) {
            ${compiled.code}
            bind(Component, function () {
                return ${condition} ? render.call(this) : null
            }, ${JSON.stringify(slotName)})
        }`,
    map
  );
};

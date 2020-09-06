# Vue Slot Loader
Use this loader to override parent component slot.

## Example
```html
<!-- Base component -->
<template>
  <div>
    <h1>Base Component</h1>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
```

Now in the child component you can:

```html
<!-- Base component -->
<!-- Pass 'name' attribute to slot tag override named slots -->
<slot>
  <span>Overrided content</span>
</slot>

<script>
export default {
    extends: Base
}
</script>
```

## Installation

### Vue CLI Project (Webpack chain)

```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue-slot')
      .resourceQuery(/blockType=slot/)
      .use('vue-slot-loader')
      .loader('vue-slot-loader');
  }
};
```

### Webpack config

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        resourceQuery: /blockType=slot/,
        loader: 'vue-slot-loader'
      }
    ]
  }
};
```

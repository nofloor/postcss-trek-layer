function trekLayer(options = {}) {
  return {
    postcssPlugin: 'postcss-trek-layer',
    Declaration(decl) {
      if (decl.prop === '-trek-layer') {
        const zIndex = decl.value.replace(/\s\s?/g, '');
        decl
          .before('position: absolute')
          .before('left: 0')
          .before('top: 0')
          .before(`z-index: ${zIndex}`)
          .before('width: 100%')
          .before('height: 100%')
          .remove();
      }
    }
  }
}

trekLayer.postcss = true;

module.exports = trekLayer;
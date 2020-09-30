class Decl {
  constructor(value) {
    this.prop = '-trek-layer';
    this.value = value;
    this.befores = [];
    this.afters = [];
  }
  
  before(string) {
    this.befores.push(string);
    return this;
  }
  
  after(string) {
    this.afters.push(string);
    return this;
  }
  
  remove() {
    return this;
  }
}

test('Layer Properties', () => {
  const trekLayer = require('./index')();
  
  const decl = new Decl('3');
  trekLayer.Declaration(decl);
  expect(decl.befores.join('-')).toBe('position: absolute-left: 0-top: 0-z-index: 3-width: 100%-height: 100%');
  
  decl.befores = [];
  decl.value = '10';
  trekLayer.Declaration(decl);
  expect(decl.befores.join('-')).toBe('position: absolute-left: 0-top: 0-z-index: 10-width: 100%-height: 100%');
});
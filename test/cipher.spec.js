describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  
  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "OVSH TBUKV" para " HOLA MUNDO" con displace 33', () => {
      assert.equal(cipher.encode(33, "HOLA MUNDO"), 'OVSH TBUKV');
    });
    it('debería retornar "ovsh tbukv" para "hola mundo" con displace 33', () => {
      assert.equal(cipher.encode(33, "hola mundo"), 'ovsh tbukv');
    });
    it('debería retornar "VHFH XLMTL para "COMO ESTAS" con displace -33', () => {
      assert.equal(cipher.encode(-33, "COMO ESTAS"), 'VHFH XLMTL');
    });
    it('debería retornar "vhfh xlmtl para "como estas" con displace -33', () => {
      assert.equal(cipher.encode(-33, "como estas"), 'vhfh xlmtl');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "HOLA MUNDO" para "OVSH TBUKV" con displace 33', () => {
      assert.equal(cipher.decode(33, "OVSH TBUKV"), 'HOLA MUNDO');
    });
    it('debería retornar "hola mundo" para "ovsh tbukv" con displace 33', () => {
      assert.equal(cipher.decode(33, "ovsh tbukv"), 'hola mundo');
    });
  });

});

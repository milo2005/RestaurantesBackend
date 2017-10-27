
import * as assert from 'assert';
import * as mocha from 'mocha';

describe("Calculadora", function(){
  describe("Aritmeticas", function(){

    let n1:number;
    let n2:number;

    before(function(){
      n1 = 3;
      n2 = 4;
    });
    
    it("Suma", function(){
        assert.equal(n1+n2, 7);
    });

    it("Resta");
    it("Multiplicacion");
    it("Division")

  });
});
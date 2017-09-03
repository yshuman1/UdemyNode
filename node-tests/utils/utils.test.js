const expect = require('expect');

const utils = require('./utils');

describe('utils', () => {
  
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      
      expect(res).toBe(44).toBeA('number');
      // if (res !== 44) {
      //     throw new Error(`Expected 44, but got ${res}.`);
      // }
      
    });
  });
  

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (product) => {
        expect(product).toBe(16).toBeA('number');
        done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);
    
    expect(res).toBe(9).toBeA('number');
    
  });

  it('should set first and last names', () => {
    var user = {location: 'brentwood', age: 39};
    var res = utils.setName(user, 'Yasin Shuman');

    expect(res).toInclude({firstName: 'Yasin', lastName: 'Shuman'});
  });
});




// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'Yasin'}).toEqual({name: 'Yasin'});
//     // expect([2,3,4]).toInclude[1];
//     expect({
//         name: 'Yasin',
//         age: 39,
//         location: 'Brentwood'
//     }).toExclude({
//         age:30
//     })
// });
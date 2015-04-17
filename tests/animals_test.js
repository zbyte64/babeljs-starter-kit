import expect from 'expect.js';
import {Cat, Dog} from '../src/animals';


describe('Animals', () => {
  describe('Cat', () => {
    it('speak', () => {
      var cat = new Cat()

      expect(cat.speak()).to.be('meow');
    })
  });

  describe('Dog', () => {
    it('speak', () => {
      var dog = new Dog()

      expect(dog.speak()).to.be('wolf');
    })
  });
})

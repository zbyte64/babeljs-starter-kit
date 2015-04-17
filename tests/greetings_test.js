import expect from 'expect.js';
import {hello, roleCall} from '../src/greetings';


describe('greetings', () => {
  describe('hello', () => {
    it('prefixes', () => {
      expect(hello('Jason')).to.be('hello Jason');
    })
  });

  describe('roleCall', () => {
    it('asks for each argument', () => {
      expect(roleCall('Jason')).to.be.eql([
        'Where is Jason?\n'
      ]);
      expect(roleCall('Jona', 'Derek')).to.be.eql([
        'Where is Jona?\n',
        'Where is Derek?\n',
      ]);
    })
  });
})

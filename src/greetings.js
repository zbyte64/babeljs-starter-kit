import _ from 'lodash';

export function hello(name) {
  //an example of string templating
  //https://babeljs.io/docs/learn-es6/#template-strings
  return `hello ${name}`;
}

export function roleCall() {
  //an example of arrow functions
  //https://babeljs.io/docs/learn-es6/#arrows
  return _.map(arguments, name => `Where is ${name}?\n`);
}

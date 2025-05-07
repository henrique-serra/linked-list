import LinkedList from "./linkedList.js";
import util from 'node:util';

let list = new LinkedList();


console.log(list)
console.log(list.append('dog'));
console.log(list.append('cat'));
console.log(list.prepend('rabbit'));
console.log(list.append('parrot'));
console.log(list.append('dragon'));
console.log(list.toString());
console.log(list.pop());
console.log(util.inspect(list, { depth: null, colors: true }));
console.log(list.toString());
"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  };

  size = function(){
    if (this.left === null && this.right === null) return 1;

    if (this.left !== null && this.right === null) return 1 + this.left.size();

    if (this.left === null && this.right !== null) return 1 + this.right.size();

    else return 1 + this.left.size() + this.right.size();
  };

  insert = function(data){
    if (data > this.value){
      if (this.right) this.right.insert(data);
      else this.right = new BinarySearchTree(data);
    } else {
      if (this.left) this.left.insert(data);
      else this.left = new BinarySearchTree(data);
    }
  };

  contains = function(data){
    if (this.value === data) return true;
    
    if (data > this.value){
      if (this.right === null) return false;
      else return this.right.contains(data);
    } else {
      if (this.left === null) return false;
      else return this.left.contains(data);
    }
  };

  depthFirstForEach = function(cb, key){
    switch (key) {
      
      case 'post-order':
        if(this.left != null) this.left.depthFirstForEach(cb, key);
        if(this.right != null) this.right.depthFirstForEach(cb, key);
        cb(this.value)
        break;

      case 'pre-order':
        cb(this.value)
        if(this.left != null) this.left.depthFirstForEach(cb, key);
        if(this.right != null) this.right.depthFirstForEach(cb, key);
        break;
    
      case 'in-order':
        if(this.left != null) this.left.depthFirstForEach(cb, key);
        cb(this.value)
        if(this.right != null) this.right.depthFirstForEach(cb, key);
        break;

      default: 
        if(this.left != null) this.left.depthFirstForEach(cb, key);
        cb(this.value)
        if(this.right != null) this.right.depthFirstForEach(cb, key);
        break;
    }
  };

  breadthFirstForEach = function(cb, array = []){
    if(this.left != null) array.push(this.left);
    if(this.right != null) array.push(this.right);
    cb(this.value)
    if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
  };
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

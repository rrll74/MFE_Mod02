interface Hoja {
  info: String;
}

interface Nodo {
  father: Nodo | null;
  sons: Nodo[];
  info: Hoja;
}

class Tree {
  tree: Nodo;

  constructor(info: Hoja) {
    this.tree = {
      father: null,
      sons: [],
      info: info,
    };
  }

  // Implementada función para probar estructura.
  // Para su correcto funcionamiento habría que crear todos los métodos
  // de inserción, mofificación, eliminación, recorrido y búsqueda en el árbol, junto a su visualización de hojas.

  addSon(info: Hoja) {
    const son: Nodo = {
      father: this.tree,
      sons: [],
      info: info,
    };
    this.tree.sons.push(son);
  }
}

const root = new Tree({ info: "Root" });
root.addSon({ info: "Son 1" });
root.addSon({ info: "Son 2" });

console.log(root);

"use strict"


class Storage{
    constructor(item){
        this.item = item;
    }
    getItems(){
        return this.item;
    }
    addItem(item){
        this.item = this.item.push(item);
        return this.item;
    }
    removeItem(itemm){
        this.item = this.item.pop();
        return this.item;
    }
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.item); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
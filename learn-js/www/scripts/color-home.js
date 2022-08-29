export class ColorHome extends HTMLElement {

  #colors = [];
  #deleteColor = () => undefined;
  #deleteColorFns = new Map();

  connectedCallback() {
    const header = document.createElement('h1');
    header.textContent = this.getAttribute("data-header-text") ?? "Color Tool";
    this.appendChild(header);

    const colorList = document.createElement('ul');
    this.appendChild(colorList);
    this.#updateColorList();
  }

  #updateColorList() {

    console.log("update color list");

    const colorList = this.querySelector('ul');
    const colorListItems = colorList.children;
    const colorListItemsLength = colorListItems.length;

    const updateExistingListItemsLength = Math.min(
      colorListItemsLength,
      this.#colors.length,
    );

    Array.from(colorList.children).forEach((colorListItem, i) => {
      const color = this.#colors[i];
      colorListItem.querySelector('span').textContent = color;

      const deleteColorButton = colorListItem.querySelector('button');
      const oldDeleteColorFn = this.#deleteColorFns.get(deleteColorButton);
      deleteColorButton.removeEventListener('click', oldDeleteColorFn);

      const newDeleteColorFn = () => this.#deleteColor(color);
      this.#deleteColorFns.set(deleteColorButton, newDeleteColorFn);
      deleteColorButton.addEventListener('click', newDeleteColorFn);
    });

    // imperative code below, watch out!
    let counter = updateExistingListItemsLength;

    while (counter < colorListItemsLength) {
      const colorListItem = colorListItems[colorListItems.length - 1];
      const colorListItemButton = colorListItem.querySelector("button");

      const deleteColorListFn = this.#deleteColorFns.get(colorListItemButton);

      colorListItemButton.removeEventListener("click", deleteColorListFn);
      this.#deleteColorFns.delete(colorListItemButton);

      colorListItem.remove();
      counter++;
    }

    while(counter < this.#colors.length) {
      
      colorList.appendChild(this.#createColorListItem(this.#colors[counter]));
      counter++;
    }

  }

  #createColorListItem(color) {
    
    const colorText = document.createElement('span');
    colorText.textContent = color;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";

    const deleteColorFn = () => this.#deleteColor(color);
    this.#deleteColorFns.set(deleteButton, deleteColorFn)

    deleteButton.addEventListener('click', deleteColorFn);
    
    const colorListItem = document.createElement('li');
    colorListItem.appendChild(colorText);
    colorListItem.appendChild(deleteButton);

    return colorListItem;
  }

  get colors() {
    return this.#colors;
  }

  set colors(value) {
    console.log("calling set colors");
    if (this.#colors !== value) {
      this.#colors = value;
      this.#updateColorList();
    }
  }

  set onDeleteColor(fn) {
    if (typeof fn !== 'function') {
      throw new Error('on delete color must be a function');
    }
    this.#deleteColor = fn;
  }



}
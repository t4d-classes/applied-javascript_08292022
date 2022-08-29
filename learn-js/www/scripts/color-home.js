export class ColorHome extends HTMLElement {

  #colors = [];
  #deleteColor = () => undefined;

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
      colorListItem.querySelector('span').textContent = this.#colors[i];
    });

    // imperative code below, watch out!
    let counter = updateExistingListItemsLength;

    while (counter < colorListItemsLength) {
      colorListItems[colorListItems.length - 1].remove();
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
    deleteButton.addEventListener('click', () => this.#deleteColor(color));
    
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
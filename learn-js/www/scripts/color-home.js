export class ColorHome extends HTMLElement {

  #colors = [];

  connectedCallback() {
    const header = document.createElement('h1');
    header.textContent = this.getAttribute("data-header-text") ?? "Color Tool";
    this.appendChild(header);

    const colorList = document.createElement('ul');
    this.appendChild(colorList);
    this.#updateColorList();
  }

  #updateColorList() {

    const colorList = this.querySelector('ul');
    const colorListItems = colorList.children;
    const colorListItemsLength = colorListItems.length;

    const updateExistingListItemsLength = Math.min(
      colorListItemsLength,
      this.#colors.length,
    );

    let counter = 0;
    while (counter < updateExistingListItemsLength) {
      colorListItems[counter].textContent = this.#colors[counter];
      counter++;
    }

    while (counter < colorListItemsLength) {
      colorListItems[colorListItems.length - 1].remove();
      counter++;
    }

    while(counter < this.#colors.length) {
      const colorListItem = document.createElement('li');
      colorListItem.textContent = this.#colors[counter];
      colorList.appendChild(colorListItem);
      counter++;
    }



  }

  get colors() {
    return this.#colors;
  }

  set colors(value) {
    this.#colors = value;
    this.#updateColorList();
  }



}
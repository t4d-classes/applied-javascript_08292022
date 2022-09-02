class ColorHome extends HTMLElement {

  #shadowRoot = null;
  #colors = [];
  #onDeleteColor = () => null;
  #deleteColor = () => null;
  #onAddColor = () => null;
  #addColor = () => null;

  get colors() {
    return this.#colors;
  }

  set colors(colors) {
    if (colors !== this.#colors) {
      this.#colors = colors;
      this.#updateColorList();
    }
  }

  set onDeleteColor(fn) {
    if (typeof fn !== 'function') {
      throw new Error("onDeleteColor must be a function.");
    }
    if (fn !== this.#onDeleteColor) {
      this.#onDeleteColor = fn;
    }
  }

  set onAddColor(fn) {
    if (typeof fn !== 'function') {
      throw new Error("onAddColor must be a function.");
    }
    if (fn !== this.#onAddColor) {
      this.#onAddColor = fn;
    }
  }

  connectedCallback() {

    const rootElement = document
      .querySelector('#color-home-tpl')
      .content
      .cloneNode(true);

    const colorList = rootElement.querySelector('ul');

    this.#deleteColor = (e) => {
      if (e.target instanceof HTMLButtonElement) {
        this.#onDeleteColor(e.target.dataset["colorId"]);
      }
    };

    colorList.addEventListener('click', this.#deleteColor);

    const colorForm = rootElement.querySelector('form');

    const addColorButton = colorForm.querySelector('button');

    const colorFormName = colorForm.querySelector('[name=name]');

    this.#addColor = () => {
      const color = {
        name: colorFormName.value,
        hexcode: colorForm.querySelector('[name=hexcode]').value,
      };
      this.#onAddColor(color);
      this.#clearColorForm();
    };

    addColorButton.addEventListener('click', this.#addColor);

    this.#shadowRoot = this.attachShadow({mode: 'open'});
    this.#shadowRoot.appendChild(rootElement);

    this.#updateColorList();
    colorFormName.focus();
  }

  disconnectedCallback() {
    const colorList = rootElement.querySelector('ul');
    colorList.removeEventListener('click', this.#deleteColor);
    const addColorButton = rootElement.querySelector('form > button');
    addColorButton.removeEventListener('click', this.#addColor);
  }

  #updateColorList() {
    const colorList = this.#shadowRoot.querySelector("ul");
    const colorListItems = colorList.children;
    const colorListItemsLength = colorListItems.length;
    const updateExistingListItemsLength = Math.min(
      colorListItemsLength,
      this.#colors.length,
    );

    let counter = 0;
    while (counter < updateExistingListItemsLength) {
      this.#updateColorListItem(
        colorListItems[counter],
        this.#colors[counter],
      );
      counter++;
    }

    while (counter < colorListItemsLength) {
      colorListItems[colorListItems.length - 1].remove();
      counter++;
    }

    while (counter < this.#colors.length) {
      colorList.appendChild(
        this.#createColorListItem(this.#colors[counter]),
      );
      counter++;
    }
  }

  #formatColorListItemText(color) {
    return `${color.name} ${color.hexcode}`;
  }

  #updateColorListItem(colorListItem, color) {
    const colorListItemText = colorListItem.querySelector('span');
    colorListItemText.textContent = this.#formatColorListItemText(color); 
    const colorListItemDeleteButton = colorListItem.querySelector('button');
    colorListItemDeleteButton.dataset['colorId'] = color.id;
  }

  #createColorListItem(color) {
    const colorListItemText = document.createElement('span');
    const colorListItemDeleteButton = document.createElement('button');
    colorListItemDeleteButton.textContent = "X";
    const colorListItem = document.createElement('li');
    colorListItem.appendChild(colorListItemText);
    colorListItem.appendChild(colorListItemDeleteButton);
    this.#updateColorListItem(colorListItem, color);
    return colorListItem;
  }

  #clearColorForm() {
    const colorForm = this.#shadowRoot.querySelector('form');
    const colorFormName = colorForm.querySelector('[name=name]');
    colorFormName.value = '';
    colorForm.querySelector('[name=hexcode]').value = '';
    colorFormName.focus();
  }
  
}

window.customElements.define('color-home', ColorHome);
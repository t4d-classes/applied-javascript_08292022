

export class ColorStore {

  #colors = [];

  #subscribers = [];

  get colors() {
    return this.#colors;
  }

  constructor(initialColors) {
    this.#colors = [
      ...initialColors,
    ];
  }
  
  deleteColor = (colorId) => {
    this.#colors = this.#colors.filter(c => c.id !== parseInt(colorId, 10));
    this.#updateSubscribers();
  };
  
  addColor = (color) => {
    this.#colors = [
      ...this.#colors,
      {
        ...color,
        id: Math.max(...this.#colors.map(c => c.id), 0) + 1,
      },
    ];
    this.#updateSubscribers();
  };

  subscribe(subscriber) {
    this.#subscribers.push(subscriber);

    return () => {
      this.#subscribers.splice(subscriber, 1);
    };
  }

  #updateSubscribers() {
    this.#subscribers.forEach(subscriber => {
      subscriber();
    });
  }

}
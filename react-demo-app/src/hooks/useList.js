import { useState } from 'react';

export const useList = (initialItems) => {

  const [ items, setItem ] = useState([ ...initialItems ]);

  const append = item => {
    setItem([
      ...items, // make a copy of the array
      {
        ...item,
        id: Math.max(...items.map(c => c.id), 0) + 1,
      },
    ]);
  };

  const replace = item => {
    const newItem = [...items];
    const itemIndex = items.findIndex(c => c.id === item.id);
    newItem[itemIndex] = item;
    setItem(newItem);
  };

  const remove = itemId => {
    setItem(items.filter(c => c.id !== itemId));
  }

  return [ items, append, replace, remove ];




};
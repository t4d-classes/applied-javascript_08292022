import { useState } from 'react';

import { Item, ItemId } from '../models/item';

type AppendItem<S extends Item> = (item: Omit<S, 'id'>) => void;
type ReplaceItem<S extends Item> = (item: S) => void;
type RemoveItem = (item: ItemId) => void;

type UseList = <T extends Item>(initialItems: T[]) => [
  T[],
  AppendItem<T>,
  ReplaceItem<T>,
  RemoveItem,
];

export const useList: UseList = <T extends Item>(initialItems: T[]) => {

  const [ items, setItems ] = useState([ ...initialItems ]);

  const appendItem: AppendItem<T> = (item) => {
    setItems([
      ...items,
      {
        ...item,
        id: Math.max(...items.map(c => c.id), 0) + 1,
      } as T,
    ]);
  };

  const replaceItem: ReplaceItem<T> = (item) => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newItems = [...items];
    newItems[itemIndex] = item;
    setItems(newItems);
  }; 

  const removeItem: RemoveItem = (itemId) => {
    setItems(items.filter(c => c.id !== itemId));
  };

  return [ items, appendItem, replaceItem, removeItem ];

};

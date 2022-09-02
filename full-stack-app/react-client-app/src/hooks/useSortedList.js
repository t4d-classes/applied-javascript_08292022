import { useState } from "react";
import { useList } from "./useList";


const sortItems = (items, compareFn) => {
  return [...items].sort(compareFn);
};

export const useSortedList = (
  compareFn, initialItems = []) => {

  const [
    items, appendItem,
    replaceItem, removeItem,
  ] = useList(initialItems);

  const [sortDir, setSortDir] = useState('asc');


  const sortAsc = () => setSortDir('asc');

  const sortDesc = () => setSortDir('desc');

  return [
    sortItems(items, compareFn(sortDir)),
    sortDir,
    appendItem,
    replaceItem,
    removeItem,
    sortAsc,
    sortDesc,
  ];

}
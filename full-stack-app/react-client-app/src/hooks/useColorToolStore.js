import { useState } from 'react';
import { useSortedList } from '../hooks/useSortedList';

const sortByColorName = (sortDir) => (a, b) => {

  const alc = String(a.name).toLowerCase();
  const blc = String(b.name).toLowerCase();

  if (blc < alc) {
    return (sortDir === 'asc') ? 1 : -1;
  } else if (blc > alc) {
    return (sortDir === 'asc') ? -1 : 1;
  } else {
    return 0;
  }

}

export const useColorToolStore = (initialColors) => {

  const [
    colors, , appendColor, , ,
    sortColorsAsc, sortColorsDesc,
  ] = useSortedList(sortByColorName, initialColors);

  const [showHexcode, setShowHexcode] = useState(false);

  const toggleHexcode = () => setShowHexcode(!showHexcode);

  return {
    colors,
    showHexcode,
    appendColor,
    sortColorsAsc,
    sortColorsDesc,
    toggleHexcode,
  }

}
import { useState } from "react";

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const addColor = color => {

    setColors([
      ...colors, // make a copy of the array
      {
        ...color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm onSubmitColor={addColor} />
    </>
  );

};
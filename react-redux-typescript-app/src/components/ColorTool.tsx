import { useColorTool } from '../hooks/useColorTool';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = () => {

  const { colors, addColor } = useColorTool();

  return (
    <>
      <ToolHeader headerText='Color Tool' />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
};
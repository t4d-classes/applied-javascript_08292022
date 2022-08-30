import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';

export const ColorTool = (props) => {

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={props.colors} />
    </>
  );

};
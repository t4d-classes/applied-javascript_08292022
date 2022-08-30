import { ToolHeader } from './ToolHeader';
import { CarTable } from "./CarTable";

export const CarTool = ({ cars }) => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
    </>
  );

};
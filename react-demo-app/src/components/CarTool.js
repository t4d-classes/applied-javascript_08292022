import { ToolHeader } from './ToolHeader';
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = ({ cars }) => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <CarForm />
    </>
  );

};
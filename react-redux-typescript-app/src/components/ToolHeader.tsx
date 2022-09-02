

export type ToolHeaderProps = {
  headerText: string;
}

export const ToolHeader = (props: ToolHeaderProps) => {

  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );

};
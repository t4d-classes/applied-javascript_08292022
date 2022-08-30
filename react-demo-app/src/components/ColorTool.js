export const ColorTool = (props) => {



  return (
    <div>
      <h1>Color Tool</h1>
      <ul>
        {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
    </div>
  );

};
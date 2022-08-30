export const ColorList = ({ colors }) => {

  return (
    <ul>
      {colors.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>    
  );

};
export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  return (
    <div>
      <h1>Color Tool</h1>
      <ul>
        {colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
    </div>
  );

};
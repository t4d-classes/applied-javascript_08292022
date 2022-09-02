

export const ColorList = (props) => {

  return (
      <>
          <div>
              <button onClick={props.onSortAsc}>
                  Sort Asc</button>
              <button onClick={props.onSortDesc}>
                  Sort Desc</button>
              <button onClick={props.onToggleHexcode}>
                  Toggle Hexcode</button>
          </div>
          <ul>
              {props.colors.map(color =>
                  <li key={color.id}>
                      {color.name} - 
                      {props.showHexcode && color.hexcode}
                  </li>)}
          </ul>        
      </>
  );


};

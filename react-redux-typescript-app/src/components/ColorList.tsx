import { Color } from '../models/colors';

export type ColorListProps = {
  colors: Color[];
};

export const ColorList = (props: ColorListProps) => {

  return (
    <ul>
      {!props.colors.length && <li>No Colors</li>}
      {props.colors.map(
        (c) => <li key={c.id}>{c.name}</li>)}
    </ul>
  )

};

ColorList.defaultProps = {
  colors: [],
};
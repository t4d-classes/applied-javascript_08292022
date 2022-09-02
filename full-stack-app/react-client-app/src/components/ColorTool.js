import { useColorToolStore } from '../hooks/useColorToolStore';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';


;

export function ColorTool(props) {

    // ... is the array spread operator used to copy items from
    // props.colors into a new array that the component owns
    // const store = useColorToolStore([...props.colors]);

    const { 
        colors, showHexcode, sortColorsAsc,
        sortColorsDesc, toggleHexcode, appendColor,
    } = useColorToolStore([...props.colors]);


    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={colors}
                showHexcode={showHexcode}
                onSortAsc={sortColorsAsc}
                onSortDesc={sortColorsDesc}
                onToggleHexcode={toggleHexcode} />
            <ColorForm buttonText="Add Color"
                onSubmitColor={appendColor} />
        </>
    );

}
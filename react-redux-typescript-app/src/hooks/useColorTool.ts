import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { Color } from '../models/colors';
import { ColorToolState, ColorToolProps } from '../models/colorToolStore';
import { 
  refreshColors, appendColor } from '../actions/colorToolActions';

import { colorsSelector } from '../selectors/colorToolSelector';

export type UseColorTool = () => ColorToolProps;

export const useColorTool: UseColorTool = () => {

  const colors = useSelector<ColorToolState, Color[]>(colorsSelector);

  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    refreshColors: refreshColors,
    addColor: appendColor,
  }, dispatch), [dispatch]);


  useEffect(() => {
    boundActions.refreshColors();
  }, [boundActions]);

  return {
    colors,
    ...boundActions,
  };

};
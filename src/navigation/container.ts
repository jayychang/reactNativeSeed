import React from 'react';
import { createAppContainer } from 'react-navigation';

import RootStack from 'src/navigation/stack';
import { setTopLevelNavigator } from 'src/helpers/navigation'

const Container = createAppContainer(RootStack);

export default () => (
  <Container ref={ (ref) => { setTopLevelNavigator(ref) } } />
);

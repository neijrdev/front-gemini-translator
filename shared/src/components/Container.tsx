import React from 'react'
import {AuxProps} from '../types/index'


const Container = ({ children, ...props }: AuxProps) => {
  return <Container {...props}>{children}</Container>;
};

export default Container;
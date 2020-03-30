import Activation from './Activation';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const layoutStyle = {
  padding: 20,
  //border: '1px solid #DDD',
  height: 165,
  backgroundColor: '#FFF',
};

const ActivationLayout = props => (
  <div>
    <div style={layoutStyle}>
      <Activation />
      {props.children}
    </div>
  </div>
);

export default ActivationLayout;
import Feature from './Feature';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const Contents = styled.div`
  height: 300px;
  background-color: #f2f2f2;
  ${mediaQuery.lessThan('medium')`
    height: 900px;
    background-color: #f2f2f2;
  `}
`;

const FeatureLayout = props => (
  <div>
    <Contents>
      <Feature />
      {props.children}
    </Contents>
  </div>
);

export default FeatureLayout;
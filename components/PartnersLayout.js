import Partners from './Partners';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const Contents = styled.div`
  height: 350px;
  
  ${mediaQuery.lessThan('medium')`
    height: 800px;
  
  `}
`;


const PartnersLayout = props => (
  <div>
    <Contents>
      <Partners />
      {props.children}
    </Contents>
  </div>
);

export default PartnersLayout;
import Header from './Header';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const Contents = styled.div`
  height: 80px;
  background-color: #FFF;

  ${mediaQuery.lessThan('medium')`
    height: 55px;
    background-color: #FFF;
  `}
`;


const HeaderLayout = props => (
  <div>
    <Contents>
      <Header />
      {props.children}
    </Contents>
  </div>
);

export default HeaderLayout;

/*
#ffc3fe	(255,195,254)
#41e0f8	(65,224,248)
#14a3bb	(20,163,187)
#52c1be	(82,193,190)
#e8f7ff	(232,247,255)
*/
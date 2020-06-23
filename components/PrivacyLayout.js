import HeaderLayout from '../components/HeaderLayout';
import Privacy from './Privacy';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const Contents = styled.div`
  padding: 20px;
  height: 165px;
  ${mediaQuery.lessThan('medium')`
    padding: 20px;
    height: 240px;
  `}
`;

const PrivacyLayout = props => (
  <div>
    <Contents>
      <HeaderLayout></HeaderLayout>
      <Privacy />
      {props.children}
    </Contents>
  </div>
);

export default PrivacyLayout;
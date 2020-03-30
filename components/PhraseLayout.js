import Phrase from './Phrase';
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

const PhraseLayout = props => (
  <div>
    <Contents>
      <Phrase />
      {props.children}
    </Contents>
  </div>
);

export default PhraseLayout;
import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../utils/style';
import PrivacyLayout from '../../components/PrivacyLayout';


const Contents = styled.div`
  
  margin: auto;
  grid-gap: 40px 80px;
  grid-template-columns: 1fr;

  ${mediaQuery.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-gap: 20px 40px;
    
  `}
`;
/*

*/
const IndexPage = () => (
  <Contents>
    <PrivacyLayout/>
  </Contents>
);

export default IndexPage;
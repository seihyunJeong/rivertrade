import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const Box = styled.div`
  background:#f2f2f2;
  height: 280px;
  width: 200px;
  margin-left: 140px;
  ${mediaQuery.lessThan('medium')`
    background:#f2f2f2;
    height: 280px;
    width: 200px;
    margin-left: 140px;
  `}
`;

const ulStyle = {
    listStyle: 'none',
    display: 'inline',
};

const liStyle = {
  display: 'inline',
  padding: '0 10px 10px 0',
  float: 'left',
};
const h3Style = {
  textAlign: 'center',
  color: '#4a4a4a',
};
const h5Style = {
  textAlign: 'center',
  color: '#4a4a4a',
};

const layoutStyle = {
  //padding: 20,
  //border: '1px solid #DDD',
  height: '100%',
  maxWidth: '1200px',
  margin: 'auto',
};

const Feature = props => (
  <div id="feature" style={layoutStyle}>
    <br></br>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <Box>
          <br></br>
          <h3 style={h3Style}>Market Intelligence</h3>
          
          <h5 style={h5Style}>We analyze extensive market data and define the best products and to fulfill the specific market demands</h5>
        </Box>
      </li>
      <li style={liStyle}>
        <Box>
          <br></br>
          <h3 style={h3Style}>Sourcing Capability</h3>
          
          <h5 style={h5Style}>We screen and select that best manufacturing partners in order to deliver the highest quality products to each market</h5>
        </Box>
      </li>
      <li style={liStyle}>
        <Box>
        <br></br>
          <h3 style={h3Style}>Efficient Operation</h3>
          
          <h5 style={h5Style}>Based on the deep understanding of e-commerce ecosystem, we drive the sales through excellent marketing performances and spot-on customer targeting</h5>
        </Box>
      </li>
      
    </ul>
  </div>
);

export default Feature;
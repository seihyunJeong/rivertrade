import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const Box = styled.div`
  background:#14a3bb;
  height: 300px;
  width: 200px;
  margin-left: 62px;
  ${mediaQuery.lessThan('medium')`
    background:#14a3bb;
    height: 300px;
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
  color: '#FFF',
};
const h5Style = {
  textAlign: 'center',
  color: '#FFF',
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
          <br></br>
          <h5 style={h5Style}>Oh, say can you see by the dawn’s early light
What so proudly we hailed at the twilight’s last gleaming?
Whose broad stripes and bright stars thru the perilous fight,
O’er the ramparts we watched were so gallantly streaming?</h5>
        </Box>
      </li>
      <li style={liStyle}>
        <Box>
          <br></br>
          <h3 style={h3Style}>Seller Intelligence</h3>
          <br></br>
          <h5 style={h5Style}>And the rocket’s red glare, the bombs bursting in air,
Gave proof through the night that our flag was still there.
Oh, say does that star-spangled banner yet wave
O’er the land of the free and the home of the brave?</h5>
        </Box>
      </li>
      <li style={liStyle}>
        <Box>
        <br></br>
          <h3 style={h3Style}>FBA Intelligence</h3>
          <br></br>
          <h5 style={h5Style}>On the shore, dimly seen through the mists of the deep,
Where the foe’s haughty host in dread silence reposes,
What is that which the breeze, o’er the towering steep,
As it fitfully blows, half conceals, half discloses?</h5>
        </Box>
      </li>
      <li style={liStyle}>
        <Box>
        <br></br>
          <h3 style={h3Style}>Cross Board Intelligence</h3>
          <br></br>
          <h5 style={h5Style}>Now it catches the gleam of the morning’s first beam,
In full glory reflected now shines in the stream:
‘Tis the star-spangled banner! Oh long may it wave
O’er the land of the free and the home of the brave!</h5>
        </Box>
      </li>
    </ul>
  </div>
);

export default Feature;
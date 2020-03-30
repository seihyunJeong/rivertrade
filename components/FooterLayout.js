import Footer from './Footer';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const layoutStyle = {
  //marginLeft: 400,
  //marginRight: 400,
  //padding: 20,
  height: '160px',
  //border: '1px solid #DDD',
  backgroundColor: '#4a4a4a',

};



const FooterLayout = props => (
  <div style={layoutStyle}>
    <Footer />
    {props.children}
  </div>
);

export default FooterLayout;
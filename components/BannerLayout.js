import Banner from './Banner';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const layoutStyle = {
  //padding: 20,
  //border: '1px solid #AAA',
  maxWidth: '100%',
  //height: 'auto',
};

const BannerLayout = props => (
  <div>
    <div style={layoutStyle}>
      <Banner />
    </div>
  </div>
);

export default BannerLayout;
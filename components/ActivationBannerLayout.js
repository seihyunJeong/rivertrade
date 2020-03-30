import ActivationBanner from './ActivationBanner';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const layoutStyle = {
  //padding: 20,
 // border: '1px solid #DDD',
  width: '100%',
  height: 'auto',
};

const ActivationBannerLayout = props => (
  <div>
    <div style={layoutStyle}>
      <ActivationBanner />
      {props.children}
    </div>
  </div>
);

export default ActivationBannerLayout;
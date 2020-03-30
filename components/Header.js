import Link from 'next/link';
import styled from 'styled-components';
import { mediaQuery } from '../utils/style';

const linkStyle = {
  marginRight: 20,
  textDecoration: 'none',
};

const logoStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    marginLeft: '1px',
};


const LogoBox = styled.div`
  width: 200px;
  float: left;
  height: 50px;
  line-height: 100px;
  padding-left: 10px;
  ${mediaQuery.lessThan('medium')`
    width: 100px;
    float: left;
    height: 50px;
    line-height: 60px;
    padding-left: 10px;
  `}
`;

const fontStyle = {
  color: '#FFF',
  //fontSize: 20,
  marginRight: 20,
}
const FontBox = styled.div`
  height: 50px;
  line-height: 100px;
  font-size: 20px;
  float: right;
  ${mediaQuery.lessThan('medium')`
    font-size: 13px;
    line-height: 70px;
    float: right;
  
  `}
`;

const layoutStyle = {
  //padding: 20,
  height: '100%',
  maxWidth: '1200px',
  margin: 'auto',
};
/*
        <FontBox>
          <Link href="#mission">
            <a style={linkStyle}><font style={fontStyle}>Mission</font></a>
          </Link>
          <Link href="#feature">
            <a style={linkStyle}><font style={fontStyle}>Intelligence</font></a>
          </Link>
          <Link href="#partners">
            <a style={linkStyle}><font style={fontStyle}>Partners</font></a>
          </Link>
          <Link href="/amazon">
            <a style={linkStyle}><font style={fontStyle}>Product</font></a>
          </Link>
        </FontBox>

*/
const Header = () => (
  <div style={layoutStyle}>
      
          <a> <LogoBox><img  src="../static/default-monochrome-black.svg"/></LogoBox></a>

  </div>
   
  
);

export default Header;

/*
      <Link href="/amazon">
        <a style={linkStyle}><font style={fontStyle}>Amazon</font></a>
      </Link>
      <Link href="/naver">
        <a style={linkStyle}><font style={fontStyle}>Naver</font></a>
      </Link>
      <Link href="/shopee">
        <a style={linkStyle}><font style={fontStyle}>Shopee</font></a>
      </Link>
      <Link href="/">
        <a style={linkStyle}><font style={fontStyle}>Home</font></a>
      </Link>
      <Link href="#about">
        <a style={linkStyle}><font style={fontStyle}>About</font></a>
      </Link>
      <Link href="#feature">
        <a style={linkStyle}><font style={fontStyle}>Features</font></a>
      </Link>
      <Link href="#partners">
        <a style={linkStyle}><font style={fontStyle}>Partners</font></a>
      </Link>
      <Link href="/naver">
            <a style={linkStyle}><font style={fontStyle}>Naver</font></a>
          </Link>
          <Link href="/shopee">
            <a style={linkStyle}><font style={fontStyle}>Shopee</font></a>
          </Link>
*/

const layoutStyle = {
  //border: '1px solid #DDD',
  height: '100%',
  maxWidth: '1200px',
  margin: 'auto',
  marginLeft: '20px',
  
};
const whiteStyle = {
  color: '#FFF',
}

const Footer = () => (
  <div>
    <div style={layoutStyle}>
      <br></br>
    
      <h4 style={whiteStyle}>Contact us: contact@rivertrade.com</h4>
      
    </div>
    <br></br>
    <center><h5 style={whiteStyle}>© 2020, River Trade, Inc.</h5></center>
  </div>
);

export default Footer;
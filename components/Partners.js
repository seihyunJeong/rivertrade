
  const liStyle = {
    listStyle: 'none',
    float: 'left',
    marginRight: '60px',
  };

  const logoStyle = {
    maxHeight : '100px',
    width: 'auto',
    marginTop: 70,
  };
  
  const layoutStyle = {
    //padding: 20,
    //border: '1px solid #000',
    height: '100%',
    maxWidth: '1200px',
    margin: 'auto',
  };

  const h2Style = {
    marginLeft: '10px',
  };
  
  
  const Partners = () => (
  <div id="partners" style={layoutStyle}>
    <h2 style={h2Style}>Partners</h2>
    <ul>
      <li style={liStyle}><img style={logoStyle} src="../static/partners/amzn_logo.png"></img></li>
      <li style={liStyle}><img style={logoStyle} src="../static/partners/alibaba.png"></img></li>
      <li style={liStyle}><img style={logoStyle} src="../static/partners/shopee.png"></img></li>
      <li style={liStyle}><img style={logoStyle} src="../static/partners/naver.png"></img></li>
      <li style={liStyle}><img style={logoStyle} src="../static/partners/tmon.jpg"></img></li>
      <li style={liStyle}><img style={logoStyle} src="../static/partners/coupang.png"></img></li>
    </ul>
  </div>
  );
  
  export default Partners;
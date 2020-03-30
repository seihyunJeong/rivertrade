const imgStyle = {
    width: '65%',
    //height: '60%',
    zIndex: -1,
    
};

const divStyle = {
  textAlign: 'center',
}

/*
<div style={txtDivStyle}>
      <text style={txtStyle1}><a href="/amazon">Amazon</a></text>
      <text style={txtStyle2}><a href="/naver">Naver Shopping</a></text>
      <text style={txtStyle3}><a href="/shopee">Shopee</a></text>
    </div>
*/

const Banner = props => (
  <div style = {divStyle}>
    <img style={imgStyle} src="../static/safar-safarov-MSN8TFhJ0is-unsplash.jpg" alt="Banner Image"/>    
  </div>
);
/*
Banner.getInitialProps = async function(context){
  //const {id} = context.query;
  //const res = await fetch('')
}
*/
export default Banner;

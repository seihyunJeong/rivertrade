const imgStyle = {
    width: '100%',
    height: 'auto',
};

const ActivationBanner = props => (
  <div>
    <img style={imgStyle} src="../static/activation.jpg" alt="Banner Image"/>
    
  </div>
);
/*
Banner.getInitialProps = async function(context){
  //const {id} = context.query;
  //const res = await fetch('')
}
*/
export default ActivationBanner;

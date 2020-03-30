const h2Style = {
  textAlign: 'center',
  color: '#4a4a4a',
};
const h4Style = {
  textAlign: 'center',
  color: '#14a3bb',
};
const h6Style = {
  textAlign: 'center',
  color: '#4a4a4a',
};

const Phrase = props => (
  <div id="mission">
    <h4 style={h4Style}>With our help</h4>
    <h2 style={h2Style}>You’ll gain unparalleled insight into your customer base,</h2>
    <h6 style={h6Style}>an edge over your competitors, and the ability to reach your customers like never before.</h6>
  </div>
);

export default Phrase;

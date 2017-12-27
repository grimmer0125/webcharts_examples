class PlotlyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getRef = this.getRef.bind(this);
  }
  getRef(el) {
    console.log("getRef")
    this.el = el;
  }
  componentDidMount() {
    console.log("componentDidMount");
    // var test1 = document.getElementById('tester1');
    Plotly.plot(this.el, [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }], {
      margin: {
        t: 0
      }
    });
  }
  render() {
    console.log("render"); // using id also works
    //  {/*<div id="tester1" style={{width:"90%", height:"250px"}}>*/}
    return (
      <div ref={this.getRef} id="tester1" style={{width:"90%", height:"250px"}}>
      </div>
    );
  }
}
ReactDOM.render(<PlotlyApp />, document.getElementById('root'));

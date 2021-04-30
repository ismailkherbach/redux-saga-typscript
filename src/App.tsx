import React, { Component } from "react"; // let's also import Component
import { connect } from "react-redux";
import Header from "./components/Header";
import Table from "./components/Table";
import { getOrders, getHeader, setNewOrder } from "./redux/actions";
import closeIcon from "./assets/icons/close.svg";
// the clock's state has one field: The current time, based upon the
// JavaScript class Date

interface IProps {
  getHeader(): void;
  getOrders(): void;
  setNewOrder(): void;
  home: any;
}
interface IState {
  name: 1;
}
// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
class App extends Component<IProps, IState> {
  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.

  // Before the component mounts, we initialise our state

  // After the component did mount, we set the state each second.

  // render will know everything!
  getProps = () => {
    console.log(this.props.home);
  };

  componentDidMount() {
    this.props.getHeader();
    this.props.getOrders();
  }
  render() {
    return (
      <div className={`home-container flex fdc aic jcc`}>
        {this.props.home.blured && <div className="blured"></div>}
        {this.props.home.blured && (
          <div className="loading-overlay  flex fdc aic jcc">
            <div className="loading-main-button"></div>
            <h4>Processing</h4>
            <div className="cancel">
              <img
                alt="close"
                src={closeIcon}
                onClick={this.props.setNewOrder}
              />
            </div>
          </div>
        )}
        <Header />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = ({ home }: any) => {
  return { home };
};

export default connect(mapStateToProps, {
  getHeader,
  getOrders,
  setNewOrder,
})(App);

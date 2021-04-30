import React, { Component } from "react"; // let's also import Component
import { connect } from "react-redux";
import { getOrders } from "../redux/actions";
// the clock's state has one field: The current time, based upon the
// JavaScript class Date

interface IProps {
  getOrders(): void;
  home: any;
}
interface IState {
  orderIndex: number;
  orderType: String;
  sortBySubject: boolean;
  sortByType: boolean;
  sortByOrderId: boolean;
  sortByDate: boolean;
  sortASC: boolean;
  orders_AAA: any;
  sort: boolean;
  loading: boolean;
}
const navs = ["ORDERS A", "ORDERS AA", "ORDERS AAA", "ORDERS B", "ORDERS C"];
class Table extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      orderIndex: 2,
      orderType: "SENT",
      sortBySubject: false,
      sortASC: false,
      sortByType: false,
      orders_AAA: null,
      sortByOrderId: false,
      sortByDate: false,
      sort: false,
      loading: true,
    };
  }
  getProps = () => {
    console.log(this.props.home);
  };
  setNavItem = (i: number) => {
    this.setState({ orderIndex: i });
  };
  sortByTitle = () => {
    this.setState({
      sort: true,
      sortByType: false,
      sortByOrderId: false,
      sortByDate: false,

      sortBySubject: true,
      sortASC: !this.state.sortASC,
    });
  };

  sortByType = () => {
    this.setState({
      sort: true,
      sortBySubject: false,
      sortByDate: false,
      sortByOrderId: false,

      sortByType: true,
      sortASC: !this.state.sortASC,
    });
  };

  sortByOrderId = () => {
    this.setState({
      sort: true,
      sortBySubject: false,
      sortByType: false,
      sortByOrderId: true,
      sortASC: !this.state.sortASC,
    });
  };
  sortByDate = () => {
    this.setState({
      sort: true,
      sortBySubject: false,
      sortByType: false,
      sortByOrderId: false,
      sortByDate: true,
      sortASC: !this.state.sortASC,
    });
  };
  onSent = async () => {
    this.setState({ orderType: "SENT" });
    await this.props.getOrders();
  };
  onErrors = async () => {
    this.setState({ orderType: "ERRORS" });
    await this.props.getOrders();
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 2000);

    clearInterval();
  };
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { loading } = this.props.home;
    const { orders_AAA } = this.props.home.orders;
    return (
      <div className="table-container flex fdc aic jcc">
        <div className="navbar flex fdc aic jcfe">
          {
            <div className="navbar-container  flex fdr aic jcc">
              {navs.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      this.state.orderIndex == i ? "navItemActive" : "navItem"
                    } flex fdr aic jcc`}
                    onClick={() => this.setNavItem(i)}
                  >
                    <h4>{e}</h4>
                  </div>
                );
              })}
            </div>
          }
        </div>
        <div className="table-bloc flex fdc aic jcc">
          <div className="table-nav flex fdr aic jcc">
            <div className="leftTable flex fdr aic jcfs">
              <div
                className={`${
                  this.state.orderType == "SENT"
                    ? "tableItemActive"
                    : "tableItem"
                } flex fdc aic jcc`}
                onClick={this.onSent}
              >
                SENT
              </div>
              <div
                className={`${
                  this.state.orderType == "ERRORS"
                    ? "tableItemActive"
                    : "tableItem"
                } flex fdc aic jcc`}
                onClick={this.onErrors}
              >
                ERRORS
              </div>
            </div>
            <div className="leftTable flex fdr aifs jcfs">
              <h5>RECENT ORDERS</h5>
            </div>
          </div>
          {this.state.orderType == "SENT" && !loading && (
            <div className="table-core flex fdc aic jcfs">
              <table>
                <thead>
                  <tr className="head disable-select">
                    <th onClick={this.sortByDate}>DATE & TIME</th>
                    <th onClick={this.sortByTitle}>SUBJECT</th>
                    <th onClick={this.sortByType}>COMMUNICATION TYPE</th>
                    <th onClick={this.sortByOrderId}>ORDER #</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {orders_AAA &&
                    orders_AAA.sent
                      .sort((a: any, b: any) => {
                        if (this.state.sort) {
                          if (this.state.sortASC) {
                            if (this.state.sortBySubject) {
                              return a.subject.title.localeCompare(
                                b.subject.title
                              );
                            }
                            if (this.state.sortByType) {
                              return a.type.localeCompare(b.type);
                            }
                            if (this.state.sortByDate) {
                              return a.sent_dt.localeCompare(b.sent_dt);
                            }
                            if (this.state.sortByOrderId) {
                              return a.order_id - b.order_id;
                            }
                          } else {
                            if (this.state.sortBySubject) {
                              return b.subject.title.localeCompare(
                                a.subject.title
                              );
                            }
                            if (this.state.sortByType) {
                              return b.type.localeCompare(a.type);
                            }
                            if (this.state.sortByDate) {
                              return b.sent_dt.localeCompare(a.sent_dt);
                            }
                            if (this.state.sortByOrderId) {
                              return b.order_id - a.order_id;
                            }
                          }
                        }
                      })
                      .map((e: any, i: any) => {
                        return (
                          <tr key={i} className="wb-100">
                            <td className="small">
                              <h3>{e.sent_dt}</h3> <br></br>
                              <h3>{e.sent_tm}</h3>
                            </td>
                            <td className="large">
                              <span className="subject">
                                <h3>{e.subject.title}</h3>
                              </span>
                              <br></br>
                              <span className="email">
                                <h4>{e.subject.email}</h4>
                              </span>
                            </td>
                            <td className="medium">
                              <h3>{e.type}</h3>
                            </td>
                            <td className="small">
                              <h3>{e.order_id}</h3>
                            </td>
                            <td className=" flex fdr aic jcc">
                              <div className="resendBtn flex fdr aic jcc">
                                RESEND
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          )}
          {loading && (
            <div className="errorsBloc flex fdc aic jcc">
              <div className="loading-main-button"></div>
            </div>
          )}
          {this.state.orderType == "ERRORS" && (
            <div className="errorsBloc flex fdc aic jcc">
              {this.state.loading ? (
                <div className="loading-main-button"></div>
              ) : (
                "No items"
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ home }: any) => {
  return { home };
};

export default connect(mapStateToProps, {
  getOrders,
})(Table);

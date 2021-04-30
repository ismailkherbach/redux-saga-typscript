import React, { Component, Fragment } from "react"; // let's also import Component
import { connect } from "react-redux";
import { getHeader, setNewOrder } from "../redux/actions";
import star from "../assets/icons/star.svg";
import user from "../assets/icons/user.svg";
import userInfos from "../assets/icons/infos-user.svg";
import phone from "../assets/icons/smartphone.svg";
import home from "../assets/icons/home.svg";
import company from "../assets/icons/building.svg";
import at from "../assets/icons/at.svg";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
interface IProps {
  getHeader(): void;
  setNewOrder(): void;

  home: any;
}
interface IState {
  name: 1;
}
// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
class Header extends Component<IProps, IState> {
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
  }
  render() {
    const { loading, header } = this.props.home;

    if (!loading && header) {
      {
        var today = new Date();
        var birthDate = new Date(header.birth_date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        var age = age;

        const d = new Date(header.carrier_status.since.slice(0, 10));
        var since = monthNames[d.getMonth()];

        var day =
          header.carrier_status.since[5] == "0"
            ? header.carrier_status.since.slice(9, 10)
            : header.carrier_status.since.slice(8, 10);

        var year = header.carrier_status.since.slice(0, 4);
      }
    }
    return (
      <Fragment>
        {!loading ? (
          <div className="header-container flex fdc aic jcc">
            {!loading && header && (
              <div className="topnav flex fdr aic jcc">
                <div className="left flex fdr aic jcfs">
                  <img alt="star" src={star} />
                  <h2>{header.first_name + " " + header.last_name}</h2>
                </div>
                <div className="right flex fdr aic jcfe">
                  <div
                    className="btn flex fdr aic jcc"
                    onClick={this.props.setNewOrder}
                  >
                    New Order
                  </div>
                </div>
              </div>
            )}
            {!loading && header && (
              <div className="header flex fdr aic jcc">
                <div className="gender-bloc flex fdc aic jcfe">
                  <img alt="star" src={user} />
                  <p>
                    {header.gender && header.gender.toUpperCase() + " " + age}
                  </p>
                </div>
                <div className="infos-bloc flex fdc aic jcc">
                  <div className="info flex fdr aic jcc">
                    <div className="left-infos flex fdr aic jcc">
                      <img alt="star" src={userInfos} />
                    </div>
                    <div className="right-infos flex fdr aic jcc">
                      <h5>{"#" + header.id}</h5>
                    </div>
                  </div>

                  <div className="info flex fdr aic jcc">
                    <div className="left-infos flex fdr aic jcc">
                      <img alt="star" src={phone} />
                    </div>
                    <div className="right-infos flex fdr aic jcc">
                      <h5>{header.mobile_phone}</h5>
                    </div>
                  </div>

                  <div className="info flex fdr aic jcc">
                    <div className="left-infos flex fdr aic jcc">
                      <img alt="star" src={company} />
                    </div>
                    <div className="right-infos flex fdr aic jcc">
                      <h5>{header.work_phone}</h5>
                    </div>
                  </div>
                  <div className="info flex fdr aic jcc">
                    <div className="left-infos flex fdr aic jcc">
                      <img alt="star" src={home} />
                    </div>
                    <div className="right-infos flex fdr aic jcc">
                      <h5>{header.home_phone}</h5>
                    </div>
                  </div>
                  <div className="info flex fdr aic jcc">
                    <div className="left-infos flex fdr aic jcc">
                      <img alt="star" src={at} />
                    </div>
                    <div className="right-infos flex fdr aic jcc">
                      <h5>{header.email}</h5>
                    </div>
                  </div>
                </div>
                <div className="activity-bloc flex fdc aic jcfe">
                  <h5>90-DAY COMMUNICATION ACTIVITY</h5>
                  <div className="wb-100 flex fdr aife jcc">
                    <div className="bloc flex fdc aic jcc">
                      <h1>{header.activity.sms}</h1>
                      <div className="tag flex fdc aic jcc">
                        <p>SMS</p>
                      </div>
                    </div>
                    <div className="bloc middle flex fdc aic jcc">
                      <h1>{header.activity.email}</h1>
                      <div className="tag flex fdc aic jcc">
                        <p>EMAIL</p>
                      </div>
                    </div>
                    <div className="bloc flex fdc aic jcc">
                      <h1>{header.activity.orders}</h1>
                      <div className="tag flex fdc aic jcc">
                        <p>ORDERS</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sms-bloc flex fdc aic jcfe">
                  <h5>SMS CARRIER STATUS</h5>
                  <div className="wb-100 flex fdr aife jcc">
                    <div className="bloc flex fdc aic jcc">
                      <h1>{header.carrier_status.status}</h1>
                      <div className="tag flex fdc aic jcc">
                        <p> {"Since " + since + " " + day + ", " + year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="header-container flex fdc aic jcc">
            <div className="topnav flex fdr aic jcc">
              <div className="left flex fdr aic jcfs">
                <img alt="star" src={star} />
              </div>
              <div className="right flex fdr aic jcfe">
                <div
                  className="btn flex fdr aic jcc"
                  onClick={this.props.setNewOrder}
                >
                  New Order
                </div>
              </div>
            </div>

            <div className="header flex fdr aic jcc">
              <div className="gender-bloc flex fdc aic jcc"></div>
              <div className="infos-bloc flex fdc aic jcc"></div>
              <div className="activity-bloc flex fdc aic jcfe"></div>
              <div className="sms-bloc flex fdc aic jcfe"></div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ home }: any) => {
  return { home };
};

export default connect(mapStateToProps, {
  getHeader,
  setNewOrder,
})(Header);

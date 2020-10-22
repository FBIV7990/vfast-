import React from "react";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";

// import { Admin } from '../pages/protected/views/Admin/Admin';
import { PrivateRoute } from "../components";
import { history } from "../helpers";

import AdminNav from "../routes/admin_Nav";
import AdminRoutes from "../routes/admin_routes";

import EmployerNav from "../routes/employer_Nav";
import EmployerRoutes from "../routes/employer_routes";

import VendorNav from "../routes/vendor_Nav";
import VendorRoutes from "../routes/vendor_routes";

import VerifierNav from "../routes/verifier_Nav";
import VerifierRoutes from "../routes/verifier_routes";

import { USER_KEY } from "../helpers";
import { SideMenu } from "../components";
import Loader from "../components/Loader";

import "../pages/protected/indexAdmin.css";
// import '../.././bootstrap.min.css';
import "../pages/protected/bootstrapAdmin.css";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

class MainAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: null,
      routes: [],
    };
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentDidMount() {
    var user = localStorage.getItem(USER_KEY);

    var user = JSON.parse(user);
    var navs, routes;

    if (user) {
      switch (user.role) {
        case "EMPLOYER":
          navs = EmployerNav;
          routes = EmployerRoutes;
          break;
        case "VENDOR":
          navs = VendorNav;
          routes = VendorRoutes;
          break;
        case "VERIFIER":
          navs = VerifierNav;
          routes = VerifierRoutes;
          break;
        case "ADMIN":
          navs = AdminNav;
          routes = AdminRoutes;
          break;
        default:
          navs = EmployerNav;
          routes = EmployerRoutes;
          break;
      }
      this.setState({ navigation: { ...navs }, routes: [...routes] });
    }
  }

  render() {
    const { navigation, routes } = this.state;
    return (
      <>
        {navigation && <SideMenu data={navigation} />}

        <div
          id="page-wrapper"
          style={{
            marginRight: 10,
            backgroundColor: "#dce6ee",
            height: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              paddingLeft: 20,
              paddingTop: "90px",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#F5F5F5",
                boxSizing: "border-box",
                padding: 20,
              }}
            >
              <React.Suspense fallback={<Loader />}>
                <Switch>
                  {routes.map((route) => (
                    <Route
                      path={route.path}
                      exact={route.exact ? true : false}
                      component={route.component}
                    />
                  ))}
                </Switch>
              </React.Suspense>
              <ToastsContainer
                position={ToastsContainerPosition.BOTTOM_CENTER}
                store={ToastsStore}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapState(state) {
  return state;
}

const connectedMainAdmin = connect(mapState)(MainAdmin);
export { connectedMainAdmin as MainAdmin };

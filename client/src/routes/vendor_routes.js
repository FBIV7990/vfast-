import React from "react";

const Home = React.lazy(() => import("../pages/protected/Vendors/Home"));

// const Invoices = React.lazy(() => import('../pages/protected/Billing/Invoices'));
// const Invoice = React.lazy(() => import('../pages/protected/Billing/Invoice'));

const Reports = React.lazy(() => import("../pages/protected/Reports/Reports"));
const AddressCheck = React.lazy(() =>
  import("../pages/protected/Reports/AddressCheck")
);
const BackgroundVerification = React.lazy(() =>
  import("../pages/protected/Reports/BackgroundVerification")
);
const EmployerCheck = React.lazy(() =>
  import("../pages/protected/Reports/EmploymentCheck")
);

const ViewVendor = React.lazy(() =>
  import("../pages/protected/Vendors/ViewVendor")
);

const Verifications = React.lazy(() =>
  import("../pages/protected/Verifications/Verifications")
);
const VerificationDetail = React.lazy(() =>
  import("../pages/protected/Verifications/VerificationDetail")
);

const ViewDocuments = React.lazy(() =>
  import("../pages/protected/Verifiers/ViewDocuments")
);

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  {
    path: "/verifications",
    exact: true,
    name: "Verifications",
    component: Verifications,
  },
  {
    path: "/verifications/:id",
    name: "Verification Detail",
    component: VerificationDetail,
  },
  // { path: '/reports',exact: true, name: 'Reports', component: Reports },

  { path: "/reports", exact: true, name: "Reports", component: Reports },
  {
    path: "/reports/backgroundCheck",
    name: "Background Check",
    component: BackgroundVerification,
  },
  {
    path: "/reports/employerCheck",
    name: "Employer Check",
    component: EmployerCheck,
  },
  {
    path: "/reports/addressCheck",
    name: "Address Check",
    component: AddressCheck,
  },

  // { path: '/billing',exact: true, name: 'Billing', component: Billing },
];

export default routes;

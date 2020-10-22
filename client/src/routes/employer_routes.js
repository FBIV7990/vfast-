import React from "react";

const Home = React.lazy(() => import("../pages/protected/Employers/Home"));

const Invoices = React.lazy(() =>
  import("../pages/protected/Billing/Invoices")
);
const Invoice = React.lazy(() => import("../pages/protected/Billing/Invoice"));

const BulkUpload = React.lazy(() =>
  import("../pages/protected/Employers/BulkUpload.js")
);

const Employers = React.lazy(() =>
  import("../pages/protected/Employers/Employers")
);
const NewEmployee = React.lazy(() =>
  import("../pages/protected/Employers/NewEmployee")
);
const ViewEmployees = React.lazy(() =>
  import("../pages/protected/Employers/ViewEmployees")
);
const EmployeeDetails = React.lazy(() =>
  import("../pages/protected/Employers/EmployeeDetails")
);
const ViewEmployer = React.lazy(() =>
  import("../pages/protected/Employers/ViewEmployer")
);
const EditEmployer = React.lazy(() =>
  import("../pages/protected/Employers/EditEmployer")
);

const PresetForm = React.lazy(() => import("../pages/protected/Forms/Forms"));

const Reports = React.lazy(() => import("../pages/protected/Reports/Reports"));

const NewUser = React.lazy(() => import("../pages/protected/Users/NewUser"));
const Users = React.lazy(() => import("../pages/protected/Users/Users"));
const ViewUser = React.lazy(() => import("../pages/protected/Users/ViewUser"));

const NewVendor = React.lazy(() =>
  import("../pages/protected/Vendors/NewVendor")
);
const Vendors = React.lazy(() => import("../pages/protected/Vendors/Vendors"));
const ViewVendor = React.lazy(() =>
  import("../pages/protected/Vendors/ViewVendor")
);

const Verifications = React.lazy(() =>
  import("../pages/protected/Verifications/Verifications")
);
const VerificationDetail = React.lazy(() =>
  import("../pages/protected/Verifications/VerificationDetail")
);

const NewVerifier = React.lazy(() =>
  import("../pages/protected/Verifiers/NewVerifier")
);
const Verifiers = React.lazy(() =>
  import("../pages/protected/Verifiers/Verifiers")
);

const ViewLeads = React.lazy(() =>
  import("../pages/protected/Verifiers/ViewLeads")
);
const ViewDocuments = React.lazy(() =>
  import("../pages/protected/Verifiers/ViewDocuments")
);

const ViewVerifier = React.lazy(() =>
  import("../pages/protected/Verifiers/ViewVerifier")
);

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },

  {
    path: "/employers/:id",
    exact: true,
    name: "Edit Employer",
    component: EditEmployer,
  },
  {
    path: "/employers/view/:id",
    exact: true,
    name: "View Employer",
    component: ViewEmployer,
  },
  { path: "/bulkUpload", name: "Add New", component: BulkUpload },
  {
    path: "/employers/:id/employees",
    exact: true,
    name: "View Employer",
    component: ViewEmployees,
  },
  {
    path: "/employers/:id/employees/new",
    name: "New Employee",
    component: NewEmployee,
  },
  {
    path: "/employers/employees/:id",
    name: "Employee",
    component: EmployeeDetails,
  },

  {
    path: "/verifications",
    exact: true,
    name: "Verifications",
    component: Verifications,
  },

  {
    path: "/presetForm",
    exact: true,
    name: "Preset Form",
    component: PresetForm,
  },

  { path: "/reports", exact: true, name: "Reports", component: Reports },
  //    { path: '/reports/new',  name: 'Add New', component: Reports },

  { path: "/invoices", exact: true, name: "Invoices", component: Invoices },
  { path: "/invoices/:id", name: "View", component: Invoice },
];

export default routes;

import React from "react";

const Home = React.lazy(() => import("../pages/protected/Home/Home"));
const EditProfile = React.lazy(() => import("../pages/public/EditProfile"));

const Invoices = React.lazy(() =>
  import("../pages/protected/Billing/Invoices")
);
const Invoice = React.lazy(() => import("../pages/protected/Billing/Invoice"));

const BulkUpload = React.lazy(() =>
  import("../pages/protected/Employers/BulkUpload.js")
);
const ChangePassword = React.lazy(() =>
  import("../pages/public/ChangePassword")
);

const Employers = React.lazy(() =>
  import("../pages/protected/Employers/Employers")
);
const NewEmployee = React.lazy(() =>
  import("../pages/protected/Employers/NewEmployee")
);
const NewEmployer = React.lazy(() =>
  import("../pages/protected/Employers/NewEmployer")
);
const ViewEmployees = React.lazy(() =>
  import("../pages/protected/Employers/ViewEmployees")
);
const EmployeeDetails = React.lazy(() =>
  import("../pages/protected/Employers/EmployeeDetails")
);
const EditEmployer = React.lazy(() =>
  import("../pages/protected/Employers/EditEmployer")
);
const ViewEmployer = React.lazy(() =>
  import("../pages/protected/Employers/ViewEmployer")
);

const PresetForm = React.lazy(() => import("../pages/protected/Forms/Forms"));

const Reports = React.lazy(() => import("../pages/protected/Reports/Reports"));
const AddressCheck = React.lazy(() =>
  import("../pages/protected/Reports/AddressCheck")
);
const BackgroundVerification = React.lazy(() =>
  import("../pages/protected/Reports/BackgroundVerification")
);
const EmploymentCheck = React.lazy(() =>
  import("../pages/protected/Reports/EmploymentCheck")
);
const AddressReport = React.lazy(() =>
  import("../pages/protected/Reports/AddressReport")
);
const EducationReport = React.lazy(() =>
  import("../pages/protected/Reports/EducationReport")
);
const EmploymentReport = React.lazy(() =>
  import("../pages/protected/Reports/EmploymentReport")
);

const NewUser = React.lazy(() => import("../pages/protected/Users/NewUser"));
const Users = React.lazy(() => import("../pages/protected/Users/Users"));
const EditUser = React.lazy(() => import("../pages/protected/Users/EditUser"));
const ViewUser = React.lazy(() => import("../pages/protected/Users/ViewUser"));

const NewVendor = React.lazy(() =>
  import("../pages/protected/Vendors/NewVendor")
);
const Vendors = React.lazy(() => import("../pages/protected/Vendors/Vendors"));
const ViewVendor = React.lazy(() =>
  import("../pages/protected/Vendors/ViewVendor")
);
const EditVendor = React.lazy(() =>
  import("../pages/protected/Vendors/EditVendor")
);
const AddRates = React.lazy(() =>
  import("../pages/protected/Vendors/AddRates")
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
const EditVerifier = React.lazy(() =>
  import("../pages/protected/Verifiers/EditVerifier")
);

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/new", name: "New User", component: NewUser },
  { path: "/users/:id", name: "Users", component: EditUser },
  { path: "/view/:id", name: "Users View", component: ViewUser },

  { path: "/editprofile", name: "Edit", component: EditProfile },

  { path: "/vendors", exact: true, name: "Vendors", component: Vendors },
  { path: "/vendors/new", name: "Add New", component: NewVendor },
  { path: "/vendors/:id", name: "Vendors", component: EditVendor },
  { path: "/vendor/view/:id", name: "View Vendors", component: ViewVendor },
  { path: "/vendor/rates/:id", name: "Rates", component: AddRates },

  { path: "/employers", exact: true, name: "Employers", component: Employers },
  { path: "/employers/new", name: "Add New", component: NewEmployer },
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
  { path: "/employers/:id/bulkUpload", name: "Add New", component: BulkUpload },
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
    name: "New Employee",
    component: EmployeeDetails,
  },

  { path: "/verifiers", exact: true, name: "Verifiers", component: Verifiers },
  { path: "/verifiers/new", name: "Add Verifier", component: NewVerifier },
  {
    path: "/verifiers/view/:id",
    name: "View Verifier",
    component: ViewVerifier,
  },
  { path: "/verifiers/:id", name: "Edit Verifier", component: EditVerifier },

  {
    path: "/verifications",
    exact: true,
    name: "Verifications",
    component: Verifications,
  },
  {
    path: "/verifications/new",
    name: "Verifications",
    component: Verifications,
  },
  {
    path: "/verifications/:id",
    name: "Verification Detail",
    component: VerificationDetail,
  },

  { path: "/leads", exact: true, name: "Leads", component: ViewLeads },
  {
    path: "/leads/document/:id",
    exact: true,
    name: "Leads",
    component: ViewDocuments,
  },

  {
    path: "/presetForm",
    exact: true,
    name: "Preset Form",
    component: PresetForm,
  },

  { path: "/reports", exact: true, name: "Reports", component: Reports },
  { path: "/reports/new", name: "Add New", component: BackgroundVerification },
  {
    path: "/reports/backgroundCheck",
    name: "Background Check",
    component: BackgroundVerification,
  },
  {
    path: "/reports/employmentCheck",
    name: "Employment Check",
    component: EmploymentCheck,
  },
  {
    path: "/reports/addressCheck",
    name: "Address Check",
    component: AddressCheck,
  },
  {
    path: "/reports/educationReport/:id",
    name: "Background Check",
    component: EducationReport,
  },
  {
    path: "/reports/employmentReport/:id",
    name: "Employment Check",
    component: EmploymentReport,
  },
  {
    path: "/reports/addressReport/:id",
    name: "Address Report",
    component: AddressReport,
  },

  { path: "/invoices", exact: true, name: "Invoices", component: Invoices },
  { path: "/invoices/:id", name: "View", component: Invoice },

  { path: "/changepassword", name: "Users", component: ChangePassword },
];

export default routes;

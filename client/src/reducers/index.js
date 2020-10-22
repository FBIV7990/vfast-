import { users } from "./user.reducer";
import { alert } from "./alert.reducer";
import { vendors } from "./vendor.reducer";
import { employers } from "./employer.reducer";
import { employees } from "./employee.reducer";
import { verifiers } from "./verifier.reducer";
import { forms } from "./form.reducer";
import { presetform } from "./presetform.reducer";
import { leads } from "./lead.reducer";
import { verifications } from "./verification.reducer";
import { combineReducers } from "redux";
import { register } from "./register.reducer";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";
import { reports } from "./report.reducer";
import { invoices } from "./invoice.reducer";

const rootReducer = combineReducers({
  users,
  vendors,
  forms,
  employers,
  employees,
  verifiers,
  presetform,
  leads,
  verifications,
  alert,
  register,
  registration,
  authentication,
  reports,
  invoices,
});

export default rootReducer;

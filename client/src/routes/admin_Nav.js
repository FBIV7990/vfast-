const roles = {
  ADMIN: "ADMIN",
  VENDOR: "VENDOR",
  VERIFIER: "VERIFIER",
  EMPLOYER: "EMPLOYER",
};

function getAllRoles() {
  return Object.keys(roles).map((key) => roles[key]);
}

export default {
  items: [
    {
      name: "Home",
      url: "/",
      icon: "icon-speedometer",
    },
    {
      name: "Users",
      icon: "icon-puzzle",
      url: "/users",
      children: [
        {
          name: "Vendors",
          url: "/vendors",
          icon: "icon-puzzle",
        },
        {
          name: "Clients",
          url: "/employers",
          icon: "icon-puzzle",
        },
        {
          name: "Operations",
          url: "/verifiers",
          icon: "icon-puzzle",
        },
        {
          name: "List",
          url: "/users",
          icon: "icon-puzzle",
        },
      ],
    },
    {
      name: "Vendors",
      icon: "icon-puzzle",
      url: "/vendors",

      children: [
        {
          name: "New",
          url: "/vendors/new",
          icon: "icon-puzzle",
        },
        {
          name: "List",
          url: "/vendors",
          icon: "icon-puzzle",
        },
        {
          name: "Verifications",
          url: "/verifications",
          icon: "icon-puzzle",
        },
      ],
    },
    {
      name: "Clients",
      icon: "icon-puzzle",
      url: "/employers",

      children: [
        {
          name: "Add New",
          url: "/employers/new",
          icon: "icon-puzzle",
        },
        {
          name: "List",
          url: "/employers",
          icon: "icon-puzzle",
        },
      ],
    },
    {
      name: "Operations",
      icon: "icon-puzzle",
      url: "/verifiers",
      children: [
        {
          name: "New",
          url: "/verifiers/new",
          icon: "icon-puzzle",
        },
        {
          name: "List",
          url: "/verifiers",
          icon: "icon-puzzle",
        },
        {
          name: "View Leads",
          url: "/leads",
          icon: "icon-puzzle",
        },
      ],
    },
    {
      name: "Verifications",
      icon: "icon-puzzle",
      url: "/verifications",
      children: [
        {
          name: "New",
          url: "/verifications/new",
          icon: "icon-puzzle",
        },
        {
          name: "List",
          url: "/verifications",
          icon: "icon-puzzle",
        },
      ],
    },
    {
      name: "Preset Form",
      url: "/presetform",
      icon: "icon-puzzle",
    },
    {
      name: "Reports",
      icon: "icon-puzzle",
      url: "/reports",
      children: [
        // {
        //   name: "Education Check",
        //   url: "/reports/new",
        //   icon: "icon-puzzle",
        // },
        // {
        //   name: "Employment Check",
        //   url: "/reports/employmentCheck",
        //   icon: "icon-puzzle",
        // },
        // {
        //   name: "Address Check",
        //   url: "/reports/addressCheck",
        //   icon: "icon-puzzle",
        // },
        {
          name: "List",
          url: "/reports",
          icon: "icon-puzzle",
        },
      ],
    },
    {
      name: "Billing",
      url: "/invoices",
      icon: "icon-puzzle",
    },
  ],
};

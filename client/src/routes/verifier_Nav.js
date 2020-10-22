const roles = {
  ADMIN: "ADMIN",
  VENDOR: "VENDOR",
  VERIFIER: "VERIFIER",
  EMPLOYER: "EMPLOYER",
};

export default {
  items: [
    {
      name: "Home",
      url: "/",
      icon: "icon-speedometer",
    },

    {
      name: "Vendors",
      icon: "icon-puzzle",
      url: "/vendors",

      children: [
        {
          name: "Add New",
          url: "/vendors/new",
          icon: "icon-puzzle",
        },
        {
          name: "Vendors",
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
          name: "View All",
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
          name: "Add New",
          url: "/verifications/new",
          icon: "icon-puzzle",
        },
        {
          name: "View All",
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
        //   name: "Create New",
        //   url: "/reports/new",
        //   icon: "icon-puzzle",
        // },
        {
          name: "View All",
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

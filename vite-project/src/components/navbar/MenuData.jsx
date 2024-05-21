export const MenuData = [
  {
    title: "HOME",
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user",
  },
  {
    title: "SEARCH",
    url: "#",
    cName: "nav-links",
    dropdownItems: [
      {
        url: "/search_spi",
        title: "EDIT SPI",
        cName: "nav-links",
      },
      {
        url: "/search_sri",
        title: "EDIT SRI",
        cName: "nav-links",
      },
      {
        url: "/search_ssi",
        title: "EDIT SSI",
        cName: "nav-links",
      },
    ],
  },

  {
    title: "INDEX",
    url: "#",
    cName: "nav-links",
    dropdownItems: [
      {
        url: "/spi",
        title: "SPI",

        cName: "nav-links",
      },
      {
        url: "/sri",
        title: "SRI",

        cName: "nav-links",
      },
      {
        url: "/ssi",
        title: "SSI",

        cName: "nav-links",
      },
    ],
  },
  {
    title:"GRAPH",
    url:'/graph_spi',
    cName:"nav-links",
  },
  {
    title: "LOGIN",
    url: "/login",
    cName: "nav-links-mobile",
  },
];

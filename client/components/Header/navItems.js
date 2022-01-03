const navItems = [
  {
    label: "🏛️Market",
    href: "/items",
  },
  {
    label: "🚀Create",
    children: [
      {
        label: "Upload NFT",
        subLabel: "Contribute to the ever-growing world of NFTs",
        href: "/upload",
      },

      {
        label: "Suggest Feature",
        subLabel: "Suggest features you'd like to see in metis.market",
        href: "https://github.com/callistachang/metis.market/issues",
      },
    ],
  },
  {
    label: "🎫Events",
    children: [
      {
        label: "Events",
        subLabel: "Exciting NFT-related events on metis.market",
        href: "#",
      },
      {
        label: "Blind Boxes",
        subLabel: "Unbox rare digital collectibles",
        href: "#",
      },
    ],
  },
  {
    label: "📚Resources",
    children: [
      {
        label: "Rankings",
        subLabel: "NFT rankings on metis.market",
        href: "#",
      },
      {
        label: "Docs",
        subLabel: "Documentation to metis.market's API",
        href: "#",
      },
    ],
  },
  {
    label: "👤Account",
    href: "#",
  },
];

export default navItems;

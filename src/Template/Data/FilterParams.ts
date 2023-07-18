export const FilterParams: {
  title: string;
  values: string[];
  filterKey: keyof FilterBy;
}[] = [
  {
    title: "Case Size",
    values: [
      "< 17mm",
      "17 - 19mm",
      "20 - 22mm",
      "23 - 25mm",
      "26 - 28mm",
      "29 - 31mm",
      "29 - 31mm",
      "32 - 34mm",
      "35 - 37mm",
      "38 - 40mm",
      "41 - 43mm",
      "44 - 46mm",
      "47 - 50mm",
      "> 50mm",
    ],
    filterKey: "caseSize",
  },
  {
    title: "Availability",
    values: ["Available", "Sold"],
    filterKey: "availability",
  },
  {
    title: "Gender",
    values: ["Men", "Women", "Unisex"],
    filterKey: "gender",
  },
  {
    title: "Brands",
    values: [
      "Rolex",
      "Apple",
      "Aspen",
      "Armani Exchange",
      "Ball",
      "Hugo Boss",
      "Chanel",
      "Hublot",
      "Cartier",
      "Guess",
    ],
    filterKey: "brands",
  },
  {
    title: "Price",
    values: [
      "Under ₹10000",
      "Under ₹20000",
      "₹25000 - ₹30000",
      "₹35000 - ₹50000",
      "₹50000 - ₹100000",
      "Above ₹100000",
    ],
    filterKey: "price",
  },
  {
    title: "Buy Back Assurance",
    values: ["50%", "60%", "70%", "80%"],
    filterKey: "buyBackAssurance",
  },
  {
    title: "Dial Colours",
    values: ["Black", "Brown", "Burgundy", "Red", "Purple", "Blue"],
    filterKey: "dialColours",
  },
  {
    title: "Watch Styles",
    values: ["Vintage", "Sport", "Dress", "Diver", "Casual", "Aviator"],
    filterKey: "watchStyles",
  },
  {
    title: "Strap/Bracelet Material",
    values: ["Leather", "Steel", "Rubber", "Ceramic", "Fabric", "Yellow Gold"],
    filterKey: "strapBraceletMaterial",
  },
  {
    title: "Strap Colours",
    values: ["Black", "Brown", "Burgundy", "Red", "Purple", "Blue"],
    filterKey: "strapColours",
  },
  {
    title: "Movement Type",
    values: [
      "Automatic",
      "Quartz",
      "Manual",
      "Co-Axial Escapement Automatic",
      "Spring Drive",
      "Solar Beat",
    ],
    filterKey: "movementType",
  },
  {
    title: "Case Material",
    values: [
      "Platinum",
      "Silver",
      "Stainless Steel",
      "Stainless Steel and Gold",
      "Rose Gold",
      "Yellow Gold",
    ],
    filterKey: "caseMaterial",
  },
  {
    title: "Purchase Year",
    values: ["Vintage", "2012", "2013", "2014", "2015", "2016"],
    filterKey: "purchaseYear",
  },
];

export interface FilterBy {
  caseSize?: string[];
  availability?: string[];
  gender?: string[];
  brands?: string[];
  price?: string[];
  buyBackAssurance?: string[];
  dialColours?: string[];
  watchStyles?: string[];
  strapBraceletMaterial?: string[];
  strapColours?: string[];
  movementType?: string[];
  caseMaterial?: string[];
  purchaseYear?: string[];
}

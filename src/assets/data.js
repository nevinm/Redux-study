export const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: 2,
    title: "Why use React?",
    content:
      "React is used to build single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
  },
  {
    id: 3,
    title: "How does React work?",
    content:
      "React creates a virtual DOM. When state changes in a component, it first runs a 'diffing' algorithm, which identifies what has changed in the virtual DOM. The changes are then updated to the real DOM in the most efficient way.",
  },
];

export const searchItems = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Mango" },
  { id: 5, name: "Pineapple" },
  { id: 6, name: "Grapes" },
  { id: 7, name: "Strawberry" },
  { id: 8, name: "Blueberry" },
  { id: 9, name: "Watermelon" },
  { id: 10, name: "Papaya" },
];

export const treeData = [
  {
    id: 1,
    label: "Root 1",
    children: [
      {
        id: 2,
        label: "Child 1",
        children: [
          {
            id: 3,
            label: "Grandchild 1.1",
          },
          {
            id: 4,
            label: "Grandchild 1.2",
          },
        ],
      },
      {
        id: 5,
        label: "Child 2",
        children: [
          {
            id: 6,
            label: "Grandchild 2.1",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Root 2",
    children: [
      {
        id: 8,
        label: "Child 3",
        children: [
          {
            id: 9,
            label: "Grandchild 3.1",
          },
          {
            id: 10,
            label: "Grandchild 3.2",
            children: [
              {
                id: 11,
                label: "Great Grandchild 3.2.1",
              },
            ],
          },
        ],
      },
    ],
  },
];

const elements = [{
    id: 1,
    count: 9,
    title: "Цитрамон",
    price: 5000000,
  },
  {
    id: 2,
    count: 5,
    title: "Аспирин",
    price: 60,
  },
  {
    id: 3,
    count: 3,
    title: "теанин",
    price: 160,
  },
  {
    id: 4,
    count: 1,
    title: "Метамфетамин",
    price: 1160,
  },
  ];
  
  // console.log((elements.map (item => item.title)));

console.log(elements.sort((a, b) => a.title.localeCompare(b.title)));

console.log(elements.sort((a, b) => a.count - b.count));

//console.log(elements.filter(el => el.title.includes("")));
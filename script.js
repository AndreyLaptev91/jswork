const tableLauout = ``;

const elements = [
  {
    id: 1,
    count: 1,
    title: "Цитрамон",
    price: 50,
  },
  {
    id: 2,
    count: 2,
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
    count: 4,
    title: "Метамфетамин",
    price: 1160,
  },
];



const btn = (id) => `<button type="button" class="btn btn-info" style="width: 80px; margin: 10px">delete</button>`;
const button = (id) => `<button id=${id} class="btn btn-primary" style="width: 80px; margin: 10px">Edit</button>`;
const makeRow = ({id, title, price }) => `
<tr>
    <td>${title}</td><td>${price}</td><td>${button(id)}</td><td>${btn(id)}</td><td></td>
  </tr>
`;




class Table {
  constructor(elements, idElemToRenderWithin) {
    this.elements = elements;
    this.idElemToRenderWithin = idElemToRenderWithin;
  }

  initialize() {
    let x = document.getElementById(this.idElemToRenderWithin);

    x.insertAdjacentHTML("afterbegin", this.render(this.elements));
  }

  render(elements) {
    let resultHtml = "";

    elements.forEach((el) => {
      resultHtml = resultHtml + makeRow(el);
    });

  const delbutton = () => ``;
  
    return `<div class="input-group">
    
    <input type="text" class="form-control" style="width-setter: 100px; margin: 10px;" placeholder="Search..." aria-label="Recipient's username with two button addons">
    <button type="button" class="btn btn-primary" style="width: 80px; margin: 10px;">Search...</button>
    <button type="button" class="btn btn-info" style="width: 80px; margin: 10px">Add new</button>
  </div>
  <table>${resultHtml}`;
  
  }
}

const table = new Table(elements, "table");

table.initialize();




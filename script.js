class Table {
  constructor(elements, idElemToRenderWithin) {
    this.elements = elements;
    this.idElemToRenderWithin = idElemToRenderWithin;
    this.sortingOrder = {
      orderByName: 'asc',
      orderByPrice: 'desc'
    }
  }

  initialize () {
    this.renderTableHeader(this.elements);
    this.renderTableBody(this.elements);
  }

  renderTableHeader() {
    let x = document.getElementById(this.idElemToRenderWithin);
    x.insertAdjacentHTML("afterbegin", this.makeHtmlForTable());
    x.addEventListener("click", this.tableHandler.bind(this));
  }

  renderTableBody (elements) {

    let elem = elements || this.elements;

    let x = document.getElementById('tbody');

    x.insertAdjacentHTML("afterbegin", this.makeHtmlForTableBody(elem));
  }


  cleaning() {
    let div = document.getElementById("table");
    let container = document.querySelector(".container");
    div.removeChild(container);
  }

  cleaningTableBody() {
    let tbody = document.getElementById("tbody");
    while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
}
  }

  showArrow(direction, id) {
    let NameSort = document.getElementById(id);
    let p = document.createElement('a');
    p.innerHTML = direction === 'asc' ? '&#11167;': '&#11165;';
    NameSort.prepend(p);
  }

  deleteArrow(name) {
    let Sort = document.getElementById(name);
    while (Sort.firstChild) {
      Sort.removeChild(Sort.firstChild);
    }
  }


  changeArrowSortingDirection (sortedBy,sortingOrder) {
    if (sortedBy === 'sortName') {
      this.deleteArrow("PriceSort");
      this.deleteArrow("NameSort");
      this.showArrow(this.sortingOrder.orderByName, "NameSort");

    } else if (sortedBy === 'sortPrice') {
      this.deleteArrow("NameSort");
      this.deleteArrow("PriceSort");
      this.showArrow(this.sortingOrder.orderByPrice, "PriceSort");
    }
  }


  tableHandler = function(event) {
    const dataAttribute = event.target.dataset;
  
    if (dataAttribute.action === "edit" && !!dataAttribute.id) {
      console.log(`???????????? ???????????? edit ?? id ${dataAttribute.id}`);
    } else if (dataAttribute.action === "delete" && !!dataAttribute.id){
      console.log(`???????????? ???????????? delete ?? id ${dataAttribute.id}`);
      this.elements = [ ... this.elements.filter(el => el.id !=dataAttribute.id)];
      
      this.cleaningTableBody();
      this.renderTableBody ();

    } else if (dataAttribute.action === "add") {

      const a = +prompt('????????????????????','');
      const b = prompt('????????????????','');
      const c = +prompt('????????','');
      const length = this.elements.length;

    this.elements = [
      ...this.elements,
      {
        id: length +1,
        count: a,
        title: b,
        price: c,
      },
    ];

    this.cleaningTableBody();
    this.renderTableBody ();
      
    } else if (dataAttribute.action === "search") {

      this.cleaningTableBody();
      
      let Search = document.getElementById("search-text");
  
      let SomeUsers = this.elements.filter(el => el.title.toLowerCase().includes(Search.value.toLowerCase()));
  
      this.renderTableBody (SomeUsers);
      
    } else if (dataAttribute.action === "sortName"){

      this.sortingOrder.orderByName = this.sortingOrder.orderByName === 'asc' ? 'desc' : 'asc';

      this.cleaningTableBody();

      let SorteredElements = this.elements.sort((a, b) => a.title.localeCompare(b.title));

      this.sortingOrder.orderByName === 'desc' ? SorteredElements : SorteredElements.reverse();

      this.renderTableBody (SorteredElements);
      
      this.changeArrowSortingDirection(dataAttribute.action, this.sortingOrder);


    } else if (dataAttribute.action === "sortPrice"){
      
      this.sortingOrder.orderByPrice = this.sortingOrder.orderByPrice === 'desc' ? 'asc' : 'desc';
      
      this.cleaningTableBody();

      let SorteredElements = this.elements.sort((a, b) => a.price - b.price);

      this.sortingOrder.orderByPrice === 'asc' ? SorteredElements : SorteredElements.reverse();

      this.renderTableBody (SorteredElements);

      this.changeArrowSortingDirection(dataAttribute.action, this.sortingOrder);
      
    }
  
    console.log(dataAttribute);

  }

  makeHtmlForTable() {

    return `
    <div class = "container" id = "button">
      <div class = "row">
        <div class = "col-2"> </div>
          <div class = "col-8">
              ${searchline()}
              <table class="table table-bordered table-secondary align-middle">
              <thead>
                <tr class="table-primary">
                  <th><div class="d-flex justify-content-around" data-action="sortName" ><div data-action="sortName">Name</div><div id="NameSort" >  </div></div></th>
                  <th><div class="d-flex justify-content-around" data-action="sortPrice" ><div data-action="sortPrice">Price</div><div id="PriceSort" data-action="sortPrice"></div></div></th>
                  <th>Action</th>
                </tr>  
                </thead>    
                <tbody id='tbody'>
                </tbody>       
              </table>
          </div>
        </div>
    </div>
 `;
  } 

  makeHtmlForTableBody(elements) {
    let resultHtml = "";
   
    elements.forEach((el) => {
      resultHtml = resultHtml + makeRow(el);
    });

    return resultHtml;
  } 
}

const table = new Table(elements, "table");

table.initialize();


class DeleteModal{
    constructor(idElemToRenderWithin, callback) {
    this.idElemToRenderWithin = idElemToRenderWithin;
    this.idElemToDelete = null;
    this.callback = callback;
    }


  initialize () {
      this.ModalHandler(this.elements);
      this.render
  }


 Open() {

}
close() {

}







}


modalHandler = (e) {
    const action = e.target.data;
    
    if (action==="close") {
        this.close();
    }
    else if (action==="delete") {
        this.callback(this.idElemToDelete);
    }
}

modalBody (elements) {

    let ele = elements || this.elements;

    let x = document.getElementById('modal');

    x.insertAdjacentHTML("afterbegin", this.makeHtmlForModal(ele));
  }


makeHtmlForModal () {
return `
<div class="modal" tabindex="-1 id = "modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Модалка мать её</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>И что ты хочешь? нахуй ты вообще нажал кнопку Edit?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
}










const deleteModal = new DeleteModal("modal", ()=> console.log('ask'));

deleteModal.initialise();
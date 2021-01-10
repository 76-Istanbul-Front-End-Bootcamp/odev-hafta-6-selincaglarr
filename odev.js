window.mockApiUrl = "https://5ff193d0db1158001748b15e.mockapi.io/pets/";

// window.mockApiUrl = "https://5ffacd6c87478d0017d9a895.mockapi.io/pets";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then(() => {
    window.location.reload();
  });
};

window.generateDetailModal = (pet) => {
  const petModalHTMl = ` <div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${pet.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src=${pet.image} class="card-img-top">
          ${pet.description}
        </div>
      </div>
    </div>
  </div>`;
  document.querySelector("body").innerHTML += petModalHTMl;
};

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`)
    .then((response) => response.json())
    .then((data) => {
      generateDetailModal(data);
      $(`#exampleModal${id}`).modal("show");
    });
};
fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => responseObj.json())
  .then((libreria) => {
    console.log(libreria);

    const scaffali = document.getElementById("libreria-container");
    scaffali.innerHTML = "";

    libreria.forEach((libro) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card">
        <img src=${libro.img}>
            <div class="card-body">
                <h5 class="card-title">${libro.title}</h5>
                <span class="badge bg-dark">${libro.price}</span >
                <p class="card-text">${libro.category}</p>
                <button class="custom"> "Scarta" </button>
            </div>
        </div>
            `;
      const scarta = col.querySelector(".custom");
      scarta.onclick = () => {
        col.remove();
      };
      scaffali.appendChild(col);
    });
  })
  .catch((error) => console.log("CATCH", error));

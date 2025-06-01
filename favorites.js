document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("favoritesContainer");

  function getStars(rating) {
    const filled = Math.floor(rating);
    const stars = Array(5).fill('<span class="empty">★</span>');
    for (let i = 0; i < filled && i < 5; i++) {
      stars[i] = '<span class="filled">★</span>';
    }
    return stars.join("");
  }

  function renderFavorites() {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    container.innerHTML = "";

    if (favs.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>You have no favorites yet.</p>";
      return;
    }

    favs.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="image-area">
          <img src="${item.image}" alt="${item.name}" class="restaurant-image" />
        </div>
        <div class="card-body">
          <div class="stars">${getStars(item.rating)}</div>
          <div class="name">${item.name}</div>
          <div class="type">${item.type}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        localStorage.setItem("selectedRestaurant", JSON.stringify(item));
        window.location.href = "detail.html";
      });
      container.appendChild(card);
    });
  }

  renderFavorites();
});
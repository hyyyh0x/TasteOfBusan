function getStars(rating) {
    const filled = Math.floor(rating);
    const stars = Array(5).fill('<span class="empty">★</span>');
    for (let i = 0; i < filled && i < 5; i++) {
      stars[i] = '<span class="filled">★</span>';
    }
    return stars.join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const restaurant = JSON.parse(localStorage.getItem("selectedRestaurant"));
    if (!restaurant) return;

    document.getElementById("restaurantName").textContent = restaurant.name;
    document.getElementById("restaurantImage").src = restaurant.image;
    document.getElementById("restaurantImage").alt = restaurant.name;
    document.getElementById("restaurantStars").innerHTML = getStars(restaurant.rating);
    document.getElementById("restaurantPrice").textContent = restaurant.price || "";
    document.getElementById("restaurantDesc").textContent = restaurant.description || "";
    document.getElementById("restaurantMap").innerHTML = restaurant.mapEmbed || "";
  });
  
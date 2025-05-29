function getStars(rating) {
    const filled = Math.floor(rating);
    const stars = Array(5).fill('<span class="empty">★</span>');
    for (let i = 0; i < filled && i < 5; i++) {
      stars[i] = '<span class="filled">★</span>';
    }
    return stars.join("") + ` <span class="rating-number">(${rating.toFixed(1)})</span>`;;
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

  document.getElementById("address").innerHTML = `<p>${restaurant.address}</p>`;
  document.getElementById("menu").innerHTML = restaurant.menu
    ? `<ul>${restaurant.menu.map(item => `<li>${item}</li>`).join('')}</ul>`
    : '<p>No menu info.</p>';
  document.getElementById("review").innerHTML = restaurant.review
    ? restaurant.review.map(r => `<p>${r}</p>`).join('')
    : '<p>No reviews yet.</p>';

  const reviewCount = restaurant.review ? restaurant.review.length : 0;
  const reviewTab = document.querySelector('.tab[data-tab="review"]');
  if (reviewTab) {
    reviewTab.textContent = `REVIEW (${String(reviewCount).padStart(2, '0')})`;
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
});
  
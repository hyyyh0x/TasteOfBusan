const data = [
    {
        name: "Kim's Kitchen",
        rating: 4.5,
        type: "Korean",
        price: "₩10000 - ₩20000",
        description: "Try the best Japanese mazesoba in Busan.",
        image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTA1MDVfMjg1%2FMDAxNzQ2NDUzNjM3Mjkw.vFm2UqMYzQV7ydzj4U15kqbmDHqnogy64wJNdBr4ywYg.bBMfjj-svvCiOye8AkR8t-rggn-NAZMv7X01MNpDwGog.JPEG%2F4C44ABDA-6219-4239-97B2-03CD78F6337D.jpeg%3Ftype%3Dw1500_60_sharpen",
        extra: "This restaurant has been rated top 10 in Busan!",
        mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13049.770836061507!2d129.0675416!3d35.145578300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb7eeeb941b5%3A0x67f5f9fd97d16216!2z6rmA7JSo64Sk67a0IOu2gOyCsA!5e0!3m2!1sko!2skr!4v1747386313797!5m2!1sko!2skr"></iframe>`
    },     
  ];

  let searchInput;

  document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardContainer");
  searchInput = document.getElementById("searchInput");
  let currentFiltered = [...data];


  function getStars(rating) {
    const filled = Math.floor(rating);
    const stars = Array(5).fill('<span class="empty">★</span>');
    for (let i = 0; i < filled && i < 5; i++) {
      stars[i] = '<span class="filled">★</span>';
    }
    return stars.join("");
  }
  
  function renderCards(items) {
    container.innerHTML = "";
    items.forEach(item => {
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
  
  function toggleFilterPopup() {
    document.getElementById("filterPopup").classList.toggle("show");
  }

  function applySort() {
    const value = sortSelect.value;
    let sorted = [...currentFiltered];

    if (value === "rating-desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (value === "rating-asc") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (value === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderCards(sorted);
  }

  
  function applyFilter() {
    const checked = Array.from(document.querySelectorAll('#filterPopup input[type=checkbox]:checked'));
    const selectedTypes = checked.map(cb => cb.value);
    currentFiltered = selectedTypes.length > 0
      ? data.filter(d => selectedTypes.includes(d.type))
      : [...data];
    applySearchFilter();
    toggleFilterPopup();
  }
  
  function applySearchFilter() {
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = currentFiltered.filter(item => item.name.toLowerCase().includes(keyword));
    renderCards(filtered);
  }
  
  renderCards(data);
  searchInput.addEventListener("input", applySearchFilter);
  sortSelect.addEventListener("change", applySort);
  document.getElementById("applyBtn").addEventListener("click", applyFilter);
  document.getElementById("filterBtn").addEventListener("click", toggleFilterPopup);
  document.getElementById("closeBtn").addEventListener("click", toggleFilterPopup);
});
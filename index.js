const data = [
    {
        name: "Kim's Kitchen",
        rating: 4.4,
        type: "Japanese",
        price: "₩10000 - ₩20000",
        description: "Try the best Japanese mazesoba in Busan.",
        address:"1F, 95 Hwangnyeong-daero 74beon-gil, Nam-gu, Busan",
        menu: [
          "Mazesoba - ₩9,000",
          "Spicy Pork Rice Bowl - ₩11,000",
          "Miso Soup - ₩2,000"
        ],
        review: [
          "⭐️⭐️⭐️⭐️⭐️ - Amazing taste!",
          "⭐️⭐️⭐️⭐️ - Nice vibe and staff.",
          "⭐️⭐️⭐️ - Tasty but a bit pricey."
        ],
        image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTA1MDVfMjg1%2FMDAxNzQ2NDUzNjM3Mjkw.vFm2UqMYzQV7ydzj4U15kqbmDHqnogy64wJNdBr4ywYg.bBMfjj-svvCiOye8AkR8t-rggn-NAZMv7X01MNpDwGog.JPEG%2F4C44ABDA-6219-4239-97B2-03CD78F6337D.jpeg%3Ftype%3Dw1500_60_sharpen",
        mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13049.770836061507!2d129.0675416!3d35.145578300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb7eeeb941b5%3A0x67f5f9fd97d16216!2z6rmA7JSo64Sk67a0IOu2gOyCsA!5e0!3m2!1sko!2skr!4v1747386313797!5m2!1sko!2skr"></iframe>`
    },   
    {
      name: "Naorishoku",
      rating: 5,
      type: "Japanese",
      price: "₩10000 - ₩20000",
      description: "Taste the Japanese style home made meal.",
      address:"271-14 Geumgang-ro, Geumjeong-gu, Busan",
      menu: [
    "Grilled Saba Set - ₩12,000",
    "Homemade Tonkatsu - ₩11,000",
    "Egg Roll - ₩4,000",
    "Miso Soup - ₩1,500"
  ],
  review: [
    "⭐️⭐️⭐️⭐️⭐️ - Feels like a home-cooked meal. So comforting!",
    "⭐️⭐️⭐️⭐️ - Great quality and clean taste.",
    "⭐️⭐️⭐️⭐️⭐️ - Staff was very kind. Would come again.",
    "⭐️⭐️⭐️⭐️ - A little small inside, but cozy atmosphere.",
    "⭐️⭐️⭐️⭐️⭐️ - Amazing food!"
  ],
      image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190110_83%2F1547119264772KireS_JPEG%2FpRH85W3U6NoOHkYfZpD-IU6n.jpg",
      mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.9476268487783!2d129.08252177561386!3d35.23267375448438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893ec3f366d47%3A0xb0723c8e156cf60d!2z64KY7Jik66as7Ie87L-g!5e0!3m2!1sko!2skr!4v1747389268453!5m2!1sko!2skr"></iframe>`
  },    
  {
    name: "Tonshou",
    rating: 3.8,
    type: "Japanese",
    price: "₩10000 - ₩20000",
    description: "Taste the Japanese style fried pork. Speciality menu served.",
    address:"247-10 Geumgang-ro, Geumjeong-gu, Busan",
    menu: [
    "Premium Pork Cutlet - ₩11,000",
    "Cheese Pork Cutlet - ₩12,000",
    "Curry Cutlet Set - ₩13,000",
    "Fried Shrimp - ₩9,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️ - The pork was crispy and juicy!",
    "⭐️⭐️⭐️ - Waited a bit too long, but still good.",
    "⭐️⭐️⭐️⭐️ - Curry sauce was amazing.",
    "⭐️⭐️⭐️ - A little oily but very flavorful."
  ],
    image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250227_141%2F1740632241060QoBc4_JPEG%2F20240710-%25C5%25E6%25BC%25EE%25BF%25EC-%25BD%25BA%25B3%25C0-04-%25C6%25ED%25C1%25FD.jpg",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104398.0168107584!2d128.98514031719552!3d35.145695140407035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893ceac5aa76b%3A0x799fba4427783b33!2z7Yak7Ie87JqwIOu2gOyCsOuMgOuzuOygkA!5e0!3m2!1sko!2skr!4v1747389393783!5m2!1sko!2skr"></iframe>`
}, 
{
  name: "Turtle town",
  rating: 4.5,
  type: "Korean",
  price: "₩10000 - ₩20000",
  description: "Korean pork delicious with variety of food.",
  address:"22 Jangjeon-ro, Geumjeong-gu, Busan",
  menu: [
    "Grilled Pork Belly (Samgyeopsal) - ₩13,000",
    "Spicy Stir-fried Pork - ₩12,000",
    "Cold Noodles (Naengmyeon) - ₩7,000",
    "Kimchi Stew - ₩6,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️⭐️ - Perfect place for pork lovers!",
    "⭐️⭐️⭐️⭐️ - Side dishes were delicious.",
    "⭐️⭐️⭐️ - Good taste but a bit crowded.",
    "⭐️⭐️⭐️⭐️⭐️ - Would definitely come again with friends!",
    "⭐️⭐️⭐️ - Too much waiting."
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240308_277%2F1709876270993iGdmC_JPEG%2F1.jpg",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52138.58910243595!2d129.05058284050722!3d35.23978763307004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568932076b83d9d%3A0x2fb534a06ebdbaba!2z6rGw67aB7J2064-Z64SkIOu2gOyCsOyepeyghOygkA!5e0!3m2!1sko!2skr!4v1747389564672!5m2!1sko!2skr"></iframe>`
},
{
  name: "Hozac",
  rating: 5,
  type: "American",
  price: "₩9500 - ₩14000",
  description: "Delicious pasta and risoto in Busan!",
  address: "22 Jangjeon-ro 20beon-gil, Geumjeong-gu, Busan",
  menu: [
    "Cream Bacon Pasta - ₩13,000",
    "Tomato Seafood Pasta - ₩14,000",
    "Mushroom Risotto - ₩11,500",
    "Garlic Bread - ₩3,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️⭐️ - Best pasta in Busan! Highly recommended.",
    "⭐️⭐️⭐️⭐️⭐️ - Loved the creamy bacon flavor, very rich.",
    "⭐️⭐️⭐️⭐️ - Risotto was slightly salty but still good.",
    "⭐️⭐️⭐️⭐️⭐️ - Cozy vibe, perfect for dates or solo lunch!"
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221025_99%2F1666681402849c9qzO_JPEG%2FD1D83D7D-00D9-415B-8CDD-19C143525235.jpeg",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0985514938666!2d129.08466447576754!3d35.22891667273656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568934b95380c35%3A0x8cc594d2d81b5970!2z7Zi47J6R!5e0!3m2!1sko!2skr!4v1748413030394!5m2!1sko!2skr"></iframe>`
},
{
  name: "PhoForPho",
  rating: 4.1,
  type: "Vietnamese",
  price: "₩10000 - ₩20000",
  description: "Perfect place to taste the soup of VIetnam",
  address: "264 Geumgang-ro, Geumjeong-gu, Busan",
  menu: [
    "Pho Bo - ₩10,000",
    "Spring Rolls - ₩7,000",
    "Vietnamese Iced Coffee - ₩5,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️⭐️ - Best pho I've had in Korea!",
    "⭐️⭐️⭐️⭐️ - Cozy and clean.",
    "⭐️⭐️⭐️ - A bit salty but still good."
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240318_147%2F1710688238236vSphV_JPEG%2FIMG_3830_jpg.jpeg",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.9922090289915!2d129.08267807576766!3d35.231563972735685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893ed2ca0a3ff%3A0x5652fa9213e72bbb!2z7Y-s7Y-s7Y-sIOu2gOyCsOuMgA!5e0!3m2!1sko!2skr!4v1748413372526!5m2!1sko!2skr"></iframe>`
},
{
  name: "SomunnanChoryangHalmaeJjukkumi",
  rating: 4.2,
  type: "Korean",
  price: "₩20000 - ₩30000",
  description: "The perfect octopus dish",
  address: "48 Osige-ro, Geumjeong-gu, Busan",
  menu: [
    "Grilled Jjukkumi - ₩20,000",
    "Spicy Stir-fried Jjukkumi - ₩22,000",
    "Soju - ₩4,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️ - Spicy and addictive!",
    "⭐️⭐️⭐️⭐️⭐️ - Grandma’s recipe rocks.",
    "⭐️⭐️⭐️ - Too spicy for some."
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250401_49%2F1743439798702KS5uU_JPEG%2F1000002853.jpg",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.3766964633573!2d129.083115283843!3d35.22199168479017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35689396c1d6db6b%3A0xee246de05899d423!2z7IaM66y464Kc7LSI65-J7ZWg66ek7K2I6r6466-4!5e0!3m2!1sko!2skr!4v1748413500181!5m2!1sko!2skr"></iframe>`
},
{
  name: "Phomantico",
  rating: 4.5,
  type: "Vietnamese",
  price: "₩10000 - ₩20000",
  description: "Calming atmosphere with good food",
  address: "16 Jangjeon-ro 12beon-gil, Geumjeong-gu, Busan",
  menu: [
    "Ssalguksu - ₩13,000",
    "stired rice pineapple - ₩14,000",
    "coke - ₩3,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️ - delicious but a bit expensive.",
    "⭐️⭐️⭐️⭐️⭐️ - amazing food and atmosphere.",
    "⭐️⭐️⭐️ - Too expensive."
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221123_265%2F1669197511166MgKzn_PNG%2F%25C6%25F7%25B8%25C7.png",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.1184316580748!2d129.0852555756138!3d35.22842175471551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35689305561897b7%3A0x3fccfc3010e6f60!2z7Y-s66eo7Yuw7L2U!5e0!3m2!1sko!2skr!4v1748413786548!5m2!1sko!2skr"></iframe>`
},
{
  name: "Migakbanjum",
  rating: 4.3,
  type: "Chinese",
  price: "₩1 - ₩10000",
  description: "Best tangsuyuk in town",
  address: "38 Jangjeon-ro, Geumjeong-gu, Busan",
  menu: [
    "jjajangmyeon - ₩10,000",
    "jjambbong - ₩10,000",
    "bokeumbap - ₩13,000",
    "ganjjajang - ₩12,000",
    "Tangsuyuk - ₩15,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️ - fast and delicious.",
    "⭐️⭐️⭐️⭐️⭐️ - Best tangsuyuk in Busan!",
    "⭐️⭐️⭐️ - Food is good, but old building."
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200203_283%2F1580725379741V41Ua_JPEG%2F8G12tpkAwfJJTHYldmuXWthI.jpg",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.09994206023!2d129.08244037561383!3d35.22888205469061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35689393338d5c47%3A0xb333f63b1e4a65f7!2z66-46rCB67CY7KCQ!5e0!3m2!1sko!2skr!4v1748413923445!5m2!1sko!2skr"></iframe>`
},
{
  name: "Gangho",
  rating: 4.0,
  type: "Chinese",
  price: "₩20000 - ₩30000",
  description: "Best Mapatofu in Haeundae",
  address: "2F, 42-1 Gunam-ro, Haeundae-gu, Busan",
  menu: [
    "mapatofu - ₩15,000",
    "jjajangmyeon - ₩14,000",
    "chinese styled grilled pork - ₩20,000"
  ],
  review: [
    "⭐️⭐️⭐️⭐️ - delicious! But have to wait alot.",
    "⭐️⭐️⭐️⭐️⭐️ - I have never been to such good Chinese restaurant.",
    "⭐️⭐️ - Food is good, but expensive and too much waiting.",
    "⭐️⭐️⭐️⭐️⭐️ - Amazing. Definitely would come again."
  ],
  image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTA1MjdfODgg%2FMDAxNzQ4MzQ4MDY0MTc3.IPGglJDist0EG8IScWujLMF4aXiX2NGe6H9ywRQqEDEg.E5UBz4Iu8fSIfFLvkSnRO7DjCEqlXge6e9iw-5yGolMg.JPEG%2F20250527_211158.jpg.jpg%3Ftype%3Dw1500_60_sharpen",
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8515416175487!2d129.15875837561097!3d35.16032305841339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688d6484bef0a5%3A0x7d3f4d1d59c7d7c8!2z6rCV7Zi4!5e0!3m2!1sko!2skr!4v1748414078631!5m2!1sko!2skr"></iframe>`
}
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
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favorites.some(fav => fav.name === item.name);

    card.innerHTML = `
      <div class="image-area" style="position: relative;">
        <img src="${item.image}" alt="${item.name}" class="restaurant-image" />
        <button class="heart-btn ${isFavorite ? 'filled' : ''}" data-name="${item.name}" style="
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
        ">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                     2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                     C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                     c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="stars">${getStars(item.rating)}</div>
        <div class="name">${item.name}</div>
        <div class="type">${item.type}</div>
      </div>
    `;

    card.querySelector(".heart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const updatedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const index = updatedFavorites.findIndex(fav => fav.name === item.name);
      const heartBtn = e.currentTarget;

      if (index >= 0) {
        updatedFavorites.splice(index, 1);
        heartBtn.classList.remove("filled");
      } else {
        updatedFavorites.push(item);
        heartBtn.classList.add("filled");
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    });

    card.addEventListener("click", (e) => {
      if (e.target.closest(".heart-btn")) return; // 하트 누른 경우엔 무시
      const viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
  viewed.push(item);
  localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
  localStorage.setItem("selectedRestaurant", JSON.stringify(item));
      localStorage.setItem("recentlyViewed", JSON.stringify(viewed));

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

  function renderRecentlyViewed() {
  const recentContainer = document.getElementById("recentlyContainer");
  const recentItems = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
  recentContainer.innerHTML = "";

  recentItems.slice(-3).reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "recent-card";
    div.innerHTML = `
      <div class="image-area"><img src="${item.image}" alt="${item.name}" /></div>
      <div class="card-body">
        <div class="stars">${getStars(item.rating)}</div>
        <div class="name">${item.name}</div>
        <div class="type">${item.type}</div>
      </div>
    `;
    div.addEventListener("click", () => {
      localStorage.setItem("selectedRestaurant", JSON.stringify(item));
      window.location.href = "detail.html";
    });
    recentContainer.appendChild(div);
  });
}
renderRecentlyViewed();
  
  renderCards(data);
  searchInput.addEventListener("input", applySearchFilter);
  sortSelect.addEventListener("change", applySort);
  document.getElementById("applyBtn").addEventListener("click", applyFilter);
  document.getElementById("filterBtn").addEventListener("click", toggleFilterPopup);
  document.getElementById("closeBtn").addEventListener("click", toggleFilterPopup);
});
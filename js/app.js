
const products = [
  { id: 1, name: "Louis XVI Palais Royal", img: "./img/palais-royal.jpg", price: "1290 CHF", cat: "Klasik" },
  { id: 2, name: "Apple Watch SE", img: "./img/applewatch-se.png", price: "179.95 CHF", cat: "Smart" },
  { id: 3, name: "Bomberg Racing 4.2", img: "./img/bomberg-racing.jpg", price: "890 CHF", cat: "Spor" },
  { id: 4, name: "Huawei Watch GT 5", img: "./img/huawei-gt5.png", price: "159 CHF", cat: "Smart" },
  { id: 5, name: "Garmin Fenix 7 Pro Solar", img: "./img/garmin-fenix7.jpg", price: "599.90 CHF", cat: "Spor" },
  { id: 6, name: "Omega Seamaster Diver 007", img: "./img/omega-seamaster.jpg", price: "9500 CHF", cat: "Lüks" },
  { id: 7, name: "Samsung Galaxy Watch 8 Classic", img: "./img/samsung-watch8.png", price: "424.15 CHF", cat: "Smart" },
  { id: 8, name: "Rolex Datejust 41mm Blackout", img: "./img/rolex-datejust.png", price: "10500 CHF", cat: "Lüks" }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Kategori: ${p.cat}</p>
    <p><strong>${p.price}</strong></p>
  `;
  container.appendChild(div);
});

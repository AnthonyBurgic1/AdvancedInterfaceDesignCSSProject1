document.getElementById("year").textContent = new Date().getFullYear();

const mobileNav = document.getElementById("mobileNav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  mobileNav.style.display = mobileNav.style.display === "none" ? "block" : "none";
});

/* My Sample product data */
const KITS = [
  { id:'abx-01', title:'C9R Sports Car', tagline:'Sports Car — sleek profile', level:'Intermediate', time:'30 minutes to 1 hour', price:'$39.99', imageSrc:'images/C9R-SportsCar.jpg', desc:'A wooden Sports car.' },
  { id:'abx-02', title:'HR1 HotRod', tagline:'Fun HotRod', level:'Beginner', time:'30 minutes to 1 hour', price:'$29.99', imageSrc:'images/HotRod-HR1.jpg', desc:'Wooden Hotrod Muscle car.' },
  { id:'abx-05', title:'M9 Sports Minivan', tagline:'Sports Minivan', level:'Advanced', time:'30 minutes to 1 hour', price:'$49.99', imageSrc:'images/M9-SportsVan.jpg', desc:'Wooden Minivan.' },
  { id:'abx-08', title:'T9 Pickup Truck', tagline:'Lifted Sports Pickup Truck', level:'Intermediate', time:'30 minutes to 1 hour', price:'$34.99', imageSrc:'images/T9-PickupTruck.jpg', desc:'Lifted Wooden pickup truck.' },
  { id:'abx-11', title:'T900 Pickup Truck', tagline:'Top Model Pickup Truck', level:'Advanced', time:'30 minutes to 1 hour', price:'$44.99', imageSrc:'images/T900-Truck.jpg', desc:'Wooden Sports Pickup Truck.' }
];

/* This is my Routing */
function router() {
  const hash = location.hash.replace("#/", "");

  if (hash === "" || hash === "home") return renderHome();
  if (hash === "kits") return renderKits();

  const match = KITS.find(k => k.id === hash);
  if (match) return renderKitDetail(match);

  renderHome();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

/* This is my Render Functions */
function renderHome() {
  document.getElementById("app").innerHTML = `
    <h1 class="mb-3">Welcome to Automoblox</h1>
    <p>Explore wooden car kits designed for creativity and fun.</p>

    <h3 class="mt-4">Featured Kits</h3>
    <div class="kits-grid">
      ${KITS.slice(0, 3).map(k => kitCardHTML(k)).join("")}
    </div>
  `;
}

function renderKits() {
  document.getElementById("app").innerHTML = `
    <h1 class="mb-3">All Kits</h1>
    <div class="kits-grid">
      ${KITS.map(k => kitCardHTML(k)).join("")}
    </div>
  `;
}

function renderKitDetail(kit) {
  document.getElementById("app").innerHTML = `
    <a href="#/kits" class="d-block mb-2">← Back to Kits</a>

    <div class="kit-detail row g-4">
      <div class="col-md-6">
        <img src="${kit.imageSrc}" class="img-fluid rounded" />
      </div>
      <div class="col-md-6">
        <h2>${kit.title}</h2>
        <p>${kit.desc}</p>
        <p><strong>Level:</strong> ${kit.level}</p>
        <p><strong>Build Time:</strong> ${kit.time}</p>
        <p><strong>Price:</strong> ${kit.price}</p>
      </div>
    </div>
  `;
}

/* Here is where I keep my component */
function kitCardHTML(k) {
  return `
    <div class="card-kit">
      <div class="kit-media">
        <img src="${k.imageSrc}" alt="${k.title}">
      </div>
      <div class="kit-body">
        <h4 class="kit-title">${k.title}</h4>
        <div class="kit-meta">${k.tagline}</div>
        <a href="#/${k.id}" class="btn btn-sm btn-outline-dark mt-2">View</a>
      </div>
    </div>
  `;
}

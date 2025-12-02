document.getElementById("year").textContent = new Date().getFullYear();

const mobileNav = document.getElementById("mobileNav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  mobileNav.style.display = mobileNav.style.display === "none" ? "block" : "none";
});

/* My Sample product data */
const KITS = [
  { id:'abx-01', title:'ABX Formula', tagline:'Racer — sleek profile', level:'Intermediate', time:'2–3 hrs', price:'$39.99', imageSrc:'images/C9R-SportsCar.jpg', desc:'A streamlined wooden racer.' },
  { id:'abx-02', title:'ABX Cruiser', tagline:'Family cruiser', level:'Beginner', time:'1–2 hrs', price:'$29.99', imageSrc:'images/HotRod-HR1.jpg', desc:'Comfortable cruiser kit.' },
  { id:'abx-05', title:'ABX Offroad', tagline:'Terrain truck', level:'Advanced', time:'3–4 hrs', price:'$49.99', imageSrc:'images/abx-offroad.jpg', desc:'Off-road suspension kit.' },
  { id:'abx-08', title:'ABX Vintage', tagline:'Classic coupe', level:'Intermediate', time:'2–3 hrs', price:'$34.99', imageSrc:'images/abx-vintage.jpg', desc:'Retro wooden coupe.' },
  { id:'abx-11', title:'ABX Speedster', tagline:'Minimalist speed', level:'Advanced', time:'2–3 hrs', price:'$44.99', imageSrc:'images/abx-speedster.jpg', desc:'Lightweight speedster.' }
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

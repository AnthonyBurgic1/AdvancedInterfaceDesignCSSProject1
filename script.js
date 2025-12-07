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

/* Routing */
function router() {
  const hash = location.hash.replace("#/", "");

  if (hash === "" || hash === "home") return renderHome();
  if (hash === "kits") return renderKits();
  if (hash === "about") return renderAbout();
  if (hash === "contact") return renderContact();

  const match = KITS.find(k => k.id === hash);
  if (match) return renderKitDetail(match);

  renderHome();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

/* Render Functions */
function renderHome() {
  document.getElementById("app").innerHTML = `
    <h1 class="mb-3">Welcome to Automoblox</h1>
    <p>Explore all wooden car kits designed for creativity and fun.</p>

    <h3 class="mt-4">All of our Featured Kits</h3>
    <div class="kits-grid">
      ${KITS.slice(0, 3).map(k => kitCardHTML(k)).join("")}
    </div>
  `;
}

function renderKits() {
  document.getElementById("app").innerHTML = `
    <h1 class="mb-3">All our Kits</h1>
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

/* ABOUT PAGE */
function renderAbout() {
  document.getElementById("app").innerHTML = `
    <h1 class="mb-3">About Automoblox</h1>

    <div class="kit-detail">
      <h3>Who We Are</h3>
      <p>
        Automoblox® kits are designed to inspire creativity, hands-on learning, and imaginative play.
        Built with premium wood and durable interchangeable components, each kit encourages 
        experimentation and personalization.
      </p>

      <h3 class="mt-4">Our Mission</h3>
      <p>
        We believe in blending classic craftsmanship with modern design. 
        Our goal is to give builders of all ages a satisfying experience 
        that sparks curiosity, problem-solving, and creativity.
      </p>

      <h3 class="mt-4">What Makes Automoblox Unique?</h3>
      <ul>
        <li>Interchangeable components for endless customization</li>
        <li>Premium wood construction for durability</li>
        <li>Award-winning design philosophy</li>
        <li>Collectible kits suitable for both play and display</li>
      </ul>

      <p class="mt-4">
        Whether you're building your first kit or adding to a growing collection, 
        Automoblox delivers a fun and rewarding hands-on experience.
      </p>
    </div>
  `;
}

/* CONTACT PAGE */
function renderContact() {
  document.getElementById("app").innerHTML = `
    <h1 class="mb-3">Contact Us</h1>

    <div class="kit-detail">
      <p>
        Have a question about your kit, need help with a build, or want to share feedback?
        Use the form below — we'd love to hear from you!
      </p>

      <form id="contactForm" class="mt-3">
        <div class="mb-3">
          <label class="form-label">Your Name</label>
          <input type="text" class="form-control" id="cName" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Your Email</label>
          <input type="email" class="form-control" id="cEmail" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea class="form-control" id="cMessage" rows="4" required></textarea>
        </div>

        <button class="btn btn-dark" type="submit">Send Message</button>
      </form>

      <div id="contactSuccess" class="alert alert-success mt-3 d-none">
        Thank you! Your message has been sent.
      </div>
    </div>
  `;

  // Form handler
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    document.getElementById("contactSuccess").classList.remove("d-none");
    this.reset();
  });
}

/* Reusable component */
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
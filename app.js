const products = [
  {
    id: "oboe-classic",
    image: "assets/placeholder-1.svg",
    price: 22,
    stock: true,
    names: {
      fr: "Anche hautbois - Classique",
      en: "Oboe Reed - Classic",
      es: "Cana de oboe - Clasica",
      de: "Oboe-Rohrblatt - Klassik",
    },
    desc: {
      fr: "Reponse rapide, nuance stable, pour orchestre et solo.",
      en: "Quick response and stable color for orchestra or solo work.",
      es: "Respuesta rapida y color estable para orquesta o solista.",
      de: "Schnelle Ansprache und stabiler Klang fur Orchester und Solo.",
    },
  },
  {
    id: "oboe-reserve",
    image: "assets/placeholder-2.svg",
    price: 24,
    stock: false,
    names: {
      fr: "Anche hautbois - Reserve",
      en: "Oboe Reed - Reserve",
      es: "Cana de oboe - Reserva",
      de: "Oboe-Rohrblatt - Reserve",
    },
    desc: {
      fr: "Grain dense et projection naturelle pour grandes salles.",
      en: "Dense cane and natural projection for large halls.",
      es: "Cana densa y proyeccion natural para salas grandes.",
      de: "Dichtes Holz und naturliche Projektion fur grosse Saale.",
    },
  },
  {
    id: "english-horn",
    image: "assets/placeholder-3.svg",
    price: 28,
    stock: true,
    names: {
      fr: "Anche cor anglais",
      en: "English Horn Reed",
      es: "Cana de corno ingles",
      de: "Englischhorn-Rohrblatt",
    },
    desc: {
      fr: "Son rond, registre grave solide, attaque souple.",
      en: "Round tone with a solid low register and smooth attack.",
      es: "Sonido redondo, registro grave solido y ataque suave.",
      de: "Runder Ton mit stabilem Tiefregister und weicher Ansprache.",
    },
  },
  {
    id: "reed-blanks",
    image: "assets/placeholder-1.svg",
    price: 18,
    stock: true,
    names: {
      fr: "Ebauches d'anches",
      en: "Reed Blanks",
      es: "Blancos de cana",
      de: "Rohrblatt-Rohlinge",
    },
    desc: {
      fr: "Ebauches pre-assechees pour ajustage rapide.",
      en: "Pre-seasoned blanks for fast finishing.",
      es: "Blancos pre-secos para un acabado rapido.",
      de: "Vorgealterte Rohlinge fur schnelles Finishing.",
    },
  },
  {
    id: "cane-tubes",
    image: "assets/placeholder-2.svg",
    price: 30,
    stock: false,
    names: {
      fr: "Cannes selectionnees",
      en: "Selected Cane Tubes",
      es: "Tubos de cana seleccionados",
      de: "Ausgewahlte Rohrstangen",
    },
    desc: {
      fr: "Cannes triees par densite et diametre.",
      en: "Sorted by density and diameter for consistency.",
      es: "Clasificado por densidad y diametro para consistencia.",
      de: "Nach Dichte und Durchmesser sortiert.",
    },
  },
  {
    id: "gouged-cane",
    image: "assets/placeholder-3.svg",
    price: 34,
    stock: true,
    names: {
      fr: "Cannes gougees",
      en: "Gouged Cane",
      es: "Cana gubiada",
      de: "Ausgehobeltes Rohr",
    },
    desc: {
      fr: "Profil lisse, pret pour la forme et le grattage.",
      en: "Smooth profile, ready for shaping and scraping.",
      es: "Perfil liso, listo para dar forma y raspar.",
      de: "Glatte Form, bereit fur Formen und Schaben.",
    },
  },
];

const i18n = {
  fr: {
    brand_tagline: "Anches artisanales pour musiciens modernes.",
    contact: "Contact",
    hero_title: "Il faut en jouer pour savoir.",
    hero_sub:
      "Anches et cannes finies a la main pour hautbois et cor anglais. Fabrique en Europe, livraison mondiale.",
    hero_cta: "Voir la collection",
    hero_cta_secondary: "Rencontrer l'artisan",
    shop_title: "Boutique",
    slider_title: "Product slider",
    about_title: "A propos",
    about_body:
      "Reeds Europe est nee du besoin d'anches fiables pour chaque contexte musical. Chaque anche est finie a la main, avec des cannes choisies pour leur densite et leur elasticite. L'objectif est simple : des anches stables des la premiere note.",
    contact_title: "Contact",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Envoyer",
    contact_email_label: "Email",
    contact_phone_label: "Telephone",
    contact_address_label: "Atelier",
    legal_title: "Infos legales",
    legal_notice_title: "Mentions legales",
    legal_notice_body:
      "Operateur : Reeds Europe, 14 Rue des Anches, 75004 Paris. TVA: FRXX123456789. Responsable: A. Martin.",
    legal_cgv_title: "CGV",
    legal_cgv_body: "Commandes traitees sous 2 a 5 jours. Retours sous 14 jours pour produits non utilises.",
    legal_privacy_title: "Confidentialite",
    legal_privacy_body:
      "Les donnees sont utilisees uniquement pour le traitement des commandes et le support client.",
    legal_cookies_title: "Cookies",
    legal_cookies_body: "Ce site utilise des cookies techniques pour ameliorer l experience.",
    footer_copy: "©2026 Reeds Europe. Tous droits reserves.",
    footer_legal: "Mentions",
    quick_view: "Apercu",
    in_stock: "En stock",
    out_stock: "Rupture",
    paypal: "Payer avec PayPal",
  },
  en: {
    brand_tagline: "Artisan reeds for modern players.",
    contact: "Contact",
    hero_title: "It takes one to know one.",
    hero_sub:
      "Hand-finished reeds and cane for oboe and english horn. Made in Europe, shipped worldwide.",
    hero_cta: "Shop the collection",
    hero_cta_secondary: "Meet the maker",
    shop_title: "Shop",
    slider_title: "Product slider",
    about_title: "About",
    about_body:
      "Reeds Europe was founded to deliver reliable reeds for every musical context. Each reed is finished by hand, with cane selected for density and elasticity. The goal is simple: reeds that feel ready from the first note.",
    contact_title: "Contact",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_address_label: "Studio",
    legal_title: "Legal",
    legal_notice_title: "Legal notice",
    legal_notice_body:
      "Operator: Reeds Europe, 14 Rue des Anches, 75004 Paris. VAT: FRXX123456789. Director: A. Martin.",
    legal_cgv_title: "Terms",
    legal_cgv_body: "Orders processed in 2 to 5 days. Returns within 14 days for unused items.",
    legal_privacy_title: "Privacy",
    legal_privacy_body:
      "Data is used only for order processing and customer support.",
    legal_cookies_title: "Cookies",
    legal_cookies_body: "This site uses technical cookies to improve the experience.",
    footer_copy: "©2026 Reeds Europe. All rights reserved.",
    footer_legal: "Legal",
    quick_view: "Quick View",
    in_stock: "In stock",
    out_stock: "Out of stock",
    paypal: "Pay with PayPal",
  },
  es: {
    brand_tagline: "Canas artesanales para musicos modernos.",
    contact: "Contacto",
    hero_title: "Hay que tocarlo para saberlo.",
    hero_sub:
      "Canas y tubos terminados a mano para oboe y corno ingles. Hecho en Europa, envios globales.",
    hero_cta: "Ver la coleccion",
    hero_cta_secondary: "Conocer al artesano",
    shop_title: "Tienda",
    slider_title: "Product slider",
    about_title: "Sobre nosotros",
    about_body:
      "Reeds Europe nacio para ofrecer canas fiables en cada contexto musical. Cada cana se termina a mano con material seleccionado por densidad y elasticidad. El objetivo es simple: canas listas desde la primera nota.",
    contact_title: "Contacto",
    contact_name: "Nombre",
    contact_email: "Email",
    contact_message: "Mensaje",
    contact_send: "Enviar",
    contact_email_label: "Email",
    contact_phone_label: "Telefono",
    contact_address_label: "Taller",
    legal_title: "Legal",
    legal_notice_title: "Aviso legal",
    legal_notice_body:
      "Operador: Reeds Europe, 14 Rue des Anches, 75004 Paris. IVA: FRXX123456789. Responsable: A. Martin.",
    legal_cgv_title: "Condiciones",
    legal_cgv_body: "Pedidos procesados en 2 a 5 dias. Devoluciones en 14 dias para productos sin usar.",
    legal_privacy_title: "Privacidad",
    legal_privacy_body:
      "Los datos se usan solo para procesar pedidos y atencion al cliente.",
    legal_cookies_title: "Cookies",
    legal_cookies_body: "Este sitio usa cookies tecnicas para mejorar la experiencia.",
    footer_copy: "©2026 Reeds Europe. Todos los derechos reservados.",
    footer_legal: "Legal",
    quick_view: "Vista rapida",
    in_stock: "Disponible",
    out_stock: "Agotado",
    paypal: "Pagar con PayPal",
  },
  de: {
    brand_tagline: "Handgemachte Rohre fur moderne Musiker.",
    contact: "Kontakt",
    hero_title: "Man muss es spielen, um es zu kennen.",
    hero_sub:
      "Handgefertigte Rohre und Rohrstangen fur Oboe und Englischhorn. Hergestellt in Europa, weltweiter Versand.",
    hero_cta: "Kollektion ansehen",
    hero_cta_secondary: "Den Hersteller treffen",
    shop_title: "Shop",
    slider_title: "Product slider",
    about_title: "Uber uns",
    about_body:
      "Reeds Europe wurde gegrundet, um zuverlassige Rohre fur jeden musikalischen Kontext zu liefern. Jedes Rohr wird von Hand fertiggestellt, mit ausgewahltem Material fur Dichte und Elastizitat. Ziel ist einfach: Rohre, die sich ab dem ersten Ton bereit anfuhlen.",
    contact_title: "Kontakt",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Nachricht",
    contact_send: "Senden",
    contact_email_label: "Email",
    contact_phone_label: "Telefon",
    contact_address_label: "Atelier",
    legal_title: "Rechtliches",
    legal_notice_title: "Impressum",
    legal_notice_body:
      "Betreiber: Reeds Europe, 14 Rue des Anches, 75004 Paris. USt-ID: FRXX123456789. Verantwortlich: A. Martin.",
    legal_cgv_title: "AGB",
    legal_cgv_body: "Bestellungen in 2 bis 5 Tagen. Ruckgabe innerhalb von 14 Tagen fur unbenutzte Ware.",
    legal_privacy_title: "Datenschutz",
    legal_privacy_body:
      "Daten werden nur fur Bestellabwicklung und Kundensupport verwendet.",
    legal_cookies_title: "Cookies",
    legal_cookies_body: "Diese Seite verwendet technische Cookies zur Verbesserung der Erfahrung.",
    footer_copy: "©2026 Reeds Europe. Alle Rechte vorbehalten.",
    footer_legal: "Rechtliches",
    quick_view: "Schnellansicht",
    in_stock: "Auf Lager",
    out_stock: "Ausverkauft",
    paypal: "Mit PayPal zahlen",
  },
};

const state = {
  lang: "fr",
  slideIndex: 0,
};

const grid = document.querySelector("#product-grid");
const modal = document.querySelector("#quick-view");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalDesc = document.querySelector("#modal-desc");
const modalPrice = document.querySelector("#modal-price");
const modalStock = document.querySelector("#modal-stock");
const modalPaypal = document.querySelector("#modal-paypal");

function renderProducts() {
  const t = i18n[state.lang];
  grid.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    const stockText = product.stock ? t.in_stock : t.out_stock;
    const stockClass = product.stock ? "stock" : "stock out";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.names[state.lang]}" />
      <h3>${product.names[state.lang]}</h3>
      <div class="price">€${product.price}</div>
      <div class="${stockClass}">${stockText}</div>
      <button class="quick-view" data-id="${product.id}">${t.quick_view}</button>
    `;
    grid.appendChild(card);
  });
}

function openModal(product) {
  const t = i18n[state.lang];
  modalImage.src = product.image;
  modalTitle.textContent = product.names[state.lang];
  modalDesc.textContent = product.desc[state.lang];
  modalPrice.textContent = `€${product.price}`;
  modalStock.textContent = product.stock ? t.in_stock : t.out_stock;
  modalStock.className = product.stock ? "stock" : "stock out";
  modalPaypal.textContent = t.paypal;
  modalPaypal.href = product.stock ? "https://paypal.me/" : "#";
  modalPaypal.setAttribute("aria-disabled", product.stock ? "false" : "true");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function applyTranslations() {
  const t = i18n[state.lang];
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (t[key]) {
      node.textContent = t[key];
    }
  });
  renderProducts();
}

function initModal() {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  grid.addEventListener("click", (event) => {
    const btn = event.target.closest(".quick-view");
    if (!btn) return;
    const product = products.find((item) => item.id === btn.dataset.id);
    if (product) openModal(product);
  });
}

function initSlider() {
  const track = document.querySelector(".slider-track");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const buttons = document.querySelectorAll(".slider-btn");

  function updateSlider() {
    const offset = state.slideIndex * -100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}%)`;
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = btn.dataset.dir === "next" ? 1 : -1;
      state.slideIndex = (state.slideIndex + dir + slides.length) % slides.length;
      updateSlider();
    });
  });

  setInterval(() => {
    state.slideIndex = (state.slideIndex + 1) % slides.length;
    updateSlider();
  }, 6000);
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = {
      fr: "Merci. Votre message a ete envoye.",
      en: "Thanks. Your message has been sent.",
      es: "Gracias. Tu mensaje ha sido enviado.",
      de: "Danke. Deine Nachricht wurde gesendet.",
    }[state.lang];
    alert(message);
    form.reset();
  });
}

function initLanguageSwitch() {
  const select = document.querySelector("#lang");
  select.value = state.lang;
  select.addEventListener("change", (event) => {
    state.lang = event.target.value;
    applyTranslations();
  });
}

applyTranslations();
initModal();
initSlider();
initContactForm();
initLanguageSwitch();

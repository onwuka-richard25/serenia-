const propertyClusters = [
  {
    key: "liora",
    name: "Liora estate",
    image: "Image Container.png",
    description: "Premium cluster with modern architecture, a private clubhouse, and 24/7 security, offering both style and peace of mind for residents.",
    features: ["3-5 Bedroom options", "Private gate & 24/7 security", "Near lifestyle center"],
  },
  {
    key: "nava",
    name: "Nava heights",
    image: "nava.png",
    description: "Designed for eco-living with wide open scenic jogging tracks and elevated views that bring nature closer to home.",
    features: ["2-4 Bedroom options", "Wide roads & open spaces", "Scenic jogging tracks"],
  },
  {
    key: "aruna",
    name: "Aruna residence",
    image: "aruna.png",
    description: "Spacious homes with minimalist design, surrounded by lush parks and playgrounds, the perfect place for families to grow and thrive.",
    features: ["2-4 Bedroom options", "Family-friendly facilities", "Easy access to main boulevard"],
  },
  {
    key: "velora",
    name: "Velora park",
    image: "velora.png",
    description: "Contemporary homes with stylish facades, pocket parks, and direct access to shopping and dining hubs.",
    features: ["2-4 Bedroom options", "Pocket parks & community spaces", "Trendy design homes"],
  },
  {
    key: "seraya",
    name: "Seraya grove",
    image: "seraya.png",
    description: "A vibrant cluster blending modern housing with lush greenery, close to schools and community spaces.",
    features: ["3-4 Bedroom options", "Central park & kids area", "Easy access to public facilities"],
  },
];

for (const details of document.querySelectorAll("nav.site-nav details.group")) {
  const panel = details.querySelector(":scope > div > .grid");
  const options = panel?.firstElementChild;
  const preview = panel?.children[1]?.querySelector("img");
  const info = panel?.children[2];
  const heading = info?.querySelector("h3");
  const description = info?.querySelector("p");
  const featureRows = info?.querySelectorAll(":scope > div:nth-child(2) > div");

  if (!options || !preview || !heading || !description || !featureRows?.length) continue;

  const buttons = Array.from(options.children, (option, index) => {
    const button = document.createElement("button");
    const cluster = propertyClusters[index];
    button.type = "button";
    button.className = `${option.className} property-cluster-option w-full cursor-pointer text-left transition-colors`;
    button.classList.remove("bg-slate-50", "font-bold", "text-black");
    button.dataset.cluster = cluster.key;
    button.setAttribute("aria-pressed", cluster.key === "aruna" ? "true" : "false");
    button.setAttribute("aria-label", `Show ${cluster.name}`);
    button.innerHTML = option.innerHTML;
    option.replaceWith(button);
    return button;
  });

  const selectCluster = (cluster) => {
    preview.src = `./assets/${cluster.image}`;
    preview.alt = cluster.name;
    heading.textContent = cluster.name;
    description.textContent = cluster.description;
    cluster.features.forEach((feature, index) => {
      const label = featureRows[index]?.querySelector("span");
      if (label) label.textContent = feature;
    });
    buttons.forEach((button) => {
      const selected = button.dataset.cluster === cluster.key;
      button.setAttribute("aria-pressed", String(selected));
      button.classList.toggle("property-cluster-option-active", selected);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cluster = propertyClusters.find((item) => item.key === button.dataset.cluster);
      if (cluster) selectCluster(cluster);
    });
  });

  selectCluster(propertyClusters.find((cluster) => cluster.key === "aruna"));
}

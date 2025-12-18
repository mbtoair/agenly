const data = {
  tools: [
    {
      name: "Email Automation",
      description: "Automate email writing and follow-ups"
    },
    {
      name: "SEO Optimizer",
      description: "Improve website SEO using AI"
    }
  ],
  agents: [
    {
      name: "Sales Agent",
      description: "AI agent for outbound sales and lead follow-up"
    },
    {
      name: "Support Agent",
      description: "Handles customer support queries 24/7"
    }
  ]
};

let currentType = "tools";

const cardsContainer = document.getElementById("cards");
const tabs = document.querySelectorAll(".tab");

function renderCards() {
  cardsContainer.innerHTML = "";

  data[currentType].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;

    cardsContainer.appendChild(card);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentType = tab.dataset.type;
    renderCards();
  });
});

renderCards();

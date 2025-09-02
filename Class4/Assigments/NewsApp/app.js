const searchBtn = document.getElementById("searchBtn");
const queryInput = document.getElementById("query");
const newsContainer = document.getElementById("newsContainer");
const errorMsg = document.getElementById("errorMsg");

const API_KEY = "pub_4d8307279e2b47639dc168012a7cbc48";

window.addEventListener("DOMContentLoaded", () => {
  fetchNews();
});

searchBtn.addEventListener("click", () => {
  const query = queryInput.value.trim();
  fetchNews(query);
});

async function fetchNews(query = "") {
  try {
    let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=pk&language=en`;
    if (query) {
      url += `&q=${query}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    console.log("data", data);

    if (!data.results || data.results.length === 0) {
      throw new Error("No news found");
    }

    displayNews(data.results);
    hideError();
  } catch (error) {
    showError(error.message);
    clearNews();
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = "";
  articles.forEach((article) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl flex flex-col";

    card.innerHTML = `
      <img class="h-48 w-full object-cover" src="${
        article.image_url || "https://placehold.co/600x400?text=No+Image"
      }" alt="News image" />
      <div class="p-6 flex flex-col flex-grow">
        <h2 class="text-lg font-semibold text-black mb-2">${article.title}</h2>
        <p class="text-gray-600 line-clamp-4">${
          article.description || "No description available."
        }</p>
        <a href="${
          article.link
        }" target="_blank" class="mt-4 inline-block px-12 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition duration-200">Read More</a>
      </div>
    `;

    newsContainer.appendChild(card);
  });
}

function clearNews() {
  newsContainer.innerHTML = "";
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
}

function hideError() {
  errorMsg.classList.add("hidden");
}

queryInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

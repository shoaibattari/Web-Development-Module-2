const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("username");
const userInfoDiv = document.getElementById("userInfo");
const errorMsg = document.getElementById("errorMsg");

searchBtn.addEventListener("click", async () => {
  const username = usernameInput.value.trim();
  if (!username) {
    showError("Please enter a username");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const userData = await response.json();
    console.log(userData, "userData");
    displayUser(userData);
    hideError();
  } catch (error) {
    showError(error.message);
    clearUserInfo();
  }
});

function displayUser(user) {
  const createdDate = new Date(user.created_at).toLocaleDateString();
  userInfoDiv.innerHTML = `
    <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:w-48 avatar" src="${
            user.avatar_url
          }" alt="Avatar of ${user.login}" />
        </div>
        <div class="p-8">
          <h2 class="block uppercase mt-1 text-lg leading-tight font-medium text-black hover:underline">${
            user.name || user.login
          }</h2>
          <p class="mt-2 text-gray-500">@${user.login}</p>
          ${user.bio ? `<p class="mt-2 text-gray-700">${user.bio}</p>` : ""}
          <p class="mt-1 text-sm text-gray-600"><strong>Joined:</strong> ${createdDate}</p>
          <div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span><strong>${user.public_repos}</strong> Repositories</span>
            <span><strong>${user.followers}</strong> Followers</span>
            <span><strong>${user.following}</strong> Following</span>
          </div>
          <a href="${
            user.html_url
          }" target="_blank" class="mt-4 inline-block px-12 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition duration-200">View Profile</a>
        </div>
      </div>
    </div>
  `;
}

function clearUserInfo() {
  userInfoDiv.innerHTML = "";
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
}

function hideError() {
  errorMsg.classList.add("hidden");
}

// Enter key support
usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

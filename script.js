// Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Copy page link button
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
  try {
    const url = window.location.href;

    // Clipboard API works best on https:// (hosting) vs file:// (local)
    await navigator.clipboard.writeText(url);

    copyBtn.disabled = true;
    const original = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i><span>Copied!</span>';
    setTimeout(() => {
      copyBtn.innerHTML = original;
      copyBtn.disabled = false;
    }, 1200);
  } catch (err) {
    alert("Could not copy. Try hosting the page (https) or copy the URL from your browser.");
  }
});

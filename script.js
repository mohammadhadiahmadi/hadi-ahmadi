function copyID() {
  const pubgId = document.getElementById("pubgId").innerText;
  navigator.clipboard.writeText(pubgId).then(() => {
    alert("PUBG ID کپی شد!");
  });
}

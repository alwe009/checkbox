const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    // track checked items
    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Selected Technology";
    }
  });
});

//初始化 sgs 密碼欄位-點眼睛會變明碼
document.querySelectorAll(".js-password").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const target =
      e.target.tagName === "path" ? e.target.parentElement : e.target;
    const passwordInput = target.parentElement.parentElement.querySelector(
      "input"
    );
    if (target.dataset.icon === "eye-slash") {
      target.dataset.icon = "eye";
      passwordInput.type = "text";
    } else {
      target.dataset.icon = "eye-slash";
      passwordInput.type = "password";
    }
    e.preventDefault();
  });
});

//我的規劃是modal被所有的東西共用 所以要確保被displaynone
function openModal(ele) {
  const modal = document.querySelector(".modal");
  ele.classList.remove("displaynone");
  modal.append(ele);
  modal.classList.add("js-open");
  document.querySelector("body").style = "overflow:hidden;";
}
function closeModal() {
  const modal = document.querySelector(".modal");
  [...modal.children].forEach((child) => {
    child.classList.add("displaynone");
  });
  modal.classList.remove("js-open");
  document.querySelector("body").style = "overflow:visible";
}

// document
//   .querySelector(".modal_Container")
//   .addEventListener("click", closeModal);

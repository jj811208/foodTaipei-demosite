"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//初始化 sgs 密碼欄位-點眼睛會變明碼
document.querySelectorAll(".js-password").forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    var target = e.target.tagName === "path" ? e.target.parentElement : e.target;
    var passwordInput = target.parentElement.parentElement.querySelector("input");

    if (target.dataset.icon === "eye-slash") {
      target.dataset.icon = "eye";
      passwordInput.type = "text";
    } else {
      target.dataset.icon = "eye-slash";
      passwordInput.type = "password";
    }

    e.preventDefault();
  });
}); //我的規劃是modal被所有的東西共用 所以要確保被displaynone

function openModal(ele) {
  var modal = document.querySelector(".modal");
  ele.classList.remove("displaynone");
  modal.append(ele);
  modal.classList.add("js-open");
  document.querySelector("body").style = "overflow:hidden;";
}

function closeModal() {
  var modal = document.querySelector(".modal");

  _toConsumableArray(modal.children).forEach(function (child) {
    child.classList.add("displaynone");
  });

  modal.classList.remove("js-open");
  document.querySelector("body").style = "overflow:visible";
} // document
//   .querySelector(".modal_Container")
//   .addEventListener("click", closeModal);
// let cart_is_empty = !true;

// const item_to_hide = Array.from(document.querySelectorAll(".cart-is-empty"));
// const item_to_show = Array.from(
//   document.querySelectorAll(".cart-is-not-empty")
// );

// console.log(item_to_hide);
// console.log(item_to_show);
// if (cart_is_empty) {
//   item_to_hide.forEach((item) => {
//     item.style.display = "none";
//   });
//   item_to_show.forEach((item) => {
//     item.style.display = "flex";
//   });
// } else {
//   item_to_hide.forEach((item) => {
//     item.style.display = "flex";
//   });
//   item_to_show.forEach((item) => {
//     item.style.display = "none";
//   });
// }

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector(".input");

input.addEventListener("change", (e) => {
  if (input.value < 0) {
    input.value = 1;
  }
  if (Number(input.value) === 0) {
    input.value = 0;
  }
});

plus.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});
minus.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1 < 0 ? 0 : parseInt(input.value) - 1;
});

const main_photo = document.querySelector("#main-photo");
const select_from = document.querySelectorAll(".select-from");
console.log(main_photo);
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

next.addEventListener("mouseover", () => {
  next.children[0].src = "./images/icon-next2.svg";
});

next.addEventListener("mouseleave", () => {
  next.children[0].src = "./images/icon-next.svg";
});

previous.addEventListener("mouseover", () => {
  previous.children[0].src = "./images/icon-previous2.svg";
});

previous.addEventListener("mouseleave", () => {
  previous.children[0].src = "./images/icon-previous.svg";
});

next.addEventListener("click", () => {
  let current_product_id = Number(main_photo.src.split("-product-")[1][0]);
  if (current_product_id < 4) {
    main_photo.src = Array.from(select_from)[current_product_id].src.replace(
      "-thumbnail",
      ""
    );
  }
});

previous.addEventListener("click", () => {
  let current_product_id = Number(main_photo.src.split("-product-")[1][0]);
  if (current_product_id > 1) {
    main_photo.src = Array.from(select_from)[
      current_product_id - 2
    ].src.replace("-thumbnail", "");
  }
});

Array.from(select_from).forEach((item) => {
  item.addEventListener("click", () => {
    main_photo.src = item.src.replace("-thumbnail", "");
    Array.from(select_from).forEach((itemoo) => {
      itemoo.parentElement.classList.remove("active");
    });
    item.parentElement.classList.add("active");
  });
});

const cart_toggler = document.querySelector("#cart-toggler");
const cart_modal = document.querySelector(".cart-modal");

cart_modal.style.display = "none";

cart_toggler.addEventListener("click", () => {
  cart_modal.style.display === "block"
    ? (cart_modal.style.display = "none")
    : (cart_modal.style.display = "block");
});
const single_product_modal = document.querySelector(".single-product-modal");
single_product_modal.style.display = "none";

main_photo.addEventListener("click", () => {
  if (screen.width > 1000) {
    single_product_modal.style.display = "block";
  }
});

const single_product_modal_closer = document.querySelector(
  "#single-product-modal-closer"
);
single_product_modal_closer.addEventListener("click", () => {
  single_product_modal.style.display = "none";
});

const single_product_modal_main_photo = document.querySelector(
  "#single-product-modal-main-photo"
);
const single_product_modal_select_from = document.querySelectorAll(
  ".single-product-modal-select-from"
);

Array.from(single_product_modal_select_from).forEach((item) => {
  item.addEventListener("click", () => {
    single_product_modal_main_photo.src = item.src.replace("-thumbnail", "");
    Array.from(single_product_modal_select_from).forEach((itemoo) => {
      itemoo.parentElement.classList.remove("active");
    });
    item.parentElement.classList.add("active");
  });
});

const next_single_product = document.querySelector(
  "#single-product-modal-next"
);
const previous_single_product = document.querySelector(
  "#single-product-modal-previous"
);

// on hover add event listener
next_single_product.addEventListener("mouseover", () => {
  next_single_product.children[0].src = "./images/icon-next2.svg";
});

// mouse leave
next_single_product.addEventListener("mouseleave", () => {
  next_single_product.children[0].src = "./images/icon-next.svg";
});

previous_single_product.addEventListener("mouseover", () => {
  previous_single_product.children[0].src = "./images/icon-previous2.svg";
});

previous_single_product.addEventListener("mouseleave", () => {
  previous_single_product.children[0].src = "./images/icon-previous.svg";
});

next_single_product.addEventListener("click", () => {
  let current_product_id = Number(
    single_product_modal_main_photo.src.split("-product-")[1][0]
  );
  if (current_product_id < 4) {
    single_product_modal_main_photo.src = Array.from(
      single_product_modal_select_from
    )[current_product_id].src.replace("-thumbnail", "");
    Array.from(single_product_modal_select_from).forEach((itemoo) => {
      itemoo.parentElement.classList.remove("active");
    });
    Array.from(single_product_modal_select_from)[
      current_product_id
    ].parentElement.classList.add("active");
  }
});

previous_single_product.addEventListener("click", () => {
  let current_product_id = Number(
    single_product_modal_main_photo.src.split("-product-")[1][0]
  );
  if (current_product_id > 1) {
    single_product_modal_main_photo.src = Array.from(
      single_product_modal_select_from
    )[current_product_id - 2].src.replace("-thumbnail", "");
    Array.from(single_product_modal_select_from).forEach((itemoo) => {
      itemoo.parentElement.classList.remove("active");
    });
    Array.from(single_product_modal_select_from)[
      current_product_id - 2
    ].parentElement.classList.add("active");
  }
});

const sidebar_modal_trigger = document.querySelector("#sidebar-modal-trigger");
const sidebar_modal = document.querySelector(".sidebar-modal");

sidebar_modal_trigger.addEventListener("click", () => {
  sidebar_modal.style.display === "block"
    ? (sidebar_modal.style.display = "none")
    : (sidebar_modal.style.display = "block");
});

const sidebar_modal_closer = document.querySelector("#sidebar-modal-closer");

sidebar_modal_closer.addEventListener("click", () => {
  sidebar_modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target.id !== "cart-toggler") {
    cart_modal.style.display = "none";
  }

  if (e.target.className === "cart-modal") {
    cart_modal.style.display = "block";
  }

  // prevent mouse from clicking on modal and all of its children
  if (
    e.target.className === "cart-modal" ||
    e.target.className === "cart-modal-content"
  ) {
    e.stopPropagation();
  }

  if (e.target.id !== "sidebar-modal-trigger") {
    sidebar_modal.style.display = "none";
  }
});

const createPageButton = (text, onClick, isActive = false) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.toggle("active", isActive);
  button.addEventListener("click", onClick);
  return button;
};

const createEllipsis = () => {
  const span = document.createElement("span");
  span.textContent = "...";
  span.classList.add("ellipsis");
  return span;
};

export const setupPagination = (
  totalItems,
  itemsPerPage,
  currentPage,
  container,
  callback
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  container.innerHTML = "";

  const updatePagination = (current) => {
    container.innerHTML = "";

    if (current > 1) {
      container.appendChild(
        createPageButton("Previous", () => {
          callback(current - 1);
          updatePagination(current - 1);
        })
      );
    }

    let pages = [];

    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages = [1];
      if (current > 3) pages.push("...");
      if (current > 2) pages.push(current - 1);
      if (current !== 1 && current !== totalPages) pages.push(current);
      if (current < totalPages - 1) pages.push(current + 1);
      if (current < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    pages.forEach((page) => {
      if (page === "...") {
        container.appendChild(createEllipsis());
      } else {
        container.appendChild(
          createPageButton(
            page,
            () => {
              callback(page);
              updatePagination(page);
            },
            page === current
          )
        );
      }
    });

    if (current < totalPages) {
      container.appendChild(
        createPageButton("Next", () => {
          callback(current + 1);
          updatePagination(current + 1);
        })
      );
    }
  };

  updatePagination(currentPage);
};

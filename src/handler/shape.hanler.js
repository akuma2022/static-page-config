const categoriesShape = [
  "asscher",
  "cushion",
  "emerald",
  "heart",
  "marquise",
  "oval",
  "pear",
  "princess",
  "radiant",
  "round",
];

const shapeCategoriesList = document.querySelector("#shape-categories > ol");
const shapeCategoriesPrevious = document.querySelector(
  "#shape-categories > #previous"
);
const shapeCategoriesNext = document.querySelector("#shape-categories > #next");

if (shapeCategoriesList) {
  categoriesShape.forEach((shape) => {
    const shapeItem = `
      <li 
        class='flex flex-col items-center size-16 justify-center rounded-full aspect-square'
      >
        <img 
          src='/public/assets/image/shape/${shape}.jpg' 
          alt='${shape} diamond'
          class='w-full object-cover aspect-square rounded-full'
        />
      </li>
      `;

    shapeCategoriesList.innerHTML += shapeItem;
  });
}

shapeCategoriesPrevious.addEventListener("click", () => {
  shapeCategoriesList.scrollLeft = 0;
});

shapeCategoriesNext.addEventListener("click", () => {
  shapeCategoriesList.scrollLeft = shapeCategoriesList.scrollWidth;
});

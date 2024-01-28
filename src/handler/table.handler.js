const diamond = require("../constant/diamonds.json").diamond;
const { getCountPage } = require("../util/global-func");
const urlParams = new URLSearchParams(window.location.search);

const page = urlParams.get("page");

const total = diamond.length;

const mappingHandler = (rowsCount, p) => {
  const current =
    p &&
    !Number.isNaN(Number(p)) &&
    Number.isInteger(Number(p)) &&
    page < maxPage
      ? Number(p) - 1
      : 0;

  const maxPage = getCountPage(total, rowsCount);

  const skip = current * rowsCount;

  const dataShow = diamond.filter(
    (item, key) => key >= skip && key < skip + rowsCount
  );

  const tableBody = document.querySelector("tbody");

  tableBody.innerHTML = "";

  dataShow.forEach((item) => {
    tableBody.innerHTML += `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${item.Shape}
    </th>
    <td class="px-6 py-4">Silver</td>
    <td class="px-6 py-4">Laptop</td>
    <td class="px-6 py-4">$2999</td>
    <td class="px-6 py-4">Silver</td>
    <td class="px-6 py-4">Laptop</td>
    <td class="px-6 py-4">$asdasdas</td>
  </tr>`;
  });
};

mappingHandler(10, page);

// --------- item per page select -----------------
const rowsPerPageSelect = document.querySelector("#rows-per-page");
rowsPerPageSelect.addEventListener("change", (e) => {
  const { value } = e.target;
  const rowsCount = Number(value);

  mappingHandler(rowsCount, page);
});

// --------- navigation ----------------
const navigation = document.querySelector("#navigation");

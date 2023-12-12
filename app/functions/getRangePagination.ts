export const getPageRange = (currentPage: number, limitPages: number) => {
  const visiblePages = 3; // Cantidad de números de página visibles
  const range = [];
  let start = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(visiblePages / 2),
      limitPages - visiblePages + 1,
    ),
  );

  for (let i = 0; i < Math.min(visiblePages, limitPages); i++) {
    range.push(start);
    start++;
  }

  return range;
};

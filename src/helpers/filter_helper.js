export const filterItems = (filter, items) => {
  return items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "completed") return item.complete;
    if (filter === "active") return !item.complete;
  })
}

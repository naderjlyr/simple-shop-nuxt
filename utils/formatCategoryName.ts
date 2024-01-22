function formatCategoryName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
export default formatCategoryName;

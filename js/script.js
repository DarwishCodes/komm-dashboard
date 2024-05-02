onresize = (event) => {
  dynamicHeader();
};
function dynamicHeader() {
  let headerHeight = document.querySelector("header").offsetHeight;
  document.querySelector("main").style.paddingTop = headerHeight + "px";
  document.querySelector("main").style.paddingBottom = headerHeight + "px";
}
dynamicHeader();

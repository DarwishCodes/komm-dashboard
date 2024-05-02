onresize = (event) => {
  dynamicHeader();
};
function dynamicHeader() {
  let headerHeight = document.querySelector(".header__wrap").offsetHeight;
  let toolbarHeight = document.querySelector(".tool-bar").offsetHeight;

  document.querySelector("main").style.paddingTop = toolbarHeight + "px";
  document.querySelector("main").style.paddingBottom = headerHeight + "px";
}
dynamicHeader();

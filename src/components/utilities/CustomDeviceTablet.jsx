function CustomDeviceTablet() {
  // check the width and decide whether to display the tabletsidebar
  const tabletWidth = window.screen.availWidth;

  return tabletWidth > 700 && tabletWidth < 1000;
}

export default CustomDeviceTablet;

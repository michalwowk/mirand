const vhUnit = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
};

export const vhUnitInit = () => {
  vhUnit();

  window.addEventListener("orientationchange", (e) => {
    setTimeout(vhUnit, 10);
  });

  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 560) {
      vhUnit();
    }
  });
};

vhUnitInit();
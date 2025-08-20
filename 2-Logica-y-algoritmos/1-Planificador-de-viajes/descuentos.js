export const aplicarDescuento = (costo, numPersonas) => {
    if (numPersonas >= 4) {
      return costo * 0.9; // 10% de descuento
    }
    return costo;
  };
  
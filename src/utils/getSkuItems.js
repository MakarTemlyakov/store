export const getSkuItems = (sku) => {
  return Array.from(
    Object.values(sku).map((item) => {
      return {
        ID: item.ID,
        PRICE: item.PRICE,
        WEIGHT: item.WEIGHT,
        LENGTH: item.LENGTH,
        NAME: item.NAME,
        ...item,
      };
    })
  );
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const storeOnLocalStorage = (localStorageKey: string, data: any) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

export const getItemLocalStorage = (localStorageKey: string) => {
  const transactionData = localStorage.getItem(localStorageKey);
  return transactionData ? JSON.parse(transactionData) : "";
};

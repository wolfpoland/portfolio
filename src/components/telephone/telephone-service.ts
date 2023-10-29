function openTelephone(telephone: string) {
  window.open(`tel:${telephone}`);
}

export const TelephoneService = {
  openTelephone,
};

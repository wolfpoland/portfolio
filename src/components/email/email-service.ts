function openEmail(email: string) {
  window.open(`mailto:${email}`);
}

export const EmailService = {
  openEmail,
};

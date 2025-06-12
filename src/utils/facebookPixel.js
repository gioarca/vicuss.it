// src/facebookPixel.js
export const initPixel = () => {
  window.fbq("init", "1068046574672461");
  window.fbq("track", "PageView");
};

export const lead = (value = 10, currency = "EUR") => {
  window.fbq("track", "Lead", { value, currency });
};

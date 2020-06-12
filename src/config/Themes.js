const dark = oldTheme => {
  oldTheme.primary.main = "#eee";
  oldTheme.navbar.default = "#111";
  oldTheme.background.default = "#333";
  oldTheme.secondary.main = "#FFa409";
  oldTheme.card.bg = "#111";
  oldTheme.contact.bg = "#111";
  oldTheme.contact.methods = "#202020";
  oldTheme.contact.icons = "#FFC107";
  oldTheme.footer.bg = "#171717";
  oldTheme.footer.cc = "#090909";
  oldTheme.txt.title = "#fff";
  oldTheme.txt.body = "#d9d9d9";
  oldTheme.div.default = "#666";
};

const light = oldTheme => {
  oldTheme.primary.main = "#333";
  oldTheme.navbar.default = "#fff";
  oldTheme.background.default = "#fafafa";
  oldTheme.secondary.main = "#F89500";
  oldTheme.card.bg = "#fff";
  oldTheme.contact.bg = "#f1f1f1";
  oldTheme.contact.methods = "#fbfbfb";
  oldTheme.contact.icons = "#ddd";
  oldTheme.footer.bg = "#2b2b2b";
  oldTheme.footer.cc = "#222";
  oldTheme.txt.title = "#fff";
  oldTheme.txt.body = "#aaa";
  oldTheme.txt.title = "#333";
  oldTheme.txt.body = "#666";
  oldTheme.div.default = "#d1d1d1";
};
export { light, dark };

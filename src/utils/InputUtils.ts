export const isLetter = (e: any) => {
  const char = String.fromCharCode(e.keyCode);
  if (/^[A-Za-z]+$/.test(char)) return true;
  else e.preventDefault();
};

export const isNumber = (e: any) => {
  const char = String.fromCharCode(e.keyCode);
  if (/^[123456789]+$/.test(char)) return true;
  else e.preventDefault();
};

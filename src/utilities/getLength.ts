const getLength = (data: string): number => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");
  const content = doc.getElementsByTagName("body")[0];

  const scripts = content.getElementsByTagName("script");
  for (let i = scripts.length - 1; i >= 0; i--) {
    scripts[i].remove();
  }

  const styles = content.getElementsByTagName("style");
  for (let i = styles.length - 1; i >= 0; i--) {
    styles[i].remove();
  }

  let length = 0;
  const text = content.textContent?.replace(/\s+/g, " ").trim();

  if (text) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") length++;
    }
  }
  length++;

  return length;
};

export default getLength;

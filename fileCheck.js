const checkFile = (file) => {
  const fileName = file.split(".");
  const last = fileName.length - 1;
  const ext = fileName[last];
  fileName.pop();
  const myFileName = fileName.join("");
  const name = myFileName.replace(/[_ \-'"{}\[\],]/g, "");
  const fullName = name + "." + ext;
  return fullName;
};

const result = checkFile("file.sdfdshjfjdks..fkdsjhfkjsd.][[]{}].pdf");
console.log(result);

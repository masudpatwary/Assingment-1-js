function chackjsFile(inputFile) {
  if (inputFile.endsWith(".js")) {
    return "this is a javascript file";
  } else {
    return "this is not a javascript file";
  }
}
const inputFiles = chackjsFile("myfile.pdf");0
console.log(inputFiles);

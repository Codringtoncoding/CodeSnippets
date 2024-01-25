const beast = ["james", "steve", "includes"];

//1.
// returns index
beast.indexOf("james");

//returns index
beast.findIndex((item) => {
  return item === "james";
});

beast.find((item) => {
  return item === "james";
});

beast.includes("jame");

//linear lists can get really large so we can get them to index lists as it will cost alot of run time

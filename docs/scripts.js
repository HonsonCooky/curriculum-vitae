fetch("./modules/js")
  .then(async (res) => res.arrayBuffer)
  .then((res) => console.log(res));

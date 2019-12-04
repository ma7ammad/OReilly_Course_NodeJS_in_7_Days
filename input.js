//Flowing Mode
process.stdin.on("data", chunk => {
  console.log(`Received ${chunk.length} bytes of data`);
});

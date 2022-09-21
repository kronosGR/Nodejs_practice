process.stdout.write("Type something then hit enter. \n");

process.stdin.setEncoding("utf-8");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk != null) {
    process.stdout.write(`You wrote: ${chunk}`);
    process.stdout.write(`CWD: ${process.cwd()} \n`);
    console.log(`Running for: ${process.uptime()} seconds`);
    process.exit(0);
  }
});

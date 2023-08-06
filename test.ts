fetch("http://localhost:8080", {
  body: prompt(">"),
  method: "POST",
})
  .then((res) => res.body?.pipeTo(Deno.stdout.writable));

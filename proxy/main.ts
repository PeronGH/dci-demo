const { protocol, port, hostname } = new URL("http://vulnerability:8000/");

Deno.serve({ hostname: "0.0.0.0", port: 8080 }, (req) => {
  const url = new URL(req.url);
  url.protocol = protocol;
  url.port = port;
  url.hostname = hostname;

  return fetch(url, req);
});

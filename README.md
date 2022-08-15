# PhoenixSockets

> A project highlighting the use of Elixir phoenix sockets

## Local setup

with Elixir Phoenix and Node installed

```bash

cd server
mix deps.get
iex -S mix phx.server
```


```bash
cd client
npm install
node app.js
```
Send a message from the server

```elixir
ServerWeb.Endpoint.broadcast("sales:lobby", "new_sale", %{sales_id: "001"})
```

Note the responses on the shell session running the client
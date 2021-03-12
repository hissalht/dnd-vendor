<script>
  import { Router, Route } from "svelte-routing";

  import CreateShop from "./pages/CreateShop.svelte";
  import ViewShop from "./pages/ViewShop.svelte";
</script>

<Router>
  <h1>D&D Vendor App</h1>

  <main>
    <Route path="/" component={CreateShop} />
    <Route path="/:shopId" component={ViewShop} />
  </main>
</Router>

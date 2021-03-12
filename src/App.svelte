<script>
  import { Router, Route, Link } from "svelte-routing";

  import CreateShop from "./pages/CreateShop.svelte";
  import ViewShop from "./pages/ViewShop.svelte";
</script>

<Router>
  <h1>D&D Vendor App</h1>

  <nav>
    <Link to="/">Shop editor</Link>
  </nav>

  <main>
    <Route path="/" component={CreateShop} />
    <Route path="/:shopId" component={ViewShop} />
  </main>
</Router>

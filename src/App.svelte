<script>
  import { Router, Route, Link } from "svelte-routing";

  import CreateShop from "./pages/CreateShop.svelte";
  import ViewShop from "./pages/ViewShop.svelte";
</script>

<Router>
  <div class="wrapper">
    <header class="flow-h">
      <h1>D&D Vendor App</h1>
      <nav>
        <Link to="/">Shop editor</Link>
      </nav>
    </header>

    <main>
      <Route path="/" component={CreateShop} />
      <Route path="/:shopId" component={ViewShop} />
    </main>
  </div>
</Router>

<style>
  header {
    display: flex;
    align-items: baseline;
    margin-bottom: 2rem;
  }

  header h1 {
    margin: 0;
  }

  .wrapper {
    max-width: 40rem;
    margin: auto;
    padding: 1rem 0;
  }
</style>

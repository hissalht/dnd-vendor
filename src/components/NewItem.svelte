<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let name = "";
  let price = "";

  function handleSubmit() {
    const item = {
      name,
      price,
    };

    dispatch("newitem", item);
  }
</script>

<form class="flow" on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="item-name-input">Name</label>
    <input id="item-name-input" bind:value={name} required />
  </div>

  <div>
    <label for="item-price-input">Price</label>
    <input id="item-price-input" bind:value={price} required type="number" />
    <!-- TODO: add currency selector -->
  </div>

  <div>
    <button type="submit">Add item</button>
  </div>
</form>

<style>
  form {
    border: 1px solid grey;
    padding: 1rem;
  }
</style>

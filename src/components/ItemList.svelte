<script>
  import { createEventDispatcher } from "svelte";

  import { formatPrice } from "../helper";

  const dispatch = createEventDispatcher();

  export let items;
  export let editable = false;

  function handleRemove(e) {
    const itemIndex = e.target.dataset.index;
    dispatch("removeitem", {
      index: itemIndex,
    });
  }
</script>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th class="empty" />
    </tr>
  </thead>
  <tbody>
    {#if !items || !items.length}
      <tr>
        <td colspan="3"><em>No items in this shop</em></td>
      </tr>
    {/if}
    {#each items as item, i}
      <tr>
        <td>{item.name}</td>
        <td>{formatPrice(item.price)}</td>
        {#if editable}
          <td><button data-index={i} on:click={handleRemove}>X</button></td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 1px solid black;
    padding: 0.5rem 1rem;
  }

  th {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .empty {
    padding: 0;
    border: none;
  }
</style>

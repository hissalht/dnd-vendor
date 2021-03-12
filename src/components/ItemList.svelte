<script>
  import { createEventDispatcher } from "svelte";

  import ItemPrice from "./ItemPrice.svelte";
  import MinimalModeToggle from "./MinimalModeToggle.svelte";

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

<MinimalModeToggle />
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
        <td>
          <ItemPrice price={item.price} />
        </td>
        {#if editable}
          <td class="action">
            <button data-index={i} on:click={handleRemove}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
                ><line x1="18" y1="6" x2="6" y2="18" /><line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                /></svg
              >
            </button>
          </td>
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

  td {
    background-color: white;
  }

  .empty {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  .action {
    padding: 0.25rem;
  }
  .action button {
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

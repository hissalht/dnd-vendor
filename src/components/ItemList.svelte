<script>
  import { formatPrice } from "../helper";

  export let items;
</script>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {#each items as item}
      <tr>
        <td>{item.name}</td>
        <td>{formatPrice(item.price)}</td>
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
</style>

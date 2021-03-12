<script>
  import NewItem from "./NewItem.svelte";
  import ItemList from "./ItemList.svelte";

  let items = [
    {
      name: "Food ration",
      price: 123,
    },
    {
      name: "Food ration",
      price: 300,
    },
    {
      name: "Big Sword",
      price: 5000,
    },
    {
      name: "Big Sword on sale",
      price: 4009,
    },
    {
      name: "Pen",
      price: 5,
    },
    {
      name: "One gold",
      price: 100,
    },
  ];

  /**
   * @param {CustomEvent} e
   */
  function handleNewItem(e) {
    items = [...items, e.detail];
  }

  $: {
    console.log(items);
  }
</script>

<h1>D&D Vendor App</h1>

<h2>Shop editor</h2>

<p>Configure a new shop using the editor.</p>

<div class="flow" on:submit|preventDefault>
  <div>
    <label for="shop-name">Shop's name</label>
    <input id="shop-name-input" name="shop-name" />
  </div>

  <NewItem on:newitem={handleNewItem} />

  <ItemList {items} />

  <div>
    <button type="submit">Create</button>
  </div>
</div>

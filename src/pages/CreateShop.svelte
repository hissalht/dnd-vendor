<script>
  import NewItem from "../components/NewItem.svelte";
  import ItemList from "../components/ItemList.svelte";
  import firebase from "../firebase";

  let shopName = "";
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

  function handleCreateShop() {
    console.log("Creating shop with name", shopName, "and items", items);
    firebase.firestore().collection("shops").doc().set({
      name: shopName,
      items,
    });
  }
</script>

<h2>Shop editor</h2>

<p>Configure a new shop using the editor.</p>

<div class="flow" on:submit|preventDefault>
  <div>
    <label for="shop-name">Shop's name</label>
    <input id="shop-name-input" name="shop-name" bind:value={shopName} />
  </div>

  <NewItem on:newitem={handleNewItem} />

  <ItemList {items} />

  <div>
    <button type="submit" on:click={handleCreateShop}>Create</button>
  </div>
</div>

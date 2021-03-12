<script>
  import { navigate } from "svelte-routing";

  import NewItem from "../components/NewItem.svelte";
  import ItemList from "../components/ItemList.svelte";
  import firebase from "../firebase";

  let shopName = "";
  let items = [];

  function handleNewItem(e) {
    items = [...items, e.detail];
  }

  function handleRemoveItem(e) {
    const itemIndex = e.detail.index;
    items.splice(itemIndex, 1);
    items = items;
  }

  function handleCreateShop() {
    console.log("Creating shop with name", shopName, "and items", items);
    firebase
      .firestore()
      .collection("shops")
      .add({
        name: shopName,
        items,
      })
      .then((document) => {
        navigate(`/${document.id}`);
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

  <ItemList {items} editable on:removeitem={handleRemoveItem} />

  <div>
    <button type="submit" on:click={handleCreateShop}>Create</button>
  </div>
</div>

<script>
  import { onMount } from "svelte";

  import firebase from "../firebase";
  import ItemList from "../components/ItemList.svelte";

  export let shopId;

  let shop;

  onMount(() => {
    const shopRef = firebase.firestore().collection("shops").doc(shopId);

    shopRef.get().then((doc) => {
      console.log(doc.data());
      shop = doc.data();
    });
  });
</script>

<p>Haha I'm looking at shop <em>{shopId}</em></p>

{#if shop}
  <h2>{shop.name}</h2>
  <ItemList items={shop.items} />
{/if}

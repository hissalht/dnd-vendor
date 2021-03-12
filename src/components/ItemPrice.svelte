<script>
  export let price;

  $: gold = Math.floor(price / 100);
  $: silver = Math.floor((price % 100) / 10);
  $: copper = Math.floor(price % 10);
  $: pricesByCurrencies = [
    ...(gold ? [{ currency: "gold", amount: gold }] : []),
    ...(silver ? [{ currency: "silver", amount: silver }] : []),
    ...(copper ? [{ currency: "copper", amount: copper }] : []),
  ];
</script>

{#each pricesByCurrencies as { currency, amount }, i}
  {#if amount > 0}
    {#if pricesByCurrencies.length > 1 && i !== 0}
      {#if i === pricesByCurrencies.length - 1}
        {" and "}
      {:else}
        {", "}
      {/if}
    {/if}
    <span class={currency}>{amount}</span>
    {currency} piece{amount === 1 ? "" : "s"}
  {/if}
{/each}

<style>
  .gold,
  .silver,
  .copper {
    font-weight: 700;
  }

  .gold {
    color: rgb(223, 191, 12);
  }

  .silver {
    color: silver;
  }

  .copper {
    color: rgb(192, 149, 133);
  }
</style>

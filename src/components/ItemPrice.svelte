<script>
  import { minimalModeEnabled } from "../stores";

  export let price;

  $: gold = Math.floor(price / 100);
  $: silver = Math.floor((price % 100) / 10);
  $: copper = Math.floor(price % 10);
  $: pricesByCurrencies = [
    ...(gold ? [{ currency: "gold", amount: gold, short: "gp" }] : []),
    ...(silver ? [{ currency: "silver", amount: silver, short: "sp" }] : []),
    ...(copper ? [{ currency: "copper", amount: copper, short: "cp" }] : []),
  ];
</script>

{#each pricesByCurrencies as { currency, amount, short }, i}
  {#if amount > 0 && !$minimalModeEnabled}
    {#if pricesByCurrencies.length > 1 && i !== 0}
      {#if i === pricesByCurrencies.length - 1}
        {" and "}
      {:else}
        {", "}
      {/if}
    {/if}
  {/if}
  <span class={currency}>{amount}</span>
  {#if $minimalModeEnabled}
    {short}
  {:else}
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

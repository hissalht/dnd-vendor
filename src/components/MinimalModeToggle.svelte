<script>
  import { minimalModeEnabled } from "../stores";
</script>

<div class="checkbox-wrapper">
  <input
    id="minimal-mode-checkbox"
    type="checkbox"
    bind:checked={$minimalModeEnabled}
  />
  <label for="minimal-mode-checkbox">Minimal currency mode</label>
</div>

<style>
  .checkbox-wrapper {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
</style>

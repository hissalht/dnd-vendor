import { writable } from 'svelte/store'

const minimalModeKey = 'vendorfy:minimal'

function createMinimalModeStore() {
  const savedValue = JSON.parse(localStorage.getItem(minimalModeKey))

  const { set, subscribe } = writable(savedValue)

  function setAndSave(newValue) {
    localStorage.setItem(minimalModeKey, JSON.stringify(newValue))
    set(newValue)
  }

  return {
    set: setAndSave,
    subscribe,
  }
}

export const minimalModeEnabled = createMinimalModeStore()

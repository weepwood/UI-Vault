const KEY='ui-vault-favorites-v1';
export function loadFavorites(storage=localStorage) {
  try {
    const parsed=JSON.parse(storage.getItem(KEY)||'[]');
    return new Set(Array.isArray(parsed)?parsed.filter(x=>typeof x==='string'):[]);
  } catch { return new Set(); }
}
export function saveFavorites(favorites,storage=localStorage) {
  try { storage.setItem(KEY,JSON.stringify([...favorites]));return true; }
  catch { return false; }
}

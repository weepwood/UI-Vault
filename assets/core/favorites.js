const KEY='ui-vault-favorites-v1';
export function loadFavorites(storage) {
  try {
    const target=storage===undefined?globalThis.localStorage:storage;
    const parsed=JSON.parse(target?.getItem(KEY)||'[]');
    return new Set(Array.isArray(parsed)?parsed.filter(x=>typeof x==='string'):[]);
  } catch { return new Set(); }
}
export function saveFavorites(favorites,storage) {
  try {
    const target=storage===undefined?globalThis.localStorage:storage;
    if(!target)return false;
    target.setItem(KEY,JSON.stringify([...favorites]));return true;
  } catch { return false; }
}

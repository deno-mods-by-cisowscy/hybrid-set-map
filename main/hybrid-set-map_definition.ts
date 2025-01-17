/**
 * Interfejs HybridSetMapDefinition - definiuje funkcjonalność dla HybridSetMap.
 * 
 * @template K - Typ kluczy w HybridSetMap.
 * @template V - Typ wartości w HybridSetMap. Domyślnie undefined.
 */
export interface HybridSetMapDefinition<K, V = undefined> {
    add(key: K, val?: V): this;
    get(key: K): V | undefined;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    entries(): IterableIterator<[K, V]>;
    forEach(callbackfn: (val: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    readonly size: number;
    deleteFromSet(key: K): boolean;
    clearSet(): void;
    forEachInSet(callbackfn: (val: K, key: K, set: Set<K>) => void, thisArg?: any): void;
    getSet(): Set<K>;
    getMap(): Map<K, V> | undefined;
}

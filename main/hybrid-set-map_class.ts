import { HybridSetMapDefinition } from "./hybrid-set-map_definition.ts";

/**
 * Klasa HybridSetMap - niestandardowa struktura danych łącząca funkcjonalność Set i Map.
 * 
 * @template K - Typ kluczy w HybridSetMap.
 * @template V - Typ wartości w HybridSetMap. Domyślnie undefined.
 */
class HybridSetMap<K, V = undefined> implements HybridSetMapDefinition<K, V> {
    private key: Set<K>;
    private map?: Map<K, V>;
    private isV: boolean;

    /**
     * Tworzy instancję klasy HybridSetMap.
     * @param initialData - Opcjonalna tablica par klucz-wartość do inicjalizacji HybridSetMap.
     */
    constructor(initialData?: [K, V][]) {
        this.isV = ((): boolean => {
            try {
                return typeof (null as V) !== 'undefined';
            } catch {
                return false;
            }
        })();
        this.key = new Set<K>();

        if (this.isV) {
            this.map = new Map<K, V>();
            if (initialData) {
                initialData.forEach(([k, v]) => {
                    this.key.add(k);
                    this.map?.set(k, v);
                });
            }
        } else if (initialData) {
            initialData.forEach(([k, _]) => {
                this.key.add(k);
            });
        }
    }

    /**
     * Dodaje klucz do Set i opcjonalnie parę klucz-wartość do Map.
     * @param key - Klucz do dodania.
     * @param val - Opcjonalna wartość do dodania.
     * @returns Instancja HybridSetMap.
     */
    add(key: K, val?: V): this {
        this.key.add(key);
        if (this.isV && val !== undefined) {
            this.map?.set(key, val);
        }
        return this;
    }

    /**
     * Pobiera wartość skojarzoną z danym kluczem z Map.
     * @param key - Klucz, którego wartość ma zostać pobrana.
     * @returns Wartość skojarzona z kluczem lub undefined, jeśli klucz nie istnieje.
     */
    get(key: K): V | undefined {
        return this.isV ? this.map?.get(key) : undefined;
    }

    /**
     * Sprawdza, czy Set zawiera dany klucz.
     * @param key - Klucz do sprawdzenia.
     * @returns True, jeśli Set zawiera klucz, false w przeciwnym razie.
     */
    has(key: K): boolean {
        return this.key.has(key);
    }

    /**
     * Usuwa klucz z Set i parę klucz-wartość z Map.
     * @param key - Klucz do usunięcia.
     * @returns True, jeśli klucz został usunięty, false w przeciwnym razie.
     */
    delete(key: K): boolean {
        const keyDeleted = this.key.delete(key);
        const mapDeleted = this.isV ? this.map?.delete(key) : true;
        return keyDeleted && !!mapDeleted;
    }

    /**
     * Czyści wszystkie klucze i wartości z HybridSetMap.
     */
    clear(): void {
        this.key.clear();
        if (this.isV) {
            this.map?.clear();
        }
    }

    /**
     * Zwraca iterator kluczy w Set.
     * @returns Iterator kluczy.
     */
    keys(): IterableIterator<K> {
        return this.key.keys();
    }

    /**
     * Zwraca iterator wartości w Map.
     * @returns Iterator wartości.
     */
    values(): IterableIterator<V> {
        return this.isV ? this.map?.values() as IterableIterator<V> : [].values();
    }

    /**
     * Zwraca iterator par klucz-wartość w Map.
     * @returns Iterator par klucz-wartość.
     */
    entries(): IterableIterator<[K, V]> {
        return this.isV ? this.map?.entries() as IterableIterator<[K, V]> : [].entries();
    }

    /**
     * Zwraca iterator par klucz-wartość w Map do iteracji w pętli for...of.
     * @returns Iterator par klucz-wartość.
     */
    [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.isV ? this.map?.[Symbol.iterator]() as IterableIterator<[K, V]> : [][Symbol.iterator]();
    }

    /**
     * Wykonuje podaną funkcję dla każdej pary klucz-wartość w Map.
     * @param callbackfn - Funkcja do wykonania dla każdego elementu.
     * @param thisArg - Wartość używana jako this podczas wykonywania callback.
     */
    forEach(callbackfn: (val: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
        if (this.isV) {
            this.map?.forEach(callbackfn, thisArg);
        }
    }

    /**
     * Zwraca liczbę elementów w HybridSetMap.
     * @returns Liczba elementów.
     */
    get size(): number {
        return this.key.size;
    }

    /**
     * Usuwa klucz tylko z Set.
     * @param key - Klucz do usunięcia z Set.
     * @returns True, jeśli klucz został usunięty, false w przeciwnym razie.
     */
    deleteFromSet(key: K): boolean {
        const keyDeleted = this.key.delete(key);
        return keyDeleted && (this.isV ? this.map?.has(key) === false : true);
    }

    /**
     * Czyści wszystkie klucze z Set.
     */
    clearSet(): void {
        this.key.clear();
        if (this.isV) {
            this.map?.clear();
        }
    }

    /**
     * Wykonuje podaną funkcję dla każdego klucza w Set.
     * @param callbackfn - Funkcja do wykonania dla każdego elementu.
     * @param thisArg - Wartość używana jako this podczas wykonywania callback.
     */
    forEachInSet(callbackfn: (val: K, key: K, set: Set<K>) => void, thisArg?: any): void {
        this.key.forEach(callbackfn, thisArg);
    }

    /**
     * Zwraca Set kluczy.
     * @returns Set kluczy.
     */
    getSet(): Set<K> {
        return this.key;
    }

    /**
     * Zwraca Map par klucz-wartość, jeśli to możliwe.
     * @returns Map par klucz-wartość lub undefined, jeśli V jest undefined.
     */
    getMap(): Map<K, V> | undefined {
        return this.isV ? this.map : undefined;
    }
}


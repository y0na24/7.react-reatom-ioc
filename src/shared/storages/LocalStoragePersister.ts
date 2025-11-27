import type { KeyValueStorage, StorageOptions } from "./types";

export class LocalStoragePersister implements KeyValueStorage {
  private prefix: string;

  constructor(options: StorageOptions = {}) {
    this.prefix = options.prefix || "app_";
  }

  private createKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const data = localStorage.getItem(this.createKey(key));
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Storage get error:", error);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      localStorage.setItem(this.createKey(key), JSON.stringify(value));
    } catch (error) {
      console.error("Storage set error:", error);
      throw error;
    }
  }

  async delete(key: string): Promise<void> {
    localStorage.removeItem(this.createKey(key));
  }

  async clear(): Promise<void> {
    localStorage.clear();
  }
}

import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS ?? "",
  token: process.env.REDIS_TOKEN ?? "",
});

abstract class AbstractStorage {
  abstract hgetall(key: string): ReturnType<typeof redis.hgetall>;
  abstract hset(
    key: string,
    value: { [filed: string]: unknown },
  ): Promise<void>;
  abstract get<T>(key: string): ReturnType<typeof redis.get>;
}

class RedisStorage extends AbstractStorage {
  async hgetall<T extends Record<string, unknown>>(key: string) {
    return await redis.hgetall<T>(key);
  }

  async hset(key: string, value: { [filed: string]: unknown }): Promise<void> {
    await redis.hset(key, value);
  }

  async get<T>(key: string) {
    return await redis.get<T>(key);
  }

  toString(): string {
    return "RedisStorage";
  }
}

class TestStorage extends AbstractStorage {
  private storage: { [key: string]: { [filed: string]: unknown } } = {};

  async hgetall<T extends Record<string, unknown>>(key: string) {
    return this.storage[key] as T;
  }

  async hset(key: string, value: { [filed: string]: unknown }): Promise<void> {
    this.storage[key] = value;
  }

  async get<T>(key: string) {
    return this.storage[key] as T;
  }

  toString(): string {
    return "TestStorage";
  }
}

export const KVStorage =
  process.env.E2E === "true" || process.env.CI === "true"
    ? new TestStorage()
    : new RedisStorage();

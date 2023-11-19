import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.REDIS ?? "",
  token: process.env.REDIS_TOKEN ?? "",
});

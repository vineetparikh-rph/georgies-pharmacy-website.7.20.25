// api/index.ts
import { createApp } from "../server/createApp";

const appPromise = createApp();

export default async function handler(req: any, res: any) {
  const app = await appPromise;
  return app(req, res);
}

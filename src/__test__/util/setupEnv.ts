import { loadEnvConfig } from '@next/env';

export default async (): Promise<void> => {
  loadEnvConfig(process.env.NEXT_PUBLIC_HASURA_URL || process.cwd());
  loadEnvConfig(process.env.NEXT_PUBLIC_HASURA_KEY || process.cwd());
};

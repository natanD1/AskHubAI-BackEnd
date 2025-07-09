import { defineConfig} from 'drizzle-kit'
import { env } from './src/env.ts'

export default defineConfig({
    dialect: 'postgresql',
    casing: 'camelCase',
    schema: './src/db/schema/**.ts',
    out: './src/db/migrations',
    dbCredentials: {
        url: env.DATABASE_URL,
    }
})
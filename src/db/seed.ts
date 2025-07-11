import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)
await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 0,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    with: {
      questions: 0,
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: only use in dev
console.log('Database seeded successfully.')

"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[4163],{50620:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"packages/adapters","title":"\ud83d\udd27 Database Adapters","description":"Overview","source":"@site/docs/packages/adapters.md","sourceDirName":"packages","slug":"/packages/adapters","permalink":"/eliza/docs/packages/adapters","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/eliza/tree/main/docs/docs/packages/adapters.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Core Package","permalink":"/eliza/docs/packages/core"},"next":{"title":"Client Packages","permalink":"/eliza/docs/packages/clients"}}');var s=a(74848),r=a(28453);const i={sidebar_position:1},o="\ud83d\udd27 Database Adapters",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Available Adapters",id:"available-adapters",level:3},{value:"Architecture Overview",id:"architecture-overview",level:3},{value:"Installation",id:"installation",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"PostgreSQL Setup",id:"postgresql-setup",level:3},{value:"SQLite Setup",id:"sqlite-setup",level:3},{value:"Supabase Setup",id:"supabase-setup",level:3},{value:"Core Features",id:"core-features",level:2},{value:"Memory Operations",id:"memory-operations",level:3},{value:"Relationship Management",id:"relationship-management",level:3},{value:"Goal Management",id:"goal-management",level:3},{value:"Room &amp; Participant Management",id:"room--participant-management",level:3},{value:"Vector Search Implementation",id:"vector-search-implementation",level:2},{value:"PostgreSQL (with pgvector)",id:"postgresql-with-pgvector",level:3},{value:"SQLite (with sqlite-vss)",id:"sqlite-with-sqlite-vss",level:3},{value:"Schema Management",id:"schema-management",level:2},{value:"PostgreSQL Schema",id:"postgresql-schema",level:3},{value:"SQLite Schema",id:"sqlite-schema",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Connection Pooling",id:"connection-pooling",level:3},{value:"Prepared Statements",id:"prepared-statements",level:3},{value:"Batch Operations",id:"batch-operations",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Extension Points",id:"extension-points",level:2},{value:"Custom Adapter Implementation",id:"custom-adapter-implementation",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-database-adapters",children:"\ud83d\udd27 Database Adapters"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Database Adapters provide Eliza's persistence layer, enabling storage and retrieval of memories, relationships, goals, and other data through a unified interface. The system supports multiple database backends:"}),"\n",(0,s.jsx)(n.h3,{id:"available-adapters",children:"Available Adapters"}),"\n",(0,s.jsx)(n.p,{children:"Each adapter is optimized for different use cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PostgreSQL"})," (",(0,s.jsx)(n.code,{children:"@ai16z/adapter-postgres"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Production-ready with vector search"}),"\n",(0,s.jsx)(n.li,{children:"Connection pooling and high performance"}),"\n",(0,s.jsx)(n.li,{children:"JSONB and pgvector support"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SQLite"})," (",(0,s.jsx)(n.code,{children:"@ai16z/adapter-sqlite"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Lightweight local development"}),"\n",(0,s.jsx)(n.li,{children:"No external dependencies"}),"\n",(0,s.jsx)(n.li,{children:"Full-text search capabilities"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Supabase"})," (",(0,s.jsx)(n.code,{children:"@ai16z/adapter-supabase"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cloud-native PostgreSQL"}),"\n",(0,s.jsx)(n.li,{children:"Real-time subscriptions"}),"\n",(0,s.jsx)(n.li,{children:"Built-in RPC functions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SQL.js"})," (",(0,s.jsx)(n.code,{children:"@ai16z/adapter-sqljs"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In-memory SQLite for testing"}),"\n",(0,s.jsx)(n.li,{children:"Browser compatibility"}),"\n",(0,s.jsx)(n.li,{children:"Zero configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,s.jsx)(n.p,{children:"Eliza's database adapters provide a unified interface for data persistence across different storage backends. The following diagram shows how adapters integrate with the system:"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    class DatabaseAdapter {\n        <<abstract>>\n        +getRoom(roomId: UUID)\n        +createMemory(memory: Memory)\n        +searchMemories(params: SearchParams)\n        +getGoals(params: GoalParams)\n        +createRelationship(params: RelationshipParams)\n    }\n\n    class PostgresDatabaseAdapter {\n        -pool: Pool\n        +searchMemoriesByEmbedding()\n        +createMemory()\n        +testConnection()\n    }\n\n    class SqliteDatabaseAdapter {\n        -db: Database\n        +searchMemoriesByEmbedding()\n        +createMemory()\n        +prepareStatements()\n    }\n\n    class SupabaseDatabaseAdapter {\n        -supabase: SupabaseClient\n        +searchMemoriesByEmbedding()\n        +createMemory()\n        +rpcCalls()\n    }\n\n    class SqlJsDatabaseAdapter {\n        -db: Database\n        +searchMemoriesByEmbedding()\n        +createMemory()\n        +inMemoryOperations()\n    }\n\n    DatabaseAdapter <|-- PostgresDatabaseAdapter\n    DatabaseAdapter <|-- SqliteDatabaseAdapter\n    DatabaseAdapter <|-- SupabaseDatabaseAdapter\n    DatabaseAdapter <|-- SqlJsDatabaseAdapter\n\n    class AgentRuntime {\n        -databaseAdapter: DatabaseAdapter\n        +memoryManager: MemoryManager\n        +messageManager: MemoryManager\n    }\n\n    class MemoryManager {\n        -runtime: AgentRuntime\n        -tableName: string\n        +createMemory()\n        +searchMemories()\n    }\n\n    AgentRuntime --\x3e DatabaseAdapter : uses\n    AgentRuntime --\x3e MemoryManager : contains\n    MemoryManager --\x3e DatabaseAdapter : uses\n\n    class Memory {\n        +id: UUID\n        +content: Content\n        +embedding: number[]\n        +userId: UUID\n        +roomId: UUID\n    }\n\n    class Goal {\n        +id: UUID\n        +name: string\n        +status: GoalStatus\n        +objectives: Objective[]\n    }\n\n    class Relationship {\n        +userA: UUID\n        +userB: UUID\n        +status: string\n    }\n\n    DatabaseAdapter .. Memory : manages\n    DatabaseAdapter .. Goal : manages\n    DatabaseAdapter .. Relationship : manages"}),"\n",(0,s.jsx)(n.p,{children:"Key components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DatabaseAdapter"}),": Abstract base class defining the interface"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Concrete Adapters"}),": PostgreSQL, SQLite, Supabase, and SQL.js implementations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Memory Management"}),": Integration with MemoryManager for data operations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Models"}),": Memory, Goal, and Relationship data structures"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# PostgreSQL\npnpm add @ai16z/adapter-postgres pg\n\n# SQLite\npnpm add @ai16z/adapter-sqlite better-sqlite3\n\n# SQL.js\npnpm add @ai16z/adapter-sqljs sql.js\n\n# Supabase\npnpm add @ai16z/adapter-supabase @supabase/supabase-js\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(n.h3,{id:"postgresql-setup",children:"PostgreSQL Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { PostgresDatabaseAdapter } from "@ai16z/adapter-postgres";\n\nconst db = new PostgresDatabaseAdapter({\n  connectionString: process.env.DATABASE_URL,\n  max: 20, // Connection pool size\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 2000,\n});\n\n// Test connection\nawait db.testConnection();\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sqlite-setup",children:"SQLite Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { SqliteDatabaseAdapter } from "@ai16z/adapter-sqlite";\nimport Database from "better-sqlite3";\n\nconst db = new SqliteDatabaseAdapter(\n  new Database("./db.sqlite", {\n    // SQLite options\n    memory: false,\n    readonly: false,\n    fileMustExist: false,\n  }),\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"supabase-setup",children:"Supabase Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { SupabaseDatabaseAdapter } from "@ai16z/adapter-supabase";\n\nconst db = new SupabaseDatabaseAdapter(\n  process.env.SUPABASE_URL!,\n  process.env.SUPABASE_ANON_KEY!,\n);\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"core-features",children:"Core Features"}),"\n",(0,s.jsx)(n.h3,{id:"memory-operations",children:"Memory Operations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Create memory\nawait db.createMemory({\n  id: uuid(),\n  type: "messages",\n  content: {\n    text: "Hello world",\n    attachments: [],\n  },\n  embedding: new Float32Array(1536), // Embedding vector\n  userId,\n  roomId,\n  agentId,\n  createdAt: Date.now(),\n  unique: true,\n});\n\n// Search by embedding\nconst memories = await db.searchMemories({\n  tableName: "messages",\n  roomId,\n  embedding: vectorData,\n  match_threshold: 0.8,\n  match_count: 10,\n  unique: true,\n});\n\n// Get recent memories\nconst recent = await db.getMemories({\n  roomId,\n  count: 10,\n  unique: true,\n  tableName: "messages",\n  start: startTime,\n  end: endTime,\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"relationship-management",children:"Relationship Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Create relationship\nawait db.createRelationship({\n  userA: user1Id,\n  userB: user2Id,\n});\n\n// Get relationship\nconst relationship = await db.getRelationship({\n  userA: user1Id,\n  userB: user2Id,\n});\n\n// Get all relationships\nconst relationships = await db.getRelationships({\n  userId: user1Id,\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"goal-management",children:"Goal Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Create goal\nawait db.createGoal({\n  id: uuid(),\n  roomId,\n  userId,\n  name: "Complete task",\n  status: GoalStatus.IN_PROGRESS,\n  objectives: [\n    { text: "Step 1", completed: false },\n    { text: "Step 2", completed: false },\n  ],\n});\n\n// Update goal status\nawait db.updateGoalStatus({\n  goalId,\n  status: GoalStatus.COMPLETED,\n});\n\n// Get active goals\nconst goals = await db.getGoals({\n  roomId,\n  userId,\n  onlyInProgress: true,\n  count: 10,\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"room--participant-management",children:"Room & Participant Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Create room\nconst roomId = await db.createRoom();\n\n// Add participant\nawait db.addParticipant(userId, roomId);\n\n// Get participants\nconst participants = await db.getParticipantsForRoom(roomId);\n\n// Get rooms for participant\nconst rooms = await db.getRoomsForParticipant(userId);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"vector-search-implementation",children:"Vector Search Implementation"}),"\n",(0,s.jsx)(n.h3,{id:"postgresql-with-pgvector",children:"PostgreSQL (with pgvector)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// PostgreSQL vector search\nasync searchMemoriesByEmbedding(\n  embedding: number[],\n  params: {\n    match_threshold?: number;\n    count?: number;\n    roomId?: UUID;\n    unique?: boolean;\n    tableName: string;\n  }\n): Promise<Memory[]> {\n  const client = await this.pool.connect();\n  try {\n    let sql = `\n      SELECT *,\n      1 - (embedding <-> $1::vector) as similarity\n      FROM memories\n      WHERE type = $2\n    `;\n\n    const values: any[] = [\n      `[${embedding.join(",")}]`,\n      params.tableName\n    ];\n\n    if (params.unique) {\n      sql += ` AND "unique" = true`;\n    }\n\n    if (params.roomId) {\n      sql += ` AND "roomId" = $3::uuid`;\n      values.push(params.roomId);\n    }\n\n    if (params.match_threshold) {\n      sql += ` AND 1 - (embedding <-> $1::vector) >= $4`;\n      values.push(params.match_threshold);\n    }\n\n    sql += ` ORDER BY embedding <-> $1::vector`;\n\n    if (params.count) {\n      sql += ` LIMIT $5`;\n      values.push(params.count);\n    }\n\n    const { rows } = await client.query(sql, values);\n    return rows.map(row => ({\n      ...row,\n      content: typeof row.content === "string"\n        ? JSON.parse(row.content)\n        : row.content,\n      similarity: row.similarity\n    }));\n  } finally {\n    client.release();\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sqlite-with-sqlite-vss",children:"SQLite (with sqlite-vss)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// SQLite vector search implementation\nasync searchMemories(params: {\n  tableName: string;\n  roomId: UUID;\n  embedding: number[];\n  match_threshold: number;\n  match_count: number;\n  unique: boolean;\n}): Promise<Memory[]> {\n  const queryParams = [\n    new Float32Array(params.embedding),\n    params.tableName,\n    params.roomId,\n    params.match_count\n  ];\n\n  let sql = `\n    SELECT *, vec_distance_L2(embedding, ?) AS similarity\n    FROM memories\n    WHERE type = ?\n  `;\n\n  if (params.unique) {\n    sql += " AND `unique` = 1";\n  }\n\n  sql += ` ORDER BY similarity ASC LIMIT ?`;\n\n  const memories = this.db.prepare(sql).all(...queryParams);\n\n  return memories.map(memory => ({\n    ...memory,\n    content: JSON.parse(memory.content),\n    similarity: memory.similarity\n  }));\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"schema-management",children:"Schema Management"}),"\n",(0,s.jsx)(n.h3,{id:"postgresql-schema",children:"PostgreSQL Schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- migrations/20240318103238_remote_schema.sql\nCREATE EXTENSION IF NOT EXISTS vector;\n\nCREATE TABLE memories (\n  id UUID PRIMARY KEY,\n  type TEXT NOT NULL,\n  content JSONB NOT NULL,\n  embedding vector(1536),\n  "userId" UUID NOT NULL,\n  "roomId" UUID NOT NULL,\n  "agentId" UUID NOT NULL,\n  "unique" BOOLEAN DEFAULT FALSE,\n  "createdAt" TIMESTAMP NOT NULL\n);\n\nCREATE INDEX memory_embedding_idx ON\n  memories USING ivfflat (embedding vector_cosine_ops)\n  WITH (lists = 100);\n\nCREATE TABLE relationships (\n  id UUID PRIMARY KEY,\n  "userA" UUID NOT NULL,\n  "userB" UUID NOT NULL,\n  status TEXT DEFAULT \'ACTIVE\',\n  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE goals (\n  id UUID PRIMARY KEY,\n  "roomId" UUID NOT NULL,\n  "userId" UUID,\n  name TEXT NOT NULL,\n  status TEXT NOT NULL,\n  objectives JSONB NOT NULL,\n  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sqlite-schema",children:"SQLite Schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const sqliteTables = `\nCREATE TABLE IF NOT EXISTS memories (\n  id TEXT PRIMARY KEY,\n  type TEXT NOT NULL,\n  content TEXT NOT NULL,\n  embedding BLOB,\n  userId TEXT NOT NULL,\n  roomId TEXT NOT NULL,\n  agentId TEXT NOT NULL,\n  "unique" INTEGER DEFAULT 0,\n  createdAt INTEGER NOT NULL\n);\n\nCREATE VIRTUAL TABLE IF NOT EXISTS memory_fts \n  USING fts5(content, content_rowid=id);\n\nCREATE TABLE IF NOT EXISTS goals (\n  id TEXT PRIMARY KEY,\n  roomId TEXT NOT NULL,\n  userId TEXT,\n  name TEXT NOT NULL,\n  status TEXT NOT NULL,\n  objectives TEXT NOT NULL,\n  createdAt INTEGER DEFAULT (unixepoch())\n);\n`;\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,s.jsx)(n.h3,{id:"connection-pooling",children:"Connection Pooling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// PostgreSQL connection pool\nconstructor(connectionConfig: any) {\n  super();\n  this.pool = new Pool({\n    ...connectionConfig,\n    max: 20,\n    idleTimeoutMillis: 30000,\n    connectionTimeoutMillis: 2000\n  });\n\n  this.pool.on("error", (err) => {\n    console.error("Unexpected error on idle client", err);\n  });\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"prepared-statements",children:"Prepared Statements"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// SQLite prepared statements\nclass SqliteDatabaseAdapter extends DatabaseAdapter {\n  private statements = new Map<string, Statement>();\n\n  prepareStatement(sql: string): Statement {\n    let stmt = this.statements.get(sql);\n    if (!stmt) {\n      stmt = this.db.prepare(sql);\n      this.statements.set(sql, stmt);\n    }\n    return stmt;\n  }\n\n  // Use prepared statements\n  async getMemoryById(id: UUID): Promise<Memory | null> {\n    const stmt = this.prepareStatement("SELECT * FROM memories WHERE id = ?");\n    const memory = stmt.get(id);\n    return memory\n      ? {\n          ...memory,\n          content: JSON.parse(memory.content),\n        }\n      : null;\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batch-operations",children:"Batch Operations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Batch memory creation\nasync createMemories(memories: Memory[], tableName: string) {\n  const client = await this.pool.connect();\n  try {\n    await client.query(\'BEGIN\');\n\n    const stmt = await client.prepare(\n      `INSERT INTO memories (\n        id, type, content, embedding, "userId",\n        "roomId", "agentId", "unique", "createdAt"\n      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`\n    );\n\n    for (const memory of memories) {\n      await stmt.execute([\n        memory.id,\n        tableName,\n        JSON.stringify(memory.content),\n        memory.embedding,\n        memory.userId,\n        memory.roomId,\n        memory.agentId,\n        memory.unique ?? false,\n        memory.createdAt\n      ]);\n    }\n\n    await client.query(\'COMMIT\');\n  } catch (error) {\n    await client.query(\'ROLLBACK\');\n    throw error;\n  } finally {\n    client.release();\n  }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class DatabaseAdapter {\n  protected async withTransaction<T>(\n    callback: (client: PoolClient) => Promise<T>,\n  ): Promise<T> {\n    const client = await this.pool.connect();\n    try {\n      await client.query("BEGIN");\n      const result = await callback(client);\n      await client.query("COMMIT");\n      return result;\n    } catch (error) {\n      await client.query("ROLLBACK");\n      if (error instanceof DatabaseError) {\n        // Handle specific database errors\n        if (error.code === "23505") {\n          throw new UniqueViolationError(error);\n        }\n      }\n      throw error;\n    } finally {\n      client.release();\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"extension-points",children:"Extension Points"}),"\n",(0,s.jsx)(n.h3,{id:"custom-adapter-implementation",children:"Custom Adapter Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class CustomDatabaseAdapter extends DatabaseAdapter {\n  constructor(config: CustomConfig) {\n    super();\n    // Initialize custom database connection\n  }\n\n  // Implement required methods\n  async createMemory(memory: Memory, tableName: string): Promise<void> {\n    // Custom implementation\n  }\n\n  async searchMemories(params: SearchParams): Promise<Memory[]> {\n    // Custom implementation\n  }\n\n  // Add custom functionality\n  async customOperation(): Promise<void> {\n    // Custom database operation\n  }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Connection Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use connection pooling for PostgreSQL"}),"\n",(0,s.jsx)(n.li,{children:"Handle connection failures gracefully"}),"\n",(0,s.jsx)(n.li,{children:"Implement proper cleanup"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transaction Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use transactions for atomic operations"}),"\n",(0,s.jsx)(n.li,{children:"Implement proper rollback handling"}),"\n",(0,s.jsx)(n.li,{children:"Manage nested transactions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement specific error types"}),"\n",(0,s.jsx)(n.li,{children:"Handle constraint violations"}),"\n",(0,s.jsx)(n.li,{children:"Provide meaningful error messages"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Resource Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Close connections properly"}),"\n",(0,s.jsx)(n.li,{children:"Clean up prepared statements"}),"\n",(0,s.jsx)(n.li,{children:"Monitor connection pools"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api",children:"Database Schema Reference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../packages/core",children:"Error Handling"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
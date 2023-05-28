import {pgTable , serial , text , varchar , timestamp , boolean } from "drizzle-orm/pg-core"
import {drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel} from "drizzle-orm";
import { sql}  from "@vercel/postgres";

//now we will tell the orm about the interface of our database inorder that orm suggest us correct types.

export const TodosTable = pgTable("todos" , {
id: serial("id").primaryKey(),
task:varchar("task" , {length: 255}).notNull(), 
})
//now to set types
export type todos = InferModel<typeof TodosTable>; //use this type when we get
export type Newtodos = InferModel<typeof TodosTable , "insert">; //use this type when we inse.

//now to export databasse and drizzle will make connection but drizzle cant goto the env file and check
export const Db = drizzle(sql); //this sql will take the secret from env file and tell to the drizzle
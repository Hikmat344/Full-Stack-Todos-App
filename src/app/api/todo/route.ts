import { NextRequest , NextResponse } from "next/server";
import {db} from "@vercel/postgres";
import { error } from "console";
import {TodosTable , Newtodos , todos , Db} from "@/lib/drizzle";

 export async function GET(request:NextRequest)
 {
    const client = await db.connect();
    try{
       await client.sql`create table if not exists todos(Id serial , Tasks varchar(255));`;
       const data = await client.sql`select * from todos` ;
       return NextResponse.json({Data : data});
    
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message: "Something went wrong"})

    }
 }

 export async function POST(request: NextRequest){
    const client = await db.connect();
    const data = await request.json();

    try{
        if(data.Task)
        {
            await client.sql`insert into todos(Tasks) values(${data.Task});`;
            return NextResponse.json({message: "Task has been added"});
        }
        else{
            throw new Error("task is not added")
        }
    }
    catch(error){
        return NextResponse.json({ message : (error as {message:string}).message});
    }

    
 }

 
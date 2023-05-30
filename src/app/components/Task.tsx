
import {todos  } from "@/lib/drizzle"


const getdata = async () =>{

  try{
      const data = await fetch("http://localhost:3000/api/todo" , {
        method: "Get" ,
        headers: {
          "Content-Type": "Application/json"
        }

      });
      if(!data.ok)
      {
        throw new Error("Failed to fetch data");
      };
      const res = await data.json();
      return res ;


  }
  catch(err){

    console.log(err);
  }
}

export const Task = async () => {
  const result : {Data : todos[]} = await getdata() ;
  console.log(result)
  

  return (
    <>
    {
      result.Data.map( (items  ) =>{
        return (
           <div className="bg-slate-200 py-4 px-4 flex items-center gap-x-3 ">
           {/* circle */}
            <div className="bg-black w-3 h-3 rounded-full mx-4 items-center" />
            {/* task */}
            <p className="text-lg text-black font-medium">Task1</p>
            </div>
            )
      })
    }
    </>
  )
}

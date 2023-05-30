// import { Input } from "./components/Input";
import { Task } from "./components/Task";


export default function Home() {
  return(
    
       

    <main className="bg-white h-screen flex items-center justify-center" >
      <div className="bg-slate-100/100 w-full max-w-md rounded shadow-slate-600 shadow-lg">
        {/* @ts-ignore */}
        <Task />
        {/* @ts-ignore */}
        <Task/>
        <form className="flex mt-5">
          <input type="text" className="w-{100%} rounded-lg mx-5 px-5 mb-4 h-10" placeholder="Add task here" />
          <button type = "submit"className="bg-slate-800 text-white rounded border-2xl mb-4 w-12 "> Add </button>
        </form>
        <div className="bg-black w-1/2 h-1.5 mx-auto rounded mb-3 "/>

      </div>
    </main>

  )
}
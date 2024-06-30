

export const GreenButton = ({onClick ,label})=>{
return <div>
<button onClick={onClick} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"

>
{label}
</button>
</div>


}

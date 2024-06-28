

export const InputBox = ({onChange,label,placeholder,type,loading})=>{

    return( <div >
        <label className="text-sm font-medium text-left py-2">
        {label}
        </label>
       
        <input onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" type={type} placeholder={placeholder}/> 
    </div>
    )
}


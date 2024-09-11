function Schools() {
    const schoolOptions  = [
        {label:"USICT", value:1},
        {label:"MAIT", value:2},
        {label:"MSIT", value:3},
        {label:"BPIT", value:4},
    ]
    return ( 
        <select className=" w-[50%] border-2 border-black text-center"> 
        {
            schoolOptions.map(option => (
                <option value={option.value}>{option.label}</option>
            ))
        }
        </select>
     );
}

export default Schools;
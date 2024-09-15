function Branch() {
    const branchOptions  = [
        {label:"Computer Science and Engineering", value:1},
        {label:"Information and Technology", value:2},
        {label:"Electroics and communication", value:3},
        {label:"Mechanical", value:4},
        {label:"Bio Technology", value:5},
        {label:"Vlsi", value:6}
    ]
    return ( 
        <select> 
        {
            branchOptions.map(option => (
                <option value={option.value}>{option.label}</option>
            ))
        }
        </select>
     );
}

export default Branch;
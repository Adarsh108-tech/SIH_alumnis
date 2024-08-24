function Year() {
    const YearOptions  = [
        {label:"First Year", value:1},
        {label:"Second Year", value:2},
        {label:"Third Year", value:3},
        {label:"Fourth Year", value:4},
    ]
    return ( 
        <select> 
        {
            YearOptions.map(option => (
                <option value={option.value}>{option.label}</option>
            ))
        }
        </select>
     );
}

export default Year;
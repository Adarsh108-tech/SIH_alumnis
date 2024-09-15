function ChatSearch({Data , search , setSearch}) {

    function ChangeHandler(e) {
        const query = e.target.value.toLowerCase();
        const filteredData = Data.filter((user) => 
            user.accountName && user.accountName.toLowerCase().includes(query)
        );
        setSearch(filteredData);
        query === "" ? setSearch("") : setSearch(filteredData)
        console.log(filteredData);

    }

    return ( 
        <input className="m-2 rounded-xl p-2 w-[95%] bg-gray-300" type="text" placeholder="search" onChange={(e)=>{ChangeHandler(e)}}/>
     );

}
export default ChatSearch;
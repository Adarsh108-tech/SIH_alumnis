function PageChange({page}) {

    const Data = [
        
    ]

    if(page == 1 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center gap-10 ">
                <div className=" bg-slate-500 w-[20%] h-[80%] ">

                </div>
                <div className="bg-slate-500 w-[70%] h-[80%]">

                </div>
            </div>
         );
    }
    if(page ==2 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center">
                Chats
            </div>
         );
    }
    if(page ==3 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center">
                Search
            </div>
         );
    }
    if(page ==4 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center">
                Profile
            </div>
         );
    }
}

export default PageChange;
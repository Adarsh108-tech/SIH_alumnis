import WorkBox from "./WorkBox";
import ConnectBox from "./ConnectBox";

function PageChange({ page }) {
  //const Data = [];

  if (page === 1) {
    return (
      <div className="flex w-full h-screen bg-white px-8 py-2 justify-start items-start gap-4 ">
        <WorkBox />
        <ConnectBox />
      </div>
    );
  }
  if (page === 2) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        Chats
      </div>
    );
  }
  if (page === 3) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        Search
      </div>
    );
  }
  if (page === 4) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        Profile
      </div>
    );
  }
}

export default PageChange;

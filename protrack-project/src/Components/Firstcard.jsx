
import sideCard from "../assets/sidecard.jpg";

function Firstcard() {
  return (
    <>
      <header className="bg-violet-100 bg-fit p-8 h-[55vh]">
        <div className="container grid h-full min-h-[60vh] gap-10 w-full grid-cols-1 md:grid-cols-2 items-center">
          
          
          <div className="flex flex-col justify-center h-full w-300 pr-8">
            <h1 className="text-black font-extrabold text-6xl">
              ProTrack — <br /> Simplify your project management.
            </h1>
            <p className="mb-4 text-gray-500 md:pr-16 xl:pr-28 mt-3">
              A sleek and intuitive project management tool designed to help teams and individuals plan, organize, and track their work effortlessly. From managing tasks to collaborating on projects, ProTrack keeps everything in one place so you can focus on what matters most — getting things done.
            </p>
            <button className="w-full md:w-[200px] px-4 py-3 bg-black text-white font-bold rounded-lg">
              <span>Sign Up</span>
            </button>
          </div>

       
          <div className="h-full w-full flex justify-end mr-20">
            <img
              src={sideCard}
              alt="team work"
              className="h-[20rem] w-[16rem] rounded-xl object-cover"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Firstcard;


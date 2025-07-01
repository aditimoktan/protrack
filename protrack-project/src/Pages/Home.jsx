import Firstcard from "../Components/Firstcard";
import Feature from "../Components/Feature";
// import mainBg from "../assets/mainbg.jpg"

function Home() {
  return (
    <>
    <Firstcard />
    <Feature />
      <div className="pt-20 h-[100vh] bg-violet-50"
      // style={{ backgroundImage: `url(${mainBg})` }}
      >
      </div>
    </>
  );
}
export default Home;

import Footer from "../components/footer";
import Header from "../components/header";
import MovieCard from "../components/movie";
import NavBar from "../components/navBar";
import Trending from "../components/Trending";
import TopSearch from "../components/TopSearch";
import Comedy from "../components/Comedy";
import Drama from "../components/Drama";
import Action from "../components/Action";
export default function Home() {         
  return (
    <>
      <NavBar />
      <Header
        background={{
          url: "https://s3-alpha-sig.figma.com/img/5909/0ea8/b488be9c50166f91c91c010eec13fd2e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z2e~O2oR2fnZHBfIex1ayEB1leOzYkIEc9-o6-SGAriQyrDFFBCHUK6U51qoCvYOboF6C~J48UtxrFu3KxCP-QF19YNJX07~OrpUeK7OwBPqx~KYPk2R~Ni1-GLwcR6za5I7RdC1tjkI-BoNiYuoZxW~gn-9nRIod4AA6s~1kwn-b6RjRH~r8wyz98IO4zPgERXnKxANGIn5jbJcVcZKZDbdesAvzwE3SZOvoja2rdCCdKP7aSKmoOOeeqpVzO4EFN3zf7tKHkOWZHCB~iM-v7OOoGm7KMcnnYMIwsvAQp279mxTc1cJYTxC2LnCSTDIUvzuHFekHPcr9G~ubL-TzQ__",
        }}
          />
          <Trending/>
          <TopSearch/>
          <Comedy/>
          <Drama/>
          <Action/>
      <Footer />
    </>
  );
}

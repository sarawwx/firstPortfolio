import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';


const arrayPro = [{
  img: "images/steven.jpg",
  title: "game memory",
  desc: "this is my first try at creating a game",
  ref1: "https://sarawwx.github.io/game-memory-test/",
  ref2: "https://github.com/sarawwx/game-memory-test"
  },
  {
    img: "images/steven.jpg",
    title: "game memory",
    desc: "this is my first try at creating a game",
    ref1: "https://sarawwx.github.io/game-memory-test/",
    ref2: "https://github.com/sarawwx/game-memory-test"
  },
  {
    img: "images/steven.jpg",
    title: "game memory",
    desc: "this is my first try at creating a game",
    ref1: "https://sarawwx.github.io/game-memory-test/",
    ref2: "https://github.com/sarawwx/game-memory-test"
  }];

function App() {
  return (
    <>
    <Header/>
    <main>
    <SectionOne/>
    <SectionTwo arrayPro={arrayPro}/>
    <Footer/>
    </main>
    </>
  );
}

export default App;
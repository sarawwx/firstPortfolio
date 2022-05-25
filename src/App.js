import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';


const arrayPro = [{
  img: "images/wordflix.jpg",
  title: "wordflix",
  desc: "this is my first try recreating netflix page",
  ref1: "https://clone-netflix-swart.vercel.app/",
  ref2: "https://github.com/sarawwx/clone-netflix"
  },
  {
    img: "images/nature.jpg",
    title: "nature landing page",
    desc: "this is a landing page to practice CSS",
    ref1: "https://nature-landing-page.vercel.app/",
    ref2: "https://github.com/sarawwx/nature-landing-page"
  },
  {
    img: "images/seasons.jpg",
    title: "slideshow",
    desc: "this is a seasons themed slide",
    ref1: "https://slide-nine.vercel.app/",
    ref2: "https://github.com/sarawwx/slide"
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
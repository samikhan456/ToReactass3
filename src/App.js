import Navbar from './components/navbar';
import Footer from './components/footer';
import Feedback from './components/feedback';
import SportsDescription from './components/sportsdescription';
import SportsImages from './components/sportsimages';
function App() {
  return (
    <>
<Navbar />



      <div>
    
        <h1>Sports</h1>
        <SportsImages/>
        <SportsDescription/>
        <Feedback/>
     
      
      </div>
      <Footer/>
    
      </>
    );
  }
;

export default App;

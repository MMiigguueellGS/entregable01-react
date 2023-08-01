
import './App.css'
import Phrases from './components/Phrases'
import famousPhrases  from './tools/famousPhrases'
import fortunePhrases  from './tools/fortunePhrases'
import spaceCuriosities from './tools/spaceCuriosities'


  
function App() {

  return (

    <  >   
    <Phrases  quotes1={fortunePhrases} quotes2 = {famousPhrases} quotes3 = {spaceCuriosities}/>
    </>
  )
}

export default App

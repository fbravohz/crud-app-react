import styles from './styles/App.module.scss'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Content/Header/Header'
import Data from './components/Content/Data/Data'

function App() {

  return (
  <>
    <div className={styles.App}>
      <NavBar/>
      <Header/>
      <Data/>
    </div>
  </>
  )
}

export default App

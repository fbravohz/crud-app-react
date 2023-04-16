import styles from './styles/App.module.scss'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Content/Header/Header'
import Table from './components/Content/Table/Pagination/Table'

function App() {

  return (
  <>
    <div className={styles.App}>
      <NavBar/>
      <Header/>
      <Table/>
    </div>
  </>
  )
}

export default App

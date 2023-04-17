import styles from './styles/App.module.scss'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Content/Header/Header'
import Data from './components/Content/Data/Data'
import DataModal from './components/Content/Data/Modal/Modal'
import { data } from '/src/db/db.json'
import { useEffect } from 'react'
import { setDatabase } from './store/slices/dataSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  dispatch(setDatabase(data));
  return (
  <>
    <div className={styles.App}>
      <NavBar/>
      <Header/>
      <Data/>
      <DataModal/>
    </div>
  </>
  )
}

export default App

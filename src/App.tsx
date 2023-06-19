import Homepage from './pages/Homepage';
import './styles/global.scss'

function App() {

  const userStatus = true;


  return (
    <>
      {
        userStatus ? <Homepage /> : null
      }
    </>
  )
}

export default App

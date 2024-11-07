import './App.css'
import Header from './components/Header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'

function App() {

  return (
    <>
      <div className="grid place-items-center mt-20 h-screen">
       <Header></Header>
       <main>
        <section>
          <WeatherBoard></WeatherBoard>
        </section>
       </main>
      </div>
    </>
  )
}

export default App

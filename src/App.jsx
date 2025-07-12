import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import '@/assets/styles/App.scss'
import Iridescence from '@/components/Iridescence';

function App() {
  const [count, setCount] = useState(0)


  useEffect( () => {
    
    const getData = async () => {
      try {
        const key = import.meta.env.VITE_TOUR_KEY
        
        const response = await axios.get('/api/getTourKorAttractList', {
          params: {
            serviceKey: key,
          },
        })
        
        // XML 문자열을 DOM 객체로 파싱
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(response.data, 'text/xml')

        // XML에서 데이터 추출
        const items = xmlDoc.getElementsByTagName('item') // 예시
        console.log(items)
        
      } catch (error) {
        console.error(error)
      }
      
    }


    getData()
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={true}
        amplitude={0.005}
        speed={0.2}
      />
    </>
  )
}

export default App

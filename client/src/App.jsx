import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Battle from './pages/Battle'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text overflow-hidden font-sans relative">
        {/* Background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        
        <main className="container mx-auto px-4 py-8 h-full relative z-10 flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/battle" element={<Battle />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

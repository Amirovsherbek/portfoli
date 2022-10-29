import './App.css'
import { Route, Routes } from "react-router-dom";
import { Suspense,lazy } from 'react';
const AppAssisent = lazy(() => import('./AppAssisent'));
const NextPage = lazy(() => import('./twopage/twopage'));
const ThreePage = lazy(() => import('./threePage/threepages'));
const Cabinet = lazy(() => import('./cabinet/cabinet'));
function App() {
  return (
     <div  className="cont">
      
        <Routes>
         
         <Route path="/" element={<Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
         <AppAssisent/>
         </Suspense>}/>
         <Route path="/about/:id" element={<Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
         <NextPage/>
         </Suspense>}/>
         <Route path="/docs" element={<Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
         <ThreePage/>
         </Suspense>}/>
         <Route path="/cab" element={<Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
         <Cabinet/>
         </Suspense>}/>
        </Routes>
        
     </div>
  );
}

export default App;

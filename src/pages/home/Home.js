import GuideSetup from '../GuideSetup';
import HConfig from '../HConfig';
import PublishedWorkFlow from '../PublishedWorkFlow';
import Simulations from '../Simulations';
import Templates from '../Templates';
import { Route, Link, Routes } from 'react-router-dom'

const Home = ()=>{
return (
    <div className='App'>
      <h1>Home Page</h1>
      <div className="components">
        <Link className='childelements' to="/guildsetup" >GuideSetup</Link>
        <Link className='childelements' to="/templates">Templates</Link>
        <Link className='childelements' to="/simulations">Simulations</Link>
        <Link className='childelements' to="/publishwf">PublishedWorkFlow</Link>
        <Link className='childelements' to="hconfig">HConfig</Link>
        
      </div>
      <div className='subcomponents'>
        <div className='childcomponents'>
          <div>GuideSetup</div>
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
          <div>5.</div>
          </div>
        <div className='childcomponents'>
          <div>template setup</div>
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
          <div>5.</div>
          </div>
      </div>
      <main>
        <Routes>
          <>
          <Route path="guildsetup" element={<GuideSetup/>}/>
          <Route path="templates" element={<Templates/>} />
          <Route path="simulations" element={<Simulations/>}/>
          <Route path="publishwf" element={<PublishedWorkFlow/>}></Route>
          <Route path="hconfig" element={<HConfig/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          </>
        </Routes>
      </main>
    </div>
  );
}
export default Home;
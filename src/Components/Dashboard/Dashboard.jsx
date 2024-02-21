import Sidebar from './Sidebar';
import MainPage from './MainPage';
import SearchView from './SearchView';
import AddCourse from './AddCourse';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className='flex '>
        <div className="basis-[16%] h-[100vh] ">
           <Sidebar/>
        </div>
        <div className='basis-[84%] h-[100vh] overflow-scroll'>
          {/* <SearchView/> */}
            {/* <MainPage/> */}
          <div>
            <Outlet/> 
          </div>    
            {/* <AddCourse/> */}
        </div>
    </div>
  )
}

export default Dashboard;
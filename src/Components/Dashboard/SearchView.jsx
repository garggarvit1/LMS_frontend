import  { useState } from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import {profile} from "../../assets"

const SearchView = ({onSearch}) => {
    const [open,setopen]=useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const showDropDown=()=>{
        setopen(!open);
    }

    
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    // You can add additional logic if needed
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[22px]'>
        <div className='flex items-center rounded-[5px] shadow-md'>
            <input type="text" onChange={handleInputChange} value={searchQuery} name="" className='bg-[#F8F9FC h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search For...'/>
            <div onClick={handleSearch} className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                <FaSearch color='white'/>
            </div>
        </div>
        {/* <div className='flex items-center gap-[15px] relative '>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                <FaRegBell cursor="pointer" className='pl-1'/>
                <FaEnvelope cursor="pointer"/>
            </div>
            <div className='flex items-center gap-[10px] relative'>
                <p className='text-[14px]'>Douglas McGee</p>
                <div onClick={showDropDown}>
                    <img src={profile} alt="" className='w-[40px] h-[35px] border rounded-full object-cover cursor-pointer' />
                </div>
                {
                    open&&
                    <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-130px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                        <p className='cursor-pointer hover:text-[blue] font-semibold '>Profile</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold '>Settings</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold '>Log out</p>
                    </div>
                }
            </div>
        </div> */}
    </div>
  )
}

export default SearchView
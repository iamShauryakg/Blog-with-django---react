import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='flex center place-content-end mr-[40px] gap-4 mt-4'>
      <Link to="/"> <button className='bg-blue-500 rounded p-2 cursor-pointer'>Home</button> </Link>
      <Link to="/about"> <button className='bg-blue-500 rounded p-2 cursor-pointer'>About</button> </Link>
      <Link to="/blogs"> <button className='bg-blue-500 rounded p-2 cursor-pointer'>Blogs</button> </Link>
    </div>
    </>
  )
}

export default Navbar

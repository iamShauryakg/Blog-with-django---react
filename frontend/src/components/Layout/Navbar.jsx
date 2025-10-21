import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className='hidden md:flex justify-around  mr-[40px] gap-4 mt-4'>
        <div>
          <h1 className='text-2xl font-bold '>MyBlog</h1>        
        </div>
        <div className='flex center  mr-[40px] gap-4 '>
          <Link to="/"> <button className='bg-blue-500 rounded p-2 cursor-pointer'>Home</button> </Link>
          <Link to="/about"> <button className='bg-blue-500 rounded p-2 cursor-pointer'>About</button> </Link>
          <Link to="/blogs"> <button className='bg-blue-500 rounded p-2 cursor-pointer'>Blogs</button> </Link>
        </div>
        <div>
          <Link to="/login"> <button className='bg-green-500 rounded p-2 cursor-pointer'>Login</button> </Link>
          <Link to="/register"> <button className='bg-green-500 rounded p-2 cursor-pointer'>Register</button> </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar

import React from 'react'
import './AdminPannel.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { CiCirclePlus, CiSaveDown2, CiSearch } from 'react-icons/ci'
import { IoMdSettings } from 'react-icons/io'
import { IoTimeOutline } from 'react-icons/io5'
import { MdReportGmailerrorred } from 'react-icons/md'
import { AiOutlineLogout } from 'react-icons/ai'
import ViewForm from '../ViewForm/ViewForm'


function AdminPannel() {

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/');
    // }

    return (
        <>

            <div class="sidebar">
                <div className='d-flex ps-3 justify-content-start align-items-center '>
                    <div className='round-user'>
                        <Link> <GiHamburgerMenu className='text-black' /></Link>
                    </div>
                    <div className='fs-3 ps-2'><FaUser /></div>
                    <div className='fs-4 ps-2'>Contact</div>
                </div>
                <ul className='pt-3'>
                    <li><a href="#dashboard" ><span className='pe-2'><FaUser className='fs-5 ' /></span>Contact</a></li>
                    <li><a href="#users"><span className='pe-2'><IoTimeOutline className='fs-4' /></span>Frequnet</a></li>
                    <li><a href="#settings"><span className='pe-2'><CiSaveDown2 className='fs-4' /></span>Other Contact</a></li>
                    <li><a href="#reports"><span className='pe-2'><MdReportGmailerrorred className='fs-4' /></span>Reports</a></li>
                    <li><a href="#logout"><span className='pe-2'><AiOutlineLogout className='fs-4' /></span>Logout</a></li>
                </ul>
            </div>
            <div class="main-content">
                <header className='d-flex justify-content-between'>
                    <div className=' d-flex align-itmes-center justify-content-start'>
                        <span className='fs-5 se-bac ps-3'><CiSearch /></span>
                        <span><input type="search" className='border border-0 se-pad' size="90" /></span>
                    </div>
                    <div className=''>
                        <span className='fs-4'> <Link><IoMdSettings className='text-black' /></Link></span>
                        <span className='fs-3 text-end ps-3' >
                            <Link to={"/form"}><CiCirclePlus /></Link>
                        </span>
                    </div>
                </header>
                <section id="content">
                    {/* <p>Welcome to the admin panel. Use the sidebar to navigate.</p> */}
                    <ViewForm />
                </section>
            </div>
        </>
    )
}

export default AdminPannel

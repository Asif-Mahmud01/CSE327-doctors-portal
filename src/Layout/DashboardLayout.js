import React, { useContext } from 'react';
import Navbar from '../../src/Pages/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Context/Hooks/UseAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label type="checkbox" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>
                <div className="drawer-side bg-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 text-base-content bg-white">
                        
                        <li><Link to='/dashboard'>My appointmentas</Link></li>
                        <li><Link to="/dashboard/manageDoctors">Doctors</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add doctor</Link></li>
                                
                            </>
                        }
                        
                    </ul>
                    {/* <label className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
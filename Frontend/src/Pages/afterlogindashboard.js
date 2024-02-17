import Navbar1 from "../Components/Navbar1";
import './Admindashboard.css'
import AdminNavbar from '../Components/AdminNavbar'

import './Login.css'

import Footer3 from '../Components/Footer3'
import './Admin.css'
function afterlogindashboard()
{

    

    return(
        <>
        <div className="xyz">
        <AdminNavbar/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Admin Dashboard</h2>
        




        <div className="footer1"> <Footer3/></div>
</div>



        
        </>
    );
}export default afterlogindashboard;
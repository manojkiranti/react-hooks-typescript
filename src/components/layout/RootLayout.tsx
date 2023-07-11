import { Outlet, NavLink } from "react-router-dom";
import { NavData } from "../../constants/nav-data.constant";
import { NavType } from "../../types/nav.type";
const RootLayout = () => {
    return (
        <div className="main">
            <header className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <ul className="navbar-nav">
                                    {
                                        NavData.map((item,index) => {
                                            return(
                                                <li className="nav-item" key={index}>
                                                    <NavLink className="nav-link" to={item.link}>{item.title}</NavLink>
                                                </li>
                                            )
                                        })  
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default RootLayout;
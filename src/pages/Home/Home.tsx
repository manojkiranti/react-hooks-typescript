import { NavLink } from "react-router-dom";
import { NavData } from "../../constants/nav-data.constant";

const Home = () => {
    return (
        <div className="home pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            {NavData.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <NavLink to={item.link}>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <h4>{item.title}</h4>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
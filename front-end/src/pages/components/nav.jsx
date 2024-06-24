import { useNavigate } from "react-router-dom"


export default function Nav() {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('car-app-jwt')
        navigate('/login')
    }

    return(
        <div className="nav">
            <input className="borderless" placeholder="Search"></input>
            <button className="borderless" onClick={handleLogOut}>Explore</button>
            <button className="borderless" onClick={handleLogOut}>Log Out</button>

        </div>
    )
}
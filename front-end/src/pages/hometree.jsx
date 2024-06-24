import { useNavigate } from "react-router-dom"
import Nav from "./components/nav"
import Tree from "./components/tree/tree"

export default function HomeTree() {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('car-app-jwt')
        navigate('/')
    }

    return (
        <>
        <div className="nav-and-tree">
            <Nav />
            <div id="home-tree">
                <Tree />
            </div>
        </div>
        </>
    )
}
import {Person, Email, Facebook} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="logogroup">
                        <a href="#intro" className="logo">Searat</a>
                        <a href="#intro" className="logotitle">ศรีรัตน์</a>
                    </div>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>++66123456789</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>sonchai@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Facebook className="icon" />
                        <span>facbook.com/sirat</span>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

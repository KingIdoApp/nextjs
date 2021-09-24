export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">หน้าหลัก</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">เกี่ยวกับเรา</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#services">บริการต่างๆ</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">งานที่ผ่านมา</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">ใบรับรอง</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">ติดต่อเรา</a>
                </li>
            </ul>
        </div>
    )
}


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/" className="nav-brand text-light">Codablack</a>
         <ul>
            <li className="ml-5">
              <button className="open-button bg-theme card">
              <i class="bi bi-arrow-bar-left text-light"></i>
              </button>
            </li>
         </ul>
      
        </nav>
     );
}
 
export default Navbar;
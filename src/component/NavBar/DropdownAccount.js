import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

const DropdownAccount = (props) => {

    const context = useContext(AuthContext);
    let user = context.user;
    let firstName = context.user?.firstName ?? "Guest";

    const handleLogOut = () => {
        props.setIsLoggedIn(false);
        user = null;
    }


    return(
        <Dropdown>
            <Dropdown.Toggle varient="success" id="dropdown-basic">
                Hello {firstName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/favourites">Favourites</Dropdown.Item>
                <Dropdown.Item as={Link} to="/changepassword">Change Password</Dropdown.Item>
                <Dropdown.Item as={Link} onClick={handleLogOut} to="/">Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

}

export default DropdownAccount;
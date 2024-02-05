import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropdownAccount = (props) => {

    const handleLogOut = () => {
        props.setIsLoggedIn(false);
        props.setUserId('');
    }


    return(
        <Dropdown>
            <Dropdown.Toggle varient="success" id="dropdown-basic">
                Hello {props.userID}
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
import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import AuthContext from "../AuthContext/AuthContext";



const CustomToggle = React.forwardRef(({ style, className, children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      style={style}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className} 
          aria-labelledby={labeledBy}>
    
          <ul className="styled-list" style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  const DropdownAccount = (props) =>{
    const context = useContext(AuthContext);
    

    let setUser = context.setUser
    let firstName = context.user?.firstName ?? "Guest";

    const handleLogOut = () => {
        setUser(null);
    }

    const mystyle = {
        color: "white",
        backgroundColor: "#07689f",
        fontFamily: "NewsReader",
        fontSize: "24px",
        textDecoration: "none"
      };

  return(
    <Dropdown className="dropdown">
      <Dropdown.Toggle as={CustomToggle} className="dropdownToggle" style={mystyle}>
        Hello {firstName}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu} className="dropdownList" >
       <Dropdown.Item as={Link} style={{textAlign: "center"}} to="/favourites">Favourites</Dropdown.Item>
       <Dropdown.Item as={Link} style={{textAlign: "center"}} to="/changepassword">Change Password</Dropdown.Item>
       <Dropdown.Item as={Link} style={{textAlign: "center"}} onClick={handleLogOut} to="/">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
  }

  export default DropdownAccount;


import { Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../../services/authServices";
import * as userServices from "../../services/userServices"

const User = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (loading) return;
    if (!user) { navigate("/")
  } else {
    userServices.getUserData(user, setUserData)
  }
  }, [user, userData]);

  console.log(`useris ${userData}`)
  console.log(error)
  return (
    <>
      {user ? ( //ar turim prisijungusi vartotoja ?
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={userData.name} id="basic-nav-dropdown">
            <NavDropdown.Item>{userData.email}Problema</NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <p>Log in</p>
        </Navbar.Collapse>
      )}
    </>
  );
};

export default User;

import React, {useRef, useState} from 'react';
import MenuDesktop from "./MenuDeskTop";
import {useAuthContext} from "../../context/AuthContext";
import {classNames} from "../../utils/util";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const {user} = useAuthContext()
    // const isAdmin = user?.
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userInfo")
    }
    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);
    const timeoutDuration = 200;
    let timeout

    const closePopover = () => {
        return buttonRef.current?.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                bubbles: true,
                cancelable: true,
            }),
        );
    };

    const onMouseEnter = (open) => {
        clearTimeout(timeout);
        if (open) return;
        return buttonRef.current?.click();
    };

    const onMouseLeave = (open) => {
        if (!open) return;
        timeout = setTimeout(() => closePopover(), timeoutDuration);
    };
    return (
        <header className={"border-b"}>
            <MenuDesktop
                classNames={classNames}
                userData={user}
                navigate={navigate}
                logout={logout}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                setOpen={setOpen}
                ref={buttonRef}
            />
        </header>
    );
};

export default Navbar;
import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";

function MainUserTag({ user, visibility = "visible" }) {

    const [userInfo, setUserInfo] = useState('')
    useEffect(()=>{
        setUserInfo(user)
    }, [user])
    
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <Avatar
                    alt="avatar-img"
                    src={userInfo.profileImg}
                    style={{
                        width: "32",
                        height: "32"
                    }}
                    className="rounded-circle me-2"
                />
                <h6 style={{ marginRight: '8px' }}>{`${userInfo.surname}, ${userInfo.name}`}</h6>
                <p>{`@${userInfo.name}`}</p>
                <p style={{ marginRight: '8px' }}>.</p>
                <p style={{ visibility: `${visibility}`}}> 8 de set</p>
            </div>
        </>
    )
}

export default MainUserTag;
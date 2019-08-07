import React from 'react'

 const ProfileItem=(props)=>{
    return (
        <div>
        <h3>{props.first_name} {props.last_name}</h3>
            <h3>Ваш пакет акцій {props.assets_pack}</h3>
        </div>
    )
} 

export default ProfileItem
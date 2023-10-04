import React from 'react';
import c from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.img}
                     src="https://myhoreca.files.wordpress.com/2017/01/distillation-3.jpg"
                     alt={""}/>
            </div>
            <div className={c.descriptionBlock}> ava + description</div>
        </div>
    );
};

export default ProfileInfo;
import React from 'react';

const JoinCard = ({user}) => {
    return (
        <div key={user._id} className='flex flex-col items-center justify-center gap-2'>
            <img className='w-36 h-36 object-cover lg:w-48 lg:h-48 shadow rounded-full' src={user?.volunteerImage} />
            <h1 className='text-xl lg:text-2xl text-[#2e355a] font-medium'>{user?.volunteerName}</h1>
            <p className='text-[#50577A] font-extralight'>{user?.volunteerEmail}</p>
        </div>
    );
};

export default JoinCard;
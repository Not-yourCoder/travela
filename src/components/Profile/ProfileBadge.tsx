import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type Props = {}

const ProfileBadge = (props: Props) => {
    return (
        <button className="cursor-pointer" type="button">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </button>
    )
}

export default ProfileBadge
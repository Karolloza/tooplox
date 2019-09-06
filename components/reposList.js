import React from 'react'

const ReposList = () => {

    const fetchUserData = async () => {
        const data = await fetch('https://api.github.com/users/karolloza')
            .then( res => res.json())
        return data
    }

    return (
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
)}

export default ReposList
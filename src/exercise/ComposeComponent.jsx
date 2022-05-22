import React from 'react';

// components
import Avatar from '../components/Avatar';
import Typoraphy from '../components/Typoraphy';

function ComposeComponent() {
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64'
        }
    }
    return (
        <div>
            <Avatar 
                avatar={comment.author.avatarUrl}
            />
            <Typoraphy text={comment.author.name} />
            <Typoraphy text={comment.text} />
            <Typoraphy text={comment.date.getMonth() + "/" + comment.date.getDate() + "/" + comment.date.getFullYear()} />
        </div>
    );
}

export default ComposeComponent;

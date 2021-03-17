import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../hoc/card';

const Profile = (props) => {
    return(
        <Card>
        <Link to = {
            {
                pathname: `${props.match.url}/posts`
            }
        }>Take me to /profile/posts</Link>
        </Card>
    )
}

//High Order of Component

export default Profile;
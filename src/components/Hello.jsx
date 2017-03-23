import React from 'react';

import '../styles/hello.less';

export default function Hello({ is }) {
    return (
        <div>
            <span style={{ color: is ? 'red' : 'yellow' }}>Hello</span>
        </div>
    );
}

Hello.propTypes = {
    is: React.PropTypes.bool.isRequired,
};

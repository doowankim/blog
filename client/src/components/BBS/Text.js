import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Text extends Component {
    render() {
        return (
            <div>
                <Link to="/readBBS" className="btn btn-dark">
                    Go back
                </Link>
                <p>유저 이름, 제목, 텍스트</p>
            </div>
        );
    }
}

export default Text;
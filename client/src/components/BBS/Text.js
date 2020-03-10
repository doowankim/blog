// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
//
// class Text extends Component {
//     render() {
//         return (
//             <div>
//                 <Link to="/readBBS" className="btn btn-dark">
//                     Go back
//                 </Link>
//                 <p>유저 이름, 제목, 텍스트</p>
//             </div>
//         );
//     }
// }
//
// export default Text;
//

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from "react-moment";

class Text extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            errors: ''
        };
    }

    componentDidMount() {
        axios
            .get('/posts/total')
            .then(res => this.setState({results: res.data.posts}))
            .catch(err => console.log(err));
    }

    render() {
        const { results } = this.state;

        console.log(results);

        return (
            <div className="text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="/readBBS" className="btn btn-dark">
                                Go Back
                            </Link>
                        </div>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">이   름</th>
                                <th scope="col">제   목</th>
                                <th scope="col">작성 날짜</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map(result =>
                                <tr key={result._id}>
                                    <td>{result.name}</td>
                                    <td>
                                        <a href="/text">
                                            {result.title}
                                        </a>
                                    </td>
                                    <td>
                                        <Moment format="YYYY년 MM월 DD일">
                                            {result.date.substring(0, 10)}
                                        </Moment>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Text;

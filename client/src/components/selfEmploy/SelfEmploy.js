// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
//
// class SelfEmploy extends Component {
//
//     constructor() {
//         super();
//         this.state = {
//             results: [],
//             errors: ''
//         };
//     }
//
//     componentDidMount() {
//         axios
//             .get('/profile/total')
//             .then(res => this.setState({results: res.data.profile}))
//             .catch(err => console.log(err));
//     }
//
//     render() {
//         const { results } = this.state;
//
//         console.log(results);
//
//
//         // 삭제(Detail from ID - 댓글, 좋아요 등등), 수정, 글쓰기
//         return (
//             <div className="SelfEmploy">
//                 <div className="container">
//                     <div className="row">
//                         <table className="table table-hover">
//                             <thead>
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">Position</th>
//                                 <th scope="col">학력 사항</th>
//                                 <th scope="col">경력 사항</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {results.map(result =>
//                                 <tr>
//                                     <th scope="row">#</th>
//                                     <td>{result.handle}</td>
//                                     <td>
//                                         <a href="/add-experience">
//                                             {result.experience}
//                                         </a>
//                                     </td>
//                                     <td>
//                                         <a href="/add-education">
//                                             {result.education}
//                                         </a>
//                                     </td>
//                                 </tr>
//                             )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default SelfEmploy;
// /* eslint-disable import/no-anonymous-default-export */
// import React,{useState, useEffect} from "react";
// import axios from "axios";


// export default () => {
//     const [ posts, setPost ] = useState([]);
//     const fetchPost = async () => {
//         const res = await axios.get('http://localhost:5555');
//         console.log(res.data);
//         setPost(res.data);
        
//     };
//     useEffect(() => {
//         fetchPost();
//     });
// const renderPost = Object.values(posts).map(post => {
//     return (
//         <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post}>
//             <div className="card-body">
//                 <h3>{post.title}</h3>
//             </div>
//         </div>
//     );
// });
//     return (
//         <div>
//             <h1>{posts.title}</h1>
//             {renderPost}
//         </div>
//     );
// }
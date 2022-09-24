const DisplayPosts = (props) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((post, i) => {
                    return (
                    <tr key={i}>
                        <td>{post.name}</td>
                        <td>{post.post}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;
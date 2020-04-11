import Layout from "../components/Layout";
import { withRouter } from "next/router";




const Post = ({ router }) => (
    <Layout title={router.query.title}>
       <p style={{width: "80vw"}}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque justo, viverra eget sollicitudin eget, consequat id mauris. Sed cursus dolor ac libero suscipit, eget elementum mauris vulputate. Nunc convallis dui id iaculis pharetra. Aliquam sit amet leo dignissim, eleifend lorem nec, pellentesque augue. Donec in nisl vel sem consectetur tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam finibus consequat nisl, at pharetra lacus bibendum in. Suspendisse diam tellus, tempor sed mi et, porttitor sagittis ligula. Aenean feugiat nisi ultrices odio lobortis suscipit.
       </p>
    </Layout>
)


export default withRouter(Post);
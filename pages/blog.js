import Layout from '../components/Layout';
import Link from 'next/Link';


const PostLink = ({title, slug}) => (
  <li>
    <Link as={slug} href={`/post?title=${title}`}>
       <a>{title}</a>
     </Link>
  </li>

)


export default () => (
    <Layout title="My Blog">
       <ul>
          <PostLink slug="react-app" title="React App" />
          <PostLink slug="wordpress-website" title="WordPress Website" />
          <PostLink slug="angular-application" title="Angular Application" />
          <PostLink slug="vuejs-single-page-application" title="Vuejs Single Page Application" />
       </ul>
    </Layout>
)
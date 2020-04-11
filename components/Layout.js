import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();



const Layout = ({children, title}) => (
    <div className="root">
       <Head>
          <title>NextPortfolio</title>
          
       </Head>
       <header>
         <Link href="/"><a>Home</a></Link>
         <Link href="/about"><a>About</a></Link>
         <Link href="/hireme"><a>Hire me</a></Link>
         <Link href="/blog"><a>Blog</a></Link>
       </header>
       <h1>{title}</h1>
       {children}

       <footer>&copy; {new Date().getFullYear()}</footer>

       <style jsx>{`
         .root {
             display: flex;
             justify-content: center;
             align-items: center;
             flex-direction: column;
         }
         header {
             width:100%;
             display:flex;
             justify-content:space-around;
             padding:1em;
             font-size:1.2em;
             background:indigo;
         }
         header a {
             color: darkgrey;
             text-decoration: none; 
         }

         header a {
            color: white;
            font-size:bold;
        }

        footer {
            padding: 1em;
        }
       `}</style>

       <style global jsx>{`
         body {
             font-size:110%;
             background:#f0f0f0;
             font:arial;
             margin:0;
         }

         h1 {
             color:indigo;
         }

         a {
             color:#ff0000;
             text-decoration:none;
         }
       `}</style>
    </div>
);

export default Layout;
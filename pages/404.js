import Layout from '../components/layout'
import Link from 'next/link'
const custom404 = () => (

    <Layout>
       <div className="text-center"> 
           <h1>404</h1>
        <p>Esta Pagina no Existe. Por Favor retorne al
             <Link href="/">
                 <a  >Inicio</a>
                 </Link>
                 </p>
       </div>
    </Layout>
)



export default custom404;
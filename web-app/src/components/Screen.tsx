import { type ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer';

interface Props {
    title?: string;
    subtitle?: string;
    children: ReactNode 
}

const Screen = ({title, subtitle, children}: Props) => {
  return (

    <div>
        <Navigation/>

        <main className="pt-16 pb-12 px-4 min-h-screen bg-white">
            
            {title && subtitle && (
            <div className="mx-auto mt-3 p-3 my-auto">
                <h1 className="text-2xl font-bold capitalize text-blue-600">{title}</h1>
                <p className="capitalize">{subtitle}</p>
            </div>
            )}

            <div className={(title && subtitle) ? 'p-3 mt-2': 'p-3 mt-10 my-auto'}>
                {children}
            </div>
        </main>

        <Footer/>
    </div>
  )
}

export default Screen
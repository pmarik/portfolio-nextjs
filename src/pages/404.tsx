import Nav from '@/components/organisms/Nav/Nav.component'

 function Custom404() {


    return (
    <>
        <Nav classNames='bg-dark-gradient' baseUrl=".."/>
        <main className="flex min-h-screen flex-col items-center justify-between">
        <div className=" px-6 md:px-10 lg:px-20 max-w-maximum min-w-minimum">
          <h1 className="text-slate-900 mt-40 text-center text-2xl">404 - Page Not Found</h1> 
          <p className="text-slate-950 text-center">Please return home, or send a message about this error.</p>  
        </div>
        </main>
    
     </>
    )
  }

  
  export default Custom404
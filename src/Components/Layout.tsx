import React from 'react'

interface LayoutProps {
    header: any;
    sidebar: any;

}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className= "ui__page" >
        <header className="ui__page__header" > { props.header } </header>
            <section className = "ui__page__view" >
                <aside className="ui__page__sidebar" > { props.sidebar } </aside>
                    <main className = "ui__page__content" >
                        { props.children }
                        </main>
                        </section>
                        </div>
    )
}

export default Layout
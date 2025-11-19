const Navbar = ()=>{
    return(
        <>
            <header>
                <div id="brand-logo">
                    <Link to="/">🐧</Link>
                </div>
                <nav>
                    <Link to="/sign-in"> Sign in</Link>
                    <Link to="/sign-up"> Sign up </Link>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
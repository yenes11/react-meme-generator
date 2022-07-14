import logo from '../images/troll-logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt='logo' />
            <span className='title'>Meme Generator</span>
        </header>
    )
}

export default Header;
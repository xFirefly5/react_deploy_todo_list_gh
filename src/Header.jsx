import { FaPaperclip } from "react-icons/fa";

function Header({title="Todo List"}) {
    return (
        <header className='Header'>
            <h1> <FaPaperclip /> {title}</h1>
        </header>
    )
};

export default Header
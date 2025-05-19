import './header.css';

const Header = () =>{

    const liItems = [
        {
            id:1,
            item:'home'
        },
        {
            id:2,
            item:'about'
        },
        {
            id:3,
            item:'skills'
        },
        {
            id:4,
            item:'projects'
        },
        {
            id:5,
            item:'interview'
        },
    ]

    return(
        <>
            <div className='mainHeader-div'>
                <div className='header-div'>
                    <ul>
                        {liItems.map((item)=> (
                            <li key={item.id}>{item.item.toUpperCase()}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
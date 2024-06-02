import style from './header.module.css';
import Button from '@mui/material/Button';

function Header() {

    return <>
        <div className={style.wrapper}>
            <Button style ={{color:'black', font: '400 16px Inter'}} variant="text">Sign In</Button>
            <Button style ={{color:'black', font: '400 16px Inter'}} variant="text">Sign up</Button>

    
        </div>
    </>
}
export default Header
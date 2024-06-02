import Header from '../../Component/Header/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './reg.module.css'
import { Link } from 'react-router-dom';

function Reg() {
    return <>
        <Header />
        <div className={style.wrapper}>
            <h1>Welcome, let's create an account</h1>
            <p>Create an account to keep track of your customers, and contributors.
                Once your account has been created then don’t forget to verify your
                account through mail.</p>

            <div className={style.name_surname}>
                <TextField className={style.name} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField className={style.surname} id="outlined-basic" label="Your surname" variant="outlined" />
            </div>
            <>
                <TextField className={style.email_pwd} id="outlined-basic" label="Your emali" variant="outlined" />
            </>
            <>
                <TextField className={style.email_pwd} id="outlined-basic" label="Your password & Must be at least 8 characters." variant="outlined" />
            </>
            <div className={style.button}>
                <Button variant="contained">Continue</Button>
            </div>
            <div className={style.link}>
                <p>Already registered?
                    <Link to={'/'}> Sign In</Link>
                </p>
            </div>
        </div >
    </>
}
export default Reg;
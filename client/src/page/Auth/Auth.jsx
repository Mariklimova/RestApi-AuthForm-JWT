import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './auth.module.css'
function Auth() {
    return <>
        <div className={style.wrapper}>
            <h1>Sign In</h1>
            <p>Log in to access your account or create one. Verify your email for seamless access.</p>

            <div>
                <TextField  className = {style.email_pwd} id="outlined-basic" label="Your emali" variant="outlined" />
            </div>
            <div>
                <TextField className = {style.email_pwd} id="outlined-basic" label="password & Must be at least 8 characters." variant="outlined"  />
            </div>
            <div className = {style.button}>
            <Button variant="contained">Continue</Button>
            </div>
            <div className={style.link}>
            <p>Not registered yet? Sign Up</p>
            </div>
        </div>
    </>
}
export default Auth;
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './auth.module.css'
function Auth() {
    return <>
        <div className={style.wrapper}>
            <h1>Sign In</h1>
            <p>Log in to access your account or create one. Verify your email for seamless access.</p>

            <div>

                <TextField  className = {style.textField} id="outlined-basic" label="Your emali" variant="outlined" />
            </div>
            <div>
                <TextField className = {style.textField} id="outlined-basic" label="password & Must be at least 8 characters." variant="outlined"  />
            </div>
            <div>
                <Button variant="contained">Continue</Button>
            </div>
            <p>Not registered yet? Sign Up</p>
        </div>
    </>
}
export default Auth;
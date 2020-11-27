import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import { CheckBox } from '@material-ui/icons';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    email: 'Email',
    signIn: 'Sign In',
    password: 'password',
    rememberMe: 'Remember Me',
  },
  french: {
    email: 'Email',
    signIn: 'Se Connecter',
    password: 'mot de passe',
    rememberMe: 'Souviens-toi de moi',
  },
  spanish: {
    email: 'Correo Electrónico',
    signIn: 'registrarse',
    password: 'Contraseña',
    rememberMe: 'Recuérdame',
  },
};

function Form(props) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { email, signIn, password, rememberMe } = words[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography variant='h5'>Sign In</Typography>
        <Select value={language} onChange={toggleLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French </MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus></Input>
          </FormControl>
          <FormControlLabel
            control={<CheckBox color='primary' />}
            label={rememberMe}
            className={classes.label}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);

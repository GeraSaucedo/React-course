import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es requerido.'],
}

export const RegisterPage = () => {

   const [formSubbmitted, setFormSubbmitted] = useState(false);

    const { 
      formState, displayName, email, password, onInputChange,
      isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm({
        email: 'gerardo@gmail.com',
        password: '123456',
        displayName: 'Gerardo Saucedo'
    }, formValidations)

    

    const onSubmit = (event) => {
      event.preventDefault();
      setFormSubbmitted(true);
    }

    return (
        <AuthLayout title='Registro' >

        <h1>Form Valid: { isFormValid ? 'valido' : 'incorrecto' }</h1>

        <form onSubmit={onSubmit} >

           <Grid container>

           <Grid item xs={ 12 } sx={{mt: 2}}>
                 <TextField 
                   label="Nombre completo" 
                   type="text" 
                   placeholder='Jhon Doe' 
                   fullWidth
                   name='displayName'
                   value={ displayName }
                   onChange={ onInputChange}
                   error={ !!displayNameValid && formSubbmitted }
                   helperText={ displayNameValid  }
                 />
             </Grid>

             <Grid item xs={ 12 } sx={{mt: 2}}>
                 <TextField 
                   label="Correo" 
                   type="email" 
                   placeholder='correo@google.com' 
                   fullWidth
                   name='email'
                   value={ email }
                   onChange={ onInputChange}
                   error={ !!emailValid && formSubbmitted }
                   helperText={ emailValid }
                 />
             </Grid>

             <Grid item xs={ 12 } sx={{mt: 2}}>
                 <TextField 
                   label="Contraseña" 
                   type="password" 
                   placeholder='correo@google.com' 
                   fullWidth
                   name='password'
                   value={ password }
                   onChange={ onInputChange}
                   error={ !!passwordValid && formSubbmitted }
                   helperText={ passwordValid  }
                 />
             </Grid>

             <Grid 
               container 
               spacing={2}
               sx={{mb: 2, mt: 1}}
             >
                 <Grid item xs={12} sx={{ mb: 2}}>
                     <Button variant='contained' fullWidth type='submit'>
                       Crear cuenta
                     </Button>
                 </Grid>
                 
                 <Grid container direction='row' justifyContent='end'>
                     <Typography sx={{ mr: 1 }} >Ya tienes una cuenta?</Typography>
                     <Link component={ RouterLink } color='inherit' to='/auth/register'>
                       Crear una cuenta
                     </Link>
                 </Grid>

             </Grid>

           </Grid>

           </form>
        </AuthLayout>
    );
}

import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

export const RegisterPage = () => {

    const { displayName, email, password, onInputChange, formState } = useForm({
        email: 'gerardo@gmail.com',
        password: '123456',
        displayName: 'Gerardo Saucedo'
    })

    const onSubmit = (event) => {
      event.preventDefault();
        console.log(formState);
    }

    return (
        <AuthLayout title='Registro' >
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

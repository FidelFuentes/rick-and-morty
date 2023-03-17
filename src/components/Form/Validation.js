

const validate= (userData,setErrors,errors) => {

   if(!userData.username){
        setErrors({ ...errors,
            username: 'EL EMAIL ESTA VACIO'
        })
    } else if(userData.username.length > 35){
        setErrors({ ...errors,
        username: 'CONTIENE DEMASIADOS CARACTERES'})
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)){
        setErrors(
            { ...errors,
            username:'EL EMAIL ES INVALIDO'}
        )
    } else {
        setErrors(
            { ...errors,
            username:""}
        )
    }
   
    if(userData.password.length < 6 || userData.password.length>10){
        setErrors({...errors,
        password:'Debe tener entre 6 y 10 caracteres'})
    } else if(!/\d/.test(userData.password)){

        setErrors(
            { ...errors,
            password:"Debe tener al menos un numero"}
        )

    }else{
        setErrors({...errors,
            password:''})
    }
}

export default validate
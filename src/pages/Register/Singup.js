import React from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom'
// import { history } from '../Routes';
import RegisterForm from './container/RegisterForm';
import useAxios from '../../util/axiosCall'

const Singup = () => {
  const [{ res, isLoading, errors }, setConfig] = useAxios('http://backend.borjamediavilla.com/api/v1/auth/register');


    const onRegister = (name, email, password) => {
        console.log({ name, email, password })
        setConfig({
          method: 'post',
          data: { name, email, password },
          crossdomain: true
      
    })
        // axios({
        //     url: 'http://backend.borjamediavilla.com/api/v1/auth/register',
        //     method: 'post',
        //     data: { name, email, password },
        //     crossdomain: true
        // })
        //     .then(res => {
        //         if (res.status === 201) {
        //             const { msg } = res;
        //             console.log(msg)
        //             history.replace('/login')
        //         } else {
        //             console.log(res)
        //             const error = new Error(res.errors);
        //             throw error;
        //         }
        //     })
        //     .catch(e => { console.error(e) })
    }

    React.useEffect(() => {
      if(res){
        console.log(res.data)
      }
    }, [res])

    return (
        <React.Fragment>
            <RegisterForm onSubmit={onRegister} />
            <Link to='/entra'>Ingresa</Link>
            {isLoading&&<p>loading</p>}
            {errors.lenght>0&&errors.map((error, id)=><p key={id}>{error.msg}</p>)}
        </React.Fragment>
    )
}

export default Singup

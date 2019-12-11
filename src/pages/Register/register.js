import React, { useState } from 'react';
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import Logo from '../../components/Logo/logo'
import Input from '../../components/Input/input'
import Button from '../../components/Button/button'


import './register.scss';

export default function Register(props) {
    const [form, setForm] = useState({})
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);



    async function onRegister() {
        if(form.password !== form.passwordConfirm){
            alert("Por favor, confirme a senha corretamente")
        } else {
            try {
                // await firebase.register(name, email, password)
                await firebase.register(form)
                props.history.replace("/")
            } catch (error) {
                alert(error.message)
            }
        }
    }

    async function changeForm (event) {
        await setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        await console.log(form)
    }

    function changeStep () {
        if(firstStep) {
            setFirstStep(false)
            setSecondStep(true)
            return
        } else if(secondStep) {
            setSecondStep(false)
            setFirstStep(true)
        }
    }

    return (

        <section className="containerRegister">
            <Logo width="125px"/>
            <form onSubmit={e => e.preventDefault() && false}>
                { firstStep ?
                    (<>
                        <span className="step">1/2</span>
                        <Link to="/login"><i className="material-icons navegate">navigate_before</i></Link>
                        <Input id="name" type="text" name="name" placeholder="Nome" autoComplete="off" autoFocus={true} onChange={e => changeForm(e)} />
                        <Input id="age" type="text" name="age" placeholder="Idade" autoComplete="off" onChange={e => changeForm(e)} />
                        <Input id="datebirth" type="text" name="datebirth" placeholder="Data de Nascimento" autoComplete="off" onChange={e => changeForm(e)} />
                        <Input id="adress" type="text" name="adress" placeholder="Endereço" autoComplete="off" onChange={e => changeForm(e)} />

                        <Button 
                            type="submit" 
                            onClick={() => changeStep()}
                            >Próximo</Button>
                    </>
                    ) : null
                }
                { secondStep ? 
                    (<>
                        <span className="step">2/2</span>
                        <i onClick={() => changeStep()} className="material-icons navegate">navigate_before</i>
                        <Input id="email" type="email" name="email" placeholder="Email" autoComplete="off" onChange={e => changeForm(e)} />
                        <Input id="password" type="password" name="password" placeholder="Senha" icon="visibility_off" autoComplete="off" onChange={e => changeForm(e)} />
                        <Input id="passwordConfirm" type="password" name="passwordConfirm" placeholder="Confirmar Senha" icon="visibility_off" autoComplete="off" onChange={e => changeForm(e)}  />

                        <Button 
                            type="submit" 
                            onClick={onRegister} 
                            >Cadastrar</Button>
                    </>) : null
                }

            </form>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </section>
    );
}

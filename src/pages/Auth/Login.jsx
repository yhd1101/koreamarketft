import React from 'react';
import { Link } from 'react-router-dom'
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthImageContainer from "../../components/ui/AuthImageContainer";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import {FcGoogle} from "react-icons/fc";


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setError,
        clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm({
        defaultValues: {
            name : "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
            <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
                <div className="mb-14 flex-col items-center text-center">
                    <h2 className="mb-2 text-3xl font-bold">Get started</h2>
                    <p className="text-slate-500">Create your account now.</p>
                </div>
                <div className="flex flex-col items-center">
                    <form className="flex w-full max-w-sm flex-col" onSubmit={onSubmit}>
                        <Input
                            {...register('email', {
                                required: 'Please provide an email.',
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message:
                                        'Please providew a properly formatted email address.',
                                },
                            })}
                            error={errors.email?.message}
                            ariaInvalid={isDirty}
                            labelText="Email"
                            type="email"
                            className="mb-3"
                            autofocus
                            autocomplete="on"
                        />

                        <Input
                            {...register('password', {
                                required: 'Please provide a password.',
                                minLength: {
                                    value: 6,
                                    message: 'Password needs to be between 6 to 20 characters.',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Password needs to be between 6 to 20 characters.',
                                },
                            })}
                            error={errors.password?.message}
                            ariaInvalid={isDirty}
                            labelText="Password"
                            type="password"
                            className="mb-3"
                            autocomplete="off"
                        />


                        <Button
                            text="Login"
                            disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
                        />
                    </form>
                    <Button
                        text={"Sign with Google"}
                        icon={() => <FcGoogle className={"mr-2 text-2xl"}/> }
                        className={"mt-6 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"}
                    />
                    <div className="mt-10 text-slate-500">
                        Already have an account?
                        <Link to="/signup" className="p-2 font-semibold text-violet-500">
                            signup
                        </Link>
                    </div>
                </div>
            </div>
            <AuthImageContainer
                image={"/images/login.webp"}
                firstText={"Welcome to Shoppingworld"}
                secondText={"Login here"}
            />
        </section>
    );
};

export default Login;
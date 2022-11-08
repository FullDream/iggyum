import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Label, TextInput, Button, Spinner } from 'flowbite-react'

import { Register as RegisterForm } from 'types/auth.interface'
import { useRegisterMutation } from 'api/auth.api'
import { setCredentials } from 'features/auth/auth.slice'

export const Register = () => {
	const { register, handleSubmit } = useForm<RegisterForm>()
	const [signUp, { isLoading }] = useRegisterMutation()
	const router = useRouter()
	const dispatch = useDispatch()

	const onSubmit = async (data: RegisterForm) => {
		const res = await signUp(data).unwrap()
		dispatch(setCredentials(res.user.token))
		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<div className="md:container md:mx-auto grid gap-3 justify-center">
				<h1 className="font-bold text-4xl">Sign Up</h1>
				<Link href="login">Have an account?</Link>

				<form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
					<div>
						<Label htmlFor="username" value="Your username" />
						<TextInput required={true} {...register('username')} />
					</div>
					<div>
						<Label htmlFor="email" value="Your email" />
						<TextInput type="email" required={true} {...register('email')} />
					</div>
					<div>
						<Label htmlFor="password" value="Your password" />
						<TextInput type="password" required={true} {...register('password')} />
					</div>
					<Button className="mt-2" type="submit">
						{isLoading && <Spinner aria-label="Spinner button example" />}
						<span>Sign Up</span>
					</Button>
				</form>
			</div>
		</>
	)
}

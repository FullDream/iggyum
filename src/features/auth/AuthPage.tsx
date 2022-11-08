import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Label, TextInput, Button, Spinner } from 'flowbite-react'
import { useLoginMutation } from 'api/auth.api'
import { setCredentials } from 'features/auth/auth.slice'
import { Login as LoginForm } from 'types/auth.interface'

export const AuthPage = () => {
	const { register, handleSubmit } = useForm<LoginForm>()
	const [login, { isLoading }] = useLoginMutation()
	const router = useRouter()
	const dispatch = useDispatch()

	const onSubmit = async (data: LoginForm) => {
		try {
			const res = await login(data).unwrap()
			dispatch(setCredentials(res.user.token))
			router.push('/')
		} catch (err) {
			toast.error('email or password is invalid')
		}
	}
	return (
		<>
			<Head>
				<title>Sign In</title>
			</Head>
			<div className="md:container md:mx-auto grid gap-3 justify-center">
				<h1 className="font-bold text-4xl">Sign in</h1>
				<Link href="register">Need an account?</Link>

				<form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
					<div>
						<Label htmlFor="email" value="Your email" />
						<TextInput id="email" type="email" required={true} {...register('email')} />
					</div>
					<div>
						<Label htmlFor="password" value="Your password" />
						<TextInput id="password" type="password" required={true} {...register('password')} />
					</div>
					<Button className="mt-2" type="submit">
						{isLoading && <Spinner aria-label="Spinner button example" />}
						<span>Sign in</span>
					</Button>
				</form>
			</div>
		</>
	)
}

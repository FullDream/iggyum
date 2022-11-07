import { useLoginMutation } from 'api/auth.api'
import { setCredentials } from 'features/auth/auth.slice'
import { Label, TextInput, Button } from 'flowbite-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const router = useRouter()

	const dispatch = useDispatch()
	const [login, { isLoading, error }] = useLoginMutation()
	const onSubmit = async (data) => {
		try {
			const res = await login({ user: data }).unwrap()
			dispatch(setCredentials(res.user.token))
			router.push('/')
		} catch (err) {
			toast.error('email or password is invalid')
		}
	}
	return (
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
					Sign in
				</Button>
			</form>
		</div>
	)
}

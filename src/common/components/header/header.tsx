import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material'

const navItems = ['Home', 'Sign in', 'Sign up']

export const Header = () => {
	return (
		<AppBar component="nav" position="sticky">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					sx={{ mr: 2, display: { sm: 'none' } }}></IconButton>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
					MUI
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					{navItems.map((item) => (
						<Button key={item} sx={{ color: '#fff' }}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

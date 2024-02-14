import { Button } from '../../button'
import { Input } from '../../input'
import { Box, Stack } from '../../layout'
import { Text } from '../../text'

export const LoginForm = () => {
    return (
        <Box className="flex flex-col items-center justify-center h-screen">
            {/* Adjust height as needed for your content */}

            <Box className="bg-white border border-gray-300 rounded-xl shadow-md px-8 py-12 w-full md:w-1/2 max-w-md">
                <Stack>
                    <Text as="h2" weight={'bold'} align={'center'} size={'3xl'} className="mb-2">
                        Login
                    </Text>

                    <Text as="span" emphasis={'low'} size={'sm'} align={'center'} className="mb-8">
                        Please enter your credentials to login
                    </Text>

                    <Text as="label" htmlFor="username" size={'sm'} weight={'medium'} className="mb-1.5">
                        Username
                    </Text>
                    <Input type="text" id="username" placeholder="Username" className="mb-4" />

                    <Text as="label" htmlFor="password" size={'sm'} weight={'medium'} className="mb-1.5">
                        Password
                    </Text>
                    <Input id="password" type="password" placeholder={'Password'} />

                    <Button type="submit" variant={'solid'} className="mt-10">
                        Login
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

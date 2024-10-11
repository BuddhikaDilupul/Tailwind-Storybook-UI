import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../../../utils'
import Loading from '../loader'
const buttonStyles = cva(
    ['w-full', 'rounded-md', 'font-semibold', 'focus:outline-none', 'disabled:cursor-not-allowed'],
    {
        variants: {
            variant: {
                solid: '',
                outline: 'border-2',
                ghost: 'transition-colors duration-300'
            },
            size: {
                sm: 'px-4 py-2 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-6 py-3 text-lg'
            },
            colorscheme: {
                primary: 'text-white',
                danger: 'text-white',
                success: 'success',
                secondary: 'secondary'
            },
            isLoading: {
                true: 'cursor-not-allowed'
            }
        },
        compoundVariants: [
            {
                variant: 'solid',
                colorscheme: 'primary',
                className: 'bg-primary-500 hover:bg-primary-600'
            },
            {
                variant: 'outline',
                colorscheme: 'primary',
                className: 'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100'
            },
            {
                variant: 'ghost',
                colorscheme: 'primary',
                className: 'text-primary-600 bg-transparent hover:bg-primary-100'
            },
            {
                variant: 'solid',
                colorscheme: 'danger',
                className: 'bg-danger-dark hover:bg-danger-dark'
            },
            {
                variant: 'outline',
                colorscheme: 'danger',
                className: 'text-danger-dark border-danger-light bg-transparent hover:bg-danger-light'
            },
            {
                variant: 'ghost',
                colorscheme: 'danger',
                className: 'text-danger-dark bg-transparent hover:bg-danger-default'
            },
            {
                variant: 'solid',
                colorscheme: 'success',
                className: 'bg-success-500 hover:bg-success-100'
            },
            {
                variant: 'outline',
                colorscheme: 'success',
                className: 'text-success-00 border-success-500 bg-transparent hover:bg-success-100'
            },
            {
                variant: 'ghost',
                colorscheme: 'success',
                className: 'text-success-500 bg-transparent hover:bg-success-100'
            },
            {
                variant: 'solid',
                colorscheme: 'secondary',
                className: 'bg-secondary-500 hover:bg-secondary-100'
            },
            {
                variant: 'outline',
                colorscheme: 'secondary',
                className: 'text-secondary-00 border-secondary-500 bg-transparent hover:bg-secondary-100'
            },
            {
                variant: 'ghost',
                colorscheme: 'secondary',
                className: 'text-secondary-500 bg-transparent hover:bg-secondary-100'
            }
        ],
        defaultVariants: {
            variant: 'solid',
            size: 'md',
            colorscheme: 'primary'
        }
    }
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, colorscheme, className, isLoading, type, ...props }, ref) => {
        return (
            <button
                type={type}
                ref={ref}
                className={cn(
                    buttonStyles({
                        variant,
                        size,
                        colorscheme,
                        className
                    }),
                    // Add a conditional class for loading state
                    isLoading === true && buttonStyles({ variant, size, colorscheme, className, isLoading: true })
                )}

                // {...props}
            >
                {/* Conditionally render loader if isLoading is true */}
                {isLoading === true && <Loading />}
                {isLoading !== true && props.children}
            </button>
        )
    }
)

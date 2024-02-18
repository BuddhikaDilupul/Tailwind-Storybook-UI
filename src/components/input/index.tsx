import { cva, VariantProps } from 'class-variance-authority'
import { Field, useFormikContext } from 'formik'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../../utils'

const inputStyles = cva([
    'w-full',
    'border',
    'border-gray-200',
    'p-2',
    'rounded-lg',
    'transition-all',
    'duration-100',
    'outline-none',
    'focus:outline-primary-500 ',
    'focus:border-transparent',
    'placeholder:text-gray-400',
    'placeholder:text-sm'
])

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, className, ...props }, ref) => {
    const formik = useFormikContext()

    return (
        <Field name={name}>
            {({ field, meta }: any) => (
                <>
                    <input
                        {...field}
                        ref={ref}
                        type="text"
                        autoComplete="off"
                        className={cn(inputStyles({ className }))}
                        {...props}
                    />
                    {meta.touched && meta.error && <div className="text-red-500">{meta.error}</div>}
                </>
            )}
        </Field>
    )
})

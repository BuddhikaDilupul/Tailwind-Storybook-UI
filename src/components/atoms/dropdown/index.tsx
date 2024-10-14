import { cva, VariantProps } from 'class-variance-authority'
import { Field } from 'formik'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../../../utils'

const selectStyles = cva([
    'w-full',
    'border',
    'border-gray-200',
    'p-2',
    'rounded-lg',
    'transition-all',
    'duration-100',
    'outline-none',
    'focus:outline-primary-500',
    'focus:border-transparent',
    'placeholder:text-gray-400',
    'placeholder:text-sm'
])

type SelectProps = ComponentProps<'select'> & VariantProps<typeof selectStyles>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ name, className, children, ...props }, ref) => {
    return (
        <Field name={name}>
            {({ field, meta }: any) => (
                <>
                    <select {...field} ref={ref} className={cn(selectStyles({ className }))} {...props}>
                        {children}
                    </select>
                    {meta.touched && meta.error && <div className="text-red-500">{meta.error}</div>}
                </>
            )}
        </Field>
    )
})

// Example usage of the Select component
// <Select name="mySelect">
//   <option value="">Select an option</option>
//   <option value="option1">Option 1</option>
//   <option value="option2">Option 2</option>
// </Select>

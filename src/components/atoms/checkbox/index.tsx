import { Field, FieldProps } from 'formik'
import { forwardRef } from 'react'
import { cn } from '../../../utils'

const checkboxStyles = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'

type CheckboxProps = {
    name: string
    label: React.ReactNode // Use React.ReactNode to allow complex labels
    className?: string
    disabled?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ name, label, className, disabled }, ref) => {
    return (
        <Field name={name}>
            {({ field, meta }: FieldProps) => (
                <div className="flex items-center mb-4">
                    <input
                        {...field}
                        ref={ref}
                        type="checkbox"
                        id={name}
                        className={cn(checkboxStyles, className)}
                        disabled={disabled}
                    />
                    <label htmlFor={name} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {label}
                    </label>
                    {meta.touched && meta.error && <div className="text-red-500">{meta.error}</div>}
                </div>
            )}
        </Field>
    )
})

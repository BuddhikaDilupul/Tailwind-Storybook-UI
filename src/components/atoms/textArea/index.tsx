import { forwardRef } from 'react'
import { cn } from '../../../utils'

// Define styles for the TextArea component
const textAreaStyles = {
    base: 'block w-full rounded-lg border p-2.5 transition-all duration-100',
    sizes: {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg'
    },
    emphasis: {
        low: 'text-gray-600 font-light',
        normal: 'text-gray-900'
    },
    background: {
        light: 'bg-gray-50',
        dark: 'bg-gray-700'
    }
}

// Define the props for the TextArea component
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: keyof typeof textAreaStyles.sizes
    emphasis?: keyof typeof textAreaStyles.emphasis
    background?: keyof typeof textAreaStyles.background
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ size = 'base', emphasis = 'normal', background = 'light', className, ...props }, ref) => {
        const sizeClass = textAreaStyles.sizes[size]
        const emphasisClass = textAreaStyles.emphasis[emphasis]
        const backgroundClass = textAreaStyles.background[background]

        return (
            <textarea
                ref={ref}
                className={cn(textAreaStyles.base, sizeClass, emphasisClass, backgroundClass, className)}
                {...props}
            />
        )
    }
)

export default TextArea

// Example usage of TextArea component
// <TextArea
//   rows={4}
//   placeholder="Leave a comment..."
//   emphasis="low"
//   size="sm"
//   background="light"
// />

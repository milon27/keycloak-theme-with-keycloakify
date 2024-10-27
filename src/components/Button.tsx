type TypeVariant = "outline" | "link" | "primary";

const bgStyles = {
    primary: "bg-primary-500",
    link: "",
    outline: "border border-gray-500"
};
const textStyles = {
    primary: "text-gray-100 text-body",
    link: "text-gray-800 text-body",
    outline: "text-gray-800 text-body"
};

interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
    title: React.ReactNode;
    leftIcon?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: TypeVariant;
}

export default function Button({
    title,
    onClick,
    leftIcon,
    href,
    variant = "outline",
    ...props
}: IButton) {
    if (href) {
        return (
            <a
                className={`flex justify-between items-center text-center w-full  p-2.5 rounded-md !no-underline ${
                    bgStyles[variant]
                }`}
                href={href}
            >
                <span>{leftIcon ? leftIcon : ""}</span>
                <span className="flex-1 font-semibold text-primary-800 text-body">
                    {title}
                </span>
                <span></span>
            </a>
        );
    }
    return (
        <button
            className={`flex justify-between items-center text-center w-full  p-2.5 rounded-md ${
                bgStyles[variant]
            }`}
            onClick={() => onClick && onClick()}
            {...props}
        >
            <span>{leftIcon ? leftIcon : ""}</span>
            <span className={textStyles[variant]}>{title}</span>
            <span></span>
        </button>
    );
}

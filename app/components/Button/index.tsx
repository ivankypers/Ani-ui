import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
}

const Button: React.FC<ButtonProps> = ({ title = 'Кнопка', ...props }) => {
    return (
        <button {...props} className={styles.button}>
            {title}
        </button>
    );
};
    
export default Button;
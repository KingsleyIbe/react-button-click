const Button = ({title, type, style}) => {
    return (
        <button type={type} className={style} >{title}</button>
    );
};

module.exports = Button;

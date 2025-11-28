
const Button = ({ backgroundColor, type, hover, setValue }) => {

  const style = `
    button
    ${backgroundColor}
    ${hover}
  `;

  function execute() {

    if (type === 'AC') {
      setValue('0');
      return;
    }

    if (type === '=') {
      setValue(previous => {
        return String(eval(previous));
      });

      return;
    }

    setValue(previous => {
      if (previous === '0') {
        return type;
      }

      return previous + type;
    });
  }


  return (
    <>
      <button
        className={style}
        onClick={execute}
      >{type}</button>
    </>
  );
}

export default Button;
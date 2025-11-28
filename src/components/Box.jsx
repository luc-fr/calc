
const Box = ({ children, display, colums, gap, padding }) => {

  const style = `
    ${display}
    ${colums}
    ${gap}
    ${padding}
  `;

  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
}

export default Box;

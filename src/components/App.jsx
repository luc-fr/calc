import Box from './Box.jsx';
import Display from './Display.jsx';
import Digit from './Digit.jsx';
import Button from './Button.jsx';

const App = () => {

  const style = `

  `;

  return (
    <>
      <Box>
        <Display>
          <Digit />
        </Display>
        <Box>
          <Button />
          <Button />
          <Button />
          <Button />
        </Box>
      </Box>
    </>
  );
}

export default App;

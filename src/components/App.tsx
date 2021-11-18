import svgTest from '~/resources/images/test.svg';
import reactIcon from '~/resources/images/react-icon.png';

const App = () => (
  <div className='wrap'>
    <h1>react example</h1>
    <div className='container'>
      <img src={svgTest} alt='svg test' width={100} />
      <img src={reactIcon} alt='react icon' />
      <div>content</div>
    </div>
  </div>
);

export default App;

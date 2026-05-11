import { useNavigate } from 'react-router-dom'
import { setLanguage } from '../services/settings';
import Button from './auxiliary/Button'
import { getLanguage } from '../services/settings';
import { getHeaderText } from '../text/header';
import type { HeaderText } from '../text/header';
interface HeaderBarProps {
    // You can add props here if needed in the future
    removeReturnToTop?: boolean; // Example prop to conditionally remove the "About" button
}
function HeaderBar(props: HeaderBarProps) {
  const { removeReturnToTop } = props;
  const returnToTopStyle = removeReturnToTop ? ' invisible ' : '';

  const headerText: HeaderText = getHeaderText(getLanguage());
  const navigate = useNavigate()

  const returnToTop = () => {
    navigate('/')
  }
  const goToPublications = () => {
    navigate('/publications')
  }
  const goToCV = () => {
    navigate('/cv')
  }

  return (
    <div className='flex flex-row items-center justify-between py-4 pl-10 pr-3 w-full'>
        <div className={returnToTopStyle}>
          <Button onClick={returnToTop} style='HeaderBar' noTextPaddings={true}>
            {headerText.name}
          </Button>
        </div>
        <div className='flex flex-row items-center justify-between gap-3'>
            <div className='flex flex-row items-center gap-0'>
              <Button onClick={returnToTop} style='HeaderBar' noTextPaddings={true}>{headerText.about}</Button>
              <Button onClick={goToPublications} style='HeaderBar' noTextPaddings={true}>{headerText.publications}</Button>
              <Button onClick={goToCV} style='HeaderBar' noTextPaddings={true}>{headerText.cv}</Button>
            </div>
            <div className='flex flex-row items-center gap-0'>
                <Button onClick={() => setLanguage('en')} style='HeaderBar-language' noTextPaddings={true}>EN</Button>
                <span className='text-sm '>|</span>
                <Button onClick={() => setLanguage('jp')} style='HeaderBar-language' noTextPaddings={true}>JP</Button> 
            </div>
            
        </div>
        

    </div>
  )
}

export default HeaderBar;
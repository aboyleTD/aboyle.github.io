import { useNavigate } from 'react-router-dom'
import Button from './auxiliary/Button'
function HeaderBar() {
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
    <div className='flex flex-row items-center justify-between py-4 px-10 '>
        <Button onClick={returnToTop} style='HeaderBar' noTextPaddings={true}>
        Alan Boyle
        </Button>
        <div className='flex flex-row items-center gap-2'>
            <Button onClick={returnToTop} style='HeaderBar' noTextPaddings={true}>About</Button>
            <Button onClick={goToPublications} style='HeaderBar' noTextPaddings={true}>Publications</Button>
            <Button onClick={goToCV} style='HeaderBar' noTextPaddings={true}>CV</Button>
        </div>

    </div>
  )
}

export default HeaderBar;
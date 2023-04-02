import { MoonIcon, SunIcon } from '~/partials/integrations/assets/icons'
import { useChangeTheme } from './hooks'

const ChangeTheme = () => {
  const { handleClick, theme } = useChangeTheme()

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      <ul>
        <li>
          theme: 
          {' '}
          {theme}
        </li>
        <li>
          {theme === 'light'
            ? <SunIcon />
            : <MoonIcon />}
        </li>
      </ul>
    </button>

  ) 
}

export default ChangeTheme

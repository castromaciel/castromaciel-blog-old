import type { FC } from 'react'
import { Back, DocumentIcon, Folder, SunIcon } from './icons'

interface Props {
  type: string
}

const Icon: FC<Props> = ({
type = 'folder'
}) => {
  switch (type) {
    case 'document':
      return <DocumentIcon />

    case 'folder':
      return <Folder />

    case 'back':
      return <Back />
  
    default:
      return <SunIcon />
  }
}

export default Icon
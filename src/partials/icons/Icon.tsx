import type { FC } from 'react'
import { Back, DocumentIcon, Folder, RSSIcon, SunIcon } from './icons'

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
    
    case 'rss':
      return <RSSIcon />
  
    default:
      return <SunIcon />
  }
}

export default Icon
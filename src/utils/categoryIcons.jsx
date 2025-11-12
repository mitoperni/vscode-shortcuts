import {
  Star,
  Zap,
  Edit,
  Navigation,
  FileSearch,
  MousePointer,
  Code,
  FolderOpen,
  Eye,
  Bug,
  Terminal,
  ClipboardList
} from 'lucide-react'

// Category icons mapping
const categoryIconsMap = {
  all: ClipboardList,
  favorites: Star,
  essentials: Zap,
  editing: Edit,
  navigation: Navigation,
  search: FileSearch,
  multicursor: MousePointer,
  code: Code,
  files: FolderOpen,
  display: Eye,
  debug: Bug,
  terminal: Terminal
}

// Get category icon component
export const getCategoryIcon = (category, size = 14) => {
  const IconComponent = categoryIconsMap[category] || ClipboardList
  return <IconComponent size={size} />
}

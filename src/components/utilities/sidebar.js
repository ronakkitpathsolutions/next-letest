import { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { isDesktop } from '../../utils/helper'

const useSidebar = () => {
    const [open, setOpen] = useState(true)
    const { width } = useWindowSize()

    useEffect(() => {
        setOpen(isDesktop(width))
    },[width])

    const handleClose = () => setOpen(prev => !prev)

  return {open, handleClose}
}

export default useSidebar
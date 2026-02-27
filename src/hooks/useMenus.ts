import { menuActions } from "../store/menuSlice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { useCallback, useEffect } from "react"

export function useMenus() {
    const dispatch = useAppDispatch()
    const menuList = useAppSelector((state) => state.menu.menuList)

    const reloadMenus = useCallback(async () => {
        try {
            const response = await fetch('/api/list-menu')
            if (!response.ok) {
                throw new Error('Failed to fetch menus')
            }
            const data = await response.json()
            dispatch(menuActions.setMenuList(data))
        }
        catch (error) {
            console.error('Error fetching menus', error)
        }
    }, [dispatch])
    
    useEffect(() => {
        reloadMenus()
    }, [reloadMenus])

    return { menuList, reloadMenus }
}
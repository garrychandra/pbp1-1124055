import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router"


const MenuListPage = lazy(() => import('../pages/MenuList'))
const TambahMenuPage = lazy(() => import('../pages/TambahMenu'))
const EditMenuPage = lazy(() => import('../pages/EditMenu'))
const MenuDetailPage = lazy(() => import('../pages/DetailMenu'))

export const AppRoutes = () => {


  return <Routes>
    <Route path='/' element={<Navigate to = "menu-list" /> } />
    <Route path='/menu-list' element={<MenuListPage />} />
    <Route path='/tambah-menu' element={<TambahMenuPage />} />
    <Route path='/edit-menu/:id' element={<EditMenuPage />} />
    <Route path='/menu/:id' element={<MenuDetailPage />} />
  </Routes>
}
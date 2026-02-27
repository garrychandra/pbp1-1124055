import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Menu } from "../types";

export type MenuState = {
    menuList: Menu[],
}

const initialState: MenuState = {
    menuList: [],
}

export const menuSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMenuList: (state, action: PayloadAction<Menu[] | undefined>) => {
        state.menuList = action.payload || [];
    },
}
})

export const menuActions = menuSlice.actions
export const menuReducer = menuSlice.reducer
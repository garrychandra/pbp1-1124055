import { Toolbar, AppBar, Button, Box, Stack, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";

export function Layout(prps: PropsWithChildren) {

  return <Stack>
    <AppBar position="static">
      <Toolbar>
        <Box display='flex' alignItems='center' justifyContent="space-between" flexGrow={1}>
            <Box />
        <Box display='flex' alignItems='center' gap={2}>
              <Button color="inherit" style={{color: 'black'}} component={Link} to='/tambah-menu'>Tambah Menu</Button>
              <Button color="inherit" style={{color: 'black'}} component={Link} to='/menu-list'>List Menu</Button>

        </Box>
        </Box>
      </Toolbar>
    </AppBar>
    {prps.children}
  </Stack>
}
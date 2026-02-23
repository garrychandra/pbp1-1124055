import { useCallback, useEffect, useState } from "react";
import type { Menu } from "../types.ts"

import { Container, Box, Grid, Card, CardActionArea, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function MenuList() {
    const [menus, setMenus ] = useState<Menu[]>([]);
    const navigate = useNavigate();

    const reloadMenu = useCallback(async () => {
            const response = await fetch('http://localhost:5173/api/list-menu', {method: 'GET'});
            if(response.status !== 200){
                alert("Failed to fetch menu");
                return;
            }
            const data = await response.json();
            console.log(data);
            setMenus(data);
        }, []);

    const deleteMenu = async (menuId: String) => {
        try {
        const response = await fetch(`http://localhost:5173/api/delete-menu/${menuId}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            alert("berhasil delete")
            reloadMenu();
        } else {
            console.error('Failed to delete menu');
        }
        } catch (error) {
        console.error('Error deleting menu:', error);
        }
    }

    useEffect(() => {
        reloadMenu();
    },[reloadMenu])

    return (
        <Container maxWidth={false} sx={{ width: '100%' }}>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid container spacing={2}>
            {menus.map((menu: Menu) => (
                <Grid key={menu.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea sx={{ flexGrow: 1 }} onClick={() => navigate(`/menu/${menu.id}`)}>
                            <CardContent>
                            <Typography 
                                gutterBottom 
                                variant="h5" 
                                component="div"
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {menu.nama}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'text.secondary',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {menu.deskripsi}
                            </Typography>
                                <Button variant="contained" color="error" onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/edit-menu/${menu.id}`)
                                    }}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="error" onClick={(e) => {
                                    e.stopPropagation();
                                    deleteMenu(menu.id);
                                    }}>
                                    Delete
                                </Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            </Grid>
            </Box>



        </Container>
    )

    

}
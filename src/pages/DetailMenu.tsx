import { useState, useEffect } from "react";
import type { Menu } from "../types";
import { useNavigate, useParams } from "react-router";
import { Button } from "@mui/material";

export default function DetailMenu() {
    const { id } = useParams();
    const [menus, setMenus ] = useState<Menu>();
    const navigate = useNavigate();

    const fetchMenu = async () => {
                    try {
                    const response = await fetch(`http://localhost:5173/api/menu/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch menu');
                    }
                    const data = await response.json();
                    setMenus(data)
                } catch (error) {
                    console.error('Error fetching Menu', error);
                }
            }
    
    useEffect(() => {
        fetchMenu();
    },[])

    const back = () => {
        navigate(-1);
    }

    return (
        <div>

            Nama: {menus?.nama}<br />
            Deskripsi: {menus?.deskripsi} <br />
            Harga: {menus?.harga} <br />
            Size: {menus?.size} <br />
            Label: {menus?.label} <br />
            Kategori: {menus?.kategori} <br />
            <Button onClick={back}>Back</Button>
        </div>
    )

        
    
}
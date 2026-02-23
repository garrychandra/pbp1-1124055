import { Title } from "@mui/icons-material";
import { Container, Stack, Box, Paper, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function TambahMenu() {
    const { id } = useParams();
    const [nama, setNama] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [harga, setHarga] = useState('')
    const [size, setSize] = useState<string>('')
    const [label, setLabel] = useState<string>('')
    const [kategori, setKategori] = useState<string>()

    const simpan = async() => {
        const menu = JSON.stringify({
            nama: nama,
            deskripsi: deskripsi,
            harga: harga,
            size: size,
            label: label,
            kategori: kategori
        })
        console.log(menu);
        const response = await fetch(`http://localhost:5173/api/update-menu/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: menu,
        });
        if (response.ok) {
            alert("berhasil update")
        }
    }

    const fetchMenu = async () => {
                    try {
                    const response = await fetch(`http://localhost:5173/api/menu/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch menu');
                    }
                    const data = await response.json();
                    setNama(data.nama)
                    setDeskripsi(data.deskripsi)
                    setHarga(data.harga)
                    setSize(data.size)
                    setLabel(data.label)
                    setKategori(data.kategori)
                } catch (error) {
                    console.error('Error fetching Menu', error);
                }
            }
    
    useEffect(() => {
        fetchMenu();
    },[])
    

    


    return <Container>
        <Stack alignItems='center' height='100%'>
        <Box p={2} width='100%'>
            <Paper >
            <Stack p={2} gap={2} alignItems='center'>
                <h1>Tambah Menu</h1>
                <TextField id="outlined-basic" label="Nama Menu" variant="outlined" placeholder='Nama Menu' value={nama} onChange={(e) => setNama(e.target.value)}/>
                <TextField id="outlined-basic" label="Deskripsi" variant="outlined" placeholder='Deskripsi' value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}/>
                <TextField id="outlined-basic" label="Harga" variant="outlined" type="number" placeholder='Harga' value={harga} onChange={(e) => setHarga(e.target.value)}/>
                Size
                <select onChange={(e) => {
                    setSize(e.target.value);
                }} value={size}>
                    <option value="small">small</option>
                    <option value="large">large</option>
                    <option value="medium">medium</option>
                </select>
                Label
                <select onChange={(e) => {
                    setLabel(e.target.value);
                }} value={label} >
                    <option value="vegan">vegan</option>
                    <option value="gluten_free">gluten_free</option>
                    <option value="halal">halal</option>
                    <option value="low_cal">low_cal</option>
                </select>
                Kategori
                <select onChange={(e) => {
                    setKategori(e.target.value);
                }} value={kategori}>
                    <option value="makanan">makanan</option>
                    <option value="minuman">minuman</option>
                </select>

                <Button onClick={simpan}>Update Menu</Button> 
            </Stack>
            </Paper>
        </Box>
        </Stack>
    </Container>
}
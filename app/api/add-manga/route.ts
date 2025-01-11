import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Walidacja danych
        if (!body.name || !body.stan || !body.img) {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
        }

        // Ścieżka do pliku JSON
        const filePath = path.join(process.cwd(), 'public', 'manga.json');

        // Odczyt danych
        const fileData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];

        // Dodanie nowego wpisu
        const newEntry = {
            id: fileData.length + 1,
            ...body,
        };
        const updatedData = [...fileData, newEntry];

        // Zapis do pliku
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');

        return NextResponse.json({ message: 'Manga added successfully', newEntry });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

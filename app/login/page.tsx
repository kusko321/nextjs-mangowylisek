'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password === '123') {
            // ustawiamy ciasteczko z odpowiednimi parametrami
            document.cookie = `auth=1; path=/; max-age=86400; secure; samesite=strict`
            console.log(document.cookie)  // Zobacz, czy ciasteczko jest ustawione
            router.push('/wiktoria')
        } else {
            alert('Niepoprawne hasło!')
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Zaloguj się</h1>
            <input
                type="password"
                className="text-neutral-950"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hasło"
            />
            <button type="submit">Zaloguj</button>
        </form>
    )
}
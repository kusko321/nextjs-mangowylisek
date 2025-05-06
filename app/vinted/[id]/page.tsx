import { use } from 'react';

type Props = {
    params: {
        id: string;
    };
};

export default function ProduktPage({ params }: Props) {
    return (
        <div className="text-white">
            <h1>Produkt ID: {params.id}</h1>
        </div>
    );
}
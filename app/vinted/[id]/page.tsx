

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
        <div>
            ID z URL: {id}
        </div>
    );
}
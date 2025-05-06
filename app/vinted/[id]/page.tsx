type Props = {
    params: {
        id: string;
    };
};

export default function Page({ params }: Props) {
    return <div>ID z URL: {params.id}</div>;
}
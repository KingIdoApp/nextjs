import { useRouter } from 'next/router'

export default function Person() {
    const { query } = useRouter()
    return (
        <>
            <h3>{JSON.stringify(query)}</h3>
        </>
    )
}
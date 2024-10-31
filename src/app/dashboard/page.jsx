"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr'

const Dashboard = () => {

    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [err, setErr] = useState(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true);
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    //         {
    //             cache: 'no-store',
    //         });

    //         if(!res.ok){
    //             setIsLoading(false);
    //             setErr(true);
    //         }
    //         const data = await res.json();
    //         setData(data);
    //         setIsLoading(false);
    //     }

    //     getData();
    // },[]);

    const session = useSession();
    const router = useRouter();

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            router.push('/dashboard/login');
        }
    }, [session.status, router]);

    if(session.status === 'loading'){
        return <div>Loading...</div>
    }

    if(session.status === "authenticated"){
        return (
            <div>Dashboard</div>
        )
    }
}

export default Dashboard
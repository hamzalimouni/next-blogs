"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
import Image from 'next/image';

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
    const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const image = e.target[2].value;
        const content = e.target[3].value;
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    
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
            <div className={styles.container}>
                <div className={styles.posts}>
                    {data?.map((post) => (
                        <div key={post?._id} className={styles.post}>
                            <div className={styles.imgContainer}>
                                <Image src={post?.img} alt='' />
                            </div>
                            <h2 className={styles.postTitle}>{post?.title}</h2>
                            <span className={styles.delete}>X</span>
                        </div>
                    ))}
                </div>
                <form className={styles.new}>
                    <h2>Add new post</h2>
                    <input type="text" placeholder='Title' className={styles.input} />
                    <input type="text" placeholder='Description' className={styles.input} />
                    <input type="text" placeholder='Image' className={styles.input} />
                    <input type="text" placeholder='Title' className={styles.input} />
                    <textarea className={styles.textarea} placeholder='Content'></textarea>
                    <button type='submit' className={styles.button}>Send</button>
                </form>
            </div>
        )
    }
}

export default Dashboard
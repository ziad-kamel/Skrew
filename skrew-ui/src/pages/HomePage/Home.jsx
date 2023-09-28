
import React, { useEffect, useState } from 'react';
import useGetAll from '../../Hooks/useGetAll';

export default function Home() {
    const [beData, setBeData] = useState([]);
    const getAll = useGetAll();
    const URL = '/api';

    useEffect(() => {
        getAll(URL).then((data) => {
            setBeData(data);
        })
    }, []);



    return (
    <div>hji</div>
  )
}

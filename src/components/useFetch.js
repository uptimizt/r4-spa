import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => {
                setData(data);

            });

    });
    return data;
}
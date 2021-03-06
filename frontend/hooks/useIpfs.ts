import { useState, useEffect } from 'react'

export default function useIpfs(url?: string) {
  if (!url) {return {ipfsData: ''}}
  const [loading, setLoading] = useState<boolean>(false);
  const [ipfsData, setIpfsData] = useState<string>('');

  useEffect(() => {
    getIpfsData();
  }, [])

  const getIpfsData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const { image } = await res.json();
      setIpfsData(image);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return {
    loading,
    ipfsData,
  }
}

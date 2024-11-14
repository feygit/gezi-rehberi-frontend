import { useState, useEffect } from "react";
import axios from "axios";
import { Scaling } from "lucide-react";
export default function City({ cityName }) {
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(
          `https://turistik-yerler.vercel.app/yer?il=${cityName}`
        );

        setCityData(response.data.data);
        console.log(response.data);
      } catch (error) {
        setError("hata oluştu");
        console.log(error);
      } finally {
        setLoading(false); 
      }

      if (loading) return <p>loading..</p>;
      if (error) return <p>{error}</p>;
    };

    fetchCityData();
  }, [cityName]);
  return (
    <div dir="ltr" style={{
        marginLeft:"300px",
        marginTop:"20px"
    }}>
      <h2>Şehrin Adı {cityName}</h2>
      {cityData ? (
        <div >
          <p>Sıcaklık: {cityData.sicaklik}</p>
          <p>Hissedilen: {cityData.gibiGorunuyor}</p>
          <p>Basınç: {cityData.basinc}</p>
          <p>Nemlilik: {cityData.nem}</p>
          <img src={cityData.icon} alt="" />
        </div>
      ) : (
        <p>Aradığnız şehirin bilgisi mevcut değil</p>
      )}

     
    </div>
  );
}

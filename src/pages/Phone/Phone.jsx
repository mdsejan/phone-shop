import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState();

  const params = useParams();
  const { id } = params;

  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  return (
    <div>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;

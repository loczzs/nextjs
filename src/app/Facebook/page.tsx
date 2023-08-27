"use client";
// ý nghĩa của use client là client sẽ render các sự kiện được xử lý ở client vd hàm handleBtn
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebookpage = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };

  return (
    <div>
      Facebookpage
      <div>
        <Button variant="success">
          <h1>mjadoado</h1>
        </Button>
        <button onClick={() => handleBtn()}>back home</button>
      </div>
    </div>
  );
};

export default Facebookpage;

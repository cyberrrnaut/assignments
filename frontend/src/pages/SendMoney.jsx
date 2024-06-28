import { Avatar } from "../components/Avatar";
import { InputBox } from "../components/InputBox";
import { GreenButton } from "../components/GreenButton";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Popup from "../components/Popup"; // Import Popup component

export const SendMoney = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleTransfer = async () => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/v1/account/transfer", {
        to: id,
        amount: amount,
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      setLoading(false);
      setShowPopup(true); // Show popup
      
      setTimeout(() => {
        
        setShowPopup(false); // Hide popup after 5 seconds
        navigate("/dashboard");
      }, 5000);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-160 h-160 p-2 h-max px-4 shadow-xl">
          <div className="text-center pb-10 pt-3">
            <span className="font-bold text-3xl pl-4 pt-3">
              Send Money
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex pb-4">
              <Avatar name={"S"} textColor="text-white" bgColor="bg-green-500" />
              <span className="font-bold text-3xl pl-4 pt-3">
                {name}
              </span>
            </div>
            <div className="pb-2">
              <InputBox
                onChange={(e) => setAmount(e.target.value)}
                label={`Amount(in Rs)`}
                placeholder={"Enter amount"}
                type={"number"}
              />
            </div>

            <GreenButton
              onClick={handleTransfer}
              label={loading ? "Processing Transfer" : "Initiate Transfer"}
            />

          </div>
        </div>
      </div>

      {showPopup && (
        <Popup
          message={`Money Transferred Successfully! `}
         
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

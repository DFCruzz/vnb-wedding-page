"use client"
import React, { useState } from "react";
import axios from "axios";

const AttendanceForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendeeNumber, setAttendeeNumber] = useState("");
  const [eventType, setEventType] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      subject: `${fullName} - Confirmação de Presença`,
      to: "diegofcruzz@gmail.com",
      from: `diegojogoseafins@gmail.com`,
      bodyText: `Nome: ${fullName}\nTelefone: ${phone}\nEmail: ${email}\nQuantas pessoas irão: ${attendeeNumber}\nEm qual evento você irá comparecer? ${eventType}`,
    };

    try {
      const response = await axios.post(
        "https://api.elasticemail.com/v2/email/send",
        emailData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-ElasticEmail-ApiKey": process.env.EMAIL_API_KEY,
          },
        }
      );

      if (response.data.success) {
        alert("Email sent successfully");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setFullName("");
    setPhone("");
    setEmail("");
    setAttendeeNumber("");
    setEventType("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-6">
        <input
          type="text"
          name="floating_full_name"
          id="floating_full_name"
          className="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
          placeholder=" "
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label
          htmlFor="floating_full_name"
          className="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
        >
          Nome
        </label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="floating_phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
          placeholder=" "
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label
          htmlFor="floating_phone"
          className="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
        >
          Telefone:
        </label>
      </div>
      <div className="mb-6">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label
          htmlFor="floating_email"
          className="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
        >
          Email:
        </label>
      </div>
      <div className="mb-6">
        <select
          id="floating_attendees"
          value={attendeeNumber}
          onChange={(e) => setAttendeeNumber(parseInt(e.target.value))}
          className="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
          required
        >
          <option value="">Selecione</option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <label
          htmlFor="floating_attendees"
          className="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
        >
          Quantas pessoas irão?
        </label>
      </div>
      <div className="mb-6">
        <select
          id="floating_event"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
          required
        >
          <option value="">Selecione</option>
          <option value="Casamento Civil">Casamento Civil</option>
          <option value="Almoço de Celebração">Almoço de Celebração</option>
          <option value="Ambos">Ambos</option>
        </select>
        <label
          htmlFor="floating_event"
          className="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
        >
          Em qual evento você irá comparecer?
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-[#859f7e] hover:bg-lime-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-64 sm:w-auto px-5 py-2.5 text-center"
      >
        Confirmar Presença
      </button>
    </form>
  );
};

export default AttendanceForm;

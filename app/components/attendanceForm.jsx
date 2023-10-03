"use client"
import React, { useState } from "react";
const ElasticEmail = require('@elasticemail/elasticemail-client');
import dotenv from 'dotenv'

dotenv.config()

const AttendanceForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendeeNumber, setAttendeeNumber] = useState("");
  const [eventType, setEventType] = useState("");

  const EmailApiKey = process.env.NEXT_PUBLIC_EMAIL_API;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const client = ElasticEmail.ApiClient.instance;
    const apikey = client.authentications['apikey'];
    apikey.apiKey = EmailApiKey;
    
    const emailsApi = new ElasticEmail.EmailsApi();
    const emailData = {
      Recipients: [
        {
          Email: "diegofcruzz@gmail.com",
          Fields: {
            name: `${fullName}`
          }
        }
      ],
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: `<p><strong>Mensagem de ${fullName} sobre seu comparecimento no evento</strong></p>
                      <p>Nome: ${fullName}</p>
                      <p>Telefone: ${phone}</p>
                      <p>Email: ${email}</p>
                      <p>Quantas pessoas irão:</p>
                      <p><strong>${attendeeNumber}</strong></p>
                      <p>Em qual evento você irá comparecer?</p>
                      <p><strong>${eventType}</strong></p>`,
          },
          {
            ContentType: "PlainText",
            Charset: "utf-8",
            Content: `Hi {name}!\n
                      Nome: ${fullName}\n
                      Telefone: ${phone}\n
                      Email: ${email}\n
                      Quantas pessoas irão: ${attendeeNumber}\n
                      Em qual evento você irá comparecer? ${eventType}`,
          },
        ],
        From: "diegojogoseafins@gmail.com",
        Subject: `${fullName} - Confirmação de Presença`,
      },
    };

    const callback = (error, data, response) => {
      if (error) {
          console.error(error);
          alert("Falha ao enviar o formulário, tente novamente")
      } else {
          console.log('API called successfully.');
          console.log('Email sent.');
          alert("Formulário enviado com sucesso")
      }
  };
  emailsApi.emailsPost(emailData, callback);

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

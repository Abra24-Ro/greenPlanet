const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const AUTH_TOKEN =
  "Basic NTg2NTc5MTU6dGVzdHBhc3N3b3JkX3NMOUxyeUhtb2VOTG90RnhOSzFFRDZhVFZzNXZ3N05JZnNLMTJEWmJYMXdIbQ=="; // Usuario:Contraseña (Base64)
const API_URL =
  "https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePaymentOrder";

// Ruta para iniciar el pago
app.post("/payment/init", async (req, res) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        amount: 180, // Monto en céntimos (1.80 PEN)
        currency: "PEN",
        customer: {
          email: "cliente@example.com",
        },
        orderId: `pedido-${Date.now()}`,
      },
      {
        headers: {
          Authorization: AUTH_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    const paymentURL = response.data.answer.paymentURL;
    res.json({ paymentURL });
  } catch (error) {
    console.error(
      "Error al crear la orden de pago:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Error al procesar el pago" });
  }
});

// Servidor corriendo
app.listen(3000, () => {
  console.log("Servidor backend corriendo en el puerto 3000");
});

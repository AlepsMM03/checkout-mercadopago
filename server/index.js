import express from "express";
import cors from "cors";
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'ACCCES TOKEN' });


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor corriendo exitosamente");
});

app.post("/create_preference", async (req, res) => {
    try{
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "MXN",
                },
            ],
            back_urls: {
                success: "https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/155_check_ok_sticker_success-512.png",
                failure: "https://www.pngegg.com/es/png-xbgll",
                pending: "https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/pending-clock-icon.png",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({ id: result.id });

    } catch (error){
         console.error(error);
            res.status(500).json({ message: "Internal server error" });

    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto: ${port}`);
})
// Alejandro Montes https://github.com/AlepsMM03